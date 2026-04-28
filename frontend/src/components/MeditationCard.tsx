import type { Meditation } from "../types/Meditation";

type Props = {
    meditation: Meditation;
}
export default function MeditationCard({ meditation }: Props) {
    return (
        <div className="border-2 rounded-2xl p-5 h-full w-full hover:scale-105 hover:bg-purple-300/33 duration-75">
            <h3 className="mb-2 font-bold">{meditation.title}</h3>
            <p className="py-3 text-purple-400">{meditation.category.toUpperCase()}</p>
            <p className="mb-5">{meditation.description.substring(0, 100)}...</p>
        </div>
    )
}