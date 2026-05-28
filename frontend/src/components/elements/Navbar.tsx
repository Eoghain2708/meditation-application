import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import defaultImage from "../../../src/default-avatar.avif";

export default function Navbar() {
  const { currentUser } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-900/20 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-row items-center w-1/5 justify-between">
            <Link to="/my-profile">
              <img
                src={
                  currentUser?.avatar_url
                    ? currentUser.avatar_url
                    : defaultImage
                }
                className="rounded-full size-12 min-w-12 mr-5"
              />
            </Link>
            <Link
              to="/about-us"
              className="text-xl font-semibold text-purple-400"
            >
              OnlyPeace
            </Link>
          </div>

          <div className="hidden md:flex gap-10 items-center">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/meditations" className="nav-link">
              Meditations
            </Link>
            <Link to="/meditation-sessions" className="nav-link">
              Sessions
            </Link>
            <Link to="/users/search" className="nav-link text-red-300">
              Search users ⌕
            </Link>
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
          <Link to="/dashboard" className="mobile-link">
            Dashboard
          </Link>
          <Link to="/meditations" className="mobile-link">
            Meditations
          </Link>
          <Link to="/meditation-sessions" className="mobile-link">
            Sessions
          </Link>
          <Link to="/users/search" className="nav-link">
            Search users ⌕
          </Link>
        </div>
      )}
    </nav>
  );
}
