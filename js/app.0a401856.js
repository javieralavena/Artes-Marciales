(function(){"use strict";var e={7463:function(e,t,n){var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/peleadores"}},[e._v("Peleadores")]),e._v(" | "),n("router-link",{attrs:{to:{name:"buscador"}}},[e._v("Buscador")])],1),n("router-view")],1)},a=[],i=n(1001),u={},l=(0,i.Z)(u,o,a,!1,null,null,null),s=l.exports,c=n(2809),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("ESCUELA DE ARTES MARCIALES")]),r("img",{attrs:{src:n(1490),alt:""}})])}],p={name:"HomeView",components:{}},m=p,v=(0,i.Z)(m,d,f,!1,null,null,null),h=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Buscar un peleador por id")]),n("div",{staticClass:"formulario"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],attrs:{type:"text",placeholder:"Ingrese la ID del peleador a buscar"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Buscar"},on:{click:function(t){return t.preventDefault(),e.obtenerIdolo(e.id)}}})])])},_=[],g={name:"view-busqueda",data:function(){return{id:""}},methods:{obtenerIdolo(){""==this.id?alert("Ingrese un valor"):this.$router.push(`/peleadores/${this.id}`)}}},y=g,w=(0,i.Z)(y,b,_,!1,null,"3b8f5704",null),k=w.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Peleadores")]),n("div",{staticClass:"lista-peleadores"},[n("ul",e._l(e.peleadores,(function(t){return n("li",{key:t.id,on:{click:function(n){return e.encontrarPeleador(t.id)}}},[n("a",[e._v(e._s(t.nombre)+" ")])])})),0)])])},j=[],x={name:"view-peleadores",data:function(){return{peleadores:[]}},computed:{},methods:{async obtenerIdolo(){try{const e="/Artes-Marciales/";let t=await fetch(`${e}peleadores.json`);if(!t.ok)throw"Error en petición";let n=await t.json();this.peleadores=n,console.log(this.peleadores)}catch(e){console.log(e)}},encontrarPeleador(e){this.$router.push(`/peleadores/${e}`)}},created(){this.obtenerIdolo()}},$=x,O=(0,i.Z)($,E,j,!1,null,"0ab4960c",null),A=O.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.peleador?n("div",[n("h1",[e._v("¡Peleador encontrado :)!")]),n("h3",[e._v("ID: "+e._s(e.peleador.id))]),n("h3",[e._v("Nombre: "+e._s(e.peleador.nombre))]),n("img",{attrs:{src:e.peleador.imgSrc,alt:""}})]):e._e(),e.peleador?e._e():n("div",[n("h1",[e._v("El peleador que buscas no existe :(")])])])},C=[],I={name:"component-name",data:function(){return{peleador:{id:"",nombre:"",imgSrc:""}}},methods:{async obtenerIdolo(){try{const e="/Artes-Marciales/";let t=await fetch(`${e}peleadores.json`);if(!t.ok)throw"Error en petición";let n=await t.json();this.peleador=n.find((e=>e.id==this.$route.params.id)),console.log(this.peleador)}catch(e){console.log(e)}}},created(){this.obtenerIdolo()}},Z=I,S=(0,i.Z)(Z,P,C,!1,null,"cdd5f2dc",null),T=S.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v(" Esta página no existe :(")])},N=[],B={name:"component-name",data:function(){return{}},methods:{}},D=B,L=(0,i.Z)(D,M,N,!1,null,"2ab4efb7",null),q=L.exports;r.Z.use(c.Z);const F=[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5830))},{path:"/buscador",name:"buscador",component:k},{path:"/peleadores",name:"peleadores",component:A},{path:"/peleadores/:id",component:T,name:"peleador"},{path:"/*",component:q}],H=new c.Z({mode:"history",base:"/Artes-Marciales/",routes:F});var R=H;r.Z.config.productionTip=!1,new r.Z({router:R,render:e=>e(s)}).$mount("#app")},1490:function(e,t,n){e.exports=n.p+"img/141203172936_artes_marciales_estilos_624x351_thinkstock.bb701293.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.3241650e.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="idolos:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Artes-Marciales/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],l=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var c=l(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkidolos"]=self["webpackChunkidolos"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7463)}));r=n.O(r)})();
//# sourceMappingURL=app.0a401856.js.map