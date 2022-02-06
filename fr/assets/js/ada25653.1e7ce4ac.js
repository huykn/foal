"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[433],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},943:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"L'Application Frontend",id:"tuto-7-add-frontend",slug:"7-add-frontend"},u=void 0,p={unversionedId:"tutorials/real-world-example-with-react/tuto-7-add-frontend",id:"tutorials/real-world-example-with-react/tuto-7-add-frontend",title:"L'Application Frontend",description:"Tr\xe8s bien, jusqu'\xe0 pr\xe9sent vous avez une premi\xe8re version fonctionnelle de votre API. Il est temps d'ajouter le frontend.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/7-add-frontend.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/7-add-frontend",permalink:"/fr/docs/tutorials/real-world-example-with-react/7-add-frontend",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/7-add-frontend.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"L'Application Frontend",id:"tuto-7-add-frontend",slug:"7-add-frontend"},sidebar:"someSidebar",previous:{title:"Test de l'API avec Swagger",permalink:"/fr/docs/tutorials/real-world-example-with-react/6-swagger-interface"},next:{title:"Connecter les Utilisateurs",permalink:"/fr/docs/tutorials/real-world-example-with-react/8-authentication"}},c=[],s={toc:c};function d(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tr\xe8s bien, jusqu'\xe0 pr\xe9sent vous avez une premi\xe8re version fonctionnelle de votre API. Il est temps d'ajouter le frontend."),(0,o.kt)("p",null,"T\xe9l\xe9chargez le fichier zip ",(0,o.kt)("a",{target:"_blank",href:r(9231).Z},"ici"),". Il contient une base de code front-end que vous compl\xe9terez au fur et \xe0 mesure. La plupart de l'application est d\xe9j\xe0 impl\xe9ment\xe9e pour vous. Vous n'aurez \xe0 vous occuper que de l'authentification et du t\xe9l\xe9chargement de fichiers pendant ce tutoriel."),(0,o.kt)("p",null,"Cr\xe9ez un nouveau r\xe9pertoire ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend-app")," \xe0 la racine de votre projet et d\xe9placez-y le contenu du zip."),(0,o.kt)("p",null,"Allez dans le r\xe9pertoire nouvellement cr\xe9\xe9 et d\xe9marrez le serveur de d\xe9veloppement."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd frontend-app\nnpm install\nnpm run start\n")),(0,o.kt)("p",null,"L'application frontend se charge \xe0 ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feed page",src:r(2681).Z,width:"2560",height:"1392"})),(0,o.kt)("p",null,"L'interface affiche une erreur et vous invite \xe0 rafra\xeechir la page. Cette erreur est due au fait que les applications frontend et backend sont servies sur des ports diff\xe9rents. Ainsi, lorsqu'il envoie une requ\xeate, le frontend l'envoie au mauvais port."),(0,o.kt)("p",null,"Une fa\xe7on de r\xe9soudre ce probl\xe8me est de mettre \xe0 jour temporairement le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"requests/stories.ts")," pour utiliser le port ",(0,o.kt)("inlineCode",{parentName:"p"},"3001")," en d\xe9veloppement. Mais cela vous oblige \xe0 ajouter un code diff\xe9rent de celui qui est r\xe9ellement utilis\xe9 en production, et cela g\xe9n\xe8re \xe9galement des erreurs de ",(0,o.kt)("em",{parentName:"p"},"same-origin policy")," que vous devrez toujours g\xe9rer."),(0,o.kt)("p",null,"Une autre fa\xe7on de r\xe9soudre ce probl\xe8me est de ",(0,o.kt)("em",{parentName:"p"},"connecter")," votre serveur de d\xe9veloppement frontend au port 3001 en d\xe9veloppement. Ceci peut \xeatre fait avec la commande suivante."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../backend-app\nfoal connect react ../frontend-app\n")),(0,o.kt)("p",null,"Si vous red\xe9marrez le serveur React, les posts devraient s'afficher correctement sur la page ",(0,o.kt)("em",{parentName:"p"},"feed")," (sauf pour les images)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feed page",src:r(2965).Z,width:"2556",height:"1394"})))}d.isMDXComponent=!0},9231:function(e,t,r){t.Z=r.p+"assets/files/frontend-app-0e74b55d8f0360c4a779ce9fbba99114.zip"},2681:function(e,t,r){t.Z=r.p+"assets/images/feed-error-8554029aeece9fa1bcc5f6bb0aeba30d.png"},2965:function(e,t,r){t.Z=r.p+"assets/images/feed-no-images-8fea5ef99aff64389b1318caef2a3937.png"}}]);