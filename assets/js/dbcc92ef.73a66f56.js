"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,m=u["".concat(p,".").concat(b)]||u[b]||f[b]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"webVitalsAttribution",description:"Learn how to use the webVitalsAttribution option to pinpoint the source of Web Vitals issues."},a=void 0,s={unversionedId:"app/api-reference/next-config-js/webVitalsAttribution",id:"app/api-reference/next-config-js/webVitalsAttribution",title:"webVitalsAttribution",description:"Learn how to use the webVitalsAttribution option to pinpoint the source of Web Vitals issues.",source:"@site/docs/02-app/02-api-reference/05-next-config-js/webVitalsAttribution.mdx",sourceDirName:"02-app/02-api-reference/05-next-config-js",slug:"/app/api-reference/next-config-js/webVitalsAttribution",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/webVitalsAttribution",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/05-next-config-js/webVitalsAttribution.mdx",tags:[],version:"current",frontMatter:{title:"webVitalsAttribution",description:"Learn how to use the webVitalsAttribution option to pinpoint the source of Web Vitals issues."},sidebar:"tutorialSidebar",previous:{title:"urlImports",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/urlImports"},next:{title:"webpack",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/webpack"}},p={},c=[],l={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"{/",(0,i.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,i.kt)("p",null,"When debugging issues related to Web Vitals, it is often helpful if we can pinpoint the source of the problem.\nFor example, in the case of Cumulative Layout Shift (CLS), we might want to know the first element that shifted when the single largest layout shift occurred.\nOr, in the case of Largest Contentful Paint (LCP), we might want to identify the element corresponding to the LCP for the page.\nIf the LCP element is an image, knowing the URL of the image resource can help us locate the asset we need to optimize."),(0,i.kt)("p",null,"Pinpointing the biggest contributor to the Web Vitals score, aka ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/web-vitals/blob/4ca38ae64b8d1e899028c692f94d4c56acfc996c/README.md#attribution"},"attribution"),",\nallows us to obtain more in-depth information like entries for ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/PerformanceEventTiming"},"PerformanceEventTiming"),", ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/PerformanceNavigationTiming"},"PerformanceNavigationTiming")," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming"},"PerformanceResourceTiming"),"."),(0,i.kt)("p",null,"Attribution is disabled by default in Next.js but can be enabled ",(0,i.kt)("strong",{parentName:"p"},"per metric")," by specifying the following in ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'experimental: {\n    webVitalsAttribution: ["CLS", "LCP"];\n}\n')),(0,i.kt)("p",null,"Valid attribution values are all ",(0,i.kt)("inlineCode",{parentName:"p"},"web-vitals")," metrics specified in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/blob/442378d21dd56d6e769863eb8c2cb521a463a2e0/packages/next/shared/lib/utils.ts#L43"},(0,i.kt)("inlineCode",{parentName:"a"},"NextWebVitalsMetric"))," type."))}f.isMDXComponent=!0}}]);