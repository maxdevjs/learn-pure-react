import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

class Reddit extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <h1>/r/reactjs</h1>
        <small>
          <a href="https://www.reddit.com//r/reactjs">go</a>
        </small>
        <ol>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <a href={post.url}>{post.title}</a> (score: {post.score}) -{" "}
              {post.author}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<Reddit />, document.querySelector("#root"));
