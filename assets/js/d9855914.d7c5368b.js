"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3265],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||a;return n?o.createElement(d,s(s({ref:t},c),{},{components:n})):o.createElement(d,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"CSRF Protection"},l=void 0,p={unversionedId:"security/csrf-protection",id:"version-1.x/security/csrf-protection",title:"CSRF Protection",description:"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated.",source:"@site/versioned_docs/version-1.x/security/csrf-protection.md",sourceDirName:"security",slug:"/security/csrf-protection",permalink:"/docs/1.x/security/csrf-protection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/security/csrf-protection.md",tags:[],version:"1.x",frontMatter:{title:"CSRF Protection"},sidebar:"someSidebar",previous:{title:"HTTP Headers Protection",permalink:"/docs/1.x/security/http-headers-protection"},next:{title:"XSS Protection",permalink:"/docs/1.x/security/xss-protection"}},c=[{value:"SameSite Cookie Attribute",id:"samesite-cookie-attribute",children:[{value:"Authentication with Session Tokens",id:"authentication-with-session-tokens",children:[],level:3},{value:"Authentication with JSON Web Tokens",id:"authentication-with-json-web-tokens",children:[],level:3}],level:2},{value:"Using CSRF Tokens",id:"using-csrf-tokens",children:[{value:"Regular Web Applications",id:"regular-web-applications",children:[{value:"Stateful CSRF token (Session-based)",id:"stateful-csrf-token-session-based",children:[],level:4},{value:"Stateless CSRF token (Double Submit Cookie Technique)",id:"stateless-csrf-token-double-submit-cookie-technique",children:[],level:4}],level:3},{value:"SPA + API",id:"spa--api",children:[{value:"Stateful CSRF token (Session-based)",id:"stateful-csrf-token-session-based-1",children:[],level:4},{value:"Stateless CSRF token (Double Submit Cookie Technique)",id:"stateless-csrf-token-double-submit-cookie-technique-1",children:[],level:4}],level:3},{value:"Disable the CSRF protection",id:"disable-the-csrf-protection",children:[],level:3},{value:"Advanced",id:"advanced",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Source: ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md"},"OWASP")))),(0,a.kt)("p",null,"There are several ways to defend yourself against a CSRF attack. The better approach is to use both the ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite")," cookie directive and a token-based technique to have an in-depth protection."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: CSRF protection only makes sense if your authentication system is based on cookies. This is why there is no example for "),"Mobile+API",(0,a.kt)("em",{parentName:"p"}," applications.")),(0,a.kt)("h2",{id:"samesite-cookie-attribute"},"SameSite Cookie Attribute"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute is a new cookie directive to mitigate the risk of CSRF attacks. As of July 2019, SameSite attribute is on browsers used by 86,57% of Internet users."),(0,a.kt)("h3",{id:"authentication-with-session-tokens"},"Authentication with Session Tokens"),(0,a.kt)("p",null,"If you use session tokens with the ",(0,a.kt)("inlineCode",{parentName:"p"},"setSessionCookie"),", you can directly define the cookie directives in the configuration."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with config/default.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "cookie": {\n        "sameSite": "lax"\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  session:\n    cookie:\n      sameSite: lax\n")),(0,a.kt)("h3",{id:"authentication-with-json-web-tokens"},"Authentication with JSON Web Tokens"),(0,a.kt)("p",null,"If you use JSON Web Tokens, then you have to specify the directive manually when sending the token to the browser."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"return new HttpResponseOK()\n  .setCookie('auth', token, {\n    // ...\n    sameSite: 'lax'\n  })\n")),(0,a.kt)("h2",{id:"using-csrf-tokens"},"Using CSRF Tokens"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @foal/csrf\n")),(0,a.kt)("p",null,"In addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite")," directive it is strongly recommended to use a token-based mitigation technique to provide a robust defense."),(0,a.kt)("p",null,"Here is the principle:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The server generates a token (stateless or stateful) and sends it to the browser (in the HTML page or in a separate cookie). An attacker performing a CSRF attack is not able to guess or read this token."),(0,a.kt)("li",{parentName:"ol"},'In each subsequent POST, PUT, PATH or DELETE request, the client must include this token in a specific header, in the body of the request or in the URL parameters to prove the "origin" of the request.'),(0,a.kt)("li",{parentName:"ol"},"If the CSRF token is not present or is incorrect, the server returns an error 403 - FORBIDDEN with the message ",(0,a.kt)("inlineCode",{parentName:"li"},"Bad csrf token."),".")),(0,a.kt)("p",null,"FoalTS token-based protection provides a hook and a function to set up the defense."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getCsrfToken")," generates or reads the CSRF token."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@CsrfTokenRequired")," verifies the CSRF token when receiving requests and returns a 403 error if it is missing or incorrect.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@CsrfTokenRequired")," expects the CSRF token to be include in the request in either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the request body with the name ",(0,a.kt)("inlineCode",{parentName:"li"},"_csrf"),","),(0,a.kt)("li",{parentName:"ul"},"the request query with the name ",(0,a.kt)("inlineCode",{parentName:"li"},"_csrf"),","),(0,a.kt)("li",{parentName:"ul"},"or in one of these headers: ",(0,a.kt)("inlineCode",{parentName:"li"},"CSRF-Token"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"XSRF-Token"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"X-CSRF-Token")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"X-XSRF-Token"),".")),(0,a.kt)("h3",{id:"regular-web-applications"},"Regular Web Applications"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Regular Web Applications")," use ",(0,a.kt)("em",{parentName:"p"},"Server-Side Rendering")," to generate their HTML pages. "),(0,a.kt)("h4",{id:"stateful-csrf-token-session-based"},"Stateful CSRF token (Session-based)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate the token on login")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseOK, Post, setSessionCookie } from '@foal/core';\n\nclass AuthController {\n  // ...\n\n  @Post('/login')\n  async login() {\n    // ...\n    const session = await this.store.createAndSaveSessionFromUser(\n      user,\n      // Generate the CSRF token and keep it in the session\n      { csrfToken: true }\n    );\n\n    const response = new HttpResponseOK();\n    setSessionCookie(response, session.getToken());\n    return response;\n  }\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Include the token in each rendered page.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, TokenRequired, render } from '@foal/core';\nimport { TypoORMStore } from '@foal/typeorm';\nimport { getCsrfToken } from '@foal/csrf';\n \n@TokenRequired({\n  cookie: true,\n  redirectTo: '/login',\n  store: TypeORMStore, // Or another store: RedisStore, MongoDBStore, etc.\n})\nclass PageController {\n  @Get('/home')\n  async home(ctx: Context) {\n    return render(\n      './templates/home.html',\n      // Retreive the token from the session\n      // and include it in the rendered page\n      { csrfToken: await getCsrfToken(ctx.session) }\n    );\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Home.html (example with a form)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head></head>\n  <body>\n    <form action="POST">\n      <input style="display: none" name="_csrf" value="{{ csrfToken }}">\n      \x3c!--\n        OR if you use EJS:\n        <input style="display: none" name="_csrf" value="<%= csrfToken %>">\n      --\x3e\n      <input name="foobar">\n      <button type="submit">Submit</button>\n    </form>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"home.html (example with JavaScript)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <meta name="csrf-token" content="{{ csrfToken }}">\n    \x3c!--\n      OR if you use EJS:\n      <meta name="csrf-token" content="<%= csrfToken %>">\n    --\x3e\n  </head>\n  <body>\n    ...\n    <script type="text/javascript">\n      var csrf_token = document\n        .querySelector("meta[name=\'csrf-token\']")\n        .getAttribute("content");\n      // Add the token in a header (ex: CSRF-TOKEN) when making request\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@TokenRequired({\n  cookie: true,\n  store: TypeORMStore, // Or another store: RedisStore, MongoDBStore, etc.\n})\n@CsrfTokenRequired()\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,a.kt)("h4",{id:"stateless-csrf-token-double-submit-cookie-technique"},"Stateless CSRF token (Double Submit Cookie Technique)"),(0,a.kt)("p",null,"If you want to use stateless CSRF tokens, you need to provide a base64-encoded secret in either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a configuration file"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  csrf:\n    secret: xxx\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"or in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"SETTINGS_CSRF_SECRET=xxx\n")))),(0,a.kt)("p",null,"You can generate such a secret with the CLI command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate a token and send it in a cookie when rendering a page.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponseOK } from '@foal/core';\nimport { getCsrfToken, setCsrfCookie } from '@foal/csrf';\n\nclass PageController {\n  @Get('/home')\n  async home(ctx: Context) {\n    // Normally in an HTML template\n    const response = new HttpResponseOK();\n    // Include a random CSRF token in the cookie\n    setCsrfCookie(response, await getCsrfToken());\n    return response;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"home.html (example with JavaScript)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n  </head>\n  <body>\n    ...\n    <script type="text/javascript">\n      var csrf_token = // use a library to get the cookie value from document.cookie\n      // Add the token in a header (ex: CSRF-TOKEN) when making request\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseCreated, Post } from '@foal/core';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@CsrfTokenRequired({ doubleSubmitCookie: true })\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,a.kt)("h3",{id:"spa--api"},"SPA + API"),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"Single-Page Application + API")," architecture, the frontend application is static and the pages are rendered in the browser."),(0,a.kt)("p",null,"First set the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.csrf.cookie.maxAge")," to a very large number (for example one year)."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with config/default.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "csrf": {\n      "cookie": {\n        "maxAge": 31536000\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  csrf:\n    cookie:\n      maxAge: 31536000 # One year\n")),(0,a.kt)("h4",{id:"stateful-csrf-token-session-based-1"},"Stateful CSRF token (Session-based)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate the token and send it in a cookie on login.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nimport { getCsrfToken, setCsrfCookie } from '@foal/csrf';\n// ...\nclass AuthController {\n    // ...\n\n    @Post('/login')\n    async login() {\n      // ...\n      const session = await this.store.createAndSaveSessionFromUser(\n        user,\n        // Generate the CSRF token and keep it in the session\n        { csrfToken: true }\n      );\n\n      const response = new HttpResponseOK();\n      setSessionCookie(response, session.getToken());\n      // Retreive the token from the session\n      // and send it in a cookie\n      setCsrfCookie(response, await getCsrfToken(session));\n      return response;\n    }\n  }\n")),(0,a.kt)("p",null,"Your frontend application then must retreive the token from the cookie named ",(0,a.kt)("inlineCode",{parentName:"p"},"csrfToken")," and send it on each subsequent POST, PUT, PATCH or DELETE request (for example using the header ",(0,a.kt)("inlineCode",{parentName:"p"},"CSRF-Token"),")."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseCreated, Post, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@TokenRequired({\n  cookie: true,\n  store: TypeORMStore, // Or another store: RedisStore, MongoDBStore, etc.\n})\n@CsrfTokenRequired()\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,a.kt)("h4",{id:"stateless-csrf-token-double-submit-cookie-technique-1"},"Stateless CSRF token (Double Submit Cookie Technique)"),(0,a.kt)("p",null,"If you want to use stateless CSRF tokens, you need to provide a base64-encoded secret in either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a configuration file"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  csrf:\n    secret: xxx\n    cookie:\n      maxAge: 31536000 # One year\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"or in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"SETTINGS_CSRF_SECRET=xxx\n")))),(0,a.kt)("p",null,"You can generate such a secret with the CLI command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate a token and send it in a cookie on login.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseOK, Post } from '@foal/core';\nimport { getCsrfToken, setCsrfCookie } from '@foal/csrf';\n\nclass AuthController {\n  @Post('/login')\n  async login() {\n    const response = new HttpResponseOK();\n    setCsrfCookie(response, await getCsrfToken());\n    return response;\n  }\n}\n")),(0,a.kt)("p",null,"Your frontend application then must retreive the token from the cookie named ",(0,a.kt)("inlineCode",{parentName:"p"},"csrfToken")," and send it on each subsequent POST, PUT, PATCH or DELETE request (for example using the header ",(0,a.kt)("inlineCode",{parentName:"p"},"CSRF-Token"),")."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseCreated, Post } from '@foal/core';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@CsrfTokenRequired({ doubleSubmitCookie: true })\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,a.kt)("h3",{id:"disable-the-csrf-protection"},"Disable the CSRF protection"),(0,a.kt)("p",null,"The CSRF hook ",(0,a.kt)("inlineCode",{parentName:"p"},"@CsrfTokenRequired")," can be disabled on a specific environment using the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.csrf.enabled"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with ",(0,a.kt)("inlineCode",{parentName:"em"},"config/test.json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "csrf": {\n      "enabled": false\n    }\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with ",(0,a.kt)("inlineCode",{parentName:"em"},"config/test.yml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  csrf:\n    enabled: false\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with environment variable")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SETTINGS_CSRF_ENABLED=false\n")),(0,a.kt)("h3",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"The directives of the cookie written by ",(0,a.kt)("inlineCode",{parentName:"p"},"setCsrfCookie")," can be override in the configuration."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  csrf:\n    cookie:\n      name: my-custom-name\n      domain: example.com\n      path: /foo # default: /\n      sameSite: lax\n      secure: true\n      maxAge: 10000\n")))}m.isMDXComponent=!0}}]);