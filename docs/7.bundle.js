(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{229:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(21),o=n(73),c=n(8),u=n(23),l=n(70);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(){var e=s(Object(r.useState)(""),2),t=e[0],n=e[1],f=s(Object(r.useState)(""),2),m=f[0],p=f[1],d=Object(i.c)(),v=Object(i.d)(l.a);return a.a.createElement("div",{className:"page page--gray page--login"},a.a.createElement(o.a,null),a.a.createElement("main",{className:"page__main page__main--login"},a.a.createElement("div",{className:"page__login-container container"},a.a.createElement("section",{className:"login"},a.a.createElement("h1",{className:"login__title"},"Sign in"),a.a.createElement("form",{className:"login__form form",action:"#",method:"post",onSubmit:function(e){e.preventDefault(),d(u.b.authorize({email:t,password:m}))}},a.a.createElement("div",{className:"login__input-wrapper form__input-wrapper"},a.a.createElement("label",{className:"visually-hidden"},"E-mail"),a.a.createElement("input",{className:"login__input form__input",type:"email",name:"email",placeholder:"Email",required:"",autoComplete:"username",value:t,onChange:function(e){n(e.target.value)}})),a.a.createElement("div",{className:"login__input-wrapper form__input-wrapper"},a.a.createElement("label",{className:"visually-hidden"},"Password"),a.a.createElement("input",{className:"login__input form__input",type:"password",name:"password",placeholder:"Password",onChange:function(e){p(e.target.value)},required:"",autoComplete:"current-password",minLength:c.a.MIN_PASSWORD_LENGTH,value:m})),a.a.createElement("button",{className:"login__submit form__submit button",type:"submit"},"Sign in"))),a.a.createElement("section",{className:"locations locations--login locations--current"},a.a.createElement("div",{className:"locations__item"},a.a.createElement("a",{className:"locations__item-link",href:"#"},a.a.createElement("span",null,v)))))))};t.default=m},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(68),a=n(2),i=n(0),o=n.n(i),c=n(7),u=(n(11),n(1)),l=n(5),s=n(6);o.a.Component;o.a.Component;var f=function(e,t){return"function"==typeof e?e(t):e},m=function(e,t){return"string"==typeof e?Object(c.c)(e,null,null,t):e},p=function(e){return e},d=o.a.forwardRef;void 0===d&&(d=p);var v=d((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,i=Object(l.a)(e,["innerRef","navigate","onClick"]),c=i.target,s=Object(u.a)({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=p!==d&&t||n,o.a.createElement("a",s)}));var g=d((function(e,t){var n=e.component,a=void 0===n?v:n,i=e.replace,c=e.to,g=e.innerRef,y=Object(l.a)(e,["component","replace","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var n=e.history,r=m(f(c,e.location),e.location),l=r?n.createHref(r):"",v=Object(u.a)({},y,{href:l,navigate:function(){var t=f(c,e.location);(i?n.replace:n.push)(t)}});return p!==d?v.ref=t||g:v.innerRef=g,o.a.createElement(a,v)}))})),y=function(e){return e},h=o.a.forwardRef;void 0===h&&(h=y);h((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,i=e.activeClassName,c=void 0===i?"active":i,p=e.activeStyle,d=e.className,v=e.exact,_=e.isActive,b=e.location,E=e.sensitive,N=e.strict,w=e.style,j=e.to,O=e.innerRef,A=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var n=b||e.location,i=m(f(j,n),n),l=i.pathname,S=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=S?Object(r.f)(n.pathname,{path:S,exact:v,sensitive:E,strict:N}):null,R=!!(_?_(C,n):C),k=R?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(d,c):d,I=R?Object(u.a)({},w,{},p):w,x=Object(u.a)({"aria-current":R&&a||null,className:k,style:I,to:i},A);return y!==h?x.ref=t||O:x.innerRef=O,o.a.createElement(g,x)}))}))},70:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return p}));var r=n(74),a=n(22);function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e){return e.data.offers},u=function(e){return e.data.nearbyOffers},l=function(e){return e.data.currentCity},s=Object(r.a)(c,(function(e){return i(new Set(e.map((function(e){return e.city.name}))))})),f=Object(r.a)(l,c,(function(e){return e.data.sortType}),(function(e,t,n){var r=t.filter((function(t){return t.city.name===e}));switch(n){case"popular":return r;case"to-high":return r.slice().sort((function(e,t){return e.price-t.price}));case"to-low":return r.slice().sort((function(e,t){return t.price-e.price}));case"top-rated":return r.slice().sort((function(e,t){return t.rating-e.rating}))}})),m=Object(r.a)(c,(function(e,t){return c(e).find((function(e){return e.id==t}))}),(function(e,t){return e.find((function(e){return e.id===t.id}))})),p=Object(r.a)((function(e){return e.data.currentOfferId}),c,(function(e,t){var n=Object(a.a)(e,t)||{};return Object.keys(n).length?n.place.coords:[0,0]}))},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return e.user.isAuthorizationRequired},a=function(e){return e.user.loginData}},73:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(68),o=n(39),c=n(21),u=n(8),l=n(72),s=n(23),f=function(){var e=Object(c.d)(l.b),t=Object(c.d)(l.a),n=Object(c.c)(),r=Object(i.g)(),f=t?a.a.createElement("span",{className:"header__login",onClick:function(){n(s.a.requiredAuthorization(!0)),r.push(u.a.LOGIN_PATH)},tabIndex:0,onKeyPress:function(e){e.key===u.b.ENTER&&(n(s.a.requiredAuthorization(!0)),r.push("/login"))}},"Sign in"):a.a.createElement("span",{className:"header__user-name user__name"},e.email);return a.a.createElement("header",{className:"header"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"header__wrapper"},a.a.createElement("div",{className:"header__left"},a.a.createElement(o.a,{to:"/",className:"header__logo-link header__logo-link--active"},a.a.createElement("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"}))),a.a.createElement("nav",{className:"header__nav"},a.a.createElement("ul",{className:"header__nav-list"},a.a.createElement("li",{className:"header__nav-item user"},a.a.createElement(o.a,{to:t?"/login":"/favorites",className:"header__nav-link header__nav-link--profile"},a.a.createElement("div",{className:"header__avatar-wrapper user__avatar-wrapper",style:e.avatarUrl&&{backgroundImage:"url(".concat(u.a.BASE_URL).concat(e.avatarUrl,")")}}),f)))))))};t.a=f},74:function(e,t,n){"use strict";function r(e,t){return e===t}function a(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}n.d(t,"a",(function(){return o}));var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,c=r.pop(),u=i(r),l=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(n)),s=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return l.apply(null,e)}));return s.resultFunc=c,s.dependencies=u,s.recomputations=function(){return o},s.resetRecomputations=function(){return o=0},s}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,i=null;return function(){return a(t,n,arguments)||(i=e.apply(null,arguments)),n=arguments,i}}))}}]);