// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var R=Object.defineProperty;var l=(n,e)=>{for(var p in e)R(n,p,{get:e[p],enumerable:!0})};import*as q from"./_404.tsx";import*as I from"./_app.tsx";import*as U from"./blog.tsx";import*as G from"./index.tsx";var c={};l(c,{default:()=>H});import{Fragment as v,jsx as t,jsxs as r}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as f}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as M}from"aleph/react";function g(n){let e=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote"},f(),n.components);return r(v,{children:[t(M,{children:t("title",{children:"About"})}),`
`,t(e.h1,{id:"about",children:"About"}),`
`,r(e.p,{children:[`This is a blog documenting the progress of my various projects.
The large majority of which involve the `,t(e.a,{href:"https://haxe.org",children:"Haxe"}),`
programming language.`]}),`
`,r(e.p,{children:[`My ultimate goal is to make a living off of game development; most
of my projects are intended to help me achieve that goal. For example,
my most popular open source project, `,t(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"Reflaxe"}),`,
was created to help me develop a powerful Haxe -> C++ transpiler
that fits with my needs.`]}),`
`,r(e.blockquote,{children:[`
`,r(e.p,{children:[t(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"Reflaxe"}),` is a Haxe framework
for creating compilation targets using macros.`]}),`
`]}),`
`,r(e.p,{children:["Another project of mine is ",t(e.a,{href:"https://github.com/RobertBorghese/Haxe-UnrealEngine5",children:"Haxe-UnrealEngine5"}),`,
an experimental attempt at allowing Haxe to be used in Unreal Engine 5
using the aforementioned `,t(e.a,{href:"https://github.com/RobertBorghese/reflaxe.CPP",children:"Reflaxe/C++"}),`
project.`]}),`
`,r(e.p,{children:[`Finally, I also have a passion for language design, and frequently
try and find creative ways to modify or improve the code I write
through creative macros or language modifications. I ultimately
wish to develop my own programming language, and have made
`,t(e.a,{href:"https://github.com/RobertBorghese/tastyfresh",children:"many"}),`
`,t(e.a,{href:"https://github.com/RobertBorghese/gimmick",children:"attempts"}),`
`,t(e.a,{href:"https://github.com/RobertBorghese/laxe",children:"before"}),"."]}),`
`,r(e.blockquote,{children:[`
`,r(e.p,{children:["Check out my ",t(e.a,{href:"https://github.com/RobertBorghese/Haxe-MagicArrayTools",children:"Magic Array Tools"}),`,
a Haxe library that helps generate hyper optimized code from
beautifully chained Array/Iterable extension functions.`]}),`
`]}),`
`,t(e.p,{children:"Thanks for reading this! Hope you enjoy your stay."})]})}function w(n={}){let{wrapper:e}=Object.assign({},f(),n.components);return e?t(e,Object.assign({},n,{children:t(g,n)})):g(n)}var H=w;var h={};l(h,{default:()=>O});import{Fragment as k,jsx as o,jsxs as u}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as b}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as N}from"aleph/react";function x(n){let e=Object.assign({h1:"h1",p:"p",a:"a"},b(),n.components);return u(k,{children:[o(N,{children:o("title",{children:"Reflaxe"})}),`
`,o(e.h1,{id:"reflaxe",children:"Reflaxe"}),`
`,o(e.p,{children:"Reflaxe is a Haxe framework for creating compilation targets using macros."}),`
`,o("hr",{}),`
`,u(e.p,{children:["Check out more information here:",o("br",{}),`
`,o(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"https://github.com/RobertBorghese/reflaxe"})]})]})}function D(n={}){let{wrapper:e}=Object.assign({},b(),n.components);return e?o(e,Object.assign({},n,{children:o(x,n)})):x(n)}var O=D;var m={};l(m,{default:()=>A});import{Fragment as B,jsx as i,jsxs as X}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as y}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as F}from"aleph/react";function j(n){let e=Object.assign({h1:"h1"},y(),n.components);return X(B,{children:[i(F,{children:i("title",{children:"Reflaxe Devlog 1"})}),`
`,i(e.h1,{id:"reflaxe-devlog-1---callstack",children:"Reflaxe Devlog #1 - CallStack"})]})}function P(n={}){let{wrapper:e}=Object.assign({},y(),n.components);return e?i(e,Object.assign({},n,{children:i(j,n)})):j(n)}var A=P;var d={};l(d,{default:()=>T});import{Fragment as $,jsx as a,jsxs as s}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as C}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as E}from"aleph/react";function _(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",span:"span",a:"a"},C(),n.components);return s($,{children:[a(E,{children:a("title",{children:"Reflaxe/C++"})}),`
`,a(e.h1,{id:"reflaxec",children:"Reflaxe/C++"}),`
`,a(e.p,{children:"Reflaxe/C++ is an alternative C++ target for Haxe that generates dependent-less, GC-less C++17 code."}),`
`,a("hr",{}),`
`,a(e.p,{children:"The goal of this project is simple: create a compilation target for Haxe that generates minimal, human-readable C++ that can be compiled without linking additional libraries and does not rely on any garbage collection system."}),`
`,a(e.p,{children:a(e.strong,{children:"Haxe Code"})}),`
`,a(e.pre,{children:s(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-function",children:[a(e.span,{className:"hljs-keyword",children:"function"})," ",a(e.span,{className:"hljs-title",children:"main"})]}),`() {
  `,a(e.span,{className:"hljs-built_in",children:"trace"}),"(",a(e.span,{className:"hljs-string",children:'"Hello world!"'}),`);

  `,a(e.span,{className:"hljs-keyword",children:"var"})," a: ",a(e.span,{className:"hljs-type",children:"Dynamic "}),`= {};
}
`]})}),`
`,a(e.p,{children:a(e.strong,{children:"Reflaxe/C++ Output"})}),`
`,a(e.pre,{children:s(e.code,{className:"hljs language-cpp",children:[s(e.span,{className:"hljs-meta",children:["#",a(e.span,{className:"hljs-keyword",children:"include"})," ",a(e.span,{className:"hljs-string",children:'"Main.h"'})]}),`

`,s(e.span,{className:"hljs-meta",children:["#",a(e.span,{className:"hljs-keyword",children:"include"})," ",a(e.span,{className:"hljs-string",children:"<iostream>"})]}),`

`,a(e.span,{className:"hljs-type",children:"void"})," _Main::Main_Fields_::",a(e.span,{className:"hljs-built_in",children:"main"}),`() {
	std::cout << `,a(e.span,{className:"hljs-string",children:'"Main.hx:2: Hello world!"'}),` << std::endl;
}
`]})}),`
`,s(e.p,{children:["Check out more information here:",a("br",{}),`
`,a(e.a,{href:"https://github.com/RobertBorghese/reflaxe.CPP",children:"https://github.com/RobertBorghese/reflaxe.CPP"})]})]})}function L(n={}){let{wrapper:e}=Object.assign({},C(),n.components);return e?a(e,Object.assign({},n,{children:a(_,n)})):_(n)}var T=L;var re={"/_404":q,"/_app":I,"/blog":U,"/":G,"/blog/index":c,"/blog/reflaxe/index":h,"/blog/reflaxe-cpp/1":m,"/blog/reflaxe-cpp/index":d,depGraph:{"modules":[{"specifier":"./routes\\blog\\index.mdx"},{"specifier":"./routes\\blog\\reflaxe\\index.mdx"},{"specifier":"./routes\\blog\\reflaxe-cpp\\1.mdx"},{"specifier":"./routes\\blog\\reflaxe-cpp\\index.mdx"}]}};export{re as default};
