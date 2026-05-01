import type { MeditationSession, MeditationSessionData } from "../../types/MeditationSession";

const BASE_URL = "http://localhost:3000/meditation-sessions";

export async function getMyMeditationSessions(): Promise<MeditationSession[]> {
    const token = localStorage.getItem("token")
    const response = await fetch(BASE_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Unauthorised")
    }

    return response.json();
}

export async function getMyMeditationSessionById(id: number): Promise<MeditationSession> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error("Unauthorised");
    }

    return response.json();
}

export async function createMeditationSession(data: MeditationSessionData): Promise<MeditationSession> {
    const token = localStorage.getItem("token")
    const response = await fetch(BASE_URL, {
        method: "POST", 
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            meditation_session: data
        })
    });

    return response.json();
}

export async function deleteMeditationSession(id: number): Promise<MeditationSession> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    return response.json();
}