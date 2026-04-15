import Link from "next/link";

export const PostCard = ({ post }: { post: any }) => {
  const shortBody = post.body.length > 30 ? post.body.substring(0, 30) + "..." : post.body;

  return (
    <div className="card-custom flex flex-col h-full">
      <h2 className="text-xl font-bold mb-2 text-white line-clamp-1">{post.title}</h2>
      <p className="text-gray-400 mb-4 flex-grow">{shortBody}</p>
      <Link href={`/posts/${post.id}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit transition-colors">
        Детальніше
      </Link>
    </div>
  );
};
