import { getDashboardData } from "../../api/dashboardData";
import { useState, useEffect } from "react";
import type { DashboardData } from "../../types/DashboardData";
import LoadingPage from "../LoadingPage";
import { Link } from "react-router-dom";
import getCleanDate from "../../helpers/cleanDate";
import normaliseName from "../../helpers/normaliseName";
import Button from "../../components/Button";

export default function DashboardPage() {
    const [data, setData] = useState<DashboardData | null>(null);
    useEffect(() => {
        getDashboardData().then(setData)
    }, []);

    if (!data) {
        return <LoadingPage />
    }

    const session = data.recent_session;
    const meditation = session.meditation;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

    {/* Header */}
    <header className="space-y-2">
      <h1 className="text-3xl font-semibold">
        Welcome back, {normaliseName(data.username)}!
      </h1>
      <p className="text-gray-400">
        Your progress so far...
      </p>
    </header>

    {/* Stats */}
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      <div className="shadow-md rounded-xl p-6 bg-gray-900">
        <p className="text-sm text-gray-500">Minutes Meditated</p>
        <p className="text-3xl font-bold text-purple-400">
          {data.minutes_meditated}
        </p>
      </div>

      <div className="shadow-md rounded-xl p-6 bg-gray-900">
        <p className="text-sm text-gray-500">Total Sessions</p>
        <p className="text-3xl font-bold text-purple-400">
          {data.total_sessions}
        </p>
      </div>

    </section>

    {/* Recent Session */}
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Most Recent Session
      </h2>

      <Link
        to={`/meditation-sessions/${session.id}`}
        className="
          duration-200  
          block
          shadow-md
          hover:shadow-xl
          hover:scale-105  
          transition
          rounded-xl
          p-6
          bg-purple-900/10
        "
      >
        <div className="space-y-2">

          <p className="text-sm text-gray-500">
            {getCleanDate(session.created_at)}
          </p>

          <h3 className="text-lg font-semibold">
            {meditation.title}
          </h3>

          <p className="text-purple-400 capitalize">
            {meditation.category}
          </p>

          <p className="text-gray-300">
            {session.duration} minutes
          </p>

          <p className="text-2xl font-bold">→</p>

        </div>
      </Link>

      <Link to="/meditation-sessions">
        <p className="pt-2 pb-5 underline">See all sessions</p>
      </Link>

      <Link to="/meditations">
        <Button text="Create a new session" />
      </Link>
    </section>
    </div>
  )
}