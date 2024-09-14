import React, { Component } from 'react';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import Cards from './Components/Cards'; // Убедитесь, что путь к файлу правильный

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

interface PostsState {
  posts: Post[];
}

export class App extends Component<{}, PostsState> {
  state: PostsState = {
    posts: [
      {
        id: 1,
        userImg: "https://i.pinimg.com/564x/c1/61/50/c16150c3ef51107f16da504d552da3f0.jpg",
        userName: "John Doe",
        postCover: "https://i.pinimg.com/564x/c1/61/50/c16150c3ef51107f16da504d552da3f0.jpg",
        postTitle: "Sample Post Title",
        postSubTitle: "Sample Post Subtitle",
        postContent: "This is the content of the post.",
        linkNameFirst: "First Link",
        linkFirst: "https://www.pinterest.com/pin/3518505953436717/",
        linkNameSecond: "Second Link",
        linkSecond: "https://www.pinterest.com/pin/3518505953436717/",
        linkThirdName: "Third Link",
        linkThird: "https://www.pinterest.com/pin/3518505953436717/",
      },
      {
        id: 2,
        userImg: "",
        userName: "Jane Doe",
        postCover: "",
        postTitle: "Sample Post Title",
        postSubTitle: "Sample Post Subtitle",
        postContent: "This is the content of the post.",
        linkNameFirst: "First Link",
        linkFirst: "https://www.pinterest.com/pin/2322237296151247/",
        linkNameSecond: "Second Link",
        linkSecond: "https://www.pinterest.com/pin/2322237296151247/",
        linkThirdName: "",
        linkThird: "",
      }
    ]
  };
  
  render() {
    return (
      <>
        <Header />
        <Cards posts={this.state.posts} />
        <Footer />
      </>
    );
  }
}

export default App;
