import { Component, CSSProperties } from "react";

type GithubButtonProps = {
  style: CSSProperties;

  link: string;
  url: string;
  badgeUrl: string;
};

export default class GithubButton extends Component<GithubButtonProps> {
  state = {
    name: "",
    desc: "",
    url: "",
  };

  constructor(props: GithubButtonProps) {
    super(props);
  }

  async componentDidMount() {
    const response = await fetch(this.props.url);
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
        <a
          style={this.props.style}
          className="GithubButton"
          href={this.props.link}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="title">
              <p style={{ float: "left" }}>{this.state.name}</p>
              <img
                style={{ float: "right" }}
                alt="Padding"
                src={this.props.badgeUrl}
              ></img>
            </div>
            <p className="desc">{this.state.description}</p>
            <div className="linkto">
              <img
                alt="GithubIcon"
                width="16"
                height="16"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              ></img>{" "}
              <p>View on Github</p>
            </div>
          </div>
        </a>
      </>
    );
  }
}
