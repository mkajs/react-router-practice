import { useLoaderData } from "react-router-dom";

const User = () => {
  const { user } = useLoaderData();
  return <div>{`${user.name}`}</div>;
};
export default User;
