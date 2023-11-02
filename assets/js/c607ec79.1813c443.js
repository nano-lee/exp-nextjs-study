"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"basePath",description:"Use `basePath` to deploy a Next.js application under a sub-path of a domain."},i=void 0,p={unversionedId:"app/api-reference/next-config-js/basePath",id:"app/api-reference/next-config-js/basePath",title:"basePath",description:"Use `basePath` to deploy a Next.js application under a sub-path of a domain.",source:"@site/docs/02-app/02-api-reference/05-next-config-js/basePath.mdx",sourceDirName:"02-app/02-api-reference/05-next-config-js",slug:"/app/api-reference/next-config-js/basePath",permalink:"/docs/app/api-reference/next-config-js/basePath",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/05-next-config-js/basePath.mdx",tags:[],version:"current",frontMatter:{title:"basePath",description:"Use `basePath` to deploy a Next.js application under a sub-path of a domain."},sidebar:"tutorialSidebar",previous:{title:"assetPrefix",permalink:"/docs/app/api-reference/next-config-js/assetPrefix"},next:{title:"compress",permalink:"/docs/app/api-reference/next-config-js/compress"}},s={},l=[{value:"Links",id:"links",level:3},{value:"Images",id:"images",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,r.kt)("p",null,"To deploy a Next.js application under a sub-path of a domain you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," config option."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," allows you to set a path prefix for the application. For example, to use ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"''")," (an empty string, the default), open ",(0,r.kt)("inlineCode",{parentName:"p"},"next.config.js")," and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    basePath: "/docs",\n};\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": This value must be set at build time and cannot be changed without re-building as the value is inlined in the client-side bundles.")),(0,r.kt)("h3",{id:"links"},"Links"),(0,r.kt)("p",null,"When linking to other pages using ",(0,r.kt)("inlineCode",{parentName:"p"},"next/link")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"next/router")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," will be automatically applied."),(0,r.kt)("p",null,"For example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"/about")," will automatically become ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/about")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export default function HomePage() {\n    return (\n        <>\n            <Link href="/about">About Page</Link>\n        </>\n    );\n}\n')),(0,r.kt)("p",null,"Output html:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<a href="/docs/about">About Page</a>\n')),(0,r.kt)("p",null,"This makes sure that you don't have to change all links in your application when changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," value."),(0,r.kt)("h3",{id:"images"},"Images"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/components/image"},(0,r.kt)("inlineCode",{parentName:"a"},"next/image"))," component, you will need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," in front of ",(0,r.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,r.kt)("p",null,"For example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/me.png")," will properly serve your image when ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import Image from "next/image";\n\nfunction Home() {\n    return (\n        <>\n            <h1>My Homepage</h1>\n            <Image\n                src="/docs/me.png"\n                alt="Picture of the author"\n                width={500}\n                height={500}\n            />\n            <p>Welcome to my homepage!</p>\n        </>\n    );\n}\n\nexport default Home;\n')))}d.isMDXComponent=!0}}]);