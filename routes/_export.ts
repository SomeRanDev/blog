// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var u=Object.defineProperty;var d=(t,e)=>{for(var i in e)u(t,i,{get:e[i],enumerable:!0})};import*as A from"./_404.tsx";import*as k from"./_app.tsx";import*as D from"./docs.tsx";import*as M from"./index.tsx";var o={};d(o,{default:()=>b});import{Fragment as g,jsx as r,jsxs as l}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as h}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as f}from"aleph/react";function c(t){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},h(),t.components);return l(g,{children:[r(f,{children:r("title",{children:"Get Started - Docs"})}),`
`,r(e.h1,{id:"get-started",children:"Get Started"}),`
`,l(e.p,{children:["Initialize a new project, you can pick a start template with ",r(e.code,{children:"--template"}),` flag, available templates:
`,r(e.code,{children:"[react, react-mdx, api]"})]}),`
`,r(e.pre,{children:r(e.code,{className:"hljs language-bash",children:`deno run -A https://deno.land/x/aleph@1.0.0-beta.18/init.ts
`})})]})}function j(t={}){let{wrapper:e}=Object.assign({},h(),t.components);return e?r(e,Object.assign({},t,{children:r(c,t)})):c(t)}var b=j;var a={};d(a,{default:()=>y});import{Fragment as _,jsx as n,jsxs as s}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as m}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as x}from"aleph/react";function p(t){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",blockquote:"blockquote",em:"em",code:"code",pre:"pre",span:"span"},m(),t.components);return s(_,{children:[n(x,{children:n("title",{children:"About - Docs"})}),`
`,n(e.h1,{id:"about",children:"About"}),`
`,s(e.p,{children:[n(e.strong,{children:"Aleph.js"})," (or ",n(e.strong,{children:"Aleph"})," or ",n(e.strong,{children:"\u05D0"})," or ",n(e.strong,{children:"\u963F\u83B1\u592B"}),", ",n("samp",{children:"\u02C8\u0251\u02D0l\u025Bf"}),`) is a
fullstack framework in `,n(e.a,{href:"https://deno.land",children:"Deno"}),". Inspired by ",n(e.a,{href:"https://nextjs.org",children:"Next.js"}),", ",n(e.a,{href:"https://remix.run",children:"Remix"})," and ",n(e.a,{href:"https://vitejs.dev",children:"Vite"}),"."]}),`
`,s(e.blockquote,{children:[`
`,s(e.p,{children:["The name is taken from the book ",n(e.a,{href:"http://phinnweb.org/links/literature/borges/aleph.html",children:n(e.em,{children:"The Aleph"})})," by ",n(e.strong,{children:"Jorge Luis Borges"}),"."]}),`
`]}),`
`,s(e.p,{children:["Aleph.js is modern framework that doesn't need ",n(e.strong,{children:"webpack"}),` or other bundler
since it uses the `,n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ES Module"}),` syntax during development. Every module only needs
to be compiled once, when a module changes, Aleph.js just needs to re-compile
that single module. There is no time wasted `,n(e.em,{children:"re-bundling"}),` everytime a change is
made. This, along with Hot Module Replacement (`,n(e.strong,{children:"HMR"}),") and ",n(e.strong,{children:"Fast Refresh"}),`,
leads to instant updates in the browser.`]}),`
`,s(e.p,{children:["Aleph.js uses modern tools to build your app. It transpiles code using ",n(e.a,{href:"https://swc.rs",children:"swc"}),` in
WASM with high performance, and bundles modules with `,n(e.a,{href:"https://github.com/evanw/esbuild",children:"esbuild"}),` at optimization
time extremely fast.`]}),`
`,s(e.p,{children:["Aleph.js works on top of ",n(e.strong,{children:"Deno"}),", a ",n(e.em,{children:"simple"}),", ",n(e.em,{children:"modern"})," and ",n(e.em,{children:"secure"}),` runtime for
JavaScript and TypeScript. All dependencies are imported using URLs, and managed
by Deno cache system. No `,n(e.code,{children:"package.json"})," and ",n(e.code,{children:"node_modules"})," directory needed."]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-js",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title function_",children:"test"}),"(",n(e.span,{className:"hljs-params"}),`) {
  `,n(e.span,{className:"hljs-title function_",children:"trace"}),"(",n(e.span,{className:"hljs-string",children:'"Test"'}),`);
}
`]})})]})}function w(t={}){let{wrapper:e}=Object.assign({},m(),t.components);return e?n(e,Object.assign({},t,{children:n(p,t)})):p(t)}var y=w;var R={"/_404":A,"/_app":k,"/docs":D,"/":M,"/docs/get-started":o,"/docs/index":a,depGraph:{"modules":[{"specifier":"./routes\\docs\\get-started.mdx"},{"specifier":"./routes\\docs\\index.mdx"}]}};export{R as default};
