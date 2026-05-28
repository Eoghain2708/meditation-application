import { useState, useEffect } from "react";
import type { User } from "../types/User";
import getCurrentUser from "../api/users/getCurrentUser";
import { AuthContext } from "./authContext";

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await getCurrentUser();
        setCurrentUser(data);
      } catch {
        localStorage.removeItem("user_id");
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
