/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

window.cab = window.cab || {};
/**
 *  Micro-templater
 *  Replaces {name} with the property from data
 */
window.cab.templater = function templater(str, data) {
    return str.replace(/\{([^}]+)\}/g, function (m, name) {
        return data[name] || '';
    });
};
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

/**
 *  Star Rating: Allow the the user to rate a page once by using cookies, which 
 *  is tracked by google analytics of how many stars they rated.  
 * 
 * Author: @Citizens Advice
 */
(function ($, document, Cookies) {

    'use strict';

    var $starRatingContainer = $('.star-rating');
    var $starWrapper = $('#star-wrapper');
    var $starRating = $('#star-wrapper .star-rating');

    // gets current star rating
    function getCurrentRating() {

        var index = 0;
        var totalClicks = [];

        if ($starRatingContainer.length === 0) {
            return;
        }

        // Bind to both hover and focus
        $('li[id^="star"]').on('mouseenter focus', function () {
            var starData = $(this).attr("data");

            if (!$(this).parent().hasClass('deactivated')) {
                for (var index = 1; index <= starData; index++) {
                    // Apply .hover to this star, and previous stars
                    $('.star-list li[data=' + index + ']').addClass('hover');
                }

                $('#starValue').remove();
                $starRating.append('<span class="vert-align" id="starValue">' + ratingScaleText(starData) + '</span>');
            }

            // Bind to both unhover and unfocus
        }).bind('mouseleave focusout', function () {
            $('.star-list li').removeClass('hover');
            $('#starValue').remove();
        });



        var getStarRating = function (starData) {

            $('.star-list li').removeClass('active');

            for (var count = 1; count <= starData; count++) {

                // Apply .active to this star, and previous stars
                $('.star-list li[data=' + count + ']').addClass('active');
            }

        }

        $('.star-list').on('click keypress', 'li[id^="star"]', function (e) {

            var starData = $(this).attr("data");

            var disable = $(this).parent().hasClass('deactivated');

            if (e.type === 'click' || e.keyCode === 13) {

                if (!disable) {

                    getStarRating(starData);
                    index++
                }

                // Allows users to click multiple times before it times out in 4secs and then the click is disabled.
                setTimeout(function () {

                    $('.star-list').addClass('deactivated');

                    totalClicks.push(starData)

                    setEventTracking(index, totalClicks)

                    $('.deactivated').off('click keypress', 'li[id^="star"]');

                }, 4000);

            }

        });

    }


    // returns the star rating label text
    function ratingScaleText(value) {

        switch (value) {
            case "1":
                return 'No';
                break;
            case "2":
                return 'Not really';
                break;
            case "3":
                return 'Helped a bit';
                break;
            case "4":
                return 'Helped a lot';
                break;
            case "5":
                return 'Very helpful'
                break;
        }
    }

    // sets the GA tracking and set the cookie
    function setEventTracking(index, value) {

        var ratedNumber = value;
        var starNumber;

        if (ratedNumber.length === index) {

            starNumber = ratedNumber.slice().pop(); // get last value

            $starWrapper.append('<h4 class="message">Thank you for your feedback</h4>');

            Cookies.set('pageRating', starNumber, { expires: 30, path: '' }); // set cookie

            ga('send', 'event', 'StarRating', location.href, 'star-rating:' + starNumber, starNumber);
        }
    }

    // returns the already selected stars rating
    function showPreviousRating() {

        if (Cookies.get('pageRating')) {

            var maxNumber = Cookies.get('pageRating');

            $('.star-list').addClass('deactivated');

            // added selected state to stars already active 
            for (var count = 1; count <= maxNumber; count++) {
                // Apply .active to this star, and previous stars
                $('.star-list li[data=' + count + ']').addClass('active');
            }
        }
    }

    getCurrentRating()
    showPreviousRating()

})(jQuery, document, window.Cookies);
(function ($, document) {
    'use strict';

    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (searchString, position) {
            return this.substr(position || 0, searchString.length) === searchString;
        };
    }

    $(document).ready(function () {

        // Only initialise if searchFilter exists which is only on search result page(new)
        if ($("#searchFilter").length) {
            initialiseCategoryFilter();
        }



        $("#searchFilter").change(function () {
            var $url = window.location.href;
            if ($url) {
                $url = setQSParameterValue($url, "t", this.value);
                var searchCatValue = $('#searchSectiontc').val();
                if (searchCatValue != null) {
                    $url = setQSParameterValue($url, "c", searchCatValue);
                }
            }
            window.location = $url;
        });
    });

    function initialiseCategoryFilter() {
        var $url = window.location.href;
        var filterValue = getQSParameterValue($url, "t");
        $("#searchFilter").val(filterValue);
    }

    function getQSParameterValue(url, key) {
        var parts = url.split("#", 2), anchor = parts.length > 1 ? "#" + parts[1] : '';
        var query = (url = parts[0]).split("?", 2);
        var val = "0";

        for (var params = query[query.length - 1].split("&"), i = 0; i < params.length; i++) {
            if (params[i].toLowerCase().startsWith(key.toLowerCase() + "=")) {
                val = params[i].toLowerCase().replace(key + '=', '');
            }
        }

        return val;
    }

    function setQSParameterValue(url, key, value) {
        var parts = url.split("#", 2), anchor = parts.length > 1 ? "#" + parts[1] : '';
        var query = (url = parts[0]).split("?", 2);

        if (query.length === 1)
            return url + "?" + key + "=" + value + anchor;

        for (var params = query[query.length - 1].split("&"), i = 0; i < params.length; i++)
            if (params[i].toLowerCase().startsWith(key.toLowerCase() + "="))
                return params[i] = key + "=" + value, query[query.length - 1] = params.join("&"), query.join("?") + anchor;

        return url + "&" + key + "=" + value + anchor;
    }

})(jQuery, document);




'use strict';

/**
 * TITLE:
 * @Feedback form (formerly pageRating tool)
 *
 * AUTHOR:
 * @Citizens Advice CMS team
 *
 * DESCRIPTION:
 * A tool to allow users to provide feedback on a pages' usefulness
 * using various radio buttons and a free text box to submit further
 * information.
 *
 * README:
 * This tool makes use of a state object to store the state of the
 * application at any point in time making it easier to reason about.
 *
 * API:
 * There are a couple public methods available to one;
 * 1. `.init()` - initialises the feedbackForm script
 * 2. `.getFieldValues()` - returns form values in JSON format
 *
 */

