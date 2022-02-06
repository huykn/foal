"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7309],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5715:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"The Shell Scripts",id:"tuto-4-the-shell-scripts",slug:"4-the-shell-scripts"},l=void 0,c={unversionedId:"tutorials/real-world-example-with-react/tuto-4-the-shell-scripts",id:"tutorials/real-world-example-with-react/tuto-4-the-shell-scripts",title:"The Shell Scripts",description:"Your models are ready to be used. As in the previous tutorial, you will use shell scripts to feed the database.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/4-the-shell-scripts.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/4-the-shell-scripts",permalink:"/id/docs/tutorials/real-world-example-with-react/4-the-shell-scripts",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/4-the-shell-scripts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"The Shell Scripts",id:"tuto-4-the-shell-scripts",slug:"4-the-shell-scripts"},sidebar:"someSidebar",previous:{title:"The User and Story Models",permalink:"/id/docs/tutorials/real-world-example-with-react/3-the-models"},next:{title:"Your First Route",permalink:"/id/docs/tutorials/real-world-example-with-react/5-our-first-route"}},p=[{value:"The <code>create-user</code> script",id:"the-create-user-script",children:[],level:2},{value:"The <code>create-story</code> script",id:"the-create-story-script",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Your models are ready to be used. As in the previous tutorial, you will use shell scripts to feed the database."),(0,o.kt)("h2",{id:"the-create-user-script"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"create-user")," script"),(0,o.kt)("p",null,"A script called ",(0,o.kt)("inlineCode",{parentName:"p"},"create-user")," already exists in the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," directory."),(0,o.kt)("p",null,"Open the file and replace its content with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { hashPassword } from '@foal/core';\nimport { createConnection, getConnection } from 'typeorm';\n\n// App\nimport { User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' },\n    name: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args: { email: string, password: string, name?: string }) {\n  const user = new User();\n  user.email = args.email;\n  user.password = await hashPassword(args.password);\n  user.name = args.name ?? 'Unknown';\n  user.avatar = '';\n\n  await createConnection();\n\n  try {\n    console.log(await user.save());\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n\n")),(0,o.kt)("p",null,"Some parts of this code should look familiar to you."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," object is used to validate the arguments typed on the command line. In this case, the script expects two mandatory parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," and an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," property checks that the ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," string is an email (presence of ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," character, etc). "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function is called after successful validation. It is divided into several parts. First, it creates a new user with the arguments specified in the command line. Then it establishes a connection to the database and saves the user."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"hashPassword")," function is used to hash and salt passwords before storing them in the database. For security reasons, you should use this function before saving passwords.")),(0,o.kt)("p",null,"Build the script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"Then create two new users."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'foal run create-user email="john@foalts.org" password="john_password" name="John"\nfoal run create-user email="mary@foalts.org" password="mary_password" name="Mary"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you try to re-run one of these commands, you'll get the MySQL error below as the email key is unique."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"ER_DUP_ENTRY: Duplicate entry 'john@foalts.org' for key 'IDX_xxx'"))),(0,o.kt)("h2",{id:"the-create-story-script"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"create-story")," script"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"create-story")," script is a bit more complex as ",(0,o.kt)("inlineCode",{parentName:"p"},"Story")," has a many-to-one relation with ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate script create-story\n")),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"create-story.ts")," file and replace its content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createConnection } from 'typeorm';\nimport { Story, User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    author: { type: 'string', format: 'email', maxLength: 255 },\n    title: { type: 'string', maxLength: 255 },\n    link: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'author', 'title', 'link' ],\n  type: 'object',\n};\n\nexport async function main(args: { author: string, title: string, link: string }) {\n  const connection = await createConnection();\n\n  const user = await User.findOneOrFail({ email: args.author });\n\n  const story = new Story();\n  story.author = user;\n  story.title = args.title;\n  story.link = args.link;\n\n  try {\n    console.log(await story.save());\n  } catch (error) {\n    console.error(error);\n  } finally {\n    await connection.close();\n  }\n}\n\n")),(0,o.kt)("p",null,"We added an ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," parameter to know which user posted the story. It expects the user's email."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function then tries to find the user who has this email. If it exists, the user is added to the story as the author. If it does not, then the script ends with a message displayed in the console."),(0,o.kt)("p",null,"Build the script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"And create new stories for each user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'foal run create-story author="john@foalts.org" title="How to build a simple to-do list" link="https://foalts.org/docs/tutorials/simple-todo-list/1-installation"\nfoal run create-story author="mary@foalts.org" title="FoalTS architecture overview" link="https://foalts.org/docs/architecture/architecture-overview"\nfoal run create-story author="mary@foalts.org" title="Authentication with Foal" link="https://foalts.org/docs/authentication-and-access-control/quick-start"\n')))}d.isMDXComponent=!0}}]);