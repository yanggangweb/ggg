(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"3b07":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(o("286c")),e=o("2f62");function r(n){return n&&n.__esModule?n:{default:n}}function c(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},i=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),i.forEach(function(t){a(n,t,o[t])})}return n}function a(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}var u=function(){return o.e("components/m-input").then(o.bind(null,"fb19"))},s={components:{mInput:u},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,e.mapState)(["forcedLogin"]),methods:c({},(0,e.mapMutations)(["login"]),{initProvider:function(){var t=this,o=["weixin","qq","sinaweibo"];n.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var i=0;i<n.provider.length;i++)~o.indexOf(n.provider[i])&&t.providerList.push({value:n.provider[i],image:"../../static/img/"+n.provider[i]+".png"});t.hasProvider=!0}},fail:function(n){console.error("获取服务供应商失败："+JSON.stringify(n)," at pages\\login\\login.vue:71")}})},initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},bindLogin:function(){if(this.account.length<5)n.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)n.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var t={account:this.account,password:this.password},o=i.default.getUsers().some(function(n){return t.account===n.account&&t.password===n.password});o?this.toMain(this.account):n.showToast({icon:"none",title:"用户账号或密码不正确"})}},oauth:function(t){var o=this;n.login({provider:t,success:function(i){n.getUserInfo({provider:t,success:function(n){o.toMain(n.userInfo.nickName)}})},fail:function(n){console.error("授权登录失败："+JSON.stringify(n)," at pages\\login\\login.vue:138")}})},toMain:function(t){this.login(t),this.forcedLogin?n.reLaunch({url:"../main/main"}):n.navigateBack()}}),onReady:function(){this.initPosition(),this.initProvider()}};t.default=s}).call(this,o("6e42")["default"])},"5b06":function(n,t,o){},"8ca8":function(n,t,o){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},e=[];o.d(t,"a",function(){return i}),o.d(t,"b",function(){return e})},a05c:function(n,t,o){"use strict";o.r(t);var i=o("3b07"),e=o.n(i);for(var r in i)"default"!==r&&function(n){o.d(t,n,function(){return i[n]})}(r);t["default"]=e.a},b061:function(n,t,o){"use strict";var i=o("5b06"),e=o.n(i);e.a},d60b:function(n,t,o){"use strict";o.r(t);var i=o("8ca8"),e=o("a05c");for(var r in e)"default"!==r&&function(n){o.d(t,n,function(){return e[n]})}(r);o("b061");var c=o("2877"),a=Object(c["a"])(e["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports}},[["3654","common/runtime","common/vendor"]]]);