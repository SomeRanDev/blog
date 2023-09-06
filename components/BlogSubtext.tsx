import { Component } from "react";
import GithubButton from "~/components/GithubButton.tsx";

type BlogSubtextGithubLink = {
  link: string;
  url: string;
  badgeUrl: string;
}

type BlogSubtextProps = {
  date: string;
  author: string;
  githubLinks: BlogSubtextGithubLink[];
};

export default class BlogSubtext extends Component<BlogSubtextProps> {
  //state: {name: string, desc: string, url: string}[] = [];

  constructor(props: BlogSubtextProps) {
    super(props);
  }

  render() {
    let buttons = [];
    let index = 0;

    return (
      <>
        <div
          className="BlogSubtext"
          style={{ display: "flex", flexDirection: "row", marginTop: "24px", gap: "8px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "4",
            }}
          >
            <p className="textContainer" style={{ flexGrow: "1" }}>
              {this.props.date}
            </p>
            <p className="textContainer" style={{ flexGrow: "1" }}>
              by {this.props.author}
            </p>
          </div>
          <div
            style={{ display: "flex", flexGrow: "5", width: "50%", gap: "4px" }}
          >
          {
            this.props.githubLinks.map(function(l) {
              return (<GithubButton
                key={"" + (index++)}
                link={l.link}
                url={l.url}
                badgeUrl={l.badgeUrl}
                style={{ flexGrow: "1" }}
              />);
            })
          }
          </div>
        </div>
      </>
    );
  }
}
