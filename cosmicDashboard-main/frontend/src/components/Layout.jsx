import { NavLink, Outlet } from "react-router-dom";
import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-gray-300 hover:text-blue-400 transition-colors";

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col">
      <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 text-white">
            <Rocket className="text-blue-500" size={28} />
            <span className="text-xl font-bold tracking-tight">Cosmic Dashboard</span>
          </NavLink>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            <NavLink to="/mars-explorer" className={getNavLinkClass}>Mars Explorer</NavLink>
            <NavLink to="/neo-tracker" className={getNavLinkClass}>NEO Tracker</NavLink>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu (slides down) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-6 py-4 flex flex-col gap-4">
              <NavLink
                to="/"
                className={getNavLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/mars-explorer"
                className={getNavLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Mars Explorer
              </NavLink>
              <NavLink
                to="/neo-tracker"
                className={getNavLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                NEO Tracker
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto p-6 md:p-8 flex-grow">
        <Outlet />
      </main>

      <footer className="h-[80px]  flex-shrink-0 flex items-center justify-center text-gray-500 text-xs border-t border-gray-800">
        <p className="m-auto p-0.5">Powered by NASA's Open APIs. Designed and developed with passion.</p>
      </footer>
    </div>
  );
};

export default Layout;
