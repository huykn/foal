"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4533],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8002:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={title:"Introduction"},l=void 0,u={unversionedId:"testing/introduction",id:"version-1.x/testing/introduction",title:"Introduction",description:"Every shipped app should come with a minimum set of tests. Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away.",source:"@site/versioned_docs/version-1.x/testing/introduction.md",sourceDirName:"testing",slug:"/testing/introduction",permalink:"/fr/docs/1.x/testing/introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/testing/introduction.md",tags:[],version:"1.x",frontMatter:{title:"Introduction"},sidebar:"someSidebar",previous:{title:"VSCode",permalink:"/fr/docs/1.x/development-environment/vscode"},next:{title:"Unit Testing",permalink:"/fr/docs/1.x/testing/unit-testing"}},c=[{value:"The Mocha Framework",id:"the-mocha-framework",children:[],level:2},{value:"The <code>assert</code> Node.js module",id:"the-assert-nodejs-module",children:[],level:2}],p={toc:c};function d(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Every shipped app should come with a ",(0,s.kt)("strong",{parentName:"p"},"minimum set of tests"),". Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away."),(0,s.kt)("h2",{id:"the-mocha-framework"},"The Mocha Framework"),(0,s.kt)("p",null,"The testing ecosystem is based on the ",(0,s.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," framework. It provides functions to help you structuring your tests and also making assertions."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"describe")," function groups tests (or groups of tests) together."),(0,s.kt)("li",{parentName:"ul"},"And the ",(0,s.kt)("inlineCode",{parentName:"li"},"it")," function defines an individual test.")),(0,s.kt)("p",null,"Using these two helpers lets you organize your tests in a readable way and print comprehensive reports."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    if (1 !== 1) {\n      throw new Error();\n    }\n  })\n\n  it('should not be equal to 2.', () => {\n    if (1 === 2) {\n      throw new Error();\n    }\n  });\n\n})\n")),(0,s.kt)("p",null,"Running this file with mocha gives you the below report:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Test report",src:n(9710).Z,width:"494",height:"224"})),(0,s.kt)("h2",{id:"the-assert-nodejs-module"},"The ",(0,s.kt)("inlineCode",{parentName:"h2"},"assert")," Node.js module"),(0,s.kt)("p",null,"In addition to the Mocha framework, you can use the Node.js built-in ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html"},"assert")," module. It provides some useful functions such as ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert_ok_value_message"},"ok"),", ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message"},"strictEqual")," or ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message"},"deepStrictEqual")," to make your tests more readable and concise."),(0,s.kt)("p",null,"The previous code can be refactored as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { strictEqual } from 'assert';\n\ndescribe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    strictEqual(1, 1);\n  })\n\n  it('should not be equal to 2.', () => {\n    strictEqual(1, 2);\n  });\n\n})\n")))}d.isMDXComponent=!0},9710:function(e,t,n){t.Z=n.p+"assets/images/introduction-report-ec779378236fb937b330af576a59e2ca.png"}}]);