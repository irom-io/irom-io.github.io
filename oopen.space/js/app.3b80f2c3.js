(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,u=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},a={app:0},n=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://irom-io.github.io/oopen.space/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("85ec"),a=o.n(r);a.a},"0903":function(t,e,o){"use strict";var r=o("587b"),a=o.n(r);a.a},"4f0a":function(t,e,o){"use strict";var r=o("6f7e"),a=o.n(r);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-main",[o("router-view")],1)],1)},n=[],i={name:"App"},s=i,c=(o("034f"),o("2877")),l=o("6544"),d=o.n(l),p=o("7496"),u=o("f6c4"),m=Object(c["a"])(s,a,n,!1,null,null,null),v=m.exports;d()(m,{VApp:p["a"],VMain:u["a"]});var h=o("8c4f"),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pt-7"},[o("v-row",{attrs:{justify:"space-around",align:"center"}},[o("Logo"),o("div",[o("v-tabs",{model:{value:t.langIndex,callback:function(e){t.langIndex=e},expression:"langIndex"}},t._l(t.langs,(function(e){return o("v-tab",{key:e.locale,on:{click:function(o){return t.changeLocale(e.locale)}}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)],1),o("v-row",{attrs:{justify:"center"}},[o("div",[o("div",{staticClass:"mt-5 text-h5 text-center grey--text text--darken-1",class:{"v-hidden":t.showingDemo}},[t._v(" "+t._s(t.$t("home.slogan"))+" ")]),o("v-row",{staticClass:"mt-5 mb-5",attrs:{justify:"center"}},[o("v-btn",{attrs:{color:"primary"},on:{click:t.openDialog}},[t._v(" "+t._s(t.$t("home.createPerformance"))+" ")])],1),o("v-row",{attrs:{justify:"center"}},[o("v-btn",{staticClass:"mb-2",attrs:{color:"primary",outlined:""},on:{click:t.showDemo}},[o("v-icon",{attrs:{left:""}},[t._v("mdi-play")]),t._v(" "+t._s(t.$t("home.demo"))+" ")],1)],1),o("div",{staticClass:"text-center",class:{"v-hidden":t.showingDemo}},[o("small",[o("v-icon",{attrs:{size:"18"}},[t._v("mdi-arrow-down")]),t._v(" "+t._s(t.$t("home.selectColor"))+" ")],1)]),o("div",{staticClass:"mt-2 mb-5"},t._l(3,(function(e){return o("v-row",{key:e,staticClass:"mb-3",attrs:{justify:"center"}},t._l(5,(function(r){return o("v-icon",{key:r,attrs:{color:t.getColorStr(t.phones[e+"_"+r]),size:"58"},on:{click:function(o){return t.changeColor(t.phones[e+"_"+r])}}},[t._v(" mdi-cellphone-iphone ")])})),1)})),1),o("div",{staticClass:"mb-7 text-center",class:{"v-hidden":t.showingDemo}},[t._v(" * "+t._s(t.$t("home.demoDescription"))+" ")]),o("div",{staticClass:"mb-5"},[o("Rectangle",{attrs:{width:16,height:9}},[o("iframe",{attrs:{src:"https://player.vimeo.com/video/446534518",width:"100%",height:"100%",frameborder:"0",allow:"fullscreen",allowfullscreen:""}})])],1),o("v-card",{staticClass:"elevation-3"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[t._v(" "+t._s(t.$t("home.howItWorks"))+"? ")])],1),o("v-card-text",t._l(5,(function(e){return o("div",{key:"step_"+e,staticClass:"step"},[o("v-row",{staticClass:"ml-0 mr-0 no-gutters"},[o("div",[o("v-icon",{attrs:{size:"30",color:"primary",left:""}},[t._v("mdi-checkbox-marked-circle")])],1),o("v-col",{attrs:{xs:"9",sm:"10",md:"11"}},[o("div",[t._v(t._s(t.$t("steps."+e+".title")))]),o("small",{staticClass:"primary--text"},[t._v(" "+t._s(t.$t("steps."+e+".description"))+" ")]),o("div",{staticClass:"pa-3"},[1===e?o("div",[o("v-icon",{attrs:{size:"58",color:"primary darken-2"}},[t._v(" mdi-cellphone-iphone ")]),o("span",{staticClass:"text-h6 pr-3"},[t._v("+")]),o("v-icon",{attrs:{size:"35",color:"primary darken-2"}},[t._v(" mdi-qrcode-scan ")])],1):t._e(),2===e?o("div",t._l(3,(function(e){return o("v-icon",{key:"iconStep2_"+e,attrs:{size:"36",color:"primary darken-2"}},[t._v(" mdi-account-check ")])})),1):t._e(),3===e?o("div",[o("v-icon",{attrs:{size:"58",color:"primary lighten-1"}},[t._v(" mdi-cellphone-iphone ")])],1):t._e(),4===e?o("div",t._l(3,(function(e){return o("v-icon",{key:"iconStep4_"+e,attrs:{size:"58",color:"primary lighten-"+e}},[t._v(" mdi-cellphone-iphone ")])})),1):t._e(),5===e?o("div",t._l(3,(function(e){return o("div",{key:"rowStep5_"+e+"}",staticClass:"mb-1"},t._l(3,(function(r){return o("v-icon",{key:"iconStep5_"+e+"_"+r,attrs:{size:"35",color:"primary "+(t.stepPhones[e+"_"+r]?"darken-2":"lighten-4")}},[t._v(" mdi-cellphone-iphone ")])})),1)})),0):t._e()])])],1),e<5?o("v-divider",{staticClass:"mb-5"}):t._e()],1)})),0)],1)],1)]),o("v-row",{staticClass:"mt-8",attrs:{justify:"space-around",align:"center"}},[o("div",{staticClass:"text-center"},[o("div",[o("a",{attrs:{href:"https://t.me/roman_orlovskiy",target:"_blank"}},[t._v(" @roman_orlovskiy ")])]),o("div",{staticClass:"primary--text"},[o("small",[t._v("oOpen.space. 2021")])])]),o("div",["ru"===t.$i18n.locale?o("img",{attrs:{width:"145",alt:"",src:"/icons/made-in-russia-sign-ru.svg"}}):o("img",{attrs:{width:"120",alt:"",src:"/icons/made-in-russia-sign-en.svg"}})])]),o("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("Login",{attrs:{onCancel:t.closeDialog}})],1)],1)},f=[],g=(o("99af"),o("c740"),o("caad"),o("a15b"),o("fb6a"),o("ac1f"),o("2532"),o("5319"),o("1276"),o("fcf4")),y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"logo",attrs:{href:"https://oopen.space/"}},[o("div",{staticClass:"primary-circle",style:{borderColor:t.primaryColor}}),o("div",{staticClass:"secondary-circle",style:{borderColor:t.primaryColor}}),o("span",{staticClass:"logo-title mb-3 primary--text"},[t._v(" oOpen.space ")])])},b=[],w={name:"Logo",computed:{primaryColor:function(){return this.$vuetify.theme.themes.light.primary}}},C=w,k=(o("6277"),Object(c["a"])(C,y,b,!1,null,"7ec89290",null)),x=k.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"content"},[t._t("default")],2),o("div",{style:{paddingBottom:t.height/t.width*100+"%"}})])},j=[],V=(o("a9e3"),{name:"Rectangle",props:{width:Number,height:Number}}),D=V,O=(o("4f0a"),Object(c["a"])(D,$,j,!1,null,"1248ecd9",null)),T=O.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[t._v(" "+t._s(t.$t("auth.title"))+" ")])],1),o("v-card-text",[o("div",{staticClass:"pt-4 pb-3"},[o("div",{staticClass:"pb-1"},[t._v(t._s(t.$t("auth.description1")))]),o("div",[t._v(t._s(t.$t("auth.description2"))+":")])]),o("v-row",{attrs:{align:"center",justify:"center"}},[o("a",{staticClass:"contactLink",attrs:{href:"tel:+7 (999) 136-65-57",target:"_blank"}},[o("v-icon",{attrs:{size:"45",color:"primary"}},[t._v(" mdi-cellphone-iphone ")])],1),o("a",{staticClass:"contactLink",attrs:{href:"https://t.me/roman_orlovskiy",target:"_blank"}},[o("v-icon",{attrs:{size:"48",color:"primary",left:""}},[t._v(" mdi-telegram ")])],1),o("a",{staticClass:"contactLink",attrs:{href:"mailto:irom-io@ya.ru",target:"_blank"}},[o("v-icon",{attrs:{size:"52",color:"primary",left:""}},[t._v(" mdi-email-outline ")])],1)])],1),o("v-card-actions",[o("v-row",{attrs:{justify:"space-between",align:"center","no-gutters":""}},[o("v-btn",{attrs:{color:"primary",outlined:""},on:{click:t.onCancel}},[t._v(" "+t._s(t.$t("app.cancel"))+" ")]),o("v-btn",{attrs:{color:"primary",href:"https://t.me/roman_orlovskiy",target:"_blank"}},[t._v(" "+t._s(t.$t("auth.contactUs"))+" ")])],1)],1)],1)},I=[],M={name:"Login",methods:{login:function(){console.log("login")}},props:{onCancel:Function}},S=M,z=(o("8411"),o("8336")),L=o("b0af"),E=o("99d9"),B=o("132d"),R=o("0fd9"),A=o("71d9"),H=o("2a7f"),U=Object(c["a"])(S,P,I,!1,null,"108dc4aa",null),W=U.exports;d()(U,{VBtn:z["a"],VCard:L["a"],VCardActions:E["a"],VCardText:E["b"],VIcon:B["a"],VRow:R["a"],VToolbar:A["a"],VToolbarTitle:H["a"]});var J=o("2ef0"),N={name:"Home",components:{Logo:x,Rectangle:T,Login:W},data:function(){var t=this,e=[{name:"Русский",locale:"ru"},{name:"English",locale:"en"}],o=e.findIndex((function(e){var o=e.locale;return o===t.$i18n.locale}));return{showingDemo:!1,langIndex:o,langs:e,phones:{"1_1":{color:"red"},"1_2":{color:"pink"},"1_3":{color:"purple"},"1_4":{color:"deep-purple"},"1_5":{color:"indigo"},"2_1":{color:"blue"},"2_2":{color:"light-blue"},"2_3":{color:"cyan"},"2_4":{color:"teal"},"2_5":{color:"green"},"3_1":{color:"light-green"},"3_2":{color:"lime"},"3_3":{color:"yellow"},"3_4":{color:"amber"},"3_5":{color:"orange"}},stepPhones:{"1_1":!0,"1_2":!0,"1_3":!0,"2_1":!0,"2_3":!0,"3_1":!0,"3_2":!0,"3_3":!0},dialog:!1}},methods:{getColorStr:function(t){var e=t.color,o=t.colorMod,r=void 0===o?"base":o;return"".concat(e," ").concat(r)},changeColor:function(t){var e=t.color,o=t.colorMod,r=void 0===o?"base":o,a=e.split("-");a[1]&&(a[1]=a[1].charAt(0).toUpperCase()+a[1].slice(1));var n=a.join(""),i=r.replace("-","");this.$vuetify.theme.themes.light.primary=g["a"][n][i],this.$vuetify.theme.themes.light.primaryColor={color:e,colorMod:r}},showDemo:function(){var t=this;this.showingDemo=!0;var e=Object(J["cloneDeep"])(this.phones),o=this.$vuetify.theme.themes.light.primaryColor,r={color:o.color,colorMod:"lighten-4"},a={color:o.color,colorMod:"darken-2"};this.setDemoBackground(r);var n=0,i=[{items:["2_3"]},{items:["1_2"]},{items:["1_5"]},{items:["3_2"]},{items:["3_5"]},{items:["1_2","1_4","2_2","2_3","2_4","3_2","3_4"]},{items:[]},{items:["1_2","1_3","1_4","2_2","2_3","3_2","3_3","3_4"]},{items:[]},{items:["1_2","2_2","3_2","3_3","3_4"]},{items:[]},{items:["1_2","2_2","3_2","3_3","3_4"]},{items:[]},{items:["1_2","1_3","1_4","2_2","2_4","3_2","3_3","3_4"]}],s=setInterval((function(){if(n>=i.length)return clearInterval(s),t.phones=e,void(t.showingDemo=!1);var o=i[n].items;for(var c in t.phones){var l=void 0;l=o.includes(c)?1===o.length?e[c]:a:r,t.phones[c]=l}n++}),500)},setDemoBackground:function(t){for(var e in this.phones){var o=this.phones[e];o.color=t.color,o.colorMod=t.colorMod}},changeLocale:function(t){this.$i18n.locale=t},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1}}},q=N,F=(o("0903"),o("62ad")),G=o("a523"),K=o("169a"),Q=o("ce7e"),X=o("71a3"),Y=o("fe57"),Z=Object(c["a"])(q,_,f,!1,null,"027aeafc",null),tt=Z.exports;d()(Z,{VBtn:z["a"],VCard:L["a"],VCardText:E["b"],VCol:F["a"],VContainer:G["a"],VDialog:K["a"],VDivider:Q["a"],VIcon:B["a"],VRow:R["a"],VTab:X["a"],VTabs:Y["a"],VToolbar:A["a"],VToolbarTitle:H["a"]}),r["a"].use(h["a"]);var et=[{path:"/",name:"Home",component:tt}],ot=new h["a"]({mode:"history",routes:et}),rt=ot,at=o("a925");r["a"].use(at["a"]);var nt={en:{app:{cancel:"Cancel"},home:{slogan:"Create performances using mobile devices",demo:"Demo start",createPerformance:"Create performance",selectColor:"Select interface color",demoDescription:"Imagine the effect thousands of devices will create",howItWorks:"How it works"},auth:{title:"Work in progress",description1:"Portal is currently under construction.",description2:"Contact us and we will let you know when the service is ready",contactUs:"Contact us"},steps:{1:{title:"Open in browser on phone",description:"The viewer uses the phone to follow the link"},2:{title:"Enter sector / row / location",description:"The viewer enters his seat number or his geolocation is determined"},3:{title:"Screen as one pixel",description:"The screen starts to glow with a certain color"},4:{title:"Let's start the performance",description:"Viewers turn each of their devices to the stage / field, etc."},5:{title:"The Big Picture",description:"Hundreds or thousands of phones together form a picture that can change dynamically"}}},ru:{app:{cancel:"Отмена"},home:{slogan:"Создавайте перформансы с помощью мобильных устройств",demo:"Старт демо",createPerformance:"Создать перформанс",selectColor:"Выберите цвет интерфейса",demoDescription:"Представьте, какой эффект будут создавать тысячи устройств ",howItWorks:"Как это работает"},auth:{title:"Работа в процессе",description1:"Сейчас портал в разработке.",description2:"Напишите нам, и мы сообщим, когда сервис будет готов",contactUs:"Связаться с нами"},steps:{1:{title:"Открыть в браузере на телефоне",description:"Зритель с помощью телефона переходит по ссылке"},2:{title:"Ввести сектор / ряд /место",description:"Зритель вводит номер своего места или определяется его геолокация"},3:{title:"Экран как один пиксель",description:"Экран начинает светиться определенным цветом"},4:{title:"Начинаем перформанс",description:"Зрители поворачивают каждый своё устройство к сцене/полю и т. д."},5:{title:"Общая картина",description:"Сотни или тысячи телефонов вместе образуют картину, которая может динамически изменяться"}}}},it=new at["a"]({locale:"ru",messages:nt}),st=it,ct=o("f309");r["a"].use(ct["a"]);var lt=new ct["a"]({theme:{themes:{light:{primary:g["a"].cyan.base,primaryColor:{color:"cyan",colorMod:"base"}}}}});r["a"].config.productionTip=!1,new r["a"]({router:rt,i18n:st,vuetify:lt,render:function(t){return t(v)}}).$mount("#app")},"587b":function(t,e,o){},6277:function(t,e,o){"use strict";var r=o("6f93"),a=o.n(r);a.a},"6f7e":function(t,e,o){},"6f93":function(t,e,o){},8411:function(t,e,o){"use strict";var r=o("d0cd"),a=o.n(r);a.a},"85ec":function(t,e,o){},d0cd:function(t,e,o){}});
//# sourceMappingURL=app.3b80f2c3.js.map