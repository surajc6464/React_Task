import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Home from "./Home";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Toggle Button (mobile/tablet only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl p-3 block lg:hidden"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className="flex flex-1 top-10">
        {/* Sidebar */}
        <aside
          className={`
            fixed top-17 left-0 h-full w-60 scroll-auto bg-white shadow-md z-40 
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:static lg:block
          `}
        >
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <Home />
          <Pagination />
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
