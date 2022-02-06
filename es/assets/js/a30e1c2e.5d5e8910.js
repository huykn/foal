"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[758],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8061:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"Generar tokens"},c=void 0,l={unversionedId:"common/generate-tokens",id:"common/generate-tokens",title:"Generar tokens",description:"In many situations, we need to generate tokens and then verify them (for example in the flow of a password reset). This document shows how to do so with FoalTS.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/common/generate-tokens.md",sourceDirName:"common",slug:"/common/generate-tokens",permalink:"/es/docs/common/generate-tokens",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/generate-tokens.md",tags:[],version:"current",frontMatter:{title:"Generar tokens"},sidebar:"someSidebar",previous:{title:"Logging & Depuraci\xf3n",permalink:"/es/docs/common/logging-and-debugging"},next:{title:"Conversiones",permalink:"/es/docs/common/conversions"}},u=[{value:"Unsigned Tokens (simple case)",id:"unsigned-tokens-simple-case",children:[],level:2},{value:"Signed Tokens",id:"signed-tokens",children:[],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In many situations, we need to generate tokens and then verify them (for example in the flow of a password reset). This document shows how to do so with FoalTS."),(0,a.kt)("h2",{id:"unsigned-tokens-simple-case"},"Unsigned Tokens (simple case)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"generateToken")," function generates a cryptographically secure random token encoded in base64url (128 bits)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { generateToken } from '@foal/core';\n\nconst token = await generateToken();\n")),(0,a.kt)("h2",{id:"signed-tokens"},"Signed Tokens"),(0,a.kt)("p",null,"You can also generate a token using a secret. The secret is used to ",(0,a.kt)("em",{parentName:"p"},"sign")," the token to provide extra security. It must be encoded in base64. You can generate one with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Generate a signed token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { generateSignedToken } from '@foal/core';\n\nconst token = await generateSignedToken(secret);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verify and read a signed token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { verifySignedToken } from '@foal/core';\n\nconst signedTokenToVerify = 'xxx.yyy';\nconst result = await verifySignedToken(signedTokenToVerify, secret);\nif (result === false) {\n  console.log('incorrect signature');\n} else {\n  console.log('The token is ', result);\n}\n")))}m.isMDXComponent=!0}}]);