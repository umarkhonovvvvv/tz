import Link from "next/link";
export const PostCard = ({ post }: { post: any }) => (
  <div className="card-custom p-6 bg-gray-900 rounded-xl border border-gray-800 mb-4">
    <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
    <p className="text-gray-400 mb-4">{post.body.substring(0, 30)}...</p>
    <Link href={`/posts/${post.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Детальніше
    </Link>
  </div>
);
