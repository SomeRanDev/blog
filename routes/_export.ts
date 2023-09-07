// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var E=Object.defineProperty;var o=(r,e)=>{for(var f in e)E(r,f,{get:e[f],enumerable:!0})};import*as Me from"./_404.tsx";import*as Se from"./_app.tsx";import*as He from"./blog.tsx";import*as Te from"./index.tsx";var m={};o(m,{default:()=>Y,desc:()=>x,title:()=>k});import{Fragment as U,jsx as t,jsxs as i}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as w}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as q}from"aleph/react";import $ from"~/components/BlogMeta.tsx";var k="About",x="This is a blog documenting the progress of my various projects. The large majority of which involve the Haxe programming language.";function b(r){let e=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote"},w(),r.components);return i(U,{children:[t(q,{children:$({title:k,desc:x})}),`
`,t(e.h1,{id:"about",children:"About"}),`
`,i(e.p,{children:[`This is a blog documenting the progress of my various projects.\r
The large majority of which involve the `,t(e.a,{href:"https://haxe.org",children:"Haxe"}),`\r
programming language.`]}),`
`,i(e.p,{children:[`My ultimate goal is to make a living off of game development; most\r
of my projects are intended to help me achieve that goal. For example,\r
my most popular open source project, `,t(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"Reflaxe"}),`,\r
was created to help me develop a powerful Haxe -> C++ transpiler\r
that fits with my needs.`]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:[t(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"Reflaxe"}),` is a Haxe framework\r
for creating compilation targets using macros.`]}),`
`]}),`
`,i(e.p,{children:["Another project of mine is ",t(e.a,{href:"https://github.com/RobertBorghese/Haxe-UnrealEngine5",children:"Haxe-UnrealEngine5"}),`,\r
an experimental attempt at allowing Haxe to be used in Unreal Engine 5\r
using the aforementioned `,t(e.a,{href:"https://github.com/RobertBorghese/reflaxe.CPP",children:"Reflaxe/C++"}),`\r
project.`]}),`
`,i(e.p,{children:[`Finally, I also have a passion for language design, and frequently\r
try and find creative ways to modify or improve the code I write\r
through creative macros or language modifications. I ultimately\r
wish to develop my own programming language, and have made\r
`,t(e.a,{href:"https://github.com/RobertBorghese/tastyfresh",children:"many"}),`\r
`,t(e.a,{href:"https://github.com/RobertBorghese/gimmick",children:"attempts"}),`\r
`,t(e.a,{href:"https://github.com/RobertBorghese/laxe",children:"before"}),"."]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["Check out my ",t(e.a,{href:"https://github.com/RobertBorghese/Haxe-MagicArrayTools",children:"Magic Array Tools"}),`,\r
a Haxe library that helps generate hyper optimized code from\r
beautifully chained Array/Iterable extension functions.`]}),`
`]}),`
`,t(e.p,{children:"Thanks for reading this! Hope you enjoy your stay."})]})}function z(r={}){let{wrapper:e}=Object.assign({},w(),r.components);return e?t(e,Object.assign({},r,{children:t(b,r)})):b(r)}var Y=z;var u={};o(u,{default:()=>se,desc:()=>M,title:()=>C});import{Fragment as J,jsx as s,jsxs as a}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as _}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as K}from"aleph/react";import Q from"~/components/BlogMeta.tsx";import Z from"~/components/BlogSubtext.tsx";var C="Haxe/C++ | Tips for Avoiding GC",M="A breakdown of how to bypass Haxe/C++'s garbage collector and instead use value-types.";function v(r){let e=Object.assign({h1:"h1",p:"p",em:"em",h3:"h3",ul:"ul",li:"li",a:"a",code:"code",h2:"h2",pre:"pre",span:"span"},_(),r.components);return a(J,{children:[s(K,{children:Q({title:C,desc:M})}),`
`,s(e.h1,{id:"haxec--tips-for-avoiding-gc",children:"Haxe/C++ | Tips for Avoiding GC"}),`
`,s(Z,{githubLinks:[{link:"https://github.com/HaxeFoundation/haxe",url:"https://api.github.com/repos/HaxeFoundation/haxe",badgeUrl:"https://github.com/HaxeFoundation/haxe/actions/workflows/main.yml/badge.svg"},{link:"https://github.com/HaxeFoundation/hxcpp",url:"https://api.github.com/repos/HaxeFoundation/hxcpp",badgeUrl:"https://github.com/HaxeFoundation/hxcpp/actions/workflows/main.yml/badge.svg"}],date:"September 5, 2023",author:"Robert Borghese"}),`
`,s(e.h1,{id:"haxec-garbage-collector",children:"Haxe/C++ Garbage Collector"}),`
`,s(e.p,{children:"C++ generated from Haxe uses a garbage collector. If you are wondering how to avoid the garbage collector, you're in the right place!"}),`
`,s(e.p,{children:"Despite how frequently people ask about it, I've found there is a surprising lack of information regarding this topic. To fix this, I've created this page to consolidate everything there is about using value-types in Haxe/C++. Let's get started!"}),`
`,s(e.p,{children:"Please note at the time of writing this, Haxe 4.3 is the latest release and what this article is using. While unlikely, future releases may generate C++ differently, so keep that in mind future people reading this!"}),`
`,s(e.p,{children:s(e.em,{children:"P.S: Shoutout to the guy that linked you this page in response to your question. \u2764\uFE0F"})}),`
`,s(e.h1,{id:"table-of-contents",children:"Table of Contents"}),`
`,s(e.h3,{id:"intro",children:"Intro"}),`
`,a(e.ul,{children:[`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#examples",children:"Examples"})}),`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#your-tools",children:"Your Tools"})}),`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#whats-a-value-type",children:"What's a Value-Type?"})}),`
`]}),`
`,s(e.h3,{id:"value-types-using-nativegen",children:"Value-Types Using @:nativeGen"}),`
`,a(e.ul,{children:[`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#using-nativegen",children:"Using @:nativeGen"})}),`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#a-deeper-look-into-nativegen-restrictions",children:"A Deeper Look Into @:nativeGen Restrictions"})}),`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#use-default-constructors-with-nativegen",children:"Use Default Constructors with @:nativeGen!"})}),`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#storing-a-nativegen-type",children:"Storing a @:nativeGen Type"})}),`
`]}),`
`,s(e.h3,{id:"value-types-without-using-nativegen",children:"Value-Types Without Using @:nativeGen"}),`
`,a(e.ul,{children:[`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#what-does-the-c-look-like-without-nativegen",children:"What Does the C++ Look Like Without @:nativeGen?"})}),`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#customizing-c-type-output",children:"Customizing C++ Type Output"})}),`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#passing-value-types-as-arguments",children:"Passing Value-Types as Arguments"})}),`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#custom-value-type-constructor",children:"Custom Value-Type Constructor"})}),`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#accessing-gc-object-as-value-type",children:"Accessing GC Object as Value-Type"})}),`
`]}),`
`,s(e.h3,{id:"outro",children:"Outro"}),`
`,a(e.ul,{children:[`
`,s(e.li,{children:s(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips#the-end",children:"The End?"})}),`
`]}),`
`,s(e.h1,{id:"examples",children:"Examples"}),`
`,s(e.p,{children:"Here are some examples of Haxe/C++ libraries that use some GC-avoidance tricks! (Feel free to suggest more and I'll add them)"}),`
`,s(e.h3,{id:"raylib-haxe",children:s(e.a,{href:"https://github.com/haxeui/raylib-haxe",children:"Raylib Haxe"})}),`
`,a(e.p,{children:["This ",s(e.a,{href:"https://github.com/haxeui/raylib-haxe/blob/main/RayLib.hx",children:"library's externs"})," for the basic Raylib data-structures like ",s(e.code,{children:"RayVector2"})," are stack-allocated externs."]}),`
`,s(e.h1,{id:"your-tools",children:"Your Tools"}),`
`,s(e.p,{children:"First, let's become familiar with the tools we'll be using. These bypass Haxe's typing system, but if you play your code right there isn't any C++ feature you can't use, including memory management!"}),`
`,s(e.h2,{id:"native-metadata",children:"Native Metadata"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-comment",children:"// Use on class or function"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:native"}),"(name: ",s(e.span,{className:"hljs-type",children:"String"}),`)
`]})}),`
`,s(e.p,{children:"This metadata sets the name that the class or function will use when converted to C++."}),`
`,s(e.h2,{id:"native-generation-metadata",children:"Native Generation Metadata"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-comment",children:"// Use on class"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:nativeGen"}),`
`]})}),`
`,s(e.p,{children:"This metadata removes all reflection capability from a Haxe class, but the C++ output for the class becomes significantly cleaner. The garbage collector is no longer used upon construction."}),`
`,s(e.h2,{id:"c-expression-injector",children:"C++ Expression Injector"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-comment",children:'// Call as function anywhere with "untyped"'}),`\r
`,a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," __",s(e.span,{className:"hljs-title",children:"cpp__"})]}),"(codeString: ",s(e.span,{className:"hljs-type",children:"String"}),`, ...args)
`]})}),`
`,s(e.p,{children:"This function injects C++ code directly at the callsite."}),`
`,s(e.h2,{id:"c-file-injector",children:"C++ File Injector"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-comment",children:"// Use on class"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:headerCode"}),"(code: ",s(e.span,{className:"hljs-type",children:"String"}),`)\r
`,s(e.span,{className:"hljs-meta",children:"@:cppFileCode"}),"(code: ",s(e.span,{className:"hljs-type",children:"String"}),`)
`]})}),`
`,s(e.p,{children:"Injects C++ code at the top level of the header or source file the class is generated in."}),`
`,s(e.h2,{id:"c-class-injector",children:"C++ Class Injector"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-comment",children:"// Use on class"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:headerClassCode"}),"(code: ",s(e.span,{className:"hljs-type",children:"String"}),`)
`]})}),`
`,s(e.p,{children:"Injects C++ within the class generated in the header."}),`
`,s(e.h1,{id:"whats-a-value-type",children:"What's a Value-Type?"}),`
`,s(e.p,{children:"Value-types are types whose instances are allocated on the stack in C++. For example:"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-cpp",children:["MyClass obj; ",s(e.span,{className:"hljs-comment",children:"// stack allocated"}),`\r
MyClass obj2 = obj; `,s(e.span,{className:"hljs-comment",children:"// copied instead of referenced"}),`\r
\r
`,a(e.span,{className:"hljs-function",children:[s(e.span,{className:"hljs-type",children:"void"})," ",s(e.span,{className:"hljs-title",children:"func"}),s(e.span,{className:"hljs-params",children:"(MyClass a)"})," "]}),"{ ",s(e.span,{className:"hljs-comment",children:"/* ... */"}),` }\r
`,s(e.span,{className:"hljs-built_in",children:"func"}),"(obj); ",s(e.span,{className:"hljs-comment",children:"// copied into function"}),`
`]})}),`
`,s(e.p,{children:"Instead of using a garbage collector, stack allocated objects will be deleted the moment their scope ends. This can be better for performance when generating tons of objects frequently since the creation/destruction occurs consistently instead of building up in the GC."}),`
`,s(e.p,{children:'When this article refers to "avoiding Haxe/C++ GC", it is referring to creating, copying, storing, and declaring functions that take value-types.'}),`
`,s(e.h1,{id:"using-nativegen",children:"Using @:nativeGen"}),`
`,a(e.p,{children:["The easiest way to avoid the GC is to use the ",s(e.code,{children:"@:nativeGen"})," on a class. This is very similar to using ",s(e.code,{children:"struct"})," in C# (or ",s(e.code,{children:"@:struct"})," in Haxe/C#), as ",s(e.code,{children:"@:nativeGen"})," class instances are allocated as values."]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:nativeGen"}),`\r
`,s(e.span,{className:"hljs-meta",children:'@:structAccess // ensure dot access uses "." instead of "->"'}),`\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"StackClass"})," "]}),`{\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," value: ",s(e.span,{className:"hljs-type",children:"Int"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"new"})]}),"(v: ",s(e.span,{className:"hljs-type",children:"Int"}),`) {\r
    value = v;\r
  }\r
}\r
\r
`,a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
  `,s(e.span,{className:"hljs-keyword",children:"final"})," sc = ",s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-type",children:"StackClass"}),"(",s(e.span,{className:"hljs-number",children:"123"}),`);\r
  `,s(e.span,{className:"hljs-built_in",children:"trace"}),"(sc.value); ",s(e.span,{className:"hljs-comment",children:"// 123"}),`\r
}
`]})}),`
`,s(e.p,{children:"Here is the abbreviated C++ output of the Haxe code above:"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-cpp",children:[s(e.span,{className:"hljs-comment",children:"// Normally the C++ class would contain tons of reflection/dynamic helper functions and properties..."}),`\r
`,s(e.span,{className:"hljs-comment",children:"// but since we're using @:nativeGen, it only generates the bare minimum."}),`\r
`,s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title class_",children:"StackClass"}),` {\r
`,s(e.span,{className:"hljs-keyword",children:"public"}),`:\r
  `,s(e.span,{className:"hljs-built_in",children:"StackClass"}),"(",s(e.span,{className:"hljs-type",children:"int"}),` v) {\r
    `,s(e.span,{className:"hljs-keyword",children:"this"}),`->value = v;\r
  }\r
