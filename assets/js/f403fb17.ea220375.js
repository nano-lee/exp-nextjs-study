"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"fetch",description:"API reference for the extended fetch function."},o=void 0,l={unversionedId:"app/api-reference/functions/fetch",id:"app/api-reference/functions/fetch",title:"fetch",description:"API reference for the extended fetch function.",source:"@site/docs/02-app/02-api-reference/04-functions/fetch.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/fetch",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/fetch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/fetch.mdx",tags:[],version:"current",frontMatter:{title:"fetch",description:"API reference for the extended fetch function."},sidebar:"tutorialSidebar",previous:{title:"draftMode",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/draft-mode"},next:{title:"generateImageMetadata",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/generate-image-metadata"}},c={},s=[{value:"<code>fetch(url, options)</code>",id:"fetchurl-options",level:2},{value:"<code>options.cache</code>",id:"optionscache",level:3},{value:"<code>options.next.revalidate</code>",id:"optionsnextrevalidate",level:3},{value:"<code>options.next.tags</code>",id:"optionsnexttags",level:3},{value:"Version History",id:"version-history",level:2}],p={toc:s},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Next.js extends the native ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/Fetch_API"},"Web ",(0,r.kt)("inlineCode",{parentName:"a"},"fetch()")," API")," to allow each request on the server to set its own persistent caching semantics."),(0,r.kt)("p",null,"In the browser, the ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," option indicates how a fetch request will interact with the ",(0,r.kt)("em",{parentName:"p"},"browser's")," HTTP cache. With this extension, ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," indicates how a ",(0,r.kt)("em",{parentName:"p"},"server-side")," fetch request will interact with the framework's persistent HTTP cache."),(0,r.kt)("p",null,"You can call ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," directly within Server Components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},"export default async function Page() {\n  // This request should be cached until manually invalidated.\n  // Similar to `getStaticProps`.\n  // `force-cache` is the default and can be omitted.\n  const staticData = await fetch(`https://...`, { cache: 'force-cache' })\n\n  // This request should be refetched on every request.\n  // Similar to `getServerSideProps`.\n  const dynamicData = await fetch(`https://...`, { cache: 'no-store' })\n\n  // This request should be cached with a lifetime of 10 seconds.\n  // Similar to `getStaticProps` with the `revalidate` option.\n  const revalidatedData = await fetch(`https://...`, {\n    next: { revalidate: 10 },\n  })\n\n  return <div>...</div>\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" switcher',filename:'"app/page.js"',switcher:!0},"export default async function Page() {\n  // This request should be cached until manually invalidated.\n  // Similar to `getStaticProps`.\n  // `force-cache` is the default and can be omitted.\n  const staticData = await fetch(`https://...`, { cache: 'force-cache' })\n\n  // This request should be refetched on every request.\n  // Similar to `getServerSideProps`.\n  const dynamicData = await fetch(`https://...`, { cache: 'no-store' })\n\n  // This request should be cached with a lifetime of 10 seconds.\n  // Similar to `getStaticProps` with the `revalidate` option.\n  const revalidatedData = await fetch(`https://...`, {\n    next: { revalidate: 10 },\n  })\n\n  return <div>...</div>\n}\n")),(0,r.kt)("h2",{id:"fetchurl-options"},(0,r.kt)("inlineCode",{parentName:"h2"},"fetch(url, options)")),(0,r.kt)("p",null,"Since Next.js extends the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/Fetch_API"},"Web ",(0,r.kt)("inlineCode",{parentName:"a"},"fetch()")," API"),", you can use any of the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/fetch#parameters"},"native options available"),"."),(0,r.kt)("h3",{id:"optionscache"},(0,r.kt)("inlineCode",{parentName:"h3"},"options.cache")),(0,r.kt)("p",null,"Configure how the request should interact with Next.js ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/caching#data-cache"},"Data Cache"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetch(`https://...`, { cache: 'force-cache' | 'no-store' })\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"force-cache"))," (default) - Next.js looks for a matching request in its Data Cache.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there is a match and it is fresh, it will be returned from the cache."),(0,r.kt)("li",{parentName:"ul"},"If there is no match or a stale match, Next.js will fetch the resource from the remote server and update the cache with the downloaded resource."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"no-store"))," - Next.js fetches the resource from the remote server on every request without looking in the cache, and it will not update the cache with the downloaded resource.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If you don't provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"cache")," option, Next.js will default to ",(0,r.kt)("inlineCode",{parentName:"li"},"force-cache"),", unless a ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering/server-components#server-rendering-strategies#dynamic-functions"},"dynamic function")," such as ",(0,r.kt)("inlineCode",{parentName:"li"},"cookies()")," is used, in which case it will default to ",(0,r.kt)("inlineCode",{parentName:"li"},"no-store"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"no-cache")," option behaves the same way as ",(0,r.kt)("inlineCode",{parentName:"li"},"no-store")," in Next.js."))),(0,r.kt)("h3",{id:"optionsnextrevalidate"},(0,r.kt)("inlineCode",{parentName:"h3"},"options.next.revalidate")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetch(`https://...`, { next: { revalidate: false | 0 | number } })\n")),(0,r.kt)("p",null,"Set the cache lifetime of a resource (in seconds)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"false"))," - Cache the resource indefinitely. Semantically equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"revalidate: Infinity"),". The HTTP cache may evict older resources over time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"0"))," - Prevent the resource from being cached."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"number"))," - (in seconds) Specify the resource should have a cache lifetime of at most ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," seconds.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If an individual ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch()")," request sets a ",(0,r.kt)("inlineCode",{parentName:"li"},"revalidate")," number lower than the ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/api-reference/file-conventions/route-segment-config#revalidate"},"default ",(0,r.kt)("inlineCode",{parentName:"a"},"revalidate"))," of a route, the whole route revalidation interval will be decreased."),(0,r.kt)("li",{parentName:"ul"},"If two fetch requests with the same URL in the same route have different ",(0,r.kt)("inlineCode",{parentName:"li"},"revalidate")," values, the lower value will be used."),(0,r.kt)("li",{parentName:"ul"},"As a convenience, it is not necessary to set the ",(0,r.kt)("inlineCode",{parentName:"li"},"cache")," option if ",(0,r.kt)("inlineCode",{parentName:"li"},"revalidate")," is set to a number since ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," implies ",(0,r.kt)("inlineCode",{parentName:"li"},"cache: 'no-store'")," and a positive value implies ",(0,r.kt)("inlineCode",{parentName:"li"},"cache: 'force-cache'"),"."),(0,r.kt)("li",{parentName:"ul"},"Conflicting options such as ",(0,r.kt)("inlineCode",{parentName:"li"},"{ revalidate: 0, cache: 'force-cache' }")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"{ revalidate: 10, cache: 'no-store' }")," will cause an error."))),(0,r.kt)("h3",{id:"optionsnexttags"},(0,r.kt)("inlineCode",{parentName:"h3"},"options.next.tags")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetch(`https://...`, { next: { tags: ['collection'] } })\n")),(0,r.kt)("p",null,"Set the cache tags of a resource. Data can then be revalidated on-demand using ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/app/api-reference/functions/revalidateTag"},(0,r.kt)("inlineCode",{parentName:"a"},"revalidateTag")),". The max length for a custom tag is 256 characters."),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fetch")," introduced.")))))}h.isMDXComponent=!0}}]);