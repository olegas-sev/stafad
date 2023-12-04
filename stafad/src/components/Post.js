const Post = (props) => {
  return (
    <div class="listing">
      <img src={props.img} alt="Item 1" />
      <h2>{props.postTitle}</h2>
      <p>{props.postDate}</p>
      <p>{props.postCategory}</p>
      <p>{props.postPrice}</p>
      <p>{props.postDescription}</p>
      <button>Contact Seller</button>
    </div>
  );
};
export default Post;
