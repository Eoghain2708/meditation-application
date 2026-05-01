import type { MeditationSession } from "../../types/MeditationSession";

const BASE_URL = "http://localhost:3000/meditations"

export async function getSessionsByMeditation(meditation_id: number): Promise<MeditationSession[]> {
    const token = localStorage.getItem("token")
    const response = await fetch(`${BASE_URL}/${meditation_id}/meditation-sessions`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Unauthorised");
    }

    return response.json();
}