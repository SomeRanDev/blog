import { Head, Link } from "aleph/react";

import WalkingSprite from "../components/WalkingSprite.tsx";
import RandomQuote from "../components/RandomQuote.tsx";

const externalLinks = [
  ["Github", "https://github.com/RobertBorghese"],
  ["Twitter", "https://twitter.com/SumRndmDde"],
  ["TikTok", "https://tiktok.com/@SomeRanDev"],
  ["YouTube", "https://youtube.com/@SomeRanDev"],
  ["Blog", "/"],
];

export default function Index() {
  return (
    <div className="screen index">
      <Head>
        <title>RoBBoR's Blog</title>
        <meta name="description" content="RoBBoR's blog." />
      </Head>
      <p className="logo">
        <WalkingSprite />
      </p>
      <h1>SomeRanDev's Blog</h1>
      <p style={{ fontSize: "16px", color: "#666", paddingTop: "0px" }}>
        by Robert Borghese
      </p>
      <br />
      <br />
      <RandomQuote />
      <br />
      <br />
      <div className="external-links">
        {externalLinks.map(([text, href]) => (
          <a href={href} target="_blank" key={href}>
            {text}
          </a>
        ))}
      </div>
      <nav>
        <Link role="button" to="/blog">
          Read da Blog!
        </Link>
      </nav>
    </div>
  );
}
