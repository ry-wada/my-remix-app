const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-light mb-2">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-600 mb-4">
              Get latest news, updates and deals directly mailed to your inbox
            </p>
          </div>
          <div className="text-center md:text-left">
            <form className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Your email address here"
                className="border-b-2 border-gray-400 outline-none px-4 py-2 w-1/2"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 border-b-2 border-gray-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-2 underline">VASO</h3>
            <p className="text-gray-600 text-sm">
              Nunc tristique facilisis consectetur vivamus ut porta porta
              aliquam vitae vehicula leo nullam urna lectus.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="text-gray-700 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:underline">
                  Account
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-2">Contact Info</h3>
            <p className="text-gray-600 text-sm">Tea Berry, Marinette, USA</p>
            <p className="text-gray-600 text-sm">+31 939 777 6366234</p>
            <p className="text-gray-600 text-sm">contact@templatesjungle.com</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-2">Social Info</h3>
            <p className="text-gray-600 text-sm mb-2">
              You can follow us on our social platforms to get updates.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center mt-8">
        <p className="text-gray-600 text-sm">
          &copy; Copyright 2023 Vaso. Design by TemplatesJungle
        </p>
      </div>
    </footer>
  );
};

export default Footer;
