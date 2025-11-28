import { useEffect, useState } from "react";

function FetchOnePost1() {
  const [postId, setPostId] = useState("1");
  const [post, setPost] = useState(null);

  useEffect(() => {
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
    fetchOnePost();
  }, [postId]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
      </div>
      {post && post.title}
    </div>
  );
}

export default FetchOnePost1;
