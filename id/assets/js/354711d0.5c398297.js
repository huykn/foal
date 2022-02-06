"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1462],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},575:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],c={title:"Initialization"},l=void 0,s={unversionedId:"architecture/initialization",id:"version-1.x/architecture/initialization",title:"Initialization",description:"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database.",source:"@site/versioned_docs/version-1.x/architecture/initialization.md",sourceDirName:"architecture",slug:"/architecture/initialization",permalink:"/id/docs/1.x/architecture/initialization",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/architecture/initialization.md",tags:[],version:"1.x",frontMatter:{title:"Initialization"},sidebar:"someSidebar",previous:{title:"Hooks",permalink:"/id/docs/1.x/architecture/hooks"},next:{title:"SQL Databases (TypeORM)",permalink:"/id/docs/1.x/databases/typeorm"}},p=[{value:"The <code>main</code> function",id:"the-main-function",children:[],level:2},{value:"The <code>AppController.init</code> method",id:"the-appcontrollerinit-method",children:[],level:2},{value:"The services <code>boot</code> method",id:"the-services-boot-method",children:[],level:2},{value:"Best Practices",id:"best-practices",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database."),(0,r.kt)("p",null,"There are three ways to achieve this in FoalTS."),(0,r.kt)("h2",{id:"the-main-function"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"main")," function"),(0,r.kt)("p",null,"The most straightforward way to do it, which is used by default, is to add the initialization commands in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function before ",(0,r.kt)("inlineCode",{parentName:"p"},"createApp")," is called."),(0,r.kt)("p",null,"If your application uses TypeORM, your project should have a file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ts")," that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async function main() {\n  // Initialization\n  await createConnection();\n\n  // Creation of the application\n  const app = createApp(AppController);\n\n  // ...\n}\n\nmain();\n")),(0,r.kt)("h2",{id:"the-appcontrollerinit-method"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"AppController.init")," method"),(0,r.kt)("p",null,"Sometimes, however, this approach is not sufficient because we need to call the methods of some services. In this case, you can add an ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," method to the root controller class which will be called before the application is fully created. This method can be synchronous or asynchronous."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example 1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  async init() {\n    await this.serviceA.doSomething();\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example 2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  @dependency\n  serviceB: ServiceB;\n\n  async init() {\n    this.serviceA.init();\n    this.serviceB.init();\n  }\n\n}\n")),(0,r.kt)("p",null,"For this to work, you need to update your ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file and create the application with the asynchronous function ",(0,r.kt)("inlineCode",{parentName:"p"},"createAndInitApp"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAndInitApp } from '@foal/core';\n\nasync function main() {\n  const app = await createAndInitApp(AppController);\n\n  // ...\n}\n\nmain();\n")),(0,r.kt)("h2",{id:"the-services-boot-method"},"The services ",(0,r.kt)("inlineCode",{parentName:"h2"},"boot")," method"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"boot")," methods are available in v1.8.0 onwards.")),(0,r.kt)("p",null,"Alternatively you can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")," method in your services. This method can be synchronous or asynchronous."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ServiceA {\n\n  async boot() {\n    await doSomething();\n  }\n\n}\n")),(0,r.kt)("p",null,"Then, you have to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")," method of your service manager (it will be automatically called starting from version 2)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAndInitApp } from '@foal/core';\n\nasync function main() {\n  const serviceManager = new ServiceManager();\n  const app = createApp(AppController, {\n    serviceManager\n  });\n  // This line calls the `boot` method of all your services that have one.\n  await serviceManager.boot();\n\n  // ...\n}\n\nmain();\n")),(0,r.kt)("p",null,"If you manually inject services to your service manager and you want their ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")," methods to be called, you must specify this in the ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," method options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const serviceManager = new ServiceManager();\nserviceManager.set(ServiceA, myServiceInstance, { boot: true })\n")),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("p",null,"If your initialization consists of several asynchronous tasks, you may want to perform them in ",(0,r.kt)("em",{parentName:"p"},"parallel"),". This will reduce the initialization time, which has an impact if you use a serverless architecture."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n\n  async init() {\n    // Don't do\n    await createConnection();\n    await createAnotherConnection();\n\n    // Do\n    await Promise.all([\n      createConnection(),\n      createAnotherConnection()\n    ])\n  }\n\n}\n")))}d.isMDXComponent=!0}}]);