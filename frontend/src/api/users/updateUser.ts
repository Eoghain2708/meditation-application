const URL = "http://localhost:3000/users/update";

export default async function updateUser(bio: string, avatar: File | null) {
  const token = localStorage.getItem("token");
  const formData = new FormData();

  formData.append("bio", bio);

  if (avatar) {
    formData.append("avatar", avatar);
  }
  const response = await fetch(URL, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  })

  if (!response.ok) {
    const errorText = await response.text();
    alert(`${errorText}, ${response.status}`)
  }

  return response.json();
}