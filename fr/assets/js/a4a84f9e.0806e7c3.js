"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[823],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},744:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Create & Run Scripts"},c=void 0,p={unversionedId:"development-environment/create-and-run-scripts",id:"version-1.x/development-environment/create-and-run-scripts",title:"Create & Run Scripts",description:"Sometimes we have to execute some tasks from the command line. These tasks can serve different purposes such as populating a database (user creation, etc) for instance. They often need to access some of the app classes and functions. This is when shell scripts come into play.",source:"@site/versioned_docs/version-1.x/development-environment/create-and-run-scripts.md",sourceDirName:"development-environment",slug:"/development-environment/create-and-run-scripts",permalink:"/fr/docs/1.x/development-environment/create-and-run-scripts",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/development-environment/create-and-run-scripts.md",tags:[],version:"1.x",frontMatter:{title:"Create & Run Scripts"},sidebar:"someSidebar",previous:{title:"Build & Start the App",permalink:"/fr/docs/1.x/development-environment/build-and-start-the-app"},next:{title:"Code Generation",permalink:"/fr/docs/1.x/development-environment/code-generation"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes we have to execute some tasks from the command line. These tasks can serve different purposes such as populating a database (user creation, etc) for instance. They often need to access some of the app classes and functions. This is when shell scripts come into play."),(0,a.kt)("h1",{id:"create-scripts"},"Create Scripts"),(0,a.kt)("p",null,"A shell script is just a TypeScript file located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/scripts"),". It must export a ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," function that is then called when running the script."),(0,a.kt)("p",null,"Let's create a new one with the command line: ",(0,a.kt)("inlineCode",{parentName:"p"},"foal g script display-users"),". A new file with a default template should appear in you ",(0,a.kt)("inlineCode",{parentName:"p"},"src/scripts")," directory."),(0,a.kt)("h1",{id:"write-scripts"},"Write Scripts"),(0,a.kt)("p",null,"Remove the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"src/scripts/display-users.ts")," and replace it with the below code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { createConnection } from 'typeorm';\n\n// App\nimport { User } from '../app/entities';\n\nexport async function main() {\n  const connection = await createConnection();\n  const users = await connection.getRepository(User).find();\n  console.log(users);\n}\n\n")),(0,a.kt)("p",null,"As you can see, we can easily establish a connection to the database in the script as well as import some of the app components (the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," in this case)."),(0,a.kt)("p",null,"Encapsulating your code in a ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," function without calling it directly in the file has several benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can import and test your ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," function in a separate file."),(0,a.kt)("li",{parentName:"ul"},"Using a function lets you easily use async/await keywords when dealing with asynchronous code.")),(0,a.kt)("h1",{id:"build-and-run-scripts"},"Build and Run Scripts"),(0,a.kt)("p",null,"To run a script you first need to build it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:scripts\n")),(0,a.kt)("p",null,"Then you can execute it with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"foal run my-script # or foal run-script my-script\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can also provide additionnal arguments to your script (for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"foal run my-script foo=1 bar='[ 3, 4 ]'"),"). The default template in the generated scripts shows you how to handle such behavior.")))}m.isMDXComponent=!0}}]);