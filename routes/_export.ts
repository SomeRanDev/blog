// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var v=Object.defineProperty;var c=(a,e)=>{for(var g in e)v(a,g,{get:e[g],enumerable:!0})};import*as L from"./_404.tsx";import*as q from"./_app.tsx";import*as $ from"./blog.tsx";import*as U from"./index.tsx";var h={};c(h,{default:()=>H});import{Fragment as _,jsx as s,jsxs as i}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as f}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as N}from"aleph/react";function u(a){let e=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote"},f(),a.components);return i(_,{children:[s(N,{children:s("title",{children:"About"})}),`
`,s(e.h1,{id:"about",children:"About"}),`
`,i(e.p,{children:[`This is a blog documenting the progress of my various projects.
The large majority of which involve the `,s(e.a,{href:"https://haxe.org",children:"Haxe"}),`
programming language.`]}),`
`,i(e.p,{children:[`My ultimate goal is to make a living off of game development; most
of my projects are intended to help me achieve that goal. For example,
my most popular open source project, `,s(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"Reflaxe"}),`,
was created to help me develop a powerful Haxe -> C++ transpiler
that fits with my needs.`]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:[s(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"Reflaxe"}),` is a Haxe framework
for creating compilation targets using macros.`]}),`
`]}),`
`,i(e.p,{children:["Another project of mine is ",s(e.a,{href:"https://github.com/RobertBorghese/Haxe-UnrealEngine5",children:"Haxe-UnrealEngine5"}),`,
an experimental attempt at allowing Haxe to be used in Unreal Engine 5
using the aforementioned `,s(e.a,{href:"https://github.com/RobertBorghese/reflaxe.CPP",children:"Reflaxe/C++"}),`
project.`]}),`
`,i(e.p,{children:[`Finally, I also have a passion for language design, and frequently
try and find creative ways to modify or improve the code I write
through creative macros or language modifications. I ultimately
wish to develop my own programming language, and have made
`,s(e.a,{href:"https://github.com/RobertBorghese/tastyfresh",children:"many"}),`
`,s(e.a,{href:"https://github.com/RobertBorghese/gimmick",children:"attempts"}),`
`,s(e.a,{href:"https://github.com/RobertBorghese/laxe",children:"before"}),"."]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["Check out my ",s(e.a,{href:"https://github.com/RobertBorghese/Haxe-MagicArrayTools",children:"Magic Array Tools"}),`,
a Haxe library that helps generate hyper optimized code from
beautifully chained Array/Iterable extension functions.`]}),`
`]}),`
`,s(e.p,{children:"Thanks for reading this! Hope you enjoy your stay."})]})}function S(a={}){let{wrapper:e}=Object.assign({},f(),a.components);return e?s(e,Object.assign({},a,{children:s(u,a)})):u(a)}var H=S;var d={};c(d,{default:()=>D});import{Fragment as R,jsx as l,jsxs as b}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as k}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as I}from"aleph/react";function x(a){let e=Object.assign({h1:"h1",p:"p",a:"a"},k(),a.components);return b(R,{children:[l(I,{children:l("title",{children:"Reflaxe"})}),`
`,l(e.h1,{id:"reflaxe",children:"Reflaxe"}),`
`,l(e.p,{children:"Reflaxe is a Haxe framework for creating compilation targets using macros."}),`
`,l("hr",{}),`
`,b(e.p,{children:["Check out more information here:",l("br",{}),`
`,l(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"https://github.com/RobertBorghese/reflaxe"})]})]})}function M(a={}){let{wrapper:e}=Object.assign({},k(),a.components);return e?l(e,Object.assign({},a,{children:l(x,a)})):x(a)}var D=M;var m={};c(m,{default:()=>P});import{Fragment as T,jsx as n,jsxs as r}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as j}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as O}from"aleph/react";function y(a){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h2:"h2",a:"a",em:"em",blockquote:"blockquote"},j(),a.components);return r(T,{children:[n(O,{children:n("title",{children:"Reflaxe Devlog 1"})}),`
`,n(e.h1,{id:"reflaxec-devlog-1---callstack",children:"Reflaxe/C++ Devlog #1 - CallStack"}),`
`,r(e.p,{children:["It wasn't until I started delving into the dreaded ",n(e.code,{children:"Dynamic"}),` type\r
that I realized Reflaxe/C++ lacked a proper error reporting system.\r
Throwing an error doesn't even print a message in C++; it just hangs\r
for like a minute then exits with a random 12 digit exit code. So before\r
I continued with implementing a runtime type system with Haxe's `,n(e.code,{children:"Dynamic"}),`,\r
I needed to make runtime errors look nicer and track easier for my own sanity.`]}),`
`,r(e.p,{children:[`The first part was easy. Instead of compiling Haxe throws as native C++\r
throws, I could instead print whatever the Error object was to `,n(e.code,{children:"std::err"}),`\r
(with its Haxe position), run `,n(e.code,{children:"exit(666)"}),`, and call it a day. Simply add a\r
define to decide whether the user wants native throws or these simulated\r
ones and it's no biggie... except for the fact that wouldn't be compatible\r
with try/catch. Ooof.`]}),`
`,n(e.pre,{children:r(e.code,{className:"hljs language-cpp",children:[n(e.span,{className:"hljs-comment",children:"// native throw"}),`\r
`,n(e.span,{className:"hljs-keyword",children:"throw"})," ",n(e.span,{className:"hljs-string",children:'"my runtime error"'}),`;\r
\r
`,n(e.span,{className:"hljs-comment",children:"// stderr throw"}),`\r
std::err << `,n(e.span,{className:"hljs-string",children:'"Main.hx:32: my runtime error"'}),` << std::endl;\r
`,n(e.span,{className:"hljs-built_in",children:"exit"}),"(",n(e.span,{className:"hljs-number",children:"666"}),`);
`]})}),`
`,n(e.p,{children:`It would be nice to only print or display error info on uncaught throws,\r
make it feel like Hashlink with its pretty runtime errors display... but\r
that's just not fesible when generating C++ source code. Oh well, native\r
throws stay for now, I guess. I'll just wrap everything with try { ... }\r
while testing.`}),`
`,n(e.h2,{id:"the-call-stack-problem",children:"The Call Stack Problem"}),`
`,r(e.p,{children:["Speaking of errors, taking a look into it made me realize the ",n(e.code,{children:"haxe.Exception"}),`\r
class wasn't fully implemented for Reflaxe/C++. It had a barebones version made\r
to help things run riiiiight at the start of this project's development, and now\r
was the perfect time to finish it. It was all fine and dandy except for `,n(e.code,{children:"stack"}),`.\r
A field which provided the `,n(e.code,{children:"haxe.CallStack"})," object for the error."]}),`
`,r(e.p,{children:["For those that don't know, the ",n(e.a,{href:"https://api.haxe.org/haxe/CallStack.html",children:n(e.code,{children:"haxe.CallStack"})}),`\r
class is a wonderful debugging class that provides the entire list of calls\r
made up to that point:`]}),`
`,n(e.pre,{children:r(e.code,{className:"hljs language-haxe",children:[n(e.span,{className:"hljs-built_in",children:"trace"}),`(haxe.CallStack.toString(haxe.CallStack.callStack()));
`]})}),`
`,r(e.p,{children:["Similar to the ",n(e.code,{children:"Exception"})," class, ",n(e.code,{children:"haxe.CallStack"}),` had been given a very early\r
implementation to make things work, and then it was completely forgotten about.\r
But `,n(e.em,{children:"unlike"})," ",n(e.code,{children:"Exception"}),", it was not going to be as fun to complete."]}),`
`,r(e.blockquote,{children:[`
`,n(e.p,{children:"Ugh. If only C++ had a built in call stack like every other target."}),`
`]}),`
`,r(e.p,{children:[`The funny part is, it actually does. With the release of C++23, a new class was added:\r
`,n(e.a,{href:"https://en.cppreference.com/w/cpp/utility/basic_stacktrace",children:"std::basic_stacktrace"}),`.\r
Sooooo... I guess time to make C++23 the minimum required version!!`]}),`
`,n(e.p,{children:`Haha, I wish. Making C++17 the minimum version killed me, going any higher\r
and this project would be less compatible then the original Haxe/C++ target. X_X`}),`
`,n(e.p,{children:"So... time for option 2."}),`
`,n(e.h2,{id:"making-a-call-stack",children:"Making a Call Stack"}),`
`,n(e.p,{children:"When you really think about it though, tracking function calls isn't that hard."}),`
`,n(e.p,{children:`Make a class that adds itself to a global stack when constructed,\r
then removes itself using the destructor. When generating the C++,\r
create an instance of that class at the start of every function.`}),`
`,n(e.p,{children:`Pass it the name of the class + function it's being used in and BOOM,\r
you have a global stack you can access at anywhere!`}),`
`,n(e.pre,{children:r(e.code,{className:"hljs language-cpp",children:[n(e.span,{className:"hljs-keyword",children:"struct"})," ",n(e.span,{className:"hljs-title class_",children:"StackTracer"}),` {\r
  `,n(e.span,{className:"hljs-type",children:"static"}),` vector<StackTracer*> Stack;\r
\r
  `,n(e.span,{className:"hljs-built_in",children:"StackTracer"}),`(string cls, string method) {\r
    `,n(e.span,{className:"hljs-comment",children:"// store cls + method"}),`\r
    Stack.`,n(e.span,{className:"hljs-built_in",children:"push_back"}),"(",n(e.span,{className:"hljs-keyword",children:"this"}),`);\r
  }\r
