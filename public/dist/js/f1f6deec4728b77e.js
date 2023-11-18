"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[426],{3668:(e,t,n)=>{n.d(t,{Z:()=>s});const a={props:["label","value","errorMessage"],data:function(){return{popupModal:!1,currentValue:this.value}},watch:{value:function(e,t){e!==t&&(this.currentValue=e)}},methods:{handleInput:function(){this.$emit("input",this.currentValue),this.popupModal=!1}}};const s=(0,n(1900).Z)(a,(function(){var e=this,t=e._self._c;return t("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var a=n.on,s=n.attrs;return[t("v-text-field",e._g(e._b({attrs:{"error-messages":e.errorMessage,label:e.label,"prepend-icon":"mdi-calendar",readonly:""},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},"v-text-field",s,!1),a))]}}]),model:{value:e.popupModal,callback:function(t){e.popupModal=t},expression:"popupModal"}},[e._v(" "),t("v-date-picker",{attrs:{scrollable:""},on:{input:e.handleInput},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})],1)}),[],!1,null,null,null).exports},2426:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(5714);const s={components:{DatePicker:n(3668).Z},props:{value:{type:Boolean,required:!0}},data:function(){return{payment:new a.ZP({userId:0,saleId:0,paymentTime:"",paymentMode:"Cash",description:"",reference:"",amount:0}),isOpen:this.value}},watch:{value:function(e,t){e!==t&&(this.isOpen=e)}},methods:{closeModal:function(){this.payment.reset(),this.payment.clear(),this.isOpen=!1,this.$emit("input",this.isOpen)},selectUser:function(e){this.payment.userId=e.id},addPayment:function(){var e=this;this.payment.post("/api/payments").then((function(t){var n;t=t.data,e.$store.dispatch("snackbar/showMessage",null!==(n=t.message)&&void 0!==n?n:"Payment created"),e.closeModal(),e.$emit("reload",!0)})).catch((function(t){t.response&&t.response.data&&e.$set(e.payment,"errorMessage",t.response.data.message);var n=document.getElementById("error-component");n&&n.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}))}}};const r=(0,n(1900).Z)(s,(function(){var e=this,t=e._self._c;return t("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"text-h5"},[e._v("Add Payment")])]),e._v(" "),t("v-card-text",[t("form-alert",{attrs:{id:"error-component",form:e.payment}}),e._v(" "),t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[t("user-lookup",{attrs:{"user-type":"User","allow-create":""},on:{selected:e.selectUser}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("date-picker",{attrs:{label:"Payment Date"},model:{value:e.payment.paymentTime,callback:function(t){e.$set(e.payment,"paymentTime",t)},expression:"payment.paymentTime"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("v-select",{attrs:{items:["Cash","Bank Transfer"],label:"Payment Date *",required:""},model:{value:e.payment.paymentMode,callback:function(t){e.$set(e.payment,"paymentMode",t)},expression:"payment.paymentMode"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Description",hint:"Enter the description for later reference.","persistent-hint":""},model:{value:e.payment.description,callback:function(t){e.$set(e.payment,"description",t)},expression:"payment.description"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Reference *",hint:"Enter the payment reference if there is any.","persistent-hint":"",required:""},model:{value:e.payment.reference,callback:function(t){e.$set(e.payment,"reference",t)},expression:"payment.reference"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Amount *",type:"number",required:""},model:{value:e.payment.amount,callback:function(t){e.$set(e.payment,"amount",t)},expression:"payment.amount"}})],1)],1)],1),e._v(" "),t("small",[e._v("* indicates required field")])],1),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeModal}},[e._v("\n        Close\n      ")]),e._v(" "),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.addPayment}},[e._v("\n        Save\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports}}]);