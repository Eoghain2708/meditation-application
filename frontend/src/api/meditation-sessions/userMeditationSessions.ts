import type { MeditationSession } from "../../types/MeditationSession";
import { redirect } from "react-router-dom";
import type { UserPageData } from "../../types/UserPageData";

const BASE_URL = "http://localhost:3000/users"

export async function getUserMeditationSessions(user_id: number): Promise<UserPageData> {
    const token = localStorage.getItem("token")
    const response = await fetch(`${BASE_URL}/${user_id}/meditation-sessions`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        redirect("/");
        throw new Error("Unauthorised")
    }

    return response.json();
}

export async function getUserMeditationSessionById(user_id: number, meditation_id: number): Promise<MeditationSession> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/${user_id}/meditation-sessions/${meditation_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        redirect("/");
        throw new Error("Unauthorised");
    }

    return response.json();
}