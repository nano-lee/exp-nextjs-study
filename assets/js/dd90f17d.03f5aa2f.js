"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[5522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,u=d["".concat(l,".").concat(c)]||d[c]||g[c]||i;return n?a.createElement(u,p(p({ref:t},m),{},{components:n})):a.createElement(u,p({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"generateImageMetadata",description:"Learn how to generate multiple images in a single Metadata API special file.",related:{title:"Next Steps",description:"View all the Metadata API options.",links:["app/api-reference/file-conventions/metadata","app/building-your-application/optimizing/metadata"]}},p=void 0,o={unversionedId:"app/api-reference/functions/generate-image-metadata",id:"app/api-reference/functions/generate-image-metadata",title:"generateImageMetadata",description:"Learn how to generate multiple images in a single Metadata API special file.",source:"@site/docs/02-app/02-api-reference/04-functions/generate-image-metadata.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/generate-image-metadata",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/generate-image-metadata",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/generate-image-metadata.mdx",tags:[],version:"current",frontMatter:{title:"generateImageMetadata",description:"Learn how to generate multiple images in a single Metadata API special file.",related:{title:"Next Steps",description:"View all the Metadata API options.",links:["app/api-reference/file-conventions/metadata","app/building-your-application/optimizing/metadata"]}},sidebar:"tutorialSidebar",previous:{title:"fetch",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/fetch"},next:{title:"generateMetadata",permalink:"/nano-nextjs-study/docs/app/api-reference/functions/generate-metadata"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"<code>params</code> (optional)",id:"params-optional",level:4},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:3},{value:"Using external data",id:"using-external-data",level:4},{value:"Version History",id:"version-history",level:2}],m={toc:s},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"generateImageMetadata")," to generate different versions of one image or return multiple images for one route segment. This is useful for when you want to avoid hard-coding metadata values, such as for icons."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"generateImageMetadata")," function accepts the following parameters:"),(0,r.kt)("h4",{id:"params-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"params")," (optional)"),(0,r.kt)("p",null,"An object containing the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/dynamic-routes"},"dynamic route parameters")," object from the root segment down to the segment ",(0,r.kt)("inlineCode",{parentName:"p"},"generateImageMetadata")," is called from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="icon.tsx" switcher',filename:'"icon.tsx"',switcher:!0},"export function generateImageMetadata({\n  params,\n}: {\n  params: { slug: string }\n}) {\n  // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="icon.js" switcher',filename:'"icon.js"',switcher:!0},"export function generateImageMetadata({ params }) {\n  // ...\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Route"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"params")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/shop/icon.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shop")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/shop/[slug]/icon.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shop/1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ slug: '1' }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/shop/[tag]/[item]/icon.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shop/1/2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ tag: '1', item: '2' }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/shop/[...slug]/icon.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shop/1/2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ slug: ['1', '2'] }"))))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"generateImageMetadata")," function should return an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," of objects containing the image's metadata such as ",(0,r.kt)("inlineCode",{parentName:"p"},"alt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"size"),". In addition, each item ",(0,r.kt)("strong",{parentName:"p"},"must")," include an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," value will be passed to the props of the image generating function."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Image Metadata Object"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," (required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ width: number; height: number }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contentType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="icon.tsx" switcher',filename:'"icon.tsx"',switcher:!0},"import { ImageResponse } from 'next/og'\n\nexport function generateImageMetadata() {\n  return [\n    {\n      contentType: 'image/png',\n      size: { width: 48, height: 48 },\n      id: 'small',\n    },\n    {\n      contentType: 'image/png',\n      size: { width: 72, height: 72 },\n      id: 'medium',\n    },\n  ]\n}\n\nexport default function Icon({ id }: { id: string }) {\n  return new ImageResponse(\n    (\n      <div\n        style={{\n          width: '100%',\n          height: '100%',\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          fontSize: 88,\n          background: '#000',\n          color: '#fafafa',\n        }}\n      >\n        Icon {id}\n      </div>\n    )\n  )\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="icon.js" switcher',filename:'"icon.js"',switcher:!0},"import { ImageResponse } from 'next/og'\n\nexport function generateImageMetadata() {\n  return [\n    {\n      contentType: 'image/png',\n      size: { width: 48, height: 48 },\n      id: 'small',\n    },\n    {\n      contentType: 'image/png',\n      size: { width: 72, height: 72 },\n      id: 'medium',\n    },\n  ]\n}\n\nexport default function Icon({ id }) {\n  return new ImageResponse(\n    (\n      <div\n        style={{\n          width: '100%',\n          height: '100%',\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          fontSize: 88,\n          background: '#000',\n          color: '#fafafa',\n        }}\n      >\n        Icon {id}\n      </div>\n    )\n  )\n}\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"using-external-data"},"Using external data"),(0,r.kt)("p",null,"This example uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," object and external data to generate multiple ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/metadata/opengraph-image"},"Open Graph images")," for a route segment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/products/[id]/opengraph-image.tsx" switcher',filename:'"app/products/[id]/opengraph-image.tsx"',switcher:!0},"import { ImageResponse } from 'next/og'\nimport { getCaptionForImage, getOGImages } from '@/app/utils/images'\n\nexport async function generateImageMetadata({\n  params,\n}: {\n  params: { id: string }\n}) {\n  const images = await getOGImages(params.id)\n\n  return images.map((image, idx) => ({\n    id: idx,\n    size: { width: 1200, height: 600 },\n    alt: image.text,\n    contentType: 'image/png',\n  }))\n}\n\nexport default async function Image({\n  params,\n  id,\n}: {\n  params: { id: string }\n  id: number\n}) {\n  const productId = params.id\n  const imageId = id\n  const text = await getCaptionForImage(productId, imageId)\n\n  return new ImageResponse(\n    (\n      <div\n        style={\n          {\n            // ...\n          }\n        }\n      >\n        {text}\n      </div>\n    )\n  )\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/products/[id]/opengraph-image.js" switcher',filename:'"app/products/[id]/opengraph-image.js"',switcher:!0},"import { ImageResponse } from 'next/og'\nimport { getCaptionForImage, getOGImages } from '@/app/utils/images'\n\nexport async function generateImageMetadata({ params }) {\n  const images = await getOGImages(params.id)\n\n  return images.map((image, idx) => ({\n    id: idx,\n    size: { width: 1200, height: 600 },\n    alt: image.text,\n    contentType: 'image/png',\n  }))\n}\n\nexport default async function Image({ params, id }) {\n  const productId = params.id\n  const imageId = id\n  const text = await getCaptionForImage(productId, imageId)\n\n  return new ImageResponse(\n    (\n      <div\n        style={\n          {\n            // ...\n          }\n        }\n      >\n        {text}\n      </div>\n    )\n  )\n}\n")),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"generateImageMetadata")," introduced.")))))}g.isMDXComponent=!0}}]);