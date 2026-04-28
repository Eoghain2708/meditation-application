const BASE_URL: string = "http://localhost:3000/categories"

export async function getCategories(): Promise<string[]> {
    const token = localStorage.getItem("token");
    const res = await fetch(BASE_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.json();
}