"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Custom Webpack Config",sidebar_label:"webpack",description:"Learn how to customize the webpack config used by Next.js"},o=void 0,l={unversionedId:"app/api-reference/next-config-js/webpack",id:"app/api-reference/next-config-js/webpack",title:"Custom Webpack Config",description:"Learn how to customize the webpack config used by Next.js",source:"@site/docs/02-app/02-api-reference/05-next-config-js/webpack.mdx",sourceDirName:"02-app/02-api-reference/05-next-config-js",slug:"/app/api-reference/next-config-js/webpack",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/webpack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/05-next-config-js/webpack.mdx",tags:[],version:"current",frontMatter:{title:"Custom Webpack Config",sidebar_label:"webpack",description:"Learn how to customize the webpack config used by Next.js"},sidebar:"tutorialSidebar",previous:{title:"webVitalsAttribution",permalink:"/nano-nextjs-study/docs/app/api-reference/next-config-js/webVitalsAttribution"},next:{title:"create-next-app",permalink:"/nano-nextjs-study/docs/app/api-reference/create-next-app"}},p={},s=[{value:"<code>nextRuntime</code>",id:"nextruntime",level:4}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": changes to webpack config are not covered by semver so proceed at your own risk")),(0,r.kt)("p",null,"Before continuing to add custom webpack configuration to your application make sure Next.js doesn't already support your use-case:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/styling"},"CSS imports")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/styling/css-modules"},"CSS modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/styling/sass"},"Sass/SCSS imports")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/styling/sass"},"Sass/SCSS modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/using-preact"},"preact"))),(0,r.kt)("p",null,"Some commonly asked for features are available as plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/packages/next-mdx"},"@next/mdx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer"},"@next/bundle-analyzer"))),(0,r.kt)("p",null,"In order to extend our usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),", you can define a function that extends its config inside ",(0,r.kt)("inlineCode",{parentName:"p"},"next.config.js"),", like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n    webpack: (\n        config,\n        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },\n    ) => {\n        // Important: return the modified config\n        return config;\n    },\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," function is executed twice, once for the server and once for the client. This allows you to distinguish between client and server configuration using the ",(0,r.kt)("inlineCode",{parentName:"p"},"isServer")," property.")),(0,r.kt)("p",null,"The second argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," function is an object with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buildId"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," - The build id, used as a unique identifier between builds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")," - Indicates if the compilation will be done in development"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isServer"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")," - It's ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," for server-side compilation, and ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," for client-side compilation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nextRuntime"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String | undefined")," - The target runtime for server-side compilation; either ",(0,r.kt)("inlineCode",{parentName:"li"},'"edge"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"nodejs"'),", it's ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," for client-side compilation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultLoaders"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," - Default loaders used internally by Next.js:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"babel"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," - Default ",(0,r.kt)("inlineCode",{parentName:"li"},"babel-loader")," configuration")))),(0,r.kt)("p",null,"Example usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultLoaders.babel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Example config for adding a loader that depends on babel-loader\n// This source was taken from the @next/mdx plugin source:\n// https://github.com/vercel/next.js/tree/canary/packages/next-mdx\nmodule.exports = {\n    webpack: (config, options) => {\n        config.module.rules.push({\n            test: /\\.mdx/,\n            use: [\n                options.defaultLoaders.babel,\n                {\n                    loader: "@mdx-js/loader",\n                    options: pluginOptions.options,\n                },\n            ],\n        });\n\n        return config;\n    },\n};\n')),(0,r.kt)("h4",{id:"nextruntime"},(0,r.kt)("inlineCode",{parentName:"h4"},"nextRuntime")),(0,r.kt)("p",null,"Notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"isServer")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"nextRuntime")," is ",(0,r.kt)("inlineCode",{parentName:"p"},'"edge"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"nodejs"'),', nextRuntime "',(0,r.kt)("inlineCode",{parentName:"p"},"edge"),'" is currently for middleware and Server Components in edge runtime only.'))}d.isMDXComponent=!0}}]);