\r
  ~`,n(e.span,{className:"hljs-built_in",children:"StackTracer"}),"() { Stack.",n(e.span,{className:"hljs-built_in",children:"pop_back"}),`(); }\r
}\r
\r
`,n(e.span,{className:"hljs-comment",children:"// ---"}),`\r
\r
`,n(e.span,{className:"hljs-comment",children:"// some function"}),`\r
`,r(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-type",children:"void"})," ",n(e.span,{className:"hljs-title",children:"doSomething"}),n(e.span,{className:"hljs-params",children:"()"})," "]}),`{\r
  StackTracer st; `,n(e.span,{className:"hljs-comment",children:"// will destroy when func done"}),`\r
  `,n(e.span,{className:"hljs-comment",children:"// do stuff"}),`\r
}
`]})}),`
`,n(e.h2,{id:"line-tracking",children:"Line tracking"}),`
`,n(e.p,{children:`However, I soon realized that call stacks do not just require a\r
list of functions, but the exact line they're called from as well.`}),`
`,r(e.p,{children:["Taking a peak into ",n(e.a,{href:"https://github.com/HaxeFoundation/hxcpp/blob/c3e5ab85b0c19688f7494ae44909ed4bfc63bdb7/include/hx/StackContext.h#LL170C72-L170C72",children:"hxcpp"}),`,\r
it appears their solution is to do what I've done so far, but also update\r
the function's stack tracing variable every expression. THAT'S what all those\r
ugly `,n(e.code,{children:"HXLINE"})," do (guess it was kinda obvious)."]}),`
`,n(e.p,{children:`It wouldn't be too hard to implement that as well... and it's not like\r
I have much of a choice, but wooooow it destroys the beautiful Reflaxe/C++\r
code I had so much pride in.`}),`
`,r(e.p,{children:[`So I implemented it. Since Reflaxe/C++ does not use any dependencies, the code\r
is incorporated into the `,n(e.code,{children:"NativeStackTrace"}),` class. A wonderful class made\r
specifically for target-dependent implementations of the call stack.`]}),`
`,r(e.p,{children:["You can check it out ",n(e.a,{href:"https://github.com/RobertBorghese/reflaxe.CPP/blob/main/std/cxx/_std/haxe/NativeStackTrace.hx",children:"here"}),"!"]}),`
`,n(e.h2,{id:"the-haxe-target-call-stack-experience",children:"The Haxe Target Call Stack Experience"}),`
`,r(e.p,{children:[`What was especially interesting was discovering how inconsistent call stacks are\r
for each target. While Haxe provides an enum for structuring the call stack in\r
the form of `,n(e.a,{href:"https://api.haxe.org/haxe/StackItem.html",children:n(e.code,{children:"haxe.StackItem"})}),`, the\r
way each case is used is different for each target.`]}),`
`,r(e.p,{children:["Going to the ",n(e.a,{href:"https://try.haxe.org/#DD7c3724",children:"Haxe Playground"}),` and clicking between\r
each target, you can see how the call stack differs drastically:`]}),`
`,n("img",{src:"/assets/img/reflaxe-cpp/CallStackOutputComparison.png",alt:"Call Stack Output Comparison"}),`
`,n(e.h2,{id:"freedom",children:"Freedom"}),`
`,r(e.p,{children:[`Ultimately, I decided to disable call stack features by default. Reflaxe/C++\r
is a clean code generator first. Only when a certain define is enabled (`,n(e.code,{children:"-D cxx_callstack"}),`)\r
does `,n(e.code,{children:"haxe.CallStack.callStack()"}),` return the stack. If it's not enabled, an\r
empty array is returned and a message is printed:`]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-text",children:`Call stack features must be enabled using -D cxx_callstack
`})}),`
`,n(e.p,{children:`Hopefully this intrinsically teaches users the benefits of keeping the\r
call stack enabled vs disabled.`})]})}function B(a={}){let{wrapper:e}=Object.assign({},j(),a.components);return e?n(e,Object.assign({},a,{children:n(y,a)})):y(a)}var P=B;var p={};c(p,{default:()=>A});import{Fragment as X,jsx as t,jsxs as o}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as C}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as F}from"aleph/react";function w(a){let e=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",span:"span",a:"a"},C(),a.components);return o(X,{children:[t(F,{children:t("title",{children:"Reflaxe/C++"})}),`
`,t(e.h1,{id:"reflaxec",children:"Reflaxe/C++"}),`
`,t(e.p,{children:"Reflaxe/C++ is an alternative C++ target for Haxe that generates dependent-less, GC-less C++17 code."}),`
`,t("hr",{}),`
`,t(e.p,{children:"The goal of this project is simple: create a compilation target for Haxe that generates minimal, human-readable C++ that can be compiled without linking additional libraries and does not rely on any garbage collection system."}),`
`,t(e.p,{children:t(e.strong,{children:"Haxe Code"})}),`
`,t(e.pre,{children:o(e.code,{className:"hljs language-haxe",children:[o(e.span,{className:"hljs-function",children:[t(e.span,{className:"hljs-keyword",children:"function"})," ",t(e.span,{className:"hljs-title",children:"main"})]}),`() {
  `,t(e.span,{className:"hljs-built_in",children:"trace"}),"(",t(e.span,{className:"hljs-string",children:'"Hello world!"'}),`);

  `,t(e.span,{className:"hljs-keyword",children:"var"})," a: ",t(e.span,{className:"hljs-type",children:"Dynamic "}),`= {};
}
`]})}),`
`,t(e.p,{children:t(e.strong,{children:"Reflaxe/C++ Output"})}),`
`,t(e.pre,{children:o(e.code,{className:"hljs language-cpp",children:[o(e.span,{className:"hljs-meta",children:["#",t(e.span,{className:"hljs-keyword",children:"include"})," ",t(e.span,{className:"hljs-string",children:'"Main.h"'})]}),`

