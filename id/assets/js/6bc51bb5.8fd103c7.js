"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5691],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=s,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,s=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:s},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(7462),s=t(7294),r=t(2389),a=t(9548),i=t(6010),l="tabItem_LplD";function p(e){var n,t,r,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,a.lx)(f,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=k[0])?void 0:r.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,a.UB)(),N=v.tabGroupChoices,w=v.setTabGroupChoices,b=(0,s.useState)(g),S=b[0],C=b[1],T=[],x=(0,a.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=N[m];null!=R&&R!==S&&f.some((function(e){return e.value===R}))&&C(R)}var O=function(e){var n=e.currentTarget,t=T.indexOf(n),o=f[t].value;o!==S&&(x(n),C(o),null!=m&&w(m,o))},q=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=T.indexOf(e.currentTarget)+1;t=T[o]||T[0];break;case"ArrowLeft":var s=T.indexOf(e.currentTarget)-1;t=T[s]||T[T.length-1]}null==(n=t)||n.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},h)},f.map((function(e){var n=e.value,t=e.label,r=e.attributes;return s.createElement("li",(0,o.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return T.push(e)},onKeyDown:q,onFocus:O,onClick:O},r,{className:(0,i.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),p?(0,s.cloneElement)(k.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function u(e){var n=(0,r.Z)();return s.createElement(p,(0,o.Z)({key:String(n)},e))}},9516:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var o=t(7462),s=t(3366),r=(t(7294),t(3905)),a=t(9877),i=t(8215),l=["components"],p={title:"Session Tokens & CSRF Protection"},u=void 0,c={unversionedId:"upgrade-to-v2/session-tokens",id:"upgrade-to-v2/session-tokens",title:"Session Tokens & CSRF Protection",description:"The main feature of FoalTS version 2 is the new session management. The new authentication system is intended to be more intuitive and to require less code and configuration. It also offers new functionalities.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/session-tokens.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/session-tokens",permalink:"/id/docs/upgrade-to-v2/session-tokens",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/session-tokens.md",tags:[],version:"current",frontMatter:{title:"Session Tokens & CSRF Protection"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Session Tokens",id:"session-tokens",children:[{value:"Choosing and Configuring the Session Store",id:"choosing-and-configuring-the-session-store",children:[{value:"Specify the Store in The Configuration",id:"specify-the-store-in-the-configuration",children:[],level:4},{value:"TypeORM Store",id:"typeorm-store",children:[],level:4},{value:"Redis Store",id:"redis-store",children:[],level:4},{value:"MongoDB Store",id:"mongodb-store",children:[],level:4},{value:"Custom Store",id:"custom-store",children:[],level:4}],level:3},{value:"New Login",id:"new-login",children:[{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header",children:[],level:4},{value:"Example with cookies",id:"example-with-cookies",children:[],level:4}],level:3},{value:"New Logout",id:"new-logout",children:[{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header-1",children:[],level:4},{value:"Example with cookies",id:"example-with-cookies-1",children:[],level:4}],level:3},{value:"Access Control",id:"access-control",children:[{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header-2",children:[],level:4},{value:"Example with cookies",id:"example-with-cookies-2",children:[],level:4}],level:3},{value:"Send the CSRF token in a template",id:"send-the-csrf-token-in-a-template",children:[],level:3},{value:"Read or create a session",id:"read-or-create-a-session",children:[],level:3},{value:"Revoking sessions",id:"revoking-sessions",children:[],level:3},{value:"Breaking Changes that Should not Affect You",id:"breaking-changes-that-should-not-affect-you",children:[],level:3}],level:2},{value:"CSRF Protection",id:"csrf-protection",children:[],level:2},{value:"New Features",id:"new-features",children:[{value:"Session Tokens",id:"session-tokens-1",children:[{value:"Query all sessions of a user (TypeORM only)",id:"query-all-sessions-of-a-user-typeorm-only",children:[],level:4},{value:"Query all connected users (TypeORM only)",id:"query-all-connected-users-typeorm-only",children:[],level:4},{value:"Force the disconnection of a user (TypeORM only)",id:"force-the-disconnection-of-a-user-typeorm-only",children:[],level:4},{value:"Flash sessions",id:"flash-sessions",children:[],level:4},{value:"Regenerate the session ID",id:"regenerate-the-session-id",children:[],level:4},{value:"Expired sessions clean up regularly (TypeORM and MongoDB)",id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb",children:[],level:4},{value:"Anonymous sessions and templates",id:"anonymous-sessions-and-templates",children:[],level:4}],level:3}],level:2}],m={toc:d};function h(e){var n=e.components,t=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The main feature of FoalTS version 2 is the new session management. The new authentication system is intended to be more intuitive and to require less code and configuration. It also offers new functionalities."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that when upgrading to version 2, all your users will be automatically logged out.")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Previously, we had to manage a lot of functions and hooks to authenticate users in FoalTS: ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenRequired"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenOptional"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"removeSessionCookie"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"setSessionCookie"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getCsrfToken"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@CsrfTokenRequired"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"setCsrfCookie"),"."),(0,r.kt)("p",null,"Starting with version 2, they have all been removed and replaced with two unique hooks: ",(0,r.kt)("inlineCode",{parentName:"p"},"@UseSessions")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@UserRequired"),"."),(0,r.kt)("p",null,"There is also no need for a session secret anymore. The config parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.session.secret")," can therefore be removed."),(0,r.kt)("h2",{id:"session-tokens"},"Session Tokens"),(0,r.kt)("h3",{id:"choosing-and-configuring-the-session-store"},"Choosing and Configuring the Session Store"),(0,r.kt)("h4",{id:"specify-the-store-in-the-configuration"},"Specify the Store in The Configuration"),(0,r.kt)("p",null,"Since v1.11.0, FoalTS allows you to globally specify in the configuration which session store to use. This is now the recommended approach and it is assumed that you use it in all examples in the documentation."),(0,r.kt)("p",null,"To specify the store globally, replace all references to ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeORMStore")," (or redis, mongo, etc) with ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"store: TypeORMStore")," option from your hooks."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Store } from '@foal/core';\n\nclass AppController {\n  // Before\n  @dependency\n  store: TypeORMStore;\n\n  // After\n  @dependency\n  store: Store;\n\n\n  @Get('/products')\n  // Before\n  @TokenRequired({ store: TypeStore })\n  // After\n  @TokenRequired()\n  readProducts() {\n    // ...\n  }\n\n}\n")),(0,r.kt)("p",null,"Then, in the configuration, specify the package name of your session store (",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/typeorm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/redis"),", etc)."),(0,r.kt)(a.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  session:\n    store: "@foal/typeorm"\n'))),(0,r.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm",\n    }\n  }\n}\n'))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm",\n    }\n  }\n}\n')))),(0,r.kt)("h4",{id:"typeorm-store"},"TypeORM Store"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," Starting from version 2, ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeORMStore")," only support numbers (not strings) as user IDs."),(0,r.kt)("p",null,"In version 1, when launching the application, Foal was making a request to the database to create the session table if it does not exist."),(0,r.kt)("p",null,"This had two drawbacks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This may make too many undesirable requests to the database in a severless environment."),(0,r.kt)("li",{parentName:"ul"},"The database schema is updated at runtime outside the classical migration process. This practice can be dangerous and it does not allow to keep a traceability of the modifications of the database schema unlike migrations (revert, etc).")),(0,r.kt)("p",null,"Starting from version 2, ",(0,r.kt)("strong",{parentName:"p"},"you must generate and run migrations yourself")," to create the session table."),(0,r.kt)("p",null,"The easier way to achieve this is probably to export the ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseSession")," entity from ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/typeorm")," and to run the following commands."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"user.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\n\n@Entity()\nexport class User extends BaseEntity {\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Once you application is migrated to version 2 and works as expected, you will be able to ",(0,r.kt)("em",{parentName:"p"},"manually")," delete the old ",(0,r.kt)("inlineCode",{parentName:"p"},"foal_session")," table. The new table used by the framework is named ",(0,r.kt)("inlineCode",{parentName:"p"},"database_session"),".")),(0,r.kt)("h4",{id:"redis-store"},"Redis Store"),(0,r.kt)("p",null,"The configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"redis.uri")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.redis.uri"),"."),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/config-system#environment-variables"},"this"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note: In the Redis database, session keys now start with ",(0,r.kt)("inlineCode",{parentName:"em"},"sessions:")," instead of ",(0,r.kt)("inlineCode",{parentName:"em"},"session:")),".")),(0,r.kt)("h4",{id:"mongodb-store"},"MongoDB Store"),(0,r.kt)("p",null,"The configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"mongodb.uri")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.mongodb.uri"),"."),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/config-system#environment-variables"},"this"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Once you application is migrated to version 2 and works as expected, you will be able to manually delete the old ",(0,r.kt)("inlineCode",{parentName:"p"},"foalSessions")," collection. The new collection used by the framework is named ",(0,r.kt)("inlineCode",{parentName:"p"},"sessions"),".")),(0,r.kt)("h4",{id:"custom-store"},"Custom Store"),(0,r.kt)("p",null,"Due to the complexity of implementing a store in version 1, it is unlikely that one has been implemented."),(0,r.kt)("p",null,"However, if it has, the best way to upgrade it to version 2 is to rewrite it from scratch using the documentation."),(0,r.kt)("h3",{id:"new-login"},"New Login"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"You may be interested in looking at the ",(0,r.kt)("a",{parentName:"em",href:"/id/docs/authentication-and-access-control/session-tokens"},"quick start page")," as well."))),(0,r.kt)("h4",{id:"example-with-the-authorization-header"},"Example with the ",(0,r.kt)("inlineCode",{parentName:"h4"},"Authorization")," header"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Before")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    return new HttpResponseOK({\n      token: session.getToken()\n    });\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UseSessions, Store } from '@foal/core';\n\n@UseSessions()\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n}\n")),(0,r.kt)("h4",{id:"example-with-cookies"},"Example with cookies"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Before")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseNoContent();\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UseSessions, Store } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  // user: fetchUser(User)\n})\nexport class AuthController {\n  // This line is required: the store must be injected in at least one controller.\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<any, Session>) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK();\n  }\n\n}\n")),(0,r.kt)("h3",{id:"new-logout"},"New Logout"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"You may be interested in looking at the ",(0,r.kt)("a",{parentName:"em",href:"/id/docs/authentication-and-access-control/session-tokens"},"quick start page")," as well."))),(0,r.kt)("p",null,"In version 2, you don't need to talk directly to the store, use weird options (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"extendLifeTimeOrUpdate"),") or manage cookies yourself."),(0,r.kt)("p",null,"Just call ",(0,r.kt)("inlineCode",{parentName:"p"},"session.destroy()")," and FoalTS will take care of everything else."),(0,r.kt)("h4",{id:"example-with-the-authorization-header-1"},"Example with the ",(0,r.kt)("inlineCode",{parentName:"h4"},"Authorization")," header"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"After")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @Post('/logout')\n  @UseSessions()\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,r.kt)("h4",{id:"example-with-cookies-1"},"Example with cookies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n\n    const response = new HttpResponseNoContent();\n    removeSessionCookie(response);\n    return response;\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"After")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @Post('/logout')\n  @UseSessions({\n    cookie: true,\n  })\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,r.kt)("h3",{id:"access-control"},"Access Control"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"You may be interested in looking at the ",(0,r.kt)("a",{parentName:"em",href:"/id/docs/authentication-and-access-control/session-tokens"},"quick start page")," as well."))),(0,r.kt)("h4",{id:"example-with-the-authorization-header-2"},"Example with the ",(0,r.kt)("inlineCode",{parentName:"h4"},"Authorization")," header"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Before")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@TokenRequired({ store: TypeORMStore, user: fetchUser(User) })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// The `request` option returns a pretty message if the Authorization header is not here.\n@UseSessions({\n  required: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,r.kt)("h4",{id:"example-with-cookies-2"},"Example with cookies"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Before")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@TokenRequired({ store: TypeORMStore, cookie: true, user: fetchUser(User) })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@UseSessions({\n  cookie: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,r.kt)("h3",{id:"send-the-csrf-token-in-a-template"},"Send the CSRF token in a template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\nreturn render('templates/home.html', { csrfToken: await getCsrfToken(ctx.session) });\n\n// After\nreturn render('templates/home.html', { csrfToken: ctx.session.get('csrfToken') });\n")),(0,r.kt)("h3",{id:"read-or-create-a-session"},"Read or create a session"),(0,r.kt)("p",null,"To read or create a session manually, use the function ",(0,r.kt)("inlineCode",{parentName:"p"},"createSession")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"readSession")," instead of the store directly."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Session.verifyTokenAndGetId(token)")," is removed. "),(0,r.kt)("h3",{id:"revoking-sessions"},"Revoking sessions"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/authentication-and-access-control/session-tokens"},"session tokens")),(0,r.kt)("h3",{id:"breaking-changes-that-should-not-affect-you"},"Breaking Changes that Should not Affect You"),(0,r.kt)("p",null,"If you are affected, it's probably you do not use the component the right way."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Session constructor has changes. You should not instantiate it yourself. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"readSession")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"createSession")," instead."),(0,r.kt)("li",{parentName:"ul"},"Except for the ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," methods, the interface of ",(0,r.kt)("inlineCode",{parentName:"li"},"Session")," has changed."),(0,r.kt)("li",{parentName:"ul"},"The methods ",(0,r.kt)("inlineCode",{parentName:"li"},"getRedisInstance")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"getMongoInstance")," have been removed from the stores.")),(0,r.kt)("h2",{id:"csrf-protection"},"CSRF Protection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm uninstall @foal/csrf\n")),(0,r.kt)("p",null,"The package ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/csrf")," has been removed. In version 2, the CSRF protection is directly included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@UseSessions")," hook and can be enabled with ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.session.csrf.enabled")," (the configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.csrf.enabled")," does not exist anymore)."),(0,r.kt)("p",null,"You do not need to take care of generating a CSRF token in the session. The framework handles it for you."),(0,r.kt)("p",null,"The best way to use the new CSRF protection is to go directly to the ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/security/csrf-protection"},"CSRF page"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," In order to ",(0,r.kt)("em",{parentName:"p"},"work better")," with some popular frontend frameworks, the default name of the CSRF cookie has been changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"csrfToken")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN"),"."),(0,r.kt)("h2",{id:"new-features"},"New Features"),(0,r.kt)("h3",{id:"session-tokens-1"},"Session Tokens"),(0,r.kt)("h4",{id:"query-all-sessions-of-a-user-typeorm-only"},"Query all sessions of a user (TypeORM only)"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/authentication-and-access-control/session-tokens"},"session tokens")),(0,r.kt)("h4",{id:"query-all-connected-users-typeorm-only"},"Query all connected users (TypeORM only)"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/authentication-and-access-control/session-tokens"},"session tokens")),(0,r.kt)("h4",{id:"force-the-disconnection-of-a-user-typeorm-only"},"Force the disconnection of a user (TypeORM only)"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/authentication-and-access-control/session-tokens"},"session tokens")),(0,r.kt)("h4",{id:"flash-sessions"},"Flash sessions"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/authentication-and-access-control/session-tokens"},"session tokens")),(0,r.kt)("h4",{id:"regenerate-the-session-id"},"Regenerate the session ID"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/authentication-and-access-control/session-tokens"},"session tokens")),(0,r.kt)("h4",{id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb"},"Expired sessions clean up regularly (TypeORM and MongoDB)"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/authentication-and-access-control/session-tokens"},"session tokens")),(0,r.kt)("h4",{id:"anonymous-sessions-and-templates"},"Anonymous sessions and templates"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/authentication-and-access-control/session-tokens"},"session tokens")))}h.isMDXComponent=!0}}]);