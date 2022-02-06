"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4605],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(k,p(p({ref:n},c),{},{components:t})):r.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},470:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),p=["components"],i={title:"OpenAPI & Swagger UI"},l=void 0,s={unversionedId:"api-section/openapi-and-swagger-ui",id:"version-1.x/api-section/openapi-and-swagger-ui",title:"OpenAPI & Swagger UI",description:"Introduction",source:"@site/versioned_docs/version-1.x/api-section/openapi-and-swagger-ui.md",sourceDirName:"api-section",slug:"/api-section/openapi-and-swagger-ui",permalink:"/docs/1.x/api-section/openapi-and-swagger-ui",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/api-section/openapi-and-swagger-ui.md",tags:[],version:"1.x",frontMatter:{title:"OpenAPI & Swagger UI"},sidebar:"someSidebar",previous:{title:"REST API",permalink:"/docs/1.x/api-section/rest-blueprints"},next:{title:"Public API & CORS Requests",permalink:"/docs/1.x/api-section/public-api-and-cors-requests"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"OpenAPI",id:"openapi",children:[{value:"The Basics",id:"the-basics",children:[],level:3},{value:"The Other Operation Decorators",id:"the-other-operation-decorators",children:[],level:3},{value:"Don&#39;t Repeat Yourself and Decorate Sub-Controllers",id:"dont-repeat-yourself-and-decorate-sub-controllers",children:[],level:3},{value:"Use Existing Hooks",id:"use-existing-hooks",children:[],level:3}],level:2},{value:"Swagger UI",id:"swagger-ui",children:[{value:"Simple case",id:"simple-case",children:[],level:3},{value:"With an URL",id:"with-an-url",children:[],level:3},{value:"Several APIs or Versions",id:"several-apis-or-versions",children:[],level:3},{value:"Using a Static File",id:"using-a-static-file",children:[],level:3}],level:2},{value:"Advanced",id:"advanced",children:[{value:"Using Controller Properties",id:"using-controller-properties",children:[],level:3},{value:"The <code>OpenAPI</code> service",id:"the-openapi-service",children:[],level:3},{value:"In-Depth Overview",id:"in-depth-overview",children:[],level:3},{value:"Define and Reuse Components",id:"define-and-reuse-components",children:[],level:3},{value:"Generate and Save a Specification File with a Shell Script",id:"generate-and-save-a-specification-file-with-a-shell-script",children:[],level:3},{value:"Common Error with <code>createOpenApiDocument</code>",id:"common-error-with-createopenapidocument",children:[],level:3},{value:"Extend Swagger UI options",id:"extend-swagger-ui-options",children:[],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,i=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OpenAPI Specification")," (formerly known as Swagger Specification) is an API description format for REST APIs. An OpenAPI ",(0,a.kt)("em",{parentName:"p"},"document")," allows developers to describe entirely an API."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Swagger UI")," is a graphical interface to visualize and interact with the API\u2019s resources. It is automatically generated from one or several OpenAPI documents."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://editor.swagger.io/"},"Example of OpenAPI document and Swagger Visualisation"))),(0,a.kt)("h2",{id:"openapi"},"OpenAPI"),(0,a.kt)("h3",{id:"the-basics"},"The Basics"),(0,a.kt)("p",null,"The first thing to do is to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ApiInfo")," decorator to the root controller of the API. Two attributes are required: the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," of the application and the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," of the OpenAPI document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n// @ApiServer({\n//   url: '/api'\n// })\nexport class ApiController {\n  // ...\n}\n")),(0,a.kt)("p",null,"Then each controller method can be documented with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ApiOperation")," decorator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiOperation, Get } from '@foal/core';\n\n// ...\nexport class ApiController {\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        content: {\n          'application/json': {\n            schema: {\n              items: {\n                properties: {\n                  name: { type: 'string' }\n                }\n                type: 'object',\n                required: [ 'name' ]\n              },\n              type: 'array',\n            }\n          }\n        }\n        description: 'successful operation'\n      }\n    },\n    summary: 'Return a list of all the products.'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"createOpenApiDocument(ApiController)")," will generate and return the below document (presented in YAML here but the actual returned value is a JS object). This function can be imported from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@foal/core")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /products:\n    get:\n      responses:\n        200:\n          content:\n            application/json:\n              schema:\n                type: array\n                items:\n                  type: object\n                  properties:\n                    name:\n                      type: string\n                  required:\n                  - name\n          description: successful operation\n      summary: 'Return a list of all the products.'\n")),(0,a.kt)("h3",{id:"the-other-operation-decorators"},"The Other Operation Decorators"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ApiOperation")," decorator can sometimes be cumbersome. That is why FoalTS provides other alternative decorators to improve code readability."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation Decorators"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiOperationSummary"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiOperationId"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiOperationDescription"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiServer"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiRequestBody"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiSecurityRequirement"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineTag"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiExternalDoc"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiUseTag"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiParameter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiResponse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiCallback"))))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiOperation, ApiResponse, Get } from '@foal/core';\n// ...\nexport class ApiController {\n\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        description: 'successful operation'\n      },\n      404: {\n        description: 'not found'\n      },\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  // is equivalent to\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProducts() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("h3",{id:"dont-repeat-yourself-and-decorate-sub-controllers"},"Don't Repeat Yourself and Decorate Sub-Controllers"),(0,a.kt)("p",null,"Large applications can have many subcontrollers. FoalTS automatically resolves the paths for you and allows you to share common specifications between several operations."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiDeprecated, ApiInfo, ApiResponse, controller, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n  subControllers = [\n    controller('/products', ProductController)\n  ];\n}\n\n// All the operations of this controller and\n// its subcontrollers should be deprecated.\n@ApiDeprecated()\nclass ProductController {\n\n  @Get()\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/:productId')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProduct() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("p",null,"The document generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"createOpenAPIDocument")," will then look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /products: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n  /products/{productId}: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n        404:\n          description: not found\n")),(0,a.kt)("h3",{id:"use-existing-hooks"},"Use Existing Hooks"),(0,a.kt)("p",null,"The addition of these decorators can sometimes be quite redundant with existing hooks. For example, if we want to write OpenAPI documentation for authentication and validation of the request body, we may end up with something like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired()\n@ApiSecurityRequirement({ bearerAuth: [] })\n@ApiDefineSecurityScheme('bearerAuth', {\n  type: 'http',\n  scheme: 'bearer',\n  bearerFormat: 'JWT'\n})\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema)\n  @ApiRequestBody({\n     required: true,\n     content: {\n       'application/json': { schema }\n     }\n  })\n  createProducts() {\n    \n  }\n\n}\n")),(0,a.kt)("p",null,"To avoid this, it is possible to generate the OpenAPI documentation from the validation and authentication hooks using the ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired({ openapi: true })\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema, { openapi: true })\n  createProducts() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("p",null,"More simply, you can globally set the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.x/deployment-and-environments/configuration"},"configuration key")," ",(0,a.kt)("inlineCode",{parentName:"p"},"setting.openapi.useHooks")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," so that each authentication and validation hooks generates documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  openapi:\n    useHooks: true\n")),(0,a.kt)("p",null,"Note that this global configuration can always be override by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi")," option on each hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ApiController {\n  \n  @Post('/products')\n  // Generate automatically the OpenAPI spec for the request body\n  @ValidateBody(schema)\n  // Choose to write a customize spec for the path parameters\n  @ValidateParams(schema2, { openapi: false })\n  @ApiParameter( ... )\n  createProducts() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("h2",{id:"swagger-ui"},"Swagger UI"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of Swagger UI",src:t(2783).Z,width:"964",height:"1162"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @foal/swagger\n")),(0,a.kt)("h3",{id:"simple-case"},"Simple case"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiController, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenApiController)\n  ]\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"open-api.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n}\n\n")),(0,a.kt)("p",null,"Opening the browser at the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/swagger")," will display the documentation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiController"),"."),(0,a.kt)("h3",{id:"with-an-url"},"With an URL"),(0,a.kt)("p",null,"If needed, you can also specify the URL of a custom OpenAPI file (YAML or JSON)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: 'https://petstore.swagger.io/v2/swagger.json' };\n}\n\n")),(0,a.kt)("h3",{id:"several-apis-or-versions"},"Several APIs or Versions"),(0,a.kt)("p",null,"Some applications may serve several APIs (for example two versions of a same API). Here is an example on how to handle this."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of several versions",src:t(5679).Z,width:"1680",height:"504"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller } from '@foal/core';\n\nimport { ApiV1Controller, ApiV2ontroller, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiV1Controller),\n    controller('/api/v2', ApiV2Controller),\n    controller('/swagger', OpenApiController),\n  ]\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"open-api.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiV1Controller } from './api-v1.controller';\nimport { ApiV2Controller } from './api-v2.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = [\n    { name: 'v1', controllerClass: ApiV1Controller },\n    { name: 'v2', controllerClass: ApiV2Controller, primary: true },\n  ]\n}\n")),(0,a.kt)("h3",{id:"using-a-static-file"},"Using a Static File"),(0,a.kt)("p",null,"If you prefer to write manually your OpenAPI document, you can add an ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi.yml")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"public/")," directory and configure your ",(0,a.kt)("inlineCode",{parentName:"p"},"SwaggerController")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: '/openapi.yml' };\n}\n\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("h3",{id:"using-controller-properties"},"Using Controller Properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiRequestBody, IApiRequestBody, Post } from '@foal/core';\n\nclass ApiController {\n\n  requestBody: IApiRequestBody = {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'object'\n        }\n      }\n    },\n    required: true\n  };\n\n  @Post('/products')\n  // This is invalid:\n  // @ApiRequestBody(this.requestBody)\n  // This is valid:\n  @ApiRequestBody(controller => controller.requestBody)\n  createProduct() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("h3",{id:"the-openapi-service"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"OpenAPI")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK, OpenAPI } from '@foal/core';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController {\n  @dependency\n  openapi: OpenAPI;\n\n  @Get('/openapi.json')\n  readDocument() {\n    return new HttpResponseOK(\n      this.openapi.createDocument(ApiController)\n    );\n  }\n}\n")),(0,a.kt)("h3",{id:"in-depth-overview"},"In-Depth Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FoalTS automatically resolves the path items and operations based on your controller paths.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiResponse, Get, Post } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Post('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  createProduct() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'openapi: 3.0.0\ninfo:\n  title: \'A Great API\'\n  version: 1.0.0\npaths:\n  /products: # Foal automatically puts the "get" and "post" operations under the same path item as required by OpenAPI rules.\n    get:\n      responses:\n        200:\n          description: successful operation\n    post:\n      responses:\n        200:\n          description: successful operation\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The decorators ",(0,a.kt)("inlineCode",{parentName:"li"},"@ApiServer"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@ApiSecurityRequirement")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@ApiExternalDocs")," have a different behavior depending on if they decorate the root controller or a subcontroller / a method.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with the root controller")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiResponse, ApiServer } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiServer({ url: 'http://example.com' })\nexport class ApiController {\n\n  // ...\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  # ...\nservers:\n- url: http://example.com\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with a subcontroller / a method")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiResponse, ApiServer, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/')\n  @ApiServer({ url: 'http://example.com' })\n  @ApiResponse(200, { description: 'successful operation' })\n  index() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /:\n    get:\n      responses:\n        200:\n          description: successful operation\n      servers:\n      - url: http://example.com\n")),(0,a.kt)("h3",{id:"define-and-reuse-components"},"Define and Reuse Components"),(0,a.kt)("p",null,"OpenAPI allows you to define and reuse components. Here is a way to achieve this with Foal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiDefineSchema, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiDefineSchema('product', {\n  type: 'object',\n  properties: {\n    name: { type: 'string' }\n  }\n  required: [ 'name' ]\n})\nexport class ApiController {\n\n  @Get('/products/:productId')\n  @ApiResponse(200, {\n    content: {\n      'application/json': {\n        schema: { $ref: '#/components/schema/product' }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/products')\n  @ApiResponse(200, {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'array',\n          items: { $ref: '#/components/schema/product' }\n        }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Component Decorators"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineSchema"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineResponse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineParameter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineExample"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineRequestBody"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineHeader"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineSecurityScheme"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineLink"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineCallback"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," The ",(0,a.kt)("inlineCode",{parentName:"p"},"@ApiDefineXXX")," decorators can be added to any controllers or methods but they always define components in the global scope.")),(0,a.kt)("h3",{id:"generate-and-save-a-specification-file-with-a-shell-script"},"Generate and Save a Specification File with a Shell Script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal generate script generate-openapi-doc\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/scripts/generate-openapi-doc.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\nimport { writeFileSync } from 'fs';\n\n// 3p\nimport { createOpenApiDocument } from '@foal/core';\nimport { stringify } from 'yamljs';\n\n// App\nimport { ApiController } from '../app/controllers';\n\nexport async function main() {\n  const document = createOpenApiDocument(ApiController);\n  const yamlDocument = stringify(document);\n\n  writeFileSync('openapi.yml', yamlDocument, 'utf8');\n}\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run build:scripts\nfoal run generate-openapi-doc\n")),(0,a.kt)("h3",{id:"common-error-with-createopenapidocument"},"Common Error with ",(0,a.kt)("inlineCode",{parentName:"h3"},"createOpenApiDocument")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nexport class ApiController {\n  @Get('/products/:id')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("p",null,"This example will throw this error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error: Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.\n  Path 1: /products/{id}\n  Path 2: /products/{productId}\n")),(0,a.kt)("p",null,"OpenAPI does not support paths that are identical with different parameter names. Here is a way to solve this issue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nexport class ApiController {\n  @Get('/products/:productId')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("h3",{id:"extend-swagger-ui-options"},"Extend Swagger UI options"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/"},"Swagger UI options")," can be extended using the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiOptions")," property."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n\n  uiOptions = { docExpansion: 'full' };\n}\n\n")))}u.isMDXComponent=!0},2783:function(e,n,t){n.Z=t.p+"assets/images/swagger-a641f2dfd065149a6d8c2e98ccad465e.png"},5679:function(e,n,t){n.Z=t.p+"assets/images/swagger3-3d35a6bde1ec1156853e65e4be372e6e.png"}}]);