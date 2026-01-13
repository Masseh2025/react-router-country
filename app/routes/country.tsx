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
  const currencies = Object.keys(loaderData[0].currencies);
  const languages = Object.values(loaderData[0].languages);
  return (
    <main className="w-full h-full min-h-screen bg-gray-50 flex justify-center items-start">
      <div className="w-full max-w-7xl p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col  justify-center items-center max-w-md w-full">
          <Link
            className="p-2 rounded-md shadow-2xl bg-white mb-8 self-start"
            to="/"
          >
            Back
          </Link>

          <img
            src={loaderData[0].flags.svg}
            alt={loaderData[0].name.common}
            className="w-full h-full object-cover max-w-md mb-8 shadow-2xl rounded-xl"
          />
          <div className="w-full flex flex-col md:flex-row md:justify-center md:items-center">
            <div className="mb-4 md:mb-0 w-full">
              <h2 className="font-bold text-2xl mb-4">
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
            <div className="md:ml-8 justify-center w-full">
              <p>
                <span className="font-bold">Top level domain: </span>
                {loaderData[0]?.tld || "N/A"}
              </p>
              <p>
                <span className="font-bold">Currencies: </span>
                {currencies
                  .map(
                    (currency: any) => loaderData[0].currencies[currency].name
                  )
                  .join(", ") || "N/A"}
              </p>
              <p>
                <span className="font-bold">Languages: </span>
                {languages.map((language: any) => language).join(", ") || "N/A"}
              </p>
            </div>
          </div>
          <p className="mt-4 w-full">
            <span className="font-bold">Bordering countries: </span>
            {loaderData[0]?.borders?.map((border: any) => border).join(", ") ||
              "N/A"}
          </p>
        </div>
      </div>
    </main>
  );
}
