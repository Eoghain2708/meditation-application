import type { MeditationSession } from "../../types/MeditationSession";
import BackLink from "../links/BackLink"
import { Link } from "react-router-dom";

type Props = {
    session: MeditationSession
    isOwner?: boolean
    onDelete?: () => void
    onPrivacyChange?: () => void
}

export default function MeditationSessionView( { session, isOwner = false, onDelete, onPrivacyChange }: Props) {
    return (
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Meditation Session</h1>
        <p className="text-gray-200">
          {new Date(session.created_at).toLocaleString("en-GB")}
        </p>
      </header>

      <section className="rounded-xl shadow-xl bg-gray-900/20 p-6 space-y-3">
      <p className="text-sm capitalize font-bold">By: {session.user.username} </p>
        <h2 className="text-xl font-semibold py-5">
          {session.meditation.title}
        </h2>

        <p className="font-bold text-lg capitalize text-purple-400 py-5">
          {session.meditation.category}
        </p>

        <div className="flex justify-between pt-3">
          <p className="text-lg font-bold">
            {session.duration} minutes
          </p>

          {isOwner && (
            <div className="flex flex-col">
              <button
                onClick={onPrivacyChange}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  session.public
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {session.public ? "Public" : "Private"}
              </button>

              <button
                onClick={onDelete}
                className="mt-5 rounded-full bg-red-500 px-5.5 hover:bg-red-500/50 py-0.5"
              >
                🗑️
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="rounded-xl shadow-xl space-y-4 bg-gray-900/20">
        <h3 className="text-lg font-semibold">Session Notes</h3>

        {session.notes ? (
          <p className="whitespace-pre-line text-gray-200 leading-relaxed text-left py-3 px-5">
            {session.notes}
          </p>
        ) : (
          <p className="text-gray-200 italic">
            No notes recorded for this session.
          </p>
        )}
      </section>

      <Link to="/meditation-sessions">
        <BackLink text="Back to all sessions" />
      </Link>
    </div>
    )
}