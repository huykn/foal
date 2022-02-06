"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1954],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4010:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"REST API"},p=void 0,u={unversionedId:"api-section/rest-blueprints",id:"version-1.x/api-section/rest-blueprints",title:"REST API",description:"Example:",source:"@site/versioned_docs/version-1.x/api-section/rest-blueprints.md",sourceDirName:"api-section",slug:"/api-section/rest-blueprints",permalink:"/id/docs/1.x/api-section/rest-blueprints",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/api-section/rest-blueprints.md",tags:[],version:"1.x",frontMatter:{title:"REST API"},sidebar:"someSidebar",previous:{title:"Serializing & Deserializing",permalink:"/id/docs/1.x/serializing-and-deserializing"},next:{title:"OpenAPI & Swagger UI",permalink:"/id/docs/1.x/api-section/openapi-and-swagger-ui"}},s=[{value:"The API Behavior",id:"the-api-behavior",children:[],level:2},{value:"The Resource and its Representation",id:"the-resource-and-its-representation",children:[{value:"How to Add New Field",id:"how-to-add-new-field",children:[],level:3}],level:2},{value:"Using Authentication",id:"using-authentication",children:[],level:2},{value:"Generating OpenAPI documentation",id:"generating-openapi-documentation",children:[],level:2}],d={toc:s};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"foal generate rest-api product --register\n")),(0,l.kt)("p",null,"Building a REST API is often a common task when creating an application. To avoid reinventing the wheel, FoalTS provides a CLI command to achieve this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"foal generate rest-api <name> [--register] [--auth]\n")),(0,l.kt)("p",null,"This command generates three files: an entity, a controller and the controller's test. Depending on your directory structure, they may be generated in different locations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If two directories ",(0,l.kt)("inlineCode",{parentName:"li"},"entities")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"controllers")," exist, the files are created in these ones."),(0,l.kt)("li",{parentName:"ul"},"Otherwise they all are created in the current directory.")),(0,l.kt)("p",null,"The generated controller already has a set of implemented routes ",(0,l.kt)("strong",{parentName:"p"},"that you can customize as you like"),". It defines a REST API and is ready to use. The only thing to do is to connect the controller to the ",(0,l.kt)("inlineCode",{parentName:"p"},"AppController")," or one of its children."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--register")," option automatically registers your controller in the ",(0,l.kt)("inlineCode",{parentName:"p"},"AppController"),".")),(0,l.kt)("h2",{id:"the-api-behavior"},"The API Behavior"),(0,l.kt)("p",null,"Below is a table summarizing how the generated API works:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"HTTP Method")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"CRUD")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"Entire Collection (e.g. ",(0,l.kt)("inlineCode",{parentName:"em"},"/products"),")")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"Specific Item (e.g. ",(0,l.kt)("inlineCode",{parentName:"em"},"/products/{id}"),")")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"Read"),(0,l.kt)("td",{parentName:"tr",align:null},"200 (OK) - list of products"),(0,l.kt)("td",{parentName:"tr",align:null},"200 (OK) - the product ",(0,l.kt)("br",null)," 404 (Not Found)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"Create"),(0,l.kt)("td",{parentName:"tr",align:null},"201 (Created) - the created product ",(0,l.kt)("br",null)," 400 (Bad Request) - the validation error"),(0,l.kt)("td",{parentName:"tr",align:null},"Not implemented"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PUT"),(0,l.kt)("td",{parentName:"tr",align:null},"Update/Replace"),(0,l.kt)("td",{parentName:"tr",align:null},"Not implemented"),(0,l.kt)("td",{parentName:"tr",align:null},"200 (OK) - the updated product ",(0,l.kt)("br",null)," 400 (Bad Request) - the validation error ",(0,l.kt)("br",null)," 404 (Not Found)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,l.kt)("td",{parentName:"tr",align:null},"Update/Modify"),(0,l.kt)("td",{parentName:"tr",align:null},"Not implemented"),(0,l.kt)("td",{parentName:"tr",align:null},"200 (OK) - the updated product ",(0,l.kt)("br",null)," 400 (Bad Request) - the validation error ",(0,l.kt)("br",null)," 404 (Not Found)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"Delete"),(0,l.kt)("td",{parentName:"tr",align:null},"Not implemented"),(0,l.kt)("td",{parentName:"tr",align:null},"204 (No Content) ",(0,l.kt)("br",null)," 404 (Not Found)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /<name>s")," routes also accept two optional query parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"skip")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"take")," to handle ",(0,l.kt)("strong",{parentName:"p"},"pagination"),". If the parameters are not valid numbers, the controller responds with a 400 (Bad Request) status."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"skip")," - offset from where items should be taken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"take")," - max number of items that should be taken.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /products?skip=10&take=20\n")),(0,l.kt)("h2",{id:"the-resource-and-its-representation"},"The Resource and its Representation"),(0,l.kt)("p",null,"Once your API is set up, you can define its attributes."),(0,l.kt)("p",null,"The entity generated by default should look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n}\n")),(0,l.kt)("p",null,"And the schema of your API (defined in the controller file) should look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export const productSchhema = {\n  additionalProperties: false,\n  properties: {\n    text: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n")),(0,l.kt)("p",null,"The entity is the ",(0,l.kt)("em",{parentName:"p"},"resource"),". It is the database model used internally on the server."),(0,l.kt)("p",null,"The schema is the ",(0,l.kt)("em",{parentName:"p"},"representation of the resource"),". It defines the interface of the API."),(0,l.kt)("p",null,"In simple scenarios, the two are very similar but they can differ much more in complex applications. A resource may have several representations and it may be made of several entities."),(0,l.kt)("h3",{id:"how-to-add-new-field"},"How to Add New Field"),(0,l.kt)("p",null,"For example, if you want to add a ",(0,l.kt)("inlineCode",{parentName:"p"},"sold")," boolean field whose default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", you can do the following:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"product.entity.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n  @Column()\n  sold: boolean;\n\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"product.controller.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export const productSchhema = {\n  additionalProperties: false,\n  properties: {\n    sold: { type: 'boolean', default: false },\n    text: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n")),(0,l.kt)("h2",{id:"using-authentication"},"Using Authentication"),(0,l.kt)("p",null,"If you wish to attach a user to the resource, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--auth")," flag to do so."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"foal generate rest-api product --auth\n")),(0,l.kt)("p",null,"This flags adds an ",(0,l.kt)("inlineCode",{parentName:"p"},"owner: User")," column to your entity and uses it in the API."),(0,l.kt)("h2",{id:"generating-openapi-documentation"},"Generating OpenAPI documentation"),(0,l.kt)("p",null,"The generated controllers also have OpenAPI decorators on their methods to document the API."),(0,l.kt)("p",null,"In this way, when the ",(0,l.kt)("a",{parentName:"p",href:"/id/docs/1.x/deployment-and-environments/configuration"},"configuration key")," ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.openapi.useHooks")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", we can get a full documentation of the API using ",(0,l.kt)("a",{parentName:"p",href:"/id/docs/1.x/api-section/openapi-and-swagger-ui"},"Swagger UI")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example of documentation",src:n(1606).Z,width:"2538",height:"1298"}),"."))}m.isMDXComponent=!0},1606:function(e,t,n){t.Z=n.p+"assets/images/rest-openapi-28b755aa0e71f5a2a6ec387ea2c8ec98.png"}}]);