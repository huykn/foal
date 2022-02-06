"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9938],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8181:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"Linting & Code Style"},s=void 0,c={unversionedId:"development-environment/linting-and-code-style",id:"version-1.x/development-environment/linting-and-code-style",title:"Linting & Code Style",description:"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members.",source:"@site/versioned_docs/version-1.x/development-environment/linting-and-code-style.md",sourceDirName:"development-environment",slug:"/development-environment/linting-and-code-style",permalink:"/id/docs/1.x/development-environment/linting-and-code-style",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/development-environment/linting-and-code-style.md",tags:[],version:"1.x",frontMatter:{title:"Linting & Code Style"},sidebar:"someSidebar",previous:{title:"Code Generation",permalink:"/id/docs/1.x/development-environment/code-generation"},next:{title:"VSCode",permalink:"/id/docs/1.x/development-environment/vscode"}},p=[{value:"ESLint &amp; TypeScript",id:"eslint--typescript",children:[],level:2},{value:"Configuration with VSCode",id:"configuration-with-vscode",children:[],level:2},{value:"Adding New Rules",id:"adding-new-rules",children:[],level:2},{value:"Migrating from TSLint",id:"migrating-from-tslint",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members."),(0,o.kt)("p",null,"For example, with ESLint, the rule ",(0,o.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/quotes: single")," enforces the use of single quotes throughout the code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Valid\nconst foo = 'bar';\n// Invalid\nconst foo = \"bar\";\n")),(0,o.kt)("h2",{id:"eslint--typescript"},"ESLint & TypeScript"),(0,o.kt)("p",null,"FoalTS offers a pre-configuration for the linter ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),". It is the most commonly used in the JavaScript ecosystem and can work with TypeScript through the ",(0,o.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/parser")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/eslint-plugin")," packages."),(0,o.kt)("p",null,"You can run the linting with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run lint\n")),(0,o.kt)("p",null,"And if the linting issues can be automatically fixed, you can also fix them with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run lint:fix\n")),(0,o.kt)("h2",{id:"configuration-with-vscode"},"Configuration with VSCode"),(0,o.kt)("p",null,"Instructions to configure VSCode with ESLint and TypeScript can be found ",(0,o.kt)("a",{parentName:"p",href:"/id/docs/1.x/development-environment/vscode"},"here"),"."),(0,o.kt)("h2",{id:"adding-new-rules"},"Adding New Rules"),(0,o.kt)("p",null,"The rules are specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration file located at the root of the project."),(0,o.kt)("p",null,"The list of available JavaScript rules can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/"},"ESLint website"),". Some of them are compatible with TypeScript. Others are not and you will need to find equivalents ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules"},"here"),"."),(0,o.kt)("h2",{id:"migrating-from-tslint"},"Migrating from TSLint"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/"},"TSLint")," is a TypeScript linter that was previously used by FoalTS but has since been ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/palantir/tslint-in-2019-1a144c2317a9"},"deprecated"),". This is why new versions of the framework use ESLint."),(0,o.kt)("p",null,"In order to migrate from TSLint to ESLint, you can refer to this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md"},"page"),". It lists all TSLint rules along side rules from the ESLint ecosystem that are identical or similar."))}d.isMDXComponent=!0}}]);