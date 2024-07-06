import { useLoaderData } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <div className="card bg-base-100  shadow-xl">
      <div className="card-body">
        <span className="badge badge-success badge-md">Post#{post.id}</span>
        <h2 className="card-title w-3/5">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
export default Post;
