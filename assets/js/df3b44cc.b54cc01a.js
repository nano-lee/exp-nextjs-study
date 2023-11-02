"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4272],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:9,title:"Authenticating",description:"Learn about authentication patterns in Next.js apps and explore a few examples."},s=void 0,o={unversionedId:"pages/building-your-application/routing/authenticating",id:"pages/building-your-application/routing/authenticating",title:"Authenticating",description:"Learn about authentication patterns in Next.js apps and explore a few examples.",source:"@site/docs/03-pages/01-building-your-application/01-routing/09-authenticating.mdx",sourceDirName:"03-pages/01-building-your-application/01-routing",slug:"/pages/building-your-application/routing/authenticating",permalink:"/docs/pages/building-your-application/routing/authenticating",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/01-building-your-application/01-routing/09-authenticating.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Authenticating",description:"Learn about authentication patterns in Next.js apps and explore a few examples."},sidebar:"tutorialSidebar",previous:{title:"Internationalization",permalink:"/docs/pages/building-your-application/routing/internationalization"},next:{title:"Middleware",permalink:"/docs/pages/building-your-application/routing/middleware"}},l={},p=[{value:"Authentication Patterns",id:"authentication-patterns",level:2},{value:"Authenticating Statically Generated Pages",id:"authenticating-statically-generated-pages",level:3},{value:"Authenticating Server-Rendered Pages",id:"authenticating-server-rendered-pages",level:3},{value:"Authentication Providers",id:"authentication-providers",level:2},{value:"Bring Your Own Database",id:"bring-your-own-database",level:3},{value:"Other Providers",id:"other-providers",level:3}],u={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Authentication verifies who a user is, while authorization controls what a user can access. Next.js supports multiple authentication patterns, each designed for different use cases. This page will go through each case so that you can choose based on your constraints."),(0,r.kt)("h2",{id:"authentication-patterns"},"Authentication Patterns"),(0,r.kt)("p",null,"The first step to identifying which authentication pattern you need is understanding the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/data-fetching"},"data-fetching strategy")," you want. We can then determine which authentication providers support this strategy. There are two main patterns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/rendering/static-site-generation"},"static generation")," to server-render a loading state, followed by fetching user data client-side."),(0,r.kt)("li",{parentName:"ul"},"Fetch user data ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/rendering/server-side-rendering"},"server-side")," to eliminate a flash of unauthenticated content.")),(0,r.kt)("h3",{id:"authenticating-statically-generated-pages"},"Authenticating Statically Generated Pages"),(0,r.kt)("p",null,"Next.js automatically determines that a page is static if there are no blocking data requirements. This means the absence of ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/data-fetching/get-server-side-props"},(0,r.kt)("inlineCode",{parentName:"a"},"getServerSideProps"))," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getInitialProps")," in the page. Instead, your page can render a loading state from the server, followed by fetching the user client-side."),(0,r.kt)("p",null,"One advantage of this pattern is it allows pages to be served from a global CDN and preloaded using ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/components/link"},(0,r.kt)("inlineCode",{parentName:"a"},"next/link")),". In practice, this results in a faster TTI (",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/interactive/"},"Time to Interactive"),")."),(0,r.kt)("p",null,"Let's look at an example for a profile page. This will initially render a loading skeleton. Once the request for a user has finished, it will show the user's name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/profile.js"',filename:'"pages/profile.js"'},'import useUser from "../lib/useUser";\nimport Layout from "../components/Layout";\n\nconst Profile = () => {\n    // Fetch the user client-side\n    const { user } = useUser({ redirectTo: "/login" });\n\n    // Server-render loading state\n    if (!user || user.isLoggedIn === false) {\n        return <Layout>Loading...</Layout>;\n    }\n\n    // Once the user request finishes, show the user\n    return (\n        <Layout>\n            <h1>Your Profile</h1>\n            <pre>{JSON.stringify(user, null, 2)}</pre>\n        </Layout>\n    );\n};\n\nexport default Profile;\n')),(0,r.kt)("p",null,"You can view this ",(0,r.kt)("a",{parentName:"p",href:"https://iron-session-example.vercel.app/"},"example in action"),". Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/tree/canary/examples/with-iron-session"},(0,r.kt)("inlineCode",{parentName:"a"},"with-iron-session"))," example to see how it works."),(0,r.kt)("h3",{id:"authenticating-server-rendered-pages"},"Authenticating Server-Rendered Pages"),(0,r.kt)("p",null,"If you export an ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," function called ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/data-fetching/get-server-side-props"},(0,r.kt)("inlineCode",{parentName:"a"},"getServerSideProps"))," from a page, Next.js will pre-render this page on each request using the data returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export async function getServerSideProps(context) {\n    return {\n        props: {}, // Will be passed to the page component as props\n    };\n}\n")),(0,r.kt)("p",null,"Let's transform the profile example to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/rendering/server-side-rendering"},"server-side rendering"),". If there's a session, return ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," as a prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile")," component in the page. Notice there is not a loading skeleton in ",(0,r.kt)("a",{parentName:"p",href:"https://iron-session-example.vercel.app/"},"this example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/profile.js"',filename:'"pages/profile.js"'},'import withSession from "../lib/session";\nimport Layout from "../components/Layout";\n\nexport const getServerSideProps = withSession(async function ({ req, res }) {\n    const { user } = req.session;\n\n    if (!user) {\n        return {\n            redirect: {\n                destination: "/login",\n                permanent: false,\n            },\n        };\n    }\n\n    return {\n        props: { user },\n    };\n});\n\nconst Profile = ({ user }) => {\n    // Show the user. No loading state is required\n    return (\n        <Layout>\n            <h1>Your Profile</h1>\n            <pre>{JSON.stringify(user, null, 2)}</pre>\n        </Layout>\n    );\n};\n\nexport default Profile;\n')),(0,r.kt)("p",null,"An advantage of this pattern is preventing a flash of unauthenticated content before redirecting. It's important to note fetching user data in ",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," will block rendering until the request to your authentication provider resolves. To prevent creating a bottleneck and increasing your TTFB (",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/time-to-first-byte/"},"Time to First Byte"),"), you should ensure your authentication lookup is fast. Otherwise, consider ",(0,r.kt)("a",{parentName:"p",href:"#authenticating-statically-generated-pages"},"static generation"),"."),(0,r.kt)("h2",{id:"authentication-providers"},"Authentication Providers"),(0,r.kt)("p",null,"Now that we've discussed authentication patterns, let's look at specific providers and explore how they're used with Next.js."),(0,r.kt)("h3",{id:"bring-your-own-database"},"Bring Your Own Database"),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-iron-session"},"with-iron-session")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nextauthjs/next-auth-example"},"next-auth-example")))),(0,r.kt)("p",null,"If you have an existing database with user data, you'll likely want to utilize an open-source solution that's provider agnostic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you want a low-level, encrypted, and stateless session utility use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-iron-session"},(0,r.kt)("inlineCode",{parentName:"a"},"iron-session")),"."),(0,r.kt)("li",{parentName:"ul"},"If you want a full-featured authentication system with built-in providers (Google, Facebook, GitHub\u2026), JWT, JWE, email/password, magic links and more\u2026 use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nextauthjs/next-auth-example"},(0,r.kt)("inlineCode",{parentName:"a"},"next-auth")),".")),(0,r.kt)("p",null,"Both of these libraries support either authentication pattern. If you're interested in ",(0,r.kt)("a",{parentName:"p",href:"http://www.passportjs.org/"},"Passport"),", we also have examples for it using secure and encrypted cookies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-passport"},"with-passport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-passport-and-next-connect"},"with-passport-and-next-connect"))),(0,r.kt)("h3",{id:"other-providers"},"Other Providers"),(0,r.kt)("p",null,"To see examples with other authentication providers, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/tree/canary/examples"},"examples folder"),"."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/auth0"},"Auth0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-clerk"},"Clerk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-firebase-authentication"},"Firebase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-magic"},"Magic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-nhost-auth-realtime-graphql"},"Nhost")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/examples/tree/main/solutions/auth-with-ory"},"Ory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-supabase"},"Supabase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-supertokens"},"Supertokens")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-userbase"},"Userbase")))))}h.isMDXComponent=!0}}]);