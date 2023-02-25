(()=>{"use strict";var e,t,r,o,n,a,i,s,c,d,p,l,u,f,v={800:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(81),n=r.n(o),a=r(645),i=r.n(a)()(n());i.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Karla:weight@400;700&display=swap);"]),i.push([e.id,'body{font-family:"Karla",sans-serif;color:#000}input:focus{outline:none}.container{margin:0 auto;position:relative;top:50px;width:30%;box-shadow:0 0 16px #d1d1d1}.headerWrapper{justify-content:space-between;padding:0 16px;margin:10px 0;display:flex;border:none;border-bottom:2px solid #000;border-color:#f0f0f0}.headerText{font-weight:400}.reload{vertical-align:middle;position:relative;top:20px;height:16px;width:14px}.reload:hover{animation:roll 1s ease}@keyframes roll{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}#input{margin:10px 0;padding:0;padding-left:20px;border:none;border-bottom:2px solid #000;border-color:#f0f0f0;width:95%;font-style:italic}.todo-list{display:flex;flex-direction:column}.list{border:none;padding:10px 20px;width:80%;border-radius:10px}.wrapper,.wrapperCheck{padding:0 16px;padding-right:0;border-bottom:2px solid #000;border-color:#f0f0f0}.check{position:relative;top:2px;width:12px;height:12px}.clear{height:30px;text-decoration:none;color:#000;text-align:center;background-color:#f0f0f0;padding:10px}.clear-link{text-decoration:none;color:#000;margin:0 auto;position:relative;top:5px;user-select:none}.clear:active{background-color:#d1d0d0}',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),n&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=n):p[4]="".concat(n)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var v=n(f,o);o.byIndex=s,t.splice(s,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=o(e,n),d=0;d<a.length;d++){var p=r(a[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function m(e){var t=h[e];if(void 0!==t)return t.exports;var r=h[e]={id:e,exports:{}};return v[e](r,r.exports,m),r.exports}m.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return m.d(t,{a:t}),t},m.d=(e,t)=>{for(var r in t)m.o(t,r)&&!m.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),m.nc=void 0,e=m(379),t=m.n(e),r=m(795),o=m.n(r),n=m(569),a=m.n(n),i=m(565),s=m.n(i),c=m(216),d=m.n(c),p=m(589),l=m.n(p),u=m(800),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.querySelector("body").style.backgroundColor="#000"})();