"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>C,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Server and Client Composition Patterns",sidebar_label:"Composition Patterns",description:"Recommended patterns for using Server and Client Components."},i=void 0,l={unversionedId:"app/building-your-application/rendering/composition-patterns",id:"app/building-your-application/rendering/composition-patterns",title:"Server and Client Composition Patterns",description:"Recommended patterns for using Server and Client Components.",source:"@site/docs/02-app/01-building-your-application/03-rendering/03-composition-patterns.mdx",sourceDirName:"02-app/01-building-your-application/03-rendering",slug:"/app/building-your-application/rendering/composition-patterns",permalink:"/docs/app/building-your-application/rendering/composition-patterns",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/03-rendering/03-composition-patterns.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Server and Client Composition Patterns",sidebar_label:"Composition Patterns",description:"Recommended patterns for using Server and Client Components."},sidebar:"tutorialSidebar",previous:{title:"Client Components",permalink:"/docs/app/building-your-application/rendering/client-components"},next:{title:"Edge and Node.js Runtimes",permalink:"/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes"}},p={},s=[{value:"When to use Server and Client Components?",id:"when-to-use-server-and-client-components",level:2},{value:"Server Component Patterns",id:"server-component-patterns",level:2},{value:"Sharing data between components",id:"sharing-data-between-components",level:3},{value:"Keeping Server-only Code out of the Client Environment",id:"keeping-server-only-code-out-of-the-client-environment",level:3},{value:"Using Third-party Packages and Providers",id:"using-third-party-packages-and-providers",level:3},{value:"Using Context Providers",id:"using-context-providers",level:4},{value:"Advice for Library Authors",id:"advice-for-library-authors",level:4},{value:"Client Components",id:"client-components",level:2},{value:"Moving Client Components Down the Tree",id:"moving-client-components-down-the-tree",level:3},{value:"Passing props from Server to Client Components (Serialization)",id:"passing-props-from-server-to-client-components-serialization",level:3},{value:"Interleaving Server and Client Components",id:"interleaving-server-and-client-components",level:2},{value:"Unsupported Pattern: Importing Server Components into Client Components",id:"unsupported-pattern-importing-server-components-into-client-components",level:3},{value:"Supported Pattern: Passing Server Components to Client Components as Props",id:"supported-pattern-passing-server-components-to-client-components-as-props",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("Check"),d=c("Cross"),u={toc:s},h="wrapper";function C(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. This page covers some recommended composition patterns when using Server and Client Components."),(0,r.kt)("h2",{id:"when-to-use-server-and-client-components"},"When to use Server and Client Components?"),(0,r.kt)("p",null,"Here's a quick summary of the different use cases for Server and Client Components:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"What do you need to do?"),(0,r.kt)("th",{parentName:"tr",align:null},"Server Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Client Component"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fetch data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{size:18,mdxType:"Check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{size:18,mdxType:"Cross"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Access backend resources (directly)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{size:18,mdxType:"Check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{size:18,mdxType:"Cross"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keep sensitive information on the server (access tokens, API keys, etc)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{size:18,mdxType:"Check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{size:18,mdxType:"Cross"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keep large dependencies on the server / Reduce client-side JavaScript"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{size:18,mdxType:"Check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{size:18,mdxType:"Cross"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add interactivity and event listeners (",(0,r.kt)("inlineCode",{parentName:"td"},"onClick()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"onChange()"),", etc)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{size:18,mdxType:"Cross"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{size:18,mdxType:"Check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use State and Lifecycle Effects (",(0,r.kt)("inlineCode",{parentName:"td"},"useState()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"useReducer()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"useEffect()"),", etc)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{size:18,mdxType:"Cross"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{size:18,mdxType:"Check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use browser-only APIs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{size:18,mdxType:"Cross"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{size:18,mdxType:"Check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use custom hooks that depend on state, effects, or browser-only APIs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{size:18,mdxType:"Cross"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{size:18,mdxType:"Check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("a",{parentName:"td",href:"https://react.dev/reference/react/Component"},"React Class components")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{size:18,mdxType:"Cross"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{size:18,mdxType:"Check"}))))),(0,r.kt)("h2",{id:"server-component-patterns"},"Server Component Patterns"),(0,r.kt)("p",null,"Before opting into client-side rendering, you may wish to do some work on the server like fetching data, or accessing your database or backend services."),(0,r.kt)("p",null,"Here are some common patterns when working with Server Components:"),(0,r.kt)("h3",{id:"sharing-data-between-components"},"Sharing data between components"),(0,r.kt)("p",null,"When fetching data on the server, there may be cases where you need to share data across different components. For example, you may have a layout and a page that depend on the same data."),(0,r.kt)("p",null,"Instead of using ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/learn/passing-data-deeply-with-context"},"React Context")," (which is not available on the server) or passing data as props, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch"},(0,r.kt)("inlineCode",{parentName:"a"},"fetch"))," or React's ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," function to fetch the same data in the components that need it, without worrying about making duplicate requests for the same data. This is because React extends ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," to automatically memoize data requests, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," function can be used when ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," is not available."),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/caching#request-memoization"},"memoization")," in React."),(0,r.kt)("h3",{id:"keeping-server-only-code-out-of-the-client-environment"},"Keeping Server-only Code out of the Client Environment"),(0,r.kt)("p",null,"Since JavaScript modules can be shared between both Server and Client Components modules, it's possible for code that was only ever intended to be run on the server to sneak its way into the client."),(0,r.kt)("p",null,"For example, take the following data-fetching function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="lib/data.ts" switcher',filename:'"lib/data.ts"',switcher:!0},'export async function getData() {\n    const res = await fetch("https://external-service.com/data", {\n        headers: {\n            authorization: process.env.API_KEY,\n        },\n    });\n\n    return res.json();\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="lib/data.js" switcher',filename:'"lib/data.js"',switcher:!0},'export async function getData() {\n    const res = await fetch("https://external-service.com/data", {\n        headers: {\n            authorization: process.env.API_KEY,\n        },\n    });\n\n    return res.json();\n}\n')),(0,r.kt)("p",null,"At first glance, it appears that ",(0,r.kt)("inlineCode",{parentName:"p"},"getData")," works on both the server and the client. However, this function contains an ",(0,r.kt)("inlineCode",{parentName:"p"},"API_KEY"),", written with the intention that it would only ever be executed on the server."),(0,r.kt)("p",null,"Since the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"API_KEY")," is not prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC"),", it's a private variable that can only be accessed on the server. To prevent your environment variables from being leaked to the client, Next.js replaces private environment variables with an empty string."),(0,r.kt)("p",null,"As a result, even though ",(0,r.kt)("inlineCode",{parentName:"p"},"getData()")," can be imported and executed on the client, it won't work as expected. And while making the variable public would make the function work on the client, you may not want to expose sensitive information to the client."),(0,r.kt)("p",null,"To prevent this sort of unintended client usage of server code, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"server-only")," package to give other developers a build-time error if they ever accidentally import one of these modules into a Client Component."),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"server-only"),", first install the package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"npm install server-only\n")),(0,r.kt)("p",null,"Then import the package into any module that contains server-only code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="lib/data.js"',filename:'"lib/data.js"'},'import "server-only";\n\nexport async function getData() {\n    const res = await fetch("https://external-service.com/data", {\n        headers: {\n            authorization: process.env.API_KEY,\n        },\n    });\n\n    return res.json();\n}\n')),(0,r.kt)("p",null,"Now, any Client Component that imports ",(0,r.kt)("inlineCode",{parentName:"p"},"getData()")," will receive a build-time error explaining that this module can only be used on the server."),(0,r.kt)("p",null,"The corresponding package ",(0,r.kt)("inlineCode",{parentName:"p"},"client-only")," can be used to mark modules that contain client-only code \u2013 for example, code that accesses the ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object."),(0,r.kt)("h3",{id:"using-third-party-packages-and-providers"},"Using Third-party Packages and Providers"),(0,r.kt)("p",null,"Since Server Components are a new React feature, third-party packages and providers in the ecosystem are just beginning to add the ",(0,r.kt)("inlineCode",{parentName:"p"},'"use client"')," directive to components that use client-only features like ",(0,r.kt)("inlineCode",{parentName:"p"},"useState"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"createContext"),"."),(0,r.kt)("p",null,"Today, many components from ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," packages that use client-only features do not yet have the directive. These third-party components will work as expected within Client Components since they have the ",(0,r.kt)("inlineCode",{parentName:"p"},'"use client"')," directive, but they won't work within Server Components."),(0,r.kt)("p",null,"For example, let's say you've installed the hypothetical ",(0,r.kt)("inlineCode",{parentName:"p"},"acme-carousel")," package which has a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Carousel />")," component. This component uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useState"),", but it doesn't yet have the ",(0,r.kt)("inlineCode",{parentName:"p"},'"use client"')," directive."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Carousel />")," within a Client Component, it will work as expected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/gallery.tsx" switcher',filename:'"app/gallery.tsx"',switcher:!0},'"use client";\n\nimport { useState } from "react";\nimport { Carousel } from "acme-carousel";\n\nexport default function Gallery() {\n    let [isOpen, setIsOpen] = useState(false);\n\n    return (\n        <div>\n            <button onClick={() => setIsOpen(true)}>View pictures</button>\n\n            {/* Works, since Carousel is used within a Client Component */}\n            {isOpen && <Carousel />}\n        </div>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/gallery.js" switcher',filename:'"app/gallery.js"',switcher:!0},'"use client";\n\nimport { useState } from "react";\nimport { Carousel } from "acme-carousel";\n\nexport default function Gallery() {\n    let [isOpen, setIsOpen] = useState(false);\n\n    return (\n        <div>\n            <button onClick={() => setIsOpen(true)}>View pictures</button>\n\n            {/*  Works, since Carousel is used within a Client Component */}\n            {isOpen && <Carousel />}\n        </div>\n    );\n}\n')),(0,r.kt)("p",null,"However, if you try to use it directly within a Server Component, you'll see an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'import { Carousel } from "acme-carousel";\n\nexport default function Page() {\n    return (\n        <div>\n            <p>View pictures</p>\n\n            {/* Error: `useState` can not be used within Server Components */}\n            <Carousel />\n        </div>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" switcher',filename:'"app/page.js"',switcher:!0},'import { Carousel } from "acme-carousel";\n\nexport default function Page() {\n    return (\n        <div>\n            <p>View pictures</p>\n\n            {/*  Error: `useState` can not be used within Server Components */}\n            <Carousel />\n        </div>\n    );\n}\n')),(0,r.kt)("p",null,"This is because Next.js doesn't know ",(0,r.kt)("inlineCode",{parentName:"p"},"<Carousel />")," is using client-only features."),(0,r.kt)("p",null,"To fix this, you can wrap third-party components that rely on client-only features in your own Client Components:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/carousel.tsx" switcher',filename:'"app/carousel.tsx"',switcher:!0},'"use client";\n\nimport { Carousel } from "acme-carousel";\n\nexport default Carousel;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/carousel.js" switcher',filename:'"app/carousel.js"',switcher:!0},'"use client";\n\nimport { Carousel } from "acme-carousel";\n\nexport default Carousel;\n')),(0,r.kt)("p",null,"Now, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Carousel />")," directly within a Server Component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'import Carousel from "./carousel";\n\nexport default function Page() {\n    return (\n        <div>\n            <p>View pictures</p>\n\n            {/*  Works, since Carousel is a Client Component */}\n            <Carousel />\n        </div>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" switcher',filename:'"app/page.js"',switcher:!0},'import Carousel from "./carousel";\n\nexport default function Page() {\n    return (\n        <div>\n            <p>View pictures</p>\n\n            {/*  Works, since Carousel is a Client Component */}\n            <Carousel />\n        </div>\n    );\n}\n')),(0,r.kt)("p",null,"We don't expect you to need to wrap most third-party components since it's likely you'll be using them within Client Components. However, one exception is providers, since they rely on React state and context, and are typically needed at the root of an application. ",(0,r.kt)("a",{parentName:"p",href:"#using-context-providers"},"Learn more about third-party context providers below"),"."),(0,r.kt)("h4",{id:"using-context-providers"},"Using Context Providers"),(0,r.kt)("p",null,"Context providers are typically rendered near the root of an application to share global concerns, like the current theme. Since ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/learn/passing-data-deeply-with-context"},"React context")," is not supported in Server Components, trying to create a context at the root of your application will cause an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},'import { createContext } from "react";\n\n//  createContext is not supported in Server Components\nexport const ThemeContext = createContext({});\n\nexport default function RootLayout({ children }) {\n    return (\n        <html>\n            <body>\n                <ThemeContext.Provider value="dark">\n                    {children}\n                </ThemeContext.Provider>\n            </body>\n        </html>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},'import { createContext } from "react";\n\n//  createContext is not supported in Server Components\nexport const ThemeContext = createContext({});\n\nexport default function RootLayout({ children }) {\n    return (\n        <html>\n            <body>\n                <ThemeContext.Provider value="dark">\n                    {children}\n                </ThemeContext.Provider>\n            </body>\n        </html>\n    );\n}\n')),(0,r.kt)("p",null,"To fix this, create your context and render its provider inside of a Client Component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/theme-provider.tsx" switcher',filename:'"app/theme-provider.tsx"',switcher:!0},'"use client";\n\nimport { createContext } from "react";\n\nexport const ThemeContext = createContext({});\n\nexport default function ThemeProvider({ children }) {\n    return (\n        <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/theme-provider.js" switcher',filename:'"app/theme-provider.js"',switcher:!0},'"use client";\n\nimport { createContext } from "react";\n\nexport const ThemeContext = createContext({});\n\nexport default function ThemeProvider({ children }) {\n    return (\n        <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>\n    );\n}\n')),(0,r.kt)("p",null,"Your Server Component will now be able to directly render your provider since it's been marked as a Client Component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},'import ThemeProvider from "./theme-provider";\n\nexport default function RootLayout({\n    children,\n}: {\n    children: React.ReactNode;\n}) {\n    return (\n        <html>\n            <body>\n                <ThemeProvider>{children}</ThemeProvider>\n            </body>\n        </html>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},'import ThemeProvider from "./theme-provider";\n\nexport default function RootLayout({ children }) {\n    return (\n        <html>\n            <body>\n                <ThemeProvider>{children}</ThemeProvider>\n            </body>\n        </html>\n    );\n}\n')),(0,r.kt)("p",null,"With the provider rendered at the root, all other Client Components throughout your app will be able to consume this context."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": You should render providers as deep as possible in the tree \u2013 notice how ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," only wraps ",(0,r.kt)("inlineCode",{parentName:"p"},"{children}")," instead of the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"<html>")," document. This makes it easier for Next.js to optimize the static parts of your Server Components.")),(0,r.kt)("h4",{id:"advice-for-library-authors"},"Advice for Library Authors"),(0,r.kt)("p",null,"In a similar fashion, library authors creating packages to be consumed by other developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},'"use client"')," directive to mark client entry points of their package. This allows users of the package to import package components directly into their Server Components without having to create a wrapping boundary."),(0,r.kt)("p",null,"You can optimize your package by using ",(0,r.kt)("a",{parentName:"p",href:"#moving-client-components-down-the-tree"},"'use client' deeper in the tree"),", allowing the imported modules to be part of the Server Component module graph."),(0,r.kt)("p",null,"It's worth noting some bundlers might strip out ",(0,r.kt)("inlineCode",{parentName:"p"},'"use client"')," directives. You can find an example of how to configure esbuild to include the ",(0,r.kt)("inlineCode",{parentName:"p"},'"use client"')," directive in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shuding/react-wrap-balancer/blob/main/tsup.config.ts#L10-L13"},"React Wrap Balancer")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/analytics/blob/main/packages/web/tsup.config.js#L26-L30"},"Vercel Analytics")," repositories."),(0,r.kt)("h2",{id:"client-components"},"Client Components"),(0,r.kt)("h3",{id:"moving-client-components-down-the-tree"},"Moving Client Components Down the Tree"),(0,r.kt)("p",null,"To reduce the Client JavaScript bundle size, we recommend moving Client Components down your component tree."),(0,r.kt)("p",null,"For example, you may have a Layout that has static elements (e.g. logo, links, etc) and an interactive search bar that uses state."),(0,r.kt)("p",null,"Instead of making the whole layout a Client Component, move the interactive logic to a Client Component (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<SearchBar />"),") and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},'// SearchBar is a Client Component\nimport SearchBar from "./searchbar";\n// Logo is a Server Component\nimport Logo from "./logo";\n\n// Layout is a Server Component by default\nexport default function Layout({ children }: { children: React.ReactNode }) {\n    return (\n        <>\n            <nav>\n                <Logo />\n                <SearchBar />\n            </nav>\n            <main>{children}</main>\n        </>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},'// SearchBar is a Client Component\nimport SearchBar from "./searchbar";\n// Logo is a Server Component\nimport Logo from "./logo";\n\n// Layout is a Server Component by default\nexport default function Layout({ children }) {\n    return (\n        <>\n            <nav>\n                <Logo />\n                <SearchBar />\n            </nav>\n            <main>{children}</main>\n        </>\n    );\n}\n')),(0,r.kt)("h3",{id:"passing-props-from-server-to-client-components-serialization"},"Passing props from Server to Client Components (Serialization)"),(0,r.kt)("p",null,"If you fetch data in a Server Component, you may want to pass data down as props to Client Components. Props passed from the Server to Client Components need to be ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Glossary/Serialization"},"serializable")," by React."),(0,r.kt)("p",null,"If your Client Components depend on data that is not serializable, you can ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-third-party-libraries"},"fetch data on the client with a third party library")," or on the server via a ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handler"),"."),(0,r.kt)("h2",{id:"interleaving-server-and-client-components"},"Interleaving Server and Client Components"),(0,r.kt)("p",null,"When interleaving Client and Server Components, it may be helpful to visualize your UI as a tree of components. Starting with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required"},"root layout"),", which is a Server Component, you can then render certain subtrees of components on the client by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},'"use client"')," directive."),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," Diagram - interleaving "),"/}"),(0,r.kt)("p",null,"Within those client subtrees, you can still nest Server Components or call Server Actions, however there are some things to keep in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"During a request-response lifecycle, your code moves from the server to the client. If you need to access data or resources on the server while on the client, you'll be making a ",(0,r.kt)("strong",{parentName:"li"},"new")," request to the server - not switching back and forth."),(0,r.kt)("li",{parentName:"ul"},"When a new request is made to the server, all Server Components are rendered first, including those nested inside Client Components. The rendered result (RSC Payload) will contain references to the locations of Client Components. Then, on the client, React uses the RSC Payload to reconcile Server and Client Components into a single tree.")),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," Diagram "),"/}"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since Client Components are rendered after Server Components, you cannot import a Server Component into a Client Component module (since it would require a new request back to the server). Instead, you can pass a Server Component as ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," to a Client Component. See the ",(0,r.kt)("a",{parentName:"li",href:"#unsupported-pattern-importing-server-components-into-client-components"},"unsupported pattern")," and ",(0,r.kt)("a",{parentName:"li",href:"#supported-pattern-passing-server-components-to-client-components-as-props"},"supported pattern")," sections below.")),(0,r.kt)("h3",{id:"unsupported-pattern-importing-server-components-into-client-components"},"Unsupported Pattern: Importing Server Components into Client Components"),(0,r.kt)("p",null,"The following pattern is not supported. You cannot import a Server Component into a Client Component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/client-component.tsx" switcher highlight={4,17}',filename:'"app/client-component.tsx"',switcher:!0,highlight:"{4,17}"},'"use client";\n\n// You cannot import a Server Component into a Client Component.\nimport ServerComponent from "./Server-Component";\n\nexport default function ClientComponent({\n    children,\n}: {\n    children: React.ReactNode;\n}) {\n    const [count, setCount] = useState(0);\n\n    return (\n        <>\n            <button onClick={() => setCount(count + 1)}>{count}</button>\n\n            <ServerComponent />\n        </>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/client-component.js" switcher highlight={3,13}',filename:'"app/client-component.js"',switcher:!0,highlight:"{3,13}"},'"use client";\n\n// You cannot import a Server Component into a Client Component.\nimport ServerComponent from "./Server-Component";\n\nexport default function ClientComponent({ children }) {\n    const [count, setCount] = useState(0);\n\n    return (\n        <>\n            <button onClick={() => setCount(count + 1)}>{count}</button>\n\n            <ServerComponent />\n        </>\n    );\n}\n')),(0,r.kt)("h3",{id:"supported-pattern-passing-server-components-to-client-components-as-props"},"Supported Pattern: Passing Server Components to Client Components as Props"),(0,r.kt)("p",null,"The following pattern is supported. You can pass Server Components as a prop to a Client Component."),(0,r.kt)("p",null,"A common pattern is to use the React ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," prop to create a ",(0,r.kt)("em",{parentName:"p"},'"slot"')," in your Client Component."),(0,r.kt)("p",null,"In the example below, ",(0,r.kt)("inlineCode",{parentName:"p"},"<ClientComponent>")," accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/client-component.tsx" switcher highlight={6,15}',filename:'"app/client-component.tsx"',switcher:!0,highlight:"{6,15}"},'"use client";\n\nimport { useState } from "react";\n\nexport default function ClientComponent({\n    children,\n}: {\n    children: React.ReactNode;\n}) {\n    const [count, setCount] = useState(0);\n\n    return (\n        <>\n            <button onClick={() => setCount(count + 1)}>{count}</button>\n            {children}\n        </>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/client-component.js" switcher highlight={5,12}',filename:'"app/client-component.js"',switcher:!0,highlight:"{5,12}"},'"use client";\n\nimport { useState } from "react";\n\nexport default function ClientComponent({ children }) {\n    const [count, setCount] = useState(0);\n\n    return (\n        <>\n            <button onClick={() => setCount(count + 1)}>{count}</button>\n\n            {children}\n        </>\n    );\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ClientComponent>")," doesn't know that ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," will eventually be filled in by the result of a Server Component. The only responsibility ",(0,r.kt)("inlineCode",{parentName:"p"},"<ClientComponent>")," has is to decide ",(0,r.kt)("strong",{parentName:"p"},"where")," ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," will eventually be placed."),(0,r.kt)("p",null,"In a parent Server Component, you can import both the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ClientComponent>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<ServerComponent>")," and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"<ServerComponent>")," as a child of ",(0,r.kt)("inlineCode",{parentName:"p"},"<ClientComponent>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx"  highlight={11} switcher',filename:'"app/page.tsx"',"":!0,highlight:"{11}",switcher:!0},'// This pattern works:\n// You can pass a Server Component as a child or prop of a\n// Client Component.\nimport ClientComponent from "./client-component";\nimport ServerComponent from "./server-component";\n\n// Pages in Next.js are Server Components by default\nexport default function Page() {\n    return (\n        <ClientComponent>\n            <ServerComponent />\n        </ClientComponent>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" highlight={11} switcher',filename:'"app/page.js"',highlight:"{11}",switcher:!0},'// This pattern works:\n// You can pass a Server Component as a child or prop of a\n// Client Component.\nimport ClientComponent from "./client-component";\nimport ServerComponent from "./server-component";\n\n// Pages in Next.js are Server Components by default\nexport default function Page() {\n    return (\n        <ClientComponent>\n            <ServerComponent />\n        </ClientComponent>\n    );\n}\n')),(0,r.kt)("p",null,"With this approach, ",(0,r.kt)("inlineCode",{parentName:"p"},"<ClientComponent>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<ServerComponent>")," are decoupled and can be rendered independently. In this case, the child ",(0,r.kt)("inlineCode",{parentName:"p"},"<ServerComponent>")," can be rendered on the server, well before ",(0,r.kt)("inlineCode",{parentName:"p"},"<ClientComponent>")," is rendered on the client."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},'The pattern of "lifting content up" has been used to avoid re-rendering a nested child component when a parent to re-renders.'),(0,r.kt)("li",{parentName:"ul"},"You're not limited to the ",(0,r.kt)("inlineCode",{parentName:"li"},"children")," prop. You can use any prop to pass JSX."))))}C.isMDXComponent=!0}}]);