`,o(e.span,{className:"hljs-meta",children:["#",t(e.span,{className:"hljs-keyword",children:"include"})," ",t(e.span,{className:"hljs-string",children:"<iostream>"})]}),`

`,t(e.span,{className:"hljs-type",children:"void"})," _Main::Main_Fields_::",t(e.span,{className:"hljs-built_in",children:"main"}),`() {
	std::cout << `,t(e.span,{className:"hljs-string",children:'"Main.hx:2: Hello world!"'}),` << std::endl;
}
`]})}),`
`,o(e.p,{children:["Check out more information here:",t("br",{}),`
`,t(e.a,{href:"https://github.com/RobertBorghese/reflaxe.CPP",children:"https://github.com/RobertBorghese/reflaxe.CPP"})]})]})}function E(a={}){let{wrapper:e}=Object.assign({},C(),a.components);return e?t(e,Object.assign({},a,{children:t(w,a)})):w(a)}var A=E;var re={"/_404":L,"/_app":q,"/blog":$,"/":U,"/blog/index":h,"/blog/reflaxe/index":d,"/blog/reflaxe-cpp/1":m,"/blog/reflaxe-cpp/index":p,depGraph:{"modules":[{"specifier":"./routes\\blog\\index.mdx"},{"specifier":"./routes\\blog\\reflaxe\\index.mdx"},{"specifier":"./routes\\blog\\reflaxe-cpp\\1.mdx"},{"specifier":"./routes\\blog\\reflaxe-cpp\\index.mdx"}]}};export{re as default};
