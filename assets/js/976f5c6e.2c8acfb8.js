"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[2703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5,title:"Static Assets",description:"Next.js allows you to serve static files, like images, in the public directory. You can learn how it works here."},o=void 0,s={unversionedId:"app/building-your-application/optimizing/static-assets",id:"app/building-your-application/optimizing/static-assets",title:"Static Assets",description:"Next.js allows you to serve static files, like images, in the public directory. You can learn how it works here.",source:"@site/docs/02-app/01-building-your-application/06-optimizing/05-static-assets.mdx",sourceDirName:"02-app/01-building-your-application/06-optimizing",slug:"/app/building-your-application/optimizing/static-assets",permalink:"/nano-nextjs-study/docs/app/building-your-application/optimizing/static-assets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/06-optimizing/05-static-assets.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Static Assets",description:"Next.js allows you to serve static files, like images, in the public directory. You can learn how it works here."},sidebar:"tutorialSidebar",previous:{title:"Metadata",permalink:"/nano-nextjs-study/docs/app/building-your-application/optimizing/metadata"},next:{title:"Lazy Loading",permalink:"/nano-nextjs-study/docs/app/building-your-application/optimizing/lazy-loading"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"{/",(0,i.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,i.kt)("p",null,"Next.js can serve static files, like images, under a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," in the root directory. Files inside ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," can then be referenced by your code starting from the base URL (",(0,i.kt)("inlineCode",{parentName:"p"},"/"),")."),(0,i.kt)("p",null,"For example, if you add ",(0,i.kt)("inlineCode",{parentName:"p"},"me.png")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"public"),", the following code will access the image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="Avatar.js"',filename:'"Avatar.js"'},'import Image from "next/image";\n\nexport function Avatar() {\n    return <Image src="/me.png" alt="me" width="64" height="64" />;\n}\n')),(0,i.kt)("p",null,"For static metadata files, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"robots.txt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"favicon.ico"),", etc, you should use ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/metadata"},"special metadata files")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," folder."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Good to know:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The directory must be named ",(0,i.kt)("inlineCode",{parentName:"li"},"public"),". The name cannot be changed and it's the only directory used to serve static assets."),(0,i.kt)("li",{parentName:"ul"},"Only assets that are in the ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," directory at ",(0,i.kt)("a",{parentName:"li",href:"/docs/app/api-reference/next-cli#build"},"build time")," will be served by Next.js. Files added at request time won't be available. We recommend using a third-party service like ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"AWS S3")," for persistent file storage."))))}d.isMDXComponent=!0}}]);