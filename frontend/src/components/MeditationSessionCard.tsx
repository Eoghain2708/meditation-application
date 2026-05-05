import type { MeditationSession } from "../types/MeditationSession";

type Props = {
    meditationSession: MeditationSession;
}

export default function MeditationSessionCard({ meditationSession }: Props) {

    const createdAt = new Date(meditationSession.created_at);

    if (!meditationSession) {
        return <p>Loading...</p>
    }

    return (
        <div className="  duration-200  
          block
          shadow-md
          py-5
          my-5
          hover:shadow-xl
          hover:scale-105  
          transition
          rounded-xl
          bg-purple-900/10
          mx-auto
          max-w-1/2">
        <h2 className="py-2">Session{" "}<span>{createdAt.toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })}</span></h2>
        <p className="text-purple-400 capitalize pt-3 pb-4">{meditationSession.meditation.category}</p>
        <p className="font-bold">{meditationSession.meditation.title}</p>
        <p className="text-sm">Duration: <span className="text-sm font-bold">{meditationSession.duration} minutes</span></p>
        </div>
    )
}