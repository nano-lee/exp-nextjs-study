"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={sidebar_position:2,title:"Tailwind CSS",description:"Style your Next.js Application using Tailwind CSS."},s=void 0,r={unversionedId:"app/building-your-application/styling/tailwind-css",id:"app/building-your-application/styling/tailwind-css",title:"Tailwind CSS",description:"Style your Next.js Application using Tailwind CSS.",source:"@site/docs/02-app/01-building-your-application/05-styling/02-tailwind-css.mdx",sourceDirName:"02-app/01-building-your-application/05-styling",slug:"/app/building-your-application/styling/tailwind-css",permalink:"/nano-nextjs-study/docs/app/building-your-application/styling/tailwind-css",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/05-styling/02-tailwind-css.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Tailwind CSS",description:"Style your Next.js Application using Tailwind CSS."},sidebar:"tutorialSidebar",previous:{title:"CSS Modules",permalink:"/nano-nextjs-study/docs/app/building-your-application/styling/css-modules"},next:{title:"CSS-in-JS",permalink:"/nano-nextjs-study/docs/app/building-your-application/styling/css-in-js"}},o={},p=[{value:"Installing Tailwind",id:"installing-tailwind",level:2},{value:"Configuring Tailwind",id:"configuring-tailwind",level:2},{value:"Importing Styles",id:"importing-styles",level:2},{value:"Using Classes",id:"using-classes",level:2},{value:"Usage with Turbopack",id:"usage-with-turbopack",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"{/",(0,i.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," is a utility-first CSS framework that works exceptionally well with Next.js."),(0,i.kt)("h2",{id:"installing-tailwind"},"Installing Tailwind"),(0,i.kt)("p",null,"Install the Tailwind CSS packages and run the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command to generate both the ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"postcss.config.js")," files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n")),(0,i.kt)("h2",{id:"configuring-tailwind"},"Configuring Tailwind"),(0,i.kt)("p",null,"Inside ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.js"),", add paths to the files that will use Tailwind CSS class names:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="tailwind.config.js"',filename:'"tailwind.config.js"'},'/** @type {import(\'tailwindcss\').Config} */\nmodule.exports = {\n    content: [\n        "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.\n        "./pages/**/*.{js,ts,jsx,tsx,mdx}",\n        "./components/**/*.{js,ts,jsx,tsx,mdx}",\n\n        // Or if using `src` directory:\n        "./src/**/*.{js,ts,jsx,tsx,mdx}",\n    ],\n    theme: {\n        extend: {},\n    },\n    plugins: [],\n};\n')),(0,i.kt)("p",null,"You do not need to modify ",(0,i.kt)("inlineCode",{parentName:"p"},"postcss.config.js"),"."),(0,i.kt)("h2",{id:"importing-styles"},"Importing Styles"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/functions-and-directives#directives"},"Tailwind CSS directives")," that Tailwind will use to inject its generated styles to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/styling/css-modules#global-styles"},"Global Stylesheet")," in your application, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'filename="app/globals.css"',filename:'"app/globals.css"'},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n")),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required"},"root layout")," (",(0,i.kt)("inlineCode",{parentName:"p"},"app/layout.tsx"),"), import the ",(0,i.kt)("inlineCode",{parentName:"p"},"globals.css")," stylesheet to apply the styles to every route in your application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},'import type { Metadata } from "next";\n\n// These styles apply to every route in the application\nimport "./globals.css";\n\nexport const metadata: Metadata = {\n    title: "Create Next App",\n    description: "Generated by create next app",\n};\n\nexport default function RootLayout({\n    children,\n}: {\n    children: React.ReactNode;\n}) {\n    return (\n        <html lang="en">\n            <body>{children}</body>\n        </html>\n    );\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},'// These styles apply to every route in the application\nimport "./globals.css";\n\nexport const metadata = {\n    title: "Create Next App",\n    description: "Generated by create next app",\n};\n\nexport default function RootLayout({ children }) {\n    return (\n        <html lang="en">\n            <body>{children}</body>\n        </html>\n    );\n}\n')),(0,i.kt)("h2",{id:"using-classes"},"Using Classes"),(0,i.kt)("p",null,"After installing Tailwind CSS and adding the global styles, you can use Tailwind's utility classes in your application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'export default function Page() {\n    return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" switcher',filename:'"app/page.js"',switcher:!0},'export default function Page() {\n    return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>;\n}\n')),(0,i.kt)("h2",{id:"usage-with-turbopack"},"Usage with Turbopack"),(0,i.kt)("p",null,"As of Next.js 13.1, Tailwind CSS and PostCSS are supported with ",(0,i.kt)("a",{parentName:"p",href:"https://turbo.build/pack/docs/features/css#tailwind-css"},"Turbopack"),"."))}u.isMDXComponent=!0}}]);