var FeedbackForm = (function ($, Cookies) {
    // setup
    var $tool = $('#feedbackForm__container');
    var debugOn = false;
    var visibilityClass = 'is-hidden';
    var cookieName = 'feedbackForm';
    var transitionTime = 700;

    var $questionContainer = $('.feedbackForm__questions');
    var $responseContainer = $('.feedbackForm__responses');
    var $messageContainer = $('.feedbackForm__message');
    var $cancelBtn = $('#js-feedbackFormBtn--cancel');
    var $submitBtn = $('#js-feedbackFormBtn--submit');

    // application state
    var state = {
        showQuestion: true,
        showResponse: false,
        showMessage: false,
        showWordCountError: false,
        questionValue: '',
        responseValue: '',
        freeTextValue: ''
    };

    // utility functions
    var setState = function (newState) {
        return (state = $.extend(state, newState));
    };

    var handleEvent = function (element, eventType, callback) {
        element.on(eventType, function (event) {
            var element = this;
            var event = event;
            typeof callback === 'function' && callback(element, event);
            debugOn ? console.log(state) : '';
        });
    };

    var isSafari = (
        navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1
    );

    var debounce = function (func, wait, immediate) {
        var timeout;

        return function () {
            var context = this, args = arguments;
            clearTimeout(timeout);

            timeout = setTimeout(function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    };

    var updateUI = function () {
        state.showQuestion
            ? $($questionContainer).removeClass(visibilityClass)
            : $($questionContainer).addClass(visibilityClass);

        state.showResponse
            ? $($responseContainer).removeClass(visibilityClass)
            : $($responseContainer).addClass(visibilityClass);

        state.showMessage
            ? $($messageContainer).removeClass(visibilityClass)
            : $($messageContainer).addClass(visibilityClass);

        if (state.showWordCountError) {
            $('#feedbackFormMessageError').removeClass(visibilityClass);
            $($submitBtn).addClass('btn-disabled');
            $($submitBtn).attr('disabled', 'disabled');
        } else {
            $('#feedbackFormMessageError').addClass(visibilityClass);
            $($submitBtn).removeClass('btn-disabled');
            $($submitBtn).removeAttr('disabled');
        }
    };

    var wordCount = function (element) {
        var maxCharLength = $(element).attr('maxlength')
        var value = element.value;
        var valueLength = value.length;
        var numLineBreaks = (value.match(/\n/g) || []).length;

        var newValue =
            isSafari
                ? newValue = valueLength + numLineBreaks
                : newValue = valueLength;

        if (newValue >= maxCharLength) {
            setState({ showWordCountError: true });
            updateUI();
        } else {
            setState({ showWordCountError: false });
            updateUI();
        }
    };

    // initialises the tool ONLY IF feedbackForm__container exists
    var init = function () {
        if ($tool[0]) {
            updateUI();

            // check for a cookie and update the state accordingly.
            if (Cookies.get(cookieName)) {
                setState({
                    showQuestion: false,
                    showResponse: false,
                    showMessage: true
                });
                updateUI();

            } else {

                // handle initial question input events
                handleEvent(
                    $('input[type="radio"]', $questionContainer),
                    'change',
                    debounce(function (element) {
                        setState({
                            questionValue: element.value,
                            feedbackFormAnswerValue: state.questionValue === 'yes' ? 1 : 0,
                            showQuestion: !state.showQuestion
                        });

                        (state.questionValue !== 'yes')
                            ? setState({ showResponse: !state.showResponse })
                            : setState({ showMessage: !state.showMessage });

                        Cookies.set(
                            cookieName,
                            state.questionValue,
                            { expires: 30, path: '' }
                        );

                        ga(
                            'send',
                            'event',
                            'PageRating',
                            location.href,
                            state.questionValue,
                            state.feedbackFormAnswerValue
                        );

                        updateUI();
                    }, transitionTime)
                );

                // handle response element events
                handleEvent(
                    $('input[type="radio"]', $responseContainer),
                    'change',
                    function (element) {
                        setState({ responseValue: element.value });
                    }
                );

                handleEvent(
                    $('textarea', $responseContainer),
                    'change',
                    function (element) {
                        setState({ freeTextValue: element.value });
                        wordCount(element);
                    }
                );

                handleEvent(
                    $('textarea', $responseContainer),
                    'keyup',
                    debounce(function (element) {
                        wordCount(element);
                    }, 350)
                );

                // handle the submit button event
                handleEvent($submitBtn, 'click', function (element, event) {
                    event.preventDefault();

                    $.ajax({
                        url: '/api/content/feedback',
                        type: 'POST',
                        dataType: 'json',
                        data: getFieldValues(),

                        success: function () {
                            setState({
                                showResponse: false,
                                showMessage: true
                            });

                            setTimeout(function () {
                                updateUI();
                            }, transitionTime);

                            debugOn ? console.log('Form submitted') : '';
                        },

                        error: function (msg) {
                            console.log('Error, form hasn\'t submitted correctly');
                        }
                    });
                });
            }
        }
    };

    var getFieldValues = function () {
        return {
            'PageId': $('#hidFeedbackPageId').val(),
            'PageLink': location.pathname,
            'Reason': state.responseValue,
            'Message': state.freeTextValue
        }
    };

    // public api
    return {
        init: init,
        getFieldValues: getFieldValues
    };
})(jQuery, window.Cookies);

FeedbackForm.init();
/**
 *  Detect support for pointer events
 *  Used to disable the custom dropdown button
 *  See https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js
 */
(function () {
    var pointerEvents = 'pointer-events';
    var element = document.createElement('x');
    element.style.cssText = pointerEvents + ':auto';
    if (element.style.pointerEvents !== 'auto') {
        document.documentElement.className += ' no-' + pointerEvents;
    }
}());

(function () {

    var data = {
        "Close": {
                    "cy": "Cau"
                }
    };

    var defaultLanguage = 'en-GB';
    var language = document.documentElement.lang;

    var cab = window.cab = window.cab || {};
    cab.translate = function (key) {
        return data[key] && ( data[key][language] || data[key][defaultLanguage] ) || key;
    };

}());
/**
 *  jQuery.loadScript
 *  Simple script loader
 *  Unlike jQuery.getScript() this loads the script using a script tag. Advantages:
 *	  - it makes debugging easier. 
 *	  - might result in better caching in some browsers (maybe?)
 *	  - no same origin issues
 *	  - works for sites using local files
 *
 *	jQuery.loadScript( url [, successCallback] )
 *		url: The url of the script
 *		successCallback: Function to run when the script is loaded
 *
 *	Returns a promise object
 *
 *	Use then for serial loading eg $.loadScript('url1').then( $.loadScript('url2') ).done(fn)
 *	Use jQuery.when for parallel loading
 *
 *	More information:
 *	  - http://dustindiaz.com/scriptjs
 *	  - http://www.nczonline.net/blog/2009/06/23/loading-javascript-without-blocking/
 *	  - http://stackoverflow.com/questions/1929742/can-script-readystate-be-trusted-to-detect-the-end-of-dynamic-script-loading
 */
(function ($, document) {
    var deferrerdMap = {};

    function loadScript(url) {
        var loaded;
        var deferred = deferrerdMap[url] = $.Deferred();
        var script = $('<script/>')[0];
        var target = $('script')[0];

        script.onload = script.onreadystatechange = function () {
            var temp;
            if (((temp = script.readyState) && temp !== "complete" && temp !== "loaded") || loaded) {
                return;
            }
            deferred.resolve();
        };

        script.onerror = function () {
            deferred.reject();
            // This doesn't work in all browsers
            // See http://www.quirksmode.org/dom/events/error.html
            // And http://stackoverflow.com/questions/2027849/how-to-trigger-script-onerror-in-internet-explorer/2032014#2032014
            // Also it doesn't work for the file protocol - presumably for security reasons
        }

        deferred.always(function () {
            loaded = true;
            script.onload = script.onreadystatechange = script.onerror = null;
        });

        script.async = true;
        script.src = url;

        target.parentNode.insertBefore(script, target);

        return deferred;
    }

    /**
	 *	@param {String|Array} url The url.  Will also accept Deferred or promise objects for parallel loading
	 *	@param {Function} [callback] Optional callback.  The script returns a promise so
	 */
    $.loadScriptTag = function (url, callback) {
        var deferred = deferrerdMap[url] || loadScript(url);
        if (callback) {
            deferred.done(callback);
        }
        return deferred.promise();
    }

}(jQuery, document));
/* jshint jquery: true, browser: true, undef: true */

/**
 *  jQuery.fn.tablesort
 *
 *  @requires jQuery
 *  @requires Date parses JSON format - use https://github.com/es-shims/es5-shim for old browsers
 */
(function ($, window) {

    'use strict';

    // Constants to improve minification
    var NAMESPACE = 'tablesort';
    var DOTNAMESPACE = '.' + NAMESPACE;
    var ATTRIBUTEPREFIX = 'data-' + NAMESPACE + '-';
    var EXPANDOPREFIX = NAMESPACE + ('' + Math.random()).slice(2);
    var EXPANDOSORTKEY = EXPANDOPREFIX + 'SortKey';
    var EXPANDODISPLAY = EXPANDOPREFIX + 'Display';
    var BUTTONCLASS = NAMESPACE + '-button';
    var WRAPCLASS = NAMESPACE + '-wrap';
    var SORTABLECLASS = NAMESPACE + '-sortable';
    var fromCharCode = String.fromCharCode;
    var guid = 0;

    var rComma = /\s*,\s*/;

    var defaultSortFns = {
        /** Numberical stable sort */
        num: function (n, m) {
            if (n[0] === m[0]) {
                return n[4] > m[4];
            }
            return n[0] > m[0] ? 1 : -1;
        }
    };

    var defaultFilterFns = {
        /** Field exactly matches search */
        exact: function (key, text) {
            return key == text.toLowerCase();
        },
        /** Field contains search */
        has: function (key, text) {
            return key.indexOf(text.toLowerCase()) > -1;
        },
        /** Item is in a comma separated list */
        inList: function (key, text) {
            return key.split(rComma).indexOf(text.toLowerCase()) > -1;
        },
        /** Field contains each space separated token */
        hasEach: function (key, text) {
            var parts = text.toLowerCase().split(' ');
            return every(parts, function (item) {
                return key.indexOf(item) > -1;
            });
        }
    };

    // So empty rows are sorted first
    function isNaNToNegativeInfinity(num) {
        if (isNaN(num)) {
            return -Infinity;
        }
        return num;
    }

    // Correct a two digit year to a 4 digit year
    function correctYear(year) {
        year = +year;
        if (year < 100) {
            year += year < 50 ? 2000 : 1900;
        }
        return year;
    }

    // Get the text content of a cell
    function getText(el) {
        return $.trim($.text(el)).toLowerCase();
    }

    var defaultKeyGens = {
        text: getText,
        isodate: function (el) {
            // This relies on the browser supporting ISO date parsing
            var num = Date.parse(getText(el).toUpperCase());
            return isNaNToNegativeInfinity(num);
        },
        ddmmyy: function (el) {
            var match = getText(el).match(rDate);
            var num;
            if (match) {
                num = new Date(correctYear(match[4]), +match[3] + 1, match[1]).valueOf();
            }
            return isNaNToNegativeInfinity(num);
        },
        mmddyy: function (el) {
            var match = getText(el).match(rDate);
            var num;
            if (match) {
                num = new Date(correctYear(match[4]), +match[1] + 1, match[3]).valueOf();
            }
            return isNaNToNegativeInfinity(num);
        },
        dmmmy: function (el) {
            var match = getText(el).match(rDateMonthYear);
            var num;
            if (match) {
                num = new Date(match[3] ? correctYear(match[3]) : new Date().getFullYear(), monthNames[match[2]], match[1]).valueOf();
            }
            return isNaNToNegativeInfinity(num);
        },
        mmmdy: function (el) {
            var match = getText(el).match(rMonthDateYear);
            var num;
            if (match) {
                num = new Date(match[3] ? correctYear(match[3]) : new Date().getFullYear(), monthNames[match[1]], match[2]).valueOf();
            }
            return isNaNToNegativeInfinity(num);
        },
        num: function (el) {
            var match = getText(el).match(rNumber);
            var num = NaN;
            if (match) {
                num = parseFloat((match[1] || '') + match[2].replace(/,/g, ''));
            }
            return isNaNToNegativeInfinity(num);
        }
    };
    /** Starts with something number like */
    var rNumber = /^(-?)[&#163;$&#164;]?\s*([\d,.]+)/;
    var rDateMonthYear = /^([1-3]?\d)[,\s]+([a-z]{3,})(?:[,\s]+(\d{2,4}))?/;
    var rMonthDateYear = /^([a-z]{3,})[,\s]+([1-3]?\d)(?:[,\s]+(\d{2,4}))?/;
    var rISODate = /^(\d{4})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|(?:(\+|-)(\d{2}):?(\d{2})))?)?)?)?$/i;
    var rDate = /^(\d{1,2})\s*([.\/\\\-])\s*(\d{1,2})\s*\2\s*(\d{2,4})/;
    var monthNames = {
        jan: 0,
        january: 0,
        feb: 1,
        february: 1,
        mar: 2,
        march: 2,
        apr: 3,
        april: 3,
        may: 4,
        jun: 5,
        june: 5,
        jul: 6,
        july: 6,
        aug: 7,
        august: 7,
        sep: 8,
        september: 8,
        oct: 9,
        october: 9,
        nov: 10,
        november: 10,
        dec: 11,
        december: 11
    };

    function every(ar, fn) {
        if (ar.every) {
            return ar.every(fn);
        }
        for (var i = 0, j = ar.length; i < j; ++i) {
            if (!fn(ar[i])) {
                return false;
            }
        }
        return true;
    }

    var tests = [
        function (cells) {
            if (every(cells, function (data) {
                var match = data[0].match(rDateMonthYear);
                return match && +match[1] < 31 && monthNames[match[2]] >= 0;
            })) {
                return 'dmmmy';
            }
        },
        function (cells) {
            if (every(cells, function (data) {
                var match = data[0].match(rMonthDateYear);
                return match && +match[1] < 31 && monthNames[match[2]] >= 0;
            })) {
                return 'mmmdy';
            }
        },
        function (cells) {
            if (every(cells, function (data) {
                return rISODate.test(data[0]);
            })) {
                return 'isodate';
            }
        },
        function (cells) {
            if (every(cells, function (data) {
                var match = data[0].match(rDate);
                return match && +match[1] < 32 && +match[3] < 13;
            })) {
                return 'ddmmyy';
            }
        },
        function (cells) {
            if (every(cells, function (data) {
                var match = data[0].match(rDate);
                return match && +match[1] < 13 && +match[3] < 32;
            })) {
                return 'mmddyy';
            }
        },
        // Run last
        function (cells) {
            if (every(cells, function (data) {
                return rNumber.test(data[0]);
            })) {
                return 'num';
            }
        }
    ];

    var types = {
        num: {
            keygen: 'num',
            fn: 'num'
        },
        dmmmy: {
            keygen: 'dmmmy',
            fn: 'num'
        },
        mmmdy: {
            keygen: 'mmmdy',
            fn: 'num'
        },
        isodate: {
            keygen: 'isodate',
            fn: 'num'
        },
        ddmmyy: {
            keygen: 'ddmmyy',
            fn: 'num'
        },
        mmddyy: {
            keygen: 'mmddyy',
            fn: 'num'
        }
    };

    var labels = {
        sortAsc: 'Sort ascending',
        sortDesc: 'Sort desending',
        search: 'Search column',
        filter: 'Filter column'
    };
    var defaultButton = '<button type="button" class="' + BUTTONCLASS + '" ' + ATTRIBUTEPREFIX + 'asc-title="' + labels.sortAsc + '"  ' + ATTRIBUTEPREFIX + 'desc-title="' + labels.sortDesc + '"><span></span></button>';

    function makeSortable(options) {

        // jshint -W040
        var table = this;
        // jshint +W040
        var $table = $(table);
        var data = $table.data(NAMESPACE);

        if (options === false || $table.hasClass(SORTABLECLASS)) {

            if (data) {
                $table
                    .removeClass(SORTABLECLASS)
                    .find('tbody').add(table)
                        .off(DOTNAMESPACE)
                        .removeData(NAMESPACE);

                $table.find('thead .' + WRAPCLASS).each(function () {
                    $(this).replaceWith(this.childNodes);
                });

                $table.find('th').removeClass(NAMESPACE + '-asc ' + NAMESPACE + '-desc');
                $table.find('[class^="' + NAMESPACE + '-"]').remove();

                $(window).off(DOTNAMESPACE + data.guid);
            }

            if (options === false) {
                return;
            }
        }

        $table.addClass(SORTABLECLASS);

        if (!data) {
            ++guid;
            data = $.data(table, NAMESPACE, { guid: guid });
        }

        options = options || {};

        var sortFns = $.extend({}, defaultSortFns, options.sortFns);
        var keyGens = $.extend({}, defaultKeyGens, options.keyGens);
        var filterFns = $.extend({}, defaultFilterFns, options.filterFns);
        var dynamic = options.dynamic;

        if (options.ui !== false) {

            // We must have heading cells
            if (!$table.find('th').length) {
                return;
            }

            // Make sure we have a thead
            if (!$table.find('thead').length) {
                $table.prepend($('<thead>').append(table.rows[0]));
            }

            var $thead = $table.find('thead');

            // Add supporting elements to cells
            $thead
                .find('th')
                .each(function () {
                    var th = this;
                    var $th = $(th);
                    var cellIndex = attr(th, 'index');
                    var settings = {};
                    if (cellIndex === false) {
                        cellIndex = th.cellIndex;
                    }

                    // Check sorting isn't disabled
                    if (!attr(th, 'nosort')) {
                        $th.wrapInner($('<div class="' + WRAPCLASS + '"/>')).children().append(defaultButton);
                        setButtonTitles($th, !attr(th, 'reverse'));

                        var sortType = attr(th, 'type') || guessSortType(table, cellIndex);

                        $.extend(settings, types[sortType]);
                    }

                    var filterFn, filterKeyGen;
                    var selectFilter = attr(th, 'select');
                    if (selectFilter) {
                        var multiple = selectFilter === 'multiple';
                        // If a delimiter is supplied that a cell can contain multiple items for the select
                        $th.append('<span class="' + NAMESPACE + '-span-filter">' + createSelectFilter(table, cellIndex, multiple) + '</span>');
                        settings['filter-fn'] = multiple ? 'inList' : 'exact';
                        settings['filter-keygen'] = 'text';
                    }

                    if (attr(th, 'filter')) {
                        $th.append('<span class="' + NAMESPACE + '-span-filter"><input type="search" class="' + NAMESPACE + '-filter" title="' + labels.search + '"></span>');
                        settings['filter-fn'] = 'has';
                        settings['filter-keygen'] = 'text';
                    }

                    if (dynamic) {
                        settings.dynamic = true;
                    }

                    for (var i in settings) {
                        if (!$.isFunction(settings[i])) {
                            attr(th, i, settings[i]);
                        }
                    }

                });

            // Add col to keep the columns even
            if (options.maintainWidth !== false && !$table.find('col').length) {
                var tableWidth = $table.width();
                var colgroupHTML = '';
                $(table.tBodies[0].rows[0].cells).each(function () {
                    var width = $(this).width();
                    colgroupHTML += '<col class="' + NAMESPACE + '-col" style="width:' + ((width / tableWidth * 100).toFixed(2)) + '%">';
                });
                $thead.before(colgroupHTML);
            }

            $table
                .on('click.' + NAMESPACE, 'th', function (e) {
                    var $target = $(e.target);

                    // Do not run if the user clicks an interactive element we didn't put there
                    if ($target.is('.' + BUTTONCLASS) || !$target.is('a,a *,button,button *,input,select,select *,textarea')) {

                        $target = $(this);
                        var i, j;
                        if (!$target.is('th')) {
                            $target = $target.closest('th');
                        }
                        var th = $target[0];

                        if (attr(th, 'nosort')) {
                            return;
                        }

                        var sortFn = sortFns[attr(th, 'fn')];
                        var keyGen = keyGens[attr(th, 'keygen')];
                        var reverse = attr(th, 'reverse');
                        var dir = reverse;
                        var skipCache = attr(th, 'dynamic');
                        var cellIndex = attr(th, 'index') || th.cellIndex;

                        if ($target.hasClass(NAMESPACE + '-asc')) {
                            dir = !dir;
                        }

                        $table.trigger('sort', [{
                            cellIndex: cellIndex,
                            sortFn: sortFn,
                            keyGen: keyGen,
                            reverse: dir,
                            skipCache: skipCache
                        }]);

                        if (reverse) {
                            dir = !dir;
                        }

                        $target
                            .toggleClass(NAMESPACE + '-asc', !dir)
                            .toggleClass(NAMESPACE + '-desc', dir);

                        setButtonTitles($target, dir);
                    }


                })
                .on('input.' + NAMESPACE, '.' + NAMESPACE + '-filter', function (e) {
                    // debounce
                    var that = this;
                    window.clearTimeout(this[NAMESPACE + 'Timeout']);
                    this[NAMESPACE + 'Timeout'] = window.setTimeout(function () {
                        $(that).trigger('change.' + NAMESPACE);
                    }, 100);
                })
                .on('change.' + NAMESPACE, '.' + NAMESPACE + '-filter', function (e) {
                    var $target = $(this);
                    var $this = $target;
                    var i, j;
                    if (!$target.is('th')) {
                        $target = $target.closest('th');
                    }
                    var th = $target[0];

                    var filterFn = filterFns[attr(th, 'filter-fn')];
                    var keyGen = keyGens[attr(th, 'filter-keygen')];
                    var skipCache = attr(th, 'dynamic') !== null;
                    var text = $this.val();
                    var cellIndex = attr(th, 'index') || th.cellIndex;


                    $table.trigger('filter', [{
                        cellIndex: cellIndex,
                        clear: !text,
                        text: text,
                        filterFn: filterFn,
                        keyGen: keyGen,
                        skipCache: skipCache
                    }]);

                });

            // Make sure the filters are run when the user uses the back button
            $(window).on('pageload' + DOTNAMESPACE + data.guid, function () {
                $(table.tHead).find('.' + NAMESPACE + '-search-filter').trigger('change.' + NAMESPACE);
            });

        }


        // Events that actually do the sorting
        $table
            .on('sort.' + NAMESPACE, function (e, options) {
                options = options || {};

                var $target = $(e.target);

                if (!$target.is('tbody,table')) {
                    $target = $target.closest('tbody,table');
                }

                if ($target.is('table')) {
                    $target = $target.find('tbody');
                }

                $target.each(function () {
                    sortTBody(
                         this,
                         options.cellIndex,
                         options.keyGen,
                         options.sortFn,
                         options.reverse,
                         options.skipCache
                    );
                });

                $table.trigger('sorted', [$target, options]);

            })
            .on('filter.' + NAMESPACE, function (e, filters) {

                var $target = $(e.target);

                if (!$target.is('tbody,table')) {
                    $target = $target.closest('tbody,table');
                }

                if ($target.is('table')) {
                    $target = $target.find('tbody');
                }

                $target.each(function () {
                    filterTBody(
                         this,
                         filters
                    );
                });

                $table.trigger('filtered', [$target, options]);

            });

    }

    /**
     *  Gets or sets an attribute
     *  @param {DOMElement} el The element
     *  @param {String} name The name of the attribute.  Will automatically be prefixed with the namespace
     *  @param {String|Boolean} [value] The value to set to.  If true the value will be set to ''.  false will set it to "false"
     *  @returns {String|Boolean} If no attribute is present false.  If the attribute is empty true. Otherwise the value.
     */
    function attr(el, name, value) {
        var r = $.attr(el, ATTRIBUTEPREFIX + name, value === true ? '' : value);
        if (r === undefined) {
            return false;
        }
        if (r === '') {
            return true;
        }
        return r;
    }

    function setButtonTitles($tr, dir) {
        var button = $tr.find('.' + BUTTONCLASS);
        var title = attr(button[0], (dir ? 'desc' : 'asc') + '-title');
        $tr[0].title = title;
        button[0].title = title;
        button.find('span').text(title);
    }

    /**
     *  Guess the sort type by examining the first 3 non-empty cells of the first tbody
     */
    function guessSortType(table, cellIndex) {
        var rows = table.tBodies[0].rows;
        var i, j, test, cell, text;
        var testCells = [];

        for (i = 0, j = rows.length; testCells.length < 3 && i < rows.length; ++i) {
            cell = rows[i].cells[cellIndex];
            if (cell) {
                text = getText(cell);
                if (text) {
                    testCells.push([text, cell]);
                }
            }
        }
        for (i = 0, j = tests.length; i < j; ++i) {
            test = tests[i](testCells);
            if (test) {
                return test;
            }
        }

        return false;
    }

    /**
     *  Create a select filter for a column.
     */
    function createSelectFilter(table, cellIndex, multiple) {
        var i, j;
        var values = {};
        var valuesAr = [];
        var select;
        var tbodies = table.tBodies;

        for (i = 0, j = tbodies.length; i < j; ++i) {
            $.extend(values, searchTBodies(tbodies[i], cellIndex, multiple));
        }

        for (i in values) {
            valuesAr.push(i);
        }

        valuesAr.sort();

        select = '<select class="' + NAMESPACE + '-filter" title="' + labels.filter + '"><option>';
        for (i = 0, j = valuesAr.length; i < j; ++i) {
            if (valuesAr[i]) {
                select += '<option>' + valuesAr[i];
            }
        }
        return select + '</select>';
    }

    /**
     *  Find values for the select filter
     */
    function searchTBodies(tbody, cellIndex, multiple) {
        var i, j, value;
        var values = {};
        var rows = tbody.rows;

        function addValue(value) {
            values[value.trim()] = true;
        }

        for (i = 0, j = rows.length; i < j; ++i) {
            value = $.text(rows[i].cells[cellIndex] || '');
            if (multiple) {
                value.split(rComma).forEach(addValue);
            } else {
                addValue(value);
            }
        }

        return values;
    }

    /**
     *  Stable sorting is achived by converting the count of the row into a unicode character
     *  Normally we can use String.fromCharCode but
     *  after 65535 rows we need to use two or more characters. 
     */
    function getLargeStableSortKey(i) {
        var r = '';
        var base = i;
        var max = 65536;
        // Could use logs - this is easier
        while (base >= max) {
            base = base / max;
            r += '\uffff';
        }
        r += fromCharCode(i % max);
        return r;
    }

    /**
     *  Sort a tbody
     *  @param {HTMLTableSectionElement} tBody to sort
     *  @param {Integer} cellIndex to sort on.  If not supplied the tbody will be resorted into the original order
     *  @param {Function} keyGen Key generator.  It not supplied text will be used
     *  @param {Function} sortFn Function to sort with.  If not supplied the standard string based system will be used
     *  @param {Boolean} reverse If true reverse the sort
     *  @param {Boolean} skipCache If true do not use cached keys
     */
    function sortTBody(tbody, cellIndex, keyGen, sortFn, reverse, skipCache) {

        var i, j, row, key, cell;
        var arr = [];
        var getStableSortKey = fromCharCode;
        var keySeparator = '\uffff';
        var data = $.data(tbody, NAMESPACE) || {};

        if (!skipCache && data.lastCellIndex === cellIndex && data.reversed !== reverse) {
            // If the last sort was in on the same column in the opposite direction just reverse
            reverseTBody(tbody);
        } else {

            keyGen = keyGen || defaultKeyGens.text;

            if (cellIndex === undefined) {
                // Always use number to sort into the original order
                sortFn = defaultSortFns.num;
            }

            if (tbody.rows.length > 65536) {
                // Detect a very long table and change the stable key generation method
                // and work out a new key separator
                getStableSortKey = getLargeStableSortKey;
                keySeparator = getStableSortKey(tbody.rows.length).replace(/[^\uffff]/g, '');
            }


            for (i = 0, j = tbody.rows.length ; i < j; ++i) {
                row = tbody.rows[i];
                key = '';

                // Mark rows with the original sort order
                if (row[EXPANDOSORTKEY] === undefined) {
                    row[EXPANDOSORTKEY] = i;
                }

                if (cellIndex !== undefined) {
                    // Sorting a column
                    cell = row.cells[cellIndex];
                    if (cell) {
                        key = cell[EXPANDOSORTKEY];
                        if (key === undefined || skipCache) {
                            key = cell.getAttribute(ATTRIBUTEPREFIX + 'key');
                            if (key === null) {
                                key = keyGen(cell);
                            }
                            cell[EXPANDOSORTKEY] = key;
                        }
                    }

                } else {
                    // Sorting the tbody into the original order
                    key = row[EXPANDOSORTKEY];
                }

                arr.push([key, keySeparator, String.fromCharCode(i), keySeparator, i, row]);
            }

            if (sortFn) {
                arr.sort(sortFn);
            } else {
                arr.sort();
            }

            if (reverse) {
                arr.reverse();
            }
            for (i = 0, j = arr.length ; i < j; ++i) {
                tbody.appendChild(arr[i][5]);
            }
        }

        // Remember the last sort
        data.lastCellIndex = cellIndex;
        data.reversed = reverse;
        $.data(tbody, NAMESPACE, data);

    }

    /**
     *  Reverse a tbody.  Quicker than sorting.
     */
    function reverseTBody(tbody) {
        var rows = tbody.rows;
        var row;

        for (var i = rows.length - 1 ; i >= 0 ; --i) {

            // Mark rows with the original sort order
            if (rows[i][EXPANDOSORTKEY] === undefined) {
                row[i][EXPANDOSORTKEY] = i;
            }

            tbody.appendChild(rows[i]);
        }

    }

    /**
     *  Filter a tbody
     */
    function filterTBody(tbody, filter, limitToRowsSet) {
        var i, j, row, m, n, hide, hideCell, cell, key;

        // Apply the filters to each row
        for (i = 0, j = tbody.rows.length ; i < j; ++i) {
            row = tbody.rows[i];

            // Allows a particular rows to be updated
            if (limitToRowsSet && !limitToRowsSet[i]) {
                continue;
            }

            hide = false;

            for (m = 0, n = row.cells.length; m < n; ++m) {

                cell = row.cells[m];

                if (m === filter.cellIndex) {

                    hideCell = false;


                    if (filter.clear) {
                        hideCell = false;
                    } else {

                        key = cell[EXPANDOPREFIX + 'FilterKey'];
                        if (key === undefined || filter.skipCache) {
                            key = cell.getAttribute(ATTRIBUTEPREFIX + 'filter-key');
                            if (key === null) {
                                key = filter.keyGen(cell);
                            }
                            cell[EXPANDOPREFIX + 'FilterKey'] = key;
                        }

                        hideCell = !filter.filterFn(key, filter.text);

                        if (hideCell) {
                            hide = true;
                        }

                    }

                    cell[EXPANDOPREFIX + 'Hide'] = hideCell;

                } else {

                    if (cell[EXPANDOPREFIX + 'Hide']) {
                        hide = true;
                    }
                }
            }

            if (hide) {
                if (row[EXPANDODISPLAY] === undefined) {
                    row[EXPANDODISPLAY] = row.style.display;
                }
                row.style.display = 'none';
            } else {
                row.style.display = row[EXPANDODISPLAY] || '';
            }

        }
    }

    var fn = function (options) {
        this.filter('table').each(function () {
            makeSortable.call(this, options);
        });
        return this;
    };
    fn.keyGens = defaultSortFns;
    fn.filterFns = defaultFilterFns;
    fn.monthNames = monthNames;
    fn.types = types;
    fn.labels = labels;

    // Create the sortable function
    $.fn[NAMESPACE] = fn;

}(jQuery, window));

