"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[193],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2306:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"Introduction",id:"tuto-1-introduction",slug:"1-introduction"},u=void 0,s={unversionedId:"tutorials/real-world-example-with-react/tuto-1-introduction",id:"tutorials/real-world-example-with-react/tuto-1-introduction",title:"Introduction",description:"This tutorial shows how to build a real-world application with React and Foal. It assumes that you have already read the first guide How to build a Simple To-Do List and that you have a basic knowledge of React.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/1-introduction.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/1-introduction",permalink:"/id/docs/tutorials/real-world-example-with-react/1-introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/1-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",id:"tuto-1-introduction",slug:"1-introduction"},sidebar:"someSidebar",previous:{title:"Unit Testing",permalink:"/id/docs/tutorials/simple-todo-list/7-unit-testing"},next:{title:"Database Set Up",permalink:"/id/docs/tutorials/real-world-example-with-react/2-database-set-up"}},c=[{value:"Application Overview",id:"application-overview",children:[],level:2},{value:"Get Started",id:"get-started",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial shows how to build a real-world application with React and Foal. It assumes that you have already read the first guide ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"/id/docs/tutorials/simple-todo-list/1-installation"},"How to build a Simple To-Do List"))," and that you have a basic knowledge of React."),(0,o.kt)("p",null,"In this tutorial, you will learn to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"establish a connection with MySQL or Postgres,"),(0,o.kt)("li",{parentName:"ul"},"provide credentials to the application in a secure way,"),(0,o.kt)("li",{parentName:"ul"},"create models with many-to-one relations,"),(0,o.kt)("li",{parentName:"ul"},"use a query builder,"),(0,o.kt)("li",{parentName:"ul"},"generate an interface to test your API (Swagger UI),"),(0,o.kt)("li",{parentName:"ul"},"fix same-origin policy errors,"),(0,o.kt)("li",{parentName:"ul"},"allow users to log in and register with an email and a password,"),(0,o.kt)("li",{parentName:"ul"},"authenticate users on the frontend and the backend,"),(0,o.kt)("li",{parentName:"ul"},"manage access control,"),(0,o.kt)("li",{parentName:"ul"},"protect against CSRF attacks,"),(0,o.kt)("li",{parentName:"ul"},"upload and save files,"),(0,o.kt)("li",{parentName:"ul"},"allow users to connect with a social provider (Google),"),(0,o.kt)("li",{parentName:"ul"},"and build the application for production.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"For the sake of simplicity, the front-end application will not use a state management library (such as ",(0,o.kt)("a",{parentName:"em",href:"https://redux.js.org/"},"redux"),"). But you can of course add one if you wish. The logic to follow will remain mainly the same."))),(0,o.kt)("h2",{id:"application-overview"},"Application Overview"),(0,o.kt)("p",null,"The application you will create is a social website where users can share interesting links to tutorials. All posts will be public, so no authentication will be required to view them. Publishing a post, on the other hand, will require the creation of an account."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Feed page"),"\n",(0,o.kt)("img",{alt:"Feed page",src:a(4911).Z,width:"2560",height:"1452"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Profile page"),"\n",(0,o.kt)("img",{alt:"Profile page",src:a(4765).Z,width:"2560",height:"1450"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Registration and login pages"),"\n",(0,o.kt)("img",{alt:"Registration and login pages",src:a(2046).Z,width:"2560",height:"1448"})),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"Let's get started. First of all, create a new directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir foal-react-tuto\n")),(0,o.kt)("p",null,"Generate the backend application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd foal-react-tuto\nfoal createapp backend-app\n")),(0,o.kt)("p",null,"Then start the development server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd backend-app\nnpm run develop\n")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001")," in your browser. You should see the ",(0,o.kt)("em",{parentName:"p"},"Welcome on board")," message."))}d.isMDXComponent=!0},4911:function(e,t,a){t.Z=a.p+"assets/images/feed-cafaeeea52a28612177a5a70e6c1cf12.png"},4765:function(e,t,a){t.Z=a.p+"assets/images/profile-d12409506e2332f8a2ef8391801ef85d.png"},2046:function(e,t,a){t.Z=a.p+"assets/images/sign-up-and-log-in-ea14815a2f012118eef7e058bd93c500.png"}}]);