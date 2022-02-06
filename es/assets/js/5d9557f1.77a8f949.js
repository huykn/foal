"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7261],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Visual Studio Code",sidebar_label:"VSCode"},p=void 0,d={unversionedId:"development-environment/vscode",id:"development-environment/vscode",title:"Visual Studio Code",description:"--",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/development-environment/vscode.md",sourceDirName:"development-environment",slug:"/development-environment/vscode",permalink:"/es/docs/development-environment/vscode",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/development-environment/vscode.md",tags:[],version:"current",frontMatter:{title:"Visual Studio Code",sidebar_label:"VSCode"},sidebar:"someSidebar",previous:{title:"Estilo de C\xf3digo y Linting",permalink:"/es/docs/development-environment/linting-and-code-style"},next:{title:"Introducci\xf3n",permalink:"/es/docs/testing/introduction"}},c=[{value:"Configuring the linting",id:"configuring-the-linting",children:[],level:2},{value:"Debugging with VS Code",id:"debugging-with-vs-code",children:[],level:2}],s={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"--"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.")),(0,i.kt)("p",{parentName:"blockquote"},"Source:  ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs"},"https://code.visualstudio.com/docs"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code")," has become ",(0,i.kt)("strong",{parentName:"p"},"one of the most popular code editors in the JavaScript ecosystem"),". It offers useful features (auto-completion, debugging tools, etc.) that work very well with TypeScript and Node.js. That's why it has a dedicated page in the documentation."),(0,i.kt)("p",null,"But using VS Code is not mandatory to develop a FoalTS app. So feel free to use another code editor if you prefer."),(0,i.kt)("h2",{id:"configuring-the-linting"},"Configuring the linting"),(0,i.kt)("p",null,"In order to directly print the ESLint errors in VS Code and auto-fix the problems on save you need to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"ESLint")," extension."),(0,i.kt)("p",null,"It can be installed by launching ",(0,i.kt)("em",{parentName:"p"},"VS Code Quick Open")," (",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"P")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Cmd"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"P"),"), pasting the following command, and pressing enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ext install dbaeumer.vscode-eslint\n")),(0,i.kt)("p",null,"Then, you will need to configure it for TypeScript and make it fix the errors on save (when it is possible)."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("em",{parentName:"p"},"Command Palette")," (",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"P")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Cmd"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"P"),") and type ",(0,i.kt)("inlineCode",{parentName:"p"},"Open Settings (JSON)"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Open VSCode Settings",src:n(3294).Z,width:"2560",height:"1600"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then extend the settings to add the options below."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "eslint.validate": [\n      "typescript"\n  ],\n  "editor.codeActionsOnSave": {\n      "source.fixAll.eslint": true\n  }\n}\n')))),(0,i.kt)("h2",{id:"debugging-with-vs-code"},"Debugging with VS Code"),(0,i.kt)("p",null,"Run the following command to create the suitable debug config files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foal generate vscode-config\n")),(0,i.kt)("p",null,"Now you can add a breakpoint in your code and start the app in debug mode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Debugging demo",src:n(1178).Z,width:"800",height:"500"})),(0,i.kt)("p",null,"The generated files also include configurations to run your unit and end-to-end tests."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Debug configurations",src:n(710).Z,width:"634",height:"214"})))}u.isMDXComponent=!0},710:function(e,t,n){t.Z=n.p+"assets/images/debug-configurations-c5086b075b6c83ac55c88f5e8851cbfe.png"},1178:function(e,t,n){t.Z=n.p+"assets/images/debugger-68784711b19481be8e7423ebde8a9cee.gif"},3294:function(e,t,n){t.Z=n.p+"assets/images/open-vscode-settings-f52f059aa75d1a09e5f2f3a68577ef74.png"}}]);