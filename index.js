var HyperHTMLElement = (function (exports) {
  'use strict';

  /*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){function t(){return this}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1];}function r(){}function i(){var e=function(e,n){for(var r=new w(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===s&&t(a,r);}},t=function r(e,t){Le.has(e)&&e.dispatchEvent(t);for(var n=e.children||te(e),i=n.length,o=0;o<i;o++)r(n[o],t);};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,p),e(i.addedNodes,h);}}).observe(document,{subtree:!0,childList:!0});}catch(n){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],p);},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],h);},!1);}}function o(e){var t=Ie.get(this);return t&&t.template===ie(e)?u.apply(t.updates,arguments):a.apply(this,arguments),this}function a(e){e=ie(e);var t=We.get(e)||c.call(this,e),n=ne(this.ownerDocument,t.fragment),r=Ve.create(n,t.paths);Ie.set(this,{template:e,updates:r}),u.apply(r,arguments),this.textContent="",this.appendChild(n);}function u(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t]);}function c(e){var t=[],n=e.join(b).replace(qe,Je),r=Y(this,n);Ve.find(r,t,e.slice());var i={fragment:r,paths:t};return We.set(e,i),i}function f(e){return arguments.length<2?null==e?Ue("html"):"string"==typeof e?f.wire(null,e):"raw"in e?Ue("html")(e):"nodeType"in e?f.bind(e):Xe(e,"html"):("raw"in e?Ue("html"):f.wire).apply(null,arguments)}var l=document.defaultView,s=1,d=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,v="http://www.w3.org/2000/svg",h="connected",p="dis"+h,g=/^style|textarea$/i,m="_hyper: "+(Math.random()*new Date|0)+";",b="\x3c!--"+m+"--\x3e",w=l.Event;try{new w("Event");}catch(nt){w=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t};}var y=l.Map||function(){var e=[],t=[];return {get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r;}}},N=0,x=l.WeakMap||function(){var e=m+N++;return {get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n});}}},E=l.WeakSet||function(){var e=new x;return {add:function(t){e.set(t,!0);},has:function(t){return !0===e.get(t)}}},C=Array.isArray||function(e){return function(t){return "[object Array]"===e.call(t)}}({}.toString),k=m.trim||function(){return this.replace(/^\s+|\s+$/g,"")},A=function(e,t){var n="_"+e+"$";return {get:function(){return this[n]||j(this,n,t.call(this,e))},set:function(e){j(this,n,e);}}},j=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},O={},S={},T=[],L=S.hasOwnProperty,M=0,$={attributes:O,define:function(e,t){e.indexOf("-")<0?(e in S||(M=T.push(e)),S[e]=t):O[e]=t;},invoke:function(e,t){for(var n=0;n<M;n++){var r=T[n];if(L.call(e,r))return S[r](e[r],t)}}},D=function(e,t){return P(e).createElement(t)},P=function(e){return e.ownerDocument||e},R=function(e){return P(e).createDocumentFragment()},_=function(e,t){return P(e).createTextNode(t)},H=" \\f\\n\\r\\t",z="[ "+H+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",F="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",B="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",Z=new RegExp(F+z+B+"+)([ "+H+"]*/?>)","g"),V=new RegExp(F+z+B+"*)([ "+H+"]*/>)","g"),G=R(document),I="append"in G,W="content"in D(document,"template");G.appendChild(_(G,"g")),G.appendChild(_(G,""));var q=1===G.cloneNode(!0).childNodes.length,J="importNode"in document,K=I?function(e,t){e.append.apply(e,t);}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r]);},Q=new RegExp("("+z+"=)(['\"]?)"+b+"\\2","gi"),U=function(e,t,n,r){return "<"+t+n.replace(Q,X)+r},X=function(e,t,n){return t+(n||'"')+m+(n||'"')},Y=function(e,t){return ("ownerSVGElement"in e?ue:ae)(e,t.replace(Z,U))},ee=q?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(ee(n[i]));return t}:function(e){return e.cloneNode(!0)},te=function(e){for(var t=[],n=e.childNodes,r=n.length,i=0;i<r;i++)n[i].nodeType===s&&t.push(n[i]);return t},ne=J?function(e,t){return e.importNode(t,!0)}:function(e,t){return ee(t)},re=[].slice,ie=function(e){return oe(e)},oe=function(e){if(e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||/Firefox\/(\d+)/.test((l.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};oe=function(e){var n="^"+e.join("^");return t[n]||(t[n]=e)};}else oe=function(e){return e};return oe(e)},ae=W?function(e,t){var n=D(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=D(e,"template"),r=R(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",K(r,re.call(n.querySelectorAll(i)));}else n.innerHTML=t,K(r,re.call(n.childNodes));return r},ue=W?function(e,t){var n=R(e),r=P(e).createElementNS(v,"svg");return r.innerHTML=t,K(n,re.call(r.childNodes)),n}:function(e,t){var n=R(e),r=D(e,"div");return r.innerHTML='<svg xmlns="'+v+'">'+t+"</svg>",K(n,re.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){var e=R(this.first);return K(e,this.childNodes),e},n.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=P(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents();}return e};var ce=function(e){var t=[],n=void 0;switch(e.nodeType){case s:case 11:n=e;break;case 8:n=e.parentNode,fe(t,n,e);break;default:n=e.ownerElement;}for(e=n;n=n.parentNode;e=n)fe(t,n,e);return t},fe=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n));},le={create:function(e,t,n){return {type:e,name:n,node:t,path:ce(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e}},se=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,de=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),ve(r,n)}return ve(e.style,n)},ve=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="");}else t?e.value="":e.cssText="";var a=t?{}:e;for(var u in i){var c=i[u],f="number"!=typeof c||se.test(u)?c:c+"px";/^--/.test(u)?a.setProperty(u,f):a[u]=f;}n="object",t?e.value=ge(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"");}}},he=/([^A-Z])([A-Z]+)/g,pe=function(e,t,n){return t+"-"+n.toLowerCase()},ge=function(e){var t=[];for(var n in e)t.push(n.replace(he,pe),":",e[n],";");return t.join("")},me=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o);}},be=function(e,t){return e==t},we=function(e){return e},ye=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return -1;for(;n-t>=u;){for(var c=t,f=i;c<n&&f<o&&a(e[c],r[f]);)c++,f++;if(f===o)return t;t=c+1;}return -1},Ne=function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t},xe=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},Ee=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents();}},Ce="undefined"==typeof Map?function(){var e=[],t=[];return {has:function(t){return -1<e.indexOf(t)},get:function(n){return t[e.indexOf(n)]},set:function(n){var r=e.indexOf(n);t[r<0?e.push(n)-1:r]=n;}}}:Map,ke=function(e,t,n,r,i,o,a,u){var c=0,f=r<u?r:u,l=Array(f++),s=Array(f);s[0]=-1;for(var d=1;d<f;d++)s[d]=a;for(var v=new Ce,h=o;h<a;h++)v.set(i[h],h);for(var p=t;p<n;p++){var g=v.get(e[p]);null!=g&&-1<(c=Oe(s,f,g))&&(s[c]=g,l[c]={newi:p,oldi:g,prev:l[c-1]});}for(c=--f,--a;s[c]>a;)--c;f=u+r-c;var m=Array(f),b=l[c];for(--n;b;){for(var w=b,y=w.newi,N=w.oldi;n>y;)m[--f]=1,--n;for(;a>N;)m[--f]=-1,--a;m[--f]=0,--n,--a,b=b.prev;}for(;n>=t;)m[--f]=1,--n;for(;a>=o;)m[--f]=-1,--a;return m},Ae=function(e,t,n,r,i,o,a){var u=n+o,c=[],f=void 0,l=void 0,s=void 0,d=void 0,v=void 0,h=void 0,p=void 0;e:for(f=0;f<=u;f++){if(f>50)return null;for(p=f-1,v=f?c[f-1]:[0,0],h=c[f]=[],l=-f;l<=f;l+=2){for(d=l===-f||l!==f&&v[p+l-1]<v[p+l+1]?v[p+l+1]:v[p+l-1]+1,s=d-l;d<o&&s<n&&a(r[i+d],e[t+s]);)d++,s++;if(d===o&&s===n)break e;h[f+l]=d;}}var g=Array(f/2+u/2),m=g.length-1;for(f=c.length-1;f>=0;f--){for(;d>0&&s>0&&a(r[i+d-1],e[t+s-1]);)g[m--]=0,d--,s--;if(!f)break;p=f-1,v=f?c[f-1]:[0,0],l=d-s,l===-f||l!==f&&v[p+l-1]<v[p+l+1]?(s--,g[m--]=1):(d--,g[m--]=-1);}return g},je=function(e,t,n,r,i,o,a,u,c){for(var f=new Ce,l=e.length,s=a,d=0;d<l;)switch(e[d++]){case 0:i++,s++;break;case 1:f.set(r[i],1),me(t,n,r,i++,i,s<u?t(o[s],1):c);break;case-1:s++;}for(d=0;d<l;)switch(e[d++]){case 0:a++;break;case-1:f.has(o[a])?a++:Ee(t,n,o,a++,a);}},Oe=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1;}return r},Se=function(e,t,n,r,i,o,a,u,c,f,l,s,d){je(Ae(n,r,o,a,u,f,s)||ke(n,r,i,o,a,u,c,f),e,t,n,r,a,u,l,d);},Te=function(e,t,n,r){r||(r={});for(var i=r.compare||be,o=r.node||we,a=null==r.before?null:o(r.before,0),u=t.length,c=u,f=0,l=n.length,s=0;f<c&&s<l&&i(t[f],n[s]);)f++,s++;for(;f<c&&s<l&&i(t[c-1],n[l-1]);)c--,l--;var d=f===c,v=s===l;if(d&&v)return n;if(d&&s<l)return me(o,e,n,s,l,xe(o,t,f,u,a)),n;if(v&&f<c)return Ee(o,e,t,f,c),n;var h=c-f,p=l-s,g=-1;if(h<p){if(-1<(g=ye(n,s,l,t,f,c,i)))return me(o,e,n,s,g,o(t[f],0)),me(o,e,n,g+h,l,xe(o,t,c,u,a)),n}else if(p<h&&-1<(g=ye(t,f,c,n,s,l,i)))return Ee(o,e,t,f,g),Ee(o,e,t,g+p,c),n;return h<2||p<2?(me(o,e,n,s,l,o(t[f],0)),Ee(o,e,t,f,c),n):h===p&&Ne(n,l,t,f,c,i)?(me(o,e,n,s,l,xe(o,t,c,u,a)),n):(Se(o,e,n,s,l,p,t,f,c,h,u,i,a),n)},Le=new E;r.prototype=Object.create(null);var Me=function(e){return {html:e}},$e=function rt(e,t){return "ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.insert():e.first:rt(e.render(),t)},De=function(e){return "ELEMENT_NODE"in e||e instanceof n||e instanceof t},Pe=function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=le.find(e,o.path);switch(o.type){case"any":n.push(Fe(a,[]));break;case"attr":n.push(Be(a,o.name,o.node));break;case"text":n.push(Ze(a)),a.textContent="";}}return n},Re=function it(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case s:_e(a,t,n),it(a,t,n);break;case 8:a.textContent===m&&(n.shift(),t.push(g.test(e.nodeName)?le.create("text",e):le.create("any",a)));break;case 3:g.test(e.nodeName)&&k.call(a.textContent)===b&&(n.shift(),t.push(le.create("text",e)));}}},_e=function(e,t,n){for(var i=new r,o=e.attributes,a=re.call(o),u=[],c=a.length,f=0;f<c;f++){var l=a[f];if(l.value===m){var s=l.name;if(!(s in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[s]=o[d]||o[d.toLowerCase()],t.push(le.create("attr",i[s],d));}u.push(l);}}for(var v=u.length,h=0;h<v;h++){var p=u[h];/^id$/i.test(p.name)?e.removeAttribute(p.name):e.removeAttributeNode(u[h]);}var g=e.nodeName;if(/^script$/i.test(g)){for(var b=document.createElement(g),w=0;w<o.length;w++)b.setAttributeNode(o[w].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e);}},He=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(Me).then(t):Promise.resolve($.invoke(e,t)).then(t);},ze=function(e){return null!=e&&"then"in e},Fe=function(e,t){var n={node:$e,before:e},r=!1,i=void 0;return function o(a){switch(typeof a){case"string":case"number":case"boolean":r?i!==a&&(i=a,t[0].textContent=a):(r=!0,i=a,t=Te(e.parentNode,t,[_(e,a)],n));break;case"object":case"undefined":if(null==a){r=!1,t=Te(e.parentNode,t,[],n);break}default:if(r=!1,i=a,C(a))if(0===a.length)t.length&&(t=Te(e.parentNode,t,[],n));else switch(typeof a[0]){case"string":case"number":case"boolean":o({html:a});break;case"object":if(C(a[0])&&(a=a.concat.apply([],a)),ze(a[0])){Promise.all(a).then(o);break}default:t=Te(e.parentNode,t,a,n);}else De(a)?t=Te(e.parentNode,t,11===a.nodeType?re.call(a.childNodes):[a],n):ze(a)?a.then(o):"placeholder"in a?He(a,o):"text"in a?o(String(a.text)):"any"in a?o(a.any):"html"in a?t=Te(e.parentNode,t,re.call(Y(e,[].concat(a.html).join("")).childNodes),n):o("length"in a?re.call(a):$.invoke(a,o));}}},Be=function(e,t,n){var r="ownerSVGElement"in e,o=void 0;if("style"===t)return de(e,n,r);if(/^on/.test(t)){var a=t.slice(2);return a===h||a===p?(Ge&&(Ge=!1,i()),Le.add(e)):t.toLowerCase()in e&&(a=a.toLowerCase()),function(t){o!==t&&(o&&e.removeEventListener(a,o,!1),o=t,t&&e.addEventListener(a,t,!1));}}if("data"===t||!r&&t in e)return function(n){o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)));};if(t in $.attributes)return function(n){o=$.attributes[t](e,n),e.setAttribute(t,null==o?"":o);};var u=!1,c=n.cloneNode(!0);return function(t){o!==t&&(o=t,c.value!==t&&(null==t?(u&&(u=!1,e.removeAttributeNode(c)),c.value=t):(c.value=t,u||(u=!0,e.setAttributeNode(c)))));}},Ze=function(e){var t=void 0;return function n(r){t!==r&&(t=r,"object"==typeof r&&r?ze(r)?r.then(n):"placeholder"in r?He(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?re.call(r).join(""):$.invoke(r,n)):e.textContent=null==r?"":r);}},Ve={create:Pe,find:Re},Ge=!0,Ie=new x,We=function(){try{var e=new x,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new y}}(),qe=V,Je=function(e,t,n){return d.test(t)?e:"<"+t+n+"></"+t+">"},Ke=new x,Qe=function(e,t){return null==e?Ue(t||"html"):Xe(e,t||"html")},Ue=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,a=void 0;return function(u){u=ie(u);var c=i!==u;return c&&(i=u,r=R(document),n="svg"===e?document.createElementNS(v,"svg"):r,a=o.bind(n)),a.apply(null,arguments),c&&("svg"===e&&K(r,re.call(n.childNodes)),t=Ye(r)),t}},Xe=function(e,t){var n=t.indexOf(":"),r=Ke.get(e),i=t;return -1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Ke.set(e,r={}),r[i]||(r[i]=Ue(t))},Ye=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==s&&0===k.call(a.textContent).length||i.push(a);}return 1===i.length?i[0]:new n(i)},et=function(e){return o.bind(e)},tt=$.define;return f.Component=t,f.bind=et,f.define=tt,f.diff=Te,f.hyper=f,f.wire=Qe,function(e){var n=new x,r=Object.create,i=function(e,t,n){return e.set(t,n),n},o=function(e,t,n,o){var u=t.get(e)||a(e,t);switch(typeof o){case"object":case"function":var c=u.w||(u.w=new x);return c.get(o)||i(c,o,new e(n));default:var f=u.p||(u.p=r(null));return f[o]||(f[o]=new e(n))}},a=function(e,t){var n={w:null,p:null};return t.set(e,n),n},u=function(e){var t=new y;return n.set(e,t),t};Object.defineProperties(t,{"for":{configurable:!0,value:function(e,t){return o(this,n.get(e)||u(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e);}},html:A("html",e),svg:A("svg",e),state:A("state",function(){return this.defaultState}),defaultState:{get:function(){return {}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return !1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return !1!==t&&this.render(),this}}});}(Ue),f}(window);
  const {Component, bind, define, diff, hyper, wire} = hyperHTML;

  /*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */

  // utils to deal with custom elements builtin extends
  const ATTRIBUTE_CHANGED_CALLBACK = 'attributeChangedCallback';
  const O = Object;
  const classes = [];
  const defineProperty = O.defineProperty;
  const getOwnPropertyDescriptor = O.getOwnPropertyDescriptor;
  const getOwnPropertyNames = O.getOwnPropertyNames;
  const getOwnPropertySymbols = O.getOwnPropertySymbols || (() => []);
  const getPrototypeOf = O.getPrototypeOf || (o => o.__proto__);
  const ownKeys = typeof Reflect === 'object' && Reflect.ownKeys ||
                  (o => getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  const setPrototypeOf = O.setPrototypeOf ||
                        ((o, p) => (o.__proto__ = p, o));
  const camel = name => name.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase());

  class HyperHTMLElement extends HTMLElement {

    // define a custom-element in the CustomElementsRegistry
    // class MyEl extends HyperHTMLElement {}
    // MyEl.define('my-el');
    static define(name, options) {
      const Class = this;
      const proto = Class.prototype;

      const onChanged = proto[ATTRIBUTE_CHANGED_CALLBACK];
      const hasChange = !!onChanged;

      // Class.booleanAttributes
      // -----------------------------------------------
      // attributes defined as boolean will have
      // an either available or not available attribute
      // regardless of the value.
      // All falsy values, or "false", mean attribute removed
      // while truthy values will be set as is.
      // Boolean attributes are also automatically observed.
      const booleanAttributes = Class.booleanAttributes || [];
      booleanAttributes.forEach(name => {
        if (!(name in proto)) defineProperty(
          proto,
          camel(name),
          {
            configurable: true,
            get() {
              return this.hasAttribute(name);
            },
            set(value) {
              if (!value || value === 'false')
                this.removeAttribute(name);
              else
                this.setAttribute(name, value);
            }
          }
        );
      });

      // Class.observedAttributes
      // -------------------------------------------------------
      // HyperHTMLElement will directly reflect get/setAttribute
      // operation once these attributes are used, example:
      // el.observed = 123;
      // will automatically do
      // el.setAttribute('observed', 123);
      // triggering also the attributeChangedCallback
      const observedAttributes = Class.observedAttributes || [];
      observedAttributes.forEach(name => {
        // it is possible to redefine the behavior at any time
        // simply overwriting get prop() and set prop(value)
        if (!(name in proto)) defineProperty(
          proto,
          camel(name),
          {
            configurable: true,
            get() {
              return this.getAttribute(name);
            },
            set(value) {
              if (value == null)
                this.removeAttribute(name);
              else
                this.setAttribute(name, value);
            }
          }
        );
      });

      // if these are defined, overwrite the observedAttributes getter
      // to include also booleanAttributes
      const attributes = booleanAttributes.concat(observedAttributes);
      if (attributes.length)
        defineProperty(Class, 'observedAttributes', {
          get() { return attributes; }
        });

      // created() {}
      // ---------------------------------
      // an initializer method that grants
      // the node is fully known to the browser.
      // It is ensured to run either after DOMContentLoaded,
      // or once there is a next sibling (stream-friendly) so that
      // you have full access to element attributes and/or childNodes.
      const created = proto.created || function () {
        this.render();
      };

      // used to ensure create() is called once and once only
      defineProperty(
        proto,
        '_init$',
        {
          configurable: true,
          writable: true,
          value: true
        }
      );

      defineProperty(
        proto,
        ATTRIBUTE_CHANGED_CALLBACK,
        {
          configurable: true,
          value: function aCC(name, prev, curr) {
            if (this._init$) {
              checkReady.call(this, created);
              if (this._init$)
                return this._init$$.push(aCC.bind(this, name, prev, curr));
            }
            // ensure setting same value twice
            // won't trigger twice attributeChangedCallback
            if (hasChange && prev !== curr) {
              onChanged.apply(this, arguments);
            }
          }
        }
      );

      const onConnected = proto.connectedCallback;
      const hasConnect = !!onConnected;
      defineProperty(
        proto,
        'connectedCallback',
        {
          configurable: true,
          value: function cC() {
            if (this._init$) {
              checkReady.call(this, created);
              if (this._init$)
                return this._init$$.push(cC.bind(this));
            }
            if (hasConnect) {
              onConnected.apply(this, arguments);
            }
          }
        }
      );

      // define lazily all handlers
      // class { handleClick() { ... }
      // render() { `<a onclick=${this.handleClick}>` } }
      getOwnPropertyNames(proto).forEach(key => {
        if (/^handle[A-Z]/.test(key)) {
          const _key$ = '_' + key + '$';
          const method = proto[key];
          defineProperty(proto, key, {
            configurable: true,
            get() {
              return  this[_key$] ||
                      (this[_key$] = method.bind(this));
            }
          });
        }
      });

      // whenever you want to directly use the component itself
      // as EventListener, you can pass it directly.
      // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
      //  class Reactive extends HyperHTMLElement {
      //    oninput(e) { console.log(this, 'changed', e.target.value); }
      //    render() { this.html`<input oninput="${this}">`; }
      //  }
      if (!('handleEvent' in proto)) {
        defineProperty(
          proto,
          'handleEvent',
          {
            configurable: true,
            value(event) {
              this[
                (event.currentTarget.dataset || {}).call ||
                ('on' + event.type)
              ](event);
            }
          }
        );
      }

      if (options && options.extends) {
        const Native = document.createElement(options.extends).constructor;
        const Intermediate = class extends Native {};
        const Super = getPrototypeOf(Class);
        ownKeys(Super)
          .filter(key => [
            'length', 'name', 'arguments', 'caller', 'prototype'
          ].indexOf(key) < 0)
          .forEach(key => defineProperty(
            Intermediate,
            key,
            getOwnPropertyDescriptor(Super, key)
          )
        );
        ownKeys(Super.prototype)
          .forEach(key => defineProperty(
            Intermediate.prototype,
            key,
            getOwnPropertyDescriptor(Super.prototype, key)
          )
        );
        setPrototypeOf(Class, Intermediate);
        setPrototypeOf(proto, Intermediate.prototype);
        customElements.define(name, Class, options);
      } else {
        customElements.define(name, Class);
      }
      classes.push(Class);
      return Class;
    }

    // lazily bind once hyperHTML logic
    // to either the shadowRoot, if present and open,
    // the _shadowRoot property, if set due closed shadow root,
    // or the custom-element itself if no Shadow DOM is used.
    get html() {
      return this._html$ || (this.html = bind(
        // in case of Shadow DOM {mode: "open"}, use it
        this.shadowRoot ||
        // in case of Shadow DOM {mode: "close"}, use it
        // this needs the following reference created upfront
        // this._shadowRoot = this.attachShadow({mode: "close"});
        this._shadowRoot ||
        // if no Shadow DOM is used, simply use the component
        // as container for its own content (it just works too)
        this
      ));
    }

    // it can be set too if necessary, it won't invoke render()
    set html(value) {
      defineProperty(this, '_html$', {configurable: true, value: value});
    }

    // overwrite this method with your own render
    render() {}

    // ---------------------//
    // Basic State Handling //
    // ---------------------//

    // define the default state object
    // you could use observed properties too
    get defaultState() { return {}; }

    // the state with a default
    get state() {
      return this._state$ || (this.state = this.defaultState);
    }

    // it can be set too if necessary, it won't invoke render()
    set state(value) {
      defineProperty(this, '_state$', {configurable: true, value: value});
    }

    // currently a state is a shallow copy, like in Preact or other libraries.
    // after the state is updated, the render() method will be invoked.
    // ⚠️ do not ever call this.setState() inside this.render()
    setState(state, render) {
      const target = this.state;
      const source = typeof state === 'function' ? state.call(this, target) : state;
      for (const key in source) target[key] = source[key];
      if (render !== false) this.render();
      return this;
    }

  }
  // exposing hyperHTML utilities
  HyperHTMLElement.Component = Component;
  HyperHTMLElement.bind = bind;
  HyperHTMLElement.intent = define;
  HyperHTMLElement.wire = wire;
  HyperHTMLElement.hyper = hyper;

  try {
    if (Symbol.hasInstance) classes.push(
      defineProperty(HyperHTMLElement, Symbol.hasInstance, {
        enumerable: false,
        configurable: true,
        value(instance) {
          return classes.some(isPrototypeOf, getPrototypeOf(instance));
        }
      }));
  } catch(meh) {}

  // ------------------------------//
  // DOMContentLoaded VS created() //
  // ------------------------------//
  const dom = {
    type: 'DOMContentLoaded',
    handleEvent() {
      if (dom.ready()) {
        document.removeEventListener(dom.type, dom, false);
        dom.list.splice(0).forEach(invoke);
      }
      else
        setTimeout(dom.handleEvent);
    },
    ready() {
      return document.readyState === 'complete';
    },
    list: []
  };

  if (!dom.ready()) {
    document.addEventListener(dom.type, dom, false);
  }

  function checkReady(created) {
    if (dom.ready() || isReady.call(this, created)) {
      if (this._init$) {
        const list = this._init$$;
        if (list) delete this._init$$;
        created.call(defineProperty(this, '_init$', {value: false}));
        if (list) list.forEach(invoke);
      }
    } else {
      if (!this.hasOwnProperty('_init$$'))
        defineProperty(this, '_init$$', {configurable: true, value: []});
      dom.list.push(checkReady.bind(this, created));
    }
  }

  function invoke(fn) {
    fn();
  }

  function isPrototypeOf(Class) {
    return this === Class.prototype;
  }

  function isReady(created) {
    let el = this;
    do { if (el.nextSibling) return true; }
    while (el = el.parentNode);
    setTimeout(checkReady.bind(this, created));
    return false;
  }

  exports.default = HyperHTMLElement;

  return exports.default;

}({}));
