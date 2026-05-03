import type { MeditationSession } from "../../types/MeditationSession";
import { getMyMeditationSessionById } from "../../api/meditation-sessions/myMeditationSessions";
import { useState, useEffect } from "react";
import NotFound from "../../components/NotFound";
import { useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import { Link } from "react-router-dom";

export default function MeditationSessionByIdPage() {
    const { id } = useParams();

    const [session, setSession] = useState<MeditationSession | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) { return; }

        async function loadSession() {
            try {
                const data = await getMyMeditationSessionById(Number(id));
                setSession(data)
            } catch {
                setSession(null)
            } finally {
                setLoading(false);
            }
        }

        loadSession()
    }, [id])

    if (loading) {
        return <LoadingPage />
    }

    if (!session) {
        return <NotFound object="meditation session" link="/meditation-sessions" />
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">

    {/* Header */}
    <header className="space-y-2">
      <h1 className="text-3xl font-semibold">
        Meditation Session
      </h1>

      <p className="text-gray-500">
        {new Date(session.created_at).toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </header>

    {/* Meditation Info Card */}
    <section className="rounded-xl shadow-md p-6 space-y-3">

      <h2 className="text-xl font-semibold text-purple-600">
        {session.meditation.title}
      </h2>

      <p className="text-sm capitalize">
        {session.meditation.category}
      </p>

      <div className="flex items-center gap-6 pt-3">

        <div>
          <p className="text-sm">Duration</p>
          <p className="text-lg font-medium">
            {session.duration} minutes
          </p>
        </div>

        <div>
          <p className="text-sm">Visibility</p>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              session.public
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {session.public ? "Public" : "Private"}
          </span>
        </div>

      </div>
    </section>

    {/* Notes */}
    <section className="rounded-xl shadow-md p-6 space-y-4">
      <h3 className="text-lg font-semibold">Session Notes</h3>

      {session.notes ? (
        <p className="whitespace-pre-line text-gray-700 leading-relaxed">
          {session.notes}
        </p>
      ) : (
        <p className="text-gray-400 italic">
          No notes recorded for this session.
        </p>
      )}
    </section>

    {/* Navigation */}
    <div className="pt-4">
      <Link
        to="/meditation-sessions"
        className="text-purple-400 hover:underline"
      >
        <span className="text-xl font-bold">←</span> Back to all sessions
      </Link>
    </div>

  </div>
    )

}
