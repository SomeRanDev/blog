import { PropsWithChildren } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Head, NavLink } from "aleph/react";
import { components } from "../components/Heading.tsx";

const nav = [
  "baselist",
  ["About", "/blog"],
  ["Reflaxe", "/blog/reflaxe"],
  ["Reflaxe/C++", "/blog/reflaxe-cpp"],
  ["reflaxecpp", ["CallStack", "/blog/reflaxe-cpp/1", "1"]],
];

function genNav(item, index) {
  if (Array.isArray(item) && item.length >= 2) {
    if (typeof item[1] === "string") {
      const title = item[0];
      const href = item[1];
      return (
        <li key={href} data-num={"" + (index + 1)}>
          <NavLink to={href} activeClassName="active" exact>
            {title}
          </NavLink>
        </li>
      );
    } else if (Array.isArray(item[1])) {
      return <ul key={"" + item[0]}>{item.slice(1).map(genNav)}</ul>;
    }
  }
  throw "Impossible";
}

export default function Blog(props: PropsWithChildren) {
  return (
    <>
      <Head>
        <meta name="description" content="Documentation powered by MDX" />
      </Head>
      <div className="docs">
        <aside>
          <div className="search">
            <input placeholder="Search..." />
          </div>
          <nav>{genNav(nav)}</nav>
        </aside>
        <div className="markdown-body">
          <MDXProvider components={components}>{props.children}</MDXProvider>
        </div>
      </div>
    </>
  );
}
