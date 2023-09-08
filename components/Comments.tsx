import { createRef, useEffect } from "react";

// https://github.com/wicksome/utterances-react/blob/master/packages/component/src/Utterances.js
export default function Comments() {
  const rootElm = createRef();

  useEffect(() => {
    // Ensure script is loaded with the correct params by removing cached element
    while (rootElm.current.firstChild) {
      rootElm.current.removeChild(rootElm.current.firstChild);
    }

    const utterances = document.createElement("script");

    // set config to of script element
    Object.entries({
      src: "https://utteranc.es/client.js",
      repo: "RobertBorghese/blog",
      "issue-term": "url",
      label: "discussion",
      theme: "github-light",
      crossorigin: "anonymous",
      async: true,
    }).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    // attach script element
    rootElm.current.appendChild(utterances);
  }, []);

  return <div id="utterances_container" ref={rootElm} />;
}
