import type { MeditationSession } from "../../types/MeditationSession";
import { redirect } from "react-router-dom";

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
        redirect("/");
        throw new Error("Unauthorised");
    }

    return response.json();
}