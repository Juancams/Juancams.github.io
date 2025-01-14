/*! For license information please see e50e9c162871c1d91fba5ce567a5656e16dc6783-ea2fd932a8c8d332a164.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_prologue=self.webpackChunkgatsby_starter_prologue||[]).push([[569],{9435:function(e){e.exports={siteTitle:"Juan Carlos Manzanares Serrano",siteUrl:"https://Juancams.github.io/",manifestName:"Juancams",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"",authorName:"Juan Carlos Manzanares Serrano",heading:"Coffee with milk is like coffee but with milk",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/Juancams"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/Juancams98"},{icon:"fa-linkedin",name:"Linkedin",url:"https://www.linkedin.com/in/juancams/"},{icon:"fa-envelope-o",name:"Email",url:"mailto:jc.manzanares.serrano@gmail.com"}]}},9315:function(e,t,r){"use strict";var n=r(9994),o=r(3696),i=r(2025),a=r(5581);let l=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={isPreloaded:!0},r}(0,n.A)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.timeoutId=setTimeout((()=>{this.setState({isPreloaded:!1})}),100)},r.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},r.render=function(){const{children:e}=this.props,{isPreloaded:t}=this.state;return o.createElement(a.StaticQuery,{query:"3649515864",render:r=>o.createElement(o.Fragment,null,o.createElement(i.Ay,{title:r.site.siteMetadata.title,meta:[{name:"description",content:"Eventually"},{name:"keywords",content:"site, web"}]},o.createElement("html",{lang:"en"})),o.createElement("div",{className:t?"main-body is-preload":"main-body"},e))})},t}(o.Component);t.A=l},6184:function(e,t,r){"use strict";var n=r(9994),o=r(1200),i=r.n(o),a=r(3696);const l=e=>e.children;let s=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(t),t}(0,n.A)(t,e);var r=t.prototype;return r.componentDidMount=function(){i().polyfill()},r.handleClick=function(e){e.preventDefault();let t=0,r=!0;const{type:n,element:o,offset:i,timeout:a}=this.props;if(n&&o)switch(n){case"class":t=document.getElementsByClassName(o)[0],r=!!t;break;case"id":t=document.getElementById(o),r=!!t}r?this.scrollTo(t,i,a):console.log(`Element not found: ${o}`)},r.scrollTo=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=null);const n=e?e.getBoundingClientRect().top+window.pageYOffset:0;r?setTimeout((()=>{window.scroll({top:n+t,left:0,behavior:"smooth"})}),r):window.scroll({top:n+t,left:0,behavior:"smooth"})},r.render=function(){return a.createElement(l,null,"object"==typeof this.props.children?a.cloneElement(this.props.children,{onClick:this.handleClick}):a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(a.Component);t.A=s},6731:function(e,t,r){"use strict";r.d(t,{A:function(){return T}});var n=r(3696);function o(e){let{socialLinks:t=[]}=e;return n.createElement("div",{className:"bottom"},n.createElement("ul",{className:"icons"},t.map((e=>{const{icon:t,name:r,url:o}=e;return n.createElement("li",{key:o},n.createElement("a",{href:o,className:`icon ${t}`},n.createElement("span",{className:"label"},r)))}))))}var i=r(5581);function a(e){let{title:t,heading:r,avatar:o}=e;return n.createElement("div",{id:"logo"},n.createElement(i.Link,{to:"/"},n.createElement("span",{className:"image avatar48"},n.createElement("img",{height:"128px",src:o,alt:""})),n.createElement("h1",{id:"title"},t),n.createElement("p",null,r)))}var l=r(1005),s=r(6184);function u(e){let{sections:t=[]}=e;return n.createElement("nav",{id:"nav"},n.createElement("ul",null,n.createElement(l.A,{items:t.map((e=>e.id)),currentClassName:"active",offset:-300},t.map((e=>n.createElement("li",{key:e.id},n.createElement(s.A,{type:"id",element:e.id},n.createElement("a",{href:`#${e.id}`,id:"top-link"},n.createElement("span",{className:`icon ${e.icon}`},e.name)))))))))}function c(e){let{title:t,onMenuClick:r=()=>{}}=e;return n.createElement("div",{id:"headerToggle"},n.createElement("a",{href:"/#",className:"toggle",onClick:e=>{e.preventDefault(),r()}}," "))}var f=r(9435),p=r.n(f);const d=r(2783);function T(e){let{sections:t=[]}=e;const{0:r,1:i}=(0,n.useState)(!1);return n.createElement("div",{className:""+(r?"header-visible":" ")},n.createElement(c,{title:p().authorName,onMenuClick:()=>i(!r)}),n.createElement("div",{id:"header"},n.createElement("div",{className:"top"},n.createElement(a,{avatar:d,title:p().authorName,heading:p().heading}),n.createElement(u,{sections:t})),n.createElement(o,{socialLinks:p().socialLinks})))}},7383:function(e){"use strict";var t=Array.isArray,r=Object.keys,n=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){var l,s,u,c=t(e),f=t(a);if(c&&f){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(c!=f)return!1;var p=e instanceof Date,d=a instanceof Date;if(p!=d)return!1;if(p&&d)return e.getTime()==a.getTime();var T=e instanceof RegExp,m=a instanceof RegExp;if(T!=m)return!1;if(T&&m)return e.toString()==a.toString();var h=r(e);if((s=h.length)!==r(a).length)return!1;for(l=s;0!=l--;)if(!n.call(a,h[l]))return!1;if(o&&e instanceof Element&&a instanceof Element)return e===a;for(l=s;0!=l--;)if(!("_owner"===(u=h[l])&&e.$$typeof||i(e[u],a[u])))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},2025:function(e,t,r){var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=f(r(3696)),a=f(r(2688)),l=f(r(9406)),s=f(r(7383)),u=r(7136),c=r(9996);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var d,T,m,h=(0,l.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),E=(d=h,m=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case c.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,i=e.newProps,a=e.newChildProps,l=e.nestedChildren;switch(o.type){case c.TAG_NAMES.TITLE:return n({},i,((t={})[o.type]=l,t.titleAttributes=n({},a),t));case c.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case c.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var o;r=n({},r,((o={})[t]=e[t],o))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),l=(0,u.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(e,i),e.type){case c.TAG_NAMES.LINK:case c.TAG_NAMES.META:case c.TAG_NAMES.NOSCRIPT:case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=p(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=d.peek,T.rewind=function(){var e=d.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);E.renderStatic=E.rewind,t.Ay=E},9996:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},7136:function(e,t,r){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=s(r(3696)),a=s(r(8304)),l=r(9996);function s(e){return e&&e.__esModule?e:{default:e}}var u,c=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,l.TAG_NAMES.TITLE),r=h(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=h(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},p=function(e){return h(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},m=function(e,t,r){var o={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],u=s.toLowerCase();-1===t.indexOf(u)||r===l.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(s)||s!==l.TAG_PROPERTIES.INNER_HTML&&s!==l.TAG_PROPERTIES.CSS_TEXT&&s!==l.TAG_PROPERTIES.ITEM_PROP||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][c]&&(n[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),s=0;s<i.length;s++){var u=i[s],c=(0,a.default)({},o[u],n[u]);o[u]=c}return e}),[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},E=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){E(e)}),0)}),y=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:r.g.requestAnimationFrame||E,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:r.g.cancelAnimationFrame||y,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,_=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;w(l.TAG_NAMES.BODY,n),w(l.TAG_NAMES.HTML,o),P(p,d);var T={baseTag:O(l.TAG_NAMES.BASE,r),linkTags:O(l.TAG_NAMES.LINK,i),metaTags:O(l.TAG_NAMES.META,a),noscriptTags:O(l.TAG_NAMES.NOSCRIPT,s),scriptTags:O(l.TAG_NAMES.SCRIPT,c),styleTags:O(l.TAG_NAMES.STYLE,f)},m={},h={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=T[e].oldTags)})),t&&t(),u(e,m,h)},g=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),w(l.TAG_NAMES.TITLE,t)},w=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(l.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var u=a[s],c=t[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute(l.HELMET_ATTRIBUTE):r.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},O=function(e,t){var r=document.head||document.querySelector(l.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===l.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===l.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},M=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.REACT_TAG_MAP[r]||r]=e[r],t}),t)},R=function(e,t,r){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[l.HELMET_ATTRIBUTE]=!0,o=C(r,n),[i.default.createElement(l.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=M(r),i=g(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+c(i,n)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+c(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[l.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=l.REACT_TAG_MAP[e]||e;if(r===l.TAG_PROPERTIES.INNER_HTML||r===l.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+c(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){b&&A(b),e.defer?b=v((function(){_(e,(function(){b=null}))})):(_(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.scriptTags,c=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:R(l.TAG_NAMES.BASE,t,n),bodyAttributes:R(l.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:R(l.ATTRIBUTE_NAMES.HTML,o,n),link:R(l.TAG_NAMES.LINK,i,n),meta:R(l.TAG_NAMES.META,a,n),noscript:R(l.TAG_NAMES.NOSCRIPT,s,n),script:R(l.TAG_NAMES.SCRIPT,u,n),style:R(l.TAG_NAMES.STYLE,c,n),title:R(l.TAG_NAMES.TITLE,{title:p,titleAttributes:d},n)}},t.reducePropsToState=function(e){return{baseTag:T([l.TAG_PROPERTIES.HREF],e),bodyAttributes:d(l.ATTRIBUTE_NAMES.BODY,e),defer:h(e,l.HELMET_PROPS.DEFER),encode:h(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(l.ATTRIBUTE_NAMES.HTML,e),linkTags:m(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:m(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=v,t.warn=S},1005:function(e,t,r){"use strict";var n=r(6784);t.A=void 0;var o=n(r(5923)),i=n(r(5707)),a=n(r(906)),l=n(r(9805)),s=n(r(5118)),u=n(r(9402)),c=n(r(6417)),f=n(r(989)),p=n(r(7861)),d=n(r(2688)),T=n(r(3696)),m=n(r(4452)),h=n(r(4782));var E=function(e){function t(e){var r;return(0,l.default)(this,t),(r=(0,s.default)(this,(0,u.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},r._handleSpy=r._handleSpy.bind((0,c.default)(r)),r}return(0,p.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var r=[],n=0,o=e.length;n<o;n++)r[n]=t;return r}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],r=[],n=[],o=e||this.state.targetItems,i=!1,l=0,s=o.length;l<s;l++){var u=o[l],c=!i&&this._isInView(u);c?(i=!0,t.push(u)):r.push(u);var f=l===s-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(u)&&!c&&f&&p&&(r.pop(),r.push.apply(r,(0,a.default)(t)),t=[u],n=this._fillArray(n,!1),c=!0),n.push(c)}return{inView:t,outView:r,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,r=this.props,n=r.rootEl,o=r.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var i=e.getBoundingClientRect(),a=n?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,s=l+a,u=n?i.top+l-t.top+o:i.top+l+o,c=u+e.offsetHeight;return u<s&&c>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),r=t.scrollTop,n=t.scrollHeight;return r+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,r=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:r.viewStatusList,isScrolledPast:r.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,r;(t=this.state.inViewState,r=e,t.length===r.length&&t.every((function(e,t){return e===r[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,h.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,r=this.props,n=r.children,a=r.className,l=r.scrolledPastClassName,s=r.style,u=0,c=T.default.Children.map(n,(function(t,r){var n;if(!t)return null;var a=t.type,s=l&&e.state.isScrolledPast[r],c=(0,m.default)((n={},(0,i.default)(n,"".concat(t.props.className),t.props.className),(0,i.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[r]),(0,i.default)(n,"".concat(e.props.scrolledPastClassName),s),n));return T.default.createElement(a,(0,o.default)({},t.props,{className:c,key:u++}),t.props.children)})),f=(0,m.default)((0,i.default)({},"".concat(a),a));return T.default.createElement(t,{className:f,style:s},c)}}]),t}(T.default.Component);t.A=E},4782:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=+new Date;!!t&&o<t+n?(clearTimeout(r),r=setTimeout((function(){t=o,e()}),n)):(t=o,e())}};t.default=r},9406:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r(3696),i=n(o),a=n(r(5317));function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function f(){u=e(c.map((function(e){return e.props}))),p.canUseDOM?t(u):r&&(u=r(u))}var p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var l=o.prototype;return l.shouldComponentUpdate=function(e){return!a(e,this.props)},l.componentWillMount=function(){c.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),f()},l.render=function(){return i.createElement(n,this.props)},o}(o.Component);return l(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),l(p,"canUseDOM",s),p}}},5317:function(e){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],f=t[u];if(!1===(o=r?r.call(n,c,f,u):void 0)||void 0===o&&c!==f)return!1}return!0}},1200:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var r,n=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var r=function(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}(this),n=r.getBoundingClientRect(),i=this.getBoundingClientRect();r!==t.body?(d.call(this,r,r.scrollLeft+i.left-n.left,r.scrollTop+i.top-n.top),"fixed"!==e.getComputedStyle(r).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function c(t,r){var n=e.getComputedStyle(t,null)["overflow"+r];return"auto"===n||"scroll"===n}function f(e){var t=u(e,"Y")&&c(e,"Y"),r=u(e,"X")&&c(e,"X");return t||r}function p(t){var r,n,o,a,l=(i()-t.startTime)/468;a=l=l>1?1:l,r=.5*(1-Math.cos(Math.PI*a)),n=t.startX+(t.x-t.startX)*r,o=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,n,o),n===t.x&&o===t.y||e.requestAnimationFrame(p.bind(e,t))}function d(r,n,a){var s,u,c,f,d=i();r===t.body?(s=e,u=e.scrollX||e.pageXOffset,c=e.scrollY||e.pageYOffset,f=o.scroll):(s=r,u=r.scrollLeft,c=r.scrollTop,f=l),p({scrollable:s,method:f,startTime:d,startX:u,startY:c,x:n,y:a})}}}}()},2783:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/avatar-df4ed975a61b0527c84d3725f1e76bb0.png"},8113:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},1819:function(e,t,r){var n=r(8113);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9805:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},989:function(e,t,r){var n=r(5498);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},5707:function(e,t,r){var n=r(5498);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5923:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9402:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7861:function(e,t,r){var n=r(1270);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},365:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8687:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},5118:function(e,t,r){var n=r(564).default,o=r(6417);e.exports=function(e,t){if(t&&("object"==n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},906:function(e,t,r){var n=r(1819),o=r(365),i=r(7744),a=r(8687);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},1327:function(e,t,r){var n=r(564).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},5498:function(e,t,r){var n=r(564).default,o=r(1327);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},564:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7744:function(e,t,r){var n=r(8113);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},4452:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-ea2fd932a8c8d332a164.js.map