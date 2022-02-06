"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6504],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6538:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"JWT hooks and CSRF protection"},s=void 0,p={unversionedId:"upgrade-to-v2/jwt-and-csrf",id:"upgrade-to-v2/jwt-and-csrf",title:"JWT hooks and CSRF protection",description:"Configuration",source:"@site/docs/upgrade-to-v2/jwt-and-csrf.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/jwt-and-csrf",permalink:"/docs/upgrade-to-v2/jwt-and-csrf",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/jwt-and-csrf.md",tags:[],version:"current",frontMatter:{title:"JWT hooks and CSRF protection"}},l=[{value:"Configuration",id:"configuration",children:[],level:2},{value:"CSRF protection",id:"csrf-protection",children:[],level:2},{value:"New features",id:"new-features",children:[{value:"JWT cookies",id:"jwt-cookies",children:[],level:3},{value:"Read secrets and private/public keys",id:"read-secrets-and-privatepublic-keys",children:[],level:3}],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.jwt.secretOrPublicKey")," has been removed. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.jwt.secret")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.jwt.publicKey")," instead."),(0,a.kt)("p",null,"The configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.jwt.cookieName")," has been renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.jwt.cookie.name"),"."),(0,a.kt)("p",null,"See also ",(0,a.kt)("a",{parentName:"p",href:"/docs/upgrade-to-v2/config-system#environment-variables"},"this"),"."),(0,a.kt)("h2",{id:"csrf-protection"},"CSRF protection"),(0,a.kt)("p",null,"The package ",(0,a.kt)("inlineCode",{parentName:"p"},"@foal/csrf")," has been removed. In version 2, the CSRF protection is directly included in the JWT hooks and can be enabled with ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.jwt.csrf.enabled")," (the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.csrf.enabled")," has been removed)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm uninstall @foal/csrf\n")),(0,a.kt)("p",null,"There is no need anymore to provide a CSRF secret."),(0,a.kt)("p",null,"There is no need anymore to set manually the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"sameSite")," cookie attribute in the config."),(0,a.kt)("p",null,"There is no need anymore to specify an expire time for the CSRF cookie. "),(0,a.kt)("p",null,"All of this is now managed by the framework."),(0,a.kt)("p",null,"The best way to use the new CSRF protection is to go directly to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/security/csrf-protection"},"CSRF page"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning:")," Using the below functions ",(0,a.kt)("inlineCode",{parentName:"p"},"setAuthCookie")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"removeAuthCookie")," is required in order to provide CSRF protection."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning:")," In order to ",(0,a.kt)("em",{parentName:"p"},"work better")," with some popular frontend frameworks, the default name of the CSRF cookie has been changed from ",(0,a.kt)("inlineCode",{parentName:"p"},"csrfToken")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN"),"."),(0,a.kt)("h2",{id:"new-features"},"New features"),(0,a.kt)("p",null,"New features have been added to reduce the amount of code needed to use JWT as well as to make it easier to use. You can consult the ",(0,a.kt)("a",{parentName:"p",href:"/docs/authentication-and-access-control/quick-start"},"Quick start page")," to see how to use these features."),(0,a.kt)("h3",{id:"jwt-cookies"},"JWT cookies"),(0,a.kt)("p",null,"The JWT package has two new functions ",(0,a.kt)("inlineCode",{parentName:"p"},"setAuthCookie")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"removeAuthCookie")," to manage JWT with cookies."),(0,a.kt)("h3",{id:"read-secrets-and-privatepublic-keys"},"Read secrets and private/public keys"),(0,a.kt)("p",null,"Secrets and private/public keys can be read from the configuration with the two new functions ",(0,a.kt)("inlineCode",{parentName:"p"},"getSecretOrPrivateKey")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getSecretOrPublicKey"),". "),(0,a.kt)("p",null,"Encoded secrets with the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.jwt.secretEncoding")," are supported."))}d.isMDXComponent=!0}}]);