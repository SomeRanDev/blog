import { PropsWithChildren, useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Head, NavLink, Link } from "aleph/react";
import { components } from "../components/Heading.tsx";
import Comments from "../components/Comments.tsx";

// Navagation
const nav = [
  "baselist",
  ["About", "/blog"],
  ["Reflaxe", "/blog/reflaxe"],
  ["Reflaxe/C++", "/blog/reflaxe-cpp"],
  ["reflaxecpp", ["CallStack", "/blog/reflaxe-cpp/1", "1"]],
];

// Calculate order of blogs
const order: any[] = [];

{
  function _makeOrder(item: any) {
    if (Array.isArray(item) && item.length >= 2) {
      if (typeof item[1] === "string") {
        order.push(item[1]);
      } else if (Array.isArray(item[1])) {
        item.slice(1).map(_makeOrder);
      }
    }
  }

  nav.map(_makeOrder);
}

// Helper for toggling a class on an element
function toggleClass(element: Element | null, clsName: string) {
  if (element !== null) {
    if (element.classList.contains(clsName)) {
      element.classList.remove(clsName);
    } else {
      element.classList.add(clsName);
    }
  }
}

function getSidebarElements(): (Element | null)[] {
  return [
    document.getElementById("sidebar"),
    document.getElementsByClassName("asideHold")[0],
    document.getElementsByClassName("asideButton")[0],
    document.getElementsByClassName("markdown-body-holder")[0],
  ];
}

function makeAnimated() {
  getSidebarElements().forEach((element) => {
    if (element !== null && !element.classList.contains("animated")) {
      element.classList.add("animated");
    }
  });
}

// On sidebar toggled, add or remove "hidden"
function toggleSidebar() {
  getSidebarElements().forEach((element) => {
    toggleClass(element, "hidden");
  });
}

// Construct the navbar html
function genNav(item: any[] | string, index?: number) {
  if (Array.isArray(item) && item.length >= 2) {
    if (typeof item[1] === "string") {
      const title = item[0];
      const href = item[1];
      return (
        <li key={href} data-num={"" + ((index ?? 0) + 1)}>
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

export const ssr = {
  props: (req) => {
    console.log(req);
    return {
      $revalidate: 0, // revalidate props after 1 second
      username: "Test",
      serverTime: Date.now(),
    };
  },
  paths: () => {
    return ["/blog"];
  },
};

// <Blog />
export default function Blog(props: PropsWithChildren<any>) {
  const hClass = "hidden"; //window.innerWidth < 1000 ? "hidden" : "";

  const [next, setNext] = useState(null);
  const [previous, setPrev] = useState(null);

  useEffect(() => {
    const pathname = document.location.pathname;
    const index = order.indexOf(pathname);

    let next = null;
    let previous = null;
    if (index >= 0) {
      const nextIndex = index + 1;
      const prevIndex = index - 1;
      if (nextIndex >= 0 && nextIndex < order.length) {
        next = order[nextIndex];
      }
      if (prevIndex >= 0 && prevIndex < order.length) {
        previous = order[prevIndex];
      }
    }

    setNext(next);
    setPrev(previous);

    console.log(
      window.innerWidth >= 700,
      window.innerWidth / window.innerHeight > 0.7
    );

    if (
      window.innerWidth >= 800 &&
      window.innerWidth / window.innerHeight > 0.7
    ) {
      toggleSidebar();
    }
  });

  return (
    <>
      <div className="docs">
        <div className={"asideHold " + hClass}>
          <button
            className={"asideButton " + hClass}
            onClick={() => {
              makeAnimated();
              toggleSidebar();
            }}
          >
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
        <div
          className={"markdown-body-holder " + hClass}
          style={{ flexDirection: "column" }}
        >
          <div className="markdown-body">
            <MDXProvider components={components}>{props.children}</MDXProvider>
          </div>
          <hr />
          <div className="index" style={{ flexDirection: "row" }}>
            <nav>
              {previous !== null ? (
                <Link role="button" to={previous}>
                  {"< Previous"}
                </Link>
              ) : (
                <></>
              )}
              <span style={{ margin: "auto" }}></span>
              {next !== null ? (
                <Link role="button" to={next}>
                  {"Next >"}
                </Link>
              ) : (
                <></>
              )}
            </nav>
          </div>
          <br />
          <Comments />
        </div>
      </div>
    </>
  );
}
