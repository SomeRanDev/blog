import { Component } from "react";
import GithubButton from "~/components/GithubButton.tsx";

type BlogSubtextProps = {
  date: string;
  author: string;

  link: string;
  url: string;
  badgeUrl: string;
};

export default class BlogSubtext extends Component<BlogSubtextProps> {
  state = {
    name: "",
    desc: "",
    url: "",
  };

  constructor(props: BlogSubtextProps) {
    super(props);
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/repos/RobertBorghese/reflaxe.CPP"
    );
    const json = await response.json();
    this.setState({
      name: json.name,
      description: json.description,
      url: json.html_url,
    });
  }

  render() {
    return (
      <>
        <div
          className="BlogSubtext"
          style={{ display: "flex", flexDirection: "row", marginTop: "24px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
              marginRight: "4px",
            }}
          >
            <p className="textContainer" style={{ flexGrow: "1" }}>
              {this.props.date}
            </p>
            <p className="textContainer" style={{ flexGrow: "1" }}>
              by {this.props.author}
            </p>
          </div>
          <GithubButton
            link={this.props.link}
            url={this.props.url}
            badgeUrl={this.props.badgeUrl}
            style={{ flexGrow: "2", width: "50%" }}
          />
        </div>
      </>
    );
  }
}
