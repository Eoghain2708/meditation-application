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
        <div>
        <h2 className="py-5">Session{" "}<span>{createdAt.toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })}</span></h2>
        <p className="font-light text-purple-400">{meditationSession.meditation.category}</p>
        <p className="font-bold">{meditationSession.meditation.title}</p>
        <p className="text-sm">Duration: <span className="text-sm font-bold">{meditationSession.duration} minutes</span></p>
        </div>
    )
}