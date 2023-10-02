import { useState, FC } from "react";
import { Link } from "wouter";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="min-h-full backdrop-blur-xl">
      <nav className="sticky top-0 z-1 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop menu */}
            <div className="flex items-center">
              <div className="flex shrink-0">
                <Link to="/" className="text-white">
                  Marvel
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-3 flex items-baseline space-x-2">
                  <Link
                    to="/"
                    className="text-white hover:bg-red-800 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/heroes"
                    className="text-white hover:bg-red-800 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Heroes
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile menu title */}
            <div className="flex mr-10 md:hidden">
              <p className="text-white font-bloc">Heroes App</p>
            </div>

            {/* Hamburger Menu */}
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-800 focus-outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>

        {/* Show mobile menu */}
        {showMenu && (
          <div className="flex flex-col px-2 py-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:bg-red-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/heroes"
              className="text-white hover:bg-red-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Heroes
            </Link>
          </div>
        )}
      </nav>

      {children}
    </div>
  );
};

export default Navbar;
