(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(271)),i=n(275),l=n(276),c={title:"Configuration"},s={unversionedId:"architecture/configuration",id:"architecture/configuration",isDocsHomePage:!1,title:"Configuration",description:"In FoalTS, configuration refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port.",source:"@site/docs/architecture/configuration.md",slug:"/architecture/configuration",permalink:"/docs/architecture/configuration",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/configuration.md",version:"current",sidebar:"someSidebar",previous:{title:"Error Handling",permalink:"/docs/architecture/error-handling"},next:{title:"Validation & Sanitization",permalink:"/docs/common/validation-and-sanitization"}},b=[{value:"Configuration Files",id:"configuration-files",children:[{value:"Deployment Environments",id:"deployment-environments",children:[]},{value:"Reserved Parameters",id:"reserved-parameters",children:[]}]},{value:"Accessing Configuration Values",id:"accessing-configuration-values",children:[{value:"The <code>Config.get</code> method",id:"the-configget-method",children:[]},{value:"The <code>Config.getOrThrow</code> method",id:"the-configgetorthrow-method",children:[]}]},{value:"Environment Variables and <code>.env</code> Files",id:"environment-variables-and-env-files",children:[{value:"Deployment Environments",id:"deployment-environments-1",children:[]},{value:"Using <code>*.local</code> files",id:"using-local-files",children:[]},{value:"Note on the use of dotenv",id:"note-on-the-use-of-dotenv",children:[]}]}],p={toc:b};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In FoalTS, ",Object(r.b)("em",{parentName:"p"},"configuration")," refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port."),Object(r.b)("p",null,"The framework encourages a ",Object(r.b)("strong",{parentName:"p"},"strict separation between configuration and code")," and allows you to define your configuration in environment variables, in ",Object(r.b)("inlineCode",{parentName:"p"},".env")," files and in files in the ",Object(r.b)("inlineCode",{parentName:"p"},"config/")," directory."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Config directory structure")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"|- config/\n| |- e2e.json\n| |- default.json\n| |- development.json\n| |- production.json\n| |- ...\n| '- test.json\n|- src/\n'- .env\n")),Object(r.b)("h2",{id:"configuration-files"},"Configuration Files"),Object(r.b)("p",null,"Configuration values are provided using configuration files in the ",Object(r.b)("inlineCode",{parentName:"p"},"config/")," directory. Several formats are supported: YAML, JSON and JS files."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"config/default.{yml|json|js}")),Object(r.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'settings:\n  session:\n    store: "@foal/typeorm"\n'))),Object(r.b)(l.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  }\n}\n'))),Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm"\n    }\n  }\n}\n')))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"YAML support")),Object(r.b)("p",{parentName:"blockquote"},"The use of YAML for configuration requires the installation of the package ",Object(r.b)("inlineCode",{parentName:"p"},"yamljs"),"."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install yamljs\n")),Object(r.b)("p",{parentName:"blockquote"},"When creating a new project, you can also add the flag ",Object(r.b)("inlineCode",{parentName:"p"},"--yaml")," to have all the configuration directly generated in YAML."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"foal createapp my-app --yaml\n")),Object(r.b)("p",{parentName:"blockquote"},"The extension of the YAML files must be ",Object(r.b)("inlineCode",{parentName:"p"},".yml"),".")),Object(r.b)("h3",{id:"deployment-environments"},"Deployment Environments"),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"default")," configuration files are used regardless of the environment, i.e. regardless of the value assigned to the ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable."),Object(r.b)("p",null,"Configuration values can also be set or overridden for a specific environment using the filename syntax: ",Object(r.b)("inlineCode",{parentName:"p"},"config/<environment-name>.{json|yml|js}"),". If no value is assigned to ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV"),", the environment considered is ",Object(r.b)("em",{parentName:"p"},"development"),"."),Object(r.b)("h3",{id:"reserved-parameters"},"Reserved Parameters"),Object(r.b)("p",null,"All parameters under the keyword ",Object(r.b)("inlineCode",{parentName:"p"},"settings")," are reserved for the operation of the framework. You can assign values to those given in the documentation, but you cannot create new ones."),Object(r.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'settings:\n  session:\n    store: "@foal/typeorm"\n\ncustomConfiguration:\n  message: hello world\n'))),Object(r.b)(l.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  },\n  "customConfiguration": {\n    "message": "hello world"\n  }\n}\n'))),Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm"\n    }\n  },\n  customConfiguration: {\n    message: "hello world"\n  }\n}\n')))),Object(r.b)("h2",{id:"accessing-configuration-values"},"Accessing Configuration Values"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Config")," class provides two static methods ",Object(r.b)("inlineCode",{parentName:"p"},"get")," and ",Object(r.b)("inlineCode",{parentName:"p"},"getOrThrow")," for reading configuration values."),Object(r.b)("h3",{id:"the-configget-method"},"The ",Object(r.b)("inlineCode",{parentName:"h3"},"Config.get")," method"),Object(r.b)("p",null,"This function takes the configuration key as first parameter."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Config } from '@foal/core';\n\nconst secret = Config.get('settings.jwt.secret');\n")),Object(r.b)("p",null,"The algorithm below is used to retrieve the configuration value:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Return the value specified in the environment config file if it exists."),Object(r.b)("li",{parentName:"ol"},"Return the value specified in the ",Object(r.b)("em",{parentName:"li"},"default")," config file it is exists."),Object(r.b)("li",{parentName:"ol"},"Return ",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," otherwise.")),Object(r.b)("h4",{id:"specifying-a-type"},"Specifying a type"),Object(r.b)("p",null,"The method also accepts a second optional parameter to define the type of the returned value."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Config } from '@foal/core';\n\nconst foobar = Config.get('settings.foobar', 'boolean|string');\n// foobar is of type boolean|string|undefined\n")),Object(r.b)("p",null,"When it is set, Foal checks that the configuration value has the correct type and if it does not, it will try to convert it to the desired type (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'"true"')," becomes ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"). If it does not succeed, a ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigTypeError")," is thrown."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Allowed types"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean","|","string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number","|","string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")))),Object(r.b)("h4",{id:"specifying-a-default-value"},"Specifying a default value"),Object(r.b)("p",null,"The third optional parameter of the method allows you to define a default value if none is found in the configuration."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const foobar = Config.get('settings.foobar', 'boolean', false);\n// foobar is of type boolean\n")),Object(r.b)("h3",{id:"the-configgetorthrow-method"},"The ",Object(r.b)("inlineCode",{parentName:"h3"},"Config.getOrThrow")," method"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const foobar = Config.getOrThrow('settings.foobar', 'boolean');\n// foobar is of type boolean\n")),Object(r.b)("p",null,"This method has the same behavior as ",Object(r.b)("inlineCode",{parentName:"p"},"Config.get")," except that it does not accept a default value. If no value is found, the method will throw a ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigNotFoundError"),"."),Object(r.b)("h2",{id:"environment-variables-and-env-files"},"Environment Variables and ",Object(r.b)("inlineCode",{parentName:"h2"},".env")," Files"),Object(r.b)("p",null,"Configuration files in the ",Object(r.b)("inlineCode",{parentName:"p"},"config/")," directory are usually committed and therefore should not contain sensitive information (such as database credentials)."),Object(r.b)("p",null,"The recommended approach to provide sensitive information to the application is to use environment variables and ",Object(r.b)("inlineCode",{parentName:"p"},".env")," files which are not committed. Then, in the configuration files, the values are retrieved."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},".env")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n')),Object(r.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  jwt:\n    secret: env(JWT_SECRET)\n    secretEncoding: base64\n"))),Object(r.b)(l.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'))),Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('JWT_SECRET'),\n      secretEncoding: 'base64'\n    }\n  }\n}\n")))),Object(r.b)("p",null,"If the same variable is provided both as environment variable and in the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file, then the value of the environment variable is used."),Object(r.b)("h3",{id:"deployment-environments-1"},"Deployment Environments"),Object(r.b)("p",null,"Just like the configuration files in the ",Object(r.b)("inlineCode",{parentName:"p"},"config/")," directory, the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," files can be used for several environments: ",Object(r.b)("inlineCode",{parentName:"p"},".env.production"),", ",Object(r.b)("inlineCode",{parentName:"p"},".env.test"),", etc."),Object(r.b)("h3",{id:"using-local-files"},"Using ",Object(r.b)("inlineCode",{parentName:"h3"},"*.local")," files"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"This feature is available from version 2.3 onwards."))),Object(r.b)("p",null,"In case you want to have two ",Object(r.b)("inlineCode",{parentName:"p"},".env")," files, one to define the default env vars needed by the application and another to override these values on your local machine, you can use a ",Object(r.b)("inlineCode",{parentName:"p"},".env.local")," file."),Object(r.b)("p",null,"If a variable is defined in both files, the value in the ",Object(r.b)("inlineCode",{parentName:"p"},".env.local")," file will take precedence."),Object(r.b)("p",null,"Similarly, you can define environment-specific local files (",Object(r.b)("inlineCode",{parentName:"p"},".env.development.local"),", ",Object(r.b)("inlineCode",{parentName:"p"},".env.production.local"),", etc)."),Object(r.b)("h3",{id:"note-on-the-use-of-dotenv"},"Note on the use of dotenv"),Object(r.b)("p",null,"Many NodeJS applications use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/dotenv"}),"dotenv")," library to manage the environment configuration. It loads variables from the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file if it exists and assigns their values to the ",Object(r.b)("inlineCode",{parentName:"p"},"process.env")," object."),Object(r.b)("p",null,"When using Foal, it is strongly recommended that you do not use this library as it may break some functionality. For example, you will not be able to use other files such as ",Object(r.b)("inlineCode",{parentName:"p"},".env.production")," and ",Object(r.b)("inlineCode",{parentName:"p"},".env.local"),"."),Object(r.b)("p",null,"The recommended approach to loading environment variables from ",Object(r.b)("inlineCode",{parentName:"p"},".env")," files is to use Foal's configuration system using the ",Object(r.b)("inlineCode",{parentName:"p"},"Config")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Env")," class."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// dotenv\nconst value = process.env.FOO_BAR;\n\n// Foal\nimport { Env } from '@foal/core';\n\nconst value = Env.get('FOO_BAR');\n")))}u.isMDXComponent=!0},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},272:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},273:function(e,t,n){"use strict";var a=n(0),o=n(274);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},274:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},275:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(273),i=n(272),l=n(56),c=n.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(r.a)(),f=m.tabGroupChoices,j=m.setTabGroupChoices,O=Object(a.useState)(l),v=O[0],g=O[1],h=a.Children.toArray(e.children);if(null!=u){var y=f[u];null!=y&&y!==v&&p.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=u&&j(u,e)},C=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},276:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}}}]);