import { useParams } from "react-router-dom";
import type { Meditation } from "../../types/Meditation";
import { getMeditationById } from "../../api/meditations"; 
import { useEffect, useState } from "react";
import MeditationNotFoundPage from "./MeditationNotFoundPage";
import LoadingPage from "../LoadingPage";
import { Link } from "react-router-dom";

export default function MeditationByIdPage() {

    const { id } = useParams();

    const [ meditation, setMeditation ] = useState<Meditation | null>(null);
    
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        if (!id) {
            return;
        }

        async function loadMeditation() {
            try {
                const data = await getMeditationById(Number(id));
                setMeditation(data);
            } catch {
                setMeditation(null);
            } finally {
                setLoading(false);
            }
        }

        loadMeditation();
    }, [id]);
    

    if (loading) {
        return (
            <LoadingPage />
        )
    }

    if (!meditation) {
        return (
            <MeditationNotFoundPage />
        )
    }

    return (
        <>
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
        
        <Link to={`/meditations/${id}/sessions/new`}><button className="py-2 px-4 bg-purple-400 rounded-lg">
            Create a session with this meditation
            </button></Link>

        <Link to={'/meditations'}><p className="py-5 px-4 text-purple-500 underline rounded-lg">
            Back to meditations</p>
            </Link>
        </>
    )
}