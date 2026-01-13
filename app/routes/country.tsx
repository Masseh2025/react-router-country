import { Link } from "react-router";
import type { Route } from "./+types/country";
import { p } from "motion/react-client";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const data = await res.json();
  return data;
}
export default function Country({ loaderData }: Route.ComponentProps) {
  const lang = Object.keys(loaderData[0].name.nativeName)[0];
  console.log(lang);
  return (
    <main className="w-full h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto p-4 bg-grey-400">
        <button className="p-2 rounded-md shadow-2xl bg-white">
          <Link to="/countries">Back</Link>
        </button>
        <img
          src={loaderData[0].flags.svg}
          alt={loaderData[0].name.common}
          className="w-full h-full object-cover max-w-md"
        />
        <div>
          <div>
            <h2 className="font-bold text-2xl">
              {loaderData[0]?.name.common || "N/A"}
            </h2>
            <p>
              <span className="font-bold">Native name: </span>
              {loaderData[0]?.name.nativeName[lang].common || "N/A"}
            </p>
            <p>
              <span className="font-bold">Population: </span>
              {loaderData[0]?.population || "N/A"}
            </p>
            <p>
              <span className="font-bold">Region: </span>
              {loaderData[0]?.region || "N/A"}
            </p>
            <p>
              <span className="font-bold">Subregion: </span>
              {loaderData[0]?.subregion || "N/A"}
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              {loaderData[0]?.capital || "N/A"}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Top level domain: </span>
              {loaderData[0]?.tld || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
