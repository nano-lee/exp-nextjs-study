"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={title:"TypeScript",description:"Next.js provides a TypeScript-first development experience for building your React application."},o=void 0,p={unversionedId:"app/building-your-application/configuring/typescript",id:"app/building-your-application/configuring/typescript",title:"TypeScript",description:"Next.js provides a TypeScript-first development experience for building your React application.",source:"@site/docs/02-app/01-building-your-application/07-configuring/01-typescript.mdx",sourceDirName:"02-app/01-building-your-application/07-configuring",slug:"/app/building-your-application/configuring/typescript",permalink:"/nano-nextjs-study/docs/app/building-your-application/configuring/typescript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/07-configuring/01-typescript.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"TypeScript",description:"Next.js provides a TypeScript-first development experience for building your React application."},sidebar:"tutorialSidebar",previous:{title:"Configuring",permalink:"/nano-nextjs-study/docs/app/building-your-application/configuring/"},next:{title:"ESLint",permalink:"/nano-nextjs-study/docs/app/building-your-application/configuring/eslint"}},l={},s=[{value:"New Projects",id:"new-projects",level:2},{value:"Existing Projects",id:"existing-projects",level:2},{value:"TypeScript Plugin",id:"typescript-plugin",level:2},{value:"Plugin Features",id:"plugin-features",level:3},{value:"Minimum TypeScript Version",id:"minimum-typescript-version",level:2},{value:"Statically Typed Links",id:"statically-typed-links",level:2},{value:"End-to-End Type Safety",id:"end-to-end-type-safety",level:2},{value:"Async Server Component TypeScript Error",id:"async-server-component-typescript-error",level:2},{value:"Passing Data Between Server &amp; Client Components",id:"passing-data-between-server--client-components",level:2},{value:"Path aliases and baseUrl",id:"path-aliases-and-baseurl",level:2},{value:"Type checking next.config.js",id:"type-checking-nextconfigjs",level:2},{value:"Incremental type checking",id:"incremental-type-checking",level:2},{value:"Ignoring TypeScript Errors",id:"ignoring-typescript-errors",level:2},{value:"Version Changes",id:"version-changes",level:2}],c=(d="Image",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const u={toc:s},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"{/",(0,a.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,a.kt)("p",null,"Next.js provides a TypeScript-first development experience for building your React application."),(0,a.kt)("p",null,"It comes with built-in TypeScript support for automatically installing the necessary packages and configuring the proper settings."),(0,a.kt)("p",null,"As well as a ",(0,a.kt)("a",{parentName:"p",href:"#typescript-plugin"},"TypeScript Plugin")," for your editor."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\ud83c\udfa5 Watch:")," Learn about the built-in TypeScript plugin \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pqMqn9fKEf8"},"YouTube (3 minutes)"))),(0,a.kt)("h2",{id:"new-projects"},"New Projects"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create-next-app")," now ships with TypeScript by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"npx create-next-app@latest\n")),(0,a.kt)("h2",{id:"existing-projects"},"Existing Projects"),(0,a.kt)("p",null,"Add TypeScript to your project by renaming a file to ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," / ",(0,a.kt)("inlineCode",{parentName:"p"},".tsx"),". Run ",(0,a.kt)("inlineCode",{parentName:"p"},"next dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"next build")," to automatically install the necessary dependencies and add a ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file with the recommended config options."),(0,a.kt)("p",null,"If you already had a ",(0,a.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," file, copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"paths")," compiler option from the old ",(0,a.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," into the new ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file, and delete the old ",(0,a.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," file."),(0,a.kt)("h2",{id:"typescript-plugin"},"TypeScript Plugin"),(0,a.kt)("p",null,"Next.js includes a custom TypeScript plugin and type checker, which VSCode and other code editors can use for advanced type-checking and auto-completion."),(0,a.kt)("p",null,"You can enable the plugin in VS Code by:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Opening the command palette (",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl/\u2318")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"P"),")"),(0,a.kt)("li",{parentName:"ol"},'Searching for "TypeScript: Select TypeScript Version"'),(0,a.kt)("li",{parentName:"ol"},'Selecting "Use Workspace Version"')),(0,a.kt)(c,{alt:"TypeScript Command Palette",srcLight:"/docs/light/typescript-command-palette.png",srcDark:"/docs/dark/typescript-command-palette.png",width:"1600",height:"637",mdxType:"Image"}),(0,a.kt)("p",null,"Now, when editing files, the custom plugin will be enabled. When running ",(0,a.kt)("inlineCode",{parentName:"p"},"next build"),", the custom type checker will be used."),(0,a.kt)("h3",{id:"plugin-features"},"Plugin Features"),(0,a.kt)("p",null,"The TypeScript plugin can help with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Warning if the invalid values for ",(0,a.kt)("a",{parentName:"li",href:"/docs/app/api-reference/file-conventions/route-segment-config"},"segment config options")," are passed."),(0,a.kt)("li",{parentName:"ul"},"Showing available options and in-context documentation."),(0,a.kt)("li",{parentName:"ul"},"Ensuring the ",(0,a.kt)("inlineCode",{parentName:"li"},"use client")," directive is used correctly."),(0,a.kt)("li",{parentName:"ul"},"Ensuring client hooks (like ",(0,a.kt)("inlineCode",{parentName:"li"},"useState"),") are only used in Client Components.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),": More features will be added in the future.")),(0,a.kt)("h2",{id:"minimum-typescript-version"},"Minimum TypeScript Version"),(0,a.kt)("p",null,"It is highly recommended to be on at least ",(0,a.kt)("inlineCode",{parentName:"p"},"v4.5.2")," of TypeScript to get syntax features such as ",(0,a.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#type-on-import-names"},"type modifiers on import names")," and ",(0,a.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#real-path-sync-native"},"performance improvements"),"."),(0,a.kt)("h2",{id:"statically-typed-links"},"Statically Typed Links"),(0,a.kt)("p",null,"Next.js can statically type links to prevent typos and other errors when using ",(0,a.kt)("inlineCode",{parentName:"p"},"next/link"),", improving type safety when navigating between pages."),(0,a.kt)("p",null,"To opt-into this feature, ",(0,a.kt)("inlineCode",{parentName:"p"},"experimental.typedRoutes")," need to be enabled and the project needs to be using TypeScript."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n    experimental: {\n        typedRoutes: true,\n    },\n};\n\nmodule.exports = nextConfig;\n")),(0,a.kt)("p",null,"Next.js will generate a link definition in ",(0,a.kt)("inlineCode",{parentName:"p"},".next/types")," that contains information about all existing routes in your application, which TypeScript can then use to provide feedback in your editor about invalid links."),(0,a.kt)("p",null,"Currently, experimental support includes any string literal, including dynamic segments. For non-literal strings, you currently need to manually cast the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"as Route"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { Route } from 'next';\nimport Link from 'next/link'\n\n// No TypeScript errors if href is a valid route\n<Link href=\"/about\" />\n<Link href=\"/blog/nextjs\" />\n<Link href={`/blog/${slug}`} />\n<Link href={('/blog' + slug) as Route} />\n\n// TypeScript errors if href is not a valid route\n<Link href=\"/aboot\" />\n")),(0,a.kt)("p",null,"To accept ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," in a custom component wrapping ",(0,a.kt)("inlineCode",{parentName:"p"},"next/link"),", use a generic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { Route } from "next";\nimport Link from "next/link";\n\nfunction Card<T extends string>({ href }: { href: Route<T> | URL }) {\n    return (\n        <Link href={href}>\n            <div>My Card</div>\n        </Link>\n    );\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"How does it work?")),(0,a.kt)("p",{parentName:"blockquote"},"When running ",(0,a.kt)("inlineCode",{parentName:"p"},"next dev")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"next build"),", Next.js generates a hidden ",(0,a.kt)("inlineCode",{parentName:"p"},".d.ts")," file inside ",(0,a.kt)("inlineCode",{parentName:"p"},".next")," that contains information about all existing routes in your application (all valid routes as the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," type of ",(0,a.kt)("inlineCode",{parentName:"p"},"Link"),"). This ",(0,a.kt)("inlineCode",{parentName:"p"},".d.ts")," file is included in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and the TypeScript compiler will check that ",(0,a.kt)("inlineCode",{parentName:"p"},".d.ts")," and provide feedback in your editor about invalid links.")),(0,a.kt)("h2",{id:"end-to-end-type-safety"},"End-to-End Type Safety"),(0,a.kt)("p",null,"Next.js 13 has ",(0,a.kt)("strong",{parentName:"p"},"enhanced type safety"),". This includes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"No serialization of data between fetching function and page"),": You can ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch")," directly in components, layouts, and pages on the server. This data ",(0,a.kt)("em",{parentName:"li"},"does not")," need to be serialized (converted to a string) to be passed to the client side for consumption in React. Instead, since ",(0,a.kt)("inlineCode",{parentName:"li"},"app")," uses Server Components by default, we can use values like ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Map"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set"),", and more without any extra steps. Previously, you needed to manually type the boundary between server and client with Next.js-specific types."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Streamlined data flow between components"),": With the removal of ",(0,a.kt)("inlineCode",{parentName:"li"},"_app")," in favor of root layouts, it is now easier to visualize the data flow between components and pages. Previously, data flowing between individual ",(0,a.kt)("inlineCode",{parentName:"li"},"pages")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"_app")," were difficult to type and could introduce confusing bugs. With ",(0,a.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"},"colocated data fetching")," in Next.js 13, this is no longer an issue.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"},"Data Fetching in Next.js")," now provides as close to end-to-end type safety as possible without being prescriptive about your database or content provider selection."),(0,a.kt)("p",null,"We're able to type the response data as you would expect with normal TypeScript. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx"',filename:'"app/page.tsx"'},'async function getData() {\n    const res = await fetch("https://api.example.com/...");\n    // The return value is *not* serialized\n    // You can return Date, Map, Set, etc.\n    return res.json();\n}\n\nexport default async function Page() {\n    const name = await getData();\n\n    return "...";\n}\n')),(0,a.kt)("p",null,"For ",(0,a.kt)("em",{parentName:"p"},"complete")," end-to-end type safety, this also requires your database or content provider to support TypeScript. This could be through using an ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping"},"ORM")," or type-safe query builder."),(0,a.kt)("h2",{id:"async-server-component-typescript-error"},"Async Server Component TypeScript Error"),(0,a.kt)("p",null,"To use an ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," Server Component with TypeScript, ensure you are using TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},"5.1.3")," or higher and ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/react")," ",(0,a.kt)("inlineCode",{parentName:"p"},"18.2.8")," or higher."),(0,a.kt)("p",null,"If you are using an older version of TypeScript, you may see a ",(0,a.kt)("inlineCode",{parentName:"p"},"'Promise<Element>' is not a valid JSX element")," type error. Updating to the latest version of TypeScript and ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/react")," should resolve this issue."),(0,a.kt)("h2",{id:"passing-data-between-server--client-components"},"Passing Data Between Server & Client Components"),(0,a.kt)("p",null,"When passing data between a Server and Client Component through props, the data is still serialized (converted to a string) for use in the browser. However, it does not need a special type. It\u2019s typed the same as passing any other props between components."),(0,a.kt)("p",null,"Further, there is less code to be serialized, as un-rendered data does not cross between the server and client (it remains on the server). This is only now possible through support for Server Components."),(0,a.kt)("h2",{id:"path-aliases-and-baseurl"},"Path aliases and baseUrl"),(0,a.kt)("p",null,"Next.js automatically supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," ",(0,a.kt)("inlineCode",{parentName:"p"},'"paths"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"baseUrl"')," options."),(0,a.kt)("p",null,"You can learn more about this feature on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases"},"Module Path aliases documentation"),"."),(0,a.kt)("h2",{id:"type-checking-nextconfigjs"},"Type checking next.config.js"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js")," file must be a JavaScript file as it does not get parsed by Babel or TypeScript, however you can add some type checking in your IDE using JSDoc as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/**\n * @type {import('next').NextConfig}\n **/\nconst nextConfig = {\n    /* config options here */\n};\n\nmodule.exports = nextConfig;\n")),(0,a.kt)("h2",{id:"incremental-type-checking"},"Incremental type checking"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"v10.2.1")," Next.js supports ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#incremental"},"incremental type checking")," when enabled in your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", this can help speed up type checking in larger applications."),(0,a.kt)("h2",{id:"ignoring-typescript-errors"},"Ignoring TypeScript Errors"),(0,a.kt)("p",null,"Next.js fails your ",(0,a.kt)("strong",{parentName:"p"},"production build")," (",(0,a.kt)("inlineCode",{parentName:"p"},"next build"),") when TypeScript errors are present in your project."),(0,a.kt)("p",null,"If you'd like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step."),(0,a.kt)("p",null,"If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js")," and enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreBuildErrors")," option in the ",(0,a.kt)("inlineCode",{parentName:"p"},"typescript")," config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n    typescript: {\n        // !! WARN !!\n        // Dangerously allow production builds to successfully complete even if\n        // your project has type errors.\n        // !! WARN !!\n        ignoreBuildErrors: true,\n    },\n};\n")),(0,a.kt)("h2",{id:"version-changes"},"Version Changes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"v13.2.0")),(0,a.kt)("td",{parentName:"tr",align:null},"Statically typed links are available in beta.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"v12.0.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/architecture/nextjs-compiler"},"SWC")," is now used by default to compile TypeScript and TSX for faster builds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"v10.2.1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.typescriptlang.org/tsconfig#incremental"},"Incremental type checking")," support added when enabled in your ",(0,a.kt)("inlineCode",{parentName:"td"},"tsconfig.json"),".")))))}g.isMDXComponent=!0}}]);