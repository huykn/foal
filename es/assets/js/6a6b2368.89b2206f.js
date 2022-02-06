"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8578],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1448:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={title:"Limitar las Solicitudes Repetidas"},p=void 0,c={unversionedId:"cookbook/limit-repeated-requests",id:"cookbook/limit-repeated-requests",title:"Limitar las Solicitudes Repetidas",description:"To avoid brute force attacks or overloading your application, you can set up a rate limiter to limit the number of requests a user can send to your application.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cookbook/limit-repeated-requests.md",sourceDirName:"cookbook",slug:"/cookbook/limit-repeated-requests",permalink:"/es/docs/cookbook/limit-repeated-requests",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/cookbook/limit-repeated-requests.md",tags:[],version:"current",frontMatter:{title:"Limitar las Solicitudes Repetidas"},sidebar:"someSidebar",previous:{title:"Root Imports",permalink:"/es/docs/cookbook/root-imports"},next:{title:"Lista de Comprobaci\xf3n",permalink:"/es/docs/deployment-and-environments/checklist"}},l=[{value:"Basic Example",id:"basic-example",children:[],level:2},{value:"Usage with CORS",id:"usage-with-cors",children:[],level:2}],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To avoid brute force attacks or overloading your application, you can set up a rate limiter to limit the number of requests a user can send to your application."),(0,s.kt)("h2",{id:"basic-example"},"Basic Example"),(0,s.kt)("p",null,"Foal does not provide a built-in utility for this, but you can use the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nfriedly/express-rate-limit"},"express-rate-limit")," package to handle it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install express express-rate-limit\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/index.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\nimport * as http from 'http';\n\n// 3p\nimport { Config, createApp, displayServerURL } from '@foal/core';\nimport * as express from 'express';\nimport * as rateLimit from 'express-rate-limit';\n\n// App\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  const expressApp = express();\n  expressApp.use(rateLimit({\n    // Limit each IP to 100 requests per windowMs\n    max: 100,\n    // 15 minutes\n    windowMs: 15 * 60 * 1000,\n    handler (req, res, next) {\n      // Set default FoalTS headers to the response of limited requests\n      res.removeHeader('X-Powered-By');\n      res.setHeader('X-Content-Type-Options', 'nosniff');\n      res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n      res.setHeader('X-XSS-Protection', '1; mode=block');\n      res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n      \n      // Send the response with the default statusCode and message from rateLimit\n      res.status(this.statusCode || 429).send(this.message);\n    }\n  }));\n    \n  const app = await createApp(AppController, { expressInstance: expressApp });\n    \n  const httpServer = http.createServer(app);\n  const port = Config.get('port', 'number', 3001);\n  httpServer.listen(port, () => displayServerURL(port));\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); });\n")),(0,s.kt)("h2",{id:"usage-with-cors"},"Usage with CORS"),(0,s.kt)("p",null,"In case your application needs to allow CORS requests, you can also update your ",(0,s.kt)("inlineCode",{parentName:"p"},"index.ts")," as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"expressApp.use(rateLimit({\n  max: 100,\n  windowMs: 15 * 60 * 1000,\n  handler (req, res, next) {\n    res.removeHeader('X-Powered-By');\n    res.setHeader('X-Content-Type-Options', 'nosniff');\n    res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n    res.setHeader('X-XSS-Protection', '1; mode=block');\n    res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n\n    // Set CORS headers\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    if (req.method === 'OPTIONS') {\n      // You may want to allow other headers depending on what you need (Authorization, etc).\n      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n      res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    }\n\n    res.status(this.statusCode || 429).send(this.message);\n  }\n}));\n")))}d.isMDXComponent=!0}}]);