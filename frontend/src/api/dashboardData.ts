import type { DashboardData } from "../types/DashboardData";
import { redirect } from "react-router-dom";

const BASE_URL = "http://localhost:3000/me"

export async function getDashboardData(): Promise<DashboardData> {
    const token = localStorage.getItem("token");
    const response = await fetch(BASE_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })

     if (!response.ok) {
        redirect("/");
        throw new Error("Unauthorised")
    }

    return response.json();
}