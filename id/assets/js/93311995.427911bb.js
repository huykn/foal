"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1448],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),r=t(7294),l=t(2389),i=t(9548),o=t(6010),s="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,i.lx)(g,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,r.useState)(k),T=w[0],x=w[1],C=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=y[m];null!=I&&I!==T&&g.some((function(e){return e.value===I}))&&x(I)}var P=function(e){var n=e.currentTarget,t=C.indexOf(n),a=g[t].value;a!==T&&(E(n),x(a),null!=m&&N(m,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},9956:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return d},toc:function(){return m},default:function(){return v}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=t(9877),o=t(8215),s=["components"],u={title:"What's new in version 2 (part 1/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-1.png",tags:["release"]},p=void 0,c={permalink:"/id/blog/2021/02/17/whats-new-in-version-2-part-1",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-02-17-whats-new-in-version-2-part-1.md",source:"@site/blog/2021-02-17-whats-new-in-version-2-part-1.md",title:"What's new in version 2 (part 1/4)",description:"Banner",date:"2021-02-17T00:00:00.000Z",formattedDate:"17 Februari 2021",tags:[{label:"release",permalink:"/id/blog/tags/release"}],readingTime:4.69,truncated:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"What's new in version 2 (part 1/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-1.png",tags:["release"]},prevItem:{title:"Version 2.2 release notes",permalink:"/id/blog/2021/02/25/version-2.2-release-notes"},nextItem:{title:"Version 2.1 release notes",permalink:"/id/blog/2021/02/03/version-2.1-release-notes"}},d={authorsImageUrls:[void 0]},m=[{value:"New CLI commands",id:"new-cli-commands",children:[{value:"Generating migrations",id:"generating-migrations",children:[],level:3},{value:"Running migrations",id:"running-migrations",children:[],level:3},{value:"Build and run scripts in watch mode (development)",id:"build-and-run-scripts-in-watch-mode-development",children:[],level:3},{value:"Revert one migration",id:"revert-one-migration",children:[],level:3},{value:"Build migrations, scripts and the app",id:"build-migrations-scripts-and-the-app",children:[],level:3}],level:2},{value:"Service and Application Initialization",id:"service-and-application-initialization",children:[],level:2},{value:"The <code>AppController</code> interface",id:"the-appcontroller-interface",children:[],level:2},{value:"Custom Error-Handling &amp; Hook Post Functions",id:"custom-error-handling--hook-post-functions",children:[],level:2},{value:"Accessing File Metadata during Uploads",id:"accessing-file-metadata-during-uploads",children:[],level:2}],h={toc:m};function v(e){var n=e.components,u=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,u,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Banner",src:t(7546).Z,width:"914",height:"315"})),(0,l.kt)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the new CLI commands"),(0,l.kt)("li",{parentName:"ul"},"the service and application initialization"),(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)("inlineCode",{parentName:"li"},"AppController")," interface"),(0,l.kt)("li",{parentName:"ul"},"custom error-handling & hook post functions"),(0,l.kt)("li",{parentName:"ul"},"accessing file metadata during uploads")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This article is the part 1 of the series of articles ",(0,l.kt)("em",{parentName:"p"},"What's new in version 2.0"),". Part 2 can be found ",(0,l.kt)("a",{parentName:"p",href:"/id/blog/2021/03/02/whats-new-in-version-2-part-2"},"here"),".")),(0,l.kt)("h2",{id:"new-cli-commands"},"New CLI commands"),(0,l.kt)("p",null,"In version 1, there were many commands to use, and this, in a specific order. Running and generating migrations from model changes required four commands and building the whole application needed three."),(0,l.kt)("p",null,"In version 2, the number of CLI commands has been reduced and they have been simplified so that one action matches one command."),(0,l.kt)("h3",{id:"generating-migrations"},"Generating migrations"),(0,l.kt)("p",null,"This command generates migrations by comparing the current database schema and the latest changes in your models."),(0,l.kt)(i.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"v2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\n"))),(0,l.kt)(o.Z,{value:"v1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:app\nnpm run migration:generate -- -n my_migration\n")))),(0,l.kt)("h3",{id:"running-migrations"},"Running migrations"),(0,l.kt)("p",null,"This command builds and runs all migrations."),(0,l.kt)(i.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"v2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrations\n"))),(0,l.kt)(o.Z,{value:"v1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:migrations\nnpm run migration:run\n")))),(0,l.kt)("h3",{id:"build-and-run-scripts-in-watch-mode-development"},"Build and run scripts in watch mode (development)"),(0,l.kt)("p",null,"If you want to re-build your scripts each time a file is change, you can execute ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run develop")," in a separate terminal."),(0,l.kt)(i.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"v2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# In one terminal:\nnpm run develop\n\n# In another terminal:\nfoal run my-script\n"))),(0,l.kt)(o.Z,{value:"v1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# In one terminal:\nnpm run build:scripts:w\n\n# In another terminal:\nfoal run my-script\n")))),(0,l.kt)("h3",{id:"revert-one-migration"},"Revert one migration"),(0,l.kt)("p",null,"This command reverts the last executed migration."),(0,l.kt)(i.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"v2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run revertmigration\n"))),(0,l.kt)(o.Z,{value:"v1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migration:revert\n")))),(0,l.kt)("h3",{id:"build-migrations-scripts-and-the-app"},"Build migrations, scripts and the app"),(0,l.kt)("p",null,"This command builds the application, the scripts and the migrations. Unit and e2e tests are not included."),(0,l.kt)(i.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"v2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n"))),(0,l.kt)(o.Z,{value:"v1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:app\nnpm run build:scripts\nnpm run build:migrations\n")))),(0,l.kt)("h2",{id:"service-and-application-initialization"},"Service and Application Initialization"),(0,l.kt)("p",null,"In version 1, it was possible to add an ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," method to the ",(0,l.kt)("inlineCode",{parentName:"p"},"AppController")," class and ",(0,l.kt)("inlineCode",{parentName:"p"},"boot")," methods in the services to initialize the application. These features needed special options in order to be activated."),(0,l.kt)("p",null,"Starting from version 2, they are enabled by default."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n  // ...\n\n  init() {\n    // Execute some code.\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class MyService {\n  // ...\n\n  boot() {\n    // Execute some code.\n  }\n}\n")),(0,l.kt)("h2",{id:"the-appcontroller-interface"},"The ",(0,l.kt)("inlineCode",{parentName:"h2"},"AppController")," interface"),(0,l.kt)("p",null,"This optional interface allows you to check that the ",(0,l.kt)("inlineCode",{parentName:"p"},"subControllers")," property has the correct type as well as the ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"handleError")," methods."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  init() {\n    // ...\n  }\n\n  handleError(error, ctx) {\n    // ...\n  }\n}\n")),(0,l.kt)("h2",{id:"custom-error-handling--hook-post-functions"},"Custom Error-Handling & Hook Post Functions"),(0,l.kt)("p",null,"In version 1, when an error was thrown or rejected in a hook or a controller method, the remaining hook post functions were not executed."),(0,l.kt)("p",null,"Starting from version 2, the error is directly converted to an ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," and passed to the next post hook functions."),(0,l.kt)("p",null,"This can be useful in case we want to use exceptions as HTTP responses without breaking the hook post functions."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"class PermissionError extends Error {}\n\nclass UserService {\n\n  async listUsers(applicant: User): Promise<User[]> {\n    if (!ctx.user.isAdmin) {\n      // Use exception here.\n      throw new PermissionError();\n    }\n\n    return User.find({ org: user.org });\n  }\n\n}\n\n// This hook measures the execution time and the controller method and hooks.\n@Hook(() => {\n  const time = process.hrtime();\n\n  // This post function will still be executed\n  // even if an error is thrown in listUsers.\n  return () => {\n    const seconds = process.hrtime(time)[0];\n    console.log(`Executed in ${seconds} seconds`);\n  };\n})\nexport class AppController {\n\n  @dependency\n  users: UserService;\n\n  @Get('/users')\n  @UseSessions({ user: fetchUser(User) })\n  @UserRequired()\n  listUsers(ctx: Context<User>) {\n    return new HttpResponseOK(\n      await users.listUsers(ctx.user)\n    );\n  }\n\n  handleError(error: Error, ctx: Context) {\n    // Converts the exception to an HTTP response.\n    // The error can have been thrown in a service used by the controller.\n    if (error instanceof PermissionError) {\n      return new HttpResponseForbidden();\n    }\n\n    // Returns an HttpResponseInternalServerError.\n    return renderError(error, response);\n  }\n}\n")),(0,l.kt)("h2",{id:"accessing-file-metadata-during-uploads"},"Accessing File Metadata during Uploads"),(0,l.kt)("p",null,"When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook to handle file upload, it is now possible to access the file metadata."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true },\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const file = ctx.request.body.files.profile;\n    // file.mimeType, file.buffer\n  }\n\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"encoding")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Encoding type of the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"filename")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string\\|undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the file on the user's computer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mimeType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Mime type of the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Path where the file has been saved. If the ",(0,l.kt)("inlineCode",{parentName:"td"},"saveTo")," option was not provided, the value is an empty string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buffer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,l.kt)("td",{parentName:"tr",align:null},"Buffer containing the entire file. If the ",(0,l.kt)("inlineCode",{parentName:"td"},"saveTo")," option was provided, the value is an empty buffer.")))))}v.isMDXComponent=!0},7546:function(e,n,t){n.Z=t.p+"assets/images/banner-1062d67acd6a063e9c6cc005928e2062.png"}}]);