jQuery(function () {
    $('table.sortable').tablesort();
});
/* jshint undef:true, jquery:true, browser: true */

/**
 *	jQuery plugin to create a dialog
 *
 *	This supports modal and non-modal dialogs
 *	Dialogs are stacked in creation order or modal order
 *	
 *	Dialogs are not moveable or resizable	
 *
 *	@requires jQuery
 *	@requires Function.prototype.bind
 *	@requires Array.prototype.forEach
 *	@requires Array.prototype.indexOf
 */
(function ($, window) {

    "use strict";

    var $window = $(window);

    // Sets the CSS namespace and the event namespace
    var namespace = 'dialog';

    // Ordering stack for modal dialogs
    var stack = [];
    // Counter for generating IDs
    var counter = 0;
    // Are the global keypress and click events setup
    var hasGlobalEvents = false;
    // Has the browser been setup and tested
    var isSetup = false;
    // Reference to the mask
    var $mask = null;

    var supportsFixed = true;
    var supportsFlexBox = true;
    var supportsTransform = false;
    var supportsResizingScrollableChildren = true;

    // Micro templater
    // Replaces '{name}' with the value from data
    function templater(str, data) {
        return str.replace(/\{([^}]+)\}/g, function (m, name) {
            return data[name] || '';
        });
    }

    // Initial setup.  Create the modal dialog mask and run any feature tests
    function setup() {

        if (isSetup) {
            return;
        }

        $mask = $('<div class="' + namespace + '__mask">')
			.hide()
			.appendTo('body');

        var $test = $('<div class="' + namespace + '" style="max-height:0;height:auto;"><p class="' + namespace + '__main" style="height:100px;color:red;padding:0;border:0;"></p></div>').appendTo('body');
        supportsFixed = $test.css('position') === 'fixed';
        supportsFlexBox = $test.css('display').indexOf('flex') > -1;

        // The dialog is centred using transform. This tests this this works. 
        // If it succeeds the test element will be right of the centre
        // If it fails the test element left edge will be left of the centre
        // Use + 1 to avoid rounding errors
        supportsTransform = $test.offset().left + 1 < $window.width() / 2;

        // In IE, if a flex container contains a child with "overflow-y: auto",
        // the child content overflows the container
        // This is partly fixed in IE11, where this only happens if the the container
        // has no explict height
        // This tests for this
        supportsResizingScrollableChildren = $test.find('.' + namespace + '__main').height() === 0;
        $test.remove();
        isSetup = true;
    }

    /**
	 * Find the top modal dialog and recover from a missing dialog
	 */
    function getTopModalDialog() {
        var dialog = stack.slice(-1)[0];
        if (!dialog) {
            // Something has gone wrong - recover gracefully
            hideModal();
            return null;
        }
        if (!dialog.$dialog.is(':visible')) {
            // Again, this shouldn't happen, ignore this one and get the next
            stack.pop();
            return getTopModalDialog();
        }

        return dialog;
    }

    /**
	 *	Check if the top dialog contains the focus and if it doesn't force it to.
	 */
    function checkFocus(e) {

        var dialog = getTopModalDialog();
        if (!dialog) {
            return;
        }

        var el = dialog.$dialog[0];
        var target = e.target;

        if (target !== el && !$.contains(el, target)) {
            dialog._focus(true);
        }

    }

    // Find all focusable elements in $el
    // (Image-maps are complicated and ignored)
    function getFocusable($el) {

        return $el
			.find('a[href],input,select,textarea,button,object,[tabindex]')
			.not(':disabled')
			.filter(':visible');

    }

    // Setup events to run if there is a modal dialog
    function setupGlobalEvents() {

        if (hasGlobalEvents) {
            return;
        }

        // Needs to be document for IE8
        $(document)
			.on('keydown.' + namespace, function (e) {
			    // Close the top dialog using the escape key
			    if (!e.isDefaultPrevented() && e.keyCode === 27) {
			        e.preventDefault();
			        var dialog = getTopModalDialog();
			        if (!dialog) {
			            return;
			        }
			        dialog.close();
			    }
			});

        $('body')
			.on('focusin.' + namespace, function (e) {
			    // Keep the focus in the top dialog
			    // All sorts of problems happen if you don't do this on a timeout
			    setTimeout(function () {
			        checkFocus(e);
			    }, 0);
			});

        hasGlobalEvents = true;

    }

    // Remove the global events
    function removeGlobalEvents() {
        $('body').add(document).off('.' + namespace);
        hasGlobalEvents = false;
    }

    // Update the stack and show the mask for a modal dialog
    function showModal(dialog) {

        // Remove the dialog from the stack if present
        var index = stack.indexOf(dialog);
        if (index !== -1) {
            stack.splice(index, 1);
        }

        // Add to the top of the stack
        stack.push(dialog);
        setupGlobalEvents();
        zIndex();
        $mask.show();

    }

    // Hide a modal dialog
    function hideModal(dialog) {

        var index = stack.indexOf(dialog);
        if (index > -1) {
            stack.splice(index, 1);
        }
        if (!stack.length) {
            $mask.hide();
            removeGlobalEvents();
        } else {
            zIndex();
        }
    }

    // Set the z-indexes on the dialogs
    function zIndex() {

        var index = 0;
        var topIndex = stack.length - 1;
        stack.forEach(function (item, i) {
            var $dialog = item.$dialog;
            if (!index) {
                // Reset the z index
                $dialog.css('z-index', '');
                // Get the default
                index = parseInt($dialog.css('z-index'), 10) || 1;
            }
            // Add the index
            if (i === topIndex) {
                $mask.css('z-index', ++index);
            }

            $dialog.css('z-index', ++index);
        });
    }

    /**
	 *	Create a new dialogue and appends it to the document
	 *	@param {Object} options
	 *	@param {String} [options.title]
	 *	@param {Boolean} [options.content]
	 *	@param {Boolean} [options.footer]
	 *	@param {Boolean} [options.className]
	 *	@param {Boolean} [options.destroyOnClose]
	 *	@param {Boolean} [options.form] Wraps the dialog contents in a form
	 */
    function Dialog(options) {

        if (!(this instanceof Dialog)) {
            return new Dialog(options);
        }

        setup();
        this._id = ++counter;
        this.returnValue = '';

        this._create(options);

    }

    var proto = {

        /**
		 *	Show the dialog
		 */
        show: function () {

            this.$dialog.show();
            this._position();
            this.openedBy = document.activeElement;
            this._focus();
            $window.on('resize.' + namespace + ':' + this._id, this._position.bind(this));
        },

        /**
		 *	Show the dialog as a modal dialog
		 */
        showModal: function () {

            showModal(this);
            this.show();
        },

        /**
		 *	Close the dialog
		 */
        close: function (ret) {

            var $dialog = this.$dialog;

            if (!$dialog.is(':visible')) {
                return;
            }

            this.returnValue = String(ret);
            $dialog.hide();
            hideModal(this);

            $window.off('resize.' + namespace + ':' + this._id);

            // Return focus to the openning element
            if (this.openedBy) {
                this.openedBy.focus();
            }

            var event = $.Event('close');
            $dialog.trigger(event);
        },

        /**
		 *	Destroy a dialog.  Completely remove it from the DOM
		 */
        destroy: function () {
            this.close();
            this.$dialog.remove();
        },

        /**
		 *	Adds an event to the dialog	element
		 */
        on: function () {
            var $dialog = this.$dialog;
            $dialog.on.apply($dialog, arguments);
            return this;
        },

        /**
		 *	Create the dialog
		 */
        _create: function (options) {

            options = options || {};
            var className = [
				namespace,
				options.className || '',
				supportsFixed ? '' : namespace + '--absolute'
            ].join(' ');

            var html = templater(("<{nodeName} class=\"{className}\" role=\"{role}\" aria-labelledby=\"{ns}-{count}-label\" aria-describedby=\"{ns}-{count}-main\" tabindex=\"-1\">\n\n\t<header class=\"{ns}__header\">\n\t\t<h2 id=\"{ns}-{count}-label\" class=\"{ns}__title\">{title}</h2>\n\t\t<button class=\"dialog__close\" type=\"button\" data-action=\"close\"><i aria-hidden=\"true\" class=\"dialog__close-icon\"></i><span class=\"dialog__close-text\">{close}</span></button>\n\t</header>\n\n\t<div class=\"{ns}__main\" id=\"{ns}-{count}-main\"></div>\n\n\t<footer class=\"{ns}__footer\"></footer>\n\n</{nodeName}>"), {
                title: options.title || '',
                className: className,
                ns: namespace,
                count: this._id,
                role: options.role || 'dialog',
                close: options.closeLabel || 'Close',
                nodeName: options.nodeName || 'div'
            });

            var $dialog = $(html)
				.hide()
				.appendTo('body')
				.on('keydown', this._keydown.bind(this))
				.on('click', '[data-action=close]', this.close.bind(this));

            this.$content = $dialog.find('.' + namespace + '__main')
				.append(options.content);
            this.$footer = $dialog.find('.' + namespace + '__footer')
				.append(options.footer);
            this.$title = $dialog.find('.' + namespace + '__title');

            this.$dialog = $dialog;

            if (options.destroyOnClose) {
                this.on('close', this.destroy.bind(this));
            }
        },

        /**
		 *	Position the dialog centrally
		 *	This is almost all done with CSS, but some older browsers
		 *	and IE need a bit of JS to help them.
		 */
        _position: function () {

            var $dialog = this.$dialog;

            if (!supportsFlexBox || !supportsResizingScrollableChildren) {
                // All of IE
                var $content = this.$content;
                $dialog.css('height', '');
                $content.css('height', '');
                var height = $dialog.height();

                var headerHeight = $dialog.find('.' + namespace + '__header').outerHeight() || 0;
                var footerHeight = this.$footer.outerHeight() || 0;
                $content.height(height - headerHeight - footerHeight);
            }

            if (!supportsTransform && supportsFixed) {
                // IE < 9
                $dialog.css({
                    marginLeft: -$dialog.width() / 2,
                    marginTop: -$dialog.height() / 2
                });
            }
        },

        /**
		 *	Set the focus.  
		 * 
		 *	If inTabbingOrder is true it will be set to first focusable element
		 *
		 *	Otherwise it is set to:
		 *  * the first focusable element in .dialog__main or below with an autofocus attribute
		 *  * the first focusable element in .dialog__main or below
		 *	* the close cross
		 *	* the dialog
 		 *	
		 *	@param {Boolean} [inTabbingOrder=false] If true focus in strict tabbing order
		 */
        _focus: function (inTabbingOrder) {

            var $dialog = this.$dialog;
            var focusOn;

            var $focusable = getFocusable($dialog);

            if (inTabbingOrder) {
                focusOn = $focusable[0] || $dialog;
            } else {
                var close = $dialog.find('.' + namespace + '__close')[0];

                $focusable = $focusable.not(close);
                var $autofocus = $focusable.filter('[autofocus]');

                focusOn = $autofocus[0] ||
					$focusable[0] ||
					close ||
					$dialog;
            }

            $(focusOn).focus();
        },

        /**
		 *	Loop the focus round while tabbing
		 */
        _keydown: function (e) {
            if (e.which !== 9) {
                return;
            }
            var target = e.target;

            var $focusable = getFocusable(this.$dialog);
            if ($focusable.last().is(target) && !e.shiftKey) {
                e.preventDefault();
                $focusable.eq(0).focus();
            } else if ($focusable.eq(0).is(target) && e.shiftKey) {
                e.preventDefault();
                $focusable.last().focus();
            }
        }


    };

    // For the benefit of IE8.  Would prefer to use Object.create
    for (var i in proto) {
        Dialog.prototype[i] = proto[i];
    }

    $.Dialog = Dialog;


}(jQuery, window));
/**
 *	CSS transition based slide up and slide down
 */
