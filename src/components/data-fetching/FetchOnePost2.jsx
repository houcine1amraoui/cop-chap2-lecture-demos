import { useState } from "react";

function FetchOnePost2() {
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState(null);

  const fetchOnePost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch the given post");
      }
      const onePost = await response.json();
      setPost(onePost);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button onClick={fetchOnePost}>Feth the post</button>
      </div>
      {post && post.title}
    </div>
  );
}

export default FetchOnePost2;
