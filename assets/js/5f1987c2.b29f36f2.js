"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9700],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<p;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9580:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const p={title:"generateStaticParams",description:"API reference for the generateStaticParams function."},o=void 0,s={unversionedId:"app/api-reference/functions/generate-static-params",id:"app/api-reference/functions/generate-static-params",title:"generateStaticParams",description:"API reference for the generateStaticParams function.",source:"@site/docs/02-app/02-api-reference/04-functions/generate-static-params.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/generate-static-params",permalink:"/docs/app/api-reference/functions/generate-static-params",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/generate-static-params.mdx",tags:[],version:"current",frontMatter:{title:"generateStaticParams",description:"API reference for the generateStaticParams function."},sidebar:"tutorialSidebar",previous:{title:"generateMetadata",permalink:"/docs/app/api-reference/functions/generate-metadata"},next:{title:"generateViewport",permalink:"/docs/app/api-reference/functions/generate-viewport"}},i={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Single Dynamic Segment",id:"single-dynamic-segment",level:2},{value:"Multiple Dynamic Segments",id:"multiple-dynamic-segments",level:2},{value:"Catch-all Dynamic Segment",id:"catch-all-dynamic-segment",level:2},{value:"Examples",id:"examples",level:2},{value:"Multiple Dynamic Segments in a Route",id:"multiple-dynamic-segments-in-a-route",level:3},{value:"Generate params from the bottom up",id:"generate-params-from-the-bottom-up",level:3},{value:"Generate params from the top down",id:"generate-params-from-the-top-down",level:3},{value:"Version History",id:"version-history",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"generateStaticParams")," function can be used in combination with ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/dynamic-routes"},"dynamic route segments")," to ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/server-components#static-rendering-default"},(0,r.kt)("strong",{parentName:"a"},"statically generate"))," routes at build time instead of on-demand at request time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/blog/[slug]/page.js"',filename:'"app/blog/[slug]/page.js"'},"// Return a list of `params` to populate the [slug] dynamic segment\nexport async function generateStaticParams() {\n  const posts = await fetch('https://.../posts').then((res) => res.json())\n\n  return posts.map((post) => ({\n    slug: post.slug,\n  }))\n}\n\n// Multiple versions of this page will be statically generated\n// using the `params` returned by `generateStaticParams`\nexport default function Page({ params }) {\n  const { slug } = params\n  // ...\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"You can use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams"},(0,r.kt)("inlineCode",{parentName:"a"},"dynamicParams"))," segment config option to control what happens when a dynamic segment is visited that was not generated with ",(0,r.kt)("inlineCode",{parentName:"li"},"generateStaticParams"),"."),(0,r.kt)("li",{parentName:"ul"},"During ",(0,r.kt)("inlineCode",{parentName:"li"},"next dev"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"generateStaticParams")," will be called when you navigate to a route."),(0,r.kt)("li",{parentName:"ul"},"During ",(0,r.kt)("inlineCode",{parentName:"li"},"next build"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"generateStaticParams")," runs before the corresponding Layouts or Pages are generated."),(0,r.kt)("li",{parentName:"ul"},"During revalidation (ISR), ",(0,r.kt)("inlineCode",{parentName:"li"},"generateStaticParams")," will not be called again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"generateStaticParams")," replaces the ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/get-static-paths"},(0,r.kt)("inlineCode",{parentName:"a"},"getStaticPaths"))," function in the Pages Router."))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options.params")," (optional)"),(0,r.kt)("p",null,"If multiple dynamic segments in a route use ",(0,r.kt)("inlineCode",{parentName:"p"},"generateStaticParams"),", the child ",(0,r.kt)("inlineCode",{parentName:"p"},"generateStaticParams")," function is executed once for each set of ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," the parent generates."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," object contains the populated ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," from the parent ",(0,r.kt)("inlineCode",{parentName:"p"},"generateStaticParams"),", which can be used to ",(0,r.kt)("a",{parentName:"p",href:"#multiple-dynamic-segments-in-a-route"},"generate the ",(0,r.kt)("inlineCode",{parentName:"a"},"params")," in a child segment"),"."),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"generateStaticParams")," should return an array of objects where each object represents the populated dynamic segments of a single route."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each property in the object is a dynamic segment to be filled in for the route."),(0,r.kt)("li",{parentName:"ul"},"The properties name is the segment's name, and the properties value is what that segment should be filled in with.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Example Route"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"generateStaticParams")," Return Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/product/[id]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ id: string }[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/products/[category]/[product]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ category: string, product: string }[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/products/[...slug]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ slug: string[] }[]"))))),(0,r.kt)("h2",{id:"single-dynamic-segment"},"Single Dynamic Segment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/product/[id]/page.tsx" switcher',filename:'"app/product/[id]/page.tsx"',switcher:!0},"export function generateStaticParams() {\n  return [{ id: '1' }, { id: '2' }, { id: '3' }]\n}\n\n// Three versions of this page will be statically generated\n// using the `params` returned by `generateStaticParams`\n// - /product/1\n// - /product/2\n// - /product/3\nexport default function Page({ params }: { params: { id: string } }) {\n  const { id } = params\n  // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/product/[id]/page.js" switcher',filename:'"app/product/[id]/page.js"',switcher:!0},"export function generateStaticParams() {\n  return [{ id: '1' }, { id: '2' }, { id: '3' }]\n}\n\n// Three versions of this page will be statically generated\n// using the `params` returned by `generateStaticParams`\n// - /product/1\n// - /product/2\n// - /product/3\nexport default function Page({ params }) {\n  const { id } = params\n  // ...\n}\n")),(0,r.kt)("h2",{id:"multiple-dynamic-segments"},"Multiple Dynamic Segments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/products/[category]/[product]/page.tsx" switcher',filename:'"app/products/[category]/[product]/page.tsx"',switcher:!0},"export function generateStaticParams() {\n  return [\n    { category: 'a', product: '1' },\n    { category: 'b', product: '2' },\n    { category: 'c', product: '3' },\n  ]\n}\n\n// Three versions of this page will be statically generated\n// using the `params` returned by `generateStaticParams`\n// - /products/a/1\n// - /products/b/2\n// - /products/c/3\nexport default function Page({\n  params,\n}: {\n  params: { category: string; product: string }\n}) {\n  const { category, product } = params\n  // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/products/[category]/[product]/page.js" switcher',filename:'"app/products/[category]/[product]/page.js"',switcher:!0},"export function generateStaticParams() {\n  return [\n    { category: 'a', product: '1' },\n    { category: 'b', product: '2' },\n    { category: 'c', product: '3' },\n  ]\n}\n\n// Three versions of this page will be statically generated\n// using the `params` returned by `generateStaticParams`\n// - /products/a/1\n// - /products/b/2\n// - /products/c/3\nexport default function Page({ params }) {\n  const { category, product } = params\n  // ...\n}\n")),(0,r.kt)("h2",{id:"catch-all-dynamic-segment"},"Catch-all Dynamic Segment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/product/[...slug]/page.tsx" switcher',filename:'"app/product/[...slug]/page.tsx"',switcher:!0},"export function generateStaticParams() {\n  return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }]\n}\n\n// Three versions of this page will be statically generated\n// using the `params` returned by `generateStaticParams`\n// - /product/a/1\n// - /product/b/2\n// - /product/c/3\nexport default function Page({ params }: { params: { slug: string[] } }) {\n  const { slug } = params\n  // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/product/[...slug]/page.js" switcher',filename:'"app/product/[...slug]/page.js"',switcher:!0},"export function generateStaticParams() {\n  return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }]\n}\n\n// Three versions of this page will be statically generated\n// using the `params` returned by `generateStaticParams`\n// - /product/a/1\n// - /product/b/2\n// - /product/c/3\nexport default function Page({ params }) {\n  const { slug } = params\n  // ...\n}\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"multiple-dynamic-segments-in-a-route"},"Multiple Dynamic Segments in a Route"),(0,r.kt)("p",null,"You can generate params for dynamic segments above the current layout or page, but ",(0,r.kt)("strong",{parentName:"p"},"not below"),". For example, given the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/products/[category]/[product]")," route:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/products/[category]/[product]/page.js")," can generate params for ",(0,r.kt)("strong",{parentName:"li"},"both")," ",(0,r.kt)("inlineCode",{parentName:"li"},"[category]")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"[product]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/products/[category]/layout.js")," can ",(0,r.kt)("strong",{parentName:"li"},"only")," generate params for ",(0,r.kt)("inlineCode",{parentName:"li"},"[category]"),".")),(0,r.kt)("p",null,"There are two approaches to generating params for a route with multiple dynamic segments:"),(0,r.kt)("h3",{id:"generate-params-from-the-bottom-up"},"Generate params from the bottom up"),(0,r.kt)("p",null,"Generate multiple dynamic segments from the child route segment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/products/[category]/[product]/page.tsx" switcher',filename:'"app/products/[category]/[product]/page.tsx"',switcher:!0},"// Generate segments for both [category] and [product]\nexport async function generateStaticParams() {\n  const products = await fetch('https://.../products').then((res) => res.json())\n\n  return products.map((product) => ({\n    category: product.category.slug,\n    product: product.id,\n  }))\n}\n\nexport default function Page({\n  params,\n}: {\n  params: { category: string; product: string }\n}) {\n  // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/products/[category]/[product]/page.js" switcher',filename:'"app/products/[category]/[product]/page.js"',switcher:!0},"// Generate segments for both [category] and [product]\nexport async function generateStaticParams() {\n  const products = await fetch('https://.../products').then((res) => res.json())\n\n  return products.map((product) => ({\n    category: product.category.slug,\n    product: product.id,\n  }))\n}\n\nexport default function Page({ params }) {\n  // ...\n}\n")),(0,r.kt)("h3",{id:"generate-params-from-the-top-down"},"Generate params from the top down"),(0,r.kt)("p",null,"Generate the parent segments first and use the result to generate the child segments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/products/[category]/layout.tsx" switcher',filename:'"app/products/[category]/layout.tsx"',switcher:!0},"// Generate segments for [category]\nexport async function generateStaticParams() {\n  const products = await fetch('https://.../products').then((res) => res.json())\n\n  return products.map((product) => ({\n    category: product.category.slug,\n  }))\n}\n\nexport default function Layout({ params }: { params: { category: string } }) {\n  // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/products/[category]/layout.js" switcher',filename:'"app/products/[category]/layout.js"',switcher:!0},"// Generate segments for [category]\nexport async function generateStaticParams() {\n  const products = await fetch('https://.../products').then((res) => res.json())\n\n  return products.map((product) => ({\n    category: product.category.slug,\n  }))\n}\n\nexport default function Layout({ params }) {\n  // ...\n}\n")),(0,r.kt)("p",null,"A child route segment's ",(0,r.kt)("inlineCode",{parentName:"p"},"generateStaticParams")," function is executed once for each segment a parent ",(0,r.kt)("inlineCode",{parentName:"p"},"generateStaticParams")," generates."),(0,r.kt)("p",null,"The child ",(0,r.kt)("inlineCode",{parentName:"p"},"generateStaticParams")," function can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," returned from the parent ",(0,r.kt)("inlineCode",{parentName:"p"},"generateStaticParams")," function to dynamically generate its own segments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/products/[category]/[product]/page.tsx" switcher',filename:'"app/products/[category]/[product]/page.tsx"',switcher:!0},"// Generate segments for [product] using the `params` passed from\n// the parent segment's `generateStaticParams` function\nexport async function generateStaticParams({\n  params: { category },\n}: {\n  params: { category: string }\n}) {\n  const products = await fetch(\n    `https://.../products?category=${category}`\n  ).then((res) => res.json())\n\n  return products.map((product) => ({\n    product: product.id,\n  }))\n}\n\nexport default function Page({\n  params,\n}: {\n  params: { category: string; product: string }\n}) {\n  // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/products/[category]/[product]/page.js" switcher',filename:'"app/products/[category]/[product]/page.js"',switcher:!0},"// Generate segments for [product] using the `params` passed from\n// the parent segment's `generateStaticParams` function\nexport async function generateStaticParams({ params: { category } }) {\n  const products = await fetch(\n    `https://.../products?category=${category}`\n  ).then((res) => res.json())\n\n  return products.map((product) => ({\n    product: product.id,\n  }))\n}\n\nexport default function Page({ params }) {\n  // ...\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," requests are automatically ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/caching#request-memoization"},"memoized")," for the same data across all ",(0,r.kt)("inlineCode",{parentName:"p"},"generate"),"-prefixed functions, Layouts, Pages, and Server Components. React ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/caching#request-memoization"},(0,r.kt)("inlineCode",{parentName:"a"},"cache")," can be used")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," is unavailable.")),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"generateStaticParams")," introduced.")))))}m.isMDXComponent=!0}}]);