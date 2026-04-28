import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Meditation } from "../types/Meditation";
import { getMeditations } from "../api/meditations";
import MeditationCard from "../components/MeditationCard";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CategoryDropDown from "../components/CategoryDropDown";
import MeditationNotFoundComponent from "../components/MeditationNotFoundComponent";

export default function MeditationsPage() {
  const [meditations, setMeditations] = useState<Meditation[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();

    getMeditations(queryString).then(setMeditations);
  }, [searchParams]);

  if (meditations.length < 1) {
    return (
      <>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-semibold text-gray-800">Meditations</h1>
        <div className="pb-15 pt-5">
          <SearchBar />
          <div className="flex justify-center mt-10 gap-10">
            <p className="font-semibold text-blue-200">Filter by category</p>{" "}
            <CategoryDropDown />
          </div>
        </div>
        <div>
          <MeditationNotFoundComponent title={searchParams.get("title")} category={searchParams.get("category")}/>
        </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-semibold text-gray-800">Meditations</h1>
        <div className="pb-15 pt-5">
          <SearchBar />
          <div className="flex justify-center mt-10 gap-10">
            <p className="font-semibold text-blue-200">Filter by category</p>{" "}
            <CategoryDropDown />
          </div>
        </div>

        <div
          className="
      grid
      gap-x-7
      gap-y-10
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
    "
        >
          {meditations.map((m) => (
            <Link key={m.id} to={`/meditations/${m.id}`} className="group">
              <MeditationCard meditation={m} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
