import type { User } from "../../types/User";

const URL = "http://localhost:3000/users/current";

export default async function getCurrentUser(): Promise<User> {
  const token = localStorage.getItem("token");
  const response = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  if (!response.ok) {
    throw new Error("Can't find current user");
  }

  return response.json();
}