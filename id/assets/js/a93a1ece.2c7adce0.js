"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3187],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2721:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Auth Controllers and Hooks"},l=void 0,p={unversionedId:"tutorials/multi-user-todo-list/tuto-5-auth-controllers-and-hooks",id:"version-1.x/tutorials/multi-user-todo-list/tuto-5-auth-controllers-and-hooks",title:"Auth Controllers and Hooks",description:"So far, you have defined the User model and written a script to create new users with their password and email address. The next step is to create a controller to log users in or out.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-5-auth-controllers-and-hooks.md",sourceDirName:"tutorials/multi-user-todo-list",slug:"/tutorials/multi-user-todo-list/tuto-5-auth-controllers-and-hooks",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-5-auth-controllers-and-hooks",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-5-auth-controllers-and-hooks.md",tags:[],version:"1.x",frontMatter:{title:"Auth Controllers and Hooks"},sidebar:"someSidebar",previous:{title:"The Shell Scripts",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-3-the-shell-scripts"},next:{title:"Todos & Ownership",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership"}},d=[{value:"The Login and Main Pages",id:"the-login-and-main-pages",children:[],level:2},{value:"Login Controllers",id:"login-controllers",children:[],level:2},{value:"The TokenRequired Hook",id:"the-tokenrequired-hook",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So far, you have defined the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," model and written a script to create new users with their password and email address. The next step is to create a controller to log users in or out."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before this, you must provide a ",(0,i.kt)("em",{parentName:"p"},"secret")," to the authentication system. You can generate such one with the following command:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,i.kt)("p",{parentName:"blockquote"},"Then create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file containing your secret at the root of your project."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},".env")),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"SETTINGS_SESSION_SECRET=my-secret\n"))),(0,i.kt)("p",null,"Here is the architecture that we want:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Users load the page ",(0,i.kt)("inlineCode",{parentName:"li"},"/signin"),", enter their credentials and then are redirected to the page ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," if the credentials are correct. If they are not, users are redirected to ",(0,i.kt)("inlineCode",{parentName:"li"},"/signin?bad_credentials=true"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"bad_credentials")," parameter tells the page to show the error message ",(0,i.kt)("inlineCode",{parentName:"li"},"Invalid email or password"),"."),(0,i.kt)("li",{parentName:"ol"},"Users can view, create and delete their todos in the page ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),"."),(0,i.kt)("li",{parentName:"ol"},"When they click the button ",(0,i.kt)("inlineCode",{parentName:"li"},"Log out"),", they are deconnected and redirected to the page ",(0,i.kt)("inlineCode",{parentName:"li"},"/signin"),".")),(0,i.kt)("p",null,"When the user presses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Log in")," button in the login page, the page requests ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /auth/login")," with the credentials as body."),(0,i.kt)("p",null,"When the user presses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Log out")," button in the todo-list page, the page requests ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /auth/logout"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In this scenario, the authentication process is handled with sessions and http redirections. You will not use ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token#Use"},"JWT tokens")," which are sometimes used in ",(0,i.kt)("em",{parentName:"p"},"Single Page Applications")," (SPA).")),(0,i.kt)("h2",{id:"the-login-and-main-pages"},"The Login and Main Pages"),(0,i.kt)("p",null,"Download the html, css and js files by clicking ",(0,i.kt)("a",{parentName:"p",href:"https://foalts.org/multi-user-todo-list-v1.zip"},"here"),"."),(0,i.kt)("p",null,"Empty the ",(0,i.kt)("inlineCode",{parentName:"p"},"public/")," directory."),(0,i.kt)("p",null,"Then move ",(0,i.kt)("inlineCode",{parentName:"p"},"script.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"style.css")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"public/")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"signin.html")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"signup.html")," files to a new directory ",(0,i.kt)("inlineCode",{parentName:"p"},"templates/")," at the root of your project."),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," file and add three new routes to serve the pages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, Get, render } from '@foal/core';\n\nimport { ApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  @Get('/')\n  index() {\n    return render('templates/index.html');\n  }\n\n  @Get('/signin')\n  signin() {\n    return render('templates/signin.html');\n  }\n\n  @Get('/signup')\n  signup() {\n    return render('templates/signup.html');\n  }\n}\n\n")),(0,i.kt)("p",null,"Open your browser and go to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3001/signin"),". The login page should show up."),(0,i.kt)("h2",{id:"login-controllers"},"Login Controllers"),(0,i.kt)("p",null,"The next step is to create a controller that logs the users in or out and redirects them after the operation succeeds or fails. It needs two routes ",(0,i.kt)("inlineCode",{parentName:"p"},"/login")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/logout"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foal generate controller auth --register\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--register")," flag directly adds a new line in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," to declare the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthController")," as a sub-controller of ",(0,i.kt)("inlineCode",{parentName:"p"},"AppController"),".")),(0,i.kt)("p",null,"Open the new file ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.controller.ts")," and replace its content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport {\n  Context, dependency, HttpResponseRedirect, Post, removeSessionCookie,\n  Session, setSessionCookie, TokenRequired, ValidateBody, verifyPassword\n} from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { getRepository } from 'typeorm';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  // Validate the request body.\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n        email: { type: 'string', format: 'email' },\n        password: { type: 'string' }\n    },\n    required: ['email', 'password'],\n    type: 'object',\n  })\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      // Redirect the user to /signin if the authentication fails.\n      return new HttpResponseRedirect('/signin?bad_credentials=true');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      // Redirect the user to /signin if the authentication fails.\n      return new HttpResponseRedirect('/signin?bad_credentials=true');\n    }\n\n    // Create a session associated with the user.\n    const session = await this.store.createAndSaveSessionFromUser(user);\n\n    // Redirect the user to the home page on success.\n    const response = new HttpResponseRedirect('/');\n    // Save the session token in a cookie in order to authenticate\n    // the user in future requests.\n    setSessionCookie(response, session.getToken());\n    return response;\n  }\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    redirectTo: '/signin',\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<User, Session>) {\n    // Destroy the user session.\n    await this.store.destroy(ctx.session.sessionID);\n\n    // Redirect the user to the home page on success.\n    const response = new HttpResponseRedirect('/signin');\n    // Remove the cookie where the session token is stored.\n    removeSessionCookie(response);\n    return response;\n  }\n}\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Writting ",(0,i.kt)("inlineCode",{parentName:"p"},"getRepository(User).findOne({ email: email, password: password })")," cannot work since the password needs to be hashed.")),(0,i.kt)("p",null,"Go back to your browser and try to log in with the email ",(0,i.kt)("inlineCode",{parentName:"p"},"john@foalts.org")," and the password ",(0,i.kt)("inlineCode",{parentName:"p"},"mary_password"),". You are redirected to the same page and the message ",(0,i.kt)("inlineCode",{parentName:"p"},"Invalid email or password.")," shows up. Now use the password ",(0,i.kt)("inlineCode",{parentName:"p"},"john_password")," and try to log in. You are redirected to the todo-list page where all todos are listed. If you click on the button ",(0,i.kt)("inlineCode",{parentName:"p"},"Log out")," you are then redirected to the login page!"),(0,i.kt)("h2",{id:"the-tokenrequired-hook"},"The TokenRequired Hook"),(0,i.kt)("p",null,"Great, so far you can authenticate users. But as you have not yet added access control to the todo-list page and the API, unauthenticated users can still access it."),(0,i.kt)("p",null,"The usual way to handle authorization is to use a ",(0,i.kt)("em",{parentName:"p"},"hook"),". In this case, you are going to use the built-in hook ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenRequired")," which returns a 401 error or redirects the user if user is not logged in. "),(0,i.kt)("p",null,"Update ",(0,i.kt)("inlineCode",{parentName:"p"},"app.controller.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, Get, render, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController {\n\n  @Get('/')\n  @TokenRequired({\n    // The session token is expected to be in a cookie.\n    cookie: true,\n    // Redirect the user to /signin if user is not logged in.\n    redirectTo: '/signin',\n    // Specify the \"store\" where the session was created.\n    store: TypeORMStore\n  })\n  index() {\n    ...\n  }\n\n  ...\n\n}\n")),(0,i.kt)("p",null,"Update ",(0,i.kt)("inlineCode",{parentName:"p"},"api.controller.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,\n  HttpResponseNotFound, HttpResponseOK, Post,\n  TokenRequired, ValidateBody, ValidatePathParam\n} from '@foal/core';\nimport { fetchUser, TypeORMStore } from '@foal/typeorm';\nimport { getRepository } from 'typeorm';\n\nimport { Todo, User } from '../entities';\n\n\n@TokenRequired({\n  cookie: true,\n  store: TypeORMStore,\n  // Make ctx.user be an instance of User.\n  user: fetchUser(User),\n})\nexport class ApiController {\n\n  ...\n\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When a hook decorates a controller class, it applies to all the routes of the controller and its sub-controllers.")),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3001"),". If you are not logged in you should be redirected to the login page."))}c.isMDXComponent=!0}}]);