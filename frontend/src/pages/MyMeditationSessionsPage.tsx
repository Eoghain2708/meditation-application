import type { MeditationSession } from "../types/MeditationSession"
import { getMyMeditationSessions } from "../api/meditation-sessions/myMeditationSessions"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MeditationSessionCard from "../components/MeditationSessionCard";

export default function MyMeditationSessionsPage() {
    const [sessions, setSessions] = useState<MeditationSession[]>([]);

    useEffect(() => {
        getMyMeditationSessions().then(setSessions);
    }, []);

    if (sessions.length < 1) {
        return (
            <div>
                <h2>No sessions found...</h2>
                <Link to="/meditations">
                    <span className="text-purple-500 underline">Go to the meditations page </span>
                </Link>
                <span>to add one.</span>
            </div>
        )
    }

    return (
        <div>
            {sessions.map((session) => (
                <Link to={`/meditation-sessions/${session.id}`} className="group">
                    <MeditationSessionCard meditationSession={session} />
                </Link>
            ))}
        </div>
    )



}