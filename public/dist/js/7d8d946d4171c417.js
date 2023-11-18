"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[167,712,964],{3668:(t,e,s)=>{s.d(e,{Z:()=>r});const a={props:["label","value","errorMessage"],data:function(){return{popupModal:!1,currentValue:this.value}},watch:{value:function(t,e){t!==e&&(this.currentValue=t)}},methods:{handleInput:function(){this.$emit("input",this.currentValue),this.popupModal=!1}}};const r=(0,s(1900).Z)(a,(function(){var t=this,e=t._self._c;return e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,r=s.attrs;return[e("v-text-field",t._g(t._b({attrs:{"error-messages":t.errorMessage,label:t.label,"prepend-icon":"mdi-calendar",readonly:""},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},"v-text-field",r,!1),a))]}}]),model:{value:t.popupModal,callback:function(e){t.popupModal=e},expression:"popupModal"}},[t._v(" "),e("v-date-picker",{attrs:{scrollable:""},on:{input:t.handleInput},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}})],1)}),[],!1,null,null,null).exports},167:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var a=s(5714),r=s(1712),n=s(4964);function i(t,e){var s="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!s){if(Array.isArray(t)||(s=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){s&&(t=s);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i=!0,o=!1;return{s:function(){s=s.call(t)},n:function(){var t=s.next();return i=t.done,t},e:function(t){o=!0,n=t},f:function(){try{i||null==s.return||s.return()}finally{if(o)throw n}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}const o={name:"EditPurchase",components:{DatePicker:s(3668).Z,InvoiceItems:r.default,ItemLookup:n.default},middleware:"auth",props:{purchaseId:{type:String,default:""}},data:function(){return{loading:!1,purchase:new a.ZP({id:0,supplier:null,supplierId:0,purchaseTime:"",purchaseItems:[],comments:"",discountAmount:0,amountPaid:0})}},computed:{invoiceTotal:function(){try{return this.purchase.purchaseItems.reduce((function(t,e){return t+parseFloat(e.purchasePrice*e.quantity)}),0)}catch(t){return 0}}},watch:{},mounted:function(){this.purchaseId&&this.loadData()},methods:{loadData:function(){var t=this;this.loading=!0,this.$http.get("/api/purchases/"+this.purchaseId).then((function(e){var s=e.data;t.purchase.reset(),t.purchase.fill(s.data),t.purchase.supplierId=s.data.supplier.id,t.purchase.purchaseItems=s.data.items,t.loading=!1})).catch((function(e){console.log(e),t.loading=!1}))},selectCustomer:function(t){var e=t.id;this.purchase.supplier=t,this.purchase.supplierId=e||0},addItem:function(t){var e,s=!1,a=i(this.purchase.purchaseItems);try{for(a.s();!(e=a.n()).done;){var r=e.value;r.itemId===t.id&&(r.quantity+=1,s=!0)}}catch(t){a.e(t)}finally{a.f()}if(!s){var n,c=this.purchase.purchaseItems.length+1;this.purchase.purchaseItems.push({id:"temp-"+c,itemId:t.id,itemName:t.item_name,purchasePrice:parseFloat(null!==(n=t.cost_price)&&void 0!==n?n:0),quantity:1})}},handleItemRemoved:function(t){this.purchase.purchaseItems=this.purchase.purchaseItems.filter((function(e){return e.id!==t}))},updateInvoice:function(){var t=this;this.purchase.put("/api/purchases/"+this.purchaseId).then((function(e){var s;e=e.data,t.$store.dispatch("snackbar/showMessage",null!==(s=e.message)&&void 0!==s?s:"Purchase updated"),t.loadData(),t.$router.push({name:"purchases"})})).catch((function(e){e.response&&e.response.data&&t.$set(t.purchase,"errorMessage",e.response.data.message);var s=document.getElementById("error-component");s&&s.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),console.log(e)}))}}};const l=(0,s(1900).Z)(o,(function(){var t=this,e=t._self._c;return e("v-row",[e("v-col",{attrs:{cols:"12",md:"9"}},[e("v-card",[e("v-card-text",{staticClass:"py-9 px-8"},[e("form-alert",{attrs:{id:"error-component",form:t.purchase}}),t._v(" "),e("div",{staticClass:"d-flex flex-wrap justify-space-between flex-column flex-sm-row"},[e("div",{staticClass:"mb-8 mb-sm-0"},[e("div",{staticClass:"d-flex align-center mb-6"},[e("v-img",{attrs:{"lazy-src":"https://picsum.photos/id/11/10/6","max-height":"30","max-width":"30",src:"https://picsum.photos/id/11/500/300"}}),t._v(" "),e("span",{staticClass:"text--primary font-weight-bold text-xl ml-6"},[t._v(" "+t._s(t.$settings.company)+" ")])],1),t._v(" "),e("div",{staticClass:"d-block"},[t._v("\n              "+t._s(t.$settings.address)+"\n            ")]),t._v(" "),e("div",{staticClass:"d-block"},[e("strong",[t._v("Phone: ")]),t._v(t._s(t.$settings.phone)+"\n            ")]),t._v(" "),e("div",{staticClass:"d-block"},[e("strong",[t._v("Email: ")]),t._v(t._s(t.$settings.email)+"\n            ")]),t._v(" "),e("div",{staticClass:"d-block"},[e("strong",[t._v("Website: ")]),t._v(t._s(t.$settings.website)+"\n            ")])]),t._v(" "),e("div",[e("p",{staticClass:"font-weight-medium text-xl text--primary mb-4"},[t._v("\n              Purchase # "+t._s(t.purchase.id)+"\n            ")]),t._v(" "),e("p",{staticClass:"mb-2"},[e("date-picker",{attrs:{label:"Purchase Date","error-message":t.purchase.errors.get("purchaseTime")},model:{value:t.purchase.purchaseTime,callback:function(e){t.$set(t.purchase,"purchaseTime",e)},expression:"purchase.purchaseTime"}})],1),t._v(" "),e("p",{staticClass:"mb-2"},[e("user-lookup",{attrs:{"user-type":"Supplier"},on:{selected:t.selectCustomer}})],1)])])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",{staticClass:"py-9 px-8"},[e("div",{staticClass:"payment-details d-flex justify-space-between flex-wrap flex-column flex-sm-row"},[t.purchase.supplier?e("div",{staticClass:"mb-8 mb-sm-0"},[e("p",{staticClass:"font-weight-semibold payment-details-header"},[t._v("\n              Supplier:\n            ")]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v("\n              "+t._s(t.purchase.supplier.name)+"\n            ")]),t._v(" "),t.purchase.supplier.company_name?e("p",{staticClass:"mb-1"},[t._v("\n              "+t._s(t.purchase.supplier.company_name)+"\n            ")]):t._e(),t._v(" "),t.purchase.supplier.address?e("p",{staticClass:"mb-1"},[t._v("\n              "+t._s(t.purchase.supplier.address)+"\n            ")]):t._e(),t._v(" "),t.purchase.supplier.city||t.purchase.supplier.province?e("p",{staticClass:"mb-1"},[t._v("\n              "+t._s(t.purchase.supplier.city)+", "+t._s(t.purchase.supplier.province)+"\n            ")]):t._e(),t._v(" "),t.purchase.supplier.phone?e("p",{staticClass:"mb-1"},[t._v("\n              "+t._s(t.purchase.supplier.phone)+"\n            ")]):t._e(),t._v(" "),t.purchase.supplier.email?e("p",{staticClass:"mb-1"},[t._v("\n              "+t._s(t.purchase.supplier.email)+"\n            ")]):t._e()]):t._e()]),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12",md:"12"}},[e("item-lookup",{on:{selected:t.addItem}})],1)],1)],1),t._v(" "),e("invoice-items",{attrs:{"invoice-items":t.purchase.purchaseItems,edit:""},on:{itemRemoved:t.handleItemRemoved}}),t._v(" "),e("v-card-text",{staticClass:"py-9 px-8"},[e("div",{staticClass:"invoice-total d-flex justify-space-between flex-column flex-sm-row"},[e("div",{staticClass:"mb-2 mb-sm-0 mr-16 flex-grow-1"},[e("p",[e("strong",[t._v("Comments: ")])]),t._v(" "),e("v-textarea",{attrs:{outlined:"",rows:"2"},model:{value:t.purchase.comments,callback:function(e){t.$set(t.purchase,"comments",e)},expression:"purchase.comments"}})],1),t._v(" "),e("div",[e("table",[e("tr",[e("td",{staticClass:"pe-16"},[t._v("\n                  Total:\n                ")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("\n                  "+t._s(t._f("currency")(t.invoiceTotal))+"\n                ")])]),t._v(" "),e("tr",[e("td",{staticClass:"pe-16"},[t._v("\n                  Discount:\n                ")]),t._v(" "),e("th",{staticClass:"text-right"},[e("v-text-field",{attrs:{type:"number"},model:{value:t.purchase.discountAmount,callback:function(e){t.$set(t.purchase,"discountAmount",e)},expression:"purchase.discountAmount"}})],1)]),t._v(" "),e("tr",[e("td",{staticClass:"pe-16"},[t._v("\n                  Payment:\n                ")]),t._v(" "),e("th",{staticClass:"text-right"},[e("v-text-field",{attrs:{type:"number"},model:{value:t.purchase.amountPaid,callback:function(e){t.$set(t.purchase,"amountPaid",e)},expression:"purchase.amountPaid"}})],1)])]),t._v(" "),e("hr",{staticClass:"mt-4 mb-3 v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}}),t._v(" "),e("table",{staticClass:"w-full"},[e("tr",[e("td",{staticClass:"pe-16"},[t._v("\n                  Balance:\n                ")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("\n                  "+t._s(t._f("currency")(t.invoiceTotal-t.purchase.discountAmount-t.purchase.amountPaid))+"\n                ")])])])])])]),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",{staticClass:"py-9 px-8"},[e("p",{staticClass:"mb-0"},[e("span",{staticClass:"font-weight-semibold"},[t._v("Return Policy: ")]),e("span",[t._v(t._s(t.$settings.return_policy))])])])],1)],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-card",{staticClass:"invoice-options"},[e("v-card-text",[e("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"primary"},on:{click:t.loadData}},[t._v("\n          Refresh\n        ")]),t._v(" "),e("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"primary"},on:{click:t.updateInvoice}},[t._v("\n          Update\n        ")]),t._v(" "),e("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"error",to:"/sales"}},[t._v("\n          Cancel\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports},1712:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const a={props:{invoiceItems:{type:Array,default:function(){return[]}},edit:{type:Boolean,default:!1}},data:function(){return{}},watch:{},mounted:function(){},methods:{removeItem:function(t){this.$emit("itemRemoved",t)}}};const r=(0,s(1900).Z)(a,(function(){var t=this,e=t._self._c;return e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){var s,a,r,n;return[e("thead",[e("tr",[t.edit?e("th",{staticStyle:{width:"100px"}}):t._e(),t._v(" "),e("th",{staticStyle:{width:"100px"}},[t._v("\n          Item #\n        ")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",{staticStyle:{width:"100px"}},[t._v("\n          Price\n        ")]),t._v(" "),e("th",{staticStyle:{width:"100px"}},[t._v("\n          Qty\n        ")]),t._v(" "),e("th",{staticStyle:{width:"100px"}},[t._v("\n          Total\n        ")])])]),t._v(" "),e("tbody",t._l(t.invoiceItems,(function(s){return e("tr",{key:s.id,class:{"red lighten-5":s.salePrice<=s.costPrice}},[t.edit?e("td",[e("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"red"},on:{click:function(e){return t.removeItem(s.id)}}},[e("v-icon",[t._v("\n              mdi-delete\n            ")])],1)],1):t._e(),t._v(" "),e("td",[t._v(t._s(s.itemId||"-"))]),t._v(" "),e("td",[t._v(t._s(s.itemName))]),t._v(" "),e("td",[t.edit?e("v-text-field",{attrs:{type:"number"},model:{value:s.purchasePrice,callback:function(e){t.$set(s,"purchasePrice",e)},expression:"item.purchasePrice"}}):e("span",[t._v(t._s(t._f("currency")(s.purchasePrice)))])],1),t._v(" "),e("td",[t.edit?e("v-text-field",{attrs:{type:"number"},model:{value:s.quantity,callback:function(e){t.$set(s,"quantity",e)},expression:"item.quantity"}}):e("span",[t._v(t._s(t._f("showNumber")(s.quantity)))])],1),t._v(" "),e("td",[t._v(t._s(t._f("currency")(parseFloat(s.purchasePrice*s.quantity))))])])})),0),t._v(" "),t.edit?e("tfoot",[e("tr",[e("th"),t._v(" "),e("th"),t._v(" "),e("th"),t._v(" "),e("th"),t._v(" "),e("th",[t._v(t._s(t._f("showNumber")(null!==(s=null===(a=t.invoiceItems)||void 0===a?void 0:a.reduce((function(t,e){return t+parseFloat(e.quantity)}),0))&&void 0!==s?s:0)))]),t._v(" "),e("th",[t._v(t._s(t._f("currency")(null!==(r=null===(n=t.invoiceItems)||void 0===n?void 0:n.reduce((function(t,e){return t+parseFloat(e.purchasePrice*e.quantity)}),0))&&void 0!==r?r:0)))])])]):t._e()]},proxy:!0}])})}),[],!1,null,null,null).exports},4964:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const a={data:function(){return{loading:!1,invoiceItems:[],searchLoading:!1,searchItems:[],searchText:null,searchItem:null,searchDebounce:null}},watch:{searchText:function(t){var e=this;t&&(clearTimeout(this.searchDebounce),this.searchDebounce=setTimeout((function(){t&&t!==e.searchItem&&e.querySelections(t)}),350))}},methods:{querySelections:function(t){var e=this;this.searchLoading=!0,this.$http.get("/api/items/search?q="+t).then((function(t){var s=t.data;e.searchItems=s,e.searchLoading=!1}))},selectItem:function(t){this.$emit("selected",t),this.searchItem=null,this.searchText=null,this.searchItems=[]}}};const r=(0,s(1900).Z)(a,(function(){var t=this,e=t._self._c;return e("v-autocomplete",{attrs:{loading:t.searchLoading,items:t.searchItems,"search-input":t.searchText,"item-text":"item_name","item-value":"id",flat:"","hide-no-data":"","hide-details":"",clearable:"",label:"Search Item"},on:{"update:searchInput":function(e){t.searchText=e},"update:search-input":function(e){t.searchText=e}},scopedSlots:t._u([{key:"item",fn:function(s){return[e("v-list-item-content",{on:{click:function(e){return t.selectItem(s.item)}}},[e("v-list-item-title",{domProps:{innerHTML:t._s(s.item.item_name)}}),t._v(" "),e("v-list-item-subtitle",{domProps:{innerHTML:t._s(s.item.category)}})],1)]}}]),model:{value:t.searchItem,callback:function(e){t.searchItem=e},expression:"searchItem"}})}),[],!1,null,null,null).exports}}]);