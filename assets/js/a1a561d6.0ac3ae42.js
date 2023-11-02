"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),i=n(6010),a=n(2802),o=n(9960),c=n(3919),p=n(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(s,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:o},o))}function d(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},2333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905)),a=n(2991);const o={title:"Building Your Application",description:"Learn how to use Next.js features to build your application."},c=void 0,p={unversionedId:"app/building-your-application/index",id:"app/building-your-application/index",title:"Building Your Application",description:"Learn how to use Next.js features to build your application.",source:"@site/docs/02-app/01-building-your-application/index.mdx",sourceDirName:"02-app/01-building-your-application",slug:"/app/building-your-application/",permalink:"/nano-nextjs-study/docs/app/building-your-application/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/index.mdx",tags:[],version:"current",frontMatter:{title:"Building Your Application",description:"Learn how to use Next.js features to build your application."},sidebar:"tutorialSidebar",previous:{title:"App Router",permalink:"/nano-nextjs-study/docs/app/"},next:{title:"Routing",permalink:"/nano-nextjs-study/docs/app/building-your-application/routing/"}},l={},s=[],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Next.js provides the building blocks to create flexible, full-stack web applications. The guides in ",(0,i.kt)("strong",{parentName:"p"},"Building Your Application")," explain how to use these features and how to customize your application's behavior."),(0,i.kt)("p",null,"The sections and pages are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your Next.js application. However, you can read them in any order or skip to the pages that apply to your use case."),(0,i.kt)("p",null,"If you're new to Next.js, we recommend starting with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing"},"Routing"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering"},"Rendering"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching"},"Data Fetching")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/styling"},"Styling")," sections, as they introduce the fundamental Next.js and web concepts to help you get started. Then, you can dive deeper into the other sections such as ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/optimizing"},"Optimizing")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/configuring"},"Configuring"),". Finally, once you're ready, checkout the ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/deploying"},"Deploying")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/upgrading"},"Upgrading")," sections."),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);