"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[657],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2961:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Build & Start the App"},p=void 0,u={unversionedId:"development-environment/build-and-start-the-app",id:"version-1.x/development-environment/build-and-start-the-app",title:"Build & Start the App",description:"FoalTS provides several commands to help you build and develop your app.",source:"@site/versioned_docs/version-1.x/development-environment/build-and-start-the-app.md",sourceDirName:"development-environment",slug:"/development-environment/build-and-start-the-app",permalink:"/es/docs/1.x/development-environment/build-and-start-the-app",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/development-environment/build-and-start-the-app.md",tags:[],version:"1.x",frontMatter:{title:"Build & Start the App"},sidebar:"someSidebar",previous:{title:"Upload & Download Files",permalink:"/es/docs/1.x/file-system/upload-and-download-files"},next:{title:"Create & Run Scripts",permalink:"/es/docs/1.x/development-environment/create-and-run-scripts"}},d=[],c={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FoalTS provides several commands to help you build and develop your app."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm run develop")," - Build the source code and start the server. If a file changes then the code is rebuilt and the server reloads. This is usually ",(0,a.kt)("strong",{parentName:"li"},"the only command that you need during development"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm run build:app")," - Build the app code (compile the typescript files and copy the templates)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm run build:app:w")," - Build the app code (compile the typescript files and copy the templates) and do it again whenever a file changes (watch mode)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm run start")," - Start the server from the built files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm run start:w")," - Start the server from the built files and reload it whenever one of these files changes (watch mode).")))}s.isMDXComponent=!0}}]);