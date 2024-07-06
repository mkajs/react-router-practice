export async function postsLoader() {
  const posts = await fetch(`${import.meta.env.VITE_API_URL}/posts`).then(
    (res) => res.json()
  );
  return { posts };
}
export async function usersLoader() {
  const users = await fetch(`${import.meta.env.VITE_API_URL}/users`).then(
    (res) => res.json()
  );
  return { users };
}
export async function userLoader({ params }) {
  const user = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${params.id}`
  ).then((res) => res.json());
  return { user };
}
export async function todosLoader() {
  const todos = await fetch(`${import.meta.env.VITE_API_URL}/todos`).then(
    (res) => res.json()
  );
  return { todos };
}

export async function postLoader({ params }) {
  const post = await fetch(
    `${import.meta.env.VITE_API_URL}/posts/${params.id}`
  ).then((res) => res.json());
  return { post };
}
