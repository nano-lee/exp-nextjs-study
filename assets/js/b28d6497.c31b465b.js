"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[5960],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),g=i,h=u["".concat(p,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1,title:"getStaticPaths",description:"Fetch data and generate static pages with `getStaticPaths`. Learn more about this API for data fetching in Next.js."},s=void 0,o={unversionedId:"pages/building-your-application/data-fetching/get-static-paths",id:"pages/building-your-application/data-fetching/get-static-paths",title:"getStaticPaths",description:"Fetch data and generate static pages with `getStaticPaths`. Learn more about this API for data fetching in Next.js.",source:"@site/docs/03-pages/01-building-your-application/03-data-fetching/02-get-static-paths.mdx",sourceDirName:"03-pages/01-building-your-application/03-data-fetching",slug:"/pages/building-your-application/data-fetching/get-static-paths",permalink:"/docs/pages/building-your-application/data-fetching/get-static-paths",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/01-building-your-application/03-data-fetching/02-get-static-paths.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"getStaticPaths",description:"Fetch data and generate static pages with `getStaticPaths`. Learn more about this API for data fetching in Next.js."},sidebar:"tutorialSidebar",previous:{title:"getStaticProps",permalink:"/docs/pages/building-your-application/data-fetching/get-static-props"},next:{title:"Forms and Mutations",permalink:"/docs/pages/building-your-application/data-fetching/forms-and-mutations"}},p={},l=[{value:"When should I use getStaticPaths?",id:"when-should-i-use-getstaticpaths",level:2},{value:"When does getStaticPaths run",id:"when-does-getstaticpaths-run",level:2},{value:"How does getStaticProps run with regards to getStaticPaths",id:"how-does-getstaticprops-run-with-regards-to-getstaticpaths",level:3},{value:"Where can I use getStaticPaths",id:"where-can-i-use-getstaticpaths",level:2},{value:"Runs on every request in development",id:"runs-on-every-request-in-development",level:2},{value:"Generating paths on-demand",id:"generating-paths-on-demand",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If a page has ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/dynamic-routes"},"Dynamic Routes")," and uses ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticProps"),", it needs to define a list of paths to be statically generated."),(0,i.kt)("p",null,"When you export a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="pages/repo/[name].tsx" switcher',filename:'"pages/repo/[name].tsx"',switcher:!0},'import type {\n    InferGetStaticPropsType,\n    GetStaticProps,\n    GetStaticPaths,\n} from "next";\n\ntype Repo = {\n    name: string;\n    stargazers_count: number;\n};\n\nexport const getStaticPaths = (async () => {\n    return {\n        paths: [\n            {\n                params: {\n                    name: "next.js",\n                },\n            }, // See the "paths" section below\n        ],\n        fallback: true, // false or "blocking"\n    };\n}) satisfies GetStaticPaths;\n\nexport const getStaticProps = (async (context) => {\n    const res = await fetch("https://api.github.com/repos/vercel/next.js");\n    const repo = await res.json();\n    return { props: { repo } };\n}) satisfies GetStaticProps<{\n    repo: Repo;\n}>;\n\nexport default function Page({\n    repo,\n}: InferGetStaticPropsType<typeof getStaticProps>) {\n    return repo.stargazers_count;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/repo/[name].js" switcher',filename:'"pages/repo/[name].js"',switcher:!0},'export async function getStaticPaths() {\n    return {\n        paths: [\n            {\n                params: {\n                    name: "next.js",\n                },\n            }, // See the "paths" section below\n        ],\n        fallback: true, // false or "blocking"\n    };\n}\n\nexport async function getStaticProps() {\n    const res = await fetch("https://api.github.com/repos/vercel/next.js");\n    const repo = await res.json();\n    return { props: { repo } };\n}\n\nexport default function Page({ repo }) {\n    return repo.stargazers_count;\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/functions/get-static-paths"},(0,i.kt)("inlineCode",{parentName:"a"},"getStaticPaths")," API reference")," covers all parameters and props that can be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths"),"."),(0,i.kt)("h2",{id:"when-should-i-use-getstaticpaths"},"When should I use getStaticPaths?"),(0,i.kt)("p",null,"You should use ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," if you\u2019re statically pre-rendering pages that use dynamic routes and:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The data comes from a headless CMS"),(0,i.kt)("li",{parentName:"ul"},"The data comes from a database"),(0,i.kt)("li",{parentName:"ul"},"The data comes from the filesystem"),(0,i.kt)("li",{parentName:"ul"},"The data can be publicly cached (not user-specific)"),(0,i.kt)("li",{parentName:"ul"},"The page must be pre-rendered (for SEO) and be very fast \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps")," generates ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON")," files, both of which can be cached by a CDN for performance")),(0,i.kt)("h2",{id:"when-does-getstaticpaths-run"},"When does getStaticPaths run"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," will only run during build in production, it will not be called during runtime. You can validate code written inside ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," is removed from the client-side bundle ",(0,i.kt)("a",{parentName:"p",href:"https://next-code-elimination.vercel.app/"},"with this tool"),"."),(0,i.kt)("h3",{id:"how-does-getstaticprops-run-with-regards-to-getstaticpaths"},"How does getStaticProps run with regards to getStaticPaths"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps")," runs during ",(0,i.kt)("inlineCode",{parentName:"li"},"next build")," for any ",(0,i.kt)("inlineCode",{parentName:"li"},"paths")," returned during build"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps")," runs in the background when using ",(0,i.kt)("inlineCode",{parentName:"li"},"fallback: true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps")," is called before initial render when using ",(0,i.kt)("inlineCode",{parentName:"li"},"fallback: blocking"))),(0,i.kt)("h2",{id:"where-can-i-use-getstaticpaths"},"Where can I use getStaticPaths"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStaticPaths")," ",(0,i.kt)("strong",{parentName:"li"},"must")," be used with ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps")),(0,i.kt)("li",{parentName:"ul"},"You ",(0,i.kt)("strong",{parentName:"li"},"cannot")," use ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticPaths")," with ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/data-fetching/get-server-side-props"},(0,i.kt)("inlineCode",{parentName:"a"},"getServerSideProps"))),(0,i.kt)("li",{parentName:"ul"},"You can export ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticPaths")," from a ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/routing/dynamic-routes"},"Dynamic Route")," that also uses ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps")),(0,i.kt)("li",{parentName:"ul"},"You ",(0,i.kt)("strong",{parentName:"li"},"cannot")," export ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticPaths")," from non-page file (e.g. your ",(0,i.kt)("inlineCode",{parentName:"li"},"components")," folder)"),(0,i.kt)("li",{parentName:"ul"},"You must export ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticPaths")," as a standalone function, and not a property of the page component")),(0,i.kt)("h2",{id:"runs-on-every-request-in-development"},"Runs on every request in development"),(0,i.kt)("p",null,"In development (",(0,i.kt)("inlineCode",{parentName:"p"},"next dev"),"), ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," will be called on every request."),(0,i.kt)("h2",{id:"generating-paths-on-demand"},"Generating paths on-demand"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," allows you to control which pages are generated during the build instead of on-demand with ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/functions/get-static-paths#fallback-blocking"},(0,i.kt)("inlineCode",{parentName:"a"},"fallback")),". Generating more pages during a build will cause slower builds."),(0,i.kt)("p",null,"You can defer generating all pages on-demand by returning an empty array for ",(0,i.kt)("inlineCode",{parentName:"p"},"paths"),". This can be especially helpful when deploying your Next.js application to multiple environments. For example, you can have faster builds by generating all pages on-demand for previews (but not production builds). This is helpful for sites with hundreds/thousands of static pages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/posts/[id].js"',filename:'"pages/posts/[id].js"'},'export async function getStaticPaths() {\n    // When this is true (in preview environments) don\'t\n    // prerender any static pages\n    // (faster builds, but slower initial page load)\n    if (process.env.SKIP_BUILD_STATIC_GENERATION) {\n        return {\n            paths: [],\n            fallback: "blocking",\n        };\n    }\n\n    // Call an external API endpoint to get posts\n    const res = await fetch("https://.../posts");\n    const posts = await res.json();\n\n    // Get the paths we want to prerender based on posts\n    // In production environments, prerender all pages\n    // (slower builds, but faster initial page load)\n    const paths = posts.map((post) => ({\n        params: { id: post.id },\n    }));\n\n    // { fallback: false } means other routes should 404\n    return { paths, fallback: false };\n}\n')))}d.isMDXComponent=!0}}]);