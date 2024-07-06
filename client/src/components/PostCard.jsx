import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const PostCard = ({ title, body, id }) => {
  return (
    <div className="flex flex-col gap-4 rounded px-4 py-2 bg-slate-800 border-slate-700">
      <h2 className="badge-info bg-green-400 rounded px-4 py-2 max-w-fit ">
        {title}
      </h2>
      <div className="flex flex-row gap-3 items-center">
        <p className="">{body}</p>
        <Link to={`/posts/${id}`} className="btn btn-error">
          See the post
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
