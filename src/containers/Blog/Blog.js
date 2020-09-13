import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state =({
        posts:[],
        selectedPostId:null,
    })

    componentDidMount()
    {
        axios.get('/posts').then(response=>{
            const posts = response.data.slice(0,4);
            const updatedPost = posts.map(post=>{
                return {...post, author:'Ankit'}
            })

            this.setState({posts:updatedPost});
        });
    }
    selectPostHandler = (id)=>
    {
        this.setState({selectedPostId:id})
        console.log(id);
    }
    render () {
        const posts = this.state.posts.map(post=>{
           return <Post clicked={()=>this.selectPostHandler(post.id)} key={post.id} author={post.author} body={post.body}title={post.title} /> 
         })
        return (
            <div>
                <section className="Posts">
                {posts}

                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;