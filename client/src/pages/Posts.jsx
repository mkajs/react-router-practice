import { useLoaderData } from "react-router-dom";
import PostCard from "../components/PostCard";

const Posts = () => {
  const { posts } = useLoaderData();
  return (
    <div className="flex gap-4 flex-col">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
export default Posts;
