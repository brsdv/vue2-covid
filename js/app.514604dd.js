(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue2-covid/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"16cf":function(t,e,a){},"26b4":function(t,e,a){"use strict";a("b763")},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="4678"},"4e4d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-navigation-drawer",{staticClass:"primary",attrs:{dark:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.nav,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.link}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{color:"primary",dense:"",dark:"",app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline"},[a("v-icon",[t._v("mdi-virus")]),t._v(" COVID-19 ")],1),a("v-spacer"),a("v-toolbar-title",{staticClass:"text-subtitle-1 font-weight-bold"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("span",t._g(t._b({},"span",s,!1),n),[t._v("Top 5")])]}}])},[a("span",[t._v("Active cases")])])],1),a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-arrow-down-drop-circle-outline")])],1)]}}])},[a("v-list",t._l(t.countries,(function(e){return a("v-list-item",{key:e,attrs:{link:"",to:"/country/"+e},on:{click:function(){}}},[a("v-list-item-title",{on:{click:function(a){return t.updateCountry(e)}}},[t._v(t._s(e))])],1)})),1)],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},r=[],o={name:"App",data:function(){return{nav:[{title:"World summary",icon:"mdi-earth",link:"/"},{title:"Countries",icon:"mdi-flag",link:"/countries"}],drawer:!1}},mounted:function(){this.$store.dispatch("updateTopCountries")},methods:{updateCountry:function(t){this.$store.dispatch("newCountryName",t)}},computed:{countries:function(){return this.$store.getters.topCountries}}},i=o,c=(a("034f"),a("2877")),l=Object(c["a"])(i,s,r,!1,null,null,null),u=l.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"grey lighten-5 pa-2 mt-4"},[a("section",[a("h1",{staticClass:"display-1"},[t._v("World summary stats")]),a("v-row",{staticClass:"ma-1",attrs:{align:"center",justify:"center"}},t._l(t.cards,(function(e,n){return a("card-stats",{key:n,attrs:{cardTitle:e.title,bgColor:e.bgColor,cardIcon:e.icon,cardAmount:e.amount,cardAmountToday:e.amountToday,cardPerOneMillion:e.perOneMillion,population:t.population}})})),1)],1),a("section",[a("h2",{staticClass:"display-1"},[t._v("Visuals")]),a("v-row",{staticClass:"mt-1",attrs:{align:"center"}},t._l(t.visuals,(function(t,e){return a("line-chart",{key:e,staticClass:"small ma-4",attrs:{"chart-data":t.chartData,options:t.options}})})),1)],1)])},m=[],p=(a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{class:["summary-card rounded-lg ma-4 pt-6",t.bgColor],attrs:{"max-width":"300",outlined:"",tile:"",dark:""}},[a("div",{staticClass:"icon-wrapper"},[a("v-icon",[t._v(t._s(t.cardIcon))])],1),a("v-card-title",{staticClass:"headline text-bold"},[t.population?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("span",t._g(t._b({staticClass:"count"},"span",s,!1),n),[t._v(t._s(t._f("numberFilter")(t.cardAmount)))])]}}],null,!1,3147930815)},[a("span",[t._v("Population: "+t._s(t._f("numberFilter")(t.population)))])]):a("span",{staticClass:"count"},[t._v(t._s(t._f("numberFilter")(t.cardAmount)))])],1),a("v-card-subtitle",{staticClass:"text-center text-bold"},[t._v(" "+t._s(t.cardTitle)+" ")]),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",[a("div",{staticClass:"font-weight-bold ml-8 mb-2"},[t._v(" More ")]),a("v-timeline",{attrs:{dense:"",light:""}},[t.cardAmountToday?a("v-timeline-item",{attrs:{small:"",light:""}},[a("div",[a("div",{staticClass:"font-weight-normal"},[t._v(" Count today ")]),a("div",{staticClass:"font-weight-bold white--text"},[t._v(" "+t._s(t._f("numberFilter")(t.cardAmountToday))+" ")])])]):t._e(),t.cardPerOneMillion?a("v-timeline-item",{attrs:{small:"",light:""}},[a("div",[a("div",{staticClass:"font-weight-normal"},[t._v(" Per one million ")]),a("div",{staticClass:"font-weight-bold white--text"},[t._v(" "+t._s(t._f("numberFilter")(t.cardPerOneMillion))+" ")])])]):t._e()],1)],1)],1)}),v=[],b=(a("a9e3"),{name:"card-stats",props:{bgColor:String,cardIcon:String,cardTitle:String,cardAmount:Number,cardAmountToday:Number,cardPerOneMillion:Number,population:Number},data:function(){return{}}}),h=b,y=(a("26b4"),Object(c["a"])(h,p,v,!1,null,"790b3e5a",null)),j=y.exports,g=a("1fca"),C=g["b"].reactiveProp,_=n["default"].component("line-chart",{extends:g["a"],props:{options:{type:Object,default:function(){}}},mixins:[C],mounted:function(){this.renderChart(this.chartData,this.options)}}),k={name:"total",components:{CardStats:j,LineChart:_},data:function(){return{cards:[{code:"cases",title:"Total cases",bgColor:"primary lighten-2",amount:0,amountToday:0,perOneMillion:0,icon:"mdi-alert-box"},{code:"deaths",title:"Deaths",bgColor:"red accent-2",amount:0,amountToday:0,perOneMillion:0,icon:"mdi-emoticon-dead"},{code:"recoveries",title:"Recoveries",bgColor:"teal lighten-1",amount:0,amountToday:0,perOneMillion:0,icon:"mdi-hospital-box"}],population:0,visuals:[],worldStatAll:null,allData:null}},mounted:function(){var t=this;this.axios.get("https://corona.lmao.ninja/v2/all").then((function(e){t.worldStatAll=e,t.updateStats()})).catch((function(t){return console.error("An API error:",t)})),this.axios.get("https://corona.lmao.ninja/v2/historical/all").then((function(e){t.allData=e,t.updateVisuals()})).catch((function(t){return console.error("An API error:",t)}))},methods:{updateStats:function(){var t=this.worldStatAll.data;this.population=t.population,this.cards.forEach((function(e){"cases"===e.code&&(e.amount=t.cases,e.amountToday=t.todayCases,e.perOneMillion=t.casesPerOneMillion),"deaths"===e.code&&(e.amount=t.deaths,e.amountToday=t.todayDeaths,e.perOneMillion=t.deathsPerOneMillion),"recoveries"===e.code&&(e.amount=t.recovered,e.amountToday=t.todayRecovered,e.perOneMillion=t.recoveredPerOneMillion)}))},updateVisuals:function(){var t=this.allData.data,e=t.cases,a=t.deaths,n=t.recovered,s=[],r=[],o=[],i=[];for(var c in e)s.push(c),r.push(e[c]),o.push(a[c]),i.push(n[c]);this.visuals.push({id:1,chartData:{labels:s,datasets:[{label:"Total cases",backgroundColor:"#6aaaff",data:r}]},options:{responsive:!0,maintainAspectRatio:!1}}),this.visuals.push({id:2,chartData:{labels:s,datasets:[{label:"Deaths",backgroundColor:"#ff5252",data:o}]},options:{responsive:!0,maintainAspectRatio:!1}}),this.visuals.push({id:3,chartData:{labels:s,datasets:[{label:"Recoveries",backgroundColor:"#26a69a",data:i}]},options:{responsive:!0,maintainAspectRatio:!1}})}}},w=k,x=(a("64a7"),Object(c["a"])(w,f,m,!1,null,"5b494619",null)),O=x.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"grey lighten-5 pa-2 mt-4"},[a("section",[a("h1",{staticClass:"display-1"},[t._v(t._s(t.title))]),a("v-container",{staticClass:"mt-4",attrs:{fluid:""}},[a("v-card",[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.countries,search:t.search,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"item.country",fn:function(e){var n=e.item;return[a("v-row",{attrs:{align:"center"}},[a("v-img",{staticClass:"ml-2 mr-2",attrs:{src:n.flag,"max-width":"24"}}),a("span",[t._v(t._s(n.country))])],1)]}},{key:"item.population",fn:function(e){var n=e.item;return[a("span",{staticClass:"grey--text text--darken-2 font-weight-bold"},[t._v(" "+t._s(t._f("numberFilter")(n.population))+" ")])]}},{key:"item.cases",fn:function(e){var n=e.item;return[a("span",{staticClass:"primary--text text--lighten-2 font-weight-bold"},[t._v(" "+t._s(t._f("numberFilter")(n.cases))+" ")])]}},{key:"item.todayCases",fn:function(e){var n=e.item;return[a("span",{staticClass:"primary--text text--lighten-2"},[t._v(" "+t._s(t._f("numberFilter")(n.todayCases))+" ")])]}},{key:"item.deaths",fn:function(e){var n=e.item;return[a("span",{staticClass:"red--text text--accent-2 font-weight-bold"},[t._v(" "+t._s(t._f("numberFilter")(n.deaths))+" ")])]}},{key:"item.todayDeaths",fn:function(e){var n=e.item;return[a("span",{staticClass:"red--text text--accent-2"},[t._v(" "+t._s(t._f("numberFilter")(n.todayDeaths))+" ")])]}},{key:"item.recovered",fn:function(e){var n=e.item;return[a("span",{staticClass:"teal--text text--lighten-1 font-weight-bold"},[t._v(" "+t._s(t._f("numberFilter")(n.recovered))+" ")])]}},{key:"item.todayRecovered",fn:function(e){var n=e.item;return[a("span",{staticClass:"teal--text text--lighten-1"},[t._v(" "+t._s(t._f("numberFilter")(n.todayRecovered))+" ")])]}},{key:"item.active",fn:function(e){var n=e.item;return[a("v-chip",{attrs:{color:"red lighten-1",outlined:""}},[t._v(" "+t._s(t._f("numberFilter")(n.active))+" ")])]}},{key:"item.critical",fn:function(e){var n=e.item;return[a("span",[t._v(" "+t._s(t._f("numberFilter")(n.critical))+" ")])]}}])})],1)],1)],1)])},M=[],P=(a("d81d"),{name:"countries",data:function(){return{title:"Countries statistics",search:"",sortBy:"active",sortDesc:!0,headers:[{text:"Country",align:"start",value:"country"},{text:"Population",value:"population"},{text:"Cases",value:"cases"},{text:"Today cases",value:"todayCases"},{text:"Deaths",value:"deaths"},{text:"Today deaths",value:"todayDeaths"},{text:"Recovered",value:"recovered"},{text:"Today recovered",value:"todayRecovered"},{text:"Active",value:"active"},{text:"Critical",value:"critical"}],countries:[]}},mounted:function(){var t=this;this.axios.get("https://corona.lmao.ninja/v2/countries?sort").then((function(e){t.countries=e,t.updateCounries()})).catch((function(t){return console.error("An API error:",t)}))},methods:{updateCounries:function(){var t=this.countries.data.map((function(t){return{country:t.country,flag:t.countryInfo.flag,population:t.population,cases:t.cases,todayCases:t.todayCases,deaths:t.deaths,todayDeaths:t.todayDeaths,recovered:t.recovered,todayRecovered:t.todayRecovered,active:t.active,critical:t.critical}}));this.countries=t}}}),T=P,A=(a("75ed"),Object(c["a"])(T,D,M,!1,null,"f9e5bbaa",null)),z=A.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"grey lighten-5 pa-2 mt-4"},[a("section",[a("v-row",{attrs:{align:"center"}},[a("h1",{staticClass:"display-1 ml-3 mr-2"},[t._v(t._s(t.queryName))]),a("v-img",{attrs:{src:t.countryFlag,"max-width":"48"}})],1),a("v-row",{staticClass:"ma-1",attrs:{align:"center",justify:"center"}},t._l(t.countryDataCards,(function(e){return a("card-stats",{key:e.title,attrs:{cardTitle:e.title,bgColor:e.bgColor,cardAmount:e.amount,cardPerOneMillion:e.perOneMillion,cardIcon:e.icon,population:t.population}})})),1)],1),a("section",[a("h2",{staticClass:"display-1"},[t._v("Visuals")]),a("v-row",{staticClass:"mt-1",attrs:{align:"center",justify:"center"}},t._l(t.countryDataVisuals,(function(t){return a("line-chart",{key:t.id,staticClass:"ma-4",attrs:{"chart-data":t.chartData,options:t.option}})})),1)],1)])},N=[],F={name:"Country",components:{CardStats:j,LineChart:_},props:["queryName"],data:function(){return{cards:[],visuals:[]}},computed:{population:function(){return this.$store.getters.country.population},countryFlag:function(){return this.$store.getters.country.flag},countryDataCards:function(){var t=this.$store.getters.country,e=[];return e.push({title:"total cases",bgColor:"primary lighten-2",amount:t.cases,perOneMillion:t.casesPerOneMillion,icon:"mdi-alert-box"}),e.push({title:"deaths",bgColor:"red accent-2",amount:t.deaths,perOneMillion:t.deathsPerOneMillion,icon:"mdi-emoticon-dead"}),e.push({title:"recoveries",bgColor:"teal lighten-1",amount:t.recoveries,perOneMillion:t.recoveriesPerOneMillion,icon:"mdi-hospital-box"}),e},countryDataVisuals:function(){var t=this.$store.getters.country,e=[];return e.push({id:1,chartData:{labels:t.visualLabels,datasets:[{label:"Total cases",backgroundColor:"#6aaaff",data:t.visualData.cases}]},options:{responsive:!0,maintainAspectRatio:!1}}),e.push({id:2,chartData:{labels:t.visualLabels,datasets:[{label:"Deaths",backgroundColor:"#ff5252",data:t.visualData.deaths}]},options:{responsive:!0,maintainAspectRatio:!1}}),e.push({id:3,chartData:{labels:t.visualLabels,datasets:[{label:"Recoveries",backgroundColor:"#26a69a",data:t.visualData.recoveries}]},options:{responsive:!0,maintainAspectRatio:!1}}),e}}},E=F,R=(a("8d41"),Object(c["a"])(E,S,N,!1,null,"4a27ad7c",null)),L=R.exports,$=a("2f62"),I={state:{loading:!1,error:!1},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=!1}},actions:{setLoading:function(t,e){var a=t.commit;a("setLoading",e)},setError:function(t,e){var a=t.commit;a("setError",e)},clearError:function(t,e){var a=t.commit;a("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}},V=a("b85c"),q=(a("d3b7"),a("3ca3"),a("ddb0"),a("fb6a"),a("7db0"),a("b0c0"),a("d4ec")),B=function t(e,a,n,s,r,o,i,c,l,u,d,f){Object(q["a"])(this,t),this.id=e,this.name=a,this.flag=n,this.population=s,this.cases=r,this.deaths=o,this.recoveries=i,this.casesPerOneMillion=c,this.deathsPerOneMillion=l,this.recoveriesPerOneMillion=u,this.visualData=d,this.visualLabels=f},J=a("bc3a"),U=a.n(J),W={state:{currCountryName:null,countries:[],topCountries:[]},mutations:{newCountry:function(t,e){t.countries.push(e)},newCountryName:function(t,e){t.currCountryName=e},newTopCountry:function(t,e){t.topCountries=e}},actions:{newCountry:function(t,e){var a=t.commit,n=t.getters;a("clearError"),a("setLoading",!0),Promise.all([U.a.get("https://corona.lmao.ninja/v2/historical/".concat(e,"?lastdays=30")),U.a.get("https://corona.lmao.ninja/v2/countries/".concat(e))]).then((function(t){var e=t[0].data,s=t[1].data,r=[],o={},i=[],c=[],l=[];for(var u in e.timeline.cases)r.push(u),i.push(e.timeline.cases[u]),c.push(e.timeline.deaths[u]),l.push(e.timeline.recovered[u]);o.cases=i,o.deaths=c,o.recoveries=l;var d=n.countryId,f=new B(d,e.country,s.countryInfo.flag,s.population,s.cases,s.deaths,s.recovered,s.casesPerOneMillion,s.deathsPerOneMillion,s.recoveredPerOneMillion,o,r);a("setLoading",!1),a("newCountry",f)}))},newCountryName:function(t,e){var a=t.commit;a("newCountryName",e)},updateTopCountries:function(t){var e=t.commit,a=t.dispatch;e("clearError"),e("setLoading",!0),U.a.get("https://corona.lmao.ninja/v2/countries?sort=active").then((function(t){var n=t.data.slice(0,5);n=n.map((function(t){return t.country})),e("newTopCountry",n);var s,r=Object(V["a"])(n);try{for(r.s();!(s=r.n()).done;){var o=s.value;a("newCountry",o)}}catch(i){r.e(i)}finally{r.f()}e("setLoading",!1)}))}},getters:{country:function(t){return t.countries.find((function(e){return e.name===t.currCountryName}))},currentCountry:function(t){return t.currCountryName},countryId:function(t){return t.countries.length},topCountries:function(t){return t.topCountries}}};n["default"].use($["a"]);var G=new $["a"].Store({modules:{common:I,country:W}});n["default"].use(d["a"]);var H=new d["a"]({routes:[{path:"/",name:"Total",component:O},{path:"/countries",name:"Countries",component:z},{path:"/country/:queryName",name:"Country",component:L,props:!0,beforeEnter:function(t,e,a){var n=t.params.queryName;G.dispatch("newCountryName",n),a()}}]}),K=a("ce5b"),Q=a.n(K);a("bf40"),a("5363");n["default"].use(Q.a);var X={icons:{iconfont:"mdi"}},Y=new Q.a(X),Z=a("130e");a("4de4"),a("ac1f"),a("5319"),a("25f0");n["default"].filter("numberFilter",(function(t){var e=t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ");return e})),n["default"].use(Z["a"],U.a),n["default"].config.productionTip=!1,new n["default"]({router:H,store:G,vuetify:Y,render:function(t){return t(u)}}).$mount("#app")},"64a7":function(t,e,a){"use strict";a("16cf")},"75ed":function(t,e,a){"use strict";a("b92c")},"85ec":function(t,e,a){},"8d41":function(t,e,a){"use strict";a("4e4d")},b763:function(t,e,a){},b92c:function(t,e,a){}});
//# sourceMappingURL=app.514604dd.js.map