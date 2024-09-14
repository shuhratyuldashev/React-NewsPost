import React, { Component, useState } from 'react';
import { RiEditLine } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';

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

interface CardProps {
  posts: Post[];
}

export class Card extends Component<CardProps> {
  render() {
    const { posts } = this.props;
    console.log('Posts in Card:', posts);

  const [isValidUrl, setIsValidUrl] = useState(true); // Флаг для отслеживания валидности URL

  const handleImageError = () => {
    setIsValidUrl(false); // Если произошла ошибка загрузки, меняем флаг
  };
    
    return (
      <div>
        {posts.length === 0 ? <p>No posts available</p> : (
          posts.map(post => (
            <div key={post.id} className='post-card'>
              <div className="header-post">
                <div className="user-info">
                  <img src={post.userImg} alt={post.userName} />
                  <span>{post.userName}</span>
                </div>
                <div className="btns-post">
                  <button>
                    <RiEditLine className='btns-post-icon' size={25} />
                    <span>Редактировать пост</span>
                  </button>
                  <button>
                    <AiOutlineDelete className='btns-post-icon' size={25} />
                    <span>Удалить</span>
                  </button>
                </div>
              </div>
              {isValidUrl && <img src={post.postCover} alt={post.postTitle} onError={handleImageError} />}
              <h2>{post.postTitle}</h2>
              <h3>{post.postSubTitle}</h3>
              <p>{post.postContent}</p>
              {/* Добавьте здесь остальной контент поста, если нужно */}
            </div>
          ))
        )}
      </div>
    );
  }
}