(function ($) {

    var namespace = 'slide';
    var classHidden = namespace + '--hidden';
    var classUp = namespace + '--up';
    var classDown = namespace + '--down';
    var classDownSetup = classDown + '-setup';

    function getHeight($el) {

        // If the height has been saved used the saved height
        // This is only used if the element is mid transition
        var height = $el.data(namespace);
        if (height) {
            return height;
        }

        var hidden = $el.hasClass(classHidden);
        if (hidden) {
            $el.removeClass(classHidden);
        }


        // Get the appropriate height
        if ($el.css('box-sizing') === 'border-box') {
            height = $el.outerHeight();
        } else {
            height = $el.height();
        }

        // If required hide it again
        if (hidden) {
            $el.addClass(classHidden);
        }

        // Save the height
        $el.data(namespace, height);

        return height;

    }

    function cssSlideUp(el) {

        var $el = $(el);

        // Don't slide up if already hidden
        if (!$el.is(':visible')) {
            return;
        }

        var height = getHeight($el);

        $el.css('height', height);

        // Trigger a size calculation
        el.offsetHeight;

        $el
			.one('transitionend', function (e) {

			    // Remove our values and mark as hidden
			    // Remove data so it will be recalculated next time
			    $el
                	.css('height', '')
                	.addClass(classHidden)
                	.removeClass(classUp)
                	.removeData(namespace);
			})
            // Start the transition
            .css('height', 0)
			.addClass(classUp);

    }

    function cssSlideDown(el) {

        var $el = $(el);

        if ($el.is(':visible') && !$el.hasClass(classUp)) {
            return;
        }

        var height = getHeight($el);

        // Setup, remove a running slide up
        $el
			.removeClass(classUp + ' ' + classHidden)
			.addClass(classDownSetup)
			.css('height', 0);

        // Trigger a size calculation
        el.offsetHeight;

        $el
			.one('transitionend', function (e) {

			    // Remove our values and mark as hidden
			    // Remove data so it will be recalculated next time
			    // Remove hidden in-case we interupted a slide up
			    $el
                	.css('height', '')
                	.removeClass(classDown + ' ' + classHidden)
                	.removeData(namespace);
			})
            // Start the transition
            .css('height', height)
            .removeClass(classDownSetup)
            .addClass(classDown);
    }

    $.fn.cssSlideUp = function (el) {

        this.each(function () {
            cssSlideUp(this);
        });

        return this;

    };

    $.fn.cssSlideDown = function (el) {

        this.each(function () {
            cssSlideDown(this);
        });

        return this;

    };

    $.fn.cssSlideToggle = function (state) {

        this.each(function () {

            var $el = $(this);
            var show = typeof state === 'boolean' ? state : !$el.is(':visible') || $el.hasClass(classUp)

            if (show) {
                $el.cssSlideDown();
            } else {
                $el.cssSlideUp();
            }

        });

        return this;

    };


}(jQuery));

