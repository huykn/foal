"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9419],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},888:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Installation"},p=void 0,s={unversionedId:"tutorials/mongodb-todo-list/tuto-1-installation",id:"version-1.x/tutorials/mongodb-todo-list/tuto-1-installation",title:"Installation",description:"In this tutorial you will learn how to create a basic web application with FoalTS and MongoDB. The demo application is a simple to-do list with which users can view, create and delete their tasks.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-1-installation.md",sourceDirName:"tutorials/mongodb-todo-list",slug:"/tutorials/mongodb-todo-list/tuto-1-installation",permalink:"/id/docs/1.x/tutorials/mongodb-todo-list/tuto-1-installation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-1-installation.md",tags:[],version:"1.x",frontMatter:{title:"Installation"},sidebar:"someSidebar",previous:{title:"E2E Testing & Auth",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-8-e2e-testing-and-authentication"},next:{title:"Introduction",permalink:"/id/docs/1.x/tutorials/mongodb-todo-list/tuto-2-introduction"}},c=[{value:"Create a New Project",id:"create-a-new-project",children:[],level:2},{value:"Start The Server",id:"start-the-server",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial you will learn how to create a basic web application with FoalTS and MongoDB. The demo application is a simple to-do list with which users can view, create and delete their tasks."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Requirements:")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," 8 or greater"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/administration/install-community/"},"MongoDB"))),(0,a.kt)("h2",{id:"create-a-new-project"},"Create a New Project"),(0,a.kt)("p",null,"First you need to install globaly the ",(0,a.kt)("em",{parentName:"p"},"Command Line Interface (CLI)")," of FoalTS. It will help you create a new project and generate files all along your development."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @foal/cli\n")),(0,a.kt)("p",null,"Then create a new application. ",(0,a.kt)("strong",{parentName:"p"},"Don't forget the --mongodb option.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"foal createapp my-app --mongodb\n")),(0,a.kt)("p",null,"This command generates a new directory with the basic structure of the new application. It also installs all the dependencies. Let's look at what ",(0,a.kt)("inlineCode",{parentName:"p"},"createapp")," created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"my-app/\n  config/\n  node_modules/\n  public/\n  src/\n    app/\n    e2e/\n    scripts/\n  package.json\n  tsconfig.*.json\n  .eslintrc.js\n")),(0,a.kt)("p",null,"The outer ",(0,a.kt)("inlineCode",{parentName:"p"},"my-app")," root directory is just a container for your project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"config/")," directory contains configuration files for your different environments (production, test, development, e2e, etc)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/")," directory contains all the prod and dev dependencies of your project."),(0,a.kt)("li",{parentName:"ul"},"The static files are located in the ",(0,a.kt)("inlineCode",{parentName:"li"},"public/")," directory. They are usually images, CSS and client JavaScript files and are served directly when the server is running."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"src/")," directory contains all the source code of the application.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The inner ",(0,a.kt)("inlineCode",{parentName:"li"},"app/")," directory includes the components of your server (controllers, services and hooks)."),(0,a.kt)("li",{parentName:"ul"},"End-to-end tests are located in the ",(0,a.kt)("inlineCode",{parentName:"li"},"e2e/")," directory."),(0,a.kt)("li",{parentName:"ul"},"The inner ",(0,a.kt)("inlineCode",{parentName:"li"},"scripts/")," folder contains scripts intended to be called from the command line (ex: create-user)."))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," lists the dependencies and commands of the project."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.*.json")," files list the TypeScript compiler configuration for each ",(0,a.kt)("inlineCode",{parentName:"li"},"npm")," command."),(0,a.kt)("li",{parentName:"ul"},"Finally the linting configuration can be found in the ",(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc.js")," file.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TypeScript")),(0,a.kt)("p",{parentName:"blockquote"},"The language used to develop a FoalTS application is ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),". It is a typed superset of JavaScript that compiles to plain JavaScript. The benefits of using TypeScript are many, but in summary, the language provides great tools and the future features of JavaScript.")),(0,a.kt)("h2",{id:"start-the-server"},"Start The Server"),(0,a.kt)("p",null,"Let's verify that the FoalTS project works. Run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd my-app\nnpm run develop\n")),(0,a.kt)("p",null,"You've started the development server."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("strong",{parentName:"p"},"development server")," watches at your files and automatically compiles and reloads your code. You don\u2019t need to restart the server each time you make code changes. Note that it is only intended to be used in development, do not use it on production.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Port 3001 already in use?")),(0,a.kt)("p",{parentName:"blockquote"},"You can define in ",(0,a.kt)("inlineCode",{parentName:"p"},"config/default.json")," which port the application is using.")),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," in your browser. You should see the text ",(0,a.kt)("em",{parentName:"p"},"Welcome to the future"),"."),(0,a.kt)("p",null,"Congratulations, you now have a server running!"))}d.isMDXComponent=!0}}]);