"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"getStaticProps",description:"API reference for `getStaticProps`. Learn how to use `getStaticProps` to generate static pages with Next.js."},o=void 0,p={unversionedId:"pages/api-reference/functions/get-static-props",id:"pages/api-reference/functions/get-static-props",title:"getStaticProps",description:"API reference for `getStaticProps`. Learn how to use `getStaticProps` to generate static pages with Next.js.",source:"@site/docs/03-pages/02-api-reference/02-functions/get-static-props.mdx",sourceDirName:"03-pages/02-api-reference/02-functions",slug:"/pages/api-reference/functions/get-static-props",permalink:"/nano-nextjs-study/docs/pages/api-reference/functions/get-static-props",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/02-api-reference/02-functions/get-static-props.mdx",tags:[],version:"current",frontMatter:{title:"getStaticProps",description:"API reference for `getStaticProps`. Learn how to use `getStaticProps` to generate static pages with Next.js."},sidebar:"tutorialSidebar",previous:{title:"getStaticPaths",permalink:"/nano-nextjs-study/docs/pages/api-reference/functions/get-static-paths"},next:{title:"NextRequest and NextResponse",permalink:"/nano-nextjs-study/docs/pages/api-reference/functions/next-server"}},s={},l=[{value:"Context parameter",id:"context-parameter",level:2},{value:"getStaticProps return values",id:"getstaticprops-return-values",level:2},{value:"<code>props</code>",id:"props",level:3},{value:"<code>revalidate</code>",id:"revalidate",level:3},{value:"<code>notFound</code>",id:"notfound",level:3},{value:"<code>redirect</code>",id:"redirect",level:3},{value:"Reading files: Use <code>process.cwd()</code>",id:"reading-files-use-processcwd",level:2},{value:"Version History",id:"version-history",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Exporting a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," will pre-render a page at build time using the props returned from the function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="pages/index.tsx" switcher',filename:'"pages/index.tsx"',switcher:!0},"import type { InferGetStaticPropsType, GetStaticProps } from 'next'\n\ntype Repo = {\n  name: string\n  stargazers_count: number\n}\n\nexport const getStaticProps = (async (context) => {\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\n  const repo = await res.json()\n  return { props: { repo } }\n}) satisfies GetStaticProps<{\n  repo: Repo\n}>\n\nexport default function Page({\n  repo,\n}: InferGetStaticPropsType<typeof getStaticProps>) {\n  return repo.stargazers_count\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/index.js" switcher',filename:'"pages/index.js"',switcher:!0},"export async function getStaticPaths() {\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\n  const repo = await res.json()\n  return { props: { repo } }\n}\n\nexport default function Page({ repo }) {\n  return repo.stargazers_count\n}\n")),(0,r.kt)("p",null,"You can import modules in top-level scope for use in ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),". Imports used will ",(0,r.kt)("strong",{parentName:"p"},"not be bundled for the client-side"),". This means you can write ",(0,r.kt)("strong",{parentName:"p"},"server-side code directly in ",(0,r.kt)("inlineCode",{parentName:"strong"},"getStaticProps")),", including fetching data from your database."),(0,r.kt)("h2",{id:"context-parameter"},"Context parameter"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," parameter is an object containing the following keys:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the route parameters for pages using ",(0,r.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/routing/dynamic-routes"},"dynamic routes"),". For example, if the page name is ",(0,r.kt)("inlineCode",{parentName:"td"},"[id].js"),", then ",(0,r.kt)("inlineCode",{parentName:"td"},"params")," will look like ",(0,r.kt)("inlineCode",{parentName:"td"},"{ id: ... }"),". You should use this together with ",(0,r.kt)("inlineCode",{parentName:"td"},"getStaticPaths"),", which we'll explain later.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preview")),(0,r.kt)("td",{parentName:"tr",align:null},"(Deprecated for ",(0,r.kt)("inlineCode",{parentName:"td"},"draftMode"),") ",(0,r.kt)("inlineCode",{parentName:"td"},"preview")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if the page is in the ",(0,r.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/configuring/preview-mode"},"Preview Mode")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"previewData")),(0,r.kt)("td",{parentName:"tr",align:null},"(Deprecated for ",(0,r.kt)("inlineCode",{parentName:"td"},"draftMode"),") The ",(0,r.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/configuring/preview-mode"},"preview")," data set by ",(0,r.kt)("inlineCode",{parentName:"td"},"setPreviewData"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"draftMode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"draftMode")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if the page is in the ",(0,r.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/configuring/draft-mode"},"Draft Mode")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"locale")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the active locale (if enabled).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"locales")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains all supported locales (if enabled).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultLocale")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the configured default locale (if enabled).")))),(0,r.kt)("h2",{id:"getstaticprops-return-values"},"getStaticProps return values"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," function should return an object containing either ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"notFound")," followed by an ",(0,r.kt)("strong",{parentName:"p"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"revalidate")," property."),(0,r.kt)("h3",{id:"props"},(0,r.kt)("inlineCode",{parentName:"h3"},"props")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," object is a key-value pair, where each value is received by the page component. It should be a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Glossary/Serialization"},"serializable object")," so that any props passed, could be serialized with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON.stringify")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export async function getStaticProps(context) {\n  return {\n    props: { message: `Next.js is awesome` }, // will be passed to the page component as props\n  }\n}\n")),(0,r.kt)("h3",{id:"revalidate"},(0,r.kt)("inlineCode",{parentName:"h3"},"revalidate")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"revalidate")," property is the amount in seconds after which a page re-generation can occur (defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," or no revalidation)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// This function gets called at build time on server-side.\n// It may be called again, on a serverless function, if\n// revalidation is enabled and a new request comes in\nexport async function getStaticProps() {\n  const res = await fetch('https://.../posts')\n  const posts = await res.json()\n\n  return {\n    props: {\n      posts,\n    },\n    // Next.js will attempt to re-generate the page:\n    // - When a request comes in\n    // - At most once every 10 seconds\n    revalidate: 10, // In seconds\n  }\n}\n")),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"},"Incremental Static Regeneration"),"."),(0,r.kt)("p",null,"The cache status of a page leveraging ISR can be determined by reading the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-nextjs-cache")," response header. The possible values are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MISS")," - the path is not in the cache (occurs at most once, on the first visit)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STALE")," - the path is in the cache but exceeded the revalidate time so it will be updated in the background"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HIT")," - the path is in the cache and has not exceeded the revalidate time")),(0,r.kt)("h3",{id:"notfound"},(0,r.kt)("inlineCode",{parentName:"h3"},"notFound")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"notFound")," boolean allows the page to return a ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," status and ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/custom-error#404-page"},"404 Page"),". With ",(0,r.kt)("inlineCode",{parentName:"p"},"notFound: true"),", the page will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," even if there was a successfully generated page before. This is meant to support use cases like user-generated content getting removed by its author. Note, ",(0,r.kt)("inlineCode",{parentName:"p"},"notFound")," follows the same ",(0,r.kt)("inlineCode",{parentName:"p"},"revalidate")," behavior ",(0,r.kt)("a",{parentName:"p",href:"#revalidate"},"described here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export async function getStaticProps(context) {\n  const res = await fetch(`https://.../data`)\n  const data = await res.json()\n\n  if (!data) {\n    return {\n      notFound: true,\n    }\n  }\n\n  return {\n    props: { data }, // will be passed to the page component as props\n  }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"notFound")," is not needed for ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/functions/get-static-paths#fallback-false"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback: false"))," mode as only paths returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," will be pre-rendered.")),(0,r.kt)("h3",{id:"redirect"},(0,r.kt)("inlineCode",{parentName:"h3"},"redirect")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," object allows redirecting to internal or external resources. It should match the shape of ",(0,r.kt)("inlineCode",{parentName:"p"},"{ destination: string, permanent: boolean }"),"."),(0,r.kt)("p",null,"In some rare cases, you might need to assign a custom status code for older ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP")," clients to properly redirect. In these cases, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"statusCode")," property instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"permanent")," property, ",(0,r.kt)("strong",{parentName:"p"},"but not both"),". You can also set ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath: false")," similar to redirects in ",(0,r.kt)("inlineCode",{parentName:"p"},"next.config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export async function getStaticProps(context) {\n  const res = await fetch(`https://...`)\n  const data = await res.json()\n\n  if (!data) {\n    return {\n      redirect: {\n        destination: '/',\n        permanent: false,\n        // statusCode: 301\n      },\n    }\n  }\n\n  return {\n    props: { data }, // will be passed to the page component as props\n  }\n}\n")),(0,r.kt)("p",null,"If the redirects are known at build-time, they should be added in ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/next-config-js/redirects"},(0,r.kt)("inlineCode",{parentName:"a"},"next.config.js"))," instead."),(0,r.kt)("h2",{id:"reading-files-use-processcwd"},"Reading files: Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"process.cwd()")),(0,r.kt)("p",null,"Files can be read directly from the filesystem in ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"."),(0,r.kt)("p",null,"In order to do so you have to get the full path to a file."),(0,r.kt)("p",null,"Since Next.js compiles your code into a separate directory you can't use ",(0,r.kt)("inlineCode",{parentName:"p"},"__dirname")," as the path it returns will be different from the Pages Router."),(0,r.kt)("p",null,"Instead you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"process.cwd()")," which gives you the directory where Next.js is being executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { promises as fs } from 'fs'\nimport path from 'path'\n\n// posts will be populated at build time by getStaticProps()\nfunction Blog({ posts }) {\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li>\n          <h3>{post.filename}</h3>\n          <p>{post.content}</p>\n        </li>\n      ))}\n    </ul>\n  )\n}\n\n// This function gets called at build time on server-side.\n// It won't be called on client-side, so you can even do\n// direct database queries.\nexport async function getStaticProps() {\n  const postsDirectory = path.join(process.cwd(), 'posts')\n  const filenames = await fs.readdir(postsDirectory)\n\n  const posts = filenames.map(async (filename) => {\n    const filePath = path.join(postsDirectory, filename)\n    const fileContents = await fs.readFile(filePath, 'utf8')\n\n    // Generally you would parse/transform the contents\n    // For example you can transform markdown to HTML here\n\n    return {\n      filename,\n      content: fileContents,\n    }\n  })\n  // By returning { props: { posts } }, the Blog component\n  // will receive `posts` as a prop at build time\n  return {\n    props: {\n      posts: await Promise.all(posts),\n    },\n  }\n}\n\nexport default Blog\n")),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.4.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/app/building-your-application/data-fetching"},"App Router")," is now stable with simplifed data fetching")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v12.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration#on-demand-revalidation"},"On-Demand Incremental Static Regeneration")," is stable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v12.1.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration#on-demand-revalidation"},"On-Demand Incremental Static Regeneration")," added (beta).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v10.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"locale"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"locales"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"defaultLocale"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"notFound")," options added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v10.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fallback: 'blocking'")," return option added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v9.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Stable ",(0,r.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"},"Incremental Static Regeneration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v9.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getStaticProps")," introduced.")))))}u.isMDXComponent=!0}}]);