"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8500],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9686:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"JSX Server-Side Rendering"},s=void 0,c={unversionedId:"frontend-integration/jsx-server-side-rendering",id:"frontend-integration/jsx-server-side-rendering",title:"JSX Server-Side Rendering",description:"--",source:"@site/docs/frontend-integration/jsx-server-side-rendering.md",sourceDirName:"frontend-integration",slug:"/frontend-integration/jsx-server-side-rendering",permalink:"/docs/frontend-integration/jsx-server-side-rendering",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend-integration/jsx-server-side-rendering.md",tags:[],version:"current",frontMatter:{title:"JSX Server-Side Rendering"},sidebar:"someSidebar",previous:{title:"Angular, React & Vue",permalink:"/docs/frontend-integration/angular-react-vue"},next:{title:"Nuxt.js",permalink:"/docs/frontend-integration/nuxt.js"}},p=[{value:"Compile JSX Files",id:"compile-jsx-files",children:[],level:2},{value:"Example with React",id:"example-with-react",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"--"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you are interested in SSR without JSX, then you might take a look at ",(0,a.kt)("a",{parentName:"p",href:"/docs/common/templating"},'the "templating" page'),".")),(0,a.kt)("h2",{id:"compile-jsx-files"},"Compile JSX Files"),(0,a.kt)("p",null,"The TypeScript compiler supports JSX."),(0,a.kt)("p",null,"To enable this feature, update the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    ...\n    "jsx": "react",\n  },\n  "include": [\n    "src/**/*.ts"\n    "src/**/*.tsx"\n  ]\n}\n\n')),(0,a.kt)("p",null,"Then, add the file extension ",(0,a.kt)("inlineCode",{parentName:"p"},"tsx")," in every ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.*.json"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with ",(0,a.kt)("inlineCode",{parentName:"em"},"tsconfig.app.json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/**/*.ts",\n    "src/**/*.tsx"\n  ],\n  "exclude": [\n    "src/e2e/*.ts",\n    "src/**/*.spec.ts",\n    "src/e2e.ts",\n    "src/test.ts"\n  ]\n}\n')),(0,a.kt)("p",null,"Every file using JSX must now have the extension ",(0,a.kt)("inlineCode",{parentName:"p"},".tsx"),"."),(0,a.kt)("h2",{id:"example-with-react"},"Example with React"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install react react-dom @types/react-dom\n")),(0,a.kt)("p",null,"This example shows how to use JSX SSR with React. It assumes that ",(0,a.kt)("inlineCode",{parentName:"p"},"templates")," directory is in the root, next to ",(0,a.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"view.controller.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, render } from '@foal/core';\nimport * as React from 'react';\nimport * as ReactDOMServer from 'react-dom/server';\n\nexport class ViewController {\n\n  @Get('/')\n  async index() {\n    const content = ReactDOMServer.renderToString(<div>Hello world!</div>);\n\n    return render('./templates/index.html', {\n      content,\n    });\n  }\n\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"./templates/index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Home</title>\n</head>\n<body>\n  {{ content }}\n</body>\n</html>\n')))}d.isMDXComponent=!0}}]);