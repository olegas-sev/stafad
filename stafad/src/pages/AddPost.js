import React, { useState } from 'react';
import Post from '../components/Post';

function NewPostForm({ onAddPost }) {
  const [newPostData, setNewPostData] = useState({
    img: '',
    postTitle: '',
    postDescription: '',
    postCategory: '',
    postDate: '',
    postPrice: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPostData({ ...newPostData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost(newPostData);
    setNewPostData({
      img: '',
      postTitle: '',
      postDescription: '',
      postPrice: '',
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={newPostData.img}
          onChange={handleChange}
        />
        <input
          type="text"
          name="postTitle"
          placeholder="What do you want to sell?"
          value={newPostData.postTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          name="postDescription"
          placeholder="Please tell us about the condition and measurements. However, avoid printing personal data such as address."
          value={newPostData.postDescription}
          onChange={handleChange}
        />
        <input
          type="number"
          name="postPrice"
          placeholder="Enter a price that is at least 0 IQD"
          min="0"
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

function AddPost() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPostData) => {
    console.log('New Post Data:', newPostData);

    const newPost = {
      id: Date.now(),
      img: newPostData.img,
      postTitle: newPostData.postTitle,
      postDescription: newPostData.postDescription,
    };

    setPosts([...posts, newPost]);
  };

  return (
    <>
      <h1>Add Post</h1>
      <NewPostForm onAddPost={handleAddPost} />
      {posts.map((post) => (
        <Post
          img={post.img}
          postTitle={post.postTitle}
          postDate={Date.now()}
          postDescription={post.postDescription}
        />
      ))}
    </>
  );
}

export default AddPost;
