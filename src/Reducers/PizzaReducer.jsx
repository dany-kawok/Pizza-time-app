export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, error: "", data: action.payLoad };

    case "FETCH_ERROR":
      return { loading: false, error: "Something went wrong", post: {} };
    default:
      return { loading: true, error: "", data: {} };
  }
}
