(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"15ef":function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return u})},3091:function(n,t,o){},"34bb":function(n,t,o){"use strict";var e=o("3091"),u=o.n(e);u.a},4373:function(n,t,o){"use strict";o.r(t);var e=o("9283"),u=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);t["default"]=u.a},9283:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o("2f62"),u={computed:(0,e.mapState)(["forcedLogin","hasLogin","userName"]),onLoad:function(){var t=this;this.hasLogin||n.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(o){o.confirm&&(t.forcedLogin?n.reLaunch({url:"../login/login"}):n.navigateTo({url:"../login/login"}))}})}};t.default=u}).call(this,o("543d")["default"])},ff4c:function(n,t,o){"use strict";o.r(t);var e=o("15ef"),u=o("4373");for(var a in u)"default"!==a&&function(n){o.d(t,n,function(){return u[n]})}(a);o("34bb");var i=o("2877"),c=Object(i["a"])(u["default"],e["a"],e["b"],!1,null,null,null);t["default"]=c.exports}},[["998a","common/runtime","common/vendor"]]]);