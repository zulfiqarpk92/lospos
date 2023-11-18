"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24],{24:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var r=s(5714);const o={components:{FormAlert:s(2177).Z},middleware:"auth",props:{customerId:{type:Number,default:0}},data:function(){return{loading:!1,nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length<=20||"Name must be less than 20 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],form:new r.ZP({name:"",email:"",phone:"",city:"",address:"",province:"",comments:""})}},mounted:function(){this.customerId&&this.loadData()},methods:{loadData:function(){var e=this;this.loading=!0,this.$http.get("/api/customers/"+this.customerId).then((function(t){var s=t.data,o=s.name,a=s.email,n=s.phone,l=s.city,m=s.address,i=s.province,c=s.comments;e.form=new r.ZP({name:o,email:a,phone:n,city:l,address:m,province:i,comments:c}),e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))},submitForm:function(){var e=this;this.customerId?this.form.put("/api/customers/"+this.customerId).then((function(t){var s=t.data;e.$store.dispatch("snackbar/showMessage",s.message),e.$router.push({name:"customers"})})).catch((function(t){t.response&&t.response.data&&e.$set(e.form,"errorMessage",t.response.data.message),console.log(t)})):this.form.post("/api/customers").then((function(t){var s=t.data;e.$store.dispatch("snackbar/showMessage",s.message),e.$router.push({name:"customers"})})).catch((function(t){t.response&&t.response.data&&e.$set(e.form,"errorMessage",t.response.data.message),console.log(t)}))}}};const a=(0,s(1900).Z)(o,(function(){var e=this,t=e._self._c;return t("v-card",{attrs:{rounded:"lg"}},[e.customerId?e._e():t("v-card-title",[e._v("\n    Add Customer\n  ")]),e._v(" "),e.customerId?t("v-card-title",[e._v("\n    Update Customer\n  ")]):e._e(),e._v(" "),t("v-card-text",[t("form-alert",{attrs:{form:e.form}}),e._v(" "),t("v-form",{staticClass:"multi-col-validation"},[t("v-row",[t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{attrs:{rules:e.nameRules,"error-messages":e.form.errors.get("name"),label:"Name",required:"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{attrs:{rules:e.emailRules,"error-messages":e.form.errors.get("email"),label:"Email",required:"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{attrs:{"error-messages":e.form.errors.get("phone"),label:"Phone",required:"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{attrs:{"error-messages":e.form.errors.get("address"),label:"Address",required:"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{attrs:{"error-messages":e.form.errors.get("city"),label:"City",required:"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{attrs:{"error-messages":e.form.errors.get("province"),label:"Province",required:"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.province,callback:function(t){e.$set(e.form,"province",t)},expression:"form.province"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-textarea",{attrs:{label:"Comments",rows:"2",outlined:""},model:{value:e.form.comments,callback:function(t){e.$set(e.form,"comments",t)},expression:"form.comments"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-btn",{attrs:{color:"primary",loading:e.form.busy,disabled:e.form.busy},on:{click:e.submitForm}},[e._v("\n            Submit\n          ")]),e._v(" "),t("v-btn",{staticClass:"mx-2",attrs:{to:{name:"customers"},type:"reset",color:"error"}},[e._v("\n            Cancel\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);