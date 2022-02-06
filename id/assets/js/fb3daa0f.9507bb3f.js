"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2602],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7585:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"Nuxt.js"},p=void 0,u={unversionedId:"frontend-integration/nuxt.js",id:"frontend-integration/nuxt.js",title:"Nuxt.js",description:"Nuxt.js is a frontend framework based on Vue.JS.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/frontend-integration/nuxt.js.md",sourceDirName:"frontend-integration",slug:"/frontend-integration/nuxt.js",permalink:"/id/docs/frontend-integration/nuxt.js",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend-integration/nuxt.js.md",tags:[],version:"current",frontMatter:{title:"Nuxt.js"},sidebar:"someSidebar",previous:{title:"JSX Server-Side Rendering",permalink:"/id/docs/frontend-integration/jsx-server-side-rendering"},next:{title:"Local & Cloud Storage",permalink:"/id/docs/file-system/local-and-cloud-storage"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Set Up",id:"set-up",children:[],level:2}],s={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nuxtjs.org/"},"Nuxt.js")," is a frontend framework based on ",(0,a.kt)("a",{parentName:"p",href:"http://vuejs.org"},"Vue.JS"),"."),(0,a.kt)("p",null,"This document explains how to use it in conjunction with FoalTS. A sample source code can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/tree/master/samples/nuxt.js"},"Github"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Create your frontend and backend projects in two different folders."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal createapp backend\nnpx create-nuxt-app frontend\n")),(0,a.kt)("p",null,"When the CLI asks which server framework to choose, select ",(0,a.kt)("em",{parentName:"p"},"None"),"."),(0,a.kt)("h2",{id:"set-up"},"Set Up"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to your server directory and install ",(0,a.kt)("inlineCode",{parentName:"p"},"nuxt"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm install nuxt\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then update your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Builder, Nuxt } from 'nuxt';\n// ...\n\n// Import and Set Nuxt.js options\nconst config = require('../../frontend/nuxt.config.js');\nconfig.dev = Config.get('settings.debug', 'boolean', true);\n\nasync function main() {\n  // Init Nuxt.js\n  const nuxt = new Nuxt(config);\n\n  // Build only in dev mode\n  if (config.dev) {\n    const builder = new Builder(nuxt);\n    await builder.build();\n  } else {\n    await nuxt.ready();\n  }\n\n  // ...\n\n  const app = await createApp(AppController, {\n    postMiddlewares: [\n      nuxt.render\n    ]\n  });\n\n  // ...\n}\n\nmain();\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Delete the file ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"backend/public"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"nuxt.config.js")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"frontend/")," directory and update its first lines as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"module.exports = {\n  srcDir: '../frontend',\n  // ...\n}\n")))))}d.isMDXComponent=!0}}]);