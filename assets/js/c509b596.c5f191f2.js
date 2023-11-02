"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"transpilePackages",description:"Automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (`node_modules`)."},i=void 0,s={unversionedId:"app/api-reference/next-config-js/transpilePackages",id:"app/api-reference/next-config-js/transpilePackages",title:"transpilePackages",description:"Automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (`node_modules`).",source:"@site/docs/02-app/02-api-reference/05-next-config-js/transpilePackages.mdx",sourceDirName:"02-app/02-api-reference/05-next-config-js",slug:"/app/api-reference/next-config-js/transpilePackages",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/transpilePackages",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/05-next-config-js/transpilePackages.mdx",tags:[],version:"current",frontMatter:{title:"transpilePackages",description:"Automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (`node_modules`)."},sidebar:"tutorialSidebar",previous:{title:"trailingSlash",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/trailingSlash"},next:{title:"turbo",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/turbo"}},p={},l=[{value:"Version History",id:"version-history",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"{/",(0,a.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,a.kt)("p",null,"Next.js can automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"). This replaces the ",(0,a.kt)("inlineCode",{parentName:"p"},"next-transpile-modules")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'/** @type {import(\'next\').NextConfig} */\nconst nextConfig = {\n    transpilePackages: ["@acme/ui", "lodash-es"],\n};\n\nmodule.exports = nextConfig;\n')),(0,a.kt)("h2",{id:"version-history"},"Version History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"transpilePackages")," added.")))))}u.isMDXComponent=!0}}]);