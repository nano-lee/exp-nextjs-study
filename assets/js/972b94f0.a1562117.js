"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3625],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>u});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),l=function(e){var a=r.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=l(e.components);return r.createElement(p.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),h=t,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||s;return n?r.createElement(u,i(i({ref:a},c),{},{components:n})):r.createElement(u,i({ref:a},c))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[m]="string"==typeof e?e:t,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9586:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),t=(n(7294),n(3905));const s={title:"useSearchParams",description:"API Reference for the useSearchParams hook."},i=void 0,o={unversionedId:"app/api-reference/functions/use-search-params",id:"app/api-reference/functions/use-search-params",title:"useSearchParams",description:"API Reference for the useSearchParams hook.",source:"@site/docs/02-app/02-api-reference/04-functions/use-search-params.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/use-search-params",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/use-search-params",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/use-search-params.mdx",tags:[],version:"current",frontMatter:{title:"useSearchParams",description:"API Reference for the useSearchParams hook."},sidebar:"tutorialSidebar",previous:{title:"useRouter",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/use-router"},next:{title:"useSelectedLayoutSegment",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/use-selected-layout-segment"}},p={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Behavior",id:"behavior",level:2},{value:"Static Rendering",id:"static-rendering",level:3},{value:"Dynamic Rendering",id:"dynamic-rendering",level:3},{value:"Server Components",id:"server-components",level:3},{value:"Pages",id:"pages",level:4},{value:"Layouts",id:"layouts",level:4},{value:"Examples",id:"examples",level:2},{value:"Updating <code>searchParams</code>",id:"updating-searchparams",level:3},{value:"Version History",id:"version-history",level:2}],c={toc:l},m="wrapper";function d(e){let{components:a,...n}=e;return(0,t.kt)(m,(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"useSearchParams")," is a ",(0,t.kt)("strong",{parentName:"p"},"Client Component")," hook that lets you read the current URL's ",(0,t.kt)("strong",{parentName:"p"},"query string"),"."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"useSearchParams")," returns a ",(0,t.kt)("strong",{parentName:"p"},"read-only")," version of the ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams"},(0,t.kt)("inlineCode",{parentName:"a"},"URLSearchParams"))," interface."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/dashboard/search-bar.tsx" switcher',filename:'"app/dashboard/search-bar.tsx"',switcher:!0},"'use client'\n\nimport { useSearchParams } from 'next/navigation'\n\nexport default function SearchBar() {\n  const searchParams = useSearchParams()\n\n  const search = searchParams.get('search')\n\n  // URL -> `/dashboard?search=my-project`\n  // `search` -> 'my-project'\n  return <>Search: {search}</>\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/dashboard/search-bar.js" switcher',filename:'"app/dashboard/search-bar.js"',switcher:!0},"'use client'\n\nimport { useSearchParams } from 'next/navigation'\n\nexport default function SearchBar() {\n  const searchParams = useSearchParams()\n\n  const search = searchParams.get('search')\n\n  // URL -> `/dashboard?search=my-project`\n  // `search` -> 'my-project'\n  return <>Search: {search}</>\n}\n")),(0,t.kt)("h2",{id:"parameters"},"Parameters"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},"const searchParams = useSearchParams()\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"useSearchParams")," does not take any parameters."),(0,t.kt)("h2",{id:"returns"},"Returns"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"useSearchParams")," returns a ",(0,t.kt)("strong",{parentName:"p"},"read-only")," version of the ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams"},(0,t.kt)("inlineCode",{parentName:"a"},"URLSearchParams"))," interface, which includes utility methods for reading the URL's query string:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams/get"},(0,t.kt)("inlineCode",{parentName:"a"},"URLSearchParams.get()")),": Returns the first value associated with the search parameter. For example:"),(0,t.kt)("table",{parentName:"li"},(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"URL"),(0,t.kt)("th",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"th"},'searchParams.get("a")')))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"/dashboard?a=1")),(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"'1'"))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"/dashboard?a=")),(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"''"))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"/dashboard?b=3")),(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"null"))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"/dashboard?a=1&a=2")),(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"'1'")," ",(0,t.kt)("em",{parentName:"td"},"- use ",(0,t.kt)("a",{parentName:"em",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams/getAll"},(0,t.kt)("inlineCode",{parentName:"a"},"getAll()"))," to get all values")))))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams/has"},(0,t.kt)("inlineCode",{parentName:"a"},"URLSearchParams.has()")),": Returns a boolean value indicating if the given parameter exists. For example:"),(0,t.kt)("table",{parentName:"li"},(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"URL"),(0,t.kt)("th",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"th"},'searchParams.has("a")')))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"/dashboard?a=1")),(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"true"))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"/dashboard?b=3")),(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"false")))))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Learn more about other ",(0,t.kt)("strong",{parentName:"p"},"read-only")," methods of ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams"},(0,t.kt)("inlineCode",{parentName:"a"},"URLSearchParams")),", including the ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams/getAll"},(0,t.kt)("inlineCode",{parentName:"a"},"getAll()")),", ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams/keys"},(0,t.kt)("inlineCode",{parentName:"a"},"keys()")),", ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams/values"},(0,t.kt)("inlineCode",{parentName:"a"},"values()")),", ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams/entries"},(0,t.kt)("inlineCode",{parentName:"a"},"entries()")),", ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams/forEach"},(0,t.kt)("inlineCode",{parentName:"a"},"forEach()")),", and ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URLSearchParams/toString"},(0,t.kt)("inlineCode",{parentName:"a"},"toString()")),"."))),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,t.kt)("ul",{parentName:"blockquote"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"useSearchParams")," is a ",(0,t.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering/client-components"},"Client Component")," hook and is ",(0,t.kt)("strong",{parentName:"li"},"not supported")," in ",(0,t.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering/server-components"},"Server Components")," to prevent stale values during ",(0,t.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/routing/linking-and-navigating#3-partial-rendering"},"partial rendering"),"."),(0,t.kt)("li",{parentName:"ul"},"If an application includes the ",(0,t.kt)("inlineCode",{parentName:"li"},"/pages")," directory, ",(0,t.kt)("inlineCode",{parentName:"li"},"useSearchParams")," will return ",(0,t.kt)("inlineCode",{parentName:"li"},"ReadonlyURLSearchParams | null"),". The ",(0,t.kt)("inlineCode",{parentName:"li"},"null")," value is for compatibility during migration since search params cannot be known during pre-rendering of a page that doesn't use ",(0,t.kt)("inlineCode",{parentName:"li"},"getServerSideProps")))),(0,t.kt)("h2",{id:"behavior"},"Behavior"),(0,t.kt)("h3",{id:"static-rendering"},"Static Rendering"),(0,t.kt)("p",null,"If a route is ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/server-components#static-rendering-default"},"statically rendered"),", calling ",(0,t.kt)("inlineCode",{parentName:"p"},"useSearchParams()")," will cause the tree up to the closest ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/loading-ui-and-streaming#example"},(0,t.kt)("inlineCode",{parentName:"a"},"Suspense")," boundary")," to be client-side rendered."),(0,t.kt)("p",null,"This allows a part of the page to be statically rendered while the dynamic part that uses ",(0,t.kt)("inlineCode",{parentName:"p"},"searchParams")," is client-side rendered."),(0,t.kt)("p",null,"You can reduce the portion of the route that is client-side rendered by wrapping the component that uses ",(0,t.kt)("inlineCode",{parentName:"p"},"useSearchParams")," in a ",(0,t.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary. For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/dashboard/search-bar.tsx" switcher',filename:'"app/dashboard/search-bar.tsx"',switcher:!0},"'use client'\n\nimport { useSearchParams } from 'next/navigation'\n\nexport default function SearchBar() {\n  const searchParams = useSearchParams()\n\n  const search = searchParams.get('search')\n\n  // This will not be logged on the server when using static rendering\n  console.log(search)\n\n  return <>Search: {search}</>\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/dashboard/search-bar.js" switcher',filename:'"app/dashboard/search-bar.js"',switcher:!0},"'use client'\n\nimport { useSearchParams } from 'next/navigation'\n\nexport default function SearchBar() {\n  const searchParams = useSearchParams()\n\n  const search = searchParams.get('search')\n\n  // This will not be logged on the server when using static rendering\n  console.log(search)\n\n  return <>Search: {search}</>\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/dashboard/page.tsx" switcher',filename:'"app/dashboard/page.tsx"',switcher:!0},"import { Suspense } from 'react'\nimport SearchBar from './search-bar'\n\n// This component passed as a fallback to the Suspense boundary\n// will be rendered in place of the search bar in the initial HTML.\n// When the value is available during React hydration the fallback\n// will be replaced with the `<SearchBar>` component.\nfunction SearchBarFallback() {\n  return <>placeholder</>\n}\n\nexport default function Page() {\n  return (\n    <>\n      <nav>\n        <Suspense fallback={<SearchBarFallback />}>\n          <SearchBar />\n        </Suspense>\n      </nav>\n      <h1>Dashboard</h1>\n    </>\n  )\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/dashboard/page.js" switcher',filename:'"app/dashboard/page.js"',switcher:!0},"import { Suspense } from 'react'\nimport SearchBar from './search-bar'\n\n// This component passed as a fallback to the Suspense boundary\n// will be rendered in place of the search bar in the initial HTML.\n// When the value is available during React hydration the fallback\n// will be replaced with the `<SearchBar>` component.\nfunction SearchBarFallback() {\n  return <>placeholder</>\n}\n\nexport default function Page() {\n  return (\n    <>\n      <nav>\n        <Suspense fallback={<SearchBarFallback />}>\n          <SearchBar />\n        </Suspense>\n      </nav>\n      <h1>Dashboard</h1>\n    </>\n  )\n}\n")),(0,t.kt)("h3",{id:"dynamic-rendering"},"Dynamic Rendering"),(0,t.kt)("p",null,"If a route is ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/server-components#dynamic-rendering"},"dynamically rendered"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"useSearchParams")," will be available on the server during the initial server render of the Client Component."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"Good to know"),": Setting the ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/route-segment-config#dynamic"},(0,t.kt)("inlineCode",{parentName:"a"},"dynamic")," route segment config option")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"force-dynamic")," can be used to force dynamic rendering.")),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/dashboard/search-bar.tsx" switcher',filename:'"app/dashboard/search-bar.tsx"',switcher:!0},"'use client'\n\nimport { useSearchParams } from 'next/navigation'\n\nexport default function SearchBar() {\n  const searchParams = useSearchParams()\n\n  const search = searchParams.get('search')\n\n  // This will be logged on the server during the initial render\n  // and on the client on subsequent navigations.\n  console.log(search)\n\n  return <>Search: {search}</>\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/dashboard/search-bar.js" switcher',filename:'"app/dashboard/search-bar.js"',switcher:!0},"'use client'\n\nimport { useSearchParams } from 'next/navigation'\n\nexport default function SearchBar() {\n  const searchParams = useSearchParams()\n\n  const search = searchParams.get('search')\n\n  // This will be logged on the server during the initial render\n  // and on the client on subsequent navigations.\n  console.log(search)\n\n  return <>Search: {search}</>\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/dashboard/page.tsx" switcher',filename:'"app/dashboard/page.tsx"',switcher:!0},"import SearchBar from './search-bar'\n\nexport const dynamic = 'force-dynamic'\n\nexport default function Page() {\n  return (\n    <>\n      <nav>\n        <SearchBar />\n      </nav>\n      <h1>Dashboard</h1>\n    </>\n  )\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/dashboard/page.js" switcher',filename:'"app/dashboard/page.js"',switcher:!0},"import SearchBar from './search-bar'\n\nexport const dynamic = 'force-dynamic'\n\nexport default function Page() {\n  return (\n    <>\n      <nav>\n        <SearchBar />\n      </nav>\n      <h1>Dashboard</h1>\n    </>\n  )\n}\n")),(0,t.kt)("h3",{id:"server-components"},"Server Components"),(0,t.kt)("h4",{id:"pages"},"Pages"),(0,t.kt)("p",null,"To access search params in ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/page"},"Pages")," (Server Components), use the ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/page#searchparams-optional"},(0,t.kt)("inlineCode",{parentName:"a"},"searchParams"))," prop."),(0,t.kt)("h4",{id:"layouts"},"Layouts"),(0,t.kt)("p",null,"Unlike Pages, ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/layout"},"Layouts")," (Server Components) ",(0,t.kt)("strong",{parentName:"p"},"do not")," receive the ",(0,t.kt)("inlineCode",{parentName:"p"},"searchParams")," prop. This is because a shared layout is ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/linking-and-navigating#3-partial-rendering"},"not re-rendered during navigation")," which could lead to stale ",(0,t.kt)("inlineCode",{parentName:"p"},"searchParams")," between navigations. View ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/layout#layouts-do-not-receive-searchparams"},"detailed explanation"),"."),(0,t.kt)("p",null,"Instead, use the Page ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/page"},(0,t.kt)("inlineCode",{parentName:"a"},"searchParams"))," prop or the ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/use-search-params"},(0,t.kt)("inlineCode",{parentName:"a"},"useSearchParams"))," hook in a Client Component, which is re-rendered on the client with the latest ",(0,t.kt)("inlineCode",{parentName:"p"},"searchParams"),"."),(0,t.kt)("h2",{id:"examples"},"Examples"),(0,t.kt)("h3",{id:"updating-searchparams"},"Updating ",(0,t.kt)("inlineCode",{parentName:"h3"},"searchParams")),(0,t.kt)("p",null,"You can use ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/use-router"},(0,t.kt)("inlineCode",{parentName:"a"},"useRouter"))," or ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/components/link"},(0,t.kt)("inlineCode",{parentName:"a"},"Link"))," to set new ",(0,t.kt)("inlineCode",{parentName:"p"},"searchParams"),". After a navigation is performed, the current ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/page"},(0,t.kt)("inlineCode",{parentName:"a"},"page.js"))," will receive an updated ",(0,t.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/page#searchparams-optional"},(0,t.kt)("inlineCode",{parentName:"a"},"searchParams")," prop"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/example-client-component.tsx" switcher',filename:'"app/example-client-component.tsx"',switcher:!0},"export default function ExampleClientComponent() {\n  const router = useRouter()\n  const pathname = usePathname()\n  const searchParams = useSearchParams()!\n\n  // Get a new searchParams string by merging the current\n  // searchParams with a provided key/value pair\n  const createQueryString = useCallback(\n    (name: string, value: string) => {\n      const params = new URLSearchParams(searchParams)\n      params.set(name, value)\n\n      return params.toString()\n    },\n    [searchParams]\n  )\n\n  return (\n    <>\n      <p>Sort By</p>\n\n      {/* using useRouter */}\n      <button\n        onClick={() => {\n          // <pathname>?sort=asc\n          router.push(pathname + '?' + createQueryString('sort', 'asc'))\n        }}\n      >\n        ASC\n      </button>\n\n      {/* using <Link> */}\n      <Link\n        href={\n          // <pathname>?sort=desc\n          pathname + '?' + createQueryString('sort', 'desc')\n        }\n      >\n        DESC\n      </Link>\n    </>\n  )\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/example-client-component.js" switcher',filename:'"app/example-client-component.js"',switcher:!0},"export default function ExampleClientComponent() {\n  const router = useRouter()\n  const pathname = usePathname()\n  const searchParams = useSearchParams()\n\n  // Get a new searchParams string by merging the current\n  // searchParams with a provided key/value pair\n  const createQueryString = useCallback(\n    (name, value) => {\n      const params = new URLSearchParams(searchParams)\n      params.set(name, value)\n\n      return params.toString()\n    },\n    [searchParams]\n  )\n\n  return (\n    <>\n      <p>Sort By</p>\n\n      {/* using useRouter */}\n      <button\n        onClick={() => {\n          // <pathname>?sort=asc\n          router.push(pathname + '?' + createQueryString('sort', 'asc'))\n        }}\n      >\n        ASC\n      </button>\n\n      {/* using <Link> */}\n      <Link\n        href={\n          // <pathname>?sort=desc\n          pathname + '?' + createQueryString('sort', 'desc')\n        }\n      >\n        DESC\n      </Link>\n    </>\n  )\n}\n")),(0,t.kt)("h2",{id:"version-history"},"Version History"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Version"),(0,t.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"useSearchParams")," introduced.")))))}d.isMDXComponent=!0}}]);