import type { MeditationSession } from "../../types/MeditationSession";
import { getMyMeditationSessionById } from "../../api/meditation-sessions/myMeditationSessions";
import { useState, useEffect } from "react";
import NotFound from "../../components/NotFound";
import { useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import { useNavigate } from "react-router-dom";
import { deleteMeditationSession } from "../../api/meditation-sessions/myMeditationSessions";
import { changePrivacy } from "../../api/meditation-sessions/changePrivacy";
import MeditationSessionView from "../../components/meditation-sessions/MeditationSessionView";


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

    const isOwner = session?.user?.id === Number(localStorage.getItem("user_id"));
    

    return (
      <MeditationSessionView session={session} isOwner={isOwner} onDelete={handleDelete} onPrivacyChange={handlePrivacyChange} />
    )

}
