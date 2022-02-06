"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1649],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),p=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(t),d=r,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||c;return t?o.createElement(m,a(a({ref:n},s),{},{components:t})):o.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9458:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var o=t(7462),r=t(3366),c=(t(7294),t(3905)),a=["components"],i={title:"404 Page"},u=void 0,p={unversionedId:"cookbook/not-found-page",id:"version-1.x/cookbook/not-found-page",title:"404 Page",description:"Here's a way to implement custom 404 pages.",source:"@site/versioned_docs/version-1.x/cookbook/not-found-page.md",sourceDirName:"cookbook",slug:"/cookbook/not-found-page",permalink:"/docs/1.x/cookbook/not-found-page",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/not-found-page.md",tags:[],version:"1.x",frontMatter:{title:"404 Page"},sidebar:"someSidebar",previous:{title:"Scheduling Jobs",permalink:"/docs/1.x/cookbook/scheduling-jobs"},next:{title:"Request Body Size",permalink:"/docs/1.x/cookbook/request-body-size"}},s=[],l={toc:s};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Here's a way to implement custom 404 pages."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"class ViewController {\n  @Get('/home')\n  home() {\n    return new HttpResponseOK('You are on the home page!');\n  }\n}\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @Get('*')\n  notFound() {\n    return new HttpResponseNotFound('The page your are looking for does not exist');\n  }\n}\n")))}f.isMDXComponent=!0}}]);