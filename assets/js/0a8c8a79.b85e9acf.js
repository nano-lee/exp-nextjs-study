"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[6149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"useRouter",description:"API reference for the useRouter hook."},i=void 0,l={unversionedId:"app/api-reference/functions/use-router",id:"app/api-reference/functions/use-router",title:"useRouter",description:"API reference for the useRouter hook.",source:"@site/docs/02-app/02-api-reference/04-functions/use-router.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/use-router",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/use-router",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/use-router.mdx",tags:[],version:"current",frontMatter:{title:"useRouter",description:"API reference for the useRouter hook."},sidebar:"tutorialSidebar",previous:{title:"useReportWebVitals",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/use-report-web-vitals"},next:{title:"useSearchParams",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/use-search-params"}},s={},p=[{value:"<code>useRouter()</code>",id:"userouter",level:2},{value:"Migrating from <code>next/router</code>",id:"migrating-from-nextrouter",level:3},{value:"Examples",id:"examples",level:2},{value:"Router events",id:"router-events",level:3},{value:"Disabling scroll restoration",id:"disabling-scroll-restoration",level:3},{value:"Version History",id:"version-history",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useRouter")," hook allows you to programmatically change routes inside ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/client-components"},"Client Components"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," Use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/linking-and-navigating#link-component"},(0,a.kt)("inlineCode",{parentName:"a"},"<Link>")," component")," for navigation unless you have a specific requirement for using ",(0,a.kt)("inlineCode",{parentName:"p"},"useRouter"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/example-client-component.tsx" switcher',filename:'"app/example-client-component.tsx"',switcher:!0},"'use client'\n\nimport { useRouter } from 'next/navigation'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.push('/dashboard')}>\n      Dashboard\n    </button>\n  )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/example-client-component.js" switcher',filename:'"app/example-client-component.js"',switcher:!0},"'use client'\n\nimport { useRouter } from 'next/navigation'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.push('/dashboard')}>\n      Dashboard\n    </button>\n  )\n}\n")),(0,a.kt)("h2",{id:"userouter"},(0,a.kt)("inlineCode",{parentName:"h2"},"useRouter()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"router.push(href: string, { scroll: boolean })"),": Perform a client-side navigation to the provided route. Adds a new entry into the ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/API/History_API"},"browser\u2019s history")," stack."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"router.replace(href: string, { scroll: boolean })"),": Perform a client-side navigation to the provided route without adding a new entry into the ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/API/History_API"},"browser\u2019s history stack"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"router.refresh()"),": Refresh the current route. Making a new request to the server, re-fetching data requests, and re-rendering Server Components. The client will merge the updated React Server Component payload without losing unaffected client-side React (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"useState"),") or browser state (e.g. scroll position)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"router.prefetch(href: string)"),": ",(0,a.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching"},"Prefetch")," the provided route for faster client-side transitions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"router.back()"),": Navigate back to the previous route in the browser\u2019s history stack."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"router.forward()"),": Navigate forwards to the next page in the browser\u2019s history stack.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"<Link>")," component automatically prefetch routes as they become visible in the viewport."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"refresh()")," could re-produce the same result if fetch requests are cached. Other dynamic functions like ",(0,a.kt)("inlineCode",{parentName:"li"},"cookies")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"headers")," could also change the response."))),(0,a.kt)("h3",{id:"migrating-from-nextrouter"},"Migrating from ",(0,a.kt)("inlineCode",{parentName:"h3"},"next/router")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"useRouter")," hook should be imported from ",(0,a.kt)("inlineCode",{parentName:"li"},"next/navigation")," and not ",(0,a.kt)("inlineCode",{parentName:"li"},"next/router")," when using the App Router"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"pathname")," string has been removed and is replaced by ",(0,a.kt)("a",{parentName:"li",href:"/docs/app/api-reference/functions/use-pathname"},(0,a.kt)("inlineCode",{parentName:"a"},"usePathname()"))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"query")," object has been removed and is replaced by ",(0,a.kt)("a",{parentName:"li",href:"/docs/app/api-reference/functions/use-search-params"},(0,a.kt)("inlineCode",{parentName:"a"},"useSearchParams()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"router.events")," has been replaced. ",(0,a.kt)("a",{parentName:"li",href:"#router-events"},"See below."))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/upgrading/app-router-migration"},"View the full migration guide"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"router-events"},"Router events"),(0,a.kt)("p",null,"You can listen for page changes by composing other Client Component hooks like ",(0,a.kt)("inlineCode",{parentName:"p"},"usePathname")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useSearchParams"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/components/navigation-events.js"',filename:'"app/components/navigation-events.js"'},"'use client'\n\nimport { useEffect } from 'react'\nimport { usePathname, useSearchParams } from 'next/navigation'\n\nexport function NavigationEvents() {\n  const pathname = usePathname()\n  const searchParams = useSearchParams()\n\n  useEffect(() => {\n    const url = `${pathname}?${searchParams}`\n    console.log(url)\n    // You can now use the current URL\n    // ...\n  }, [pathname, searchParams])\n\n  return null\n}\n")),(0,a.kt)("p",null,"Which can be imported into a layout."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" highlight={2,10-12}',filename:'"app/layout.js"',highlight:"{2,10-12}"},"import { Suspense } from 'react'\nimport { NavigationEvents } from './components/navigation-events'\n\nexport default function Layout({ children }) {\n  return (\n    <html lang=\"en\">\n      <body>\n        {children}\n\n        <Suspense fallback={null}>\n          <NavigationEvents />\n        </Suspense>\n      </body>\n    </html>\n  )\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"<NavigationEvents>")," is wrapped in a ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/loading-ui-and-streaming#example"},(0,a.kt)("inlineCode",{parentName:"a"},"Suspense")," boundary")," because",(0,a.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/use-search-params"},(0,a.kt)("inlineCode",{parentName:"a"},"useSearchParams()"))," causes client-side rendering up to the closest ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary during ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/server-components#static-rendering-default"},"static rendering"),". ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/use-search-params#behavior"},"Learn more"),".")),(0,a.kt)("h3",{id:"disabling-scroll-restoration"},"Disabling scroll restoration"),(0,a.kt)("p",null,"By default, Next.js will scroll to the top of the page when navigating to a new route. You can disable this behavior by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"scroll: false")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"router.push()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"router.replace()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/example-client-component.tsx" switcher',filename:'"app/example-client-component.tsx"',switcher:!0},"'use client'\n\nimport { useRouter } from 'next/navigation'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button\n      type=\"button\"\n      onClick={() => router.push('/dashboard', { scroll: false })}\n    >\n      Dashboard\n    </button>\n  )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/example-client-component.jsx" switcher',filename:'"app/example-client-component.jsx"',switcher:!0},"'use client'\n\nimport { useRouter } from 'next/navigation'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button\n      type=\"button\"\n      onClick={() => router.push('/dashboard', { scroll: false })}\n    >\n      Dashboard\n    </button>\n  )\n}\n")),(0,a.kt)("h2",{id:"version-history"},"Version History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"useRouter")," from ",(0,a.kt)("inlineCode",{parentName:"td"},"next/navigation")," introduced.")))))}m.isMDXComponent=!0}}]);