import Post from '../components/Post';
import imgExample from '../images/macbook.jpg';
import imgExampleTwo from '../images/guitar.jpg';
import imgExampleThree from '../images/audia6.avif';
import imgExampleFour from '../images/macbook.jpg';
import SearchItem from '../components/SearchItem';

import React, { useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (newPostData) => {
    const newPost = { ...newPostData };
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <SearchItem />
      <h1>Latest listings</h1>
      <Post img={imgExample} postTitle={'bla'} postDescription={'bla'} />
      <Post img={imgExampleTwo} postTitle={'bla'} postDescription={'bla'} />
      <Post img={imgExampleThree} postTitle={'bla'} postDescription={'bla'} />
      <Post img={imgExampleFour} postTitle={'bla'} postDescription={'bla'} />
    </>
  );
}
