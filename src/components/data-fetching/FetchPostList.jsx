import { useEffect, useState } from "react";

function FetchPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const postList = await response.json();
        setPosts(postList);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPostList();
    console.log("fetch");
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchPostList;