\r
  `,s(e.span,{className:"hljs-type",children:"int"}),` value;\r
};\r
\r
`,a(e.span,{className:"hljs-function",children:[s(e.span,{className:"hljs-type",children:"void"})," ",s(e.span,{className:"hljs-title",children:"main"}),s(e.span,{className:"hljs-params",children:"()"})," "]}),`{\r
  StackClass sc = `,s(e.span,{className:"hljs-built_in",children:"StackClass"}),"(",s(e.span,{className:"hljs-number",children:"123"}),`);\r
  ::haxe::Log_obj::`,s(e.span,{className:"hljs-built_in",children:"trace"}),`(sc.value);\r
}
`]})}),`
`,a(e.p,{children:["However, there are some downsides to using ",s(e.code,{children:"@:nativeGen"}),":"]}),`
`,a(e.ul,{children:[`
`,s(e.li,{children:"No reflection information."}),`
`,a(e.li,{children:["Must be wrapped with ",s(e.code,{children:"cpp.Struct"})," to be stored in any Haxe class."]}),`
`,a(e.li,{children:["Cannot extend from classes that don't also use ",s(e.code,{children:"@:nativeGen"}),"."]}),`
`,a(e.li,{children:["There's no guarentee the ",s(e.code,{children:"@:nativeGen"})," objects can be passed to functions from third-party libraries and game frameworks."]}),`
`,a(e.li,{children:["At the current moment, it does ",s(e.a,{href:"https://github.com/HaxeFoundation/haxe/issues/7199",children:"not support interfaces"}),"."]}),`
`]}),`
`,s(e.h1,{id:"a-deeper-look-into-nativegen-restrictions",children:"A Deeper Look Into @:nativeGen Restrictions"}),`
`,a(e.p,{children:["The biggest downside of ",s(e.code,{children:"@:nativeGen"})," is losing access to core Haxe features that may be required for libraries to function."]}),`
`,a(e.p,{children:["For example, if we were using HaxeFlixel and added ",s(e.code,{children:"@:nativeGen"})," to our ",s(e.code,{children:"PlayState"})," class, we would get a C++ error like this:"]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-comment",children:`/*\r
Error: PlayState.cpp\r
\r
./src/PlayState.cpp(39): error C2039: 'create': is not a member of 'flixel::group::FlxTypedGroup_obj'\r
\r
include\\flixel/FlxG.h(18): note: see declaration of 'flixel::group::FlxTypedGroup_obj'\r
\r
./src/PlayState.cpp(78): error C2614: 'PlayState': illegal member initialization: 'FlxState' is not a base or member\r
*/`}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:nativeGen"}),`\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"PlayState"})," ",a(e.span,{className:"hljs-keyword",children:[s(e.span,{className:"hljs-keyword",children:"extends"})," ",s(e.span,{className:"hljs-type",children:"FlxState"})]})," "]}),"{ ",s(e.span,{className:"hljs-comment",children:"/* ... */"}),` }
`]})}),`
`,a(e.p,{children:["So typically we want to use ",s(e.code,{children:"@:nativeGen"})," on smaller data classes that are used internally."]}),`
`,s(e.p,{children:"A great example would be for a class used to pass or return multiple types:"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:nativeGen"}),`\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"Position"})," "]}),`{\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," x: ",s(e.span,{className:"hljs-type",children:"Int "}),"= ",s(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," y: ",s(e.span,{className:"hljs-type",children:"Int "}),"= ",s(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"new"})]}),`() {}\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"static"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"make"})]}),"(x: ",s(e.span,{className:"hljs-type",children:"Int"}),", y: ",s(e.span,{className:"hljs-type",children:"Int"}),`) {\r
    `,s(e.span,{className:"hljs-keyword",children:"final"})," result = ",s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-type",children:"Position"}),`();\r
    result.x = x;\r
    result.y = y;\r
    `,s(e.span,{className:"hljs-keyword",children:"return"}),` result;\r
  }\r
}\r
\r
`,a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"getCoords"})]}),"(): ",s(e.span,{className:"hljs-type",children:"Position "}),`{\r
  `,s(e.span,{className:"hljs-comment",children:"// ... run code to get x/y"}),`\r
\r
  `,s(e.span,{className:"hljs-comment",children:"// Return data in stack-allocated object."}),`\r
  `,s(e.span,{className:"hljs-comment",children:"// Significantly more optimal than a Haxe anonymous structure."}),`\r
  `,s(e.span,{className:"hljs-keyword",children:"return"}),` Position.make(_x, _y);\r
}
`]})}),`
`,s(e.h1,{id:"use-default-constructors-with-nativegen",children:"Use Default Constructors with @:nativeGen!"}),`
`,a(e.p,{children:["Note with the code above, the ",s(e.code,{children:"Position"})," type has a default constructor AND a static function to construct with arguments. Value-types need a default value when uninitialized in C++, which may happen with your ",s(e.code,{children:"@:nativeGen"})," type in the generated C++."]}),`
`,a(e.p,{children:["As a result, it is a good practice to always provide a default constructor for your ",s(e.code,{children:"@:nativeGen"})," class!"]}),`
`,a(e.p,{children:["If you still really want your constructor to have arguments, you can use ",s(e.code,{children:"@:headerClassCode"})," to add the default constructor. Just make sure to properly initialize the class variables if possible."]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:nativeGen"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:headerClassCode"}),"(",s(e.span,{className:"hljs-string",children:'"Position(): x(0), y(0) {}"'}),`)\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"Position"})," "]}),`{\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," x: ",s(e.span,{className:"hljs-type",children:"Int "}),"= ",s(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," y: ",s(e.span,{className:"hljs-type",children:"Int "}),"= ",s(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"new"})]}),"(_x: ",s(e.span,{className:"hljs-type",children:"Int"}),", _y: ",s(e.span,{className:"hljs-type",children:"Int"}),`) { x = _x; y = _y; }\r
}
`]})}),`
`,a(e.p,{children:["We can shorten our ",s(e.code,{children:"Position"})," class even more if we use ",s(e.code,{children:"@:structInit"}),". Just note that ",s(e.code,{children:"@:structInit"})," will only add an argument constructor, so you'll still need to include a default one using ",s(e.code,{children:"@:headerClassCode"}),"."]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:nativeGen"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:structInit"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:headerClassCode"}),"(",s(e.span,{className:"hljs-string",children:'"Position(): x(0), y(0) {}"'}),`)\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"Position"})," "]}),`{\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," x: ",s(e.span,{className:"hljs-type",children:"Int "}),"= ",s(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," y: ",s(e.span,{className:"hljs-type",children:"Int "}),"= ",s(e.span,{className:"hljs-number",children:"0"}),`;\r
}
`]})}),`
`,s(e.h1,{id:"storing-a-nativegen-type",children:"Storing a @:nativeGen Type"}),`
`,a(e.p,{children:["If you want to store your ",s(e.code,{children:"@:nativeGen"})," value type anywhere outside of a function, you'll need to wrap if in ",s(e.code,{children:"cpp.Struct"})," if it's being stored in a normal Haxe type. This includes:"]}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Passing to ",s(e.code,{children:"Dynamic"})]}),`
`,a(e.li,{children:["Storing in ",s(e.code,{children:"Array"})," or ",s(e.code,{children:"Map"})]}),`
`,a(e.li,{children:["Storing as class variable in non-",s(e.code,{children:"@:nativeGen"})," type"]}),`
`]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:nativeGen"}),`\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"Position"})," "]}),`{\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," x: ",s(e.span,{className:"hljs-type",children:"Int "}),"= ",s(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," y: ",s(e.span,{className:"hljs-type",children:"Int "}),"= ",s(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"new"})]}),`() {}\r
}\r
\r
`,s(e.span,{className:"hljs-comment",children:"// A Haxe-compatible class"}),`\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"HaxeObject"})," "]}),`{\r
  `,s(e.span,{className:"hljs-comment",children:'// using just "Position" would break C++ compilation'}),`\r
  `,s(e.span,{className:"hljs-keyword",children:"var"})," pos: ",s(e.span,{className:"hljs-type",children:"cpp"}),`.Struct<Position>;\r
\r
  `,s(e.span,{className:"hljs-comment",children:`// Similar to above, make sure it's an array of "cpp.Struct"`}),`\r
  `,s(e.span,{className:"hljs-keyword",children:"var"})," history: ",s(e.span,{className:"hljs-type",children:"Array"}),`<cpp.Struct<Position>>;\r
\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"new"})]}),"(x: ",s(e.span,{className:"hljs-type",children:"Int"}),", y: ",s(e.span,{className:"hljs-type",children:"Int"}),`) {\r
    `,s(e.span,{className:"hljs-comment",children:"// Assign a @:nativeGen object to a cpp.Struct to convert it"}),`\r
    pos = `,s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-type",children:"Position"}),`();\r
    pos.x = x;\r
    pos.y = y;\r
  }\r
}
`]})}),`
`,a(e.p,{children:["Long story short, ",s(e.code,{children:"cpp.Struct"}),' will "Haxe-ify" a C++ object by wrapping it with ',s(e.code,{children:"Dynamic"}),". Rest assured GC is NOT used with ",s(e.code,{children:"cpp.Struct"}),", it will still destruct like you would expect a C++ stack value to."]}),`
`,a(e.p,{children:["Unfortunately, there is still some overhead wrapping with ",s(e.code,{children:"cpp.Struct"}),". It requires copying the value and minor processing. It's negligible, but you should still avoid using ",s(e.code,{children:"cpp.Struct"})," if you can."]}),`
`,s(e.p,{children:"And that's that!"}),`
`,s(e.h1,{id:"what-does-the-c-look-like-without-nativegen",children:"What Does the C++ Look Like Without @:nativeGen?"}),`
`,a(e.p,{children:["Now, let's focus on options without using ",s(e.code,{children:"@:nativeGen"}),". We can still manage value objects for a class without losing its capacity for generating GC objects and reflection, but it's a bit more work."]}),`
`,s(e.p,{children:"Given a basic Haxe class:"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-keyword",children:"package"}),` mypack;\r
\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClass"})," "]}),`{\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," value: ",s(e.span,{className:"hljs-type",children:"Int"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"new"})]}),"(v: ",s(e.span,{className:"hljs-type",children:"Int"}),`) {\r
    `,s(e.span,{className:"hljs-built_in",children:"trace"}),"(",a(e.span,{className:"hljs-string",children:["'Constructed with ",s(e.span,{className:"hljs-subst",children:`$v');\r
    value = v;\r
  }`}),`\r
}
`]})]})}),`
`,s(e.p,{children:"The C++ generated will look something like this:"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-cpp",children:[s(e.span,{className:"hljs-comment",children:"// Haxe package dictates the namespace the class will be wrapped in."}),`\r
`,s(e.span,{className:"hljs-keyword",children:"namespace"}),` mypack {\r
\r
  `,s(e.span,{className:"hljs-comment",children:`// "MyClass" acts as an alias for implementation wrapped with Haxe's GC pointer class.`}),`\r
  `,s(e.span,{className:"hljs-keyword",children:"typedef"}),` ::hx::ObjectPtr<MyClass_obj> MyClass;\r
\r
  `,s(e.span,{className:"hljs-comment",children:'// Implementation of MyClass is called "MyClass_obj".'}),`\r
  `,s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title class_",children:"MyClass_obj"})," : ",s(e.span,{className:"hljs-keyword",children:"public"}),` ::hx::Object {\r
  `,s(e.span,{className:"hljs-keyword",children:"public"}),`:\r
    `,s(e.span,{className:"hljs-built_in",children:"MyClass_obj"}),"(); ",s(e.span,{className:"hljs-comment",children:"// default constructor always created"}),`\r
    `,s(e.span,{className:"hljs-type",children:"void"})," __construct(",s(e.span,{className:"hljs-type",children:"int"})," num); ",s(e.span,{className:"hljs-comment",children:'// function "new" renamed to __construct'}),`\r
\r
    `,s(e.span,{className:"hljs-comment",children:"// other functions/variables are compiled pretty normally"}),`\r
    `,s(e.span,{className:"hljs-type",children:"int"}),` value;\r
\r
    `,s(e.span,{className:"hljs-comment",children:"// ... and also like 20 extra lines of helper functions for reflection and GC features."}),`\r
  };\r
}
`]})}),`
`,s(e.h1,{id:"customizing-c-type-output",children:"Customizing C++ Type Output"}),`
`,a(e.p,{children:["Ahh! So to create a value type, just use ",s(e.code,{children:"MyClass_obj"}),"!"]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
  `,s(e.span,{className:"hljs-keyword",children:"final"})," obj = ",s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj()"'}),`);\r
  `,s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"{0}.__construct({1})"'}),", obj, ",s(e.span,{className:"hljs-number",children:"123"}),`);\r
}
`]})}),`
`,s(e.p,{children:"Well... not quite... If you run this, you will get:"}),`
`,s(e.pre,{children:s(e.code,{className:"hljs language-text",children:`error C2039: '__construct': is not a member of 'Dynamic'
`})}),`
`,a(e.p,{children:["This is because Haxe doesn't know what type ",s(e.code,{children:"obj"})," should be, so it defaults to using ",s(e.code,{children:"Dynamic"}),"."]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-cpp",children:["::Dynamic obj = ::mypack::",s(e.span,{className:"hljs-built_in",children:"MyClass_obj"}),`();\r
obj.__construct(`,s(e.span,{className:"hljs-number",children:"123"}),`);
`]})}),`
`,a(e.p,{children:[s(e.code,{children:"Dynamic"})," is implemented in the hxcpp library and works just like how it does in Haxe. It's meant to store any object and use reflection to access its properties. Though, our value-type object does not have access to reflection capabilities (and also ",s(e.code,{children:"Dynamic"})," is slow), so we need to avoid it!"]}),`
`,a(e.p,{children:["You may think we simply need to annotate ",s(e.code,{children:"obj"})," with ",s(e.code,{children:"MyClass"}),', but keep in mind: "MyClass" in C++ actually refers to ',s(e.code,{children:"::hx::ObjectPtr<MyClass_obj>"}),". So this won't work:"]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-comment",children:"// error C2440: 'initializing': cannot convert from 'mypack::MyClass_obj' to 'hx::ObjectPtr<mypack::MyClass_obj>'"}),`\r
`,s(e.span,{className:"hljs-keyword",children:"final"})," obj: ",s(e.span,{className:"hljs-type",children:"MyClass "}),"= ",s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj()"'}),`);
`]})}),`
`,s(e.p,{children:"But how do we have the value type be generated??"}),`
`,a(e.p,{children:["Simple! Let's use ",s(e.code,{children:"@:native"}),"!"]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:native"}),"(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj"'}),`)\r
`,s(e.span,{className:"hljs-keyword",children:"extern"})," ",a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClassValue"})," "]}),`{}
`]})}),`
`,a(e.p,{children:["We use ",s(e.code,{children:"extern"})," here so the class doesn't actually generate anything in C++. But it can still be used to place our custom C++ type anywhere we want in Haxe!"]}),`
`,s(e.p,{children:"Here's a working example of everything so far:"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-keyword",children:"package"}),` mypack;\r
\r
`,s(e.span,{className:"hljs-comment",children:"// Compiles successfully in C++!"}),`\r
`,s(e.span,{className:"hljs-comment",children:"// Prints:"}),`\r
`,s(e.span,{className:"hljs-comment",children:"//   Constructed with 123"}),`\r
\r
`,a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
  `,s(e.span,{className:"hljs-keyword",children:"final"})," obj: ",s(e.span,{className:"hljs-type",children:"MyClassValue "}),"= ",s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj()"'}),`);\r
  `,s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"{0}.__construct({1})"'}),", obj, ",s(e.span,{className:"hljs-number",children:"123"}),`);\r
}\r
\r
`,s(e.span,{className:"hljs-meta",children:"@:native"}),"(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj"'}),`)\r
`,s(e.span,{className:"hljs-keyword",children:"extern"})," ",a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClassValue"})," "]}),`{}\r
\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClass"})," "]}),`{\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," value: ",s(e.span,{className:"hljs-type",children:"Int"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"new"})]}),"(v: ",s(e.span,{className:"hljs-type",children:"Int"}),`) {\r
    `,s(e.span,{className:"hljs-built_in",children:"trace"}),"(",a(e.span,{className:"hljs-string",children:["'Constructed with ",s(e.span,{className:"hljs-subst",children:`$v');\r
    value = v;\r
  }`}),`\r
}
`]})]})}),`
`,s(e.h1,{id:"passing-value-types-as-arguments",children:"Passing Value-Types as Arguments"}),`
`,s(e.p,{children:'So far, so good! The cool part is this "Value" type can be used for function arguments too:'}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"copyValue"})]}),"(obj: ",s(e.span,{className:"hljs-type",children:"MyClassValue"}),`) {\r
  `,s(e.span,{className:"hljs-built_in",children:"trace"}),"(",a(e.span,{className:"hljs-string",children:["'obj copied with value ",s(e.span,{className:"hljs-subst",children:"${obj.value}"}),"'"]}),`);\r
}
`]})}),`
`,s(e.p,{children:"Oh wait... uh-oh..."}),`
`,s(e.pre,{children:s(e.code,{className:"hljs language-text",children:`mypack.MyClassValue has no field value
`})}),`
`,a(e.p,{children:[`Our "value" class representation doesn't have its class's fields. We could convert it to an `,s(e.code,{children:"abstract"})," and use ",s(e.code,{children:"@:forward"}),"... except ",s(e.code,{children:"abstract"})," doesn't support ",s(e.code,{children:"@:native"})," (yet?)."]}),`
`,s(e.p,{children:"So... what if we just extend from the original class?"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:native"}),"(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj"'}),`)\r
`,s(e.span,{className:"hljs-keyword",children:"extern"})," ",a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClassValue"})," ",a(e.span,{className:"hljs-keyword",children:[s(e.span,{className:"hljs-keyword",children:"extends"})," ",s(e.span,{className:"hljs-type",children:"MyClass"})]})," "]}),`{}
`]})}),`
`,a(e.p,{children:["This works! The only downside is ",s(e.code,{children:"MyClass"})," can now be assigned to ",s(e.code,{children:"MyClassValue"})," when they should be incompatible, but we're just not going to worry about that."]}),`
`,s(e.p,{children:'Now when I say "this works", I mean it passes the Haxe typer checker. But C++ still giving us some trouble:'}),`
`,s(e.pre,{children:s(e.code,{className:"hljs language-text",children:`error C2819: type 'mypack::MyClass_obj' does not have an overloaded member 'operator ->'\r
note: did you intend to use '.' instead?
`})}),`
`,a(e.p,{children:["This is because Haxe generates dot-access as ",s(e.code,{children:"->"}),". So it's generating ",s(e.code,{children:"obj->value"})," when we want ",s(e.code,{children:"obj.value"}),". To fix this, we use the ",s(e.code,{children:"@:structAccess"})," metadata on the class to tell the compiler to use ",s(e.code,{children:"."}),"."]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:native"}),"(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj"'}),`)\r
`,s(e.span,{className:"hljs-meta",children:"@:structAccess"}),`\r
`,s(e.span,{className:"hljs-keyword",children:"extern"})," ",a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClassValue"})," ",a(e.span,{className:"hljs-keyword",children:[s(e.span,{className:"hljs-keyword",children:"extends"})," ",s(e.span,{className:"hljs-type",children:"MyClass"})]})," "]}),`{}
`]})}),`
`,s(e.p,{children:"We hit compile and.... another C++ error:"}),`
`,s(e.pre,{children:s(e.code,{className:"hljs language-text",children:`error C2039: 'MyClass_obj': is not a member of 'mypack'
`})}),`
`,a(e.p,{children:["Long story short, the header file where ",s(e.code,{children:"copyValue"})," function is defined does not have ",s(e.code,{children:"MyClass"}),` "#included", so it doesn't know about it. Once again, this is not a problem as Haxe has a solution for this!`]}),`
`,a(e.p,{children:["Using the ",s(e.code,{children:"@:include"})," metadata, we can tell the Haxe compiler to use an include statement whenever the type is compiled in a file."]}),`
`,a(e.p,{children:["The generated C++ should match the same path as the package -> Haxe module, so in this case the header should be located at ",s(e.code,{children:"mypack/MyClass.h"}),"."]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:native"}),"(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj"'}),`)\r
`,s(e.span,{className:"hljs-meta",children:"@:structAccess"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:include"}),"(",s(e.span,{className:"hljs-string",children:'"mypack/MyClass.h"'}),`)\r
`,s(e.span,{className:"hljs-keyword",children:"extern"})," ",a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClassValue"})," ",a(e.span,{className:"hljs-keyword",children:[s(e.span,{className:"hljs-keyword",children:"extends"})," ",s(e.span,{className:"hljs-type",children:"MyClass"})]})," "]}),`{}
`]})}),`
`,s(e.p,{children:"NOOOW this finally compiles:"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-keyword",children:"package"}),` mypack;\r
\r
`,s(e.span,{className:"hljs-comment",children:"// Prints: "}),`\r
`,s(e.span,{className:"hljs-comment",children:"//   Constructed with 123"}),`\r
`,s(e.span,{className:"hljs-comment",children:'//   obj copied with value 123"'}),`\r
`,a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
  `,s(e.span,{className:"hljs-keyword",children:"final"})," obj: ",s(e.span,{className:"hljs-type",children:"MyClassValue "}),"= ",s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj()"'}),`);\r
  `,s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"{0}.__construct({1})"'}),", obj, ",s(e.span,{className:"hljs-number",children:"123"}),`);\r
  copyValue(obj);\r
}\r
\r
`,a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"copyValue"})]}),"(obj: ",s(e.span,{className:"hljs-type",children:"MyClassValue"}),`) {\r
  `,s(e.span,{className:"hljs-built_in",children:"trace"}),"(",a(e.span,{className:"hljs-string",children:["'obj copied with value ",s(e.span,{className:"hljs-subst",children:"${obj.value}"}),"'"]}),`);\r
}\r
\r
`,s(e.span,{className:"hljs-meta",children:"@:native"}),"(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj"'}),`)\r
`,s(e.span,{className:"hljs-meta",children:"@:structAccess"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:include"}),"(",s(e.span,{className:"hljs-string",children:'"mypack/MyClass.h"'}),`)\r
`,s(e.span,{className:"hljs-keyword",children:"extern"})," ",a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClassValue"})," ",a(e.span,{className:"hljs-keyword",children:[s(e.span,{className:"hljs-keyword",children:"extends"})," ",s(e.span,{className:"hljs-type",children:"MyClass"})]})," "]}),`{}\r
\r
`,a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClass"})," "]}),`{\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"var"})," value: ",s(e.span,{className:"hljs-type",children:"Int"}),`;\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"new"})]}),"(v: ",s(e.span,{className:"hljs-type",children:"Int"}),`) {\r
    `,s(e.span,{className:"hljs-built_in",children:"trace"}),"(",a(e.span,{className:"hljs-string",children:["'Constructed with ",s(e.span,{className:"hljs-subst",children:`$v');\r
    value = v;\r
  }`}),`\r
}
`]})]})}),`
`,s(e.h1,{id:"custom-value-type-constructor",children:"Custom Value-Type Constructor"}),`
`,a(e.p,{children:["For convenience, let's add a function to generate our value-type at any time. We can add an ",s(e.code,{children:"extern inline"})," function to our ",s(e.code,{children:"extern"}),` value class. The implementation will be always be inlined so we don't have to worry about the value being "copied" out of the constructing function:`]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-meta",children:"@:native"}),"(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj"'}),`)\r
`,s(e.span,{className:"hljs-meta",children:"@:structAccess"}),`\r
`,s(e.span,{className:"hljs-meta",children:"@:include"}),"(",s(e.span,{className:"hljs-string",children:'"mypack/MyClass.h"'}),`)\r
`,s(e.span,{className:"hljs-keyword",children:"extern"})," ",a(e.span,{className:"hljs-title class_",children:[s(e.span,{className:"hljs-keyword",children:"class"})," ",s(e.span,{className:"hljs-title",children:"MyClassValue"})," ",a(e.span,{className:"hljs-keyword",children:[s(e.span,{className:"hljs-keyword",children:"extends"})," ",s(e.span,{className:"hljs-type",children:"MyClass"})]})," "]}),`{\r
  `,s(e.span,{className:"hljs-keyword",children:"public"})," ",s(e.span,{className:"hljs-keyword",children:"static"})," ",s(e.span,{className:"hljs-keyword",children:"extern"})," ",s(e.span,{className:"hljs-keyword",children:"inline"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"make"})]}),"(v: ",s(e.span,{className:"hljs-type",children:"Int"}),"): ",s(e.span,{className:"hljs-type",children:"MyClassValue "}),`{\r
    `,s(e.span,{className:"hljs-keyword",children:"final"})," result: ",s(e.span,{className:"hljs-type",children:"MyClassValue "}),"= ",s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"::mypack::MyClass_obj()"'}),`);\r
    `,s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"{0}.__construct({1})"'}),`, result, v);\r
    `,s(e.span,{className:"hljs-keyword",children:"return"}),` result;\r
  }\r
}
`]})}),`
`,a(e.p,{children:["Now it's just a matter of calling ",s(e.code,{children:"make"}),"!"]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
  `,s(e.span,{className:"hljs-keyword",children:"final"})," obj = MyClassValue.make(",s(e.span,{className:"hljs-number",children:"123"}),`);\r
  copyValue(obj);\r
}
`]})}),`
`,s(e.h1,{id:"accessing-gc-object-as-value-type",children:"Accessing GC Object as Value-Type"}),`
`,s(e.p,{children:"Let's say you have a normal Haxe/C++ that's managed by the GC, and you want to dereference it and get the value-type? Simple!"}),`
`,a(e.p,{children:[s(e.code,{children:"hx::ObjectPtr"})," has a function in C++ called ",s(e.code,{children:"GetPtr()"})," that returns the underlying raw pointer. Dereference that, and you can make a value copy."]}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-keyword",children:"final"})," obj = ",s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-type",children:"MyClass"}),"(",s(e.span,{className:"hljs-number",children:"123"}),"); ",s(e.span,{className:"hljs-comment",children:"// construct normal object"}),`\r
`,s(e.span,{className:"hljs-keyword",children:"final"})," objValue: ",s(e.span,{className:"hljs-type",children:"MyClassValue "}),"= ",s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"(*{0}.GetPtr())"'}),", obj); ",s(e.span,{className:"hljs-comment",children:"// deref"}),`\r
copyValue(objValue); `,s(e.span,{className:"hljs-comment",children:"// compiles in C++!"}),`
`]})}),`
`,s(e.p,{children:"If you want, we could add a static extension function to our project to make this cleaner:"}),`
`,s(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[s(e.span,{className:"hljs-comment",children:"// ValueHelpers.hx"}),`\r
`,s(e.span,{className:"hljs-keyword",children:"extern"})," ",s(e.span,{className:"hljs-keyword",children:"inline"})," ",a(e.span,{className:"hljs-title function_",children:[s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title",children:"asValue"}),"<",s(e.span,{className:"hljs-title",children:"T"}),">"]}),"(obj: ",s(e.span,{className:"hljs-type",children:"T"}),`) {\r
  `,s(e.span,{className:"hljs-keyword",children:"return"})," ",s(e.span,{className:"hljs-keyword",children:"untyped"})," __cpp__(",s(e.span,{className:"hljs-string",children:'"(*{0}.GetPtr())"'}),`, obj);\r
}\r
\r
`,s(e.span,{className:"hljs-comment",children:"// mypack/MyClass.hx"}),`\r
`,s(e.span,{className:"hljs-keyword",children:"using"}),` ValueHelpers;\r
\r
`,s(e.span,{className:"hljs-keyword",children:"final"})," obj = ",s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-type",children:"MyClass"}),"(",s(e.span,{className:"hljs-number",children:"123"}),`);\r
`,s(e.span,{className:"hljs-keyword",children:"final"})," objValue: ",s(e.span,{className:"hljs-type",children:"MyClassValue "}),`= obj.asValue();
`]})}),`
`,s(e.h1,{id:"the-end",children:"The End?"}),`
`,a(e.p,{children:["This page is a work in progress! Want to suggest additional material? Did I make a mistake? Open an issue on this blog's ",s(e.a,{href:"https://github.com/RobertBorghese/blog",children:"Github page"})," or leave a comment below!"]}),`
`,s(e.p,{children:"Thanks for reading!"})]})}function ee(r={}){let{wrapper:e}=Object.assign({},_(),r.components);return e?s(e,Object.assign({},r,{children:s(v,r)})):v(r)}var se=ee;var j={};o(j,{default:()=>te,desc:()=>I,title:()=>T});import{Fragment as ne,jsx as d,jsxs as ae}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as H}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as le}from"aleph/react";import re from"~/components/BlogMeta.tsx";import"~/components/GithubButton.tsx";var T="Haxe Articles",I="Here's a list of one-shot blogs/pages/tutorials regarding Haxe.";function S(r){let e=Object.assign({h1:"h1",p:"p",a:"a"},H(),r.components);return ae(ne,{children:[d(le,{children:re({title:T,desc:I})}),`
`,d(e.h1,{id:"haxe-articles",children:"Haxe Articles"}),`
`,d(e.p,{children:d(e.a,{href:"/blog/haxe/hxcpp_no_gc_tips",children:"Haxe/C++ | Tips for Avoiding GC"})})]})}function ce(r={}){let{wrapper:e}=Object.assign({},H(),r.components);return e?d(e,Object.assign({},r,{children:d(S,r)})):S(r)}var te=ce;var y={};o(y,{default:()=>ue,desc:()=>R,title:()=>A});import{Fragment as ie,jsx as h,jsxs as he}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as P}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as oe}from"aleph/react";import de from"~/components/BlogMeta.tsx";import pe from"~/components/GithubButton.tsx";var A="About Reflaxe",R="Reflaxe is a Haxe framework for creating compilation targets using macros.";function G(r){let e=Object.assign({h1:"h1",p:"p"},P(),r.components);return he(ie,{children:[h(oe,{children:de({title:A,desc:R})}),`
`,h(e.h1,{id:"reflaxe",children:"Reflaxe"}),`
`,h(e.p,{children:"Reflaxe is a Haxe framework for creating compilation targets using macros."}),`
`,h("hr",{}),`
`,h(e.p,{children:"Check out more information here:"}),`
`,h(pe,{link:"https://github.com/RobertBorghese/reflaxe",url:"https://api.github.com/repos/RobertBorghese/reflaxe",badgeUrl:"https://github.com/RobertBorghese/reflaxe/actions/workflows/test.yml/badge.svg"})]})}function me(r={}){let{wrapper:e}=Object.assign({},P(),r.components);return e?h(e,Object.assign({},r,{children:h(G,r)})):G(r)}var ue=me;var g={};o(g,{default:()=>be,desc:()=>V,title:()=>F});import{Fragment as je,jsx as n,jsxs as l}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as O}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as ye}from"aleph/react";import ge from"~/components/BlogMeta.tsx";import Ne from"~/components/BlogSubtext.tsx";var F="Reflaxe/C++ Devlog 1 - CallStack",V="A breakdown of the not-so-tedious process of making a call stack for my Haxe to C++ transpiler.";function D(r){let e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",span:"span",a:"a",em:"em",blockquote:"blockquote"},O(),r.components);return l(je,{children:[n(ye,{children:ge({title:F,desc:V})}),`
`,n(e.h1,{id:"reflaxec-devlog-1---callstack",children:"Reflaxe/C++ Devlog #1 - CallStack"}),`
`,n(Ne,{githubLinks:[{link:"https://github.com/RobertBorghese/reflaxe.CPP",url:"https://api.github.com/repos/RobertBorghese/reflaxe.CPP",badgeUrl:"https://github.com/RobertBorghese/reflaxe.CPP/actions/workflows/main.yml/badge.svg"}],date:"May 15, 2023",author:"Robert Borghese"}),`
`,n(e.h2,{id:"intro",children:"Intro"}),`
`,l(e.p,{children:["It wasn't until I started delving into the dreaded ",n(e.code,{children:"Dynamic"}),` type\r
that I realized Reflaxe/C++ lacked a proper error reporting system.\r
Throwing an error doesn't even print a message in C++; it just hangs\r
for like a minute then exits with a random 12 digit exit code. So before\r
I continued with implementing a runtime type system with Haxe's `,n(e.code,{children:"Dynamic"}),`,\r
I needed to make runtime errors look nicer and track easier for my own sanity.`]}),`
`,l(e.p,{children:[`The first part was easy. Instead of compiling Haxe throws as native C++\r
throws, I could instead print whatever the Error object was to `,n(e.code,{children:"std::err"}),`\r
(with its Haxe position), run `,n(e.code,{children:"exit(666)"}),`, and call it a day. Simply add a\r
define to decide whether the user wants native `,n(e.code,{children:"throw"}),`s or these simulated\r
ones and it's no biggie... except for the fact that wouldn't be compatible\r
with try/catch. Ooof.`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-cpp",children:[n(e.span,{className:"hljs-comment",children:"// native throw"}),`\r
`,n(e.span,{className:"hljs-keyword",children:"throw"})," ",n(e.span,{className:"hljs-string",children:'"my runtime error"'}),`;\r
\r
`,n(e.span,{className:"hljs-comment",children:"// stderr throw"}),`\r
std::err << `,n(e.span,{className:"hljs-string",children:'"Main.hx:32: my runtime error"'}),` << std::endl;\r
`,n(e.span,{className:"hljs-built_in",children:"exit"}),"(",n(e.span,{className:"hljs-number",children:"666"}),`);
`]})}),`
`,l(e.p,{children:[`It would be nice to ONLY print/display errors on uncaught throws...\r
achieve something similar to Hashlink's nice error popup system... but\r
that's just not feasible when generating C++ source code. Oh well, native\r
`,n(e.code,{children:"throw"}),`s stay for now, I guess. I'll just wrap everything with try { ... }\r
while testing.`]}),`
`,n(e.h2,{id:"the-call-stack-problem",children:"The Call Stack Problem"}),`
`,l(e.p,{children:["Speaking of errors, taking a look into it made me realize the ",n(e.code,{children:"haxe.Exception"}),`\r
class wasn't fully implemented for Reflaxe/C++. It had a bare-bones version made\r
to help things run riiiiight at the start of this project's development, and now\r
was the perfect time to finish it. It was all fine and dandy except for `,n(e.code,{children:"stack"}),`.\r
A field which provided the `,n(e.code,{children:"haxe.CallStack"})," object for the error."]}),`
`,l(e.p,{children:["For those that don't know, the ",n(e.a,{href:"https://api.haxe.org/haxe/CallStack.html",children:"haxe.CallStack"}),`\r
class is a wonderful debugging class that provides the entire list of calls\r
made up to that point:`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-haxe",children:[n(e.span,{className:"hljs-built_in",children:"trace"}),`(haxe.CallStack.toString(haxe.CallStack.callStack()));
`]})}),`
`,l(e.p,{children:["Similar to the ",n(e.code,{children:"Exception"})," class, ",n(e.code,{children:"haxe.CallStack"}),` had been given a very early\r
implementation to make things work, and then it was completely forgotten about.\r
But `,n(e.em,{children:"unlike"})," ",n(e.code,{children:"Exception"}),", it was not going to be as fun to complete."]}),`
`,l(e.blockquote,{children:[`
`,n(e.p,{children:"Ugh. If only C++ had a built in call stack like every other target."}),`
`]}),`
`,l(e.p,{children:[`The funny part is, it actually does. With the release of C++23, a new class was added:\r
`,n(e.a,{href:"https://en.cppreference.com/w/cpp/utility/basic_stacktrace",children:"std::basic_stacktrace"}),`.\r
Sooooo... I guess time to make C++23 the minimum required version!!`]}),`
`,n(e.p,{children:`Haha, I wish. Making C++17 the minimum version killed me; going any higher\r
and this project would be less compatible than the original Haxe/C++ target. X_X`}),`
`,n(e.p,{children:"So... time for option 2."}),`
`,n(e.h2,{id:"making-a-call-stack",children:"Making a Call Stack"}),`
`,n(e.p,{children:`When you really think about it though, tracking function calls isn't that hard.\r
After all, C++'s destructors are a great tool for tracking scopes!`}),`
`,n(e.p,{children:`Make a class that adds itself to a global stack when constructed,\r
then removes itself using the destructor. When generating the C++,\r
create an instance of that class at the start of every function. Pass\r
it the name of the class + function it's being used in and BOOM,\r
you have a global stack you can access at anywhere!`}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-cpp",children:[n(e.span,{className:"hljs-keyword",children:"struct"})," ",n(e.span,{className:"hljs-title class_",children:"StackTracer"}),` {\r
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
`,l(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-type",children:"void"})," ",n(e.span,{className:"hljs-title",children:"doSomething"}),n(e.span,{className:"hljs-params",children:"()"})," "]}),`{\r
  `,l(e.span,{className:"hljs-function",children:["StackTracer ",n(e.span,{className:"hljs-title",children:"st"}),l(e.span,{className:"hljs-params",children:["(",n(e.span,{className:"hljs-string",children:'"Main"'}),", ",n(e.span,{className:"hljs-string",children:'"doSomething"'}),")"]})]}),"; ",n(e.span,{className:"hljs-comment",children:"// will destroy when func done"}),`\r
  `,n(e.span,{className:"hljs-comment",children:"// do stuff"}),`\r
}
`]})}),`
`,n(e.h2,{id:"the-haxe-target-call-stack-experience",children:"The Haxe Target Call Stack Experience"}),`
`,l(e.p,{children:[`To actually implement the call stack, we have to convert our custom stack\r
data into Haxe's. Thankfully, there's this super convenient hidden class\r
that exists just for this purpose: `,n(e.a,{href:"https://github.com/HaxeFoundation/haxe/blob/development/std/haxe/NativeStackTrace.hx",children:"NativeStackTrace"}),"."]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:[`All we gotta do is implement a version of this class with the functions filled\r
out in our target's `,n(e.code,{children:"_std"})," folder."]}),`
`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-haxe",children:[n(e.span,{className:"hljs-keyword",children:"extern"})," ",l(e.span,{className:"hljs-title class_",children:[n(e.span,{className:"hljs-keyword",children:"class"})," ",n(e.span,{className:"hljs-title",children:"NativeStackTrace"})," "]}),`{\r
	`,n(e.span,{className:"hljs-keyword",children:"static"})," ",n(e.span,{className:"hljs-keyword",children:"public"})," ",l(e.span,{className:"hljs-title function_",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"saveStack"})]}),"(exception:",n(e.span,{className:"hljs-type",children:"Any"}),"):",n(e.span,{className:"hljs-type",children:"Void"}),`;\r
	`,n(e.span,{className:"hljs-keyword",children:"static"})," ",n(e.span,{className:"hljs-keyword",children:"public"})," ",l(e.span,{className:"hljs-title function_",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"callStack"})]}),"():",n(e.span,{className:"hljs-type",children:"Any"}),`;\r
	`,n(e.span,{className:"hljs-keyword",children:"static"})," ",n(e.span,{className:"hljs-keyword",children:"public"})," ",l(e.span,{className:"hljs-title function_",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"exceptionStack"})]}),"():",n(e.span,{className:"hljs-type",children:"Any"}),`;\r
	`,n(e.span,{className:"hljs-keyword",children:"static"})," ",n(e.span,{className:"hljs-keyword",children:"public"})," ",l(e.span,{className:"hljs-title function_",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"toHaxe"})]}),"(nativeStackTrace:",n(e.span,{className:"hljs-type",children:"Any"}),", skip:",n(e.span,{className:"hljs-type",children:"Int "}),"= ",n(e.span,{className:"hljs-number",children:"0"}),"):",n(e.span,{className:"hljs-type",children:"Array"}),`<StackItem>;\r
}
`]})}),`
`,l(e.p,{children:["The ",n(e.code,{children:"Any"}),` types can be replaced with our own target's unique call stack\r
list type. For example, `,n(e.a,{href:"https://github.com/HaxeFoundation/haxe/blob/development/std/cs/_std/haxe/NativeStackTrace.hx",children:"C# uses System.Diagnostics.StackTrace"}),`\r
and `,l(e.a,{href:"https://github.com/HaxeFoundation/haxe/blob/development/std/python/_std/haxe/NativeStackTrace.hx",children:["Python uses an ",n(e.code,{children:"Array"})," of tuples"]}),`.\r
From there, we implement functions to generate the stack from an exception\r
or an arbitrary call, and finally we write the `,n(e.code,{children:"toHaxe"})," function to convert it."]}),`
`,l(e.p,{children:[`What was especially interesting was discovering how inconsistent call stacks are\r
for each target. While Haxe provides an enum for structuring the call stack in\r
the form of `,n(e.a,{href:"https://api.haxe.org/haxe/StackItem.html",children:"haxe.StackItem"}),`, the\r
way each case is used is different for each target.`]}),`
`,l(e.p,{children:["Going to the ",n(e.a,{href:"https://try.haxe.org/#DD7c3724",children:"Haxe Playground"}),` and clicking between\r
each target, you can see how the call stack differs drastically:`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-haxe",children:[l(e.span,{className:"hljs-title class_",children:[n(e.span,{className:"hljs-keyword",children:"class"})," ",n(e.span,{className:"hljs-title",children:"Test"})," "]}),`{\r
  `,n(e.span,{className:"hljs-keyword",children:"static"})," ",l(e.span,{className:"hljs-title function_",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
    `,n(e.span,{className:"hljs-built_in",children:"trace"}),`(haxe.CallStack.toString(haxe.CallStack.callStack()));\r
  }\r
}
`]})}),`
`,n("table",{style:{display:"block",padding:"12px",marginTop:"30px",overflowX:"scroll"},children:l("tbody",{children:[l("tr",{children:[n("td",{style:{paddingRight:"20px",textAlign:"center"},children:"JavaScript"}),n("td",{className:"fakecode-holder",children:n("div",{className:"fakecode",children:l(e.p,{children:[`Test.hx:3: Called from (unknown).main\r
(`,n(e.a,{href:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026",children:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026"}),` line\r
92 column 67) Called from\r
`,n(e.a,{href:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026",children:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026"}),` line\r
405 column 6 Called from\r
`,n(e.a,{href:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026",children:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026"}),` line\r
406 column 3`]})})})]}),l("tr",{children:[n("td",{children:"HashLink"}),n("td",{className:"fakecode-holder",children:n("div",{className:"fakecode",children:l(e.p,{children:["Test.hx:3: Called from haxe.",n(e.em,{children:"CallStack.$CallStack_Impl"}),`.callStack\r
(/home/haxer/haxe/versions/4.3.1/std/haxe/CallStack.hx line 52) Called\r
from $Test.main (Test.hx line 3)`]})})})]}),l("tr",{children:[n("td",{children:"Eval"}),n("td",{className:"fakecode-holder",children:n("div",{className:"fakecode",children:n(e.p,{children:"Test.hx:3: Called from Test.main (Test.hx line 3 column 35)"})})})]})]})}),`
`,l(e.p,{children:["In fact, most targets only appear to use ",n(e.code,{children:"Method"})," and ",n(e.code,{children:"FilePos"}),` from\r
`,n(e.code,{children:"haxe.StackItem"}),". The rest are for niche cases with certain targets."]}),`
`,n(e.p,{children:`This was a nice change of pace from the usual, restrictive nature of\r
the Haxe API, as this would allow me to make sure the Reflaxe/C++\r
call stack was as nice as possible.`}),`
`,n(e.h2,{id:"line-tracking",children:"Line tracking"}),`
`,l(e.p,{children:["While filling out the ",n(e.code,{children:"StackItem"}),`s, it became clear I'd forgetten something.\r
Call stacks do not just require a list of functions, but the `,n(e.em,{children:"exact"}),` line\r
they're called from.`]}),`
`,l(e.p,{children:["Taking a peak into ",n(e.a,{href:"https://github.com/HaxeFoundation/hxcpp/blob/c3e5ab85b0c19688f7494ae44909ed4bfc63bdb7/include/hx/StackContext.h#LL170C72-L170C72",children:"hxcpp"}),`,\r
it appears their solution is to do what I've done so far, but also update\r
the function's stack tracing variable every expression. THAT'S what all those\r
ugly `,n(e.code,{children:"HXLINE"})," do (guess it was kinda obvious)."]}),`
`,n(e.p,{children:`It wouldn't be too hard to implement that as well... and it's not like\r
I have much of a choice, but wooooow it destroys the beautiful Reflaxe/C++\r
code I had so much pride in.`}),`
`,l(e.p,{children:["But in the end, I implemented it. All it took was overriding ",n(e.code,{children:"Reflaxe"}),`'s\r
`,n(e.code,{children:"prefixExpressionContent"}),` function and generating content before\r
every expression was a piece of cake.`]}),`
`,n(e.h2,{id:"final-conversion",children:"Final Conversion"}),`
`,l(e.p,{children:[`I was worried about the way local functions would be printed,\r
but as discussed before, we only need to use the `,n(e.code,{children:"StackItem"}),`s we need.\r
Like with the Haxe/Python target, I opted to the `,n(e.code,{children:"FilePos(Method(...), ...)"}),`\r
combo for everything.`]}),`
`,l(e.p,{children:[n(e.code,{children:"Method"}),` allows for any text to be added for the class and function, so\r
even in rare cases like local functions, I was able to generate a nice,\r
custom format that stood supreme to other targets:`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-haxe",children:[l(e.span,{className:"hljs-title class_",children:[n(e.span,{className:"hljs-keyword",children:"class"})," ",n(e.span,{className:"hljs-title",children:"Test"})," "]}),`{\r
  `,n(e.span,{className:"hljs-keyword",children:"static"})," ",l(e.span,{className:"hljs-title function_",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
    `,l(e.span,{className:"hljs-title function_",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"a"})]}),`() {\r
      `,n(e.span,{className:"hljs-keyword",children:"final"}),` b = () ->\r
        `,n(e.span,{className:"hljs-built_in",children:"trace"}),`(haxe.CallStack.toString(haxe.CallStack.callStack()));\r
      b();\r
    }\r
    a();\r
  }\r
}
`]})}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-text",children:`Called from Test.main.a.b (Test.hx line 5 column 3)\r
Called from Test.main.a (Test.hx line 4 column 2)\r
Called from Test.main (Test.hx line 3 column 1)
`})}),`
`,n(e.h2,{id:"result",children:"Result"}),`
`,l(e.p,{children:[`Since Reflaxe/C++ does not use any dependencies, all the code (both the C++\r
implementation and Haxe externs) is implemented in the `,n(e.code,{children:"NativeStackTrace"}),`\r
module.`]}),`
`,l(e.p,{children:["You can check it out ",n(e.a,{href:"https://github.com/RobertBorghese/reflaxe.CPP/blob/main/std/cxx/_std/haxe/NativeStackTrace.hx",children:"here"}),"!"]}),`
`,l(e.p,{children:[`Reflaxe's DCE system is powerful; you only pay for what you use.\r
Unfortunately... it looks like you'll always be using the\r
`,n(e.code,{children:"NativeStackTrace"})," code."]}),`
`,n(e.p,{children:`Reflaxe/C++'s once beautiful "Hello World" output now looks like this:`}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-cpp",children:[n(e.span,{className:"hljs-type",children:"void"})," _Main::Main_Fields_::",n(e.span,{className:"hljs-built_in",children:"main"}),`() {\r
  `,n(e.span,{className:"hljs-built_in",children:"HCXX_STACK_METHOD"}),"(",n(e.span,{className:"hljs-string",children:'"Main.hx"'}),", ",n(e.span,{className:"hljs-number",children:"1"}),", ",n(e.span,{className:"hljs-number",children:"0"}),", ",n(e.span,{className:"hljs-string",children:'"_Main::Main_Fields_"'}),", ",n(e.span,{className:"hljs-string",children:'"main"'}),`)\r
