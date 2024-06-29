export async function postsLoader() {
  const posts = await fetch(`${import.meta.env.VITE_API_URL}/posts`).then(
    (res) => res.json()
  );
  return { posts };
}
