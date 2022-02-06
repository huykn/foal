"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1214],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(7294),i=n(2389),o=n(9548),l=n(6010),s="tabItem_LplD";function p(e){var t,n,i,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),b=v.tabGroupChoices,y=v.setTabGroupChoices,w=(0,r.useState)(N),T=w[0],C=w[1],I=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=b[m];null!=O&&O!==T&&g.some((function(e){return e.value===O}))&&C(O)}var G=function(e){var t=e.currentTarget,n=I.indexOf(t),a=g[n].value;a!==T&&(x(t),C(a),null!=m&&y(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:E,onFocus:G,onClick:G},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7653:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9877),l=n(8215),s=["components"],p={title:"Autenticaci\xf3n Social"},u=void 0,c={unversionedId:"authentication-and-access-control/social-auth",id:"authentication-and-access-control/social-auth",title:"Autenticaci\xf3n Social",description:"In addition to traditional password authentication, Foal provides services to authenticate users through social providers. The framework officially supports the following:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/authentication-and-access-control/social-auth.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/social-auth",permalink:"/es/docs/authentication-and-access-control/social-auth",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/authentication-and-access-control/social-auth.md",tags:[],version:"current",frontMatter:{title:"Autenticaci\xf3n Social"},sidebar:"someSidebar",previous:{title:"JSON Web Tokens (autenticaci\xf3n)",permalink:"/es/docs/authentication-and-access-control/jwt"},next:{title:"Administradores & Roles",permalink:"/es/docs/authentication-and-access-control/administrators-and-roles"}},d=[{value:"Get Started",id:"get-started",children:[{value:"General overview",id:"general-overview",children:[],level:3},{value:"Registering an application",id:"registering-an-application",children:[],level:3},{value:"Installation and configuration",id:"installation-and-configuration",children:[],level:3},{value:"Adding controllers",id:"adding-controllers",children:[],level:3}],level:2},{value:"Techniques",id:"techniques",children:[{value:"Usage with sessions",id:"usage-with-sessions",children:[],level:3},{value:"Usage with JWT",id:"usage-with-jwt",children:[],level:3}],level:2},{value:"Custom Provider",id:"custom-provider",children:[],level:2},{value:"Official Providers",id:"official-providers",children:[{value:"Google",id:"google",children:[{value:"Register an OAuth application",id:"register-an-oauth-application",children:[],level:4},{value:"Redirection parameters",id:"redirection-parameters",children:[],level:4}],level:3},{value:"Facebook",id:"facebook",children:[{value:"Register an OAuth application",id:"register-an-oauth-application-1",children:[],level:4},{value:"Redirection parameters",id:"redirection-parameters-1",children:[],level:4},{value:"User info parameters",id:"user-info-parameters",children:[],level:4}],level:3},{value:"Github",id:"github",children:[{value:"Register an OAuth application",id:"register-an-oauth-application-2",children:[],level:4},{value:"Redirection parameters",id:"redirection-parameters-2",children:[],level:4}],level:3},{value:"LinkedIn",id:"linkedin",children:[{value:"Register an OAuth application",id:"register-an-oauth-application-3",children:[],level:4},{value:"User info parameters",id:"user-info-parameters-1",children:[],level:4}],level:3}],level:2},{value:"Community Providers",id:"community-providers",children:[],level:2},{value:"Common Errors",id:"common-errors",children:[],level:2},{value:"Security",id:"security",children:[{value:"HTTPS",id:"https",children:[],level:3}],level:2}],m={toc:d};function h(e){var t=e.components,p=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In addition to traditional password authentication, Foal provides services to authenticate users through social providers. The framework officially supports the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google"),(0,i.kt)("li",{parentName:"ul"},"Facebook"),(0,i.kt)("li",{parentName:"ul"},"Github"),(0,i.kt)("li",{parentName:"ul"},"Linkedin")),(0,i.kt)("p",null,"If your provider is not listed here but supports OAuth 2.0, then you can still ",(0,i.kt)("a",{parentName:"p",href:"#custom-provider"},"extend the ",(0,i.kt)("inlineCode",{parentName:"a"},"AbstractProvider"))," class to integrate it or use a ",(0,i.kt)("a",{parentName:"p",href:"#community-providers"},"community provider")," below."),(0,i.kt)("h2",{id:"get-started"},"Get Started"),(0,i.kt)("h3",{id:"general-overview"},"General overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Social auth schema",src:n(8698).Z,width:"3872",height:"2608"})),(0,i.kt)("p",null,"The authentication process works as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The user clicks the ",(0,i.kt)("em",{parentName:"li"},"Log In with xxx")," button in the browser and the client sends a request to the server."),(0,i.kt)("li",{parentName:"ol"},"The server redirects the user to the consent page where they are asked to give permission to log in with their account and/or give access to some of their personal information."),(0,i.kt)("li",{parentName:"ol"},"The user approves and the consent page redirects the user with an authorization code to the ",(0,i.kt)("em",{parentName:"li"},"redirect")," URI specified in the configuration."),(0,i.kt)("li",{parentName:"ol"},"Your application then makes one or more requests to the OAuth servers to obtain an access token and information about the user."),(0,i.kt)("li",{parentName:"ol"},"The social provider servers return this information."),(0,i.kt)("li",{parentName:"ol"},"Finally, your server-side application logs the user in based on this information and redirects the user when done.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"This explanation of OAuth 2 is intentionally simplified. It highlights only the parts of the protocol that are necessary to successfully implement social authentication with Foal. But the framework also performs other tasks under the hood to fully comply with the OAuth 2.0 protocol and it adds security protection against CSRF attacks."))),(0,i.kt)("h3",{id:"registering-an-application"},"Registering an application"),(0,i.kt)("p",null,"To set up social authentication with Foal, you first need to register your application to the social provider you chose (Google, Facebook, etc). This can be done through its website."),(0,i.kt)("p",null,"Usually your are required to provide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("em",{parentName:"li"},"application name"),","),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"logo"),","),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("em",{parentName:"li"},"redirect URIs")," where the social provider should redirect the users once they give their consent on the provider page (ex: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3001/signin/google/callback"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"https://example.com/signin/google/callback"),").")),(0,i.kt)("p",null,"Once done, you should receive:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"client ID")," that is public and identifies your application,"),(0,i.kt)("li",{parentName:"ul"},"and a ",(0,i.kt)("em",{parentName:"li"},"client secret")," that must not be revealed and can therefore only be used on the backend side. It is used when your server communicates with the OAuth provider's servers.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You must obtain a ",(0,i.kt)("em",{parentName:"p"},"client secret"),". If you do not have one, it means you probably chose the wrong option at some point.")),(0,i.kt)("h3",{id:"installation-and-configuration"},"Installation and configuration"),(0,i.kt)("p",null,"Once you have registered your application, install the appropriate package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/social\n")),(0,i.kt)("p",null,"Then, you will need to provide your client ID, client secret and your redirect URIs to Foal. This can be done through the usual ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/architecture/configuration"},"configuration files"),"."),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  social:\n    google:\n      clientId: 'xxx'\n      clientSecret: 'env(SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET)'\n      redirectUri: 'http://localhost:3001/signin/google/callback'\n"))),(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "social": {\n      "google": {\n        "clientId": "xxx",\n        "clientSecret": "env(SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET)",\n        "redirectUri": "http://localhost:3001/signin/google/callback"\n      }\n    }\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    social: {\n      google: {\n        clientId: 'xxx',\n        clientSecret: 'env(SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET)',\n        redirectUri: 'http://localhost:3001/signin/google/callback'\n      }\n    }\n  }\n}\n")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},".env")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET=yyy\n")),(0,i.kt)("h3",{id:"adding-controllers"},"Adding controllers"),(0,i.kt)("p",null,"The last step is to add a controller that will call methods of a ",(0,i.kt)("em",{parentName:"p"},"social service")," to handle authentication. The example below uses Google as provider."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Context, dependency, Get } from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    // Your \"Login In with Google\" button should point to this route.\n    // The user will be redirected to Google auth page.\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  async handleGoogleRedirection(ctx: Context) {\n    // Once the user gives their permission to log in with Google, the OAuth server\n    // will redirect the user to this route. This route must match the redirect URI.\n    const { userInfo, tokens } = await this.google.getUserInfo(ctx);\n\n    // Do something with the user information AND/OR the access token.\n    // If you only need the access token, you can call the \"getTokens\" method.\n\n    // The method usually ends with a HttpResponseRedirect object as returned value.\n  }\n\n}\n")),(0,i.kt)("p",null,"You can also override in the ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," method the scopes you want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return this.google.redirect({ scopes: [ 'email' ] });\n")),(0,i.kt)("p",null,"Additional parameters can passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserInfo")," methods depending on the provider."),(0,i.kt)("h2",{id:"techniques"},"Techniques"),(0,i.kt)("h3",{id:"usage-with-sessions"},"Usage with sessions"),(0,i.kt)("p",null,"This example shows how to manage authentication (login and registration) with sessions."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"user.entity.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n  Session,\n  Store,\n  UseSessions,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  store: Store;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  @UseSessions({\n    cookie: true,\n  })\n  async handleGoogleRedirection(ctx: Context<User, Session>) {\n    const { userInfo } = await this.google.getUserInfo<{ email: string }>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOne({ email: userInfo.email });\n\n    if (!user) {\n      // If the user has not already signed up, then add them to the database.\n      user = new User();\n      user.email = userInfo.email;\n      await user.save();\n    }\n\n    ctx.session.setUser(user);\n\n    return new HttpResponseRedirect('/');\n  }\n\n}\n")),(0,i.kt)("h3",{id:"usage-with-jwt"},"Usage with JWT"),(0,i.kt)("p",null,"This example shows how to manage authentication (login and registration) with JWT."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"user.entity.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\nimport { promisify } from 'util';\n\n// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\nimport { getSecretOrPrivateKey, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  async handleGoogleRedirection(ctx: Context) {\n    const { userInfo } = await this.google.getUserInfo<{ email: string }>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOne({ email: userInfo.email });\n\n    if (!user) {\n      // If the user has not already signed up, then add them to the database.\n      user = new User();\n      user.email = userInfo.email;\n      await user.save();\n    }\n\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    \n    const jwt = await promisify(sign as any)(\n      payload,\n      getSecretOrPrivateKey(),\n      { subject: user.id.toString() }\n    );\n\n    const response = new HttpResponseRedirect('/');\n    await setAuthCookie(response, jwt);\n    return response;\n  }\n\n}\n")),(0,i.kt)("h2",{id:"custom-provider"},"Custom Provider"),(0,i.kt)("p",null,"If your provider is not officially supported by Foal but supports the OAuth 2.0 protocol, you can still implement your own social service. All you need to do is to make it inherit from the ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractProvider")," class."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { AbstractProvider, SocialTokens } from '@foal/core';\n\nexport interface GithubAuthParameter {\n  // ...\n}\n\nexport interface GithubUserInfoParameter {\n  // ...\n}\n\nexport class GithubProvider extends AbstractProvider<GithubAuthParameter, GithubUserInfoParameter> {\n\n  protected configPaths = {\n    clientId: 'social.github.clientId',\n    clientSecret: 'social.github.clientSecret',\n    redirectUri: 'social.github.redirectUri',\n  };\n\n  protected authEndpoint = '...';\n  protected tokenEndpoint = '...';\n  protected userInfoEndpoint = '...'; // Optional. Depending on the provider.\n\n  protected defaultScopes: string[] = [ 'email' ]; // Optional\n\n  async getUserInfoFromTokens(tokens: SocialTokens, params?: GithubUserInfoParameter) {\n    // ...\n\n    // In case the server returns an error when requesting \n    // user information, you can throw a UserInfoError.\n  }\n\n} \n")),(0,i.kt)("h2",{id:"official-providers"},"Official Providers"),(0,i.kt)("h3",{id:"google"},"Google"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,i.kt)("th",{parentName:"tr",align:null},"Available scopes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GoogleProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"openid"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"profile"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://developers.google.com/identity/protocols/googlescopes"},"Google scopes"))))),(0,i.kt)("h4",{id:"register-an-oauth-application"},"Register an OAuth application"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"Google API Console")," to obtain a client ID and a client secret."),(0,i.kt)("h4",{id:"redirection-parameters"},"Redirection parameters"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"GoogleProvider")," accepts additional parameters. These parameters and their description are listed ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/OpenIDConnect#authenticationuriparameters"},"here")," and are all optional."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"this.google.redirect({ /* ... */ }, {\n  access_type: 'offline'\n})\n")),(0,i.kt)("h3",{id:"facebook"},"Facebook"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,i.kt)("th",{parentName:"tr",align:null},"Available scopes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FacebookProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://developers.facebook.com/docs/facebook-login/permissions/"},"Facebook permissions"))))),(0,i.kt)("h4",{id:"register-an-oauth-application-1"},"Register an OAuth application"),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/"},"Facebook's developer website")," to create an application and obtain a client ID and a client secret."),(0,i.kt)("h4",{id:"redirection-parameters-1"},"Redirection parameters"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FacebookProvider")," accepts an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_type")," parameter which is optional."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"this.facebook.redirect({ /* ... */ }, {\n  auth_type: 'rerequest'\n});\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"auth_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'rerequest'")),(0,i.kt)("td",{parentName:"tr",align:null},"If a user has already declined a permission, the Facebook Login Dialog box will no longer ask for this permission. The ",(0,i.kt)("inlineCode",{parentName:"td"},"auth_type")," parameter explicity tells Facebook to ask the user again for the denied permission.")))),(0,i.kt)("h4",{id:"user-info-parameters"},"User info parameters"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserInfo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserInfoFromTokens")," methods of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FacebookProvider")," accept an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," parameter which is optional."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const { userInfo } = await this.facebook.getUserInfo(ctx, {\n  fields: [ 'email' ]\n})\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fields")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},"List of fields that the returned user info object should contain. These fields may or may not be available depending on the permissions (",(0,i.kt)("inlineCode",{parentName:"td"},"scopes"),") that were requested with the ",(0,i.kt)("inlineCode",{parentName:"td"},"redirect")," method. Default: ",(0,i.kt)("inlineCode",{parentName:"td"},"['id', 'name', 'email']"),".")))),(0,i.kt)("h3",{id:"github"},"Github"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,i.kt)("th",{parentName:"tr",align:null},"Available scopes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GithubProvider")),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes"},"Github scopes"))))),(0,i.kt)("h4",{id:"register-an-oauth-application-2"},"Register an OAuth application"),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/applications/new"},"this page")," to create an application and obtain a client ID and a client secret."),(0,i.kt)("p",null,"Additional documentation on Github's redirect URLs can be found ",(0,i.kt)("a",{parentName:"p",href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#redirect-urls"},"here"),"."),(0,i.kt)("h4",{id:"redirection-parameters-2"},"Redirection parameters"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"GithubProvider")," accepts additional parameters. These parameters and their description are listed below and are all optional."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"this.github.redirect({ /* ... */ }, {\n  allow_signup: false\n})\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"login")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Suggests a specific account to use for signing in and authorizing the app.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"allow_signup")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether or not unauthenticated users will be offered an option to sign up for GitHub during the OAuth flow. The default is ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),". Use ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," in the case that a policy prohibits signups.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Source: ",(0,i.kt)("a",{parentName:"em",href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters"},"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters")))),(0,i.kt)("h3",{id:"linkedin"},"LinkedIn"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,i.kt)("th",{parentName:"tr",align:null},"Available scopes\xa0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LinkedInProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"r_liteprofile")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api"},"API documentation"))))),(0,i.kt)("h4",{id:"register-an-oauth-application-3"},"Register an OAuth application"),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps/new"},"this page")," to create an application and obtain a client ID and a client secret."),(0,i.kt)("h4",{id:"user-info-parameters-1"},"User info parameters"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserInfo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserInfoFromTokens")," methods of the ",(0,i.kt)("inlineCode",{parentName:"p"},"LinkedInProvider")," accept an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"projection")," parameter which is optional."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const { userInfo } = await this.linkedin.getUserInfo(ctx, {\n  fields: [ 'id', 'firstName' ]\n})\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fields")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},"List of fields that the returned user info object should contain. Additional documentation on ",(0,i.kt)("a",{parentName:"td",href:"https://developer.linkedin.com/docs/guide/v2/concepts/projections"},"field projections"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"projection")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"LinkedIn projection parameter.")))),(0,i.kt)("h2",{id:"community-providers"},"Community Providers"),(0,i.kt)("p",null,"There are no community providers available yet! If you want to share one, feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal"},"open a PR")," on Github."),(0,i.kt)("h2",{id:"common-errors"},"Common Errors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"InvalidStateError")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"state")," query does not match the value found in the cookie.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AuthorizationError")),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization server returns an error. This can happen when a user does not give consent on the provider page.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UserInfoError")),(0,i.kt)("td",{parentName:"tr",align:null},"Thrown in ",(0,i.kt)("inlineCode",{parentName:"td"},"AbstractProvider.getUserFromTokens")," if the request to the resource server is unsuccessful.")))),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("h3",{id:"https"},"HTTPS"),(0,i.kt)("p",null,"When deploying the application, you application must use HTTPS."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"production.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  social:\n    cookie:\n      # Only pass the state cookie if the request is transmitted over a secure channel (HTTPS).\n      secure: true\n    google:\n      # Your redirect URI in production\n      redirectUri: 'https://example.com/signin/google/callback'\n")))}h.isMDXComponent=!0},8698:function(e,t,n){t.Z=n.p+"assets/images/social-auth-overview-6bc9023be73ed5c7e9514909afc68f7e.png"}}]);