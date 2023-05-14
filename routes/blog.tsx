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

function toggleClass(element, clsName) {
  if (element.classList.contains(clsName)) {
    element.classList.remove(clsName);
  } else {
    element.classList.add(clsName);
  }
}

function toggleSidebar() {
  toggleClass(document.getElementById("sidebar"), "hidden");
  toggleClass(document.getElementsByClassName("asideHold")[0], "hidden");
  toggleClass(document.getElementsByClassName("asideButton")[0], "hidden");
}

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
  const hClass = window.innerWidth < 720 ? "hidden" : "";
  return (
    <>
      <Head>
        <meta name="description" content="Documentation powered by MDX" />
      </Head>
      <div className="docs">
        <div className={"asideHold " + hClass}>
          <button className={"asideButton " + hClass} onClick={toggleSidebar}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7L9 12L14 17"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <aside id="sidebar" className={hClass}>
            <div className="search">
              <input placeholder="Search..." />
            </div>
            <nav>{genNav(nav)}</nav>
          </aside>
        </div>
        <div style={{ flexDirection: "column" }}>
          <div className="markdown-body">
            <MDXProvider components={components}>{props.children}</MDXProvider>
          </div>
          <Comments />
        </div>
      </div>
    </>
  );
}
