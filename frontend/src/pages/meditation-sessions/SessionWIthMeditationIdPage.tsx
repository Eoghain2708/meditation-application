import { getSessionByMeditationAndId } from "../../api/meditation-sessions/meditationMeditationSessions";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { MeditationSession } from "../../types/MeditationSession";
import LoadingPage from "../LoadingPage";
import NotFound from "../../components/NotFound";
import MeditationSessionView from "../../components/meditation-sessions/MeditationSessionView";
import { Link } from "react-router-dom";
import BackLink from "../../components/links/BackLink"

export default function SessionWithMeditationIdPage() {
    const { meditationId, id } = useParams();


    const [session, setSession] = useState<MeditationSession | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!meditationId || !id) { return; }
        async function loadSession() {
            const data = await getSessionByMeditationAndId(Number(meditationId), Number(id));
            try {
                setSession(data);
            } catch {
                setSession(null);
            } finally {
                setLoading(false);
            }
        }

        loadSession()
    }, [meditationId, id])

    if (loading) {
        return <LoadingPage />;
        
    }

    if (!session) {
        return <NotFound object="session" link={`/meditations/${meditationId}/sessions`} />;
    }

    return (
        <>
        <MeditationSessionView session={session} isOwner={false} />
        <Link to={`/meditations/${meditationId}/sessions`}>
            <BackLink text="Back" />
        </Link>
        </>
    )


}