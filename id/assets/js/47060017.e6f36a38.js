"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4371],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2583:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={title:"Password Management",sidebar_label:"Passwords"},c=void 0,l={unversionedId:"authentication-and-access-control/password-management",id:"authentication-and-access-control/password-management",title:"Password Management",description:"Every application must store passwords using a cryptographic technique. FoalTS provides two functions to hash and verify passwords.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/authentication-and-access-control/password-management.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/password-management",permalink:"/id/docs/authentication-and-access-control/password-management",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/authentication-and-access-control/password-management.md",tags:[],version:"current",frontMatter:{title:"Password Management",sidebar_label:"Passwords"},sidebar:"someSidebar",previous:{title:"User Class & create-user Script",permalink:"/id/docs/authentication-and-access-control/user-class"},next:{title:"Session Tokens (authentication)",permalink:"/id/docs/authentication-and-access-control/session-tokens"}},p=[{value:"Hash and Salt Passwords",id:"hash-and-salt-passwords",children:[],level:2},{value:"Verify Passwords",id:"verify-passwords",children:[],level:2},{value:"Forbid Overly Common Passwords",id:"forbid-overly-common-passwords",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Every application must store passwords using a cryptographic technique. FoalTS provides two functions to hash and verify passwords."),(0,s.kt)("h2",{id:"hash-and-salt-passwords"},"Hash and Salt Passwords"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"hashPassword")," utility uses the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PBKDF2"},"PBKDF2")," algorithm with a SHA256 hash. It takes as parameters the password in plain text and an optional ",(0,s.kt)("inlineCode",{parentName:"p"},"options")," object. It returns a promise which value is a password hash."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The function generates a unique cryptographically-strong random salt for each password. This salt is returned by the function beside the password hash.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const passwordHash = await hashPassword(plainTextPassword);\n")),(0,s.kt)("h2",{id:"verify-passwords"},"Verify Passwords"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"verifyPassword")," takes three arguments:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the password to check in plain text,"),(0,s.kt)("li",{parentName:"ul"},"and the password hash (usually fetched from the database).")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const isEqual = await verifyPassword(plainTextPassword, passwordHash);\n")),(0,s.kt)("h2",{id:"forbid-overly-common-passwords"},"Forbid Overly Common Passwords"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install @foal/password\n")),(0,s.kt)("p",null,"To prevent users from using very weak passwords such as ",(0,s.kt)("inlineCode",{parentName:"p"},"123456")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"password"),", you can call the ",(0,s.kt)("inlineCode",{parentName:"p"},"isCommon")," function. This utility checks if the given password is part of the 10000 most common passwords listed ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-10000.txt"},"here"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const isPasswordTooCommon = await isCommon(password);\n")))}u.isMDXComponent=!0}}]);