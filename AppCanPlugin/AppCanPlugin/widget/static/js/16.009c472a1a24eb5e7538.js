webpackJsonp([16],{2324:function(t,i,a){i=t.exports=a("FZ+f")(!1),i.push([t.i,"\n.typeBox[data-v-dae61690] {\n  font-size: 0.8125rem;\n  color: #c0c0c0;\n  margin-top: 0.625rem;\n}\n.content img[data-v-dae61690] {\n  width: 100%;\n}\n.myIcon[data-v-dae61690] {\n  color: #308cf5;\n}\n.tx-c[data-v-dae61690] {\n  text-align: center;\n}\n.delImg[data-v-dae61690],\n.addImg[data-v-dae61690] {\n  position: absolute;\n  top: -0.7rem;\n  right: -0.7rem;\n  display: inline-block;\n}\n.uinn[data-v-dae61690] {\n  padding: 0.4rem;\n}\n.blue[data-v-dae61690] {\n  color: #1c9ce3;\n}\n.red[data-v-dae61690] {\n  color: red;\n}\n.bor[data-v-dae61690] {\n  border: 1px solid #1c9ce3;\n  border-radius: 5px;\n}\n.ulev-1[data-v-dae61690] {\n  font-size: 0.8rem;\n}\n.title[data-v-dae61690] {\n  border-bottom: 1px solid #dddddd;\n}\n",""])},"GOv+":function(t,i,a){"use strict";function n(t){a("t257")}Object.defineProperty(i,"__esModule",{value:!0});var e=a("g5qz"),s={data:function(){return{title:"",msg:"",detail:"",isClick:!1}},components:{},watch:{},computed:{},created:function(){this.detail=JSON.parse(sessionStorage.getItem("mationDetail")),this.title=JSON.parse(sessionStorage.getItem("mationDetail")).TITLE},methods:{showLoading:function(){this.$vux.loading.show({text:"加载中"})},hideLoading:function(){this.$vux.loading.hide()},remindToast:function(t,i){this.$vux.toast.show({type:"text",text:i,time:2e3})},delFav:function(){if(!0!==this.isClick){this.isClick=!0,this.showLoading();var t=this;e.a.delCollection(t.detail.CODE).then(function(i){var a=i;0!==a.status&&"0"!==a.status||(t.hideLoading(),t.remindToast("success",a.data),t.detail.STATUS="F"),t.isClick=!1}).catch(function(i){t.isClick=!1,alert(i)})}},fav:function(){if(!0!==this.isClick){this.isClick=!0,this.showLoading();var t=this;e.a.getCollection(t.detail.CODE).then(function(i){var a=i;"0"!==a.status&&0!==a.status||(t.hideLoading(),t.remindToast("success",a.data),t.detail.STATUS="T"),t.isClick=!1}).catch(function(i){t.isClick=!1,alert(i)})}}}},o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticStyle:{height:"100%","background-color":"#fff"}},[a("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px"}},[a("div",{staticStyle:{width:"100%",position:"absolute",top:"0",right:"0","z-index":"10000","border-bottom":"1px solid #e9eaec"},attrs:{slot:"header"},slot:"header"},[a("x-header",{attrs:{"left-options":{showBack:!0}}},[t._v("\n        资讯详情\n        "),"F"===t.detail.STATUS?a("div",{attrs:{slot:"right"},on:{click:t.fav},slot:"right"},[a("i",{staticClass:"ub icon iconfont icon-del",attrs:{slot:"icon"},slot:"icon"},[t._v("")])]):a("div",{attrs:{slot:"right"},on:{click:t.delFav},slot:"right"},[a("i",{staticClass:"ub icon iconfont icon-del",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])])],1),t._v(" "),a("div",{staticClass:"ub ub-ver"},[a("div",{staticClass:"title uinn"},[a("div",{staticClass:"ub ub-ac ub-pc",staticStyle:{"font-size":"1.4rem"}},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),a("div",{staticClass:"ub ub-ac typeBox"},[a("div",{staticClass:"ub ub-f1"},[t._v(t._s(t.detail.SRC))]),t._v(" "),a("div",{staticClass:"ub"},[t._v(t._s(t.detail.PUBTIME))])])]),t._v(" "),a("div",{staticClass:"infomationContent uinn tac",staticStyle:{padding:"1rem","text-align":"center !important"},domProps:{innerHTML:t._s(t.detail.CONTENT)}})])])],1)},d=[],c={render:o,staticRenderFns:d},l=c,r=a("VU/8"),u=n,v=r(s,l,!1,u,"data-v-dae61690",null);i.default=v.exports},t257:function(t,i,a){var n=a("2324");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("bc9fa9a0",n,!0,{})}});