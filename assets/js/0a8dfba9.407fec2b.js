"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={sidebar_position:8,title:"Parallel Routes",description:"Simultaneously render one or more pages in the same view that can be navigated independently. A pattern for highly dynamic applications."},r=void 0,i={unversionedId:"app/building-your-application/routing/parallel-routes",id:"app/building-your-application/routing/parallel-routes",title:"Parallel Routes",description:"Simultaneously render one or more pages in the same view that can be navigated independently. A pattern for highly dynamic applications.",source:"@site/docs/02-app/01-building-your-application/01-routing/08-parallel-routes.mdx",sourceDirName:"02-app/01-building-your-application/01-routing",slug:"/app/building-your-application/routing/parallel-routes",permalink:"/nano-nextjs-study/docs/app/building-your-application/routing/parallel-routes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/01-routing/08-parallel-routes.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Parallel Routes",description:"Simultaneously render one or more pages in the same view that can be navigated independently. A pattern for highly dynamic applications."},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/nano-nextjs-study/docs/app/building-your-application/routing/error-handling"},next:{title:"Intercepting Routes",permalink:"/nano-nextjs-study/docs/app/building-your-application/routing/intercepting-routes"}},s={},p=[{value:"Convention",id:"convention",level:2},{value:"Unmatched Routes",id:"unmatched-routes",level:2},{value:"<code>default.js</code>",id:"defaultjs",level:3},{value:"Navigation",id:"navigation",level:4},{value:"Reload",id:"reload",level:4},{value:"<code>useSelectedLayoutSegment(s)</code>",id:"useselectedlayoutsegments",level:2},{value:"Examples",id:"examples",level:2},{value:"Modals",id:"modals",level:3},{value:"Dismissing a modal",id:"dismissing-a-modal",level:4},{value:"Conditional Routes",id:"conditional-routes",level:3}],u=(d="Image",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var d;const c={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Parallel Routing allows you to simultaneously or conditionally render one or more pages in the same layout. For highly dynamic sections of an app, such as dashboards and feeds on social sites, Parallel Routing can be used to implement complex routing patterns."),(0,l.kt)("p",null,"For example, you can simultaneously render the team and analytics pages."),(0,l.kt)(u,{alt:"Parallel Routes Diagram",srcLight:"/docs/light/parallel-routes.png",srcDark:"/docs/dark/parallel-routes.png",width:"1600",height:"952",mdxType:"Image"}),(0,l.kt)("p",null,"Parallel Routing allows you to define independent error and loading states for each route as they're being streamed in independently."),(0,l.kt)(u,{alt:"Parallel routes enable custom error and loading states",srcLight:"/docs/light/parallel-routes-cinematic-universe.png",srcDark:"/docs/dark/parallel-routes-cinematic-universe.png",width:"1600",height:"1218",mdxType:"Image"}),(0,l.kt)("p",null,"Parallel Routing also allows you to conditionally render a slot based on certain conditions, such as authentication state. This enables fully separated code on the same URL."),(0,l.kt)(u,{alt:"Conditional routes diagram",srcLight:"/docs/light/conditional-routes-ui.png",srcDark:"/docs/dark/conditional-routes-ui.png",width:"1600",height:"898",mdxType:"Image"}),(0,l.kt)("h2",{id:"convention"},"Convention"),(0,l.kt)("p",null,"Parallel routes are created using named ",(0,l.kt)("strong",{parentName:"p"},"slots"),". Slots are defined with the ",(0,l.kt)("inlineCode",{parentName:"p"},"@folder")," convention, and are passed to the same-level layout as props."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Slots are ",(0,l.kt)("em",{parentName:"p"},"not")," route segments and ",(0,l.kt)("em",{parentName:"p"},"do not affect the URL structure"),". The file path ",(0,l.kt)("inlineCode",{parentName:"p"},"/@team/members")," would be accessible at ",(0,l.kt)("inlineCode",{parentName:"p"},"/members"),".")),(0,l.kt)("p",null,"For example, the following file structure defines two explicit slots: ",(0,l.kt)("inlineCode",{parentName:"p"},"@analytics")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"@team"),"."),(0,l.kt)(u,{alt:"Parallel Routes File-system Structure",srcLight:"/docs/light/parallel-routes-file-system.png",srcDark:"/docs/dark/parallel-routes-file-system.png",width:"1600",height:"687",mdxType:"Image"}),(0,l.kt)("p",null,"The folder structure above means that the component in ",(0,l.kt)("inlineCode",{parentName:"p"},"app/layout.js")," now accepts the ",(0,l.kt)("inlineCode",{parentName:"p"},"@analytics")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"@team")," slots props, and can render them in parallel alongside the ",(0,l.kt)("inlineCode",{parentName:"p"},"children")," prop:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},"export default function Layout(props: {\n    children: React.ReactNode;\n    analytics: React.ReactNode;\n    team: React.ReactNode;\n}) {\n    return (\n        <>\n            {props.children}\n            {props.team}\n            {props.analytics}\n        </>\n    );\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},"export default function Layout(props) {\n    return (\n        <>\n            {props.children}\n            {props.team}\n            {props.analytics}\n        </>\n    );\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Good to know"),": The ",(0,l.kt)("inlineCode",{parentName:"p"},"children")," prop is an implicit slot that does not need to be mapped to a folder. This means ",(0,l.kt)("inlineCode",{parentName:"p"},"app/page.js")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"app/@children/page.js"),".")),(0,l.kt)("h2",{id:"unmatched-routes"},"Unmatched Routes"),(0,l.kt)("p",null,"By default, the content rendered within a slot will match the current URL."),(0,l.kt)("p",null,"In the case of an unmatched slot, the content that Next.js renders differs based on the routing technique and folder structure."),(0,l.kt)("h3",{id:"defaultjs"},(0,l.kt)("inlineCode",{parentName:"h3"},"default.js")),(0,l.kt)("p",null,"You can define a ",(0,l.kt)("inlineCode",{parentName:"p"},"default.js")," file to render as a fallback when Next.js cannot recover a slot's active state based on the current URL."),(0,l.kt)("p",null,"Consider the following folder structure. The ",(0,l.kt)("inlineCode",{parentName:"p"},"@team")," slot has a ",(0,l.kt)("inlineCode",{parentName:"p"},"settings")," directory, but ",(0,l.kt)("inlineCode",{parentName:"p"},"@analytics")," does not."),(0,l.kt)(u,{alt:"Parallel Routes unmatched routes",srcLight:"/docs/light/parallel-routes-unmatched-routes.png",srcDark:"/docs/dark/parallel-routes-unmatched-routes.png",width:"1600",height:"930",mdxType:"Image"}),(0,l.kt)("h4",{id:"navigation"},"Navigation"),(0,l.kt)("p",null,"On navigation, Next.js will render the slot's previously active state, even if it doesn't match the current URL."),(0,l.kt)("h4",{id:"reload"},"Reload"),(0,l.kt)("p",null,"On reload, Next.js will first try to render the unmatched slot's ",(0,l.kt)("inlineCode",{parentName:"p"},"default.js")," file. If that's not available, a 404 gets rendered."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The 404 for unmatched routes helps ensure that you don't accidentally render a route that shouldn't be parallel rendered.")),(0,l.kt)("h2",{id:"useselectedlayoutsegments"},(0,l.kt)("inlineCode",{parentName:"h2"},"useSelectedLayoutSegment(s)")),(0,l.kt)("p",null,"Both ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/use-selected-layout-segment"},(0,l.kt)("inlineCode",{parentName:"a"},"useSelectedLayoutSegment"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/use-selected-layout-segments"},(0,l.kt)("inlineCode",{parentName:"a"},"useSelectedLayoutSegments"))," accept a ",(0,l.kt)("inlineCode",{parentName:"p"},"parallelRoutesKey"),", which allows you read the active route segment within that slot."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},'"use client";\n\nimport { useSelectedLayoutSegment } from "next/navigation";\n\nexport default async function Layout(props: {\n    //...\n    auth: React.ReactNode;\n}) {\n    const loginSegments = useSelectedLayoutSegment("auth");\n    // ...\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},'"use client";\n\nimport { useSelectedLayoutSegment } from "next/navigation";\n\nexport default async function Layout(props) {\n    const loginSegments = useSelectedLayoutSegment("auth");\n    // ...\n}\n')),(0,l.kt)("p",null,"When a user navigates to ",(0,l.kt)("inlineCode",{parentName:"p"},"@auth/login"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"/login")," in the URL bar, ",(0,l.kt)("inlineCode",{parentName:"p"},"loginSegments")," will be equal to the string ",(0,l.kt)("inlineCode",{parentName:"p"},'"login"'),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"modals"},"Modals"),(0,l.kt)("p",null,"Parallel Routing can be used to render modals."),(0,l.kt)(u,{alt:"Parallel Routes Diagram",srcLight:"/docs/light/parallel-routes-auth-modal.png",srcDark:"/docs/dark/parallel-routes-auth-modal.png",width:"1600",height:"687",mdxType:"Image"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@auth")," slot renders a ",(0,l.kt)("inlineCode",{parentName:"p"},"<Modal>")," component that can be shown by navigating to a matching route, for example ",(0,l.kt)("inlineCode",{parentName:"p"},"/login"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},"export default async function Layout(props: {\n    // ...\n    auth: React.ReactNode;\n}) {\n    return (\n        <>\n            {/* ... */}\n            {props.auth}\n        </>\n    );\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},"export default async function Layout(props) {\n    return (\n        <>\n            {/* ... */}\n            {props.auth}\n        </>\n    );\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/@auth/login/page.tsx" switcher',filename:'"app/@auth/login/page.tsx"',switcher:!0},'import { Modal } from "components/modal";\n\nexport default function Login() {\n    return (\n        <Modal>\n            <h1>Login</h1>\n            {/* ... */}\n        </Modal>\n    );\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/@auth/login/page.js" switcher',filename:'"app/@auth/login/page.js"',switcher:!0},'import { Modal } from "components/modal";\n\nexport default function Login() {\n    return (\n        <Modal>\n            <h1>Login</h1>\n            {/* ... */}\n        </Modal>\n    );\n}\n')),(0,l.kt)("p",null,"To ensure that the contents of the modal don't get rendered when it's not active, you can create a ",(0,l.kt)("inlineCode",{parentName:"p"},"default.js")," file that returns ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/@auth/default.tsx" switcher',filename:'"app/@auth/default.tsx"',switcher:!0},"export default function Default() {\n    return null;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/@auth/default.js" switcher',filename:'"app/@auth/default.js"',switcher:!0},"export default function Default() {\n    return null;\n}\n")),(0,l.kt)("h4",{id:"dismissing-a-modal"},"Dismissing a modal"),(0,l.kt)("p",null,"If a modal was initiated through client navigation, e.g. by using ",(0,l.kt)("inlineCode",{parentName:"p"},'<Link href="/login">'),", you can dismiss the modal by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"router.back()")," or by using a ",(0,l.kt)("inlineCode",{parentName:"p"},"Link")," component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/@auth/login/page.tsx" highlight="5" switcher',filename:'"app/@auth/login/page.tsx"',highlight:'"5"',switcher:!0},'"use client";\nimport { useRouter } from "next/navigation";\nimport { Modal } from "components/modal";\n\nexport default async function Login() {\n    const router = useRouter();\n    return (\n        <Modal>\n            <span onClick={() => router.back()}>Close modal</span>\n            <h1>Login</h1>\n            ...\n        </Modal>\n    );\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/@auth/login/page.js" highlight="5" switcher',filename:'"app/@auth/login/page.js"',highlight:'"5"',switcher:!0},'"use client";\nimport { useRouter } from "next/navigation";\nimport { Modal } from "components/modal";\n\nexport default async function Login() {\n    const router = useRouter();\n    return (\n        <Modal>\n            <span onClick={() => router.back()}>Close modal</span>\n            <h1>Login</h1>\n            ...\n        </Modal>\n    );\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"More information on modals is covered in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/intercepting-routes"},"Intercepting Routes")," section.")),(0,l.kt)("p",null,"If you want to navigate elsewhere and dismiss a modal, you can also use a catch-all route."),(0,l.kt)(u,{alt:"Parallel Routes Diagram",srcLight:"/docs/light/parallel-routes-catchall.png",srcDark:"/docs/dark/parallel-routes-catchall.png",width:"1600",height:"768",mdxType:"Image"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/@auth/[...catchAll]/page.tsx" switcher',filename:'"app/@auth/[...catchAll]/page.tsx"',switcher:!0},"export default function CatchAll() {\n    return null;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/@auth/[...catchAll]/page.js" switcher',filename:'"app/@auth/[...catchAll]/page.js"',switcher:!0},"export default function CatchAll() {\n    return null;\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Catch-all routes take precedence over ",(0,l.kt)("inlineCode",{parentName:"p"},"default.js"),".")),(0,l.kt)("h3",{id:"conditional-routes"},"Conditional Routes"),(0,l.kt)("p",null,"Parallel Routes can be used to implement conditional routing. For example, you can render a ",(0,l.kt)("inlineCode",{parentName:"p"},"@dashboard")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@login")," route depending on the authentication state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},'import { getUser } from "@/lib/auth";\n\nexport default function Layout({\n    dashboard,\n    login,\n}: {\n    dashboard: React.ReactNode;\n    login: React.ReactNode;\n}) {\n    const isLoggedIn = getUser();\n    return isLoggedIn ? dashboard : login;\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},'import { getUser } from "@/lib/auth";\n\nexport default function Layout({ dashboard, login }) {\n    const isLoggedIn = getUser();\n    return isLoggedIn ? dashboard : login;\n}\n')),(0,l.kt)(u,{alt:"Parallel routes authentication example",srcLight:"/docs/light/conditional-routes-ui.png",srcDark:"/docs/dark/conditional-routes-ui.png",width:"1600",height:"898",mdxType:"Image"}))}g.isMDXComponent=!0}}]);