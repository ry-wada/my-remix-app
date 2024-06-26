const Sidebar = () => {
  return (
    <div className="bg-white p-4">
      <form className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border-b-2 border-gray-400 outline-none w-full py-1 px-2"
        />
      </form>

      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">CATEGORIES</h2>
        <ul className="space-y-1">
          <li>
            <a href="/" className="text-black hover:underline">
              All
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Japanese
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Ceramic
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Ancient
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Soft Pots
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">TAGS</h2>
        <ul className="space-y-1">
          <li>
            <a href="/" className="text-black hover:underline">
              Off-White
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Cheap
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Vintage
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Modern
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">LATEST POSTS</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <img
              src="https://via.placeholder.com/60"
              alt="Post 1"
              className="w-12 h-12 mr-3"
            />
            <a href="/" className="text-black hover:underline">
              How To Take Care Of Ceramic Pots
            </a>
          </li>
          <li className="flex items-center">
            <img
              src="https://via.placeholder.com/60"
              alt="Post 2"
              className="w-12 h-12 mr-3"
            />
            <a href="/" className="text-black hover:underline">
              Best Vases In The World
            </a>
          </li>
          <li className="flex items-center">
            <img
              src="https://via.placeholder.com/60"
              alt="Post 3"
              className="w-12 h-12 mr-3"
            />
            <a href="/" className="text-black hover:underline">
              Get Some Cool Vintage Vases 2023
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">SOCIAL LINKS</h2>
        <ul className="space-y-1">
          <li>
            <a href="/" className="text-black hover:underline">
              Facebook
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Pinterest
            </a>
          </li>
          <li>
            <a href="/" className="text-black hover:underline">
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
