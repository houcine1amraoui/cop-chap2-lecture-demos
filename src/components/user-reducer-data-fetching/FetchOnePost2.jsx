import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "error":
      return {
        loading: false,
        error: action.payload,
        post: {},
      };

    default:
      return state;
  }
};
function FetchOnePost2() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        console.log(onePost);
        dispatch({ type: "success", payload: onePost });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      }
    };
    fetchOnePost();
  }, []);

  return (
    <div>
      {state.loading ? "loading..." : state.post.title}
      {state.error && <p style={{ color: "red" }}>Error: {state.error}</p>}
    </div>
  );
}

export default FetchOnePost2;
