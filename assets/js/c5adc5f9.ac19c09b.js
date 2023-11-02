"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7028],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,v=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return t?a.createElement(v,r(r({ref:n},d),{},{components:t})):a.createElement(v,r({ref:n},d))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={title:"Environment Variables",description:"Learn to add and access environment variables in your Next.js application."},r=void 0,l={unversionedId:"app/building-your-application/configuring/environment-variables",id:"app/building-your-application/configuring/environment-variables",title:"Environment Variables",description:"Learn to add and access environment variables in your Next.js application.",source:"@site/docs/02-app/01-building-your-application/07-configuring/03-environment-variables.mdx",sourceDirName:"02-app/01-building-your-application/07-configuring",slug:"/app/building-your-application/configuring/environment-variables",permalink:"/docs/app/building-your-application/configuring/environment-variables",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/07-configuring/03-environment-variables.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Environment Variables",description:"Learn to add and access environment variables in your Next.js application."},sidebar:"tutorialSidebar",previous:{title:"ESLint",permalink:"/docs/app/building-your-application/configuring/eslint"},next:{title:"Absolute Imports and Module Path Aliases",permalink:"/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases"}},s={},p=[{value:"Loading Environment Variables",id:"loading-environment-variables",level:2},{value:"Referencing Other Variables",id:"referencing-other-variables",level:3},{value:"Bundling Environment Variables for the Browser",id:"bundling-environment-variables-for-the-browser",level:2},{value:"Default Environment Variables",id:"default-environment-variables",level:2},{value:"Environment Variables on Vercel",id:"environment-variables-on-vercel",level:2},{value:"Test Environment Variables",id:"test-environment-variables",level:2},{value:"Environment Variable Load Order",id:"environment-variable-load-order",level:2},{value:"Good to know",id:"good-to-know",level:2},{value:"Version History",id:"version-history",level:2}],d={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"{/",(0,i.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/environment-variables"},"Environment Variables")))),(0,i.kt)("p",null,"Next.js comes with built-in support for environment variables, which allows you to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loading-environment-variables"},"Use ",(0,i.kt)("inlineCode",{parentName:"a"},".env.local")," to load environment variables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bundling-environment-variables-for-the-browser"},"Bundle environment variables for the browser by prefixing with ",(0,i.kt)("inlineCode",{parentName:"a"},"NEXT_PUBLIC_")))),(0,i.kt)("h2",{id:"loading-environment-variables"},"Loading Environment Variables"),(0,i.kt)("p",null,"Next.js has built-in support for loading environment variables from ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:'filename=".env.local"',filename:'".env.local"'},"DB_HOST=localhost\nDB_USER=myuser\nDB_PASS=mypassword\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Next.js also supports multiline variables inside of your ",(0,i.kt)("inlineCode",{parentName:"p"},".env*")," files:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# .env.local\n\n# you can write with line breaks\nPRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\nKh9NV...\n...\n-----END DSA PRIVATE KEY-----"\n\n# or with `\\n` inside double quotes\nPRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\\nKh9NV...\\n-----END DSA PRIVATE KEY-----\\n"\n'))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": If you are using a ",(0,i.kt)("inlineCode",{parentName:"p"},"/src")," folder, please note that Next.js will load the .env files ",(0,i.kt)("strong",{parentName:"p"},"only")," from the parent folder and ",(0,i.kt)("strong",{parentName:"p"},"not")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/src")," folder.\nThis loads ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.DB_HOST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.DB_USER"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.DB_PASS")," into the Node.js environment automatically allowing you to use them in ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handlers"),".")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/api/route.js"',filename:'"app/api/route.js"'},"export async function GET() {\n    const db = await myDB.connect({\n        host: process.env.DB_HOST,\n        username: process.env.DB_USER,\n        password: process.env.DB_PASS,\n    });\n    // ...\n}\n")),(0,i.kt)("h3",{id:"referencing-other-variables"},"Referencing Other Variables"),(0,i.kt)("p",null,"Next.js will automatically expand variables that use ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," to reference other variables e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"$VARIABLE")," inside of your ",(0,i.kt)("inlineCode",{parentName:"p"},".env*")," files. This allows you to reference other secrets. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:'filename=".env"',filename:'".env"'},"TWITTER_USER=nextjs\nTWITTER_URL=https://twitter.com/$TWITTER_USER\n")),(0,i.kt)("p",null,"In the above example, ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.TWITTER_URL")," would be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://twitter.com/nextjs"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Good to know"),": If you need to use variable with a ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," in the actual value, it needs to be escaped e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"\\$"),".")),(0,i.kt)("h2",{id:"bundling-environment-variables-for-the-browser"},"Bundling Environment Variables for the Browser"),(0,i.kt)("p",null,"Non-",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_")," environment variables are only available in the Node.js environment, meaning they aren't accessible to the browser (the client runs in a different ",(0,i.kt)("em",{parentName:"p"},"environment"),")."),(0,i.kt)("p",null,'In order to make the value of an environment variable accessible in the browser, Next.js can "inline" a value, at build time, into the js bundle that is delivered to the client, replacing all references to ',(0,i.kt)("inlineCode",{parentName:"p"},"process.env.[variable]")," with a hard-coded value. To tell it to do this, you just have to prefix the variable with ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:'filename="Terminal"',filename:'"Terminal"'},"NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk\n")),(0,i.kt)("p",null,"This will tell Next.js to replace all references to ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.NEXT_PUBLIC_ANALYTICS_ID")," in the Node.js environment with the value from the environment in which you run ",(0,i.kt)("inlineCode",{parentName:"p"},"next build"),", allowing you to use it anywhere in your code. It will be inlined into any JavaScript sent to the browser."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": After being built, your app will no longer respond to changes to these environment variables. For instance, if you use a Heroku pipeline to promote slugs built in one environment to another environment, or if you build and deploy a single Docker image to multiple environments, all ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_")," variables will be frozen with the value evaluated at build time, so these values need to be set appropriately when the project is built. If you need access to runtime environment values, you'll have to setup your own API to provide them to the client (either on demand or during initialization).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="pages/index.js"',filename:'"pages/index.js"'},"import setupAnalyticsService from \"../lib/my-analytics-service\";\n\n// 'NEXT_PUBLIC_ANALYTICS_ID' can be used here as it's prefixed by 'NEXT_PUBLIC_'.\n// It will be transformed at build time to `setupAnalyticsService('abcdefghijk')`.\nsetupAnalyticsService(process.env.NEXT_PUBLIC_ANALYTICS_ID);\n\nfunction HomePage() {\n    return <h1>Hello World</h1>;\n}\n\nexport default HomePage;\n")),(0,i.kt)("p",null,"Note that dynamic lookups will ",(0,i.kt)("em",{parentName:"p"},"not")," be inlined, such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// This will NOT be inlined, because it uses a variable\nconst varName = "NEXT_PUBLIC_ANALYTICS_ID";\nsetupAnalyticsService(process.env[varName]);\n\n// This will NOT be inlined, because it uses a variable\nconst env = process.env;\nsetupAnalyticsService(env.NEXT_PUBLIC_ANALYTICS_ID);\n')),(0,i.kt)("h2",{id:"default-environment-variables"},"Default Environment Variables"),(0,i.kt)("p",null,"In general only one ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," file is needed. However, sometimes you might want to add some defaults for the ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," (",(0,i.kt)("inlineCode",{parentName:"p"},"next dev"),") or ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," (",(0,i.kt)("inlineCode",{parentName:"p"},"next start"),") environment."),(0,i.kt)("p",null,"Next.js allows you to set defaults in ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," (all environments), ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development")," (development environment), and ",(0,i.kt)("inlineCode",{parentName:"p"},".env.production")," (production environment)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," always overrides the defaults set."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".env.production")," files should be included in your repository as they define defaults. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},".env*.local")," should be added to ",(0,i.kt)("inlineCode",{parentName:"strong"},".gitignore")),", as those files are intended to be ignored. ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," is where secrets can be stored.")),(0,i.kt)("h2",{id:"environment-variables-on-vercel"},"Environment Variables on Vercel"),(0,i.kt)("p",null,"When deploying your Next.js application to ",(0,i.kt)("a",{parentName:"p",href:"https://vercel.com"},"Vercel"),", Environment Variables can be configured ",(0,i.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/projects/environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website"},"in the Project Settings"),"."),(0,i.kt)("p",null,"All types of Environment Variables should be configured there. Even Environment Variables used in Development \u2013 which can be ",(0,i.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/projects/environment-variables#development-environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website"},"downloaded onto your local device")," afterwards."),(0,i.kt)("p",null,"If you've configured ",(0,i.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/projects/environment-variables#development-environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website"},"Development Environment Variables")," you can pull them into a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," for usage on your local machine using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"vercel env pull .env.local\n")),(0,i.kt)("h2",{id:"test-environment-variables"},"Test Environment Variables"),(0,i.kt)("p",null,"Apart from ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," environments, there is a 3rd option available: ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),". In the same way you can set defaults for development or production environments, you can do the same with a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.test")," file for the ",(0,i.kt)("inlineCode",{parentName:"p"},"testing")," environment (though this one is not as common as the previous two). Next.js will not load environment variables from ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".env.production")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"testing")," environment."),(0,i.kt)("p",null,"This one is useful when running tests with tools like ",(0,i.kt)("inlineCode",{parentName:"p"},"jest")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"cypress")," where you need to set specific environment vars only for testing purposes. Test default values will be loaded if ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", though you usually don't need to do this manually as testing tools will address it for you."),(0,i.kt)("p",null,"There is a small difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," environment, and both ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," that you need to bear in mind: ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," won't be loaded, as you expect tests to produce the same results for everyone. This way every test execution will use the same env defaults across different executions by ignoring your ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," (which is intended to override the default set)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Good to know"),": similar to Default Environment Variables, ",(0,i.kt)("inlineCode",{parentName:"p"},".env.test")," file should be included in your repository, but ",(0,i.kt)("inlineCode",{parentName:"p"},".env.test.local")," shouldn't, as ",(0,i.kt)("inlineCode",{parentName:"p"},".env*.local")," are intended to be ignored through ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),".")),(0,i.kt)("p",null,"While running unit tests you can make sure to load your environment variables the same way Next.js does by leveraging the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadEnvConfig")," function from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@next/env")," package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// The below can be used in a Jest global setup file or similar for your testing set-up\nimport { loadEnvConfig } from "@next/env";\n\nexport default async () => {\n    const projectDir = process.cwd();\n    loadEnvConfig(projectDir);\n};\n')),(0,i.kt)("h2",{id:"environment-variable-load-order"},"Environment Variable Load Order"),(0,i.kt)("p",null,"Environment variables are looked up in the following places, in order, stopping once the variable is found."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"process.env")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env.$(NODE_ENV).local")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env.local")," (Not checked when ",(0,i.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"test"),".)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env.$(NODE_ENV)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env"))),(0,i.kt)("p",null,"For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," and you define a variable in both ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development.local")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),", the value in ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development.local")," will be used."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Good to know"),": The allowed values for ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," are ",(0,i.kt)("inlineCode",{parentName:"p"},"production"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),".")),(0,i.kt)("h2",{id:"good-to-know"},"Good to know"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are using a ",(0,i.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/configuring/src-directory"},(0,i.kt)("inlineCode",{parentName:"a"},"/src")," directory"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".env.*")," files should remain in the root of your project."),(0,i.kt)("li",{parentName:"ul"},"If the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," is unassigned, Next.js automatically assigns ",(0,i.kt)("inlineCode",{parentName:"li"},"development")," when running the ",(0,i.kt)("inlineCode",{parentName:"li"},"next dev")," command, or ",(0,i.kt)("inlineCode",{parentName:"li"},"production")," for all other commands.")),(0,i.kt)("h2",{id:"version-history"},"Version History"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v9.4.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Support ",(0,i.kt)("inlineCode",{parentName:"td"},".env")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_")," introduced.")))))}u.isMDXComponent=!0}}]);