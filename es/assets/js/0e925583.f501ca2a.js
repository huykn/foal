"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2268],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9143:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={title:"Serializaci\xf3n y Deserializaci\xf3n"},l=void 0,c={unversionedId:"common/serializing-and-deserializing",id:"common/serializing-and-deserializing",title:"Serializaci\xf3n y Deserializaci\xf3n",description:"This document shows how to serialize class instances into plain objects and, conversely, how to deserialize plain objects into class instances. It is based on the class-transformer library.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/common/serializing-and-deserializing.md",sourceDirName:"common",slug:"/common/serializing-and-deserializing",permalink:"/es/docs/common/serializing-and-deserializing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/serializing-and-deserializing.md",tags:[],version:"current",frontMatter:{title:"Serializaci\xf3n y Deserializaci\xf3n"},sidebar:"someSidebar",previous:{title:"Validaci\xf3n & Sanitizaci\xf3n",permalink:"/es/docs/common/validation-and-sanitization"},next:{title:"Templates (SSR)",permalink:"/es/docs/common/templating"}},p=[{value:"The <code>class-transformer</code> library",id:"the-class-transformer-library",children:[],level:2},{value:"Usage with a Hook",id:"usage-with-a-hook",children:[],level:2}],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document shows how to serialize class instances into plain objects and, conversely, how to deserialize plain objects into class instances. It is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer"},"class-transformer")," library."),(0,o.kt)("p",null,"Serialization is particularly interesting if you need to transform HTTP request bodies into model instances or, inversely, convert model instances into plain objects to be returned in HTTP responses."),(0,o.kt)("h2",{id:"the-class-transformer-library"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"class-transformer")," library"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install class-transformer\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer")," has two main functions to transform objects: ",(0,o.kt)("inlineCode",{parentName:"p"},"plainToClass")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"classToPlain"),". Some examples of their use are given below."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Other functions also exist and can be found in the README of the ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/typestack/class-transformer"},"library repository"),"."))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"plainToClass")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { plainToClass } from 'class-transformer';\n\nclass User {\n  firstName: string;\n  lastName: string;\n\n  getFullName() {\n    return firstName +  ' ' + lastName;\n  }\n}\n\nconst user = {\n  firstName: 'John',\n  lastName: 'Doe'\n}\n\nconst user2 = plainToClass(User, user);\n// user2 is an instance of User\nconsole.log(user2.getFullName());\n// John Doe\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"classToPlain")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { classToPlain, Exclude } from 'class-transformer';\n \nexport class User {\n  id: number;\n  email: string;\n  \n  @Exclude()\n  password: string;\n}\n\nconst user = new User();\nuser.id = 1;\nuser.email = 'jane.doe@foalts.org';\nuser.password = 'xxx';\n\nconst serializedUser = classToPlain(user);\nconsole.log(serializedUser instanceof User);\n// false\nconsole.log(serializedUser);\n// {\n//   id: 1,\n//   email: 'jane.doe@foalts.org'\n// }\n")),(0,o.kt)("p",null,"Additional options can be provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"classToPlain")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"plainToClass")," functions. ",(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer")," also offers other interesting features (nested objects, property renaming, etc) that can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer#readme"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Caution: These functions do not validate data.")," They do not guarantee that all declared properties are assigned and that no additional properties are assigned to the object. They behave more or less like a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign"),". Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/common/validation-and-sanitization"},"validation page")," if you need to validate data.")),(0,o.kt)("h2",{id:"usage-with-a-hook"},"Usage with a Hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install class-transformer @foal/typestack\n")),(0,o.kt)("p",null,"If you want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer")," within a hook to transform request bodies, you can install the package ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/typestack")," for this. It provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"@UnserializeBody")," hook that transforms the request body into an instance of a given class."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"product.entity.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\n// BaseEntity adds the method \"save\" to the class.\nexport class Product extends BaseEntity {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Post, ValidateBody } from '@foal/core';\nimport { UnserializeBody } from '@foal/typestack';\nimport { Product } from '../entities';\n\nexport class ApiController {\n\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    type: 'object',\n  })\n  @UnserializeBody(Product)\n  async createProduct(ctx: Context) {\n    // ctx.request.body is an instance of Product\n    const product = ctx.request.body;\n    await product.save();\n    return new HttpResponseCreated();\n  }\n\n}\n")),(0,o.kt)("p",null,"The hook takes also an optional parameter to specify the options of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer"},"class-transformer")," library."))}d.isMDXComponent=!0}}]);