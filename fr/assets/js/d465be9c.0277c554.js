"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5046],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,g=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5740:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Version 2.6 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.6-release-notes.png",tags:["release"]},s=void 0,c={permalink:"/fr/blog/2021/09/19/version-2.6-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-09-19-version-2.6-release-notes.md",source:"@site/blog/2021-09-19-version-2.6-release-notes.md",title:"Version 2.6 release notes",description:"Banner",date:"2021-09-19T00:00:00.000Z",formattedDate:"19 septembre 2021",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:.385,truncated:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.6 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.6-release-notes.png",tags:["release"]},prevItem:{title:"Version 2.7 release notes",permalink:"/fr/blog/2021/12/12/version-2.7-release-notes"},nextItem:{title:"Version 2.5 release notes",permalink:"/fr/blog/2021/06/11/version-2.5-release-notes"}},u={authorsImageUrls:[void 0]},p=[{value:"Support of the <code>array</code> value for AJV <code>coerceTypes</code> option",id:"support-of-the-array-value-for-ajv-coercetypes-option",children:[],level:2},{value:"Swagger page supports strict CSP",id:"swagger-page-supports-strict-csp",children:[],level:2},{value:"Bug fixes",id:"bug-fixes",children:[],level:2}],f={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:r(6719).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"Version 2.6 of Foal has been released! Here are the improvements that it brings."),(0,a.kt)("h2",{id:"support-of-the-array-value-for-ajv-coercetypes-option"},"Support of the ",(0,a.kt)("inlineCode",{parentName:"h2"},"array")," value for AJV ",(0,a.kt)("inlineCode",{parentName:"h2"},"coerceTypes")," option"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "ajv": {\n      "coerceTypes": "array"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Option documentation: ",(0,a.kt)("a",{parentName:"p",href:"https://ajv.js.org/coercion.html#coercion-to-and-from-array"},"https://ajv.js.org/coercion.html#coercion-to-and-from-array"),"."),(0,a.kt)("h2",{id:"swagger-page-supports-strict-csp"},"Swagger page supports strict CSP"),(0,a.kt)("p",null,"Inline scripts in the Swagger page have been removed to support more strict ",(0,a.kt)("em",{parentName:"p"},"Content Security Policy")," directive."),(0,a.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"foal connect angular")," command now supports empty ",(0,a.kt)("inlineCode",{parentName:"p"},"angular.json")," files."))}m.isMDXComponent=!0},6719:function(e,t,r){t.Z=r.p+"assets/images/banner-d245fd42d03b4afe02ba1bd55c485ad6.png"}}]);