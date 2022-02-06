"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3251],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return h}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||o;return n?t.createElement(d,l(l({ref:r},c),{},{components:n})):t.createElement(d,l({ref:r},c))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},101:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={title:"GraphQL"},i=void 0,s={unversionedId:"api-section/graphql",id:"version-1.x/api-section/graphql",title:"GraphQL",description:"GraphQL is a query language for APIs. Unlike traditional REST APIs, GraphQL APIs have only one endpoint to which requests are sent. The content of the request describes all the operations to be performed and the data to be returned in the response. Many resources can be retrieved in a single request and the client gets exactly the properties it asks for.",source:"@site/versioned_docs/version-1.x/api-section/graphql.md",sourceDirName:"api-section",slug:"/api-section/graphql",permalink:"/docs/1.x/api-section/graphql",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/api-section/graphql.md",tags:[],version:"1.x",frontMatter:{title:"GraphQL"},sidebar:"someSidebar",previous:{title:"Public API & CORS Requests",permalink:"/docs/1.x/api-section/public-api-and-cors-requests"},next:{title:"Single Page Applications (SPA)",permalink:"/docs/1.x/frontend-integration/single-page-applications"}},c=[{value:"Basic Usage",id:"basic-usage",children:[],level:2},{value:"Using Separate Files for Type Definitions",id:"using-separate-files-for-type-definitions",children:[],level:2},{value:"Using a Service for the Root Resolvers",id:"using-a-service-for-the-root-resolvers",children:[],level:2},{value:"GraphQL Playground",id:"graphql-playground",children:[],level:2},{value:"Error Handling - Masking &amp; Logging Errors",id:"error-handling---masking--logging-errors",children:[],level:2},{value:"Authentication &amp; Authorization",id:"authentication--authorization",children:[],level:2},{value:"Using TypeGraphQL",id:"using-typegraphql",children:[],level:2},{value:"Advanced",id:"advanced",children:[{value:"Override the Resolver Context",id:"override-the-resolver-context",children:[],level:3}],level:2}],u={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," is a query language for APIs. Unlike traditional REST APIs, GraphQL APIs have only one endpoint to which requests are sent. The content of the request describes all the operations to be performed and the data to be returned in the response. Many resources can be retrieved in a single request and the client gets exactly the properties it asks for."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example of request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  project(name: "GraphQL") {\n    tagline\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example of response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "project": {\n      "tagline": "A query language for APIs"\n    }\n  }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The below document assumes that you have a basic knowledge of GraphQL.")),(0,o.kt)("p",null,"To use GraphQL with FoalTS, you need to install the packages ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/graphql"),". The first one is maintained by the GraphQL community and parses and resolves queries. The second is specific to FoalTS and allows you to configure a controller compatible with common GraphQL clients (",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-request"},"graphql-request"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/"},"Apollo Client"),", etc), load type definitions from separate files or handle errors thrown in resolvers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install graphql @foal/graphql\n")),(0,o.kt)("p",null,"Due to a specificity of the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," library, you must also modify your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    ...\n    "lib": [\n      ...\n      "ESNext.AsyncIterable"\n    ]\n  }\n  ...\n}\n')),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"The main component of the package is the abstract ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLController"),". Inheriting this class allows you to create a controller that is compatible with common GraphQL clients (",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-request"},"graphql-request"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/"},"Apollo Client"),", etc) or any client that follows the HTTP specification defined ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/serving-over-http/"},"here"),"."),(0,o.kt)("p",null,"Here is an example on how to use it with a simple schema and resolver."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"app.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n  subControllers = [\n    controller('/graphql', ApiController)\n  ]\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController } from '@foal/graphql';\nimport { buildSchema } from 'graphql';\n\nconst schema = buildSchema(`\n  type Query {\n    hello: String\n  }\n`);\n\nconst root = {\n  hello: () => {\n    return 'Hello world!';\n  },\n};\n\nexport class ApiController extends GraphQLController {\n  schema = schema;\n  resolvers = root;\n}\n")),(0,o.kt)("p",null,"And here is an example of what your client code might look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { request } from 'graphql-request';\n\nconst data = await request('/graphql', '{ hello }');\n// data equals \"{ hello: 'Hello world!' }\"\n")),(0,o.kt)("p",null,"Alternatively, if you have several strings that define your GraphQL types, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaFromTypeDefs")," function to build the schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController, schemaFromTypeDefs } from '@foal/graphql';\n\nconst source1 = `\n  type Query {\n    me: User\n  }\n`;\nconst source2 = `\n  type User {\n    id: ID\n    name: String\n  }\n`;\n\n// ...\n\nexport class ApiController extends GraphQLController {\n  schema = schemaFromTypeDefs(source1, source2);\n  // ...\n}\n\n")),(0,o.kt)("h2",{id:"using-separate-files-for-type-definitions"},"Using Separate Files for Type Definitions"),(0,o.kt)("p",null,"If you want to specify type definitions in separate files, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaFromTypeGlob")," function for this."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src/\n'- app/\n  '- controllers/\n    |- query.graphql\n    |- user.graphql\n    '- api.controller.ts\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"query.graphql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  me: User\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"user.graphql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: ID\n  name: String\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController, schemaFromTypeGlob } from '@foal/graphql';\nimport { join } from 'path';\n\nexport class ApiController extends GraphQLController {\n  schema = schemaFromTypeGlob(join(__dirname, '**/*.graphql'));\n  // ...\n}\n")),(0,o.kt)("p",null,"Note that for this to work, you must copy the graphql files during the build. To do this, you can update some lines of your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "scripts": {\n    ...\n    "build:app": "copy-cli \\"src/**/*.html\\" build && copy-cli \\"src/**/*.graphql\\" build && tsc -p tsconfig.app.json",\n    ...\n    "build:test": "copy-cli \\"src/**/*.html\\" build && copy-cli \\"src/**/*.graphql\\" && tsc -p tsconfig.test.json",\n    ...\n    "build:e2e": "copy-cli \\"src/**/*.html\\" build && copy-cli \\"src/**/*.graphql\\" && tsc -p tsconfig.e2e.json"\n    ...\n  }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Alternatively, if you want to specify only specific files instead of using a glob pattern, you can call ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaFromTypePaths"),"."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController, schemaFromTypePaths } from '@foal/graphql';\nimport { join } from 'path';\n\nexport class ApiController extends GraphQLController {\n  schema = schemaFromTypePaths(\n    join(__dirname, './query.graphql'),\n    join(__dirname, './user.graphql')\n  );\n  // ...\n}\n"))),(0,o.kt)("h2",{id:"using-a-service-for-the-root-resolvers"},"Using a Service for the Root Resolvers"),(0,o.kt)("p",null,"Root resolvers can also be grouped into a service in order to benefit from all the advantages offered by services (dependency injection, etc.). All you have to do is add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@dependency")," decorator as you would with any service."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\nimport { GraphQLController } from '@foal/graphql';\nimport { RootResolverService } from '../services';\n\n// ...\n\nexport class ApiController extends GraphQLController {\n  schema = // ...\n\n  @dependency\n  resolvers: RootResolverService;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"root-resolver.service.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class RootResolverService {\n\n  hello() {\n    return 'Hello world!';\n  }\n\n}\n")),(0,o.kt)("h2",{id:"graphql-playground"},"GraphQL Playground"),(0,o.kt)("p",null,"Next releases of FoalTS will include support for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL"),"."),(0,o.kt)("h2",{id:"error-handling---masking--logging-errors"},"Error Handling - Masking & Logging Errors"),(0,o.kt)("p",null,"By default, GraphQL returns all errors thrown (or rejected) in the resolvers. However, this behavior is often not desired in production as it could cause sensitive information to leak from the server."),(0,o.kt)("p",null,"In comparison with REST APIs, when the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.x/deployment-and-environments/configuration"},"configuration key"),"  ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.debug")," does not equal ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (production case), details of the errors thrown in controllers are not returned to the client. Only a ",(0,o.kt)("inlineCode",{parentName:"p"},"500 - Internal Server Error")," error is sent back."),(0,o.kt)("p",null,"In a similar way, FoalTS provides two utilities ",(0,o.kt)("inlineCode",{parentName:"p"},"formatError")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@FormatError")," for your GraphQL APIs to log and mask errors.  When ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.debug")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the errors are converted into a new one whose unique message is ",(0,o.kt)("inlineCode",{parentName:"p"},"Internal Server Error"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example of GraphQL response in production")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": { "user": null },\n  "errors": [\n    {\n      "locations": [ { "column": 2, "line": 1 } ],\n      "message": "Internal Server Error",\n      "path": [ "user" ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Here are examples on how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"formatError")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@FormatError"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function user() {\n  // ...\n}\n\nconst resolvers = {\n  user: formatError(user)\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class ResolverService {\n  @FormatError()\n  user() {\n    // ...\n  }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"formatError")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@FormatError")," make your functions become asynchronous. This means that any value returned by the function is now a resolved promise of this value, and any errors thrown in the function is converted into a rejected promise. This only has an impact on unit testing as you may need to preceed your function calls by the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"await"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"formatError")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@FormatError")," also accept an optional parameter to override its default behavior. It is a function that takes the error thrown or rejected in the resolver and return the error that must be sent to the client. It may be asynchronous or synchronous."),(0,o.kt)("p",null,"By default, this function is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function maskAndLogError(err: any): any {\n  console.log(err);\n\n  if (Config.get('settings.debug')) {\n    return err;\n  }\n\n  return new Error('Internal Server Error');\n}\n")),(0,o.kt)("p",null,"But we can also imagine other implementations such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { reportErrorTo3rdPartyService } from 'somewhere';\n\nasync function maskAndLogError(err: any): Promise<any> {\n  console.log(err);\n\n  try {\n    await reportErrorTo3rdPartyService(err);\n  } catch (error) {}\n\n  if (err instanceof MyCustomError) {\n    return err;\n  }\n\n  if (Config.get('settings.debug')) {\n    return err;\n  }\n\n  return new Error('Internal Server Error');\n}\n")),(0,o.kt)("h2",{id:"authentication--authorization"},"Authentication & Authorization"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The below code is an example of managing authentication and authorization with a GraphQL controller.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController } from '@foal/graphql';\nimport { JWTRequired } from '@foal/jwt';\nimport { fetchUser } from '@foal/typeorm';\nimport { buildSchema } from 'graphql';\n\nimport { User } from '../entities';\n\nconst schema = buildSchema(`\n  type Query {\n    hello: String\n  }\n`);\n\nconst root = {\n  hello: (_, context) => {\n    if (!context.user.isAdmin) {\n      return null;\n    }\n    return 'Hello world!';\n  },\n};\n\n@JWTRequired({ user: fetchUser(User) })\nexport class ApiController extends GraphQLController {\n  schema = schema;\n  resolvers = root;\n}\n")),(0,o.kt)("h2",{id:"using-typegraphql"},"Using TypeGraphQL"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://typegraphql.com/"},"TypeGraphQL")," is a library that allows you to create GraphQL schemas and resolvers with TypeScript classes and decorators."))),(0,o.kt)("p",null,"You can use TypeGraphQL by simply calling its ",(0,o.kt)("inlineCode",{parentName:"p"},"buildSchema")," function."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController } from '@foal/graphql';\nimport { buildSchema, Field, ObjectType, Query, Resolver } from 'type-graphql';\n\n@ObjectType()\nclass Recipe {\n  @Field()\n  title: string;\n}\n\n@Resolver(Recipe)\nclass RecipeResolver {\n\n  @Query(returns => Recipe)\n  async recipe() {\n    return {\n      title: 'foobar'\n    };\n  }\n\n}\n\nexport class ApiController extends GraphQLController {\n  schema = buildSchema({\n    resolvers: [ RecipeResolver ]\n  });\n}\n")),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("h3",{id:"override-the-resolver-context"},"Override the Resolver Context"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"GraphQL context")," that is passed to the resolvers is by default the ",(0,o.kt)("em",{parentName:"p"},"request context"),". This behavior can be changed by overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"getResolverContext")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@foal/core';\nimport { GraphQLController } from '@foal/graphql';\n\nexport class ApiController extends GraphQLController {\n  // ...\n\n  getResolverContext(ctx: Context) {\n    return { user: ctx.user };\n  }\n}\n")))}m.isMDXComponent=!0}}]);