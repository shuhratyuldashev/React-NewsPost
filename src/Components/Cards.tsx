import React, { Component } from 'react';

import { RiEditLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";


interface Post {
  id: number;
  userImg: string;
  userName: string;
  postCover: string;
  postTitle: string;
  postSubTitle: string;
  postContent: string;
  linkNameFirst: string;
  linkFirst: string;
  linkNameSecond: string;
  linkSecond: string;
  linkThirdName: string;
  linkThird: string;
}

interface CardsProps {
  posts: Post[];
}

export class Cards extends Component<CardsProps> {
  render() {
    const { posts } = this.props;
    return (
      <main className='main'>
        {posts.map(post => (
          <div key={post.id} className='post-card'>
            <div className="header-post">
              <div className="user-info">
                <img src={post.userImg} alt={post.userName} className='user-img' />
                <h2>{post.userName}</h2>
              </div>
              <div className="btns-post">
                  <button>
                    <RiEditLine className='btns-post-icon' size={25}/>
                    <span>Edit Post</span>
                  </button>
                  <button>
                    <AiOutlineDelete className='btns-post-icon' size={25}/>
                    <span>Delete</span>
                  </button>
              </div>
            </div>
            <div className="post-cover">
              <img src={post.postCover} alt={post.postTitle} className='post-cover' />
            </div>
            <h3>{post.postTitle}</h3>
            <h4>{post.postSubTitle}</h4>
            <p>{post.postContent}</p>
            <a href={post.linkFirst}>{post.linkNameFirst}</a>
            <a href={post.linkSecond}>{post.linkNameSecond}</a>
            <a href={post.linkThird}>{post.linkThirdName}</a>
          </div>
        ))}
      </main>
    );
  }
}

export default Cards;