"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7246],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=a(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var a=2;a<o;a++)s[a]=n[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4005:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],c={title:"Unit Testing"},l=void 0,a={unversionedId:"testing/unit-testing",id:"version-1.x/testing/unit-testing",title:"Unit Testing",description:"Convention",source:"@site/versioned_docs/version-1.x/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/es/docs/1.x/testing/unit-testing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/testing/unit-testing.md",tags:[],version:"1.x",frontMatter:{title:"Unit Testing"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/es/docs/1.x/testing/introduction"},next:{title:"E2E Testing",permalink:"/es/docs/1.x/testing/e2e-testing"}},u=[{value:"Convention",id:"convention",children:[],level:2},{value:"Build and Run Unit Tests",id:"build-and-run-unit-tests",children:[{value:"Watch mode (for development)",id:"watch-mode-for-development",children:[],level:3},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",children:[],level:3}],level:2},{value:"Testing Controllers",id:"testing-controllers",children:[],level:2},{value:"Testing Services",id:"testing-services",children:[],level:2},{value:"Testing Hooks",id:"testing-hooks",children:[],level:2},{value:"Dependency Injection &amp; Unit Testing",id:"dependency-injection--unit-testing",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"convention"},"Convention"),(0,o.kt)("p",null,"Every unit test file should be placed next to the file it tests with the same name and the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.ts")," extension. If this extension is not present then the file won't be executed when running the test commands."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"'- services\n  |- my-service.service.ts\n  '- my-service.service.spec.ts\n")),(0,o.kt)("h2",{id:"build-and-run-unit-tests"},"Build and Run Unit Tests"),(0,o.kt)("h3",{id:"watch-mode-for-development"},"Watch mode (for development)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run test\n")),(0,o.kt)("p",null,"This command builds and executes the unit tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."),(0,o.kt)("p",null,"The process runs forever until you stop it."),(0,o.kt)("h3",{id:"simple-mode-for-ci-and-git-hooks"},"Simple mode (for CI and Git hooks)"),(0,o.kt)("p",null,"If you need to build and run the tests only once, you can use these two commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:test # Build the unit tests code (compile the typescript files and copy the templates)\nnpm run start:test # Execute the unit tests from the built files\n")),(0,o.kt)("p",null,"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."),(0,o.kt)("h2",{id:"testing-controllers"},"Testing Controllers"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/1.x/architecture/controllers"},"Controllers"),"."),(0,o.kt)("h2",{id:"testing-services"},"Testing Services"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/1.x/architecture/services-and-dependency-injection"},"Services & Dependency Injection"),"."),(0,o.kt)("h2",{id:"testing-hooks"},"Testing Hooks"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/1.x/architecture/hooks"},"Hooks"),"."),(0,o.kt)("h2",{id:"dependency-injection--unit-testing"},"Dependency Injection & Unit Testing"),(0,o.kt)("p",null,"FoalTS uses dependency injection to keep the code loosely coupled and so enhance testatibility."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/1.x/architecture/services-and-dependency-injection"},"Services & Dependency Injection"),"."))}p.isMDXComponent=!0}}]);