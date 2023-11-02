"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,h=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6,title:"Loading UI and Streaming",description:"Built on top of Suspense, Loading UI allows you to create a fallback for specific route segments, and automatically stream content as it becomes ready."},o=void 0,s={unversionedId:"app/building-your-application/routing/loading-ui-and-streaming",id:"app/building-your-application/routing/loading-ui-and-streaming",title:"Loading UI and Streaming",description:"Built on top of Suspense, Loading UI allows you to create a fallback for specific route segments, and automatically stream content as it becomes ready.",source:"@site/docs/02-app/01-building-your-application/01-routing/06-loading-ui-and-streaming.mdx",sourceDirName:"02-app/01-building-your-application/01-routing",slug:"/app/building-your-application/routing/loading-ui-and-streaming",permalink:"/docs/app/building-your-application/routing/loading-ui-and-streaming",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/01-routing/06-loading-ui-and-streaming.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Loading UI and Streaming",description:"Built on top of Suspense, Loading UI allows you to create a fallback for specific route segments, and automatically stream content as it becomes ready."},sidebar:"tutorialSidebar",previous:{title:"Dynamic Routes",permalink:"/docs/app/building-your-application/routing/dynamic-routes"},next:{title:"Error Handling",permalink:"/docs/app/building-your-application/routing/error-handling"}},l={},p=[{value:"Instant Loading States",id:"instant-loading-states",level:2},{value:"Streaming with Suspense",id:"streaming-with-suspense",level:2},{value:"What is Streaming?",id:"what-is-streaming",level:3},{value:"Example",id:"example",level:3},{value:"SEO",id:"seo",level:3},{value:"Status Codes",id:"status-codes",level:3}],d=(c="Image",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:p},g="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The special file ",(0,r.kt)("inlineCode",{parentName:"p"},"loading.js")," helps you create meaningful Loading UI with ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/Suspense"},"React Suspense"),". With this convention, you can show an ",(0,r.kt)("a",{parentName:"p",href:"#instant-loading-states"},"instant loading state")," from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete."),(0,r.kt)(d,{alt:"Loading UI",srcLight:"/docs/light/loading-ui.png",srcDark:"/docs/dark/loading-ui.png",width:"1600",height:"691",mdxType:"Image"}),(0,r.kt)("h2",{id:"instant-loading-states"},"Instant Loading States"),(0,r.kt)("p",null,"An instant loading state is fallback UI that is shown immediately upon navigation. You can pre-render loading indicators such as skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc. This helps users understand the app is responding and provides a better user experience."),(0,r.kt)("p",null,"Create a loading state by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"loading.js")," file inside a folder."),(0,r.kt)(d,{alt:"loading.js special file",srcLight:"/docs/light/loading-special-file.png",srcDark:"/docs/dark/loading-special-file.png",width:"1600",height:"606",mdxType:"Image"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/dashboard/loading.tsx" switcher',filename:'"app/dashboard/loading.tsx"',switcher:!0},"export default function Loading() {\n    // You can add any UI inside Loading, including a Skeleton.\n    return <LoadingSkeleton />;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/dashboard/loading.js" switcher',filename:'"app/dashboard/loading.js"',switcher:!0},"export default function Loading() {\n    // You can add any UI inside Loading, including a Skeleton.\n    return <LoadingSkeleton />;\n}\n")),(0,r.kt)("p",null,"In the same folder, ",(0,r.kt)("inlineCode",{parentName:"p"},"loading.js")," will be nested inside ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.js"),". It will automatically wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"page.js")," file and any children below in a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense>")," boundary."),(0,r.kt)(d,{alt:"loading.js overview",srcLight:"/docs/light/loading-overview.png",srcDark:"/docs/dark/loading-overview.png",width:"1600",height:"768",mdxType:"Image"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Navigation is immediate, even with ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works"},"server-centric routing"),"."),(0,r.kt)("li",{parentName:"ul"},"Navigation is interruptible, meaning changing routes does not need to wait for the content of the route to fully load before navigating to another route."),(0,r.kt)("li",{parentName:"ul"},"Shared layouts remain interactive while new route segments load."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Recommendation:")," Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"loading.js")," convention for route segments (layouts and pages) as Next.js optimizes this functionality.")),(0,r.kt)("h2",{id:"streaming-with-suspense"},"Streaming with Suspense"),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"loading.js"),", you can also manually create Suspense Boundaries for your own UI components. The App Router supports streaming with ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/Suspense"},"Suspense")," for both ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes"},"Node.js and Edge runtimes"),"."),(0,r.kt)("h3",{id:"what-is-streaming"},"What is Streaming?"),(0,r.kt)("p",null,"To learn how Streaming works in React and Next.js, it's helpful to understand ",(0,r.kt)("strong",{parentName:"p"},"Server-Side Rendering (SSR)")," and its limitations."),(0,r.kt)("p",null,"With SSR, there's a series of steps that need to be completed before a user can see and interact with a page:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, all data for a given page is fetched on the server."),(0,r.kt)("li",{parentName:"ol"},"The server then renders the HTML for the page."),(0,r.kt)("li",{parentName:"ol"},"The HTML, CSS, and JavaScript for the page are sent to the client."),(0,r.kt)("li",{parentName:"ol"},"A non-interactive user interface is shown using the generated HTML, and CSS."),(0,r.kt)("li",{parentName:"ol"},"Finally, React ",(0,r.kt)("a",{parentName:"li",href:"https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html"},"hydrates")," the user interface to make it interactive.")),(0,r.kt)(d,{alt:"Chart showing Server Rendering without Streaming",srcLight:"/docs/light/server-rendering-without-streaming-chart.png",srcDark:"/docs/dark/server-rendering-without-streaming-chart.png",width:"1600",height:"612",mdxType:"Image"}),(0,r.kt)("p",null,"These steps are sequential and blocking, meaning the server can only render the HTML for a page once all the data has been fetched. And, on the client, React can only hydrate the UI once the code for all components in the page has been downloaded."),(0,r.kt)("p",null,"SSR with React and Next.js helps improve the perceived loading performance by showing a non-interactive page to the user as soon as possible."),(0,r.kt)(d,{alt:"Server Rendering without Streaming",srcLight:"/docs/light/server-rendering-without-streaming.png",srcDark:"/docs/dark/server-rendering-without-streaming.png",width:"1600",height:"748",mdxType:"Image"}),(0,r.kt)("p",null,"However, it can still be slow as all data fetching on server needs to be completed before the page can be shown to the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Streaming")," allows you to break down the page's HTML into smaller chunks and progressively send those chunks from the server to the client."),(0,r.kt)(d,{alt:"How Server Rendering with Streaming Works",srcLight:"/docs/light/server-rendering-with-streaming.png",srcDark:"/docs/dark/server-rendering-with-streaming.png",width:"1600",height:"785",mdxType:"Image"}),(0,r.kt)("p",null,"This enables parts of the page to be displayed sooner, without waiting for all the data to load before any UI can be rendered."),(0,r.kt)("p",null,"Streaming works well with React's component model because each component can be considered a chunk. Components that have higher priority (e.g. product information) or that don't rely on data can be sent first (e.g. layout), and React can start hydration earlier. Components that have lower priority (e.g. reviews, related products) can be sent in the same server request after their data has been fetched."),(0,r.kt)(d,{alt:"Chart showing Server Rendering with Streaming",srcLight:"/docs/light/server-rendering-with-streaming-chart.png",srcDark:"/docs/dark/server-rendering-with-streaming-chart.png",width:"1600",height:"730",mdxType:"Image"}),(0,r.kt)("p",null,"Streaming is particularly beneficial when you want to prevent long data requests from blocking the page from rendering as it can reduce the ",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/ttfb/"},"Time To First Byte (TTFB)")," and ",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/first-contentful-paint/"},"First Contentful Paint (FCP)"),". It also helps improve ",(0,r.kt)("a",{parentName:"p",href:"https://developer.chrome.com/en/docs/lighthouse/performance/interactive/"},"Time to Interactive (TTI)"),", especially on slower devices."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense>")," works by wrapping a component that performs an asynchronous action (e.g. fetch data), showing fallback UI (e.g. skeleton, spinner) while it's happening, and then swapping in your component once the action completes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/dashboard/page.tsx" switcher',filename:'"app/dashboard/page.tsx"',switcher:!0},'import { Suspense } from "react";\nimport { PostFeed, Weather } from "./Components";\n\nexport default function Posts() {\n    return (\n        <section>\n            <Suspense fallback={<p>Loading feed...</p>}>\n                <PostFeed />\n            </Suspense>\n            <Suspense fallback={<p>Loading weather...</p>}>\n                <Weather />\n            </Suspense>\n        </section>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/dashboard/page.js" switcher',filename:'"app/dashboard/page.js"',switcher:!0},'import { Suspense } from "react";\nimport { PostFeed, Weather } from "./Components";\n\nexport default function Posts() {\n    return (\n        <section>\n            <Suspense fallback={<p>Loading feed...</p>}>\n                <PostFeed />\n            </Suspense>\n            <Suspense fallback={<p>Loading weather...</p>}>\n                <Weather />\n            </Suspense>\n        </section>\n    );\n}\n')),(0,r.kt)("p",null,"By using Suspense, you get the benefits of:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Streaming Server Rendering")," - Progressively rendering HTML from the server to the client."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Selective Hydration")," - React prioritizes what components to make interactive first based on user interaction.")),(0,r.kt)("p",null,"For more Suspense examples and use cases, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/Suspense"},"React Documentation"),"."),(0,r.kt)("h3",{id:"seo"},"SEO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next.js will wait for data fetching inside ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/api-reference/functions/generate-metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"generateMetadata"))," to complete before streaming UI to the client. This guarantees the first part of a streamed response includes ",(0,r.kt)("inlineCode",{parentName:"li"},"<head>")," tags."),(0,r.kt)("li",{parentName:"ul"},"Since streaming is server-rendered, it does not impact SEO. You can use the ",(0,r.kt)("a",{parentName:"li",href:"https://search.google.com/test/mobile-friendly"},"Mobile Friendly Test")," tool from Google to see how your page appears to Google's web crawlers and view the serialized HTML (",(0,r.kt)("a",{parentName:"li",href:"https://web.dev/rendering-on-the-web/#seo-considerations"},"source"),").")),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("p",null,"When streaming, a ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," status code will be returned to signal that the request was successful."),(0,r.kt)("p",null,"The server can still communicate errors or issues to the client within the streamed content itself, for example, when using ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/redirect"},(0,r.kt)("inlineCode",{parentName:"a"},"redirect"))," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/not-found"},(0,r.kt)("inlineCode",{parentName:"a"},"notFound")),". Since the response headers have already been sent to the client, the status code of the response cannot be updated. This does not affect SEO."))}h.isMDXComponent=!0}}]);