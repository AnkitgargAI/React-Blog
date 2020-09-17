import React, { Component } from "react";
import Post from "../../components/Post/Post"
import axios from "../../axios";
import "./Posts.css";
class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };
  selectPostHandler = (id) => {
    this.setState({ selectedPostId: id });
    console.log(id);
  };

  componentDidMount() {
    console.log(this.props);
    axios.get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map((post) => {
          return { ...post, author: "Ankit" };
        });

        this.setState({ posts: updatedPost });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          clicked={() => this.selectPostHandler(post.id)}
          key={post.id}
          author={post.author}
          body={post.body}
          title={post.title}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}

export default Posts;
