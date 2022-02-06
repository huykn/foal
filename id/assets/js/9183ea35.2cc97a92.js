"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3989],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1568:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"Administrators & Roles"},c=void 0,l={unversionedId:"authentication-and-access-control/administrators-and-roles",id:"version-1.x/authentication-and-access-control/administrators-and-roles",title:"Administrators & Roles",description:"In simple applications, access control can be managed with static roles or even with an isAdmin column in the simplest cases.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/administrators-and-roles.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/administrators-and-roles",permalink:"/id/docs/1.x/authentication-and-access-control/administrators-and-roles",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/administrators-and-roles.md",tags:[],version:"1.x",frontMatter:{title:"Administrators & Roles"},sidebar:"someSidebar",previous:{title:"Social Auth",permalink:"/id/docs/1.x/authentication-and-access-control/social-auth"},next:{title:"Groups & Permissions",permalink:"/id/docs/1.x/authentication-and-access-control/groups-and-permissions"}},p=[{value:"Admin and Non-Admins",id:"admin-and-non-admins",children:[{value:"Static Roles",id:"static-roles",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In simple applications, access control can be managed with static roles or even with an ",(0,a.kt)("inlineCode",{parentName:"p"},"isAdmin")," column in the simplest cases."),(0,a.kt)("h2",{id:"admin-and-non-admins"},"Admin and Non-Admins"),(0,a.kt)("p",null,"If there are only two categories of users, administrators and non-administrators, a simple solution is to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"isAdmin")," column to the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," table. Then authorization is handled by looking at the ",(0,a.kt)("inlineCode",{parentName:"p"},"isAdmin")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," objects."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"entities/user.entity.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @Column()\n  isAdmin: boolean;\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"hooks/admin-required.hook.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Hook } from '@foal/core';\n\nimport { User } from '../entities';\n\nexport function AdminRequired() {\n  return Hook((ctx: Context<User>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.isAdmin) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { AdminRequired } from '../hooks';\n\nexport class AppController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @AdminRequired()\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n")),(0,a.kt)("h3",{id:"static-roles"},"Static Roles"),(0,a.kt)("p",null,"If it exists more than two categories and/or a user can belong to several categories then defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"roles")," property can also be a solution."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"entities/user.entity.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @Column('simple-array')\n  roles: string[];\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"hooks/role-required.hook.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Hook } from '@foal/core';\n\nexport function RoleRequired(role: string) {\n  return Hook((ctx: Context<User>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.roles.includes(role)) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { RoleRequired } from '../hooks';\n\nexport class AppController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @RoleRequired('admin')\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n")))}d.isMDXComponent=!0}}]);