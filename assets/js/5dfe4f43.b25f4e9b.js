"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Forms and Mutations",sidebar_label:"Forms and Mutations",description:"Learn how to handle form submissions and data mutations with Next.js."},o=void 0,s={unversionedId:"app/building-your-application/data-fetching/forms-and-mutations",id:"app/building-your-application/data-fetching/forms-and-mutations",title:"Forms and Mutations",description:"Learn how to handle form submissions and data mutations with Next.js.",source:"@site/docs/02-app/01-building-your-application/02-data-fetching/03-forms-and-mutations.mdx",sourceDirName:"02-app/01-building-your-application/02-data-fetching",slug:"/app/building-your-application/data-fetching/forms-and-mutations",permalink:"/docs/app/building-your-application/data-fetching/forms-and-mutations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/02-data-fetching/03-forms-and-mutations.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Forms and Mutations",sidebar_label:"Forms and Mutations",description:"Learn how to handle form submissions and data mutations with Next.js."},sidebar:"tutorialSidebar",previous:{title:"Data Fetching Patterns",permalink:"/docs/app/building-your-application/data-fetching/patterns"},next:{title:"Rendering",permalink:"/docs/app/building-your-application/rendering/"}},p={},c=[{value:"How Server Actions Work",id:"how-server-actions-work",level:2},{value:"Revalidating Cached Data",id:"revalidating-cached-data",level:2},{value:"Examples",id:"examples",level:2},{value:"Server-only Forms",id:"server-only-forms",level:3},{value:"Revalidating Data",id:"revalidating-data",level:3},{value:"Redirecting",id:"redirecting",level:3},{value:"Form Validation",id:"form-validation",level:3},{value:"Displaying Loading State",id:"displaying-loading-state",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Optimistic Updates",id:"optimistic-updates",level:3},{value:"Setting Cookies",id:"setting-cookies",level:3},{value:"Reading Cookies",id:"reading-cookies",level:3},{value:"Deleting Cookies",id:"deleting-cookies",level:3}],l={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,r.kt)("p",null,"Forms enable you to create and update data in web applications. Next.js provides a powerful way to handle form submissions and data mutations using ",(0,r.kt)("strong",{parentName:"p"},"Server Actions"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/next-forms"},"Form with Loading & Error States")))),(0,r.kt)("h2",{id:"how-server-actions-work"},"How Server Actions Work"),(0,r.kt)("p",null,"With Server Actions, you don't need to manually create API endpoints. Instead, you define asynchronous server functions that can be called directly from your components."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\ud83c\udfa5 Watch:")," Learn more about forms and mutations with the App Router \u2192 ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/dDpZfOQBMaU?si=cJZHlUu_jFhCzHUg"},"YouTube (10 minutes)"),".")),(0,r.kt)("p",null,"Server Actions can be defined in Server Components or called from Client Components. Defining the action in a Server Component allows the form to function without JavaScript, providing progressive enhancement."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Forms calling Server Actions from Server Components can function without JavaScript."),(0,r.kt)("li",{parentName:"ul"},"Forms calling Server Actions from Client Components will queue submissions if JavaScript isn't loaded yet, prioritizing client hydration."),(0,r.kt)("li",{parentName:"ul"},"Server Actions inherit the ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes"},"runtime")," from the page or layout they are used on."),(0,r.kt)("li",{parentName:"ul"},"Server Actions work with fully static routes (including revalidating data with ISR)."))),(0,r.kt)("h2",{id:"revalidating-cached-data"},"Revalidating Cached Data"),(0,r.kt)("p",null,"Server Actions integrate deeply with the Next.js ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/caching"},"caching and revalidation")," architecture. When a form is submitted, the Server Action can update cached data and revalidate any cache keys that should change."),(0,r.kt)("p",null,"Rather than being limited to a single form per route like traditional applications, Server Actions enable having multiple actions per route. Further, the browser does not need to refresh on form submission. In a single network roundtrip, Next.js can return both the updated UI and the refreshed data."),(0,r.kt)("p",null,"View the examples below for ",(0,r.kt)("a",{parentName:"p",href:"#revalidating-data"},"revalidating data from Server Actions"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"server-only-forms"},"Server-only Forms"),(0,r.kt)("p",null,"To create a server-only form, define the Server Action in a Server Component. The action can either be defined inline with the ",(0,r.kt)("inlineCode",{parentName:"p"},'"use server"')," directive at the top of the function, or in a separate file with the directive at the top of the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'export default function Page() {\n    async function create(formData: FormData) {\n        "use server";\n\n        // mutate data\n        // revalidate cache\n    }\n\n    return <form action={create}>...</form>;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.jsx" switcher',filename:'"app/page.jsx"',switcher:!0},'export default function Page() {\n    async function create(formData) {\n        "use server";\n\n        // mutate data\n        // revalidate cache\n    }\n\n    return <form action={create}>...</form>;\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"<form action={create}>")," takes the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/FormData/FormData"},"FormData")," data type. In the example above, the FormData submitted via the HTML ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/HTML/Element/form"},(0,r.kt)("inlineCode",{parentName:"a"},"form"))," is accessible in the server action ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),".")),(0,r.kt)("h3",{id:"revalidating-data"},"Revalidating Data"),(0,r.kt)("p",null,"Server Actions allow you to invalidate the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/caching"},"Next.js Cache")," on demand. You can invalidate an entire route segment with ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/revalidatePath"},(0,r.kt)("inlineCode",{parentName:"a"},"revalidatePath")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/actions.ts" switcher',filename:'"app/actions.ts"',switcher:!0},'"use server";\n\nimport { revalidatePath } from "next/cache";\n\nexport default async function submit() {\n    await submitForm();\n    revalidatePath("/");\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js" switcher',filename:'"app/actions.js"',switcher:!0},'"use server";\n\nimport { revalidatePath } from "next/cache";\n\nexport default async function submit() {\n    await submitForm();\n    revalidatePath("/");\n}\n')),(0,r.kt)("p",null,"Or invalidate a specific data fetch with a cache tag using ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/revalidateTag"},(0,r.kt)("inlineCode",{parentName:"a"},"revalidateTag")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/actions.ts" switcher',filename:'"app/actions.ts"',switcher:!0},'"use server";\n\nimport { revalidateTag } from "next/cache";\n\nexport default async function submit() {\n    await addPost();\n    revalidateTag("posts");\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js" switcher',filename:'"app/actions.js"',switcher:!0},'"use server";\n\nimport { revalidateTag } from "next/cache";\n\nexport default async function submit() {\n    await addPost();\n    revalidateTag("posts");\n}\n')),(0,r.kt)("h3",{id:"redirecting"},"Redirecting"),(0,r.kt)("p",null,"If you would like to redirect the user to a different route after the completion of a Server Action, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/redirect"},(0,r.kt)("inlineCode",{parentName:"a"},"redirect"))," and any absolute or relative URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/actions.ts" switcher',filename:'"app/actions.ts"',switcher:!0},'"use server";\n\nimport { redirect } from "next/navigation";\nimport { revalidateTag } from "next/cache";\n\nexport default async function submit() {\n    const id = await addPost();\n    revalidateTag("posts"); // Update cached posts\n    redirect(`/post/${id}`); // Navigate to new route\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js" switcher',filename:'"app/actions.js"',switcher:!0},'"use server";\n\nimport { redirect } from "next/navigation";\nimport { revalidateTag } from "next/cache";\n\nexport default async function submit() {\n    const id = await addPost();\n    revalidateTag("posts"); // Update cached posts\n    redirect(`/post/${id}`); // Navigate to new route\n}\n')),(0,r.kt)("h3",{id:"form-validation"},"Form Validation"),(0,r.kt)("p",null,"We recommend using HTML validation like ",(0,r.kt)("inlineCode",{parentName:"p"},"required")," and ",(0,r.kt)("inlineCode",{parentName:"p"},'type="email"')," for basic form validation."),(0,r.kt)("p",null,"For more advanced server-side validation, use a schema validation library like ",(0,r.kt)("a",{parentName:"p",href:"https://zod.dev/"},"zod")," to validate the structure of the parsed form data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/actions.ts" switcher',filename:'"app/actions.ts"',switcher:!0},'import { z } from "zod";\n\nconst schema = z.object({\n    // ...\n});\n\nexport default async function submit(formData: FormData) {\n    const parsed = schema.parse({\n        id: formData.get("id"),\n    });\n    // ...\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/actions.js" switcher',filename:'"app/actions.js"',switcher:!0},'import { z } from "zod";\n\nconst schema = z.object({\n    // ...\n});\n\nexport default async function submit(formData) {\n    const parsed = schema.parse({\n        id: formData.get("id"),\n    });\n    // ...\n}\n')),(0,r.kt)("h3",{id:"displaying-loading-state"},"Displaying Loading State"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react-dom/hooks/useFormStatus"},(0,r.kt)("inlineCode",{parentName:"a"},"useFormStatus"))," hook to show a loading state when a form is submitting on the server. The ",(0,r.kt)("inlineCode",{parentName:"p"},"useFormStatus")," hook can only be used as a child of a ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," element using a Server Action."),(0,r.kt)("p",null,"For example, the following submit button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/submit-button.tsx" switcher',filename:'"app/submit-button.tsx"',switcher:!0},'"use client";\n\nimport { useFormStatus } from "react-dom";\n\nexport function SubmitButton() {\n    const { pending } = useFormStatus();\n\n    return (\n        <button type="submit" aria-disabled={pending}>\n            Add\n        </button>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/submit-button.jsx" switcher',filename:'"app/submit-button.jsx"',switcher:!0},'"use client";\n\nimport { useFormStatus } from "react-dom";\n\nexport function SubmitButton() {\n    const { pending } = useFormStatus();\n\n    return (\n        <button type="submit" aria-disabled={pending}>\n            Add\n        </button>\n    );\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<SubmitButton />")," can then be used in a form with a Server Action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'import { SubmitButton } from \'@/app/submit-button\'\n\nexport default async function Home() {\n  return (\n    <form action={...}>\n      <input type="text" name="field-name" />\n      <SubmitButton />\n    </form>\n  )\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.jsx" switcher',filename:'"app/page.jsx"',switcher:!0},'import { SubmitButton } from \'@/app/submit-button\'\n\nexport default async function Home() {\n  return (\n    <form action={...}>\n      <input type="text" name="field-name" />\n      <SubmitButton />\n    </form>\n  )\n}\n')),(0,r.kt)("h3",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"Server Actions can also return ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Glossary/Serialization"},"serializable objects"),". For example, your Server Action might handle errors from creating a new item:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/actions.ts" switcher',filename:'"app/actions.ts"',switcher:!0},'"use server";\n\nexport async function createTodo(prevState: any, formData: FormData) {\n    try {\n        await createItem(formData.get("todo"));\n        return revalidatePath("/");\n    } catch (e) {\n        return { message: "Failed to create" };\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js" switcher',filename:'"app/actions.js"',switcher:!0},'"use server";\n\nexport async function createTodo(prevState, formData) {\n    try {\n        await createItem(formData.get("todo"));\n        return revalidatePath("/");\n    } catch (e) {\n        return { message: "Failed to create" };\n    }\n}\n')),(0,r.kt)("p",null,"Then, from a Client Component, you can read this value and display an error message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/add-form.tsx" switcher',filename:'"app/add-form.tsx"',switcher:!0},'"use client";\n\nimport { useFormState, useFormStatus } from "react-dom";\nimport { createTodo } from "@/app/actions";\n\nconst initialState = {\n    message: null,\n};\n\nfunction SubmitButton() {\n    const { pending } = useFormStatus();\n\n    return (\n        <button type="submit" aria-disabled={pending}>\n            Add\n        </button>\n    );\n}\n\nexport function AddForm() {\n    const [state, formAction] = useFormState(createTodo, initialState);\n\n    return (\n        <form action={formAction}>\n            <label htmlFor="todo">Enter Task</label>\n            <input type="text" id="todo" name="todo" required />\n            <SubmitButton />\n            <p aria-live="polite" className="sr-only">\n                {state?.message}\n            </p>\n        </form>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/add-form.jsx" switcher',filename:'"app/add-form.jsx"',switcher:!0},'"use client";\n\nimport { useFormState, useFormStatus } from "react-dom";\nimport { createTodo } from "@/app/actions";\n\nconst initialState = {\n    message: null,\n};\n\nfunction SubmitButton() {\n    const { pending } = useFormStatus();\n\n    return (\n        <button type="submit" aria-disabled={pending}>\n            Add\n        </button>\n    );\n}\n\nexport function AddForm() {\n    const [state, formAction] = useFormState(createTodo, initialState);\n\n    return (\n        <form action={formAction}>\n            <label htmlFor="todo">Enter Task</label>\n            <input type="text" id="todo" name="todo" required />\n            <SubmitButton />\n            <p aria-live="polite" className="sr-only">\n                {state?.message}\n            </p>\n        </form>\n    );\n}\n')),(0,r.kt)("h3",{id:"optimistic-updates"},"Optimistic Updates"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"useOptimistic")," to optimistically update the UI before the Server Action finishes, rather than waiting for the response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'"use client";\n\nimport { useOptimistic } from "react";\nimport { send } from "./actions";\n\ntype Message = {\n    message: string;\n};\n\nexport function Thread({ messages }: { messages: Message[] }) {\n    const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[]>(\n        messages,\n        (state: Message[], newMessage: string) => [\n            ...state,\n            { message: newMessage },\n        ],\n    );\n\n    return (\n        <div>\n            {optimisticMessages.map((m, k) => (\n                <div key={k}>{m.message}</div>\n            ))}\n            <form\n                action={async (formData: FormData) => {\n                    const message = formData.get("message");\n                    addOptimisticMessage(message);\n                    await send(message);\n                }}\n            >\n                <input type="text" name="message" />\n                <button type="submit">Send</button>\n            </form>\n        </div>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.jsx" switcher',filename:'"app/page.jsx"',switcher:!0},'"use client";\n\nimport { useOptimistic } from "react";\nimport { send } from "./actions";\n\nexport function Thread({ messages }) {\n    const [optimisticMessages, addOptimisticMessage] = useOptimistic(\n        messages,\n        (state, newMessage) => [...state, { message: newMessage }],\n    );\n\n    return (\n        <div>\n            {optimisticMessages.map((m) => (\n                <div>{m.message}</div>\n            ))}\n            <form\n                action={async (formData) => {\n                    const message = formData.get("message");\n                    addOptimisticMessage(message);\n                    await send(message);\n                }}\n            >\n                <input type="text" name="message" />\n                <button type="submit">Send</button>\n            </form>\n        </div>\n    );\n}\n')),(0,r.kt)("h3",{id:"setting-cookies"},"Setting Cookies"),(0,r.kt)("p",null,"You can set cookies inside a Server Action using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/cookies"},(0,r.kt)("inlineCode",{parentName:"a"},"cookies"))," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/actions.ts" switcher',filename:'"app/actions.ts"',switcher:!0},'"use server";\n\nimport { cookies } from "next/headers";\n\nexport async function create() {\n    const cart = await createCart();\n    cookies().set("cartId", cart.id);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js" switcher',filename:'"app/actions.js"',switcher:!0},'"use server";\n\nimport { cookies } from "next/headers";\n\nexport async function create() {\n    const cart = await createCart();\n    cookies().set("cartId", cart.id);\n}\n')),(0,r.kt)("h3",{id:"reading-cookies"},"Reading Cookies"),(0,r.kt)("p",null,"You can read cookies inside a Server Action using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/cookies"},(0,r.kt)("inlineCode",{parentName:"a"},"cookies"))," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/actions.ts" switcher',filename:'"app/actions.ts"',switcher:!0},'"use server";\n\nimport { cookies } from "next/headers";\n\nexport async function read() {\n    const auth = cookies().get("authorization")?.value;\n    // ...\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js" switcher',filename:'"app/actions.js"',switcher:!0},'"use server";\n\nimport { cookies } from "next/headers";\n\nexport async function read() {\n    const auth = cookies().get("authorization")?.value;\n    // ...\n}\n')),(0,r.kt)("h3",{id:"deleting-cookies"},"Deleting Cookies"),(0,r.kt)("p",null,"You can delete cookies inside a Server Action using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/cookies"},(0,r.kt)("inlineCode",{parentName:"a"},"cookies"))," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/actions.ts" switcher',filename:'"app/actions.ts"',switcher:!0},"'use server'\n\nimport { cookies } from 'next/headers'\n\nexport async function delete() {\n  cookies().delete('name')\n  // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js" switcher',filename:'"app/actions.js"',switcher:!0},"'use server'\n\nimport { cookies } from 'next/headers'\n\nexport async function delete() {\n  cookies().delete('name')\n  // ...\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/cookies#deleting-cookies"},"additional examples")," for deleting cookies from Server Actions."))}u.isMDXComponent=!0}}]);