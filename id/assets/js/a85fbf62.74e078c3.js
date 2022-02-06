"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2451],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3350:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Database Set Up",id:"tuto-2-database-set-up",slug:"2-database-set-up"},s=void 0,p={unversionedId:"tutorials/real-world-example-with-react/tuto-2-database-set-up",id:"tutorials/real-world-example-with-react/tuto-2-database-set-up",title:"Database Set Up",description:"The first step in this tutorial is to establish a database connection. If you haven't already done so, install MySQL or PostgreSQL.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/2-database-set-up.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/2-database-set-up",permalink:"/id/docs/tutorials/real-world-example-with-react/2-database-set-up",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/2-database-set-up.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Database Set Up",id:"tuto-2-database-set-up",slug:"2-database-set-up"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/id/docs/tutorials/real-world-example-with-react/1-introduction"},next:{title:"The User and Story Models",permalink:"/id/docs/tutorials/real-world-example-with-react/3-the-models"}},u=[],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The first step in this tutorial is to establish a database connection. If you haven't already done so, install ",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/"},"MySQL")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"PostgreSQL"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"By default, Foal uses SQLite in every new application, as it does not require any installation. If you want to continue using it in this tutorial, you can skip this section and go to the next page.")," ")),(0,o.kt)("p",null,"First, install MySQL (or Postgres) driver."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install mysql # or pg\n")),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/default.json")," file and update the ",(0,o.kt)("inlineCode",{parentName:"p"},"database")," section as follows. If your database is PostgreSQL, change the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," value to ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n  },\n  "database": {\n    "type": "mysql",\n    "host": "env(DB_HOST)",\n    "port": "env(DB_PORT)",\n    "username": "env(DB_USERNAME)",\n    "password": "env(DB_PASSWORD)",\n    "database": "env(DB_NAME)"\n  }\n}\n\n')),(0,o.kt)("p",null,"This file is the main configuration file for the application and is used as the basis for whatever environment the application is running in."),(0,o.kt)("p",null,"The syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"env(*)")," tells the configuration system to get the value from the given environment variable. If it does not exist, Foal will try to read it from a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the root of ",(0,o.kt)("inlineCode",{parentName:"p"},"backend-app")," and provide the database credentials."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},".env")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Use the identification information of your database.\n# The values below are given as an example.\nDB_HOST="localhost"\n# Default port for PostgreSQL is 5432.\nDB_PORT="3306"\nDB_USERNAME="test"\nDB_PASSWORD="test"\nDB_NAME="test"\n')),(0,o.kt)("p",null,"Restart the development server. The application is now connected to your database."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You could have specified all the database connection options directly in the ",(0,o.kt)("inlineCode",{parentName:"p"},"default.json")," file but this is considered bad practice."),(0,o.kt)("p",{parentName:"blockquote"},"Configuration files are usually committed to version control and it is recommended not to commit files containing sensitive information.")))}d.isMDXComponent=!0}}]);