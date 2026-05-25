import { Link, useParams } from "react-router-dom";
import type { MeditationSession } from "../../types/MeditationSession";
import { useState, useEffect } from "react";
import { getUserMeditationSessionById } from "../../api/meditation-sessions/userMeditationSessions";
import LoadingPage from "../LoadingPage";
import NotFound from "../../components/NotFound";
import MeditationSessionView from "../../components/meditation-sessions/MeditationSessionView";
import BackLink from "../../components/links/BackLink";

export default function UserMeditationSessionByIdPage() {
  const { userId, meditationId } = useParams();
  const [session, setSession] = useState<MeditationSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId || !meditationId) {
      return;
    }
    async function loadSession() {
      try {
        const data = await getUserMeditationSessionById(
          Number(userId),
          Number(meditationId),
        );
        setSession(data);
      } catch (e) {
        console.log("Error fetching session", e);
      } finally {
        setLoading(false);
      }
    }

    loadSession();
  }, [userId, meditationId]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!session) {
    return <NotFound object="meditation session" link={`/users/${userId}`} />;
  }

  return (
    <>
      <div className="py-2 absolute top-20 left-3">
        <Link to={`/users/${userId}`}>
          <BackLink text={`Back to profile`} />
        </Link>
      </div>
      <MeditationSessionView isOwner={false} session={session} />
    </>
  );
}
