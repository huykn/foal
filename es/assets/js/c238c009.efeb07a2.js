"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7210],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},867:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Version 2.3 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.3-release-notes.png",tags:["release"]},s=void 0,c={permalink:"/es/blog/2021/04/22/version-2.3-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-04-22-version-2.3-release-notes.md",source:"@site/blog/2021-04-22-version-2.3-release-notes.md",title:"Version 2.3 release notes",description:"Banner",date:"2021-04-22T00:00:00.000Z",formattedDate:"22 de abril de 2021",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:2.07,truncated:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.3 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.3-release-notes.png",tags:["release"]},prevItem:{title:"Version 2.4 release notes",permalink:"/es/blog/2021/05/19/version-2.4-release-notes"},nextItem:{title:"What's new in version 2 (part 4/4)",permalink:"/es/blog/2021/04/08/whats-new-in-version-2-part-4"}},u={authorsImageUrls:[void 0]},p=[{value:"GraphiQL",id:"graphiql",children:[],level:2},{value:"Support for <code>.env.local</code> files",id:"support-for-envlocal-files",children:[],level:2},{value:"Prisma documentation",id:"prisma-documentation",children:[],level:2},{value:"Base 64 and base 64 URL utilities",id:"base-64-and-base-64-url-utilities",children:[],level:2},{value:"Converting Streams to Buffers",id:"converting-streams-to-buffers",children:[],level:2},{value:"Accessing services during authentication",id:"accessing-services-during-authentication",children:[],level:2},{value:"Bug Fixes",id:"bug-fixes",children:[{value:"Social authentication",id:"social-authentication",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:n(9554).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"Version 2.3 of Foal has been released! Here are the improvements that it brings."),(0,a.kt)("h2",{id:"graphiql"},"GraphiQL"),(0,a.kt)("p",null,"From version 2.3, it is possible to generate a GraphiQL page in one line of code. This can be useful if you quickly need to test your API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/graphiql\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GraphiQL",src:n(9241).Z,width:"988",height:"601"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphiQLController } from '@foal/graphiql';\n\nimport { GraphqlApiController } from './services';\n\nexport class AppController {\n\n  subControllers = [\n    // ...\n    controller('/graphql', GraphqlApiController),\n    controller('/graphiql', GraphiQLController)\n  ];\n\n}\n")),(0,a.kt)("p",null,"The page is also customizable and you can provide additional options to change the UI or the API endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class GraphiQL2Controller extends GraphiQLController {\n\n  cssThemeURL = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/theme/solarized.css';\n\n  apiEndpoint = '/api';\n\n  options: GraphiQLControllerOptions = {\n    docExplorerOpen: true,\n    editorTheme: 'solarized light'\n  }\n\n}\n\n")),(0,a.kt)("h2",{id:"support-for-envlocal-files"},"Support for ",(0,a.kt)("inlineCode",{parentName:"h2"},".env.local")," files"),(0,a.kt)("p",null,"Foal's configuration system already supported ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files in previous versions. As of version 2.3, the framework also supports ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," files."),(0,a.kt)("p",null,"This can be useful in case you want to have two ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files, one to define the default env vars needed by the application and another to override these values on your local machine."),(0,a.kt)("p",null,"If a variable is defined in both files, the value in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," file will take precedence."),(0,a.kt)("p",null,"Similarly, you can also define environment-specific local files (",(0,a.kt)("inlineCode",{parentName:"p"},".env.development.local"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production.local"),", etc)."),(0,a.kt)("h2",{id:"prisma-documentation"},"Prisma documentation"),(0,a.kt)("p",null,"The documentation has been expanded to include ",(0,a.kt)("a",{parentName:"p",href:"https://foalts.org/docs/databases/using-another-orm"},"examples")," of how to use Prisma with Foal."),(0,a.kt)("h2",{id:"base-64-and-base-64-url-utilities"},"Base 64 and base 64 URL utilities"),(0,a.kt)("p",null,"Two functions are provided to convert base64 encoded strings to base64url encoded strings and vice versa."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { convertBase64ToBase64url, convertBase64urlToBase64 } from '@foal/core';\n\nconst str = convertBase64ToBase64url(base64Str);\nconst str2 = convertBase64urlToBase64(base64urlStr);\n")),(0,a.kt)("h2",{id:"converting-streams-to-buffers"},"Converting Streams to Buffers"),(0,a.kt)("p",null,"In case you need to convert a readable stream to a concatenated buffer during testing, you can now use the ",(0,a.kt)("inlineCode",{parentName:"p"},"streamToBuffer")," function for this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { streamToBuffer } from '@foal/core';\n\nconst buffer = await streamToBuffer(stream);\n")),(0,a.kt)("h2",{id:"accessing-services-during-authentication"},"Accessing services during authentication"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," option of ",(0,a.kt)("inlineCode",{parentName:"p"},"@JWTRequired")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseSessions")," now gives you the possibility to access services."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class UserService {\n  getUser(id) {\n    return User.findOne({ id });\n  }\n}\n\n@JWTRequired({\n  user: (id, services) => services.get(UserService).getUser(id)\n})\nclass ApiController {\n  @Get('/products')\n  getProducts(ctx: Context) {\n    // ctx.user is the object returned by UserService.\n  }\n}\n\n")),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("h3",{id:"social-authentication"},"Social authentication"),(0,a.kt)("p",null,"Social authentication controllers could sometimes return 500 errors, depending on the social provider you were using. This was due to a problem of string encoding in the callback URL. This bug has been fixed in this version."))}m.isMDXComponent=!0},9554:function(e,t,n){t.Z=n.p+"assets/images/banner-eff22c27909b97d4b8e82b0ebe849046.png"},9241:function(e,t,n){t.Z=n.p+"assets/images/graphiql-f099ed2191f41190bd6569d1b5cd1267.png"}}]);