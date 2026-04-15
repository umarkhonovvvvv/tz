import Link from "next/link";

export const PostCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="card-custom">
      <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
      <p className="text-gray-400 mb-4 line-clamp-2">{post.body}</p>
      <Link href={`/posts/${post.id}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Batafsil
      </Link>
    </div>
  );
};
