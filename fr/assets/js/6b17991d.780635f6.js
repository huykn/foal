"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8513],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),o=t(7294),a=t(2389),i=t(9548),l=t(6010),s="tabItem_LplD";function u(e){var n,t,a,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),y=k.tabGroupChoices,C=k.setTabGroupChoices,N=(0,o.useState)(b),T=N[0],w=N[1],E=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=y[f];null!=S&&S!==T&&g.some((function(e){return e.value===S}))&&w(S)}var j=function(e){var n=e.currentTarget,t=E.indexOf(n),r=g[t].value;r!==T&&(O(n),w(r),null!=f&&C(f,r))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;t=E[o]||E[E.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},g.map((function(e){var n=e.value,t=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return E.push(e)},onKeyDown:x,onFocus:j,onClick:j},a,{className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),u?(0,o.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function c(e){var n=(0,a.Z)();return o.createElement(u,(0,r.Z)({key:String(n)},e))}},2244:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(9877),l=t(8215),s=["components"],u={title:"New Configuration System"},c=void 0,d={unversionedId:"upgrade-to-v2/config-system",id:"upgrade-to-v2/config-system",title:"New Configuration System",description:"The Config.get Method",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/upgrade-to-v2/config-system.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/config-system",permalink:"/fr/docs/upgrade-to-v2/config-system",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/config-system.md",tags:[],version:"current",frontMatter:{title:"New Configuration System"}},p=[{value:"The <code>Config.get</code> Method",id:"the-configget-method",children:[],level:2},{value:"Environment Variables",id:"environment-variables",children:[],level:2},{value:"The <code>Config</code> and <code>ConfigMock</code> services",id:"the-config-and-configmock-services",children:[],level:2},{value:"New features",id:"new-features",children:[{value:"Multiple <code>.env</code> files for each environment",id:"multiple-env-files-for-each-environment",children:[],level:3},{value:"Read an environment variable from <code>.env</code>",id:"read-an-environment-variable-from-env",children:[],level:3},{value:"Comments and quotes in <code>.env</code> files",id:"comments-and-quotes-in-env-files",children:[],level:3},{value:"JS configuration files",id:"js-configuration-files",children:[],level:3},{value:"Cloud PaaS providers",id:"cloud-paas-providers",children:[],level:3}],level:2}],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-configget-method"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"Config.get")," Method"),(0,a.kt)("p",null,"The legacy ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get")," method has been removed and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get2")," method has been renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get"),"."),(0,a.kt)("p",null,"If you were still using the old method, update your code as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Version 1\nconst foobar = Config.get('hello.world');\nconst debug = Config.get<boolean>('settings.debug');\nconst port = Config.get('port', 3001);\nconst port = Config.get<number>('port', 3001);\n\n// Version 2\nconst foobar = Config.get('hello.world');\nconst debug = Config.getOrThrow('settings.debug', 'boolean');\nconst port = Config.get('port', 'number', 3001);\nconst port = Config.get('port', 'number', 3001);\n")),(0,a.kt)("p",null,"More details can be found ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/architecture/configuration"},"here"),"."),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Environment variables are no longer loaded by default. You must specify them explicitly."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get('settings.jwt.secret')")," will not return the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"SETTINGS_JWT_SECRET")," by default. To do this, you must specify it explicitly in a configuration file:"),(0,a.kt)(i.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    secret: env(SETTINGS_JWT_SECRET)\n"))),(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(SETTINGS_JWT_SECRET)",\n    }\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")))),(0,a.kt)("h2",{id:"the-config-and-configmock-services"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"Config")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"ConfigMock")," services"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," class can no longer be used as a service. You must use its static methods instead. Therefore, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMock")," class has also been removed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\nexport class Controller {\n  @dependency\n  config: Config;\n\n  foo() {\n    const foobar = this.config.get('foobar');\n  }\n}\n\n// After\nexport class Controller {\n  foo() {\n    const foobar = Config.get('foobar');\n  }\n}\n\n")),(0,a.kt)("h2",{id:"new-features"},"New features"),(0,a.kt)("h3",{id:"multiple-env-files-for-each-environment"},"Multiple ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")," files for each environment"),(0,a.kt)("p",null,"Just like the JSON and YAML configuration files, it is now possible to have a separate ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file for each environment: ",(0,a.kt)("inlineCode",{parentName:"p"},".env.test"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production"),", etc."),(0,a.kt)("p",null,"The values provided in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env.{environment}")," file override those defined in the default ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("h3",{id:"read-an-environment-variable-from-env"},"Read an environment variable from ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")),(0,a.kt)("p",null,"Environment variables defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file can be accessed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Env.get")," method."),(0,a.kt)("h3",{id:"comments-and-quotes-in-env-files"},"Comments and quotes in ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")," files"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files now support the use of comments and quotes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# This a comment\nHELLO=\"hello world\"\nHELLO='hello world'\n")),(0,a.kt)("h3",{id:"js-configuration-files"},"JS configuration files"),(0,a.kt)("p",null,"In addition to the JSON and YAML formats, configuration files can now also be written in JS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    debug: false,\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"cloud-paas-providers"},"Cloud PaaS providers"),(0,a.kt)("p",null,"Since the configuration keys are no longer linked to a specific environment variable, deployment with PaaS providers is facilitated."),(0,a.kt)("p",null,"For example, in version 1, the URI of MongoDB had to be passed with the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_URI"),". If the cloud provider were giving the URI using the name ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGO_URI"),", things were becoming more difficult. This problem is now solved with the ",(0,a.kt)("inlineCode",{parentName:"p"},"env(*)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Env.get")," features."))}m.isMDXComponent=!0}}]);