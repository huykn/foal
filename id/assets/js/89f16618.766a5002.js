"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2831],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7628:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Version 2.1 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",tags:["release"]},s=void 0,c={permalink:"/id/blog/2021/02/03/version-2.1-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-02-03-version-2.1-release-notes.md",source:"@site/blog/2021-02-03-version-2.1-release-notes.md",title:"Version 2.1 release notes",description:"Banner",date:"2021-02-03T00:00:00.000Z",formattedDate:"3 Februari 2021",tags:[{label:"release",permalink:"/id/blog/tags/release"}],readingTime:1.495,truncated:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.1 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",tags:["release"]},prevItem:{title:"What's new in version 2 (part 1/4)",permalink:"/id/blog/2021/02/17/whats-new-in-version-2-part-1"}},p={authorsImageUrls:[void 0]},u=[{value:"New Error Page Design",id:"new-error-page-design",children:[],level:2},{value:"New Welcome Page",id:"new-welcome-page",children:[],level:2},{value:"CLI exits with code 1 when a command fails",id:"cli-exits-with-code-1-when-a-command-fails",children:[],level:2},{value:"New <code>@All</code> decorator",id:"new-all-decorator",children:[],level:2},{value:"New CSRF option in <code>@UseSessions</code> and <code>@JWT</code>",id:"new-csrf-option-in-usesessions-and-jwt",children:[],level:2},{value:"Support of <code>better-sqlite3</code>",id:"support-of-better-sqlite3",children:[],level:2}],d={toc:u};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:n(5985).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"Version 2.1 has been released! Here are the improvements that it brings."),(0,a.kt)("h2",{id:"new-error-page-design"},"New Error Page Design"),(0,a.kt)("p",null,"When an error is thrown or rejected in development, the server returns an error page with some debugging details. The UI of this page has been improved and it now provides more information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Error page",src:n(29).Z,width:"1968",height:"832"})),(0,a.kt)("h2",{id:"new-welcome-page"},"New Welcome Page"),(0,a.kt)("p",null,"When creating a new project, the generated welcome page is also different."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Welcome page",src:n(2546).Z,width:"1968",height:"830"})),(0,a.kt)("h2",{id:"cli-exits-with-code-1-when-a-command-fails"},"CLI exits with code 1 when a command fails"),(0,a.kt)("p",null,"This small improvement is useful when we want to stop a CI pipeline when one of its commands fails."),(0,a.kt)("h2",{id:"new-all-decorator"},"New ",(0,a.kt)("inlineCode",{parentName:"h2"},"@All")," decorator"),(0,a.kt)("p",null,"This decorator handles all requests regardless of the HTTP verb (GET, POST, etc.)."),(0,a.kt)("p",null,"It can be used for example to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"not found")," handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { All, HttpResponseNotFound } from '@foal/core';\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @All('*')\n  notFound() {\n    return new HttpResponseNotFound('The route you are looking for does not exist.');\n  }\n}\n")),(0,a.kt)("h2",{id:"new-csrf-option-in-usesessions-and-jwt"},"New CSRF option in ",(0,a.kt)("inlineCode",{parentName:"h2"},"@UseSessions")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"@JWT")),(0,a.kt)("p",null,"This option allows you to override the behavior of the configuration specified globally with the key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.session.csrf.enabled")," or the key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.jwt.csrf.enabled"),"."),(0,a.kt)("p",null,"It can be useful for example to disable the CSRF protection on a specific route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseOK, Post, UseSessions } from '@foal/core';\n\nexport class ApiController {\n  @Post('/foo')\n  @UseSessions({ cookie: true })\n  foo() {\n    // This method has the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n\n  @Post('/bar')\n  @UseSessions({ cookie: true, csrf: false })\n  bar() {\n    // This method does not have the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n}\n\n")),(0,a.kt)("h2",{id:"support-of-better-sqlite3"},"Support of ",(0,a.kt)("inlineCode",{parentName:"h2"},"better-sqlite3")),(0,a.kt)("p",null,"When using Foal with SQLite, you now have the choice between two drivers: ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlite3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"better-sqlite3"),". The package ",(0,a.kt)("inlineCode",{parentName:"p"},"better-sqlite3")," is used by default in new projects starting from this version on."))}h.isMDXComponent=!0},5985:function(e,t,n){t.Z=n.p+"assets/images/banner-64d50dc8df934fea97a407e6f47532de.png"},29:function(e,t,n){t.Z=n.p+"assets/images/error-page-21d0ceed0c0839e2361e98f8c4145551.png"},2546:function(e,t,n){t.Z=n.p+"assets/images/welcome-page-e76abb3126e644b68ffddb46a38a8eb9.png"}}]);