/*********************************************************************
*  #### Twitter Post Fetcher v15.0.1 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals.
    factory();
  }
}(this, function() {
  var domNode = '';
  var maxTweets = 20;
  var parseLinks = true;
  var queue = [];
  var inProgress = false;
  var printTime = true;
  var printUser = true;
  var formatterFunction = null;
  var supportsClassName = true;
  var showRts = true;
  var customCallbackFunction = null;
  var showInteractionLinks = true;
  var showImages = false;
  var targetBlank = true;
  var lang = 'en';
  var permalinks = true;
  var dataOnly = false;
  var script = null;
  var scriptAdded = false;

  function handleTweets(tweets){
    if (customCallbackFunction === null) {
      var x = tweets.length;
      var n = 0;
      var element = document.getElementById(domNode);
      var html = '<ul>';
      while(n < x) {
        html += '<li>' + tweets[n] + '</li>';
        n++;
      }
      html += '</ul>';
      element.innerHTML = html;
    } else {
      customCallbackFunction(tweets);
    }
  }

  function strip(data) {
    return data.replace(/<b[^>]*>(.*?)<\/b>/gi, function(a,s){return s;})
        .replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,
        '');
  }

  function targetLinksToNewWindow(el) {
    var links = el.getElementsByTagName('a');
    for (var i = links.length - 1; i >= 0; i--) {
      links[i].setAttribute('target', '_blank');
    }
  }

  function getElementsByClassName (node, classname) {
    var a = [];
    var regex = new RegExp('(^| )' + classname + '( |$)');
    var elems = node.getElementsByTagName('*');
    for (var i = 0, j = elems.length; i < j; i++) {
        if(regex.test(elems[i].className)){
          a.push(elems[i]);
        }
    }
    return a;
  }

  function extractImageUrl(image_data) {
    if (image_data !== undefined && image_data.innerHTML.indexOf('data-srcset') >= 0) {
      var data_src = image_data.innerHTML
          .match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];
      return decodeURIComponent(data_src).split('"')[1];
    }
  }

  var twitterFetcher = {
    fetch: function(config) {
      if (config.maxTweets === undefined) {
        config.maxTweets = 20;
      }
      if (config.enableLinks === undefined) {
        config.enableLinks = true;
      }
      if (config.showUser === undefined) {
        config.showUser = true;
      }
      if (config.showTime === undefined) {
        config.showTime = true;
      }
      if (config.dateFunction === undefined) {
        config.dateFunction = 'default';
      }
      if (config.showRetweet === undefined) {
        config.showRetweet = true;
      }
      if (config.customCallback === undefined) {
        config.customCallback = null;
      }
      if (config.showInteraction === undefined) {
        config.showInteraction = true;
      }
      if (config.showImages === undefined) {
        config.showImages = false;
      }
      if (config.linksInNewWindow === undefined) {
        config.linksInNewWindow = true;
      }
      if (config.showPermalinks === undefined) {
        config.showPermalinks = true;
      }
      if (config.dataOnly === undefined) {
        config.dataOnly = false;
      }

      if (inProgress) {
        queue.push(config);
      } else {
        inProgress = true;

        domNode = config.domId;
        maxTweets = config.maxTweets;
        parseLinks = config.enableLinks;
        printUser = config.showUser;
        printTime = config.showTime;
        showRts = config.showRetweet;
        formatterFunction = config.dateFunction;
        customCallbackFunction = config.customCallback;
        showInteractionLinks = config.showInteraction;
        showImages = config.showImages;
        targetBlank = config.linksInNewWindow;
        permalinks = config.showPermalinks;
        dataOnly = config.dataOnly;

        var head = document.getElementsByTagName('head')[0];
        if (script !== null) {
          head.removeChild(script);
        }
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.syndication.twimg.com/widgets/timelines/' +
            config.id + '?&lang=' + (config.lang || lang) +
            '&callback=twitterFetcher.callback&' +
            'suppress_response_codes=true&rnd=' + Math.random();
        head.appendChild(script);
      }
    },
    callback: function(data) {
      var div = document.createElement('div');
      div.innerHTML = data.body;
      if (typeof(div.getElementsByClassName) === 'undefined') {
         supportsClassName = false;
      }

      function swapDataSrc(element) {
        var avatarImg = element.getElementsByTagName('img')[0];
        avatarImg.src = avatarImg.getAttribute('data-src-2x');
        return element;
      };

      var tweets = [];
      var authors = [];
      var times = [];
      var images = [];
      var rts = [];
      var tids = [];
      var permalinksURL = [];
      var x = 0;

      if (supportsClassName) {
        var tmp = div.getElementsByClassName('timeline-Tweet');
        while (x < tmp.length) {
          if (tmp[x].getElementsByClassName('timeline-Tweet-retweetCredit').length > 0) {
            rts.push(true);
          } else {
            rts.push(false);
          }
          if (!rts[x] || rts[x] && showRts) {
            tweets.push(tmp[x].getElementsByClassName('timeline-Tweet-text')[0]);
            tids.push(tmp[x].getAttribute('data-tweet-id'));
            authors.push(swapDataSrc(tmp[x]
                .getElementsByClassName('timeline-Tweet-author')[0]));
            times.push(tmp[x].getElementsByClassName('dt-updated')[0]);
            permalinksURL.push(tmp[x].getElementsByClassName('timeline-Tweet-timestamp')[0]);
            if (tmp[x].getElementsByClassName('timeline-Tweet-media')[0] !==
                undefined) {
              images.push(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]);
            } else {
              images.push(undefined);
            }
          }
          x++;
        }
      } else {
        var tmp = getElementsByClassName(div, 'timeline-Tweet');
        while (x < tmp.length) {
          if (getElementsByClassName(tmp[x], 'timeline-Tweet-retweetCredit').length > 0) {
            rts.push(true);
          } else {
            rts.push(false);
          }
          if (!rts[x] || rts[x] && showRts) {
            tweets.push(getElementsByClassName(tmp[x], 'timeline-Tweet-text')[0]);
            tids.push(tmp[x].getAttribute('data-tweet-id'));
            authors.push(swapDataSrc(getElementsByClassName(tmp[x],
                'timeline-Tweet-author')[0]));
            times.push(getElementsByClassName(tmp[x], 'dt-updated')[0]);
            permalinksURL.push(getElementsByClassName(tmp[x], 'timeline-Tweet-timestamp')[0]);
            if (getElementsByClassName(tmp[x], 'timeline-Tweet-media')[0] !== undefined) {
              images.push(getElementsByClassName(tmp[x], 'timeline-Tweet-media')[0]);
            } else {
              images.push(undefined);
            }
          }
          x++;
        }
      }

      if (tweets.length > maxTweets) {
        tweets.splice(maxTweets, (tweets.length - maxTweets));
        authors.splice(maxTweets, (authors.length - maxTweets));
        times.splice(maxTweets, (times.length - maxTweets));
        rts.splice(maxTweets, (rts.length - maxTweets));
        images.splice(maxTweets, (images.length - maxTweets));
        permalinksURL.splice(maxTweets, (permalinksURL.length - maxTweets));
      }

      var arrayTweets = [];
      var x = tweets.length;
      var n = 0;
      if (dataOnly) {
        while (n < x) {
          arrayTweets.push({
            tweet: tweets[n].innerHTML,
            author: authors[n].innerHTML,
            time: times[n].textContent,
            image: extractImageUrl(images[n]),
            rt: rts[n],
            tid: tids[n],
            permalinkURL: (permalinksURL[n] === undefined) ?
                '' : permalinksURL[n].href 
          });
          n++;
        }
      } else {
        while (n < x) {
          if (typeof(formatterFunction) !== 'string') {
            var datetimeText = times[n].getAttribute('datetime');
            var newDate = new Date(times[n].getAttribute('datetime')
                .replace(/-/g,'/').replace('T', ' ').split('+')[0]);
            var dateString = formatterFunction(newDate, datetimeText);
            times[n].setAttribute('aria-label', dateString);

            if (tweets[n].textContent) {
              // IE hack.
              if (supportsClassName) {
                times[n].textContent = dateString;
              } else {
                var h = document.createElement('p');
                var t = document.createTextNode(dateString);
                h.appendChild(t);
                h.setAttribute('aria-label', dateString);
                times[n] = h;
              }
            } else {
              times[n].textContent = dateString;
            }
          }
          var op = '';
          if (parseLinks) {
            if (targetBlank) {
              targetLinksToNewWindow(tweets[n]);
              if (printUser) {
                targetLinksToNewWindow(authors[n]);
              }
            }
            if (printUser) {
              op += '<div class="user">' + strip(authors[n].innerHTML) +
                  '</div>';
            }
            op += '<p class="tweet">' + strip(tweets[n].innerHTML) + '</p>';
            if (printTime) {
              if (permalinks) {
                op += '<p class="timePosted"><a href="' + permalinksURL[n] +
                   '">' + times[n].getAttribute('aria-label') + '</a></p>';
              } else {
                op += '<p class="timePosted">' +
                    times[n].getAttribute('aria-label') + '</p>';
              }
            }
          } else {
            if (tweets[n].textContent) {
              if (printUser) {
                op += '<p class="user">' + authors[n].textContent + '</p>';
              }
              op += '<p class="tweet">' +  tweets[n].textContent + '</p>';
              if (printTime) {
                op += '<p class="timePosted">' + times[n].textContent + '</p>';
              }

            } else {
              if (printUser) {
                op += '<p class="user">' + authors[n].textContent + '</p>';
              }
              op += '<p class="tweet">' +  tweets[n].textContent + '</p>';
              if (printTime) {
                op += '<p class="timePosted">' + times[n].textContent + '</p>';
              }
            }
          }
          if (showInteractionLinks) {
            op += '<p class="interact"><a href="https://twitter.com/intent/' +
                'tweet?in_reply_to=' + tids[n] +
                '" class="twitter_reply_icon"' +
                (targetBlank ? ' target="_blank">' : '>') +
                'Reply</a><a href="https://twitter.com/intent/retweet?' +
                'tweet_id=' + tids[n] + '" class="twitter_retweet_icon"' +
                (targetBlank ? ' target="_blank">' : '>') + 'Retweet</a>' +
                '<a href="https://twitter.com/intent/favorite?tweet_id=' +
                tids[n] + '" class="twitter_fav_icon"' +
                (targetBlank ? ' target="_blank">' : '>') + 'Favorite</a></p>';
          }

          if (showImages && images[n] !== undefined) {
            op += '<div class="media">' +
                '<img src="' + extractImageUrl(images[n]) +
                '" alt="Image from tweet" />' + '</div>';
          }

          arrayTweets.push(op);
          n++;
        }
      }

      handleTweets(arrayTweets);
      inProgress = false;

      if (queue.length > 0) {
        twitterFetcher.fetch(queue[0]);
        queue.splice(0,1);
      }
    }
  };

  // It must be a global variable because it will be called by JSONP.
  window.twitterFetcher = twitterFetcher;
  return twitterFetcher;
}));

/*
* rwdImageMaps jQuery plugin v1.5
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2013 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);
$window = $(window);

$(function ($) {
    "use strict";

    // Resize main navigation

    var $more = $('.nav-list-primary-more');
    var $moreContainer = $('.main-nav__more-links');
    var $navItems = $('.top-item');
    // Used to check if we are in mobile mode (better support than matchMedia)
    var $mobileMenu = $('.js-toggle-menu');
    var ie8 = !!$('.ie8').length;
    var inResize = false;
    
    // Overflow is hidden to stop jumping as the page loads in the CSS
    // Allow it to show mega menus
    $('.main-nav').css('overflow', 'visible');

    // If we only have two items we will not need to resize
    if ($navItems.length < 2) {
        return;
    }

    function checkNav() {

        // IE8 is slightly hyperactive with resize.  Only run this once
        if (inResize) {
            return;
        }
        inResize = true;

        //If the site is being displayed on a mobile device, we will not need to resize
        if( !$mobileMenu.is(':visible') ){

            $navItems.hide();
            $more.show();
            var moreOffsetTop = $more.offset().top;
            $more.hide();
            $navItems.show();

            // Find the top offset of the first item
            var topOffset = $navItems.eq(0).offset().top;
            var lastTopOffset = $navItems.last().offset().top;

            // If the last item does not have the same top offset
            if (lastTopOffset > topOffset) {
                // Hide and show the more link
                $moreContainer.empty();
                hideItem($navItems.last());
                $more.show().css('visiblity', 'hidden');
               
                // Keep taking off items until the last item has the same offset as the first item
                for (var i = $navItems.length - 2; i >= 0; --i) {
                    var $item = $navItems.eq(i);
                    if ($item.offset().top > topOffset || $more.offset().top > moreOffsetTop) {
                        hideItem($item);
                    } else {
                        break;
                    }
                }
                $more.show().css('visiblity', 'visible');
            }
        } else {
            $more.hide();
            $navItems.show();
        }

        // IE8 will throw it's self into a never ending resize loop unless we do this
        if (ie8) {
            window.setTimeout( function() {
                inResize = false;
           }, 0 );
        } else {
            inResize = false;
        }
    }

    // Hide a menu item and add it to the more menu
    function hideItem($item) {
       
        var link = $item.children('a')[0];
        var html = '<li><a href="' + link.href + '">' + link.innerHTML + '</a></li>';
        $moreContainer.prepend(html);
        $item.hide();
    }

    $(window).on('resize', checkNav);
    checkNav();
});
$(function ($) {
    "use strict";

    // Show more menu and mega menus

    var $navContainer = $('.nav-list-primary');
    // Used to hide the menus
    var $menus = $('.js-mega-menu, .js-more-menu');
    var timeout;

    $('.js-more-menu')
        .on('focusin mouseenter', function () {
            clearTimeout(timeout);
            $menus.removeClass('active');
            $(this).addClass('active');
        })
        .on('focusout mouseleave', function (e) {
            clearTimeout(timeout);
            var $this = $(this);
            // Set the timeout to 250ms on this one.
            // It feels better if it is a little more responive
            timeout = setTimeout(function () {
                $this.removeClass('active');
            }, e.type === 'mouseleave' ? 250 : 0);
        })
        .on('keyup', arrowKeyNavigation)
        .children('a')
            .on('click', false);

    // Megamenu drop downs

    $('.js-mega-menu')
        .on('focusin', function () {
            clearTimeout(timeout);
            showMegaMenu($(this));
        })
        .on('mouseenter', function () {
            var $this = $(this);
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                showMegaMenu($this);
            }, 500);
        })
        .on('focusout mouseleave', function (e) {
            clearTimeout(timeout);
            var $this = $(this);

            // For mouseleave wait half a second.
            // For keyboard just wait long one tick so the focus can move
            timeout = setTimeout(function () {
                $this.removeClass('active');
            }, e.type === 'mouseleave' ? 500 : 0);

        })
        .on('keyup', arrowKeyNavigation);

    function arrowKeyNavigation(e) {
        var $target = $();
        var $this = $(this);
        if (e.keyCode === 37) {
            $target = traverseVisible($this, 'prev');
        } else if (e.keyCode === 39) {
            $target = traverseVisible($this, 'next');
        }
        $target.children().first('a').trigger('focus');
    }

    function traverseVisible($item, direction) {
        do {
            if (direction === 'next') {
                $item = $item.next();
            } else if (direction === 'prev') {
                $item = $item.prev();
            }

        } while ($item[0] && !$item.is(':visible'));
        return $item;
    }


    function showMegaMenu($li) {

        // Don't run if alway open
        if ($li.hasClass('active')) {
            return;
        }

        // Hide all the other menus
        $menus.removeClass('active');
        $li.addClass('active');

        // Find the menu
        var $menu = $li.children('.mega-menu');
        // If there isn't one return
        if ($menu.length === 0) {
            return;
        }

        // Clear any previously set left value
        $menu.css('left', '');

        // If the menu is off the right of the page then move it
        var rightEdge = $navContainer.offset().left + $navContainer.outerWidth();
        var menuWidth = $menu.outerWidth();
        var menuOffset = $menu.offset();
        var paddingRight = parseFloat($navContainer.css('paddingRight'));
        if (rightEdge - paddingRight < menuOffset.left + menuWidth) {
            $menu.offset({ left: rightEdge - menuWidth - paddingRight });
        }

        // Position the arrow
        // This needs to go in the middle of the <li> and at the top of the mega menu
        // As we are moving the menu around we need to manually set the left position
        // Chrome and Firefox have different interpretations of absolute positioning inside display table
        // One includes the border and one doesn't.  This means we need to manually set the top position
        // The + 1 on the top is to give a one pixel overlap, which stops separation at some zoom levels
        var $arrow = $menu.children('.mega-menu__arrow');
        var leftPos = $li.offset().left + $li.outerWidth() / 2 - $arrow.outerWidth() / 2;
        $arrow.offset({ left: leftPos, top: menuOffset.top - $arrow.outerHeight() + 1 });

    }

});
$(function ($) {
    var isSetup = false;
    var $mainMenu;

    $('.js-toggle-menu').on('click', function (e) {
        e.preventDefault();
        $mainMenu = $mainMenu || $('.main-nav');
        setup();
        $mainMenu.slideToggle();
    });

    // Hack to get the secondary navigation to appear in the main menu
    function setup() {
        if ( isSetup ) {
            return;
        }
        var $secondary = $('<ul class="main-nav__mobile-secondary">');
        $('.main-header__top-nav').children().not('.nav-list-primary-more').each(function () {
            $secondary.append($('<li class="top-item">').append($(this).clone()));
        });
        $mainMenu.append($secondary);

        // If we get bigger than the mobile size hide the menu
        if ( window.matchMedia ) {
            matchMedia("(min-width:768px)").addListener(function (match) {
                if (match.matches) {
                    // Need to add overflow: visible for the mega menus stop working
                    $mainMenu.attr('style', 'overflow: visible');
                }
            });
        }
        isSetup = true;
    }


});




( function ($,encodeURIComponent) {

    // Twitter
    $('.js-twitter').on('click', function (e) {
        e.preventDefault();
        window.open(this.href + encodeURIComponent(location.href), '', 'width=550,height=520')
    });

    // Facebook
    $('.js-facebook').on('click', function (e) {
        e.preventDefault();
        window.open(this.href + encodeURIComponent(location.href), '', 'width=626,height=436');
    });

    // Google+
    $('.js-google-plus').on('click', function (e) {
        e.preventDefault();
        window.open(this.href + encodeURIComponent(location.href), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    });
  
    // Add the current URL to the email this page link
    mailLink = $(".mailLink")[0];
    if ( mailLink ) {
        mailLink.href += encodeURIComponent(location);
    }

    if ($('.popup_feedback').length) {

        $('input[type="radio"][name="ctl00$ctl00$RootPlaceHolder$ShareBar$ctl00$contactmethodradio"]').change(function () {
            if (this.value == 'feedbackformemail') {
                $('#lblMethod').html('Email:');

                //$('#validationFail').html('Not a valid Email address');
            }
            else if (this.value == 'feedbackformtelephone') {
                $('#lblMethod').html('Telephone:');

                //$('#validationFail').html('Not a valid telephone number');
            }
        });

        $('.last-page').html(document.URL);
    }

    /**
     *  If a user has used an option on the share bar the focus will return to the link after they've used the option
     *  This causes the label to reshow and overlay the content annoying users
     *  This adds an extra state to the link that will hide the label when the focus returns, and
     *  then removes that state when the user has finished with it.
     */

    var shareFocusClassName = 'share-bar__link--closed';
    var $sharebar = $('.share-bar');
    var $shareLinks = $sharebar.find('a');

    function hackShareBarFocus($a) {
        $a.addClass(shareFocusClassName);
        $a.one('focusout', function () {
            $a.removeClass(shareFocusClassName);
            window.setTimeout(function () {
                // If the focus is flashing back and forth reapply the hack.  Happens while printing
                if (document.activeElement === $a[0]) {
                    hackShareBarFocus($a);
                }
            }, 0);
        });
    }

    $sharebar
       .on('click', 'a', function () {
           var $a = $(this);
           window.setTimeout(function () {
               hackShareBarFocus($a);
           }, 0);
       })
       .on('focusin', 'a', function () {
           $shareLinks.not(this).removeClass(shareFocusClassName);
       });

}(jQuery, encodeURIComponent));
$(function ($) {
    var timeout;
    var $extentPopup = $('.js-extent-popup');
    var $extentLink = $('.js-extent-link');
    var $pointer;

    function showPopup() {
        $extentPopup.show();
        if (!$pointer) {
            $pointer = $('<span class="breadcrumb__extent-popup__arrow">').appendTo($extentPopup);
            var leftPos = $extentLink.offset().left + $extentLink.outerWidth() / 2 - $pointer.outerWidth() / 2;
            $pointer.offset({ left: leftPos, top: $extentPopup.offset().top - $pointer.outerHeight() + 1 });
        }
    }

    $extentLink
        .on('click', false) // Stop the link being pressed if JS is enabled
        .add($extentPopup)
            .on('mouseenter focusin', function () {
                clearTimeout(timeout);
                showPopup();
            })
            .on('mouseleave focusout', function (e) {
                // Timeout is 0 for focusout in case the focus moves to a link inside the popup in this tick
                timeout = setTimeout(function () {
                    $extentPopup.hide();
                }, e.type === 'mouseleave' ? 250 : 0);
            });
});





