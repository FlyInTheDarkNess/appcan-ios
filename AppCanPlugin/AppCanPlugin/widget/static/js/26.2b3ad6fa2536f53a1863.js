webpackJsonp([26],{EPyl:function(t,e,n){var a=n("njDg");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("484e3648",a,!0,{})},dmyJ:function(t,e,n){"use strict";function a(t){n("EPyl")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("NYxO"),o=n("aTeQ"),i=n("2sLL"),r=n("f1Vj"),u=n.n(r),c=n("g5qz"),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},d=(o.a,i.a,l({},Object(s.b)(["device"])),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}),h={components:{XSwitch:o.a,XButton:i.a},computed:d({},Object(s.b)(["device"])),data:function(){return{handPass:!1}},mounted:function(){var t=u.a.val("switchFlag");this.handPass="1"===t},methods:{back:function(){this.$router.push({name:"mine"})},showLoading:function(){this.$vux.loading.show({text:"加载中"})},hideLoading:function(){this.$vux.loading.hide()},remindToast:function(t,e){this.$vux.toast.show({type:"text",text:e,time:2e3})},cbLogout:function(t,e,n){if(n=JSON.parse(n),"ok"===n.status||"0"===n.ret){u.a.clear("appLoginStatus"),u.a.val("switchFlag","-1");try{uexFingerpalm.logOut()}catch(t){console.log(t)}this.$router.push({path:"/login"})}else this.remindToast("warn","退出失败")},onEnter:function(){var t={boundStatus:"false"};uexEMM.cbLogout=this.cbLogout,uexEMM.logout(JSON.stringify(t))},PassChange:function(){var t=this;t.handPass?(uexGestureUnlock.cbIsGestureCodeSet=function(e){if(!JSON.parse(e).result){uexGestureUnlock.cbCreate=function(e){JSON.parse(e).isFinished?u.a.val("switchFlag","1"):t.handPass=!1};var n={isNeedVerifyBeforeCreate:!1};c.a.setConfigGusture(),uexGestureUnlock.create(JSON.stringify(n))}},uexGestureUnlock.isGestureCodeSet()):(u.a.val("switchFlag","-1"),uexGestureUnlock.resetGestureCode())},handPassChange:function(){this.$router.push({path:"/handClear"})}},beforeRouteEnter:function(t,e,n){n(function(t){})}},g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px"}},[n("x-header",{staticClass:"allHeader",attrs:{slot:"header","left-options":{preventGoBack:!0}},on:{"on-click-back":t.back},slot:"header"},[t._v("安全设置")]),t._v(" "),n("group",{attrs:{title:"手势密码"}},[n("x-switch",{attrs:{title:"开启手势密码"},on:{"on-change":t.PassChange},model:{value:t.handPass,callback:function(e){t.handPass=e},expression:"handPass"}}),t._v(" "),n("cell",{directives:[{name:"show",rawName:"v-show",value:t.handPass,expression:"handPass"}],attrs:{title:"修改手势密码","is-link":""},nativeOn:{click:function(e){return t.handPassChange(e)}}})],1),t._v(" "),n("group",[n("cell",{attrs:{title:"密码设置",value:"已设置","is-link":"",link:"/changePsw"}})],1),t._v(" "),n("div",{staticClass:"loginOutBox"},[n("x-button",{staticClass:"loginOutbtn",attrs:{type:"primary"},nativeOn:{click:function(e){return t.onEnter(e)}}},[t._v(" 安全退出 ")])],1)],1)],1)},f=[],p={render:g,staticRenderFns:f},v=p,b=n("VU/8"),x=a,m=b(h,v,!1,x,"data-v-74609a50",null);e.default=m.exports},njDg:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.loginOutBox[data-v-74609a50] {\n  padding-left: 3.28125rem;\n  padding-right: 3.28125rem;\n  padding-top: 1.875rem;\n}\n.loginOutbtn[data-v-74609a50] {\n  background-color: #1998df;\n  border-radius: 2rem;\n}\n.weui-cells[data-v-74609a50] {\n  margin-top: 0.625rem !important;\n}\n.weui-cells__title + .weui-cells[data-v-74609a50] {\n  margin-top: 0rem !important;\n}\n",""])}});