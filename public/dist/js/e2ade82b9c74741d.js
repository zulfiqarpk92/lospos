"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60],{5060:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});const s={middleware:"auth",props:{customerId:{type:[String,Number],default:0}},data:function(){return{totalItems:0,loading:!0,options:{},headers:[{text:"ID",value:"id"},{text:"Date",value:"saleTime"},{text:"Customer",value:"customer"},{text:"Qty",value:"totalQty"},{text:"Total",value:"totalAmount"},{text:"Balance",value:"balance"},{text:"Created At",value:"createdAt"},{text:"Actions",value:"actions",sortable:!1}],items:[],searchText:"",customer:0}},computed:{visibleHeaders:function(){var t=[];return this.customerId&&t.push("customer"),this.headers.filter((function(e){return!t.includes(e.value)}))}},watch:{options:{handler:function(){this.loadData()},deep:!0}},mounted:function(){this.customerId&&(this.customer=this.customerId)},methods:{selectCustomer:function(t){this.customer=t.id||0,this.loadData()},loadData:function(){var t=this;this.loading=!0;var e=this.options,a=e.sortBy,s=e.sortDesc,n=e.page,o=e.itemsPerPage;this.$http.get("/api/sales?per_page=".concat(o,"&page=").concat(n,"&orderBy=").concat(a,"&orderDesc=").concat(s,"&q=").concat(this.searchText,"&customer=").concat(this.customer)).then((function(e){var a=e.data,s=a.meta,n=a.data;t.totalItems=s&&s.total,t.items=n||[],t.loading=!1})).catch((function(e){t.totalItems=0,t.loading=!1,e.response&&e.response.data&&t.$set(t.form,"errorMessage",e.response.data.message),console.log(e)}))},deleteSale:function(t){var e=this;this.$confirm.fire({icon:"warning",title:"Delete Confirm",text:"Are you sure you want to delete this sale?",showCloseButton:!0,showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then((function(a){a.isConfirmed&&e.$http.delete("/api/sales/".concat(t.id)).then((function(t){var a=t.data;e.$store.dispatch("snackbar/showMessage",a.message),e.loadData()}))}))}}};const n=(0,a(1900).Z)(s,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{rounded:"lg"}},[e("v-card-title",[t._v("Sales")]),t._v(" "),e("v-card-text",{staticClass:"d-flex align-center flex-wrap"},[e("v-text-field",{staticClass:"search-input me-3",attrs:{dense:"","hide-details":"",placeholder:"Search"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loadData.apply(null,arguments)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),t._v(" "),t.customerId?t._e():e("user-lookup",{staticClass:"search-input me-3",attrs:{"user-type":"Customer"},on:{selected:t.selectCustomer}}),t._v(" "),e("v-spacer"),t._v(" "),e("div",{staticClass:"d-flex align-center flex-wrap"},[e("v-btn",{attrs:{color:"primary",to:{name:"sales.add"}}},[e("v-icon",[t._v("\n          mdi-plus\n        ")]),t._v("\n        New Sale\n      ")],1)],1)],1),t._v(" "),e("v-data-table",{attrs:{headers:t.visibleHeaders,items:t.items,options:t.options,"server-items-length":t.totalItems,loading:t.loading,"item-key":"name"},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.customer",fn:function(e){var a,s,n=e.item;return[t._v("\n      "+t._s(null===(a=n.customer)||void 0===a?void 0:a.id)+" -- "+t._s(null===(s=n.customer)||void 0===s?void 0:s.name)+"\n    ")]}},{key:"item.total_amount",fn:function(e){var a=e.item;return[t._v("\n      "+t._s(t._f("currency")(a.total_amount))+"\n    ")]}},{key:"item.actions",fn:function(a){var s=a.item;return[e("v-icon",{attrs:{small:""},on:{click:function(e){return t.$router.push({name:"sales.view",params:{saleId:s.id}})}}},[t._v("\n        mdi-eye\n      ")]),t._v(" "),e("v-icon",{attrs:{small:""},on:{click:function(e){return t.$router.push({name:"sales.edit",params:{saleId:s.id}})}}},[t._v("\n        mdi-pencil\n      ")]),t._v(" "),e("v-icon",{attrs:{small:"",color:"red"},on:{click:function(e){return t.deleteSale(s)}}},[t._v("\n        mdi-delete\n      ")])]}}])})],1)}),[],!1,null,"8530a902",null).exports}}]);