\r
  `,n(e.span,{className:"hljs-built_in",children:"HCXX_LINE"}),"(",n(e.span,{className:"hljs-number",children:"1"}),`)\r
  std::cout << `,n(e.span,{className:"hljs-string",children:'"Main.hx:2: Hello world!"'}),` << std::endl;\r
}
`]})}),`
`,n(e.h2,{id:"opt-in-option",children:"Opt In Option"}),`
`,l(e.p,{children:[`In the end, I decided to disable call stack features by default. Reflaxe/C++\r
is a clean code generator first. Only when a certain define is enabled (`,n(e.code,{children:"-D cxx_callstack"}),`)\r
does `,n(e.code,{children:"haxe.CallStack.callStack()"}),` return the stack. If it's not enabled, an\r
empty array is returned and a message is printed:`]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-text",children:`Call stack features must be enabled using -D cxx_callstack
`})}),`
`,n(e.p,{children:`Hopefully this intrinsically teaches users the benefits of keeping the\r
call stack enabled vs disabled. And more importantly, allow me to\r
advertise Reflaxe/C++ as the prettiest C++ output in all the land!`}),`
`,n(e.h2,{id:"whats-left-to-be-done",children:"What's Left To Be done"}),`
`,n(e.p,{children:`I didn't bring up multi-threading support because... I didn't do anything\r
about it. In the future, I'll need to keep separate call stacks for each\r
thread. But threads have not been implemented yet, so that's a problem\r
for future me!`}),`
`,n(e.p,{children:"Anyway, that's about it for this log. May you visit again!"})]})}function fe(r={}){let{wrapper:e}=Object.assign({},O(),r.components);return e?n(e,Object.assign({},r,{children:n(D,r)})):D(r)}var be=fe;var N={};o(N,{default:()=>Ce,desc:()=>X,title:()=>W});import{Fragment as we,jsx as c,jsxs as p}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as L}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as ke}from"aleph/react";import xe from"~/components/BlogMeta.tsx";import ve from"~/components/GithubButton.tsx";var W="About Reflaxe/C++",X="Reflaxe/C++ is an alternative C++ target for Haxe that generates dependent-less, GC-less C++17 code.";function B(r){let e=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",span:"span"},L(),r.components);return p(we,{children:[c(ke,{children:xe({title:W,desc:X})}),`
`,c(e.h1,{id:"reflaxec",children:"Reflaxe/C++"}),`
`,c(e.p,{children:"Reflaxe/C++ is an alternative C++ target for Haxe that generates dependent-less, GC-less C++17 code."}),`
`,c("hr",{}),`
`,c(e.p,{children:"The goal of this project is simple: create a compilation target for Haxe that generates minimal, human-readable C++ that can be compiled without linking additional libraries and does not rely on any garbage collection system."}),`
`,c(e.p,{children:c(e.strong,{children:"Haxe Code"})}),`
`,c(e.pre,{children:p(e.code,{className:"hljs language-haxe",children:[p(e.span,{className:"hljs-title function_",children:[c(e.span,{className:"hljs-keyword",children:"function"})," ",c(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
  `,c(e.span,{className:"hljs-built_in",children:"trace"}),"(",c(e.span,{className:"hljs-string",children:'"Hello world!"'}),`);\r
}
`]})}),`
`,c(e.p,{children:c(e.strong,{children:"Reflaxe/C++ Output"})}),`
`,c(e.pre,{children:p(e.code,{className:"hljs language-cpp",children:[p(e.span,{className:"hljs-meta",children:["#",c(e.span,{className:"hljs-keyword",children:"include"})," ",c(e.span,{className:"hljs-string",children:'"Main.h"'})]}),`\r
\r
`,p(e.span,{className:"hljs-meta",children:["#",c(e.span,{className:"hljs-keyword",children:"include"})," ",c(e.span,{className:"hljs-string",children:"<iostream>"})]}),`\r
\r
`,c(e.span,{className:"hljs-type",children:"void"})," _Main::Main_Fields_::",c(e.span,{className:"hljs-built_in",children:"main"}),`() {\r
	std::cout << `,c(e.span,{className:"hljs-string",children:'"Main.hx:2: Hello world!"'}),` << std::endl;\r
}
`]})}),`
`,c(e.p,{children:"Check out more information here:"}),`
`,c(ve,{link:"https://github.com/RobertBorghese/reflaxe.CPP",url:"https://api.github.com/repos/RobertBorghese/reflaxe.CPP",badgeUrl:"https://github.com/RobertBorghese/reflaxe.CPP/actions/workflows/main.yml/badge.svg"})]})}function _e(r={}){let{wrapper:e}=Object.assign({},L(),r.components);return e?c(e,Object.assign({},r,{children:c(B,r)})):B(r)}var Ce=_e;var is={"/_404":Me,"/_app":Se,"/blog":He,"/":Te,"/blog/index":m,"/blog/haxe/hxcpp_no_gc_tips":u,"/blog/haxe/index":j,"/blog/reflaxe/index":y,"/blog/reflaxe-cpp/1":g,"/blog/reflaxe-cpp/index":N,depGraph:{"modules":[{"specifier":"./routes\\blog\\index.mdx"},{"specifier":"./routes\\blog\\haxe\\hxcpp_no_gc_tips.mdx"},{"specifier":"./routes\\blog\\haxe\\index.mdx"},{"specifier":"./routes\\blog\\reflaxe\\index.mdx"},{"specifier":"./routes\\blog\\reflaxe-cpp\\1.mdx"},{"specifier":"./routes\\blog\\reflaxe-cpp\\index.mdx"}]}};export{is as default};
