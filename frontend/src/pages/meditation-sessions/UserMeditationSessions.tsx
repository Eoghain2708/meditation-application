import { getUserMeditationSessions } from "../../api/meditation-sessions/userMeditationSessions";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import NotFound from "../../components/NotFound";
import type { UserPageData } from "../../types/UserPageData";
import MeditationSessionCard from "../../components/meditation-sessions/MeditationSessionCard";
import defaultImage from "../../../src/default-avatar.avif";

export default function UserMeditationSessionsPage() {
  const { id } = useParams();

  const [pageData, setPageData] = useState<UserPageData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function loadPageData() {
      try {
        const data = await getUserMeditationSessions(Number(id));
        setPageData(data);
      } catch {
        console.log("Error fetching data");
      } finally {
        setLoading(false);
      }
    }

    loadPageData();
  }, [id]);

  if (loading) return <LoadingPage />;

  if (!pageData)
    return <NotFound object="meditation sessions" link="/meditations" />;

  return (
    <>
      <h1>{pageData.username}</h1>
      <div className="mt-2 mb-5 py-4">
        {pageData.bio ? <p>{pageData.bio}</p> : <p>This user has no bio</p>}
      </div>
      <img
        src={pageData.avatar_url ? `${pageData.avatar_url}` : defaultImage}
        className="rounded-full size-20 mx-auto mb-10 object-cover"
      />

      <h2>Sessions</h2>

      {pageData.meditations.length ? (
        pageData.meditations.map((session) => (
          <Link key={session.id} to={`/users/${id}/sessions/${session.id}`}>
            <MeditationSessionCard meditationSession={session} />
          </Link>
        ))
      ) : (
        <p>No sessions yet.</p>
      )}
    </>
  );
}
