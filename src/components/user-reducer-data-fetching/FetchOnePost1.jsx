import { useEffect, useState } from "react";

function FetchOnePost1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        // artificial delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch the given post");
        }
        const onePost = await response.json();
        setLoading(false);
        setError("");
        setPost(onePost);
      } catch (error) {
        setLoading(false);
        setPost({});
        setError(error.message);
      }
    };
    fetchOnePost();
  }, []);

  return (
    <div>
      {loading ? "loading..." : post.title}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default FetchOnePost1;
