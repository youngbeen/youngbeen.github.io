webpackJsonp([2,0],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(92),o=a(i),s=n(91),r=a(s),u=n(81),c=a(u),d=n(82),l=a(d),f=n(83),v=a(f),m=n(85),p=a(m),_=n(84),h=a(_);o.default.use(r.default);var b={template:"<div>该页面暂时无法提供，敬请期待！</div>"},x=[{path:"/",redirect:"/index"},{path:"/",component:l.default,children:[{path:"/index",name:"index",component:v.default},{path:"/gameMajiongEmpire",name:"gameMajiongEmpire",component:h.default},{path:"/test",name:"test",component:p.default}]},{path:"/404",component:b}],g=new r.default({routes:x});g.afterEach(function(e,t){}),new o.default({el:"#app",template:"<App/>",components:{App:c.default},router:g})},13:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={url:{gameMajiongEmpire:"https://youngbeen.github.io/MajiongEmpire/MajiongEmpire.html"}}},38:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},39:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),o=a(i);t.default={name:"home",data:function(){return{hoverId:"",menu:[{id:"index",name:"介绍",url:{path:"/index"},withBtn:!1,targetUrl:"",nodes:[]},{id:"test",name:"测试页面",url:{path:"/test"},withBtn:!1,targetUrl:"",nodes:[]},{id:"games",name:"游戏作品",url:"",withBtn:!1,targetUrl:"",nodes:[{id:"gameMajiongEmpire",name:"Majiong Empire on Web",url:{name:"gameMajiongEmpire"},withBtn:!0,targetUrl:o.default.url.gameMajiongEmpire,nodes:[]}]}]}},methods:{handleHover:function(e){e&&(this.hoverId=e)},handleHoverOut:function(e){e&&(this.hoverId="")},handleMenuClick:function(e){e&&(e.nodes&&e.nodes.length||e.url&&this.goRoute(e))},goRoute:function(e){e&&e.url&&this.$router.push(e.url)},goUrl:function(e){e&&e.targetUrl&&(window.location.href=e.targetUrl)}},mounted:function(){}}},40:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"cover"}},41:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),o=a(i);t.default={name:"",methods:{go:function(){window.location.href=o.default.url.gameMajiongEmpire}}}},42:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(43),o=a(i),s=n(44),r=a(s),u=n(20),c=a(u);t.default={name:"test",data:function(){return{ajaxTest:{url:"https://easy-mock.com/mock/5ae189c8a9fe34094ed54d32/example/mock",status:"",dataStr:""}}},methods:{testAjax:function(){var e=this;(0,c.default)({method:"get",url:this.ajaxTest.url}).then(function(t){console.log(t),e.ajaxTest=(0,r.default)({},e.ajaxTest,{status:t.status,dataStr:(0,o.default)(t.data)})}).catch(function(e){console.error(e)})}}}},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){},77:function(e,t){},81:function(e,t,n){var a,i;n(77),a=n(38);var o=n(90);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=a},82:function(e,t,n){var a,i;n(76),a=n(39);var o=n(89);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-beba535c",e.exports=a},83:function(e,t,n){var a,i;n(73),a=n(40);var o=n(86);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-50c04d77",e.exports=a},84:function(e,t,n){var a,i;n(74),a=n(41);var o=n(87);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-5cc20769",e.exports=a},85:function(e,t,n){var a,i;n(75),a=n(42);var o=n(88);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-6a3522fc",e.exports=a},86:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"bed-cover"},[n("div",[n("p",[e._v("这是一个关于我自己（youngbeen）个人空间，会保留一些个人相关，或者觉得有趣的东西。")]),e._v(" "),n("p",[e._v("还没有想好具体会放些什么，所以先把能想到的放进来吧")])])])}]}},87:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"bed-page"},[n("div",{staticClass:"box-text"},[e._v("\n    Majiong Empire on Web（麦囧战国web版，以下简称MEW，原麦囧战国桌面版简称ME）是我自创的一款桌面游戏的web化延伸，起源自我初高中时期的想法。在那个时期，很多小伙伴喜欢跟我一起玩耍，我会在玩耍时间里面总是设想一些新奇的游戏与伙伴一起游乐。而这款游戏的起源就是那时候我使用麻将充当小兵的一种角色扮演游戏。\n  ")]),e._v(" "),n("div",{staticClass:"box-text"},[e._v("\n    在游戏的持续“迭代进化”中，我逐渐尝试并加入了“兵种”，“克制”，“货币”，“攻守”等各种新奇的玩法。这些东西奠定了ME的基本游戏风格，因为使用麻将来游戏的过程中，血量，攻击力等一些复杂的数字很难精确地量化地记录下来，于是我开始有了其他改进想法。\n  ")]),e._v(" "),n("div",{staticClass:"box-text"},[e._v("\n    为了改善血量，攻击力等令人困惑的“感觉式”计算问题，并且统一规范化游戏规则。我编写完善了ME作为桌面游戏所具备的所有游戏规则，并编写成说明书形式。另外，还完善了桌面游玩时所需的所有货币，卡牌的样式，并打印剪切成实物进行游玩。\n  ")]),e._v(" "),n("div",{staticClass:"box-text"},[e._v("\n    但是，真实游戏的情况，反而让人更加疲惫。因为游戏规则的明确化，数字化，执行起来需要耗费更多的精力，虽然玩起来有趣，却极其耗费时间，这些困难成为了我真正想把ME web化的动力。\n  ")]),e._v(" "),n("div",{staticClass:"box-text"},[e._v("\n    在我具备了web前端开发技能后，再次审视桌面ME的时候，发现将其战斗部分web化是一件令人兴奋的事情。所有枯燥麻烦的数值，计算，记录可以交给最擅长于此的计算机。于是我迫不及待地开始了MEW的开发，几年前，用的还是简单陈旧的jQuery, 配合HTML5的新audio特性，终于完成了现在看到的MEW。也正因为ME正式web化，加上我受到各种游戏熏陶，我加入了更加丰富的系统设定（英雄，技能等）。\n  ")]),e._v(" "),n("div",{staticClass:"box-text"},[e._v("\n    注意，MEW只是ME战斗部分的web化补充，游戏并不能体验到ME作为桌面游戏所具备的其他部分。但是，光战斗部分的内容，我认为已经足够让你拥有尝试的理由了。\n  ")]),e._v(" "),n("div",{staticClass:"box-btn"},[n("div",{staticClass:"big-btn",on:{click:e.go}},[e._v("\n      开始尝试\n    ")])])])},staticRenderFns:[]}},88:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"bed-test"},[n("div",{staticClass:"box-section"},[n("div",{staticClass:"header"},[e._v("\n      测试ajax\n    ")]),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"item"},[e._v("测试接口url："+e._s(e.ajaxTest.url))]),e._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"btn-sm",on:{click:e.testAjax}},[e._v("\n          测 试\n        ")])]),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"item"},[e._v("\n        Status："+e._s(e.ajaxTest.status)+"\n        Data: "+e._s(e.ajaxTest.dataStr)+"\n      ")])])])])},staticRenderFns:[]}},89:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"bed-home"},[n("div",{staticClass:"bed-menu"},[n("div",{staticClass:"box-menu"},e._l(e.menu,function(t){return n("div",{key:t.id,staticClass:"box-menu-item"},[n("div",{staticClass:"menu-item",class:{active:t.id===e.$route.name},on:{mouseover:function(n){e.handleHover(t.id)},mouseout:function(n){e.handleHoverOut(t.id)},click:function(n){e.handleMenuClick(t)}}},[e._v("\n          "+e._s(t.name)+"\n          "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.withBtn&&e.hoverId===t.id,expression:"item.withBtn && hoverId === item.id"}],staticClass:"btn",on:{click:function(n){e.goUrl(t)}}},[e._v("GO")])]),e._v(" "),e._l(t.nodes,function(t){return n("div",{key:t.id,staticClass:"sub-menu",class:{active:t.id===e.$route.name},on:{mouseover:function(n){e.handleHover(t.id)},mouseout:function(n){e.handleHoverOut(t.id)},click:function(n){e.handleMenuClick(t)}}},[e._v("\n          "+e._s(t.name)+"\n          "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.withBtn&&e.hoverId===t.id,expression:"sitem.withBtn && hoverId === sitem.id"}],staticClass:"btn",on:{click:function(n){e.goUrl(t)}}},[e._v("GO")])])})],2)}))]),e._v(" "),n("div",{staticClass:"bed-content"},[n("router-view")],1)])},staticRenderFns:[]}},90:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.626ede1477d397798d13.js.map