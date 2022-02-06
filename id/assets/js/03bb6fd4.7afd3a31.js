"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1707],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6317:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],s={title:"XSS Protection"},a=void 0,p={unversionedId:"security/xss-protection",id:"version-1.x/security/xss-protection",title:"XSS Protection",description:"FoalTS provides some utils to protect you against XSS attacks.",source:"@site/versioned_docs/version-1.x/security/xss-protection.md",sourceDirName:"security",slug:"/security/xss-protection",permalink:"/id/docs/1.x/security/xss-protection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/security/xss-protection.md",tags:[],version:"1.x",frontMatter:{title:"XSS Protection"},sidebar:"someSidebar",previous:{title:"CSRF Protection",permalink:"/id/docs/1.x/security/csrf-protection"},next:{title:"Templates (SSR)",permalink:"/id/docs/1.x/utilities/templating"}},l=[{value:"<code>escape(str: string): string</code>",id:"escapestr-string-string",children:[],level:2},{value:"<code>escapeProp(object: object, propName: string): void</code>",id:"escapepropobject-object-propname-string-void",children:[],level:2}],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FoalTS provides some utils to protect you against XSS attacks."),(0,i.kt)("h2",{id:"escapestr-string-string"},(0,i.kt)("inlineCode",{parentName:"h2"},"escape(str: string): string")),(0,i.kt)("p",null,"Escapes HTML and returns a new string."),(0,i.kt)("h2",{id:"escapepropobject-object-propname-string-void"},(0,i.kt)("inlineCode",{parentName:"h2"},"escapeProp(object: object, propName: string): void")),(0,i.kt)("p",null,"Escapes HTML in the given property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"escapeProp(myObject, 'foobar')\n")),(0,i.kt)("p",null,"is equivalent to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"myObject.foobar = escape(myObject.foobar)\n")))}d.isMDXComponent=!0}}]);