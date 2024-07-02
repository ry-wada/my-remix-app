import { IMAGEパス } from "lib/config";

const Sidebar = () => {
  return (
    <div className="bg-white p-4">
      <form className="mb-4 relative">
        <input
          type="text"
          placeholder="Search"
          className="border-b-2 border-gray-300 outline-none w-full py-1 px-2"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-2 mr-2 text-gray-400"
        >
          🔍
        </button>
      </form>

      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2 underline">CATEGORIES</h2>
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
        <h2 className="font-bold text-lg mb-2 underline">TAGS</h2>
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
        <h2 className="font-bold text-lg mb-2 underline">LATEST POSTS</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <img
              src={`${IMAGEパス}/最新記事１.png`}
              alt="Post 1"
              className="w-12 h-12 mr-3"
            />
            <a href="/" className="text-black hover:underline">
              How To Take Care Of Ceramic Pots
            </a>
          </li>
          <li className="flex items-center">
            <img
              src={`${IMAGEパス}/最新記事２.png`}
              alt="Post 2"
              className="w-12 h-12 mr-3"
            />
            <a href="/" className="text-black hover:underline">
              Best Vases In The World
            </a>
          </li>
          <li className="flex items-center">
            <img
              src={`${IMAGEパス}/最新記事３.png`}
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
        <h2 className="font-bold text-lg mb-2 underline">SOCIAL LINKS</h2>
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
