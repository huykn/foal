"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1589],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7462),a=t(7294),o=t(2389),s=t(9548),i=t(6010),l="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,s.lx)(f,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.UB)(),y=g.tabGroupChoices,w=g.setTabGroupChoices,S=(0,a.useState)(b),T=S[0],N=S[1],C=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=y[m];null!=R&&R!==T&&f.some((function(e){return e.value===R}))&&N(R)}var P=function(e){var n=e.currentTarget,t=C.indexOf(n),r=f[t].value;r!==T&&(x(n),N(r),null!=m&&w(m,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;t=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},h)},f.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function u(e){var n=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},3807:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=t(9877),i=t(8215),l=["components"],c={title:"Protecci\xf3n CSRF"},u=void 0,p={unversionedId:"security/csrf-protection",id:"security/csrf-protection",title:"Protecci\xf3n CSRF",description:"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/security/csrf-protection.md",sourceDirName:"security",slug:"/security/csrf-protection",permalink:"/es/docs/security/csrf-protection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/security/csrf-protection.md",tags:[],version:"current",frontMatter:{title:"Protecci\xf3n CSRF"},sidebar:"someSidebar",previous:{title:"Cabeceras HTTP de Protecci\xf3n",permalink:"/es/docs/security/http-headers-protection"},next:{title:"Protecci\xf3n XSS",permalink:"/es/docs/security/xss-protection"}},d=[{value:"Defense Principle",id:"defense-principle",children:[{value:"Authentication with Session Tokens",id:"authentication-with-session-tokens",children:[],level:3},{value:"Authentication with JSON Web Tokens",id:"authentication-with-json-web-tokens",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[{value:"Single-Page Applications (session tokens)",id:"single-page-applications-session-tokens",children:[{value:"Server",id:"server",children:[],level:4},{value:"Client",id:"client",children:[],level:4}],level:3},{value:"Single-Page Applications (JWTs)",id:"single-page-applications-jwts",children:[{value:"Server",id:"server-1",children:[],level:4},{value:"Client",id:"client-1",children:[],level:4}],level:3},{value:"Regular Web Applications (session tokens)",id:"regular-web-applications-session-tokens",children:[{value:"Server",id:"server-2",children:[],level:4},{value:"Client",id:"client-2",children:[],level:4}],level:3}],level:2},{value:"Advanced",id:"advanced",children:[{value:"Increase stateless protection (JWT)",id:"increase-stateless-protection-jwt",children:[],level:3},{value:"Custom CSRF cookie name",id:"custom-csrf-cookie-name",children:[],level:3},{value:"Disable CSRF protection on a specific route",id:"disable-csrf-protection-on-a-specific-route",children:[],level:3}],level:2}],m={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Source: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md"},"OWASP")))),(0,o.kt)("h2",{id:"defense-principle"},"Defense Principle"),(0,o.kt)("p",null,"FoalTS combines two defenses to protect your application against a CSRF attack. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"SameSite")," cookie directive and a token-based technique to have in-depth protection."),(0,o.kt)("p",null,"When enabled, authentication cookies have their ",(0,o.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute set to ",(0,o.kt)("inlineCode",{parentName:"p"},"lax")," in order to prevent third-party websites from sending authenticated requests to your server. When they make a POST, PUT, PATCH or DELETE request to your application, the authentication cookie is not sent. As of August 2020, this protection is supported by 92% of modern browsers."),(0,o.kt)("p",null,"In addition, the framework provides token-based mitigation that works with either state (session tokens) or stateless (JWT). The client can read the ",(0,o.kt)("em",{parentName:"p"},"CSRF token")," either from the HTML page (using a template) or from the ",(0,o.kt)("inlineCode",{parentName:"p"},"XSRF-Token")," cookie. Then, the token must be included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header, the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-CSRF-Token")," header or in the body with the ",(0,o.kt)("inlineCode",{parentName:"p"},"_csrf")," field in any POST, PUT, PATCH or DELETE request sent to the server (see examples)."),(0,o.kt)("h3",{id:"authentication-with-session-tokens"},"Authentication with Session Tokens"),(0,o.kt)(s.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  session:\n    csrf:\n      enabled: true\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    session: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),(0,o.kt)("h3",{id:"authentication-with-json-web-tokens"},"Authentication with JSON Web Tokens"),(0,o.kt)(s.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    csrf:\n      enabled: true\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"single-page-applications-session-tokens"},"Single-Page Applications (session tokens)"),(0,o.kt)("h4",{id:"server"},"Server"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  createSession,\n  dependency,\n  HttpResponseNoContent,\n  HttpResponseUnauthorized,\n  Post,\n  Store,\n  UseSessions,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  @UseSessions({\n    cookie: true,\n    required: false,\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = ctx.session || await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseNoContent();\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseCreated, UseSessions } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  required: true,\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,o.kt)("h4",{id:"client"},"Client"),(0,o.kt)("p",null,"The client must retrieve the ",(0,o.kt)("em",{parentName:"p"},"CSRF token")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"XSRF-Token")," cookie and then send it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header, the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-CSRF-Token")," header or in the request body with the ",(0,o.kt)("inlineCode",{parentName:"p"},"_csrf")," field."),(0,o.kt)("p",null,"Most modern request libraries already handle it automatically for you using the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header."),(0,o.kt)(s.Z,{defaultValue:"angular",values:[{label:"Angular HttpClient",value:"angular"},{label:"Axios",value:"axios"},{label:"Native JavaScript",value:"native"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("p",null,"No additional configuration required.")),(0,o.kt)(i.Z,{value:"axios",mdxType:"TabItem"},(0,o.kt)("p",null,"No additional configuration required.")),(0,o.kt)(i.Z,{value:"native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async function postData(url = '', data = {}) {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      // Assuming you use this library: https://www.npmjs.com/package/js-cookie.\n      'X-XSRF-TOKEN': Cookies.get('XSRF-Token')\n    },\n    body: JSON.stringify(data),\n  });\n  return response.json();\n}\n")))),(0,o.kt)("h3",{id:"single-page-applications-jwts"},"Single-Page Applications (JWTs)"),(0,o.kt)("h4",{id:"server-1"},"Server"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  HttpResponseNoContent,\n  HttpResponseUnauthorized,\n  Post,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\nimport { getSecretOrPrivateKey, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n    async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const token: string = await new Promise((resolve, reject) => {\n      sign(\n        { email: user.email },\n        getSecretOrPrivateKey(),\n        { subject: user.id.toString() },\n        (err, encoded) => {\n          if (err) {\n            return reject(err);\n          }\n          resolve(encoded);\n        }\n      );\n    });\n\n    const response = new HttpResponseNoContent();\n    // Do not forget the \"await\" keyword.\n    await setAuthCookie(response, token);\n    return response;\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseCreated } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({\n  cookie: true,\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,o.kt)("h4",{id:"client-1"},"Client"),(0,o.kt)("p",null,"Same as session tokens."),(0,o.kt)("h3",{id:"regular-web-applications-session-tokens"},"Regular Web Applications (session tokens)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Regular Web Applications")," use ",(0,o.kt)("em",{parentName:"p"},"Server-Side Rendering")," to generate their HTML pages. "),(0,o.kt)("h4",{id:"server-2"},"Server"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  createSession,\n  dependency,\n  HttpResponseRedirect,\n  Post,\n  Store,\n  UseSessions,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  @UseSessions({\n    cookie: true,\n    required: false,\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    ctx.session = ctx.session || await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseRedirect('/products');\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"view.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  dependency,\n  Get,\n  render,\n  Session,\n  Store,\n  UseSessions,\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nexport class ViewController {\n  @dependency\n  store: Store;\n\n  @Get('/login')\n  async login(ctx: Context) {\n    return render('./templates/login.html');\n  }\n\n  @Get('/products')\n  @UseSessions({\n    cookie: true,\n    required: true,\n    redirectTo: '/login'\n  })\n  async index(ctx: Context<User, Session>) {\n    return render(\n      './templates/products.html',\n      { csrfToken: ctx.session.get('csrfToken') },\n    );\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseRedirect, UseSessions } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  required: true,\n  redirectTo: '/login'\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseRedirect('/products');\n  }\n}\n")),(0,o.kt)("h4",{id:"client-2"},"Client"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"login.html")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>Log in</title>\n  </head>\n  <body>\n    <form method="POST" action="/login">\n      <input name="email" type="email" >\n      <input name="password" type="password" >\n      <button type="submit">Log in</button>\n    </form>\n  </body>\n</html>\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"products.html")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>Add a product</title>\n  </head>\n  <body>\n    <form method="POST" action="/api/products">\n      <input style="display: none" name="_csrf" value="{{ csrfToken }}">\n      <input name="name" type="text">\n      <button type="submit">Add product</button>\n    </form>\n  </body>\n</html>\n')),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("h3",{id:"increase-stateless-protection-jwt"},"Increase stateless protection (JWT)"),(0,o.kt)("p",null,"In FoalTS, stateless CSRF protection is based on the double submit technique. CSRF tokens are generated randomly and signed with the JWT secret or RSA private key."),(0,o.kt)("p",null,"To increase the effectiveness of protection against sub-domain attacks, your auth JWT must include a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," per user (usually the user ID) and an expiration date. The framework will then use these to create and sign the ",(0,o.kt)("em",{parentName:"p"},"CSRF token"),"."),(0,o.kt)("h3",{id:"custom-csrf-cookie-name"},"Custom CSRF cookie name"),(0,o.kt)("p",null,"The name of the CSRF cookie can be changed in the configuration."),(0,o.kt)(s.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    csrf:\n      enabled: true\n      cookie:\n        name: CSRF-Token # Default: XSRF-TOKEN\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true,\n        "cookie": {\n          "name": "CSRF-Token"\n        }\n      }\n    }\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true,\n        cookie: {\n          name: "CSRF-Token"\n        }\n      }\n    }\n  }\n}\n')))),(0,o.kt)("h3",{id:"disable-csrf-protection-on-a-specific-route"},"Disable CSRF protection on a specific route"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"This feature is available from version 2.1 onwards."))),(0,o.kt)("p",null,"In case the CSRF protection is enabled globally and you want to disable it for a specific route, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"csrf")," option for that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseOK, Post, UseSessions } from '@foal/core';\n\nexport class ApiController {\n  @Post('/foo')\n  @UseSessions({ cookie: true })\n  foo() {\n    // This method has the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n\n  @Post('/bar')\n  @UseSessions({ cookie: true, csrf: false })\n  bar() {\n    // This method does not have the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n}\n\n")))}h.isMDXComponent=!0}}]);