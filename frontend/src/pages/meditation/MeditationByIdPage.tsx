import { useParams } from "react-router-dom";
import type { Meditation } from "../../types/Meditation";
import { getMeditationById } from "../../api/meditations"; 
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";
import { Link } from "react-router-dom";
import NotFound from "../../components/NotFound";
import BackLink from "../../components/links/BackLink"
import ForwardLink from "../../components/links/ForwardLink"

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
            <NotFound object="meditation" link="/meditations" />
        )
    }

    return (
        <>
        <main className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">
        <h1 className="pb-5">{meditation.title}</h1>
        <div className="max-w-3/5">
        <p className="pb-5">This meditation falls under the <span className="text-purple-400">{meditation.category}</span> category</p>
        <span className="text-3xl font-bold text-purple-300">Description</span>
        <p className="py-5">{meditation.description}</p>
        <span className="text-3xl font-bold text-purple-300">Technique</span>
        <p className="py-5">{meditation.technique}</p>
        { meditation.benefits && 
        <>
        <span className="text-3xl font-bold text-purple-300">Benefits</span>
        <p className="pt-2.5">{meditation.benefits}</p>
        </>
        }
        </div>
        </main>
        <div className="flex flex-col gap-5 items-center justify-center">
        <Link to={`/meditations/${id}/sessions/new`}><button className="py-2 px-4 bg-purple-700/50 hover:bg-purple-600 hover:scale-105 duration-100 rounded-lg">
            Create a session with this meditation
            </button></Link>
        <Link to={`/meditations/${id}/sessions`}>
            <ForwardLink text="Sessions with this meditation" />
        </Link>
        
        <Link to={'/meditations'}>
            <BackLink text="Back to meditations" />
        </Link>
        </div>
        </>
    )
}