var HyperHTMLElement=function(e){"use strict";
/*! (c) Andrea Giammarchi (ISC) */var t=function(e){function t(){return this}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}function r(){}function i(e){var t=Pe.get(this);return t&&t.template===te(e)?o.apply(t.updates,arguments):function(e){e=te(e);var t=De.get(e)||function(e){var t=[],n=e.join(p).replace(Re,He),r=J(this,n);Le.find(r,t,e.slice());var i={fragment:r,paths:t};return De.set(e,i),i}.call(this,e),n=Y(this.ownerDocument,t.fragment),r=Le.create(n,t.paths);Pe.set(this,{template:e,updates:r}),o.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}function o(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}function a(e){return arguments.length<2?null==e?Fe("html"):"string"==typeof e?a.wire(null,e):"raw"in e?Fe("html")(e):"nodeType"in e?a.bind(e):Ze(e,"html"):("raw"in e?Fe("html"):a.wire).apply(null,arguments)}var u=document.defaultView,c=1,s=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,l="http://www.w3.org/2000/svg",f="connected",h="dis"+f,d=/^style|textarea$/i,v="_hyper: "+(Math.random()*new Date|0)+";",p="\x3c!--"+v+"--\x3e",m=u.Event;try{new m("Event")}catch(e){m=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var g=u.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},b=0,y=u.WeakMap||function(){var e=v+b++;return{get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},w=u.WeakSet||function(){var e=new y;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},N=Array.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}({}.toString),E=v.trim||function(){return this.replace(/^\s+|\s+$/g,"")},x=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||$(this,n,t.call(this,e))},set:function(e){$(this,n,e)}}},$=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},A={},C={},_=[],O=C.hasOwnProperty,k=0,S={attributes:A,define:function(e,t){e.indexOf("-")<0?(e in C||(k=_.push(e)),C[e]=t):A[e]=t},invoke:function(e,t){for(var n=0;n<k;n++){var r=_[n];if(O.call(e,r))return C[r](e[r],t)}}},j=function(e,t){return T(e).createElement(t)},T=function(e){return e.ownerDocument||e},L=function(e){return T(e).createDocumentFragment()},M=function(e,t){return T(e).createTextNode(t)},P=" \\f\\n\\r\\t",D="[ "+P+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",R="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",H="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",z=new RegExp(R+D+H+"+)([ "+P+"]*/?>)","g"),F=new RegExp(R+D+H+"*)([ "+P+"]*/>)","g"),Z=L(document),B="append"in Z,I="content"in j(document,"template");Z.appendChild(M(Z,"g")),Z.appendChild(M(Z,""));var V=1===Z.cloneNode(!0).childNodes.length,G="importNode"in document,W=B?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},q=new RegExp("("+D+"=)(['\"]?)"+p+"\\2","gi"),K=function(e,t,n,r){return"<"+t+n.replace(q,U)+r},U=function(e,t,n){return t+(n||'"')+v+(n||'"')},J=function(e,t){return("ownerSVGElement"in e?ie:re)(e,t.replace(z,K))},Q=V?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(Q(n[i]));return t}:function(e){return e.cloneNode(!0)},X=function(e){for(var t=[],n=e.childNodes,r=n.length,i=0;i<r;i++)n[i].nodeType===c&&t.push(n[i]);return t},Y=G?function(e,t){return e.importNode(t,!0)}:function(e,t){return Q(t)},ee=[].slice,te=function(e){return ne(e)},ne=function(e){if(e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||/Firefox\/(\d+)/.test((u.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};ne=function(e){var n="^"+e.join("^");return t[n]||(t[n]=e)}}else ne=function(e){return e};return ne(e)},re=I?function(e,t){var n=j(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=j(e,"template"),r=L(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",W(r,ee.call(n.querySelectorAll(i)))}else n.innerHTML=t,W(r,ee.call(n.childNodes));return r},ie=I?function(e,t){var n=L(e),r=T(e).createElementNS(l,"svg");return r.innerHTML=t,W(n,ee.call(r.childNodes)),n}:function(e,t){var n=L(e),r=j(e,"div");return r.innerHTML='<svg xmlns="'+l+'">'+t+"</svg>",W(n,ee.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){var e=L(this.first);return W(e,this.childNodes),e},n.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=T(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var oe=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},ae=function(e,t,n){return{type:e,name:n,node:t,path:function(e){var t=[],n=void 0;switch(e.nodeType){case c:case 11:n=e;break;case 8:n=e.parentNode,oe(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)oe(t,n,e);return t}(t)}},ue=function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e},ce=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,se=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="")}else t?e.value="":e.cssText="";var a=t?{}:e;for(var u in i){var c=i[u],s="number"!=typeof c||ce.test(u)?c:c+"px";/^--/.test(u)?a.setProperty(u,s):a[u]=s}n="object",t?e.value=he(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"")}}},le=/([^A-Z])([A-Z]+)/g,fe=function(e,t,n){return t+"-"+n.toLowerCase()},he=function(e){var t=[];for(var n in e)t.push(n.replace(le,fe),":",e[n],";");return t.join("")},de=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},ve=function(e,t){return e==t},pe=function(e){return e},me=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return-1;for(;n-t>=u;){for(var c=t,s=i;c<n&&s<o&&a(e[c],r[s]);)c++,s++;if(s===o)return t;t=c+1}return-1},ge=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},be=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},ye="undefined"==typeof Map?function(){var e=[],t=[];return{has:function(t){return-1<e.indexOf(t)},get:function(n){return t[e.indexOf(n)]},set:function(n){var r=e.indexOf(n);t[r<0?e.push(n)-1:r]=n}}}:Map,we=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},Ne=function(e,t,n,r,i,o,a,u,c,s,l,f,h){!function(e,t,n,r,i,o,a,u,c){for(var s=new ye,l=e.length,f=a,h=0;h<l;)switch(e[h++]){case 0:i++,f++;break;case 1:s.set(r[i],1),de(t,n,r,i++,i,f<u?t(o[f],1):c);break;case-1:f++}for(h=0;h<l;)switch(e[h++]){case 0:a++;break;case-1:s.has(o[a])?a++:be(t,n,o,a++,a)}}(function(e,t,n,r,i,o,a){var u=n+o,c=[],s=void 0,l=void 0,f=void 0,h=void 0,d=void 0,v=void 0,p=void 0;e:for(s=0;s<=u;s++){if(s>50)return null;for(p=s-1,d=s?c[s-1]:[0,0],v=c[s]=[],l=-s;l<=s;l+=2){for(f=(h=l===-s||l!==s&&d[p+l-1]<d[p+l+1]?d[p+l+1]:d[p+l-1]+1)-l;h<o&&f<n&&a(r[i+h],e[t+f]);)h++,f++;if(h===o&&f===n)break e;v[s+l]=h}}var m=Array(s/2+u/2),g=m.length-1;for(s=c.length-1;s>=0;s--){for(;h>0&&f>0&&a(r[i+h-1],e[t+f-1]);)m[g--]=0,h--,f--;if(!s)break;p=s-1,d=s?c[s-1]:[0,0],(l=h-f)==-s||l!==s&&d[p+l-1]<d[p+l+1]?(f--,m[g--]=1):(h--,m[g--]=-1)}return m}(n,r,o,a,u,s,f)||function(e,t,n,r,i,o,a,u){var c=0,s=r<u?r:u,l=Array(s++),f=Array(s);f[0]=-1;for(var h=1;h<s;h++)f[h]=a;for(var d=new ye,v=o;v<a;v++)d.set(i[v],v);for(var p=t;p<n;p++){var m=d.get(e[p]);null!=m&&-1<(c=we(f,s,m))&&(f[c]=m,l[c]={newi:p,oldi:m,prev:l[c-1]})}for(c=--s,--a;f[c]>a;)--c;s=u+r-c;var g=Array(s),b=l[c];for(--n;b;){for(var y=b,w=y.newi,N=y.oldi;n>w;)g[--s]=1,--n;for(;a>N;)g[--s]=-1,--a;g[--s]=0,--n,--a,b=b.prev}for(;n>=t;)g[--s]=1,--n;for(;a>=o;)g[--s]=-1,--a;return g}(n,r,i,o,a,u,c,s),e,t,n,r,a,u,l,h)},Ee=function(e,t,n,r){r||(r={});for(var i=r.compare||ve,o=r.node||pe,a=null==r.before?null:o(r.before,0),u=t.length,c=u,s=0,l=n.length,f=0;s<c&&f<l&&i(t[s],n[f]);)s++,f++;for(;s<c&&f<l&&i(t[c-1],n[l-1]);)c--,l--;var h=s===c,d=f===l;if(h&&d)return n;if(h&&f<l)return de(o,e,n,f,l,ge(o,t,s,u,a)),n;if(d&&s<c)return be(o,e,t,s,c),n;var v=c-s,p=l-f,m=-1;if(v<p){if(-1<(m=me(n,f,l,t,s,c,i)))return de(o,e,n,f,m,o(t[s],0)),de(o,e,n,m+v,l,ge(o,t,c,u,a)),n}else if(p<v&&-1<(m=me(t,s,c,n,f,l,i)))return be(o,e,t,s,m),be(o,e,t,m+p,c),n;return v<2||p<2?(de(o,e,n,f,l,o(t[s],0)),be(o,e,t,s,c),n):v===p&&function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,l,t,s,c,i)?(de(o,e,n,f,l,ge(o,t,c,u,a)),n):(Ne(o,e,n,f,l,p,t,s,c,v,u,i,a),n)},xe=new w;r.prototype=Object.create(null);var $e=function(e){return{html:e}},Ae=function e(t,r){return"ELEMENT_NODE"in t?t:t.constructor===n?1/r<0?r?t.remove():t.last:r?t.insert():t.first:e(t.render(),r)},Ce=function(e){return"ELEMENT_NODE"in e||e instanceof n||e instanceof t},_e=function(e,t,n){for(var i=new r,o=e.attributes,a=ee.call(o),u=[],c=a.length,s=0;s<c;s++){var l=a[s];if(l.value===v){var f=l.name;if(!(f in i)){var h=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[f]=o[h]||o[h.toLowerCase()],t.push(ae("attr",i[f],h))}u.push(l)}}for(var d=u.length,p=0;p<d;p++){var m=u[p];/^id$/i.test(m.name)?e.removeAttribute(m.name):e.removeAttributeNode(u[p])}var g=e.nodeName;if(/^script$/i.test(g)){for(var b=document.createElement(g),y=0;y<o.length;y++)b.setAttributeNode(o[y].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}},Oe=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then($e).then(t):Promise.resolve(S.invoke(e,t)).then(t)},ke=function(e){return null!=e&&"then"in e},Se=function(e,t){var n={node:Ae,before:e},r=!1,i=void 0;return function o(a){switch(typeof a){case"string":case"number":case"boolean":r?i!==a&&(i=a,t[0].textContent=a):(r=!0,i=a,t=Ee(e.parentNode,t,[M(e,a)],n));break;case"object":case"undefined":if(null==a){r=!1,t=Ee(e.parentNode,t,[],n);break}default:if(r=!1,i=a,N(a))if(0===a.length)t.length&&(t=Ee(e.parentNode,t,[],n));else switch(typeof a[0]){case"string":case"number":case"boolean":o({html:a});break;case"object":if(N(a[0])&&(a=a.concat.apply([],a)),ke(a[0])){Promise.all(a).then(o);break}default:t=Ee(e.parentNode,t,a,n)}else Ce(a)?t=Ee(e.parentNode,t,11===a.nodeType?ee.call(a.childNodes):[a],n):ke(a)?a.then(o):"placeholder"in a?Oe(a,o):"text"in a?o(String(a.text)):"any"in a?o(a.any):"html"in a?t=Ee(e.parentNode,t,ee.call(J(e,[].concat(a.html).join("")).childNodes),n):o("length"in a?ee.call(a):S.invoke(a,o))}}},je=function(e,t,n){var r="ownerSVGElement"in e,i=void 0;if("style"===t)return function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),se(r,n)}return se(e.style,n)}(e,n,r);if(/^on/.test(t)){var o=t.slice(2);return o===f||o===h?(Me&&(Me=!1,function(){var e=function(e,n){for(var r=new m(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===c&&t(a,r)}},t=function e(t,n){xe.has(t)&&t.dispatchEvent(n);for(var r=t.children||X(t),i=r.length,o=0;o<i;o++)e(r[o],n)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,h),e(i.addedNodes,f)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],h)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],f)},!1)}}()),xe.add(e)):t.toLowerCase()in e&&(o=o.toLowerCase()),function(t){i!==t&&(i&&e.removeEventListener(o,i,!1),i=t,t&&e.addEventListener(o,t,!1))}}if("data"===t||!r&&t in e)return function(n){i!==n&&(i=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in S.attributes)return function(n){i=S.attributes[t](e,n),e.setAttribute(t,null==i?"":i)};var a=!1,u=n.cloneNode(!0);return function(t){i!==t&&(i=t,u.value!==t&&(null==t?(a&&(a=!1,e.removeAttributeNode(u)),u.value=t):(u.value=t,a||(a=!0,e.setAttributeNode(u)))))}},Te=function(e){var t=void 0;return function n(r){t!==r&&(t=r,"object"==typeof r&&r?ke(r)?r.then(n):"placeholder"in r?Oe(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?ee.call(r).join(""):S.invoke(r,n)):e.textContent=null==r?"":r)}},Le={create:function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=ue(e,o.path);switch(o.type){case"any":n.push(Se(a,[]));break;case"attr":n.push(je(a,o.name,o.node));break;case"text":n.push(Te(a)),a.textContent=""}}return n},find:function e(t,n,r){for(var i=t.childNodes,o=i.length,a=0;a<o;a++){var u=i[a];switch(u.nodeType){case c:_e(u,n,r),e(u,n,r);break;case 8:u.textContent===v&&(r.shift(),n.push(d.test(t.nodeName)?ae("text",t):ae("any",u)));break;case 3:d.test(t.nodeName)&&E.call(u.textContent)===p&&(r.shift(),n.push(ae("text",t)))}}}},Me=!0,Pe=new y,De=function(){try{var e=new y,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new g}}(),Re=F,He=function(e,t,n){return s.test(t)?e:"<"+t+n+"></"+t+">"},ze=new y,Fe=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,a=void 0;return function(u){u=te(u);var c=o!==u;return c&&(o=u,r=L(document),n="svg"===e?document.createElementNS(l,"svg"):r,a=i.bind(n)),a.apply(null,arguments),c&&("svg"===e&&W(r,ee.call(n.childNodes)),t=Be(r)),t}},Ze=function(e,t){var n=t.indexOf(":"),r=ze.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||ze.set(e,r={}),r[i]||(r[i]=Fe(t))},Be=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==c&&0===E.call(a.textContent).length||i.push(a)}return 1===i.length?i[0]:new n(i)},Ie=S.define;return a.Component=t,a.bind=function(e){return i.bind(e)},a.define=Ie,a.diff=Ee,a.hyper=a,a.wire=function(e,t){return null==e?Fe(t||"html"):Ze(e,t||"html")},function(e){var n=new y,r=Object.create,i=function(e,t){var n={w:null,p:null};return t.set(e,n),n};Object.defineProperties(t,{for:{configurable:!0,value:function(e,t){return function(e,t,n,o){var a=t.get(e)||i(e,t);switch(typeof o){case"object":case"function":var u=a.w||(a.w=new y);return u.get(o)||function(e,t,n){return e.set(t,n),n}(u,o,new e(n));default:var c=a.p||(a.p=r(null));return c[o]||(c[o]=new e(n))}}(this,n.get(e)||function(e){var t=new g;return n.set(e,t),t}(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:x("html",e),svg:x("svg",e),state:x("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}(Fe),a}(window);const{Component:n,bind:r,define:i,diff:o,hyper:a,wire:u}=t,c="attributeChangedCallback",s=Object,l=[],f=s.defineProperty,h=s.getOwnPropertyDescriptor,d=s.getOwnPropertyNames,v=s.getOwnPropertySymbols||(()=>[]),p=s.getPrototypeOf||(e=>e.__proto__),m="object"==typeof Reflect&&Reflect.ownKeys||(e=>d(e).concat(v(e))),g=s.setPrototypeOf||((e,t)=>(e.__proto__=t,e)),b=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());
/*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */class y extends HTMLElement{static define(e,t){const n=this,r=n.prototype,i=r[c],o=!!i,a=n.booleanAttributes||[];a.forEach(e=>{e in r||f(r,b(e),{configurable:!0,get(){return this.hasAttribute(e)},set(t){t&&"false"!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});const u=n.observedAttributes||[];u.forEach(e=>{e in r||f(r,b(e),{configurable:!0,get(){return this.getAttribute(e)},set(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})});const s=a.concat(u);s.length&&f(n,"observedAttributes",{get:()=>s});const v=r.created||function(){this.render()};f(r,"_init$",{configurable:!0,writable:!0,value:!0}),f(r,c,{configurable:!0,value:function e(t,n,r){if(this._init$&&(N.call(this,v),this._init$))return this._init$$.push(e.bind(this,t,n,r));o&&n!==r&&i.apply(this,arguments)}});const y=r.connectedCallback,w=!!y;if(f(r,"connectedCallback",{configurable:!0,value:function e(){if(this._init$&&(N.call(this,v),this._init$))return this._init$$.push(e.bind(this));w&&y.apply(this,arguments)}}),d(r).forEach(e=>{if(/^handle[A-Z]/.test(e)){const t="_"+e+"$",n=r[e];f(r,e,{configurable:!0,get(){return this[t]||(this[t]=n.bind(this))}})}}),"handleEvent"in r||f(r,"handleEvent",{configurable:!0,value(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}}),t&&t.extends){const i=document.createElement(t.extends).constructor,o=class extends i{},a=p(n);m(a).filter(e=>["length","name","arguments","caller","prototype"].indexOf(e)<0).forEach(e=>f(o,e,h(a,e))),m(a.prototype).forEach(e=>f(o.prototype,e,h(a.prototype,e))),g(n,o),g(r,o.prototype),customElements.define(e,n,t)}else customElements.define(e,n);return l.push(n),n}get html(){return this._html$||(this.html=r(this.shadowRoot||this._shadowRoot||this))}set html(e){f(this,"_html$",{configurable:!0,value:e})}render(){}get defaultState(){return{}}get state(){return this._state$||(this.state=this.defaultState)}set state(e){f(this,"_state$",{configurable:!0,value:e})}setState(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}y.Component=n,y.bind=r,y.intent=i,y.wire=u,y.hyper=a;try{Symbol.hasInstance&&l.push(f(y,Symbol.hasInstance,{enumerable:!1,configurable:!0,value:e=>l.some(x,p(e))}))}catch(e){}const w={type:"DOMContentLoaded",handleEvent(){w.ready()?(document.removeEventListener(w.type,w,!1),w.list.splice(0).forEach(E)):setTimeout(w.handleEvent)},ready:()=>"complete"===document.readyState,list:[]};function N(e){if(w.ready()||function(e){let t=this;do{if(t.nextSibling)return!0}while(t=t.parentNode);return setTimeout(N.bind(this,e)),!1}.call(this,e)){if(this._init$){const t=this._init$$;t&&delete this._init$$,e.call(f(this,"_init$",{value:!1})),t&&t.forEach(E)}}else this.hasOwnProperty("_init$$")||f(this,"_init$$",{configurable:!0,value:[]}),w.list.push(N.bind(this,e))}function E(e){e()}function x(e){return this===e.prototype}return w.ready()||document.addEventListener(w.type,w,!1),e.default=y,e.default}({});