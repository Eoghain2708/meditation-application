import type { Meditation } from "../types/Meditation";

const BASE_URL: string = "http://localhost:3000/meditations"
export async function getMeditations(query = ""): Promise<Meditation[]> {

    const url = query ? `${BASE_URL}?${query}` : BASE_URL;

    const token = localStorage.getItem("token");
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Unauthorised")
    }

    return response.json();
}

export async function getMeditationById(id: number): Promise<Meditation> {
    const token = localStorage.getItem("token");

    const response = await fetch(`${BASE_URL}/${id}}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Unauthorised.")
    }

    return response.json();
}



