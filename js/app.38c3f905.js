(function(t){function e(e){for(var a,i,s=e[0],l=e[1],o=e[2],b=0,d=[];b<s.length;b++)i=s[b],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return c.push.apply(c,o||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},c=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/clash-of-clans-vue-3/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var o=0;o<s.length;o++)e(s[o]);var u=l;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"4e51":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n={class:"wrapper"},c={class:"wrapper-content"},i={class:"container"};function s(t,e,r,s,l,o){var u=Object(a["y"])("Header"),b=Object(a["y"])("router-view"),d=Object(a["y"])("Footer");return Object(a["s"])(),Object(a["f"])("div",n,[Object(a["i"])(u),Object(a["g"])("div",c,[Object(a["g"])("div",i,[Object(a["i"])(b)])]),Object(a["i"])(d)])}var l={class:"navbar"},o={class:"container"},u={class:"navbar-content"},b={class:"navbar-list"};function d(t,e,r,n,c,i){var s=Object(a["y"])("router-link");return Object(a["s"])(),Object(a["f"])("header",l,[Object(a["g"])("div",o,[Object(a["g"])("div",u,[Object(a["i"])(s,{class:"navbar-logo",to:"/"},{default:Object(a["E"])((function(){return[Object(a["h"])(Object(a["A"])(c.title),1)]})),_:1}),Object(a["g"])("ul",b,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["w"])(c.links,(function(t){return Object(a["s"])(),Object(a["f"])("li",{class:"navbar-item",key:t.alias},[Object(a["i"])(s,{class:"navbar-link",to:t.url},{default:Object(a["E"])((function(){return[Object(a["h"])(Object(a["A"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])])])}var O=r("c441"),j={data:function(){return{links:O["b"],title:O["a"].title}}},f=r("6b0d"),p=r.n(f);const v=p()(j,[["render",d]]);var h=v,m={class:"footer"},g={class:"container"},y={class:"navbar-list"};function w(t,e,r,n,c,i){var s=Object(a["y"])("router-link");return Object(a["s"])(),Object(a["f"])("footer",m,[Object(a["g"])("div",g,[Object(a["g"])("ul",y,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["w"])(c.links,(function(t){return Object(a["s"])(),Object(a["f"])("li",{class:"navbar-item",key:t.alias},[Object(a["i"])(s,{class:"navbar-link",to:t.url},{default:Object(a["E"])((function(){return[Object(a["h"])(Object(a["A"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])])}var k={data:function(){return{links:O["b"]}},props:{}};const A=p()(k,[["render",w]]);var S=A,_={components:{Header:h,Footer:S}};const T=p()(_,[["render",s]]);var C=T,x=r("6c02");function E(t,e,r,n,c,i){var s=Object(a["y"])("Card"),l=Object(a["y"])("slide"),o=Object(a["y"])("navigation"),u=Object(a["y"])("carousel");return Object(a["s"])(),Object(a["d"])(u,{settings:c.settings,breakpoints:c.breakpoints},{addons:Object(a["E"])((function(){return[Object(a["i"])(o)]})),default:Object(a["E"])((function(){return[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["w"])(c.items,(function(t){return Object(a["s"])(),Object(a["d"])(l,{class:"card__wrapper",key:t.id},{default:Object(a["E"])((function(){return[Object(a["i"])(s,{name:"".concat(t.lvl," lvl"),title:t.title,imgUrl:t.img,link:"/".concat(t.alias),itemprop:t},{body:Object(a["E"])((function(){return[Object(a["h"])(Object(a["A"])(t.descr),1)]})),_:2},1032,["name","title","imgUrl","link","itemprop"])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"])}r("b0c0"),r("9911");var P={class:"card"},F={key:0,class:"card-img__wrapper"},U=["src","alt"],z={class:"card-name"},H={class:"card-title"},M={class:"card-body"},B=Object(a["h"])("See more");function G(t,e,r,n,c,i){var s=Object(a["y"])("router-link"),l=Object(a["y"])("CardFooter");return Object(a["s"])(),Object(a["f"])("div",P,[r.imgUrl?(Object(a["s"])(),Object(a["f"])("div",F,[Object(a["g"])("img",{class:"card-img",src:r.imgUrl,alt:r.title},null,8,U)])):Object(a["e"])("",!0),Object(a["g"])("span",z,Object(a["A"])(r.name),1),Object(a["g"])("span",H,Object(a["A"])(r.title),1),Object(a["g"])("div",M,[Object(a["x"])(t.$slots,"body"),r.link?(Object(a["s"])(),Object(a["d"])(s,{key:0,class:"link",style:{display:"block","margin-top":"16px"},to:r.link},{default:Object(a["E"])((function(){return[B]})),_:1},8,["to"])):Object(a["e"])("",!0)]),Object(a["i"])(l,{itemprop:r.itemprop},null,8,["itemprop"])])}var q={class:"card-stats"},J={class:"stat-value"},N={class:"stat"};function V(t,e,r,n,c,i){return Object(a["s"])(),Object(a["f"])("div",q,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["w"])(r.itemprop.info,(function(t){return Object(a["s"])(),Object(a["f"])("div",{class:"one-third",key:t},[Object(a["g"])("div",J,Object(a["A"])(t.value),1),Object(a["g"])("div",N,Object(a["A"])(t.title),1)])})),128))])}var W={name:"CardFooter",props:{itemprop:{type:Object}}};const $=p()(W,[["render",V]]);var K=$,L={name:"Card",components:{CardFooter:K},props:{name:{type:String,required:!0},title:{type:String,required:!0},imgUrl:{type:String},link:{type:String},itemprop:{type:Object}}};const R=p()(L,[["render",G]]);var D=R,I=[{id:1,alias:"barbarian",title:"The Barbarian",descr:"The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/barbarian.png",lvl:4,info:[{title:"training",value:"20s"},{title:"speed",value:"16"},{title:"cost",value:"150"}]},{id:2,alias:"archer",title:"The Archer",descr:"The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/archer.png",lvl:4,info:[{title:"training",value:"25s"},{title:"speed",value:"24"},{title:"cost",value:"300"}]},{id:3,alias:"giant",title:"The Giant",descr:"Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you will see their fury unleashed!",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/giant.png",lvl:4,info:[{title:"training",value:"2m"},{title:"speed",value:"12"},{title:"cost",value:"2250"}]},{id:4,alias:"goblin",title:"The Goblin",descr:"These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/goblin.png",lvl:5,info:[{title:"training",value:"30s"},{title:"speed",value:"32"},{title:"cost",value:"100"}]},{id:5,alias:"wizard",title:"The Wizard",descr:"The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/wizard.png",lvl:6,info:[{title:"training",value:"5m"},{title:"speed",value:"16"},{title:"cost",value:"3800"}]}],Q=(r("4001"),r("0b81")),X={name:"home",components:{Card:D,Carousel:Q["a"],Slide:Q["c"],Navigation:Q["b"]},data:function(){return{items:I,settings:{itemsToShow:2,wrapAround:!0,snapAlign:"center"},breakpoints:{300:{itemsToShow:1},700:{itemsToShow:1}}}}};const Y=p()(X,[["render",E]]);var Z=Y,tt={class:"md-body"},et=Object(a["g"])("h1",null,"В этом приложении:",-1),rt=Object(a["g"])("ul",null,[Object(a["g"])("li",null,"Vue-Router в связке Vue.js 3"),Object(a["g"])("li",null,"Динамические маршруты"),Object(a["g"])("li",null,"Установка своих тем поврех своего шаблона vue cli"),Object(a["g"])("li",null,"Слайдер с персонажами")],-1),at=[et,rt];function nt(t,e){return Object(a["s"])(),Object(a["f"])("div",tt,at)}const ct={},it=p()(ct,[["render",nt]]);var st=it,lt={class:"title"};function ot(t,e,r,n,c,i){return Object(a["s"])(),Object(a["f"])("h1",lt,"404 Not Found")}var ut={name:"notFound"};const bt=p()(ut,[["render",ot]]);var dt=bt,Ot={class:"wrapper-person"},jt={key:0},ft=["src","alt"],pt={style:{color:"#fff"},class:"title"},vt={class:"card-stats"},ht={class:"stat-value"},mt={class:"stat"},gt=Object(a["h"])("Back to home");function yt(t,e,r,n,c,i){var s=Object(a["y"])("router-link");return Object(a["s"])(),Object(a["f"])("div",Ot,[c.item?(Object(a["s"])(),Object(a["f"])("div",jt,[Object(a["g"])("img",{src:c.item.img,alt:c.item.descr},null,8,ft),Object(a["g"])("h1",pt,Object(a["A"])(c.item.title),1),Object(a["g"])("p",null,Object(a["A"])(c.item.descr),1),Object(a["g"])("div",vt,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["w"])(c.item.info,(function(t,e){return Object(a["s"])(),Object(a["f"])("div",{class:"one-third",key:e},[Object(a["g"])("div",ht,Object(a["A"])(t.value),1),Object(a["g"])("div",mt,Object(a["A"])(t.title),1)])})),128))]),Object(a["g"])("div",null,[Object(a["i"])(s,{to:"/",class:"btn btnPrimary"},{default:Object(a["E"])((function(){return[gt]})),_:1})])])):Object(a["e"])("",!0)])}r("7db0"),r("d3b7");var wt={name:"item",data:function(){return{item:null}},created:function(){var t=this;this.item=I.find((function(e){return e.alias===t.$route.params.itemAlias}))}};r("c12f");const kt=p()(wt,[["render",yt]]);var At=kt,St=Object(x["b"])(),_t=Object(x["a"])({history:St,routes:[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:st},{path:"/:itemAlias",name:"itemAlias",component:At},{path:"/:CatchAll(.*)",name:"404",component:dt}]}),Tt=_t,Ct=(r("984f"),Object(a["c"])(C));Ct.use(Tt),Ct.mount("#app")},"984f":function(t,e,r){},c12f:function(t,e,r){"use strict";r("4e51")},c441:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));t.dev;var a={title:"Clash of Clans"},n=[{title:"Home",alias:"home",url:"/"},{title:"About",alias:"about",url:"/about"}]}).call(this,r("4362"))}});
//# sourceMappingURL=app.38c3f905.js.map