"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9006],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5928:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Conexi\xf3n de los Usuarios",id:"tuto-8-authentication",slug:"8-authentication"},l=void 0,u={unversionedId:"tutorials/real-world-example-with-react/tuto-8-authentication",id:"tutorials/real-world-example-with-react/tuto-8-authentication",title:"Conexi\xf3n de los Usuarios",description:"Los posts se muestran en la p\xe1gina de inicio. Si queremos que los usuarios puedan publicar nuevos posts y subir una foto de perfil, tenemos que permitirles iniciar sesi\xf3n en la aplicaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/8-authentication.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/8-authentication",permalink:"/es/docs/tutorials/real-world-example-with-react/8-authentication",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/8-authentication.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Conexi\xf3n de los Usuarios",id:"tuto-8-authentication",slug:"8-authentication"},sidebar:"someSidebar",previous:{title:"La Aplicaci\xf3n Frontend",permalink:"/es/docs/tutorials/real-world-example-with-react/7-add-frontend"},next:{title:"Autenticaci\xf3n en la API",permalink:"/es/docs/tutorials/real-world-example-with-react/9-authenticated-api"}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Los posts se muestran en la p\xe1gina de inicio. Si queremos que los usuarios puedan publicar nuevos posts y subir una foto de perfil, tenemos que permitirles iniciar sesi\xf3n en la aplicaci\xf3n."),(0,o.kt)("p",null,"Para ello, utilizaremos las sesiones de Foal con cookies."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"FoalTS ofrece muchas opciones para autenticar a los usuarios. Por ejemplo, puede enviar tokens de sesi\xf3n con la cabecera ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," o utilizar tokens sin estado con JWT. No exploraremos todas estas posibilidades en este tutorial pero puede encontrar la documentaci\xf3n completa ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/authentication-and-access-control/quick-start"},"aqu\xed"),".")),(0,o.kt)("p",null,"Abra el archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"api.controller.ts")," y a\xf1ada el hook ",(0,o.kt)("inlineCode",{parentName:"p"},"@UseSessions")," en la parte superior de la clase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiServer, controller, UseSessions } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\nimport { User } from '../entities';\nimport { StoriesController } from './api';\n\n@ApiInfo({\n  title: 'Application API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User),\n})\nexport class ApiController {\n\n  subControllers = [\n    controller('/stories', StoriesController),\n  ];\n\n}\n\n")),(0,o.kt)("p",null,"Cuando se utiliza con la opci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"cookie"),", este hook asegura que ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.session")," se defina siempre en cada m\xe9todo del controlador y sus subcontroladores. Este objeto puede ser utilizado para almacenar informaci\xf3n entre m\xfaltiples consultas, como un ID de usuario por ejemplo. Se utilizar\xe1 para autenticar a los usuarios."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"En segundo plano, Foal genera un token de sesi\xf3n \xfanico para cada usuario que utiliza la API y lo almacena en una cookie en el host del cliente. Cuando el cliente realiza una nueva solicitud, el navegador env\xeda autom\xe1ticamente el token con la solicitud para que el servidor pueda recuperar la informaci\xf3n de la sesi\xf3n. Los datos de la sesi\xf3n se almacenan en la base de datos en la tabla ",(0,o.kt)("em",{parentName:"p"},"sessions"),"."),(0,o.kt)("p",{parentName:"blockquote"},"Pero no tiene que preocuparse por ello, todo es gestionado por Foal.")),(0,o.kt)("p",null,"Cree un nuevo controlador."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller api/auth --register\n")),(0,o.kt)("p",null,"Abra el nuevo archivo creado y a\xf1ada dos rutas."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Punto final"),(0,o.kt)("th",{parentName:"tr",align:null},"M\xe9todo"),(0,o.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/auth/login")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POST")),(0,o.kt)("td",{parentName:"tr",align:null},"Inicia la sesi\xf3n del usuario. Se espera un correo electr\xf3nico y una contrase\xf1a en el cuerpo de la solicitud.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/auth/logout")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POST")),(0,o.kt)("td",{parentName:"tr",align:null},"Cierra la sesi\xf3n del usuario.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, hashPassword, HttpResponseNoContent, HttpResponseOK, HttpResponseUnauthorized, Post, Session, ValidateBody, verifyPassword } from '@foal/core';\nimport { User } from '../../entities';\n\nconst credentialsSchema = {\n  type: 'object',\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  additionalProperties: false,\n};\n\nexport class AuthController {\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<User|undefined, Session>) {\n    const email = ctx.request.body.email;\n    const password = ctx.request.body.password;\n\n    const user = await User.findOne({ email });\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!(await verifyPassword(password, user.password))) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseOK({\n      id: user.id,\n      name: user.name,\n    });\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context<User|undefined, Session>) {\n    await ctx.session.destroy();\n    return new HttpResponseNoContent();\n  }\n\n}\n\n")),(0,o.kt)("p",null,"El m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," comprueba primero que el usuario existe y que las credenciales proporcionadas son correctas. Si es as\xed, asocia el usuario a la sesi\xf3n actual."),(0,o.kt)("p",null,"En las siguientes consultas, el hook ",(0,o.kt)("em",{parentName:"p"},"UseSessions")," recuperar\xe1 el ID del usuario de la sesi\xf3n y establecer\xe1 la propiedad ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user")," en consecuencia. Si el usuario no se ha conectado previamente, entonces ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user")," ser\xe1 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Si lo ha hecho, entonces ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user")," ser\xe1 una instancia de ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),". Esto es posible gracias a la opci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," que proporcionamos al hook anteriormente. Es la funci\xf3n que toma el ID de usuario como par\xe1metro y devuelve el valor a asignar a ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user"),"."))}d.isMDXComponent=!0}}]);