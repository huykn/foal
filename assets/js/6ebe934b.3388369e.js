"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8116],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7310:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={title:"Installation Troubleshooting"},s=void 0,u={unversionedId:"tutorials/simple-todo-list/installation-troubleshooting",id:"tutorials/simple-todo-list/installation-troubleshooting",title:"Installation Troubleshooting",description:"Errors with node-gyp",source:"@site/docs/tutorials/simple-todo-list/installation-troubleshooting.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/installation-troubleshooting",permalink:"/docs/tutorials/simple-todo-list/installation-troubleshooting",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/installation-troubleshooting.md",tags:[],version:"current",frontMatter:{title:"Installation Troubleshooting"}},p=[{value:"Errors with <code>node-gyp</code>",id:"errors-with-node-gyp",children:[],level:2},{value:"Another problem?",id:"another-problem",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"errors-with-node-gyp"},"Errors with ",(0,i.kt)("inlineCode",{parentName:"h2"},"node-gyp")),(0,i.kt)("p",null,"If you're on Windows and you get errors mentioning ",(0,i.kt)("inlineCode",{parentName:"p"},"gyp")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"node_gyp"),", it's probably because this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp"},"library")," doesn't have all the dependencies it needs."),(0,i.kt)("p",null,"Try to run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install --global windows-build-tools")," from an elevated PowerShell or CMD.exe (run as Administrator)."),(0,i.kt)("p",null,"If this does not solve your problem, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/new"},"submit an issue")," on Github with your terminal output so that we can help you!"),(0,i.kt)("h2",{id:"another-problem"},"Another problem?"),(0,i.kt)("p",null,"Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/new"},"submit an issue")," on Github."))}d.isMDXComponent=!0}}]);