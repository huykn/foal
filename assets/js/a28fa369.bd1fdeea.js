"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5005],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4227:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={title:"Local & Cloud Storage"},s=void 0,d={unversionedId:"file-system/local-and-cloud-storage",id:"version-1.x/file-system/local-and-cloud-storage",title:"Local & Cloud Storage",description:"File storage is available in Foal v1.6 onwards.",source:"@site/versioned_docs/version-1.x/file-system/local-and-cloud-storage.md",sourceDirName:"file-system",slug:"/file-system/local-and-cloud-storage",permalink:"/docs/1.x/file-system/local-and-cloud-storage",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/file-system/local-and-cloud-storage.md",tags:[],version:"1.x",frontMatter:{title:"Local & Cloud Storage"},sidebar:"someSidebar",previous:{title:"Nuxt.js",permalink:"/docs/1.x/frontend-integration/nuxt.js"},next:{title:"Upload & Download Files",permalink:"/docs/1.x/file-system/upload-and-download-files"}},c=[{value:"Configuration",id:"configuration",children:[{value:"Local storage",id:"local-storage",children:[],level:3},{value:"AWS S3",id:"aws-s3",children:[],level:3},{value:"DigitalOcean",id:"digitalocean",children:[],level:3}],level:2},{value:"Read, Write and Delete Files",id:"read-write-and-delete-files",children:[{value:"Read files",id:"read-files",children:[],level:3},{value:"Write files",id:"write-files",children:[],level:3},{value:"Delete files",id:"delete-files",children:[],level:3},{value:"Create an HttpResponse",id:"create-an-httpresponse",children:[],level:3}],level:2},{value:"Using a Specific Storage",id:"using-a-specific-storage",children:[],level:2},{value:"Implementing a Disk",id:"implementing-a-disk",children:[],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"File storage is available in Foal v1.6 onwards.")),(0,o.kt)("p",null,"FoalTS provides its own file system for reading, writing and deleting files locally or in the Cloud. Thanks to its unified interface, you can easily choose different storage for each of your environments. This is especially useful when you're moving from development to production."),(0,o.kt)("p",null,"For example, when coding the application locally, you can use the file system of your operating system. Then, when deploying the application to staging or production, you can change the configuration to use AWS S3. Regardless of the storage chosen in the background, the code remains the same. Only the configuration changes."),(0,o.kt)("p",null,"Using FoalTS' file system has many other advantages as well:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It can generate a unique random name when saving a new file (with the ability to add an extension if necessary)."),(0,o.kt)("li",{parentName:"ul"},"File contents can be managed using buffers or streams."),(0,o.kt)("li",{parentName:"ul"},"Stream errors are correctly handled to avoid crashing the server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Not found")," errors are unified with a single ",(0,o.kt)("inlineCode",{parentName:"li"},"FileDoesNotExist")," error."),(0,o.kt)("li",{parentName:"ul"},"FoalTS' file system can generate an ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpResponse"),"  to correctly download (large) files to the browser.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"First install the package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @foal/storage\n")),(0,o.kt)("p",null,"Next, you will need to provide the name of the storage to be used with the configuration key ",(0,o.kt)("inlineCode",{parentName:"p"},"setings.disk.driver"),". In the case of the local filesystem, this is ",(0,o.kt)("inlineCode",{parentName:"p"},"local"),". In other cases, an additional package must be installed. Then the name to be provided is the name of the package."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: local\n")),(0,o.kt)("h3",{id:"local-storage"},"Local storage"),(0,o.kt)("p",null,"The name of the directory where the files are located is specified with the configuration key ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.disk.local.directory"),"."),(0,o.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n")),(0,o.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SETTINGS_DISK_DRIVER=local\nSETTINGS_DISK_LOCAL_DIRECTORY=uploaded\n")),(0,o.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),(0,o.kt)("h3",{id:"aws-s3"},"AWS S3"),(0,o.kt)("p",null,"AWS storage requires the installation of an additional package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @foal/aws-s3\n")),(0,o.kt)("p",null,"The bucket name is specified with the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.disk.s3.bucket")," configuration key."),(0,o.kt)("p",null,"AWS credentials are specified with the configuration keys ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.aws.accessKeyId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.aws.secretAccessKey"),"  or using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html"},"AWS traditional techniques"),"."),(0,o.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  aws:\n    accessKeyId: xxx\n    secretAccessKey: yyy\n  disk:\n    driver: '@foal/aws-s3'\n    s3:\n      bucket: 'uploaded'\n")),(0,o.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "aws": {\n      "accessKeyId": "xxx",\n      "secretAccessKey": "yyy"\n    },\n    "disk": {\n      "driver": "@foal/aws-s3",\n      "s3": {\n        "bucket": "uploaded"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SETTINGS_DISK_DRIVER=@foal/aws-s3\nSETTINGS_DISK_S3_BUCKET=uploaded\n")),(0,o.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),(0,o.kt)("h3",{id:"digitalocean"},"DigitalOcean"),(0,o.kt)("p",null,"DigitalOcean Spaces are compatible with AWS S3 API, so you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/aws-s3")," package to connect to this storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @foal/aws-s3\n")),(0,o.kt)("p",null,"The only difference is the configuration key ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.aws.endpoint"),", which is mandatory and requires the value ",(0,o.kt)("inlineCode",{parentName:"p"},"${REGION}.digitaloceanspaces.com"),"."),(0,o.kt)("h2",{id:"read-write-and-delete-files"},"Read, Write and Delete Files"),(0,o.kt)("p",null,"FoalTS file system is accessible via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Disk")," service. It contains all the methods for reading, writing and deleting files."),(0,o.kt)("h3",{id:"read-files"},"Read files"),(0,o.kt)("p",null,"Files can be read using the asynchronous ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," method. It returns the size of the file as well as its contents in the form of a buffer or a readable stream. If the file does not exist, a ",(0,o.kt)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error is rejected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async readFile() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'buffer');\n\n    // ...\n  }\n\n  async readFile2() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'stream');\n\n    // ...\n  }\n\n} \n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To check whether an error is an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"FileDoesNotExist"),", you can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"isFileDoesNotExist")," function. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"error instanceof FileDoesNotExist")," may not work if you have multiple nested packages because of the way ",(0,o.kt)("em",{parentName:"p"},"npm")," handles its dependencies.")),(0,o.kt)("h3",{id:"write-files"},"Write files"),(0,o.kt)("p",null,"Files can be saved using the asynchronous ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," method. This method accepts a buffer or a readable stream. If no name is provided, it is automatically generated and used to save the file in the given directory. In this case, a file extension can also be provided to the method."),(0,o.kt)("p",null,"Once the file is successfully written, its path is returned so that it can be retrieved later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Readable } from 'stream';\n\nimport { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async createFile(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content);\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY='\n\n    // ...\n  }\n\n  async createFile2(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      extension: 'jpg'\n    });\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY=.jpg'\n\n    // ...\n  }\n\n  async createFile3(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      name: 'profile.jpg'\n    });\n    // path === 'avatars/profile.jpg'\n\n    // ...\n  }\n\n} \n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Backslashes ",(0,o.kt)("inlineCode",{parentName:"p"},"\\")," and slashes ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," at the end of the directory name are not supported. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"avatars/img_60")," is valid but ",(0,o.kt)("inlineCode",{parentName:"p"},"avatars\\img_60")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"avatars/img_60/")," both invalid.")),(0,o.kt)("h3",{id:"delete-files"},"Delete files"),(0,o.kt)("p",null,"Files can be deleted using the asynchronous ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," method. Depending on the file storage, the method may or may not reject a ",(0,o.kt)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error if the file is not found."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async deleteFile(content: Buffer|Readable) {\n    await this.disk.delete('avatars/profile.jpg');\n\n    // ...\n  }\n\n} \n")),(0,o.kt)("h3",{id:"create-an-httpresponse"},"Create an HttpResponse"),(0,o.kt)("p",null,"The service also provides a special method ",(0,o.kt)("inlineCode",{parentName:"p"},"createHttpResponse")," for creating an ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpResponse"),". The returned object is optimized for downloading a (large) file in streaming."),(0,o.kt)("p",null,"The documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.x/file-system/upload-and-download-files#file-downloads"},"here"),"."),(0,o.kt)("h2",{id:"using-a-specific-storage"},"Using a Specific Storage"),(0,o.kt)("p",null,"In rare cases, you may wish to access multiple storages in your application. Each of them has its own ",(0,o.kt)("em",{parentName:"p"},"disk")," that you can inject and use in your controllers and services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get } from '@foal/core';\nimport { LocalDisk } from '@foal/storage';\nimport { S3Disk } from '@foal/aws-s3';\n\nclass ApiController {\n\n  @dependency\n  local: LocalDisk;\n\n  @dependency\n  s3: S3Disk;\n\n  // ...\n\n}\n")),(0,o.kt)("h2",{id:"implementing-a-disk"},"Implementing a Disk"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Relative paths are available in Foal v1.11.0 onwards.")),(0,o.kt)("p",null,"If FoalTS does not support your favorite Cloud provider, you can also implement your own ",(0,o.kt)("em",{parentName:"p"},"disk")," by extending the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractDisk")," class. "),(0,o.kt)("p",null,"If you want to use it through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Disk")," service, you need to specify its path in the configuration (or to publish it as an npm package and specify the package name). The name of the exported class should be ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcreteDisk"),"."),(0,o.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: './app/services/my-disk.service'\n")),(0,o.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "./app/services/my-disk.service",\n    }\n  }\n}\n')),(0,o.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SETTINGS_DISK_DRIVER=./app/services/my-disk.service\n")),(0,o.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"))}u.isMDXComponent=!0}}]);