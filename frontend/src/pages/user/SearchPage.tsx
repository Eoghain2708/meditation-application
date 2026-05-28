import type { UserSearchData } from "../../types/UserSearchData";
import searchUsers from "../../api/users/searchUsers";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import SearchBar from "../../components/meditations/SearchBar";
import defaultImage from "../../../src/default-avatar.avif";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("username");
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserSearchData[] | null>(null);
  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await searchUsers(query);
        setUsers(data);
        console.log(data);
      } catch {
        throw new Error("Error finding users");
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, [query]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!query) {
    return (
      <>
        <div className="mt-10">
          <h2>Search a user:</h2>
          <SearchBar param="username" />
        </div>
      </>
    );
  }

  if (!users || users.length === 0) {
    return (
      <>
        <div className="mt-10">
          <SearchBar param="username" />
          <div>
            <p>No users found.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-evenly mt-10">
        <SearchBar param="username" />
        <div className="w-2/3 sm:max-w-1/3">
          {users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <div className="border-b-2 border-blue-700 hover:scale-103 duration-200 rounded-3xl shadow-md my-3 py-5 px-5 flex flex-row justify-evenly min-w-full">
                <div className="flex flex-row items-center min-w-full">
                  <div className="min-w-1/4">
                    <img
                      src={
                        user.avatar_url ? `${user.avatar_url}` : defaultImage
                      }
                      className="rounded-full size-12"
                    />
                  </div>
                  <div className="min-w-3/4">
                    <p>{user.username}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
