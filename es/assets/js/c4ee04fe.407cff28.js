"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2291],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?o.createElement(g,i(i({ref:n},d),{},{components:t})):o.createElement(g,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3893:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={title:"MongoDB",sidebar_label:"MongoDB (TypeORM or Mongoose)"},s=void 0,p={unversionedId:"databases/mongodb",id:"version-1.x/databases/mongodb",title:"MongoDB",description:"FoalTS provides two ways to interact with a MongoDB database in your application: Mongoose and TypeORM.",source:"@site/versioned_docs/version-1.x/databases/mongodb.md",sourceDirName:"databases",slug:"/databases/mongodb",permalink:"/es/docs/1.x/databases/mongodb",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/mongodb.md",tags:[],version:"1.x",frontMatter:{title:"MongoDB",sidebar_label:"MongoDB (TypeORM or Mongoose)"},sidebar:"someSidebar",previous:{title:"Generate & Run Migrations",permalink:"/es/docs/1.x/databases/generate-and-run-migrations"},next:{title:"Using Another ORM",permalink:"/es/docs/1.x/databases/using-another-orm"}},d=[{value:"Usage with Mongoose",id:"usage-with-mongoose",children:[{value:"Generating a new project with Mongoose",id:"generating-a-new-project-with-mongoose",children:[],level:3},{value:"Generating a model",id:"generating-a-model",children:[],level:3},{value:"Configuration",id:"configuration",children:[],level:3},{value:"Authentication",id:"authentication",children:[{value:"The <code>MongoDBStore</code>",id:"the-mongodbstore",children:[],level:4},{value:"The <code>fetchUser</code> function",id:"the-fetchuser-function",children:[],level:4}],level:3}],level:2},{value:"Usage with TypeORM",id:"usage-with-typeorm",children:[{value:"Configuration",id:"configuration-1",children:[],level:3},{value:"Authentication",id:"authentication-1",children:[{value:"The <code>MongoDBStore</code>",id:"the-mongodbstore-1",children:[],level:4},{value:"The <code>fetchMongoDBUser</code> function",id:"the-fetchmongodbuser-function",children:[],level:4}],level:3}],level:2},{value:"Limitations",id:"limitations",children:[],level:2}],c={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"FoalTS provides two ways to interact with a MongoDB database in your application: ",(0,r.kt)("a",{parentName:"p",href:"https://mongoosejs.com/"},"Mongoose")," and ",(0,r.kt)("a",{parentName:"p",href:"https://typeorm.io/#/"},"TypeORM"),"."),(0,r.kt)("h2",{id:"usage-with-mongoose"},"Usage with Mongoose"),(0,r.kt)("h3",{id:"generating-a-new-project-with-mongoose"},"Generating a new project with Mongoose"),(0,r.kt)("p",null,"When creating an application with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--mongodb")," flag, the CLI generates a new project with ",(0,r.kt)("inlineCode",{parentName:"p"},"mongoose")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/mongoose")," installed. The ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," model is defined using this ODM as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"create-user")," script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal createapp my-app --mongodb\n")),(0,r.kt)("h3",{id:"generating-a-model"},"Generating a model"),(0,r.kt)("p",null,"You cannot create ",(0,r.kt)("em",{parentName:"p"},"entities")," in a Mongoose project, as it is specific to TypeORM. Instead, you can use this command to generate a new model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal g model <name>\n")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The URI of the MongoDB database can be passed through:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the config file ",(0,r.kt)("inlineCode",{parentName:"li"},"config/default.json")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"mongodb.uri")," key,"),(0,r.kt)("li",{parentName:"ul"},"or with the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"MONGODB_URI"),".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example (",(0,r.kt)("inlineCode",{parentName:"em"},"config/default.json"),")"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "mongodb": {\n    "uri": "mongodb://localhost:27017/db"\n  }\n}\n')),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("h4",{id:"the-mongodbstore"},"The ",(0,r.kt)("inlineCode",{parentName:"h4"},"MongoDBStore")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @foal/mongodb\n")),(0,r.kt)("p",null,"If you use sessions with ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenRequired")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenOptional"),", you must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDBStore")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/mongodb"),"."),(0,r.kt)("h4",{id:"the-fetchuser-function"},"The ",(0,r.kt)("inlineCode",{parentName:"h4"},"fetchUser")," function"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example with JSON Web Tokens"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\nimport { fetchUser } from '@foal/mongoose';\n\nimport { User } from '../models';\n\n@JWTRequired({ user: fetchUser(User) })\nclass MyController {}\n")),(0,r.kt)("h2",{id:"usage-with-typeorm"},"Usage with TypeORM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm uninstall sqlite3\nnpm install mongodb\n")),(0,r.kt)("h3",{id:"configuration-1"},"Configuration"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ormconfig.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: \"mongodb\",\n  database: Config.get2('database.database', 'string'),\n  dropSchema: Config.get2('database.dropSchema', 'boolean', false),\n  entities: [\"build/app/**/*.entity.js\"],\n  host: Config.get2('database.host', 'string'),\n  port: Config.get2('database.port', 'number'),\n  synchronize: Config.get2('database.synchronize', 'boolean', false)\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"config/default.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "database": {\n    "database": "mydb",\n    "host": "localhost",\n    "port": 27017\n  }\n}\n')),(0,r.kt)("h3",{id:"authentication-1"},"Authentication"),(0,r.kt)("h4",{id:"the-mongodbstore-1"},"The ",(0,r.kt)("inlineCode",{parentName:"h4"},"MongoDBStore")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @foal/mongodb\n")),(0,r.kt)("p",null,"If you use sessions with ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenRequired")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenOptional"),", you must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDBStore")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/mongodb"),". ",(0,r.kt)("strong",{parentName:"p"},"The TypeORMStore does not work with noSQL databases.")),(0,r.kt)("h4",{id:"the-fetchmongodbuser-function"},"The ",(0,r.kt)("inlineCode",{parentName:"h4"},"fetchMongoDBUser")," function"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"user.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, ObjectID, ObjectIdColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @ObjectIdColumn()\n  id: ObjectID;\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example with JSON Web Tokens"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\nimport { fetchMongoDBUser } from '@foal/typeorm';\n\nimport { User } from '../entities';\n\n@JWTRequired({ user: fetchMongoDBUser(User) })\nclass MyController {}\n")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"When using MongoDB, there are some features that are not available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"foal g rest-api <name>")," command,"),(0,r.kt)("li",{parentName:"ul"},"and the ",(0,r.kt)("em",{parentName:"li"},"Groups & Permissions")," system.")))}m.isMDXComponent=!0}}]);