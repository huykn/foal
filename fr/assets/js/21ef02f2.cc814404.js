"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6809],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3097:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"Code Generation"},p=void 0,c={unversionedId:"development-environment/code-generation",id:"version-1.x/development-environment/code-generation",title:"Code Generation",description:"Create a project",source:"@site/versioned_docs/version-1.x/development-environment/code-generation.md",sourceDirName:"development-environment",slug:"/development-environment/code-generation",permalink:"/fr/docs/1.x/development-environment/code-generation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/development-environment/code-generation.md",tags:[],version:"1.x",frontMatter:{title:"Code Generation"},sidebar:"someSidebar",previous:{title:"Create & Run Scripts",permalink:"/fr/docs/1.x/development-environment/create-and-run-scripts"},next:{title:"Linting & Code Style",permalink:"/fr/docs/1.x/development-environment/linting-and-code-style"}},s=[{value:"Create a project",id:"create-a-project",children:[],level:2},{value:"Create a controller",id:"create-a-controller",children:[{value:"The <code>--register</code> flag",id:"the---register-flag",children:[],level:3}],level:2},{value:"Create an entity (simple model)",id:"create-an-entity-simple-model",children:[],level:2},{value:"Create a model (only for Mongoose)",id:"create-a-model-only-for-mongoose",children:[],level:2},{value:"Create REST API",id:"create-rest-api",children:[],level:2},{value:"Create a hook",id:"create-a-hook",children:[],level:2},{value:"Create a script",id:"create-a-script",children:[],level:2},{value:"Create a sub-app",id:"create-a-sub-app",children:[],level:2},{value:"Create a service",id:"create-a-service",children:[],level:2}],d={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-a-project"},"Create a project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal createapp my-app\n")),(0,o.kt)("p",null,"Create a new directory with all the required files to get started."),(0,o.kt)("p",null,"If you specify the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--mongodb"),", the new project will use ",(0,o.kt)("inlineCode",{parentName:"p"},"mongoose")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/mongoose")," in place of ",(0,o.kt)("inlineCode",{parentName:"p"},"typeorm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/typeorm"),". You can find more information ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/1.x/databases/using-another-orm"},"here"),"."),(0,o.kt)("p",null,"If you specify the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--yaml"),", the new project will use YAML format for its configuration files. You can find more information ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/1.x/deployment-and-environments/configuration"},"here"),"."),(0,o.kt)("h2",{id:"create-a-controller"},"Create a controller"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g controller <name>\n")),(0,o.kt)("p",null,"Create a new controller in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/app/controllers"),", in ",(0,o.kt)("inlineCode",{parentName:"p"},"./controllers")," or in the current directory depending on which folders are found."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g controller auth\nfoal g controller api/product\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src/\n '- app/\n  '- controllers/\n   |- api/\n   | |- product.controller.ts\n   | '- index.ts\n   |- auth.controller.ts\n   '- index.ts\n")),(0,o.kt)("h3",{id:"the---register-flag"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"--register")," flag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g controller <name> --register\n")),(0,o.kt)("p",null,"If you wish to automatically create a new route attached to this controller, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--register")," flag to do so."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g controller api --register\nfoal g controller api/product --register\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src/\n '- app/\n  |- controllers/\n  | |- api/\n  | | |- product.controller.ts\n  | | '- index.ts\n  | |- api.controller.ts\n  | '- index.ts\n  '- app.controller.ts\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"app.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ]\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ApiController {\n  subControllers = [\n    controller('/product', ProductController)\n  ]\n}\n")),(0,o.kt)("h2",{id:"create-an-entity-simple-model"},"Create an entity (simple model)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g entity <name>\n")),(0,o.kt)("p",null,"Create a new entity in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/app/entities"),", in ",(0,o.kt)("inlineCode",{parentName:"p"},"./entities")," or in the current directory depending on which folders are found."),(0,o.kt)("h2",{id:"create-a-model-only-for-mongoose"},"Create a model (only for Mongoose)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g model <name>\n")),(0,o.kt)("p",null,"Create a new model in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/app/models"),", in ",(0,o.kt)("inlineCode",{parentName:"p"},"./models")," or in the current directory depending on which folders are found."),(0,o.kt)("h2",{id:"create-rest-api"},"Create REST API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g rest-api <name>\n")),(0,o.kt)("p",null,"Create a new controller and a new entity to build a basic REST API. Depending on which directories are found, they will be generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app/{entities}|{controllers}/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{entities}|{controllers}/")," or in the current directory."),(0,o.kt)("p",null,"If you are in the root directory and you want to automatically register the controller within the app controller you can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--register")," flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g rest-api <name> --register\n")),(0,o.kt)("p",null,"See the page ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/1.x/api-section/rest-blueprints"},"REST Blueprints")," for more details."),(0,o.kt)("h2",{id:"create-a-hook"},"Create a hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g hook <name>\n")),(0,o.kt)("p",null,"Create a new hook in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/app/hooks"),", in ",(0,o.kt)("inlineCode",{parentName:"p"},"./hooks")," or in the current directory depending on which folders are found."),(0,o.kt)("h2",{id:"create-a-script"},"Create a script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g script <name>\n")),(0,o.kt)("p",null,"Create a new shell script in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/scripts")," regardless of where you run the command."),(0,o.kt)("h2",{id:"create-a-sub-app"},"Create a sub-app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g sub-app <name>\n")),(0,o.kt)("p",null,"Create a new sub-app with all its files in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/app/sub-apps"),", in ",(0,o.kt)("inlineCode",{parentName:"p"},"./sub-apps")," or in the current directory depending on which folders are found."),(0,o.kt)("h2",{id:"create-a-service"},"Create a service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g service <name>\n")),(0,o.kt)("p",null,"Create a new service in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/app/services"),", in ",(0,o.kt)("inlineCode",{parentName:"p"},"./services")," or in the current directory depending on which folders are found."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"foal g service auth\nfoal g service apis/github\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src/\n '- app/\n  '- services/\n   |- apis/\n   | '- github.service.ts\n   | '- index.ts\n   |- auth.service.ts\n   '- index.ts\n")))}u.isMDXComponent=!0}}]);