"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4290],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9296:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Single Page Applications (SPA)"},l=void 0,p={unversionedId:"frontend-integration/single-page-applications",id:"version-1.x/frontend-integration/single-page-applications",title:"Single Page Applications (SPA)",description:"Single-Page Applications are Web Applications that are loaded once upon the first request(s) to the backend. After retreiving all the necessary code from the server, the current page is rendered and updated directly in the browser without asking the server to render new pages. During its lifecycle, the application usually communicates with the server by making API calls to fetch, create, update or delete data. This is a common pattern used when creating a new application with Angular, React or Vue.",source:"@site/versioned_docs/version-1.x/frontend-integration/single-page-applications.md",sourceDirName:"frontend-integration",slug:"/frontend-integration/single-page-applications",permalink:"/docs/1.x/frontend-integration/single-page-applications",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/frontend-integration/single-page-applications.md",tags:[],version:"1.x",frontMatter:{title:"Single Page Applications (SPA)"},sidebar:"someSidebar",previous:{title:"GraphQL",permalink:"/docs/1.x/api-section/graphql"},next:{title:"Angular, React & Vue",permalink:"/docs/1.x/frontend-integration/angular-react-vue"}},c=[{value:"Building the App &amp; Proxifying Requests",id:"building-the-app--proxifying-requests",children:[],level:2},{value:"Using Frontend Routers",id:"using-frontend-routers",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Single-Page Applications are Web Applications that are loaded once upon the first request(s) to the backend. After retreiving all the necessary code from the server, the current page is rendered and updated directly in the browser without asking the server to render new pages. During its lifecycle, the application usually communicates with the server by making API calls to fetch, create, update or delete data. This is a common pattern used when creating a new application with Angular, React or Vue."),(0,a.kt)("p",null,"Building a SPA, however, introduces a certain complexity. This document presents some techniques and tools for solving common scenarios."),(0,a.kt)("h2",{id:"building-the-app--proxifying-requests"},"Building the App & Proxifying Requests"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.x/frontend-integration/angular-react-vue"},"Angular, React & Vue")," section to learn on how to configure your frontend CLI to interact with a Foal application."),(0,a.kt)("h2",{id:"using-frontend-routers"},"Using Frontend Routers"),(0,a.kt)("p",null,"Most single-page applications simulate routing on the frontend side. This is usually done by libraries such as ",(0,a.kt)("a",{parentName:"p",href:"https://reacttraining.com/react-router"},"react-router")," or ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/router"},"@angular/router"),". The application does not actually make any requests to the server but simply modifies the URL in the address bar."),(0,a.kt)("p",null,"This works fine until the user presses the refresh button, shares the link or saves the page in their bookmarks. In that case, the browser makes a request to the server to retreive the desired page and thus gets a 404 error."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example"),"\n| Request | Response |\n| --- | --- |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," | 200 - Returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"public/")," directory. |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"/users?city=Paris")," | 404 - The server has no route that handles ",(0,a.kt)("inlineCode",{parentName:"p"},"/users"),". |"),(0,a.kt)("p",null,"One technique to solve this problem is to add a handler responsible for processing uncaught requests. It returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," page in all cases. This way, the browser loads the application which then looks at the address bar and displays the appropriate page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, controller, createHttpResponseFile, Get, HttpResponseNotFound } from '@foal/core';\n\nimport { ApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    // ...\n  ];\n\n  @Get('*')\n  renderApp(ctx: Context) {\n    if (!ctx.request.accepts('html')) {\n      return new HttpResponseNotFound();\n    }\n\n    return createHttpResponseFile({\n      directory: './public',\n      file: 'index.html'\n    });\n    // OR render('./templates/index.html');\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Note:")," With this approach, the frontend is responsible for catching incorrect URLs and displaying a 404 page.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Note 2:")," This issue usually does not show up in development as frontend CLIs are sufficiently clever to handle these requests.")))}d.isMDXComponent=!0}}]);