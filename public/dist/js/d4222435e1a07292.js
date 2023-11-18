"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{7866:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const n={middleware:"auth",data:function(){return{totalEmployees:0,loading:!0,options:{},headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Created At",value:"created_at"},{text:"Actions",value:"actions",sortable:!1}],employees:[],searchText:""}},watch:{options:{handler:function(){this.loadData()},deep:!0}},mounted:function(){this.loadData()},methods:{loadData:function(){var e=this;this.loading=!0;var t=this.options,a=t.sortBy,n=t.sortDesc,o=t.page,s=t.itemsPerPage;this.$http.get("/api/employees?per_page=".concat(s,"&page=").concat(o,"&orderBy=").concat(a,"&orderDesc=").concat(n,"&q=").concat(this.searchText)).then((function(t){var a=t.data,n=a.meta,o=a.data;e.totalEmployees=n&&n.total,e.employees=o||[],e.loading=!1})).catch((function(t){e.totalEmployees=0,e.loading=!1,t.response&&t.response.data&&e.$set(e.form,"errorMessage",t.response.data.message),console.log(t)}))},deleteEmployee:function(e){var t=this;this.$confirm.fire({icon:"warning",title:"Delete Confirm",text:"Are you sure you want to delete this customer?",showCloseButton:!0,showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then((function(a){a.isConfirmed&&t.$http.delete("/api/employees/".concat(e.id)).then((function(e){var a=e.data;t.$store.dispatch("snackbar/showMessage",a.message),t.loadData()}))}))}}};const o=(0,a(1900).Z)(n,(function(){var e=this,t=e._self._c;return t("v-card",{attrs:{rounded:"lg"}},[t("v-card-title",[e._v("Employees")]),e._v(" "),t("v-card-text",{staticClass:"d-flex align-center flex-wrap pb-0"},[t("v-text-field",{staticClass:"search-input me-3 mb-4",attrs:{outlined:"",dense:"","hide-details":"",placeholder:"Search"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loadData.apply(null,arguments)}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),e._v(" "),t("v-spacer"),e._v(" "),t("div",{staticClass:"d-flex align-center flex-wrap"},[t("v-btn",{staticClass:"me-3 mb-4",attrs:{color:"primary",to:{name:"employees.add"}}},[t("v-icon",[e._v("\n          mdi-plus\n        ")]),e._v("\n        Add Employee\n      ")],1)],1)],1),e._v(" "),t("v-data-table",{attrs:{headers:e.headers,items:e.employees,options:e.options,"server-items-length":e.totalEmployees,loading:e.loading,"item-key":"name"},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.actions",fn:function(a){var n=a.item;return[t("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.$router.push({name:"employees.edit",params:{employeeId:n.id}})}}},[e._v("\n        mdi-pencil\n      ")]),e._v(" "),t("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteEmployee(n)}}},[e._v("\n        mdi-delete\n      ")])]}}])})],1)}),[],!1,null,"e72abfca",null).exports}}]);