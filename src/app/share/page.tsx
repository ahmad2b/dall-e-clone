import Gallery from "@/components/Gallery";

const getPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const posts = await res.json();
  return posts;
};

const Share = async () => {
  const { posts } = await getPosts();
  console.log(posts);
  return (
    <main className="max-w-5xl mx-auto">
      <Gallery posts={posts} />
    </main>
  );
};

export default Share;
