
const SimpleMenu = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-blue-600">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default SimpleMenu;
