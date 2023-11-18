<?php

namespace App\Models;

use App\Notifications\ResetPassword;
use App\Notifications\VerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject //, MustVerifyEmail
{
  use Notifiable, HasFactory, SoftDeletes;

  const ROLE_ADMIN = 'admin';
  const ROLE_EMPLOYEE = 'employee';
  const ROLE_USER = 'user';

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'email',
    'phone',
    'city',
    'address',
    'province',
    'comments',
    'password',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
    'password' => 'hashed',
  ];

  /**
   * The accessors to append to the model's array form.
   *
   * @var array<int, string>
   */
  protected $appends = [
    'photo_url',
  ];

  /**
   * Get the profile photo URL attribute.
   *
   * @return string
   */
  public function getPhotoUrlAttribute()
  {
    return vsprintf('https://www.gravatar.com/avatar/%s.jpg?s=200&d=%s', [
      md5(strtolower($this->email)),
      $this->name ? urlencode("https://ui-avatars.com/api/$this->name") : 'mp',
    ]);
  }

  /**
   * Get the oauth providers.
   *
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function oauthProviders()
  {
    return $this->hasMany(OAuthProvider::class);
  }

  /**
   * Send the password reset notification.
   *
   * @param  string  $token
   * @return void
   */
  public function sendPasswordResetNotification($token)
  {
    $this->notify(new ResetPassword($token));
  }

  /**
   * Send the email verification notification.
   *
   * @return void
   */
  public function sendEmailVerificationNotification()
  {
    $this->notify(new VerifyEmail);
  }

  /**
   * @return int
   */
  public function getJWTIdentifier()
  {
    return $this->getKey();
  }

  /**
   * @return array
   */
  public function getJWTCustomClaims()
  {
    return [];
  }

  public function readableRole()
  {
    if ($this->role == self::ROLE_USER) {
      $roles = [];
      if ($this->is_customer) {
        $roles[] = 'Customer';
      }
      if ($this->is_supplier) {
        $roles[] = 'Supplier';
      }
      return implode(', ', $roles);
    } else {
      return ucfirst($this->role);
    }
  }

  public function sales()
  {
    return $this->hasMany(Sale::class, 'customer_id');
  }

  public function payments()
  {
    return $this->hasMany(Payment::class, 'user_id');
  }

  public function purchases()
  {
    return $this->hasMany(Purchase::class, 'supplier_id')->limit(5);
  }

  public function scopeCustomers($query, $request)
  {
    $order_column = $request->get('orderBy');
    if (!in_array($order_column, ['id', 'name', 'email', 'phone', 'created_at'])) {
      $order_column = 'id';
    }
    $search = null;
    if ($request->input('q')) {
      $search =  '%' . $request->input('q') . '%';
    }
    return $query->where('is_customer', true)
      ->when($search, function ($query, $search) {
        return $query->where(function ($query) use ($search) {
          $query->where('name', 'LIKE', '%' . $search . '%')
            ->orWhere('email', 'LIKE', '%' . $search . '%')
            ->orWhere('phone', 'LIKE', '%' . $search . '%');
        });
      })
      ->orderBy($order_column, $request->boolean('orderDesc') ? 'desc' : 'asc')
      ->paginate($request->get('per_page'));
  }

  public function scopeSuppliers($query, $request)
  {
    $order_column = $request->get('orderBy');
    if (!in_array($order_column, ['id', 'name', 'email', 'phone', 'created_at'])) {
      $order_column = 'id';
    }
    $search = null;
    if ($request->input('q')) {
      $search =  '%' . $request->input('q') . '%';
    }
    return $query->where('is_supplier', true)
      ->when($search, function ($query, $search) {
        return $query->where(function ($query) use ($search) {
          $query->where('name', 'LIKE', '%' . $search . '%')
            ->orWhere('email', 'LIKE', '%' . $search . '%')
            ->orWhere('phone', 'LIKE', '%' . $search . '%');
        });
      })
      ->orderBy($order_column, $request->boolean('orderDesc') ? 'desc' : 'asc')
      ->paginate($request->get('per_page'));
  }

  public function scopeEmployees($query, $request)
  {
    $order_column = $request->get('orderBy');
    if (!in_array($order_column, ['id', 'name', 'email', 'phone', 'created_at'])) {
      $order_column = 'id';
    }
    $search = null;
    if ($request->input('q')) {
      $search =  '%' . $request->input('q') . '%';
    }
    return $query->where('role', self::ROLE_EMPLOYEE)
      ->when($search, function ($query, $search) {
        return $query->where(function ($query) use ($search) {
          $query->where('name', 'LIKE', '%' . $search . '%')
            ->orWhere('email', 'LIKE', '%' . $search . '%')
            ->orWhere('phone', 'LIKE', '%' . $search . '%');
        });
      })
      ->orderBy($order_column, $request->boolean('orderDesc') ? 'desc' : 'asc')
      ->paginate($request->get('per_page'));
  }

  public function scopeSearch($query, $search = null, $who = 'user')
  {
    $query->select(['id', 'name']);
    switch ($who) {
      case 'customer':
        $query->where('is_customer', true);
        break;
      case 'supplier':
        $query->where('is_supplier', true);
        break;
    }
    return $query->when($search, function ($query, $search) {
      return $query->where(function ($query) use ($search) {
        $query->where('name', 'LIKE', '%' . $search . '%')
          ->orWhere('email', 'LIKE', '%' . $search . '%')
          ->orWhere('phone', 'LIKE', '%' . $search . '%');
      });
    })
      ->get();
  }
}
