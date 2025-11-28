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
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch the given post");
        }
        const onePost = await response.json();
        dispatch({ type: "success", payload: onePost });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      }
    };
    fetchOnePost();
  }, []);

  if (state.error) return <p className="text-red-600">Error: {state.error}</p>;

  return <div>{state.loading ? "loading..." : state.post.title}</div>;
}

export default FetchOnePost2;
