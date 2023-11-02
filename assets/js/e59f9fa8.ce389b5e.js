"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[6647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=c,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:c,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),c=n(6010),i=n(2802),o=n(9960),a=n(3919),s=n(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,c.Z)("text--truncate",l.cardTitle),title:i},n," ",i),o&&r.createElement("p",{className:(0,c.Z)("text--truncate",l.cardDescription),title:o},o))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??c?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,c.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(m,{item:e})))))}},8516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),c=(n(7294),n(3905)),i=n(2991);const o={title:"Functions",description:"API Reference for Functions and Hooks in Pages Router.",source:"app/api-reference/functions"},a=void 0,s={unversionedId:"pages/api-reference/functions/index",id:"pages/api-reference/functions/index",title:"Functions",description:"API Reference for Functions and Hooks in Pages Router.",source:"@site/docs/03-pages/02-api-reference/02-functions/index.mdx",sourceDirName:"03-pages/02-api-reference/02-functions",slug:"/pages/api-reference/functions/",permalink:"/nano-nextjs-study/docs/pages/api-reference/functions/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/02-api-reference/02-functions/index.mdx",tags:[],version:"current",frontMatter:{title:"Functions",description:"API Reference for Functions and Hooks in Pages Router.",source:"app/api-reference/functions"},sidebar:"tutorialSidebar",previous:{title:"<Script>",permalink:"/nano-nextjs-study/docs/pages/api-reference/components/script"},next:{title:"getInitialProps",permalink:"/nano-nextjs-study/docs/pages/api-reference/functions/get-initial-props"}},l={},p=[],u={toc:p},f="wrapper";function d(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);