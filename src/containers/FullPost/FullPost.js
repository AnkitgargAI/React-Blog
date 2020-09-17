import React, { Component } from "react";

import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };
  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.props.id !== this.state.loadedPost.id)
      ) {
        axios
          .get("/posts/" + this.props.id)
          .then((response) => {
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }
  deletePost()
  {
      axios.delete('/posts/'+this.state.loadedPost.id).then(response=>{
          console.log(response.data);
      })
  }
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading the Post !.....</p>;
    }
    const data = this.state.loadedPost;

    if (data) {
      post = (
        <div className="FullPost">
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={()=>this.deletePost()}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
