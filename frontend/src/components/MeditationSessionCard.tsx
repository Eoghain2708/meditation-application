import type { MeditationSession } from "../types/MeditationSession";

type Props = {
    meditationSession: MeditationSession;
}

export default function MeditationSessionCard({ meditationSession }: Props) {
    return (
        <div>
        <h2 className="py-5">Session <span>{Date.parse(meditationSession.created_at)}</span></h2>
        <p className="font-light text-purple-400">{meditationSession.meditation.category}</p>
        <p className="font-bold">{meditationSession.meditation.title}</p>
        <p className="text-sm">Duration: <span className="text-sm font-bold">{meditationSession.duration} minutes</span></p>
        </div>
    )
}