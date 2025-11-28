import { useEffect, useState } from "react";

function FetchOnePost1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        // artificial delay (e.g., 2 seconds)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch the given post");
        }
        const onePost = await response.json();
        console.log(onePost);
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

  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div>
      {loading ? "loading..." : post.title}
      {error && error}
    </div>
  );
}

export default FetchOnePost1;
