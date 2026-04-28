import { Link } from "react-router-dom";

type Props = {
  title: string;
  category: string;
};

export default function MeditationNotFoundComponent({
  title,
  category,
}: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <p className="py-5 text-purple-200">
        No meditations found
        {title && (
          <span>
            {" "}
            by the name <span className="text-purple-400">{title}</span>
          </span>
        )}
        {category && (
          <span>
            {" "}
            in category <span className="text-purple-400">{category}</span>
          </span>
        )}
      </p>
      <Link to="/meditations">
        <p className="text-purple-600 py-5">Back to meditations</p>
      </Link>
    </div>
  );
}
