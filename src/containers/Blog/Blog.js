import React, { Component } from "react";
import Posts from "../Posts/Posts";
// import FullPost from "../FullPost/FullPost";
import NewPost from "../NewPost/NewPost";
import {Route, Link, NavLink} from "react-router-dom";
import "./Blog.css";

class Blog extends Component {
 

 
  render() {
    
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/"
                exact
                activeClassName="my-active"
                activeStyle={
                  {
                    color:"#fa923f",
                    textDecoration: "underline"
                  }
                }>Home</NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname:"/new-post",
                  hash:"#submit",
                  search :"?quick-submit=true"
                }}> New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <NavLink to="/" exact component={Posts}/>
        {/* <NavLink to="/new-post" exact component={NewPost}/> */}
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
        <Posts></Posts> */}
      </div>
    );
  }
}

export default Blog;
