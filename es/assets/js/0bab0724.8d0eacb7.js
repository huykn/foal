"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1608],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(o),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return o?n.createElement(m,a(a({ref:t},d),{},{components:o})):n.createElement(m,a({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5012:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=o(7462),r=o(3366),s=(o(7294),o(3905)),a=["components"],i={title:"The REST API"},l=void 0,p={unversionedId:"tutorials/mongodb-todo-list/tuto-5-the-rest-api",id:"version-1.x/tutorials/mongodb-todo-list/tuto-5-the-rest-api",title:"The REST API",description:"Good, so far you have a frontend working properly and some todos in your database. Now it is time to code a REST API to link them both.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-5-the-rest-api.md",sourceDirName:"tutorials/mongodb-todo-list",slug:"/tutorials/mongodb-todo-list/tuto-5-the-rest-api",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-5-the-rest-api",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-5-the-rest-api.md",tags:[],version:"1.x",frontMatter:{title:"The REST API"},sidebar:"someSidebar",previous:{title:"The Shell Script create-todo",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo"},next:{title:"Validation and Sanitization",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-6-validation-and-sanitization"}},d=[],c={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Good, so far you have a frontend working properly and some todos in your database. Now it is time to code a REST API to link them both."),(0,s.kt)("p",null,"To do so, you are going to use a ",(0,s.kt)("em",{parentName:"p"},"controller"),". Controllers receive the HTTP requests and process them. They may call ",(0,s.kt)("em",{parentName:"p"},"services")," in the background to help them do this. We will not study the services in this tutorial."),(0,s.kt)("p",null,"Open the file ",(0,s.kt)("inlineCode",{parentName:"p"},"api.controller.ts")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/app/controllers/")," directory and replace its content."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nexport class ApiController {\n\n  @Get('/todos')\n  getTodos() {\n    const todos = [\n      { id: 1, text: 'My task 1' },\n      { id: 2, text: 'My task 2' }\n    ];\n    return new HttpResponseOK(todos);\n  }\n\n}\n")),(0,s.kt)("p",null,"Controllers have special methods that define the routes and their respective handlers. These functions are decorated by one of the decorators ",(0,s.kt)("inlineCode",{parentName:"p"},"Get"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Post"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Patch"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Put")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Delete")," which define the http method and the path of the route."),(0,s.kt)("p",null,"In this case the controller responds with a 200 status and a mock data (the two fake todos)."),(0,s.kt)("p",null,"Refresh your browser, you should see the two todos printed."),(0,s.kt)("p",null,"Now, we would like to return the todos stored in the database. Update the code as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,\n  HttpResponseNotFound, HttpResponseOK, Post\n} from '@foal/core';\n\nimport { Todo } from '../models';\n\nexport class ApiController {\n\n  @Get('/todos')\n  async getTodos() {\n    const todos = await Todo.find();\n    return new HttpResponseOK(todos);\n  }\n\n}\n")),(0,s.kt)("p",null,"If you refresh your browser, you should now see the tasks that we created through the command line."),(0,s.kt)("p",null,"Add the create and delete features."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Post('/todos')\n  async postTodo(ctx: Context) {\n    // Create a new todo with the body of the HTTP request.\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    // Save the todo in the database.\n    await todo.save();\n\n    // Return the new todo with the id generated by the database. The status is 201.\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  async deleteTodo(ctx: Context) {\n    // Get the todo with the id given in the URL if it exists.\n    const todo = await Todo.findById(ctx.request.params.id);\n\n    // Return a 404 Not Found response if no such todo exists.\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n\n    // Remove the todo from the database.\n    await Todo.findByIdAndRemove(ctx.request.params.id);\n\n    // Returns an successful empty response. The status is 204.\n    return new HttpResponseNoContent();\n  }\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Context")," objet, which is passed to each route handler, contains the express ",(0,s.kt)("a",{parentName:"p",href:"https://expressjs.com/en/4x/api.html#req"},"request object"),". This represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on."),(0,s.kt)("p",null,"Now type a new todo in the input text and press Enter. The task appears in the todo list. Refresh the page, it should still be there. If you click on the checkbox, the todo is successfully deleted."),(0,s.kt)("p",null,"The last thing to know is how the ",(0,s.kt)("inlineCode",{parentName:"p"},"ApiController")," is bound to the request handler. You defined so far routes in this controller but never registered the controller anywhere. This is done in the ",(0,s.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," file, the entry point of your application."),(0,s.kt)("p",null,"Open the file ",(0,s.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"src/app"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller } from '@foal/core';\n\nimport { ApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n}\n")),(0,s.kt)("p",null,"This controller is the main controller of the application. It is directly called when a request comes in. It may have sub-controllers that go in the ",(0,s.kt)("inlineCode",{parentName:"p"},"controllers/")," directory."))}u.isMDXComponent=!0}}]);