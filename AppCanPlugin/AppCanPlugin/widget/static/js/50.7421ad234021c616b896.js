webpackJsonp([50],{F241:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("yrgR"),i=s("NYxO"),n=s("g5qz"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},o=(a.a,l({},Object(i.b)("login",["userId"])),l({},Object(i.c)("selectPerson",["set_personList"]),{runEvent:function(e){this.deleteLabel(e.id)},inLabel:function(e){sessionStorage.setItem("selLabelTitle",e.name),sessionStorage.setItem("selLabelId",e.id),this.set_personList({}),this.$router.push({name:"addNewLabel"})},deleteLabel:function(e){var t=this;n.a.getRequest(e,"deleteLabel").then(function(e){t.$vux.loading.hide(),t.getLabelList()}).catch(function(e){t.$vux.loading.hide(),console.log(e)})},addNewLabel:function(){sessionStorage.removeItem("selLabelTitle"),sessionStorage.removeItem("selLabelId"),this.set_personList({}),this.$router.push({name:"addNewLabel"})},refresh:function(){this.queryParams.pageNo=1,this.getLabelList()},getLabelList:function(){var e=this,t=e.queryParams;t.userId=e.userId.userId,n.a.postRequest(t,"labellist").then(function(t){e.$vux.loading.hide(),e.showLabel(t.data.labelList)}).catch(function(t){e.$vux.loading.hide(),console.log(t)})},showLabel:function(e){var t=e.map(function(e,t){return{name:e.labelName,id:e.id,userId:e.userId}});this.labelList=t}}),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}),r={components:{person:a.a},data:function(){return{labelList:[],queryParams:{pageSize:20,pageNo:1}}},computed:o({},Object(i.b)("login",["userId"])),methods:o({},Object(i.c)("selectPerson",["set_personList"]),{runEvent:function(e){this.deleteLabel(e.id)},inLabel:function(e){sessionStorage.setItem("selLabelTitle",e.name),sessionStorage.setItem("selLabelId",e.id),this.set_personList({}),this.$router.push({name:"addNewLabel"})},deleteLabel:function(e){var t=this;n.a.getRequest(e,"deleteLabel").then(function(e){t.$vux.loading.hide(),t.getLabelList()}).catch(function(e){t.$vux.loading.hide(),console.log(e)})},addNewLabel:function(){sessionStorage.removeItem("selLabelTitle"),sessionStorage.removeItem("selLabelId"),this.set_personList({}),this.$router.push({name:"addNewLabel"})},refresh:function(){this.queryParams.pageNo=1,this.getLabelList()},getLabelList:function(){var e=this,t=e.queryParams;t.userId=e.userId.userId,n.a.postRequest(t,"labellist").then(function(t){e.$vux.loading.hide(),e.showLabel(t.data.labelList)}).catch(function(t){e.$vux.loading.hide(),console.log(t)})},showLabel:function(e){var t=e.map(function(e,t){return{name:e.labelName,id:e.id,userId:e.userId}});this.labelList=t}}),mounted:function(){this.getLabelList()}},c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{height:"100%"}},[s("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px","body-padding-bottom":"0"}},[s("x-header",{staticClass:"allHeader",attrs:{slot:"header"},slot:"header"},[e._v("标签")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.labelList.length>0,expression:"labelList.length>0"}]},[s("group",{attrs:{gutter:"0"}},[s("cell",{staticClass:"fc1c9ce3",nativeOn:{click:function(t){return e.addNewLabel(t)}}},[s("div",{attrs:{slot:"title"},slot:"title"},[e._v("新建标签")]),e._v(" "),s("span",{staticClass:"pr22",attrs:{slot:"icon"},slot:"icon"},[s("i",{staticClass:"iconfont fontSize"},[e._v("")])])])],1),e._v(" "),s("person",{staticClass:"noBorder",attrs:{list:e.labelList,type:"labelList"},on:{delperson:e.runEvent,clickFn:e.inLabel}})],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.labelList.length<=0,expression:"labelList.length<=0"}],staticStyle:{height:"100%"}},[s("div",{staticClass:"ub ub-ac ub-pc ub-ver c-ffP",staticStyle:{padding:"0 1rem",height:"100%"}},[s("div",{staticClass:"fc3c3"},[e._v("暂无标签")]),e._v(" "),s("div",{staticClass:"font24 fc999",staticStyle:{"margin-top":"2rem","margin-bottom":"2rem"}},[e._v("通过标签你可以方便查找和管理联系人")]),e._v(" "),s("x-button",{staticStyle:{"background-color":"#1c9ce3"},attrs:{type:"primary"},nativeOn:{click:function(t){return e.addNewLabel(t)}}},[e._v("新建标签")])],1)])],1)],1)},u=[],d={render:c,staticRenderFns:u},b=d,h=s("VU/8"),v=h(r,b,!1,null,null,null);t.default=v.exports}});