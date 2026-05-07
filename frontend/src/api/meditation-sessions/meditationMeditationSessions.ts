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

export async function getSessionByMeditationAndId(meditation_id: number, id: number): Promise<MeditationSession> {
    const token = localStorage.getItem("token");
    const res = await fetch (`${BASE_URL}/${meditation_id}/meditation-sessions/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!res.ok) {
        throw new Error("Error fetching this session");
    }

    return res.json();
}