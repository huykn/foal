(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{205:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(288)),l={title:"Su Primera Ruta"},i={unversionedId:"tutorials/real-world-example-with-react/5-our-first-route",id:"tutorials/real-world-example-with-react/5-our-first-route",isDocsHomePage:!1,title:"Su Primera Ruta",description:"La base de datos est\xe1 ahora llena de algunas publicaciones. Implementemos la primera ruta para recuperarlas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/5-our-first-route.md",slug:"/tutorials/real-world-example-with-react/5-our-first-route",permalink:"/es/docs/tutorials/real-world-example-with-react/5-our-first-route",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/5-our-first-route.md",version:"current",sidebar:"someSidebar",previous:{title:"Los Scripts Shell",permalink:"/es/docs/tutorials/real-world-example-with-react/4-the-shell-scripts"},next:{title:"Prueba de la API con Swagger",permalink:"/es/docs/tutorials/real-world-example-with-react/6-swagger-interface"}},c=[],u={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"La base de datos est\xe1 ahora llena de algunas publicaciones. Implementemos la primera ruta para recuperarlas."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Punto final"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"M\xe9todo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/stories")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GET")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enumera las publicaciones de todos los usuarios. Se puede proporcionar un par\xe1metro de consulta opcional ",Object(o.b)("inlineCode",{parentName:"td"},"authorId")," para filtrar las publicaciones a devolver.")))),Object(o.b)("p",null,"Primero, genere el controlador de las publicaciones."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"foal generate controller api/stories --register\n")),Object(o.b)("p",null,"Aparece un nuevo archivo en el subdirectorio ",Object(o.b)("inlineCode",{parentName:"p"},"api"),". \xc1bralo y sustituya su contenido."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';\nimport { Story, User } from '../../entities';\n\nexport class StoriesController {\n  @Get()\n  @ValidateQueryParam('authorId', { type: 'number' }, { required: false })\n  async readStories(ctx: Context) {\n    const authorId = ctx.request.query.authorId as number|undefined;\n\n    let queryBuilder = Story\n      .createQueryBuilder('story')\n      .leftJoinAndSelect('story.author', 'author')\n      .select([\n        'story.id',\n        'story.title',\n        'story.link',\n        'author.id',\n        'author.name'\n      ]);\n\n    if (authorId !== undefined) {\n      queryBuilder = queryBuilder.where('author.id = :authorId', { authorId });\n    }\n\n    const stories = await queryBuilder.getMany();\n\n    return new HttpResponseOK(stories);\n  }\n}\n\n")),Object(o.b)("p",null,"El m\xe9todo ",Object(o.b)("inlineCode",{parentName:"p"},"readStories")," recupera y devuelve las publicaciones junto con alguna informaci\xf3n sobre sus autores."),Object(o.b)("p",null,"Al enviar una consulta a este punto final, el cuerpo de la respuesta tendr\xe1 el siguiente aspecto:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 1,\n    "title": "How to build a simple to-do list",\n    "link": "https://foalts.org/docs/tutorials/simple-todo-list/1-installation",\n    "author": {\n      "id": 1,\n      "name": "John"\n    }\n  },\n  {\n    "id": 2,\n    "title": "FoalTS architecture overview",\n    "link": "https://foalts.org/docs/architecture/architecture-overview",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n  {\n    "id": 3,\n    "title": "Authentication with Foal",\n    "link": "https://foalts.org/docs/authentication-and-access-control/quick-start",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n]\n')))}s.isMDXComponent=!0},288:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);