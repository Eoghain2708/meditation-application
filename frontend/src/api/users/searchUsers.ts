import type { UserSearchData } from "../../types/UserSearchData"

const BASE_URL = "http://localhost:3000/users/search"

export default async function searchUsers(query: string = ""): Promise<UserSearchData[]> {
  const token = localStorage.getItem("token");
  const url = query ? `${BASE_URL}?username=${query}` : BASE_URL;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })

  if (!res.ok) {
    throw new Error("Unauthorised")
  }
  
  return res.json();
}