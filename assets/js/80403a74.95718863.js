"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7450],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(o),g=n,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||r;return o?a.createElement(m,i(i({ref:t},s),{},{components:o})):a.createElement(m,i({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},884:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=o(7462),n=(o(7294),o(3905));const r={sidebar_position:4,title:"Route Groups",description:"Route Groups can be used to partition your Next.js application into different sections."},i=void 0,l={unversionedId:"app/building-your-application/routing/route-groups",id:"app/building-your-application/routing/route-groups",title:"Route Groups",description:"Route Groups can be used to partition your Next.js application into different sections.",source:"@site/docs/02-app/01-building-your-application/01-routing/04-route-groups.mdx",sourceDirName:"02-app/01-building-your-application/01-routing",slug:"/app/building-your-application/routing/route-groups",permalink:"/docs/app/building-your-application/routing/route-groups",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/01-routing/04-route-groups.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Route Groups",description:"Route Groups can be used to partition your Next.js application into different sections."},sidebar:"tutorialSidebar",previous:{title:"Linking and Navigating",permalink:"/docs/app/building-your-application/routing/linking-and-navigating"},next:{title:"Dynamic Routes",permalink:"/docs/app/building-your-application/routing/dynamic-routes"}},p={},u=[{value:"Convention",id:"convention",level:2},{value:"Examples",id:"examples",level:2},{value:"Organize routes without affecting the URL path",id:"organize-routes-without-affecting-the-url-path",level:3},{value:"Opting specific segments into a layout",id:"opting-specific-segments-into-a-layout",level:3},{value:"Creating multiple root layouts",id:"creating-multiple-root-layouts",level:3}],s=(c="Image",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const d={toc:u},g="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(g,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"app")," directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a ",(0,n.kt)("strong",{parentName:"p"},"Route Group")," to prevent the folder from being included in the route's URL path."),(0,n.kt)("p",null,"This allows you to organize your route segments and project files into logical groups without affecting the URL path structure."),(0,n.kt)("p",null,"Route groups are useful for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#organize-routes-without-affecting-the-url-path"},"Organizing routes into groups")," e.g. by site section, intent, or team."),(0,n.kt)("li",{parentName:"ul"},"Enabling ",(0,n.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/routing/pages-and-layouts"},"nested layouts")," in the same route segment level:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#creating-multiple-root-layouts"},"Creating multiple nested layouts in the same segment, including multiple root layouts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#opting-specific-segments-into-a-layout"},"Adding a layout to a subset of routes in a common segment"))))),(0,n.kt)("h2",{id:"convention"},"Convention"),(0,n.kt)("p",null,"A route group can be created by wrapping a folder's name in parenthesis: ",(0,n.kt)("inlineCode",{parentName:"p"},"(folderName)")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"organize-routes-without-affecting-the-url-path"},"Organize routes without affecting the URL path"),(0,n.kt)("p",null,"To organize routes without affecting the URL, create a group to keep related routes together. The folders in parenthesis will be omitted from the URL (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"(marketing)")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"(shop)"),")."),(0,n.kt)(s,{alt:"Organizing Routes with Route Groups",srcLight:"/docs/light/route-group-organisation.png",srcDark:"/docs/dark/route-group-organisation.png",width:"1600",height:"930",mdxType:"Image"}),(0,n.kt)("p",null,"Even though routes inside ",(0,n.kt)("inlineCode",{parentName:"p"},"(marketing)")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"(shop)")," share the same URL hierarchy, you can create a different layout for each group by adding a ",(0,n.kt)("inlineCode",{parentName:"p"},"layout.js")," file inside their folders."),(0,n.kt)(s,{alt:"Route Groups with Multiple Layouts",srcLight:"/docs/light/route-group-multiple-layouts.png",srcDark:"/docs/dark/route-group-multiple-layouts.png",width:"1600",height:"768",mdxType:"Image"}),(0,n.kt)("h3",{id:"opting-specific-segments-into-a-layout"},"Opting specific segments into a layout"),(0,n.kt)("p",null,"To opt specific routes into a layout, create a new route group (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"(shop)"),") and move the routes that share the same layout into the group (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"account")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"cart"),"). The routes outside of the group will not share the layout (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"checkout"),")."),(0,n.kt)(s,{alt:"Route Groups with Opt-in Layouts",srcLight:"/docs/light/route-group-opt-in-layouts.png",srcDark:"/docs/dark/route-group-opt-in-layouts.png",width:"1600",height:"930",mdxType:"Image"}),(0,n.kt)("h3",{id:"creating-multiple-root-layouts"},"Creating multiple root layouts"),(0,n.kt)("p",null,"To create multiple ",(0,n.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required"},"root layouts"),", remove the top-level ",(0,n.kt)("inlineCode",{parentName:"p"},"layout.js")," file, and add a ",(0,n.kt)("inlineCode",{parentName:"p"},"layout.js")," file inside each route groups. This is useful for partitioning an application into sections that have a completely different UI or experience. The ",(0,n.kt)("inlineCode",{parentName:"p"},"<html>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<body>")," tags need to be added to each root layout."),(0,n.kt)(s,{alt:"Route Groups with Multiple Root Layouts",srcLight:"/docs/light/route-group-multiple-root-layouts.png",srcDark:"/docs/dark/route-group-multiple-root-layouts.png",width:"1600",height:"687",mdxType:"Image"}),(0,n.kt)("p",null,"In the example above, both ",(0,n.kt)("inlineCode",{parentName:"p"},"(marketing)")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"(shop)")," have their own root layout."),(0,n.kt)("hr",null),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"The naming of route groups has no special significance other than for organization. They do not affect the URL path."),(0,n.kt)("li",{parentName:"ul"},"Routes that include a route group ",(0,n.kt)("strong",{parentName:"li"},"should not")," resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, ",(0,n.kt)("inlineCode",{parentName:"li"},"(marketing)/about/page.js")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"(shop)/about/page.js")," would both resolve to ",(0,n.kt)("inlineCode",{parentName:"li"},"/about")," and cause an error."),(0,n.kt)("li",{parentName:"ul"},"If you use multiple root layouts without a top-level ",(0,n.kt)("inlineCode",{parentName:"li"},"layout.js")," file, your home ",(0,n.kt)("inlineCode",{parentName:"li"},"page.js")," file should be defined in one of the route groups, For example: ",(0,n.kt)("inlineCode",{parentName:"li"},"app/(marketing)/page.js"),"."),(0,n.kt)("li",{parentName:"ul"},"Navigating ",(0,n.kt)("strong",{parentName:"li"},"across multiple root layouts")," will cause a ",(0,n.kt)("strong",{parentName:"li"},"full page load")," (as opposed to a client-side navigation). For example, navigating from ",(0,n.kt)("inlineCode",{parentName:"li"},"/cart")," that uses ",(0,n.kt)("inlineCode",{parentName:"li"},"app/(shop)/layout.js")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"/blog")," that uses ",(0,n.kt)("inlineCode",{parentName:"li"},"app/(marketing)/layout.js")," will cause a full page load. This ",(0,n.kt)("strong",{parentName:"li"},"only")," applies to multiple root layouts."))))}m.isMDXComponent=!0}}]);