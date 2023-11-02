"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3,title:"Script Optimization",sidebar_label:"Scripts",description:"Optimize 3rd party scripts with the built-in Script component.",related:{title:"API Reference",description:"Learn more about the next/script API.",links:["app/api-reference/components/script"]}},o=void 0,p={unversionedId:"app/building-your-application/optimizing/scripts",id:"app/building-your-application/optimizing/scripts",title:"Script Optimization",description:"Optimize 3rd party scripts with the built-in Script component.",source:"@site/docs/02-app/01-building-your-application/06-optimizing/03-scripts.mdx",sourceDirName:"02-app/01-building-your-application/06-optimizing",slug:"/app/building-your-application/optimizing/scripts",permalink:"/docs/app/building-your-application/optimizing/scripts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/06-optimizing/03-scripts.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Script Optimization",sidebar_label:"Scripts",description:"Optimize 3rd party scripts with the built-in Script component.",related:{title:"API Reference",description:"Learn more about the next/script API.",links:["app/api-reference/components/script"]}},sidebar:"tutorialSidebar",previous:{title:"Fonts",permalink:"/docs/app/building-your-application/optimizing/fonts"},next:{title:"Metadata",permalink:"/docs/app/building-your-application/optimizing/metadata"}},l={},s=[{value:"Layout Scripts",id:"layout-scripts",level:3},{value:"Application Scripts",id:"application-scripts",level:3},{value:"Strategy",id:"strategy",level:3},{value:"Offloading Scripts To A Web Worker (Experimental)",id:"offloading-scripts-to-a-web-worker-experimental",level:3},{value:"Inline Scripts",id:"inline-scripts",level:3},{value:"Executing Additional Code",id:"executing-additional-code",level:3},{value:"Additional Attributes",id:"additional-attributes",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"{/",(0,a.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,a.kt)("h3",{id:"layout-scripts"},"Layout Scripts"),(0,a.kt)("p",null,"To load a third-party script for multiple routes, import ",(0,a.kt)("inlineCode",{parentName:"p"},"next/script")," and include the script directly in your layout component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/dashboard/layout.tsx" switcher',filename:'"app/dashboard/layout.tsx"',switcher:!0},'import Script from "next/script";\n\nexport default function DashboardLayout({\n    children,\n}: {\n    children: React.ReactNode;\n}) {\n    return (\n        <>\n            <section>{children}</section>\n            <Script src="https://example.com/script.js" />\n        </>\n    );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/dashboard/layout.js" switcher',filename:'"app/dashboard/layout.js"',switcher:!0},'import Script from "next/script";\n\nexport default function DashboardLayout({ children }) {\n    return (\n        <>\n            <section>{children}</section>\n            <Script src="https://example.com/script.js" />\n        </>\n    );\n}\n')),(0,a.kt)("p",null,"The third-party script is fetched when the folder route (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard/page.js"),") or any nested route (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard/settings/page.js"),") is accessed by the user. Next.js will ensure the script will ",(0,a.kt)("strong",{parentName:"p"},"only load once"),", even if a user navigates between multiple routes in the same layout."),(0,a.kt)("h3",{id:"application-scripts"},"Application Scripts"),(0,a.kt)("p",null,"To load a third-party script for all routes, import ",(0,a.kt)("inlineCode",{parentName:"p"},"next/script")," and include the script directly in your root layout:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},'import Script from "next/script";\n\nexport default function RootLayout({\n    children,\n}: {\n    children: React.ReactNode;\n}) {\n    return (\n        <html lang="en">\n            <body>{children}</body>\n            <Script src="https://example.com/script.js" />\n        </html>\n    );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},'import Script from "next/script";\n\nexport default function RootLayout({ children }) {\n    return (\n        <html lang="en">\n            <body>{children}</body>\n            <Script src="https://example.com/script.js" />\n        </html>\n    );\n}\n')),(0,a.kt)("p",null,"This script will load and execute when ",(0,a.kt)("em",{parentName:"p"},"any")," route in your application is accessed. Next.js will ensure the script will ",(0,a.kt)("strong",{parentName:"p"},"only load once"),", even if a user navigates between multiple pages."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Recommendation"),": We recommend only including third-party scripts in specific pages or layouts in order to minimize any unnecessary impact to performance.")),(0,a.kt)("h3",{id:"strategy"},"Strategy"),(0,a.kt)("p",null,"Although the default behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"next/script")," allows you to load third-party scripts in any page or layout, you can fine-tune its loading behavior by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"strategy")," property:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"beforeInteractive"),": Load the script before any Next.js code and before any page hydration occurs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"afterInteractive"),": (",(0,a.kt)("strong",{parentName:"li"},"default"),") Load the script early but after some hydration on the page occurs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lazyOnload"),": Load the script later during browser idle time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"worker"),": (experimental) Load the script in a web worker.")),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/api-reference/components/script#strategy"},(0,a.kt)("inlineCode",{parentName:"a"},"next/script"))," API reference documentation to learn more about each strategy and their use cases."),(0,a.kt)("h3",{id:"offloading-scripts-to-a-web-worker-experimental"},"Offloading Scripts To A Web Worker (Experimental)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," strategy is not yet stable and does not yet work with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/defining-routes"},(0,a.kt)("inlineCode",{parentName:"a"},"app"))," directory. Use with caution.")),(0,a.kt)("p",null,"Scripts that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," strategy are offloaded and executed in a web worker with ",(0,a.kt)("a",{parentName:"p",href:"https://partytown.builder.io/"},"Partytown"),". This can improve the performance of your site by dedicating the main thread to the rest of your application code."),(0,a.kt)("p",null,"This strategy is still experimental and can only be used if the ",(0,a.kt)("inlineCode",{parentName:"p"},"nextScriptWorkers")," flag is enabled in ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n    experimental: {\n        nextScriptWorkers: true,\n    },\n};\n")),(0,a.kt)("p",null,"Then, run ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," (normally ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn dev"),") and Next.js will guide you through the installation of the required packages to finish the setup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"npm run dev\n")),(0,a.kt)("p",null,"You'll see instructions like these: Please install Partytown by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install @builder.io/partytown")),(0,a.kt)("p",null,"Once setup is complete, defining ",(0,a.kt)("inlineCode",{parentName:"p"},'strategy="worker"')," will automatically instantiate Partytown in your application and offload the script to a web worker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="pages/home.tsx" switcher',filename:'"pages/home.tsx"',switcher:!0},'import Script from "next/script";\n\nexport default function Home() {\n    return (\n        <>\n            <Script src="https://example.com/script.js" strategy="worker" />\n        </>\n    );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/home.js" switcher',filename:'"pages/home.js"',switcher:!0},'import Script from "next/script";\n\nexport default function Home() {\n    return (\n        <>\n            <Script src="https://example.com/script.js" strategy="worker" />\n        </>\n    );\n}\n')),(0,a.kt)("p",null,"There are a number of trade-offs that need to be considered when loading a third-party script in a web worker. Please see Partytown's ",(0,a.kt)("a",{parentName:"p",href:"https://partytown.builder.io/trade-offs"},"tradeoffs")," documentation for more information."),(0,a.kt)("h3",{id:"inline-scripts"},"Inline Scripts"),(0,a.kt)("p",null,"Inline scripts, or scripts not loaded from an external file, are also supported by the Script component. They can be written by placing the JavaScript within curly braces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Script id=\"show-banner\">\n    {`document.getElementById('banner').classList.remove('hidden')`}\n<\/Script>\n")),(0,a.kt)("p",null,"Or by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Script\n    id=\"show-banner\"\n    dangerouslySetInnerHTML={{\n        __html: `document.getElementById('banner').classList.remove('hidden')`,\n    }}\n/>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning"),": An ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property must be assigned for inline scripts in order for Next.js to track and optimize the script.")),(0,a.kt)("h3",{id:"executing-additional-code"},"Executing Additional Code"),(0,a.kt)("p",null,"Event handlers can be used with the Script component to execute additional code after a certain event occurs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onLoad"),": Execute code after the script has finished loading."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onReady"),": Execute code after the script has finished loading and every time the component is mounted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onError"),": Execute code if the script fails to load.")),(0,a.kt)("p",null,"These handlers will only work when ",(0,a.kt)("inlineCode",{parentName:"p"},"next/script")," is imported and used inside of a ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/client-components"},"Client Component")," where ",(0,a.kt)("inlineCode",{parentName:"p"},'"use client"')," is defined as the first line of code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'"use client";\n\nimport Script from "next/script";\n\nexport default function Page() {\n    return (\n        <>\n            <Script\n                src="https://example.com/script.js"\n                onLoad={() => {\n                    console.log("Script has loaded");\n                }}\n            />\n        </>\n    );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" switcher',filename:'"app/page.js"',switcher:!0},'"use client";\n\nimport Script from "next/script";\n\nexport default function Page() {\n    return (\n        <>\n            <Script\n                src="https://example.com/script.js"\n                onLoad={() => {\n                    console.log("Script has loaded");\n                }}\n            />\n        </>\n    );\n}\n')),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/api-reference/components/script#onload"},(0,a.kt)("inlineCode",{parentName:"a"},"next/script"))," API reference to learn more about each event handler and view examples."),(0,a.kt)("h3",{id:"additional-attributes"},"Additional Attributes"),(0,a.kt)("p",null,"There are many DOM attributes that can be assigned to a ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," element that are not used by the Script component, like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/HTML/Global_attributes/nonce"},(0,a.kt)("inlineCode",{parentName:"a"},"nonce"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/HTML/Global_attributes/data-*"},"custom data attributes"),". Including any additional attributes will automatically forward it to the final, optimized ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," element that is included in the HTML."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'import Script from "next/script";\n\nexport default function Page() {\n    return (\n        <>\n            <Script\n                src="https://example.com/script.js"\n                id="example-script"\n                nonce="XUENAJFW"\n                data-test="script"\n            />\n        </>\n    );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" switcher',filename:'"app/page.js"',switcher:!0},'import Script from "next/script";\n\nexport default function Page() {\n    return (\n        <>\n            <Script\n                src="https://example.com/script.js"\n                id="example-script"\n                nonce="XUENAJFW"\n                data-test="script"\n            />\n        </>\n    );\n}\n')))}u.isMDXComponent=!0}}]);