import type { MeditationSession } from "../../types/MeditationSession";
import MeditationSessionCard from "../../components/MeditationSessionCard";
import { useEffect, useState } from "react";
import { getSessionsByMeditation } from "../../api/meditation-sessions/meditationMeditationSessions";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import BackLink from "../../components/links/BackLink"

export default function SessionsWithMeditationPage() {
    const { id } = useParams();
    const [sessions, setSessions] = useState<MeditationSession[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadSessions() {
            try {
                const data = await getSessionsByMeditation(Number(id));
                setSessions(data);
            } catch {
                setSessions(null);
            } finally {
                setLoading(false);
            }
        }

        loadSessions()
    }, [id])

    if (loading) {
        return <LoadingPage />
    }

    if (!sessions || sessions.length < 1) {
        return (
            <>
            <p>No meditation sessions found for this meditation</p>
            <Link to={`/meditations/${id}`}>
            <BackLink text="Back to meditation"/>
            </Link>
        </>
        )
    }

    return (
        <>
        <div className="fixed top-1 left-1 mt-16.5 py-2 px-3 md:px-2 sm:px-1 bg-emerald-300/20  rounded-lg font-bold z-50 sm:" >
        <Link to={`/meditations/${id}`}>
            <BackLink text="Back to meditation"/>
            </Link>
        </div>
        {sessions.map((s) => (
        <>
        <h2 className="capitalize pt-3">By: {s.user.username}</h2>
        <MeditationSessionCard meditationSession={s} />
        </>
       ))}
       </>
    )
}