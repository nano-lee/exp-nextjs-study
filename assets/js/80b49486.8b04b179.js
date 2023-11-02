"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[32],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),d=o,y=l["".concat(s,".").concat(d)]||l[d]||f[d]||p;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const p={title:"typescript",description:"Next.js reports TypeScript errors by default. Learn to opt-out of this behavior here."},a=void 0,i={unversionedId:"app/api-reference/next-config-js/typescript",id:"app/api-reference/next-config-js/typescript",title:"typescript",description:"Next.js reports TypeScript errors by default. Learn to opt-out of this behavior here.",source:"@site/docs/02-app/02-api-reference/05-next-config-js/typescript.mdx",sourceDirName:"02-app/02-api-reference/05-next-config-js",slug:"/app/api-reference/next-config-js/typescript",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/typescript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/05-next-config-js/typescript.mdx",tags:[],version:"current",frontMatter:{title:"typescript",description:"Next.js reports TypeScript errors by default. Learn to opt-out of this behavior here."},sidebar:"tutorialSidebar",previous:{title:"typedRoutes",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/typedRoutes"},next:{title:"urlImports",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/urlImports"}},s={},c=[],u={toc:c},l="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"{/",(0,o.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,o.kt)("p",null,"Next.js fails your ",(0,o.kt)("strong",{parentName:"p"},"production build")," (",(0,o.kt)("inlineCode",{parentName:"p"},"next build"),") when TypeScript errors are present in your project."),(0,o.kt)("p",null,"If you'd like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step."),(0,o.kt)("p",null,"If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config.js")," and enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreBuildErrors")," option in the ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n    typescript: {\n        // !! WARN !!\n        // Dangerously allow production builds to successfully complete even if\n        // your project has type errors.\n        // !! WARN !!\n        ignoreBuildErrors: true,\n    },\n};\n")))}f.isMDXComponent=!0}}]);