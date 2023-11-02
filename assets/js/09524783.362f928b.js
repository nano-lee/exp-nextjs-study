"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Next.js Compiler",description:"Next.js Compiler, written in Rust, which transforms and minifies your Next.js application."},o=void 0,l={unversionedId:"architecture/nextjs-compiler",id:"architecture/nextjs-compiler",title:"Next.js Compiler",description:"Next.js Compiler, written in Rust, which transforms and minifies your Next.js application.",source:"@site/docs/04-architecture/nextjs-compiler.mdx",sourceDirName:"04-architecture",slug:"/architecture/nextjs-compiler",permalink:"/nano-nextjs-study/docs/architecture/nextjs-compiler",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-architecture/nextjs-compiler.mdx",tags:[],version:"current",frontMatter:{title:"Next.js Compiler",description:"Next.js Compiler, written in Rust, which transforms and minifies your Next.js application."},sidebar:"tutorialSidebar",previous:{title:"Fast Refresh",permalink:"/nano-nextjs-study/docs/architecture/fast-refresh"},next:{title:"Supported Browsers",permalink:"/nano-nextjs-study/docs/architecture/supported-browsers"}},s={},p=[{value:"Why SWC?",id:"why-swc",level:2},{value:"Supported Features",id:"supported-features",level:2},{value:"Styled Components",id:"styled-components",level:3},{value:"Jest",id:"jest",level:3},{value:"Relay",id:"relay",level:3},{value:"Remove React Properties",id:"remove-react-properties",level:3},{value:"Remove Console",id:"remove-console",level:3},{value:"Legacy Decorators",id:"legacy-decorators",level:3},{value:"importSource",id:"importsource",level:3},{value:"Emotion",id:"emotion",level:3},{value:"Minification",id:"minification",level:3},{value:"Module Transpilation",id:"module-transpilation",level:3},{value:"Modularize Imports",id:"modularize-imports",level:3},{value:"Experimental Features",id:"experimental-features",level:2},{value:"SWC Trace profiling",id:"swc-trace-profiling",level:3},{value:"SWC Plugins (Experimental)",id:"swc-plugins-experimental",level:3},{value:"Unsupported Features",id:"unsupported-features",level:2},{value:"Version History",id:"version-history",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Next.js Compiler, written in Rust using ",(0,r.kt)("a",{parentName:"p",href:"http://swc.rs/"},"SWC"),", allows Next.js to transform and minify your JavaScript code for production. This replaces Babel for individual files and Terser for minifying output bundles."),(0,r.kt)("p",null,"Compilation using the Next.js Compiler is 17x faster than Babel and enabled by default since Next.js version 12. If you have an existing Babel configuration or are using ",(0,r.kt)("a",{parentName:"p",href:"#unsupported-features"},"unsupported features"),", your application will opt-out of the Next.js Compiler and continue using Babel."),(0,r.kt)("h2",{id:"why-swc"},"Why SWC?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://swc.rs/"},"SWC")," is an extensible Rust-based platform for the next generation of fast developer tools."),(0,r.kt)("p",null,"SWC can be used for compilation, minification, bundling, and more \u2013 and is designed to be extended. It's something you can call to perform code transformations (either built-in or custom). Running those transformations happens through higher-level tools like Next.js."),(0,r.kt)("p",null,"We chose to build on SWC for a few reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Extensibility:")," SWC can be used as a Crate inside Next.js, without having to fork the library or workaround design constraints."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance:")," We were able to achieve ~3x faster Fast Refresh and ~5x faster builds in Next.js by switching to SWC, with more room for optimization still in progress."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Community:")," The Rust community and ecosystem are amazing and still growing.")),(0,r.kt)("h2",{id:"supported-features"},"Supported Features"),(0,r.kt)("h3",{id:"styled-components"},"Styled Components"),(0,r.kt)("p",null,"We're working to port ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-styled-components")," to the Next.js Compiler."),(0,r.kt)("p",null,"First, update to the latest version of Next.js: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install next@latest"),". Then, update your ",(0,r.kt)("inlineCode",{parentName:"p"},"next.config.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n  compiler: {\n    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.\n    styledComponents: boolean | {\n      // Enabled by default in development, disabled in production to reduce file size,\n      // setting this will override the default for all environments.\n      displayName?: boolean,\n      // Enabled by default.\n      ssr?: boolean,\n      // Enabled by default.\n      fileName?: boolean,\n      // Empty by default.\n      topLevelImportPaths?: string[],\n      // Defaults to ["index"].\n      meaninglessFileNames?: string[],\n      // Enabled by default.\n      cssProp?: boolean,\n      // Empty by default.\n      namespace?: string,\n      // Not supported yet.\n      minify?: boolean,\n      // Not supported yet.\n      transpileTemplateLiterals?: boolean,\n      // Not supported yet.\n      pure?: boolean,\n    },\n  },\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"minify"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"transpileTemplateLiterals")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pure")," are not yet implemented. You can follow the progress ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/issues/30802"},"here"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"ssr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"displayName")," transforms are the main requirement for using ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," in Next.js."),(0,r.kt)("h3",{id:"jest"},"Jest"),(0,r.kt)("p",null,"The Next.js Compiler transpiles your tests and simplifies configuring Jest together with Next.js including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Auto mocking of ",(0,r.kt)("inlineCode",{parentName:"li"},".css"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".module.css")," (and their ",(0,r.kt)("inlineCode",{parentName:"li"},".scss")," variants), and image imports"),(0,r.kt)("li",{parentName:"ul"},"Automatically sets up ",(0,r.kt)("inlineCode",{parentName:"li"},"transform")," using SWC"),(0,r.kt)("li",{parentName:"ul"},"Loading ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," (and all variants) into ",(0,r.kt)("inlineCode",{parentName:"li"},"process.env")),(0,r.kt)("li",{parentName:"ul"},"Ignores ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," from test resolving and transforms"),(0,r.kt)("li",{parentName:"ul"},"Ignoring ",(0,r.kt)("inlineCode",{parentName:"li"},".next")," from test resolving"),(0,r.kt)("li",{parentName:"ul"},"Loads ",(0,r.kt)("inlineCode",{parentName:"li"},"next.config.js")," for flags that enable experimental SWC transforms")),(0,r.kt)("p",null,"First, update to the latest version of Next.js: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install next@latest"),". Then, update your ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="jest.config.js"',filename:'"jest.config.js"'},"const nextJest = require('next/jest')\n\n// Providing the path to your Next.js app which will enable loading next.config.js and .env files\nconst createJestConfig = nextJest({ dir: './' })\n\n// Any custom config you want to pass to Jest\nconst customJestConfig = {\n  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],\n}\n\n// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async\nmodule.exports = createJestConfig(customJestConfig)\n")),(0,r.kt)("h3",{id:"relay"},"Relay"),(0,r.kt)("p",null,"To enable ",(0,r.kt)("a",{parentName:"p",href:"https://relay.dev/"},"Relay")," support:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n  compiler: {\n    relay: {\n      // This should match relay.config.js\n      src: './',\n      artifactDirectory: './__generated__',\n      language: 'typescript',\n      eagerEsModules: false,\n    },\n  },\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": In Next.js, all JavaScript files in ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," directory are considered routes. So, for ",(0,r.kt)("inlineCode",{parentName:"p"},"relay-compiler")," you'll need to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"artifactDirectory")," configuration settings outside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"pages"),", otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"relay-compiler")," will generate files next to the source file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"__generated__")," directory, and this file will be considered a route, which will break production builds.")),(0,r.kt)("h3",{id:"remove-react-properties"},"Remove React Properties"),(0,r.kt)("p",null,"Allows to remove JSX properties. This is often used for testing. Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-react-remove-properties"),"."),(0,r.kt)("p",null,"To remove properties matching the default regex ",(0,r.kt)("inlineCode",{parentName:"p"},"^data-test"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n  compiler: {\n    reactRemoveProperties: true,\n  },\n}\n")),(0,r.kt)("p",null,"To remove custom properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n  compiler: {\n    // The regexes defined here are processed in Rust so the syntax is different from\n    // JavaScript `RegExp`s. See https://docs.rs/regex.\n    reactRemoveProperties: { properties: ['^data-custom$'] },\n  },\n}\n")),(0,r.kt)("h3",{id:"remove-console"},"Remove Console"),(0,r.kt)("p",null,"This transform allows for removing all ",(0,r.kt)("inlineCode",{parentName:"p"},"console.*")," calls in application code (not ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"). Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-remove-console"),"."),(0,r.kt)("p",null,"Remove all ",(0,r.kt)("inlineCode",{parentName:"p"},"console.*")," calls:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n  compiler: {\n    removeConsole: true,\n  },\n}\n")),(0,r.kt)("p",null,"Remove ",(0,r.kt)("inlineCode",{parentName:"p"},"console.*")," output except ",(0,r.kt)("inlineCode",{parentName:"p"},"console.error"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n  compiler: {\n    removeConsole: {\n      exclude: ['error'],\n    },\n  },\n}\n")),(0,r.kt)("h3",{id:"legacy-decorators"},"Legacy Decorators"),(0,r.kt)("p",null,"Next.js will automatically detect ",(0,r.kt)("inlineCode",{parentName:"p"},"experimentalDecorators")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". Legacy decorators are commonly used with older versions of libraries like ",(0,r.kt)("inlineCode",{parentName:"p"},"mobx"),"."),(0,r.kt)("p",null,"This flag is only supported for compatibility with existing applications. We do not recommend using legacy decorators in new applications."),(0,r.kt)("p",null,"First, update to the latest version of Next.js: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install next@latest"),". Then, update your ",(0,r.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "compilerOptions": {\n    "experimentalDecorators": true\n  }\n}\n')),(0,r.kt)("h3",{id:"importsource"},"importSource"),(0,r.kt)("p",null,"Next.js will automatically detect ",(0,r.kt)("inlineCode",{parentName:"p"},"jsxImportSource")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and apply that. This is commonly used with libraries like ",(0,r.kt)("a",{parentName:"p",href:"https://theme-ui.com"},"Theme UI"),"."),(0,r.kt)("p",null,"First, update to the latest version of Next.js: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install next@latest"),". Then, update your ",(0,r.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "compilerOptions": {\n    "jsxImportSource": "theme-ui"\n  }\n}\n')),(0,r.kt)("h3",{id:"emotion"},"Emotion"),(0,r.kt)("p",null,"We're working to port ",(0,r.kt)("inlineCode",{parentName:"p"},"@emotion/babel-plugin")," to the Next.js Compiler."),(0,r.kt)("p",null,"First, update to the latest version of Next.js: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install next@latest"),". Then, update your ",(0,r.kt)("inlineCode",{parentName:"p"},"next.config.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"\nmodule.exports = {\n  compiler: {\n    emotion: boolean | {\n      // default is true. It will be disabled when build type is production.\n      sourceMap?: boolean,\n      // default is 'dev-only'.\n      autoLabel?: 'never' | 'dev-only' | 'always',\n      // default is '[local]'.\n      // Allowed values: `[local]` `[filename]` and `[dirname]`\n      // This option only works when autoLabel is set to 'dev-only' or 'always'.\n      // It allows you to define the format of the resulting label.\n      // The format is defined via string where variable parts are enclosed in square brackets [].\n      // For example labelFormat: \"my-classname--[local]\", where [local] will be replaced with the name of the variable the result is assigned to.\n      labelFormat?: string,\n      // default is undefined.\n      // This option allows you to tell the compiler what imports it should\n      // look at to determine what it should transform so if you re-export\n      // Emotion's exports, you can still use transforms.\n      importMap?: {\n        [packageName: string]: {\n          [exportName: string]: {\n            canonicalImport?: [string, string],\n            styledBaseImport?: [string, string],\n          }\n        }\n      },\n    },\n  },\n}\n")),(0,r.kt)("h3",{id:"minification"},"Minification"),(0,r.kt)("p",null,"Next.js' swc compiler is used for minification by default since v13. This is 7x faster than Terser."),(0,r.kt)("p",null,"If Terser is still needed for any reason this can be configured."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n  swcMinify: false,\n}\n")),(0,r.kt)("h3",{id:"module-transpilation"},"Module Transpilation"),(0,r.kt)("p",null,"Next.js can automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"). This replaces the ",(0,r.kt)("inlineCode",{parentName:"p"},"next-transpile-modules")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n  transpilePackages: ['@acme/ui', 'lodash-es'],\n}\n")),(0,r.kt)("h3",{id:"modularize-imports"},"Modularize Imports"),(0,r.kt)("p",null,"This option has been superseded by ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/next-config-js/optimizePackageImports"},(0,r.kt)("inlineCode",{parentName:"a"},"optimizePackageImports"))," in Next.js 13.5. We recommend upgrading to use the new option that does not require manual configuration of import paths."),(0,r.kt)("h2",{id:"experimental-features"},"Experimental Features"),(0,r.kt)("h3",{id:"swc-trace-profiling"},"SWC Trace profiling"),(0,r.kt)("p",null,"You can generate SWC's internal transform traces as chromium's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview?mode=html#%21="},"trace event format"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n  experimental: {\n    swcTraceProfiling: true,\n  },\n}\n")),(0,r.kt)("p",null,"Once enabled, swc will generate trace named as ",(0,r.kt)("inlineCode",{parentName:"p"},"swc-trace-profile-${timestamp}.json")," under ",(0,r.kt)("inlineCode",{parentName:"p"},".next/"),". Chromium's trace viewer (chrome://tracing/, ",(0,r.kt)("a",{parentName:"p",href:"https://ui.perfetto.dev/"},"https://ui.perfetto.dev/"),"), or compatible flamegraph viewer (",(0,r.kt)("a",{parentName:"p",href:"https://www.speedscope.app/"},"https://www.speedscope.app/"),") can load & visualize generated traces."),(0,r.kt)("h3",{id:"swc-plugins-experimental"},"SWC Plugins (Experimental)"),(0,r.kt)("p",null,"You can configure swc's transform to use SWC's experimental plugin support written in wasm to customize transformation behavior."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n  experimental: {\n    swcPlugins: [\n      [\n        'plugin',\n        {\n          ...pluginOptions,\n        },\n      ],\n    ],\n  },\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"swcPlugins")," accepts an array of tuples for configuring plugins. A tuple for the plugin contains the path to the plugin and an object for plugin configuration. The path to the plugin can be an npm module package name or an absolute path to the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasm")," binary itself."),(0,r.kt)("h2",{id:"unsupported-features"},"Unsupported Features"),(0,r.kt)("p",null,"When your application has a ",(0,r.kt)("inlineCode",{parentName:"p"},".babelrc")," file, Next.js will automatically fall back to using Babel for transforming individual files. This ensures backwards compatibility with existing applications that leverage custom Babel plugins."),(0,r.kt)("p",null,"If you're using a custom Babel setup, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/discussions/30174"},"please share your configuration"),". We're working to port as many commonly used Babel transformations as possible, as well as supporting plugins in the future."),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.1.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nextjs.org/blog/next-13-1#built-in-module-transpilation-stable"},"Module Transpilation")," and ",(0,r.kt)("a",{parentName:"td",href:"https://nextjs.org/blog/next-13-1#import-resolution-for-smaller-bundles"},"Modularize Imports")," stable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"SWC Minifier enabled by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v12.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"SWC Minifier ",(0,r.kt)("a",{parentName:"td",href:"https://nextjs.org/blog/next-12-3#swc-minifier-stable"},"stable"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v12.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#swc-plugins-experimental"},"SWC Plugins")," experimental support added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v12.1.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Added support for Styled Components, Jest, Relay, Remove React Properties, Legacy Decorators, Remove Console, and jsxImportSource.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v12.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Next.js Compiler ",(0,r.kt)("a",{parentName:"td",href:"https://nextjs.org/blog/next-12"},"introduced"),".")))))}d.isMDXComponent=!0}}]);