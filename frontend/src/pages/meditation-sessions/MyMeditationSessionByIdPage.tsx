import type { MeditationSession } from "../../types/MeditationSession";
import { getMyMeditationSessionById } from "../../api/meditation-sessions/myMeditationSessions";
import { useState, useEffect } from "react";
import NotFound from "../../components/NotFound";
import { useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import { Link } from "react-router-dom";
import BackLink from "../../components/links/BackLink"
import { useNavigate } from "react-router-dom";
import { deleteMeditationSession } from "../../api/meditation-sessions/myMeditationSessions";
import { changePrivacy } from "../../api/meditation-sessions/changePrivacy";


export default function MeditationSessionByIdPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    // delete function
    const handleDelete = async () => {

      const confirmed = window.confirm("Are you sure you want to delete this meditation?")

      if (!confirmed) { return; }

      try {
        await deleteMeditationSession(Number(id))
        navigate("/meditation-sessions")
      } catch {
        alert("Failed to delete meditation");
      }
    }

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

    const handlePrivacyChange = async () => {
      const newPrivacy: boolean = !session.public

      const confirmed = window.confirm(`Are you sure you want to make this session 
        ${newPrivacy ? "public" : "private"}?`);
      
      if (!confirmed) { return; }

      try {
        await changePrivacy(Number(id), newPrivacy);
        setSession(prev => prev ? {...prev, public: newPrivacy} : prev)
      } catch (err) {
        console.log(err);
        alert("Error changing session privacy");
      }
    }


    if (loading) {
        return <LoadingPage />
    }

    if (!session) {
        return <NotFound object="meditation session" link="/meditation-sessions" />
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">

    <header className="space-y-2">
      <h1 className="text-3xl font-semibold">
        Meditation Session
      </h1>

      <p className="text-gray-200">
        {new Date(session.created_at).toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </header>

   
    <section className="rounded-xl shadow-xl bg-gray-900/20 p-6 space-y-3">

      <h2 className="text-xl font-semibold py-5">
        {session.meditation.title}
      </h2>

      <p className="font-bold text-lg capitalize text-purple-400 py-5">
        {session.meditation.category}
      </p>

      <div className="flex flex-row justify-between pt-3 min-w-full">

        <div>
          <p className="text-lg font-bold">
            {session.duration} minutes
          </p>
        </div>

        <div className="flex flex-col">
        <div>
          <button onClick={handlePrivacyChange}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              session.public
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {session.public ? "Public" : "Private"}
          </button>
        </div>
        <div className="mt-5">
          <button onClick={handleDelete}className="rounded-full bg-red-500 px-5.5 hover:bg-red-500/50 py-0.5">🗑️</button>
        </div>
        </div>
      </div>
    </section>

   
    <section className="rounded-xl shadow-xl space-y-4 bg-gray-900/20">
      <h3 className="text-lg font-semibold">Session Notes</h3>

      {session.notes ? (
        <p className="whitespace-pre-line text-gray-200 leading-relaxed text-left py-3 px-5">
          {session.notes}
        </p>
      ) : (
        <p className="text-gray-200 italic">
          No notes recorded for this session.
        </p>
      )}
    </section>

  
    <div className="pt-4">
      <Link
        to="/meditation-sessions"
        className="text-purple-400 hover:underline"
      >
        <BackLink text="Back to all sessions" />
      </Link>
    </div>

  </div>
    )

}
