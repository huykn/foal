"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4317],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=r,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5202:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={title:"The Todo Model"},c=void 0,d={unversionedId:"tutorials/mongodb-todo-list/tuto-3-the-todo-model",id:"version-1.x/tutorials/mongodb-todo-list/tuto-3-the-todo-model",title:"The Todo Model",description:"Let's create your first model. The CLI provides a useful command to generate a new file with an empty model.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-3-the-todo-model.md",sourceDirName:"tutorials/mongodb-todo-list",slug:"/tutorials/mongodb-todo-list/tuto-3-the-todo-model",permalink:"/docs/1.x/tutorials/mongodb-todo-list/tuto-3-the-todo-model",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-3-the-todo-model.md",tags:[],version:"1.x",frontMatter:{title:"The Todo Model"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/1.x/tutorials/mongodb-todo-list/tuto-2-introduction"},next:{title:"The Shell Script create-todo",permalink:"/docs/1.x/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo"}},u=[],s={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's create your first model. The CLI provides a useful command to generate a new file with an empty model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate model todo\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"FoalTS uses ",(0,a.kt)("a",{parentName:"p",href:"http://mongoosejs.com"},"Mongoose"),", a complete ",(0,a.kt)("em",{parentName:"p"},"Object-Document Mapper"),", to communicate with the MongoDB database.")),(0,a.kt)("p",null,"Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"todo.model.ts")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/models")," directory and add a ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { model, models, Schema } from 'mongoose';\n\nconst todoSchema = new Schema({\n  text: {\n    required: true,\n    type: String // String with a capital letter\n  }\n});\n\nexport const Todo = models.Todo || model('Todo', todoSchema);\n\n")))}p.isMDXComponent=!0}}]);