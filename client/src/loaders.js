async function getData(urlPath) {
  const result = await fetch(`${import.meta.env.VITE_API_URL}${urlPath}`).then(
    (res) => res.json()
  );
  return result;
}
export async function postsLoader() {
  const posts = await getData(`/posts`);
  return { posts };
}
export async function usersLoader() {
  const users = await getData(`/users`);
  return { users };
}
export async function userLoader({ params }) {
  const user = await getData(`/users/${params.id}`);
  return { user };
}
export async function todosLoader() {
  const todos = await getData(`/todos`);
  return { todos };
}

export async function postLoader({ params }) {
  const post = await getData(`/posts/${params.id}`);
  return { post };
}
