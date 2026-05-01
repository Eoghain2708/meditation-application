import { Link } from "react-router-dom"
import sadBear from "../../assets/images-Photoroom.png"

export default function MeditationNotFoundPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="py-5">We're sorry... :(</h1>
        <p className="text-4xl font-light text-purple-300 py-3">404: not found</p>
        <p className="py-5 text-purple-200">We couldn't find the meditation you were looking for.</p>
        <Link to="/meditations">
            <p className="text-purple-600 py-5">Go home</p>
        </Link>
        <div className="flex justify-center">
        <img src={sadBear} className="w-60 max-h-80 py-10"/>
        </div>
        </div>
    )
}