/**
 *  Controls the accordion buttons
 */
$('.accordionButton')
    .on('click', function () {
        var $this = $(this);
        var $content = $this.next('.accordionContent');
        var $img = $this.find("img");
        if ($this.hasClass('on')) {
            $this.removeClass('on');
            $content.slideUp();
            $img
                .attr("src", "/static/layout/accordion-closed.png")
                .attr("alt", "Expand"); // TODO need to translate these
        } else {
            $this.addClass('on');
            $content.slideDown();
            $img
                .attr("src", "/static/layout/accordion-open.png")
                .attr("alt", "Collapse");
        }
    })
    .next('.accordionContent') // Hide the content which is initally open
        .hide();
/**
 *  If anything is using the twitter timeline than load the Twitter widget js
 */
jQuery(function ($) {
    if ($('.twitter-timeline,.twitter-follow-button,.twitter-video,.twitter-tweet,.twitter-share-button').length) {
        !function (document, s, id) {
            var js;
            var firstJS = document.getElementsByTagName(s)[0];
            if (!document.getElementById(id)) {
                js = document.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                firstJS.parentNode.insertBefore(js, firstJS);
            }
        }(document, "script", "twitter-wjs");
    }
});
/**
 *  Resize an iframe when the content loads
 */
(function ($) {
    if ( !window.postMessage ) {
        return;
    }

    // Frames indexed by Livelink URL
    var frames = {};

    // I would use a class,but TinyMCE won't let me http://stackoverflow.com/questions/13161323/tinymce-strips-class-attribute-from-iframe-element
    $('iframe[data-auto-resize]')
        .each(function () {
            var iframe = this;
            var $iframe = $(this);

            // Extract the Livelink URL
            var frameId = iframe.src.replace(/\?.*$/, '').replace(/\/+$/, '').replace(/^.*\//, '');
            frames[frameId] = $iframe;+ 'id=' + frameId;

            $(this)
                .on('cabResizeFrame', function (e, height) {
                    // Get rid of scroll bars and stop jumping
                    iframe.scrolling = 'no';
                    currentHeight = $iframe.height();
                    // Don't change height if it is only 30px smaller - hoepfully stops jumping
                    if (height && height > currentHeight || height < (currentHeight - 30)) {
                        $iframe.height(height);
                    }
                })
                .on('cabScrollTop', function (e) {
                    // Scroll to top of iframe
                    $('html, body').animate({
                        scrollTop: $iframe.offset().top
                    }, 500);
                })
                .on('cabScrollTo', function (e, position) {
                    // Scroll to a position in the frame
                    $('html, body').animate({
                        scrollTop: $iframe.offset().top + position
                    }, 500);
                });
        });


    $(window).on('message', function(e) {
        var message = e.originalEvent;
        if (/(citizensadvice|cabsrv)\.org\.uk$/i.test(message.origin)) {
            // Message will be {url: url, height: int, scrollTop: boolean}
            // URL is to identify the frame (because you can't idenify a remote frame from a message)

            var data = JSON.parse(message.data) || {};

            var frame = frames[data.url];
            if (frame) {
                if (data.height) {
                    frame.trigger('cabResizeFrame', data.height);
                }
                if (data.scrollTop) {
                    frame.trigger('cabScrollTop');
                }
                if (data.scrollTo) {
                    frame.trigger('cabScrollTo', data.scrollTo);
                }
            }
        }
    });

}(jQuery));

/**
 *  @fileoverview
 *  Adds a cookie warning to the site
 *  The warning is shown if the user accepts cookies and if it hasn't already been shown three times
 *  It can be forced to show by adding showeprivacy=true to the url search
 */
jQuery(function ($) {
    // Finds the cookies
    var rCookie = /eprivacy=([1-3])(?:;|$)/;
    // Reduces minified size
    var doc = document;
    // Find the value in the cookie
    var match = doc.cookie.match(rCookie);
    // shownCount be number
    var shownCount = Number(match && match[1] || 0);
    // To set the cookie date
    var date = new Date();
    var cookieDatePart, el;
    var force = location.search.indexOf('showeprivacy=true') > -1;

    if (shownCount < 3 || force ) {

        // Expires in one year
        date.setFullYear(date.getFullYear() + 1);
        cookieDatePart = '; expires=' + date.toUTCString() + '; path=/';

        // Advance the counter
        if (shownCount < 3) {
            ++shownCount;
        }

        if (force) {
            $('html').removeClass('hide-cookie-monster');
        }

        // Set the new value
        doc.cookie = 'eprivacy=' + shownCount + cookieDatePart;
        
        // If the close button is pressed remove and set the cookie
        $('.cookie-monster').on('click','[data-action=close]', function(e) {
            e.preventDefault();
            doc.cookie = 'eprivacy=3' + cookieDatePart;
            $(e.delegateTarget).slideUp();
        } );
    }
});
$(function ($) {
    // To do - allow as many news items as required
    // To do - test no js
    // To do - check with feed
    // To do - check in old IE
    
    var currentClass = 'top-news__navigation__item--current';
    var $parent = $('.js-news-carousel');
    var $newsItems = $parent.find('.top-news__article');
    var $navigationItems = $parent.find('.top-news__navigation__item');
    var index = 0;
    var match;

    // Add index items so each control knows which news article is will be controlling
    $navigationItems.each(function (i) {
        $(this).attr('data-item', i);
    });

    $navigationItems
        .on('mouseenter focusin', function () {
            var $this = $(this);
            index = parseInt($this.attr('data-item'), 10);
            $newsItems.hide().eq(index).show();
            $navigationItems.removeClass(currentClass);
            $this.addClass(currentClass);
        });
    
    // Show them all on a mobile
    if (window.matchMedia) {
        match = matchMedia("(max-width:767px)");
        match.addListener(function (match) {
            if (match.matches) {
                $newsItems.show();
            } else {
                $navigationItems.eq(index).triggerHandler('mouseenter');
            }
        });
    }

    if ( !match || !match.matches ) {
        $navigationItems.eq(0).triggerHandler('mouseenter');
    }

});
// Generic script for tab switching

$(function ($) {

    var $tabsContainers = $('.js-tabs');

    // Cache of all panel ids, and there index in that group of panels
    // An ID must be globally unique
    var panelIdMap = {};

    $tabsContainers.on('click', 'a', function (e) {
        // Find the index of the panel to show from the id
        var panelId = this.hash;
        var panelIndex = panelIdMap[this.hash];
        var $container = $(this).closest('.js-tabs');

        // See http://www.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/
        // Hide all but the current panel
        $container.data('cab-panels')
            .hide()
            .attr('hidden',true)
            .eq(panelIndex)
                .show()
                .removeAttr('hidden')

        // Mark which panel is showing
        $container.data('cab-tabs')
            .attr( 'aria-expanded', 'false' )
            .eq(panelIndex)
                .attr( 'aria-expanded', 'true' )

        e.preventDefault();
    });


    // Find the tabs and panels in the tab container
    $tabsContainers.each(function () {
        var $this = $(this);
        var $tabs = $this.find('[role=tab]'); 
        var count = 0;
        var $links = $tabs.find('a');
        var $panels = $links.map(function () {
            panelIdMap[this.hash] = count++;
            return $(this.hash)[0];
        });
        // Cache them
        $this.data('cab-tabs', $tabs);
        $this.data('cab-panels', $panels);

        // Mark the first panel as showing
        $links.eq(0).trigger('click');
    });


});
/**
 *	A simple script for setting floats in a row to an equal height
 */
(function ($, window) {

    var namespace = 'equalHeight';
    var className = 'js-equal-height';
    var classNameSetup = className + '-setup';

    // Check if flexbox is supported - new or tweener syntax only as we need wrap support
    var $test = $('<div style="display:-webkit-flex;display:-ms-flexbox;display:flex;"/>');
    var supportsFlexBox = $test.css('display').indexOf('flex') > -1;

    var globalEventsSetup = false;
    // This prevents IE8 fireing infinite resize events
    var resizeRunning = false;
    var $elements = $();

    function setupGlobalEvents() {
        if (globalEventsSetup) {
            return;
        }
        $(window).on('resize', function () {

            if (!resizeRunning) {
                resizeRunning = true;
                $elements.trigger('resize');
            }
            setTimeout(function () {
                resizeRunning = false;
            }, 0);

        });
    }

    function setHeight(items) {

        if (items.length <= 1) {
            return;
        }

        var maxHeight = 0;

        items.forEach(function (item) {
            // Don't use .height(), it gets and sets the innerHeight only
            var height = item.outerHeight();

            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        items.forEach(function (item) {
            item.css( 'height', maxHeight );
        });

    }

    function equalHeight() {

        var $this = $(this);
        var lastOffsetTop = 0;
        var row = [];

        $this.children().toArray()
            .map(function (item) {
                // Reset all heights
                var $item = $(item);
                $item.css('height', '');
                return $item;
            } )
            .forEach(function ($item) {

			    var offset = $item.offset();

			    if (offset.top === lastOffsetTop) {
			        row.push($item);
			    } else {
			        setHeight(row);
			        offset = $item.offset();
			        row = [$item];
			        lastOffsetTop = offset.top;
			    }

			});
        setHeight(row);
    }

    function setup() {
        var $this = $(this);
        if ($this.hasClass(classNameSetup)) {
            return;
        }
        setupGlobalEvents();
        $elements = $elements.add(this);
        $this.on('resize', equalHeight);
        $this.addClass(classNameSetup);
        equalHeight.call(this);
        setTimeout(equalHeight.bind(this), 100);
    }

    $.fn[namespace] = function () {
        $(this).each(setup);
        return this;
    };

    $.fn[namespace].supportsFlexBox = supportsFlexBox;

    if (!supportsFlexBox) {
        $('.' + className)[namespace]();
    }

}(jQuery, window));
/* jshint laxbreak: true */

/*!
 * jQuery.fn.top-sticky.js v0.3
 * © 2014 Daniel Lewis github.com/mrdaniellewis/jquery.fn.top-sticky.js
 * MIT license
 */

( function( $, window, max, min ) {
	
	"use strict";

	var dataName = '.topSticky';

	// String constants for over the top minification optimisation
	var MARGIN = 'margin';
	var POSITION = 'position';
	var STICKY = 'sticky';
	var PADDING = 'padding';
	var RESIZE = 'resize';
	var STATIC = 'static';
	var ABSOLUTE = 'absolute';

	// Test for native support
	var nativeSupport = $('<i style="010-webkit-1"/>'
		.replace(/0|1/g,function(m) {
			return [ POSITION + ':', STICKY + ';' ][m];
		}))
		.css(POSITION)
		.indexOf(STICKY) > -1;

	// Cross browser request animation frame
	var RAF = 'equestAnimationFrame';
	var requestAnimationFrame = window[ 'r' + RAF ] 
		|| window[ 'webkitR' + RAF ] 
		|| window[ 'mozR' + RAF ] 
		|| window[ 'oR' + RAF ] 
		|| function(fn) {
			return setTimeout( fn, 0 ); // 0 results in less positioning errors and a smoother appearance
		};

	var $window = $(window);
	var windowHeight, scrollTop;
	var lastScrollTop = -1;

	// Elements to process when scrolling - these are elements that are actively being positioned
	var $scroll = $();
	// Elements to process when resizing - these are the scroll elements, 
	// plus any that are hidden or have top=auto
	var $resize = $();

	// Are we currently positioning
	var running = false;
	// Are we currently resizing
	var resizing = false;

	// Called when resizing
	function onResize() {
		resizing = true;
		onScroll();
	}

	// Update all elements
	function update() {

		var $collection = $scroll;
		// Swap to the resize collection in a resize
		if ( resizing ) {
			$collection = $resize;
		}

		windowHeight = $window.height();
		scrollTop = $window.scrollTop();

		$collection.each( function() {
			$.data( this, dataName )(resizing);
		} );

		if ( lastScrollTop != scrollTop ) {
			lastScrollTop = scrollTop;
			requestAnimationFrame( update );
		} else {
			running = resizing = false;
		}
	}

	// The scroll event - also called on a resize
	function onScroll() {

		if ( !running ) {
			requestAnimationFrame( update );
			running = true;
		}
	}

	// Add or remove the global scroll event
	var scrollEventSet = false;
	function setScrollEvent() {
		if ( !$scroll.length ) {
			$window.off( 'scroll' + dataName + ' touchmove' + dataName );
		} else if ( !scrollEventSet ) {
			$window.on( 'scroll' + dataName + ' touchmove' + dataName, onScroll );
			scrollEventSet = true;
		}
	}

	// Add or remove the global resize event
	var resizeEventSet = false;
	function setResizeEvent() {
		if ( !$resize.length ) {
			$window.off( RESIZE + dataName );
		} else if ( !resizeEventSet ) {
			$window.on( RESIZE + dataName, onResize );
			resizeEventSet = true;
		}
	}


	// Creates the functions and holds the values for moving an element
	// A closure, while less readable, minifies rather better
	function makeStickyClosure(el, parent) {
		var $el = $(el);
		
		var lastPosition = '';
		var $ghost = $();
		var width, height, top, marginTop, marginLeft, marginBottom, marginRight, parentHeight, 
			parentPaddingBottom, offset, windowHeight;
		var active = false;
		var lastState = false;
		var elResizing = false;
		var $parent;

		// Don't add it twice
		if ( $.data( el, dataName ) ) {
			return;
		}

		// Reset back to the elements natural position
		function reset() {
			$el.attr('style','');
			$ghost.hide();
		}

		function setPosition(isResize) {

			// IE8/7 triggers a resize event on itself when its dimensions change
			// Prevent endless loops
			elResizing = true;
			setTimeout( function() {
				elResizing = false;
			},0);

			if ( isResize ) {

				top = null;
				lastPosition = '';
				
				if ( $el.is(':visible') ) {

					$parent = parent ? $(parent) : $el.parent();

					// Reset original size and position
					reset();

					width = $el.outerWidth();
					height = $el.outerHeight();

					// This is part is painful
					// If the element is hidden (and also positioned absolutely for Safari)
					// then getComputedStyle gives you the actual CSS value
					// If it shows and is absolute/fixed you get the pixels from its offset parent
					// which isn't what we want
					// For top jQuery manages to give you the value in pixels
					// For bottom (which this doesn't need) some browsers give it you in what ever
					// units you used.
					$el.css( {display: 'none', position: ABSOLUTE } );
					if ( $el.css('top') == 'auto' ) {
						// Auto means it isn't set
						top = null;
					} else {
						// Display and get the top property
						// Providing it is set we seem to get it in pixels in all browsers
						$el.css('display','');
						top = getDimension( $el, 'top' );
					}
				}

				active = top !== null;
			
				if ( lastState !== active ) {
					// Add or remove from the scroll list
					// and set the event so scroll is only
					// running if it really needs to
					if ( active ) {
						$scroll = $scroll.add(el);
					} else {
						$scroll = $scroll.not(el);
					}
					lastState = active;
					setScrollEvent();
				}

				if ( !active ) {
					reset();
					return;
				}

				// Get the normal position
				$el.css(POSITION, STATIC);
				offset = $el.offset();

				// We need all the margins for the ghost
				marginTop = getDimension( $el, MARGIN + 'Top' ) || 0;
				marginLeft = getDimension( $el, MARGIN + 'Left' ) || 0;
				marginBottom = getDimension( $el, MARGIN + 'Bottom' ) || 0;
				marginRight = getDimension( $el, MARGIN + 'Right' ) || 0;

				parentHeight = $parent.innerHeight();
				parentPaddingBottom = getDimension( $parent, PADDING + 'Bottom' );
			}

			var position = '';
			var currentOffset = $el.offset();
			var windowTop = scrollTop + top;
			var parentBottom = $parent.offset().top + parentHeight - parentPaddingBottom - height - marginBottom;

			var calculatedTop = max( 
				offset.top,
				min( 
					windowTop,
					parentBottom
				)
			);

			if ( offset.top === calculatedTop ) {
				position = STATIC;
			} else if ( calculatedTop === windowTop ) {
				position = 'fixed';
			} else if ( calculatedTop === parentBottom ) {
				position = ABSOLUTE;
			}

			// Only reposition if we have to
			if ( lastPosition != position || currentOffset.left != offset.left ) {

				lastPosition = position;

				if ( position == STATIC ) {
					reset();
					$ghost.hide();
					return;
				} 

				$el
					.css( POSITION, position )
					.offset({ top: calculatedTop, left: offset.left })
					.outerWidth(width)
					.outerHeight(height);

				if ( !$ghost.length ) {
					$ghost = $('<div>')
						.css( {
							visibility: 'hidden',
							width: width,
							height: height,
							margin: [marginTop,marginRight,marginBottom,marginLeft].join('px ') + 'px',
							border: 0,
							padding: 0
						} )
						.insertAfter($el);
				}
				$ghost.show();

			}
		}

		// Function to remove the stickyness
		setPosition.x = function() {
			if ( $ghost ) {
				$ghost.remove();				
			}

			$el
				.css(reset)
				.off(dataname)
				.removeData(dataName);

			$resize = $resize.not(el);
			$scroll = $scroll.not(el);
			setScrollEvent();
			setResizeEvent();		
		};

		$resize = $resize.add(el);
		$.data( el, dataName, setPosition );
		setResizeEvent();
		$el.on( RESIZE + dataName, function() {
			// IE8 can call resize on elements
			// It then ends up in endless loops
			if ( elResizing ) {
				return;
			}
			setPosition(true);
		} );
		setPosition(true);
	}

	function getDimension($el,prop) {
		var val = parseFloat($el.css(prop));
		if ( isNaN(val) ) {
			val = null;
		}
		return val;
	}

	function stickify(parent) {
		/* jshint -W040 */
		this.each(function() {
			makeStickyClosure(this,parent);
		} );
		return this;
	}

	stickify.support = nativeSupport;
	$.fn.stickify = stickify;

	$.fn.unstickify = function() {
		this.each( function() {
			var fn = $.data(this,dataName);
			if ( fn ) {
				fn.x();
			}
		} );
		return this;
	};


}( jQuery, window, Math.max, Math.min ) );

// Polyfill
if (!$.fn.stickify.support) {
    $('.js-make-sticky').stickify();
}


/**
 *  Additional tracking for Google Analytics
 *  Note that the classes and rel are set in LinkHTMLRewriter script
 */
jQuery(function ($) {

    if (!window.ga) {
        return;
    }

    var TRACKBTN = 'data-track-btn';
    var TRACKEVENT = 'data-track';
    var TRACKSUBMIT = 'data-track-submit';
    var TRACKCLICKZONE = 'data-track-zone';
    var rExtent = /(?:\?|&)lang=([^&]+)/i;

    var trackForm = '';

    // See if sessionStorage is supported
    // This can throw errors in some browsers
    var sessionStorage;
    try {
        sessionStorage = window.sessionStorage;
        sessionStorage.getItem('x');
    } catch (e) {
        sessionStorage = null;
    }

    $(document)

    // Track revealables
    .on('click', '.revealable__heading', function (e) {
        ga('send', 'event', 'Revealable', location.href, this.id);
    })

		// Track external links, emails and downloads
		.on('click', 'a[rel=external]', function (e) {
		    if (!e.isDefaultPrevented()) {
		        ga('send', 'event', 'External link', this.href, location.href);
		    }
		})

		// Track downloads
		.on('click', 'a.a-binary', function (e) {
		    if (!e.isDefaultPrevented()) {
		        ga('send', 'event', 'Download', this.href, location.href);
		    }
		})

		// Track emails
		.on('click', 'a[href^="mailto:"]', function (e) {
		    if (!e.isDefaultPrevented()) {
		        ga('send', 'event', 'Email', this.href, location.href);
		    }
		})

		// Track the usage of features - tracked regardless of whether the default action is prevented
		.on('click', 'a[' + TRACKEVENT + '], button[' + TRACKEVENT + ']', function () {
		    ga('send', 'event', 'Actions', this.getAttribute(TRACKEVENT), location.href);
		})

		// Track how users are navigating though the site
		.on('click', '[' + TRACKCLICKZONE + '] a', function (e) {
		    if (!sessionStorage || e.isDefaultPrevented()) {
		        return;
		    }
		    var value = $(this).closest('[' + TRACKCLICKZONE + ']').attr(TRACKCLICKZONE);
		    sessionStorage.setItem(TRACKCLICKZONE, JSON.stringify([Date.now(), value]))
		})

         // Track how users are navigating though the site on drop down (mainly used for search page
		.on('change', '[' + TRACKCLICKZONE + '] select', function (e) {
		    if (!sessionStorage || e.isDefaultPrevented()) {
		        return;
		    }
		    var value = $(this).closest('[' + TRACKCLICKZONE + ']').attr(TRACKCLICKZONE);
		    sessionStorage.setItem(TRACKCLICKZONE, JSON.stringify([Date.now(), value]))
		})

    // Track successful forms submissions
		.on('submit', 'form', function (e) {
		    // If a form is successfully submitted, see if the either the form has a track attibute, or the button that submitted it does
		    if (!e.isDefaultPrevented() && (this.hasAttribute(TRACKEVENT) || trackForm)) {
		        ga('send', 'event', 'Form submission', this.getAttribute(TRACKEVENT) || trackForm, location.href);
		    }
		})

    .on('click', 'button[' + TRACKSUBMIT + '],input[type=submit][' + TRACKSUBMIT + '],input[type=image][' + TRACKSUBMIT + ']', function (e) {
        // If a track form button is pressed save the attribute value for this tick of the event loop
        trackForm = this.getAttribute(TRACKSUBMIT);
        setTimeout(function () {
            // Clear the track value
            trackForm = '';
        }, 0);
    })

    .on('click', '[' + TRACKBTN + ']', function (e) {
        var TOOL = this.getAttribute(TRACKBTN);
        ga('send', {
            hitType: 'event',
            eventCategory: TOOL,
            eventAction: TOOL + ' Submission',
            eventLabel: location.href
        });
    })

    // Track extent changing
    .on('click', '.js-track-extent, a[href*="?lang="]', function (e) {

        if (e.isDefaultPrevented()) {
            return;
        }

        var target = '';
        var $this = $(this);
        if ($this.is('input[type=submit]')) {
            // The form version
            target = $this.parent().find('select').val();
        } else if ($this.is('a')) {
            // A link
            target = (this.search.match(rExtent) || [])[1] || '';
        }
        var zone = $(this).closest('[' + TRACKCLICKZONE + ']').attr(TRACKCLICKZONE);
        // The current extent is in the lang attribute of html
        var action = zone + ': ' + $('html').attr('lang') + ' => ' + target;
        ga('send', 'event', 'Extent', action, location.href);
    });

    // Track if a user spends 15s on a page that is visible
    (function() {
        // Time until we want to record (30 seconds)
        var readingTime = 30 * 1000;
        // Our timeout
        var timeout = null;
        // Have we recorded
        var recorded = false;

        function recordReading() {
            // Non-interactive
            ga('send', 'event', 'reading', (readingTime / 1000) + 's', {
                nonInteraction: true
            });
            recorded = true;
            timeout = null;
        }

        function setup() {

            // If we've already recorded don't record again
            if (recorded) {
                return;
            }

            // Assume the page is visible if the browser doesn't support visibilty
            var hidden = 'hidden' in document ? document.hidden : false;
            var getPageTemplate = $('meta[name="cab-template"]').attr("content");
            var startPageTiming = (getPageTemplate === 'BetaContentPage' || getPageTemplate === 'AdviceguidePage') ? true : false;
            if (!hidden && startPageTiming) {
                timeout = setTimeout(recordReading, readingTime);
            } else if (timeout !== null) {
                // Clear the timer
                clearTimeout(timeout);
                timeout = null;
            }
        }

        if ('addEventListener' in document) {
            // Clear or add the timer based on the page visibilty
            document.addEventListener('visibilitychange', setup, false);
        }

        setup();

    }());

});

/**
 * Toggle all revealables:
 * Allow logged in users to expand/collapse ALL revealables
 * at any one time.
 *
 * Author: @Citizens Advice
 */
$(function ($) {
    'use strict';

    var $container = $('.revealable');
    var $nav = $('.title__subheading');

    var isAuth = ($('input[name=astat]').val());

    if ($($container)[0] && isAuth=="True") {
        $($nav).append('<button class="btn-secondary btn-small c-toggle-all-reveables c-toggle-all-reveables--is-collapsed js-toggle-all-reveables" type="button">Expand all</button>');

        var $trigger = $('.js-toggle-all-reveables');
        var magicClass = 'slide--hidden';
        var state = { expanded: false };

        $($trigger).on('click', function (e) {
            e.preventDefault();
            state.expanded = !state.expanded;
            var buttonText = state.expanded ? 'Collapse all' : 'Expand all';

            $container.each(function () {
                var $heading = $(this).children()[0];
                var $content = $(this).children()[1];

                if (state.expanded) {
                    $($content).removeClass(magicClass);
                    $($heading).attr('aria-expanded', 'true');
                    $($trigger).html(buttonText);
                    $($trigger).removeClass('c-toggle-all-reveables--is-collapsed');
                    $($trigger).addClass('c-toggle-all-reveables--is-expanded');
                } else {
                    $($content).addClass(magicClass);
                    $($heading).attr('aria-expanded', 'false');
                    $($trigger).html(buttonText);
                    $($trigger).removeClass('c-toggle-all-reveables--is-expanded');
                    $($trigger).addClass('c-toggle-all-reveables--is-collapsed');
                }
            });
        });
    }
});

/* jshint browser: true, undef: true */
/* global $: true */

var revealable = (function ($) {
    "use strict";

    // Used to generate ids
    var count = 0;

    // If true refocus to the hash
    var refocus = false;

    var namespace = 'revealable';
    var classSetup = namespace + '--setup';

    // Generate an unique id
    function getId() {
        return namespace + '-' + (++count);
    }

    var w = window;
    var $w = $(w);

    var translate = w.cab && w.cab.translate;

    // Get translated labels
    var closeLabel = translate('Close');

    function refocusHash() {
        $w.scrollTop($(location.hash).offset().top);
    }

    function scrollTo($el) {

        var windowTop = $w.scrollTop();
        var offset = $el.offset();
        if (offset.top < windowTop || offset.top + 100 > $w.height() + windowTop ) {
            $('html, body').animate({
                scrollTop: offset.top
            }, 500);
        }

    }

    function setup() {

        var $this = $(this);

        // The state of the element
        var expanded = null;

        // Check this hasn't already been setup
        if ($this.hasClass(classSetup)) {
            return;
        }

        var $children = $this.children();
        var $heading = $children.first();

        // The first item needs to be a heading for this to work
        if (!$heading.is('h2,h3,h4')) {
            return;
        }

        // Mark as setup
        $this.addClass(classSetup);

        // Wrap the bit that will be hidden
        var containerId = getId();
        var $container = $('<div class="' + namespace + '__content" id="' + containerId + '" tabindex="-1" />');
        var container = $container[0];
        $heading.after($container.append($children.not($heading)));
        $heading.attr('data-action', 'toggle');

        // Setup the heading
        $heading.addClass(namespace + '__heading');
        $heading.attr('aria-controls', containerId);
        $heading.attr('tabindex', 0);

        // Setup the close link
        var $close = $('<button type="button" class="' + namespace + '__close" data-action="close">' + closeLabel + '</button>');
        $container.append($close);

        /**
         *  Toggle showing and hiding
         *  @param {Boolean} [forceClose] Force to a particular state.
         *  @param {Boolean} [noTransition] If true don't transition
         */
        function toggle( forceExpanded, noTransition ) {

            if (forceExpanded === expanded) {
                return;
            }

            var forced = forceExpanded !== undefined;
            expanded = forced ? forceExpanded : !expanded;

            $heading.attr('aria-expanded', String(expanded));

            if (noTransition) {
                $container.toggleClass('slide--hidden', !expanded);
            } else {
                $container.cssSlideToggle(expanded);
            }

            // Focus on the expanded section
            if (expanded) {
                var focus = document.activeElement;
                if (expanded && !noTransition && container[0] !== focus && !$.contains(focus, container[0])) {
                    $container.focus();
                }
            }

            if (!noTransition) {
                scrollTo($this);
            }

            // Allows other things based on the window height to resize
            $w.trigger('resize');

        }

        $this
            .on('click', '[data-action]', function (e) {

                if (e.isDefaultPrevented()) {
                    return;
                }
                e.preventDefault();
                toggle(this.getAttribute('data-action') === 'close' ? false : undefined );
            });

        // Heading keyboard navigation
        $heading
            .on('keyup', function (e) {
                if (e.which === 32 || e.which===13 ) {
                    $heading.click();
                }
            });

        // Check if the hash is in this section
        function openHash() {
            if (location.hash && $this.find(location.hash).length) {
                toggle(true,true);
                return true;
            }
        }

        // If someone links to something in this section expand to show it
        $w.on('hashchange', function () {
            if (openHash()) {
                refocusHash();
            }
        });

        // If we are in the expanded area than expand
        if (openHash($this)) {
            // Need to refocus as the opening and closing can confuse the browser
            refocus = true;
            return;
        }

        // Otherwise collapse this section
        toggle(false, true);

        $('.js-toggle-all-reveables').on('click', function() {
            expanded = !expanded;
        });
    }

    // Fix old revealables
    $('section.js-' + namespace).addClass(namespace);
    // Setup
    $('section.' + namespace).each(setup);

    // Refocus if required
    if (refocus) {
        refocusHash();
    }

    function init() {
        // Fix old revealables
        $('section.js-' + namespace).addClass(namespace);
        // Setup
        $('section.' + namespace).each(setup);
    }

    return {
        setup:init
    }
})(jQuery);

/**
 *  The email this page form
 *
 *  The template for this form is included on the page in <script type="text/x-template">
 *
 *  All elements of this theoertically translatable into Welsh.  This is why more of the template
 *  isn't included in this script.
 *
 *  @required jQuery
 *  @requires cab.templater
 *  @requires cab.translate
 *
 */
$(function ($) {

    var encode = encodeURIComponent;

    var emailEndPoint = '/api/session/email-page';
    var csrfEndPoint = '/api/session/email-page/csrf';
    var templateId = '#template-email-page';
    var error403Template = '<p class="highlight--error">Sorry there has been an error. Please ensure you have cookies turned on in your browser.</p>';
    var errorTemplate = '<p class="highlight--error">Sorry something went wrong sending your message. Please try again in a few minutes.</p>';
    var thankYouTemplate = '<p>{message}</p><p><button type="button" data-action="close">{close}</button>';
    
    $('.js-email-page').on('click', function (e) {
        e.preventDefault();

        var $template = $(templateId);

        var dialog = $.Dialog({
            title: $template.data('title'),
            content: cab.templater($template.html(), { mailto: getEmailLink($template) }),
            className: "dialog--simple",
            destoryOnClose: true
        })
            .on('submit', 'form', function (e) {
                e.preventDefault();
                var $form = $(this);

                // Prevent multiple submissions
                $form.find('button').prop('disabled', true).addClass('button--submitting');

                // Get our CSRF token
                $.ajax({
                    url: csrfEndPoint
                })
                .then(function (csrf) {

                    // Submit the form with the CSRF token
                    var formData = ($form).serialize();
                    formData += '&csrf=' + encodeURIComponent(csrf);

                    return $.ajax({
                        url: emailEndPoint,
                        method: 'PUT',
                        data: formData,
                        dataType: 'json'
                    });

                })
                .then(
                    function () {
                        dialog.$content.html(cab.templater(thankYouTemplate, { message: $template.data('thankYou'), close: $template.data('close') }));
                    },
                    function (req) {
                        if (req.responseJSON && req.status === 400) {
                            invalid($form, req.responseJSON.ModelState);
                            $form.find('button').prop('disabled', false).removeClass('button--submitting');
                            return;
                        }
                        var errorMessage = errorTemplate;
                        if (req.status === 403) {
                            errorMessage = error403Template;
                        }
                        dialog.$content.html(errorMessage);

                    }
                );
            })
            .on('change', '#email-page-email', function () {
                this.value = this.value.trim();
            });

        // Notify the user of updates to the dialog content
        dialog.$dialog.attr('aria-live', 'polite');

        dialog.showModal();        
        
    });

    /**
     *  Genearate a mailto link to email this page
     */
    function getEmailLink($template) {

        // <title> has " - Citizens Advice" at the end.  The real title is in the meta value
        var encodedTitle = encode($('meta[name="cab-title"]').attr('content') || document.title);
        return 'mailto:?subject=' + encode($template.data('subject') + ': ') + encodedTitle
            + '&amp;body='
            + encode( $template.data('introduction') ) + '%0A%0A' + encodedTitle + '%0A' + encode( $('meta[name="description"]').attr('content') || '') + "%0A" + location.href;
    }

    /**
     *  If the submission is invalid, add validation errors to the form
     *  These come from the WebAPI validation model on the server.
     */
    function invalid($form, modelState) {
        var name, $label, $error;

        $form.find('.js-error').css('display', 'block');

        // Hide existing errors
        $form.find('.form__invalid').hide();
        for (var key in modelState) {
            // For some reason the model keys start with  "submitted."
            name = key.replace(/^[^.]*\./, '');
            // Find an existing error element, or create a new one
            $label = $form.find('label[for="' + $form[0].elements[name].id + '"]');
            $error = $label.find('.form__invalid');
            if ( !$error.length ) {
                $error = $('<span class="form__invalid"/>').appendTo($label);
            }
            $error.html(modelState[key].join(', ')).show();
        }
    }
});

/**
 *	Run any deferred scripts that were added before jQuery was loaded
 *  See head.js
 *  @author Daniel Lewis
 */
(function (jQuery, window) {
    var fake$;

    // Get the original $ back
    jQuery.noConflict();

    fake$ = window.$;

    if (fake$ && (q = fake$.q) && q.length) {

        jQuery.each(q, function (i, fn) {
            jQuery(fn);
        });

    }

    // Restore jQuery to $
    window.$ = jQuery;

}(jQuery, window));
/**
 *  Open and close the extent picker dialog box
 *
 *  @requires jQuery.dialog
 */
$(function ($) {

    var dialog;
    var $dialog = $('#js-extent-dialog');

    if ($('html').hasClass('offline')) {
        return;
    }

    $('.js-toggle-extent-dialog')
        .attr( 'role', 'button' )
        .on('click', function (e) {

            e.preventDefault();

            if (!dialog) {

                // Create the dialog only if it doesn't already exist
                dialog = new $.Dialog({
                        title: $dialog.attr('data-title'),
                        content: $dialog.text(),
                        className: 'dialog--simple dialog--extent-picker',
                        role: 'alertdialog',
                    })
                    .on('close', function () {
                        // If closed, assume they have accepted the current extent
                        // and set the cookie
                        var language = $('html').attr('lang');
                        document.cookie = 'CABExtent=' + language + '; path=/';
                    });
            }

            dialog.showModal();
        });
});

/**
 *  Allows the second level of a legacy AdviserNet page to be open and closed.
 */
jQuery(function ($) {

    var className = 'js-collapse-toc';
    var openLabel = 'Hide';
    var closeLabel = 'Show';
    var openAllLabel = '<span class="toc-legacy__mono">+</span> Open all';
    var closeAllLabel = '<span class="toc-legacy__mono">-</span> Close all';
    // Used to generate unique ids
    var count = 0;

    // Add to all tables of contents on a page with .js-collapse-toc
    $('.' + 'js-collapse-toc').each(function () {
        makeCollaspsable($(this));
    });

    // Open or close an li
    function toogle($li, open) {
        $li
            .children('button')
            .attr('data-action', open ? 'close' : 'open')
            .attr('title', open ? openLabel : closeLabel)
            .attr('aria-label', open ? openLabel : closeLabel)
            .text(open ? '-' : '+')
            .end()
            .children('ul').attr('aria-expanded', !!open);
    }

    function makeCollaspsable($ul) {

        // Add an open all button above the TOC
        var $openAll = $('<button class="no-print" type="button" data-action="open">' + openAllLabel + '</button>')
            .on('click', function () {
                var $this = $(this);
                var action = $(this).attr('data-action');
                $ul.children('li').trigger(action);
                $this
                    .attr('data-action', action === 'open' ? 'close' : 'open')
                    .html(action === 'open' ? closeAllLabel : openAllLabel);
            })
            .insertBefore($ul);

        $ul
            .removeClass(className)
            .addClass('toc-legacy--expandable')
            .on('open', 'li', function () {
                toogle($(this), true);
            })
            .on('close', 'li', function () {
                toogle($(this), false);
            })
            .on('click', 'button[data-action=open]', function () {
                $(this).parent().trigger('open');
            })
            .on('click', 'button[data-action=close]', function () {
                $(this).parent().trigger('close');
            })
            .find('ul')
            .each(function () {
                var id = className + '-' + (count++);
                $(this)
                    .prop('id', id)
                    .attr('aria-expanded', 'false')
                    .parent()
                    .prepend('<button type="button" class="toc-legacy__button no-print" title="' + closeLabel + '" aria-label="' + closeLabel + '" data-action="open" aria-controls="' + id + '">+</button>');
            })

    }



});
/**
 *  Expand and contract the section navigation on a mobile
 *  See https://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions
 */
jQuery(function ($) {

    // Just do this to the first one on the page
    var $nav = $('.js-section-nav').eq(0);
    
    if (!$nav.length) {
        return;
    }

    var $heading = $nav.find('.section-nav__heading');
    var $label = $('<span class="screenreader"/>');
    var $link = $('<a href="#!"/>')
        .append($label)
        .append(document.createTextNode(' ' + $heading.text()));
    var $ul = $('#section-nav-list');

    $heading
        .empty()
        .append($link);
        

    // The current state
    var expanded = false;

    $link
        .attr('aria-controls', 'section-nav-list')
        .on('click', function (e) {
            e.preventDefault();
            toggle();
        });
    
    /**
     *  Toggle between open and closed
     *  @param {Boolean} [state] If set force a specific state, otherwise toggle
     */
    function toggle(state) {
        var newState = state === undefined ? !expanded : state;
        $link.attr('aria-expanded', String(newState));
        $label.text(newState ? 'Hide' : 'Show');
        $nav.toggleClass('expanded', newState);
        expanded = newState;
        if (newState) {
            $ul.focus();
        }
    }

    // Set inital state to closed
    toggle(false);

});
/**
 * Search results position - tracks the position of a searched term result links
 * clicked and return that position of that link to google analytics
 * dimensions and metrics
 * 
 * Author: @Citizens Advice
 */
(function ($) {

    var $searchResults = $('.search-results');
    var startPageCount = $searchResults.data('startwith'); // get pagination start count



    /* tracks and returns the position of the links clicked */
    function trackSearchClicks() {

        // check if search results exists
        if ($searchResults.length === 0) {
            return;
        }

        //checks if start page count attribute exists
        if (startPageCount === undefined) {
            return;
        }

        $searchResults.on('click', 'a', function (e) {
            var $link = $(e.target),
                position,
                href,
                startAt;

            var getStartAtValue = function () {

                var queryString = window.location.search, // search querystring of url
                    startAtRegex = /(&|\?)page=([0-9]+)(&|$)/,
                    startAt = 0,
                    matches;

                matches = queryString.match(startAtRegex); // match regex with querystring

                if (matches !== null) {
                    //startAt = parseInt(matches[2], 10);
                    startAt = startPageCount
                }

                return startAt;
            };

            startAt = getStartAtValue();
            position = $link.closest('li').index() + startAt + 1;
            callOnNextPage('searchPosition', position)
        });
    }

    function callOnNextPage(label, index) {
        sessionStorage.setItem(label, index) // create session storage of search position number
    }

    trackSearchClicks();

})(jQuery);

$(".email-signup-link").on("click", function () {
    $(".email--signup").toggleClass("hide");
});

$("#brexit-form").submit(function (event) {
    $(".email--signup").addClass("hide");
    $(".email--update").removeClass("hide");
});