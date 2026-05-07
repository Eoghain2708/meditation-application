import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-900/20 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/about-us"
            className="text-xl font-semibold text-purple-400"
          >
            OnlyPeace
          </Link>

          <div className="hidden md:flex gap-10 items-center">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/meditations" className="nav-link">Meditations</Link>
            <Link to="/meditation-sessions" className="nav-link">Sessions</Link>
          </div>

          <button
            className="md:hidden text-zinc-200"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-3 bg-zinc-900 border-t border-zinc-800 flex flex-col text-left">
          <Link to="/dashboard" className="mobile-link">Dashboard</Link>
          <Link to="/meditations" className="mobile-link">Meditations</Link>
          <Link to="/meditation-sessions" className="mobile-link">Sessions</Link>
        </div>
      )}
    </nav>
  );
}