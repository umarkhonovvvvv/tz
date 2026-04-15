import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const PostCard = ({ post }: { post: Post }) => {
  if (!post) return null;
  const shortBody = post.body.length > 30 ? post.body.substring(0, 30) + "..." : post.body;

  return (
    <div className="card-custom flex flex-col h-full p-6 bg-gray-900 rounded-xl border border-gray-800">
      <h2 className="text-xl font-bold mb-2 text-white line-clamp-1">{post.title}</h2>
      <p className="text-gray-400 mb-4 flex-grow">{shortBody}</p>
      <Link href={`/posts/${post.id}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit transition-colors">
        Детальніше
      </Link>
    </div>
  );
};
