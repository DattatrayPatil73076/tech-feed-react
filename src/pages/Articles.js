import React, { Component } from "react";
import Article from "./Article";

class Articles extends Component {
  constructor(props) {
    super();
    this.state = { articles: [] };
  }

  componentDidMount() {
    const devTo = `https://dev.to/api/articles?per_page=30&tag=${this.props.str1}`;

    console.log(devTo);

    fetch(devTo)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let articles = [];
        data = data.slice(0, 30);
        data.forEach((element, index) => {
          articles.push(
            <div key={index} className="column">
              <Article
                key={index}
                title={element.title}
                url={element.url}
                image={element.cover_image}
                extract={element.description}
                profile={element.user.profile_image}
                author={element.user.name}
                date={element.readable_publish_date}
              />
            </div>
          );
        });
        var offset = 4 - data.length;
        for (var i = 0; i < offset; i++) {
          articles.push(<div className="column"></div>);
        }
        this.setState({ articles: articles });
      });
  }

  render() {
    return (
      <section className="section" id="articles">
        <div className="container">
          <div className="columns">{this.state.articles}</div>
        </div>
      </section>
    );
  }
}

export default Articles;
