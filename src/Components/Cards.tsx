import React, { Component } from 'react';
import { Card } from './Card'; // Убедитесь, что путь к файлу правильный

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
    console.log('Posts in Cards:', posts);
    return (
      <main className='main'>
        <Card posts={posts} />
      </main>
    );
  }
}

export default Cards;
