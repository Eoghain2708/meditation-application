import { useParams } from "react-router-dom";
import type { Meditation } from "../types/Meditation";
import { getMeditationById } from "../api/meditations";
import { useEffect, useState } from "react";
import MeditationNotFoundPage from "./MeditationNotFoundPage";

export default function MeditationByIdPage() {

    const { id } = useParams();

    const [ meditation, setMeditation ] = useState<Meditation | null>(null);

    useEffect(() => {
        if (!id) {
            return;
        }

        getMeditationById(Number(id)).then(setMeditation);
    }, [id]);

    if (!meditation) {
        return (
            <MeditationNotFoundPage />
        )
    }

    return (
        <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="pb-5">{meditation.title}</h1>
        <p className="pb-5">This meditation falls under the <span className="text-purple-400">{meditation.category}</span> category</p>
        <span className="text-3xl font-bold text-purple-300">Description</span>
        <p className="py-5">{meditation.description}</p>
        <span className="text-3xl font-bold text-purple-300">Technique</span>
        <p className="py-5">{meditation.technique}</p>
        { meditation.benefits && 
        <>
        <span className="text-3xl font-bold text-purple-300">Benefits</span>
        <p className="py-5">{meditation.benefits}</p>
        </>
        }
        </main>
    )
}