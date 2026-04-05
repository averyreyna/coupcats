import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { narratives } from "../data/narratives";

export default function NarrativePage() {
  const { id } = useParams<{ id: string }>();

  const narrative = useMemo(() => {
    if (!id) return null;
    return narratives[id] ?? null;
  }, [id]);

  if (!narrative) {
    return (
      <div className="min-h-screen bg-[#0f1117] px-6 py-10 text-white">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="mb-6 inline-flex rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-700"
          >
            ← Back to Map
          </Link>

          <div className="rounded-2xl border border-gray-800 bg-[#151925] p-6 shadow-xl">
            <h1 className="text-2xl font-bold">Narrative Not Available</h1>
            <p className="mt-3 text-gray-400">
              This coup event does not yet have a completed narrative.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1117] px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-6 inline-flex rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-700"
        >
          ← Back to Map
        </Link>

        <article className="rounded-2xl border border-gray-800 bg-[#151925] p-6 shadow-xl">
          <p className="text-sm uppercase tracking-wide text-amber-400">
            {narrative.country} • {narrative.year}
          </p>

          <h1 className="mt-2 text-3xl font-bold">{narrative.title}</h1>

          <div className="mt-6 space-y-4 text-base leading-7 text-gray-200">
            {narrative.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <section className="mt-8 border-t border-gray-800 pt-6">
            <h2 className="text-lg font-semibold">References</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-300">
              {narrative.references.map((reference, index) => (
                <li key={index}>{reference}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
