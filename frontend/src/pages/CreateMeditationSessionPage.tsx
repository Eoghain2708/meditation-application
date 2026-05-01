import { useParams } from "react-router-dom";
import type { MeditationSessionData } from "../types/MeditationSession";
import { useState, useEffect } from "react";
import { createMeditationSession } from "../api/meditation-sessions/myMeditationSessions";
import { useNavigate } from "react-router-dom";
import { getMeditationById } from "../api/meditations";
import { Link } from "react-router-dom";

export default function CreateMeditationSessionPage() {
    const { id } = useParams();
    const meditationId = Number(id);

    const [meditation, setMeditation] = useState(null);

    const [formData, setFormData] = useState<MeditationSessionData>({
        duration: 0 as number,
        public: false as boolean,
        notes: "" as string,
        meditation_id: meditationId as number
    });

    useEffect(() => {
         getMeditationById(meditationId)
        .then(setMeditation)
    }, [meditationId])
    
    

    const navigate = useNavigate();

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        try {
            await createMeditationSession(formData);
            navigate("/meditations");
        } catch {
            alert("Error creating meditation session");
        }
    }  

    return (
     <div className="flex flex-col items-center justify-center mx-auto">
        
        <h1 className="pt-5">Creating a session</h1>
        <p className="py-5">With meditation: 
            <Link to={`/meditations/${id}`}>
            <span className="text-purple-400"> {meditation?.title}</span>
            </Link> 
        </p>
        <p className="text-sm py-5">Not the right meditation? 
        <Link to="/meditations">
            <span className="text-purple-500"> Go back</span>
        </Link>
        </p>
      <div className="p-10 rounded-xl shadow-lg min-w-full">
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="number"
            min={1}
            max={240}
            className="auth-input"
            value={formData["duration"]}
            onChange={(e) => setFormData({
                ...formData,
                duration: Number(e.target.value),
            })}
          />

          <textarea
            rows={5}
            className="auth-input text-sm"
            placeholder="add any notes about your session here..."
            value={formData["notes"]}
            onChange={(e) => setFormData({
                ...formData,
                notes: e.target.value
            })}
          />

          <select
            value={String(formData.public)}
            className="auth-input"
            onChange={(e) => setFormData({
                ...formData,
                public: e.target.value === "true",
            })}>
            <option key="false" value="false">No</option>
            <option key="true" value="true">Yes</option>
          </select>

          <button className="auth-button">Submit</button>
        </form>
      </div>
    </div>
  );
}