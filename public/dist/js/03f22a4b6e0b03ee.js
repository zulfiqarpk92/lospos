"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[144],{6144:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});const i={props:{invoiceItems:{type:Array,default:function(){return[]}},edit:{type:Boolean,default:!1}},data:function(){return{}},watch:{},mounted:function(){},methods:{removeItem:function(t){this.$emit("itemRemoved",t)}}};const r=(0,n(1900).Z)(i,(function(){var t=this,e=t._self._c;return e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){var n,i,r,s;return[e("thead",[e("tr",[t.edit?e("th",{staticStyle:{width:"100px"}}):t._e(),t._v(" "),e("th",{staticStyle:{width:"100px"}},[t._v("\n          Item #\n        ")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",{staticStyle:{width:"100px"}},[t._v("\n          Price\n        ")]),t._v(" "),e("th",{staticStyle:{width:"100px"}},[t._v("\n          Qty\n        ")]),t._v(" "),e("th",{staticStyle:{width:"100px"}},[t._v("\n          Total\n        ")])])]),t._v(" "),e("tbody",t._l(t.invoiceItems,(function(n){return e("tr",{key:n.id,class:{"red lighten-5":n.salePrice<=n.costPrice}},[t.edit?e("td",[e("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"red"},on:{click:function(e){return t.removeItem(n.id)}}},[e("v-icon",[t._v("\n              mdi-delete\n            ")])],1)],1):t._e(),t._v(" "),e("td",[t._v(t._s(n.itemId||"-"))]),t._v(" "),e("td",[t._v(t._s(n.itemName))]),t._v(" "),e("td",[t.edit?e("v-text-field",{attrs:{type:"number"},model:{value:n.salePrice,callback:function(e){t.$set(n,"salePrice",e)},expression:"item.salePrice"}}):e("span",[t._v(t._s(t._f("currency")(n.salePrice)))])],1),t._v(" "),e("td",[t.edit?e("v-text-field",{attrs:{type:"number"},model:{value:n.quantity,callback:function(e){t.$set(n,"quantity",e)},expression:"item.quantity"}}):e("span",[t._v(t._s(t._f("showNumber")(n.quantity)))])],1),t._v(" "),e("td",[t._v(t._s(t._f("currency")(parseFloat(n.salePrice*n.quantity))))])])})),0),t._v(" "),t.edit?e("tfoot",[e("tr",[e("th"),t._v(" "),e("th"),t._v(" "),e("th"),t._v(" "),e("th"),t._v(" "),e("th",[t._v(t._s(t._f("showNumber")(null!==(n=null===(i=t.invoiceItems)||void 0===i?void 0:i.reduce((function(t,e){return t+parseFloat(e.quantity)}),0))&&void 0!==n?n:0)))]),t._v(" "),e("th",[t._v(t._s(t._f("currency")(null!==(r=null===(s=t.invoiceItems)||void 0===s?void 0:s.reduce((function(t,e){return t+parseFloat(e.salePrice*e.quantity)}),0))&&void 0!==r?r:0)))])])]):t._e()]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);