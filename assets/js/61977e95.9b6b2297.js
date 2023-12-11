"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(t),u=r,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const i={title:"pageExtensions",description:"Extend the default page extensions used by Next.js when resolving pages in the Pages Router."},o=void 0,s={unversionedId:"pages/api-reference/next-config-js/pageExtensions",id:"pages/api-reference/next-config-js/pageExtensions",title:"pageExtensions",description:"Extend the default page extensions used by Next.js when resolving pages in the Pages Router.",source:"@site/docs/03-pages/02-api-reference/03-next-config-js/pageExtensions.mdx",sourceDirName:"03-pages/02-api-reference/03-next-config-js",slug:"/pages/api-reference/next-config-js/pageExtensions",permalink:"/docs/pages/api-reference/next-config-js/pageExtensions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/02-api-reference/03-next-config-js/pageExtensions.mdx",tags:[],version:"current",frontMatter:{title:"pageExtensions",description:"Extend the default page extensions used by Next.js when resolving pages in the Pages Router."},sidebar:"nextJsSidebar",previous:{title:"output",permalink:"/docs/pages/api-reference/next-config-js/output"},next:{title:"poweredByHeader",permalink:"/docs/pages/api-reference/next-config-js/poweredByHeader"}},p={},l=[{value:"Including non-page files in the <code>pages</code> directory",id:"including-non-page-files-in-the-pages-directory",level:2}],c={toc:l},g="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can extend the default Page extensions (",(0,r.kt)("inlineCode",{parentName:"p"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".jsx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".js"),") used by Next.js. Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"next.config.js"),", add the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageExtensions")," config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],\n};\n')),(0,r.kt)("p",null,"Changing these values affects ",(0,r.kt)("em",{parentName:"p"},"all")," Next.js pages, including the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/routing/middleware"},(0,r.kt)("inlineCode",{parentName:"a"},"middleware.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/optimizing/instrumentation"},(0,r.kt)("inlineCode",{parentName:"a"},"instrumentation.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/_document.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/_app.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/api/"))),(0,r.kt)("p",null,"For example, if you reconfigure ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," page extensions to ",(0,r.kt)("inlineCode",{parentName:"p"},".page.ts"),", you would need to rename pages like ",(0,r.kt)("inlineCode",{parentName:"p"},"middleware.page.ts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"instrumentation.page.ts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_app.page.ts"),"."),(0,r.kt)("h2",{id:"including-non-page-files-in-the-pages-directory"},"Including non-page files in the ",(0,r.kt)("inlineCode",{parentName:"h2"},"pages")," directory"),(0,r.kt)("p",null,"You can colocate test files or other files used by components in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," directory. Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"next.config.js"),", add the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageExtensions")," config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],\n};\n')),(0,r.kt)("p",null,"Then, rename your pages to have a file extension that includes ",(0,r.kt)("inlineCode",{parentName:"p"},".page")," (e.g. rename ",(0,r.kt)("inlineCode",{parentName:"p"},"MyPage.tsx")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"MyPage.page.tsx"),"). Ensure you rename ",(0,r.kt)("em",{parentName:"p"},"all")," Next.js pages, including the files mentioned above."))}d.isMDXComponent=!0}}]);