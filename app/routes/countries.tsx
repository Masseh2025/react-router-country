import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
  );
  const data = await response.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState("");
  const filteredCountries = loaderData.filter((country: any) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main className="w-full flex flex-col items-center justify-center h-full bg-gray-300">
      <input
        type="text"
        placeholder="Search for a country"
        className="w-full  max-w-2xl p-4 rounded-md border border-gray-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="w-full max-w-7xl mx-4 min-h-screen">
        <ul className="w-full grid grid-cols-4 gap-4">
          {filteredCountries.map((country: any) => (
            <li key={country.name.common}>
              <div className="w-full h-full min-h-80 flex flex-col rounded-md overflow-hidden">
                <div className="h-[55%]">
                  <img
                    src={country.flags.svg}
                    alt={country.name.common}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[45%] bg-white p-4">
                  <h2 className="text-lg font-bold">
                    <Link to={country.name.common}> {country.name.common}</Link>
                  </h2>
                  <p>
                    <span className="font-bold">Population:</span>{" "}
                    {country.population}
                  </p>
                  <p>
                    <span className="font-bold">Region:</span> {country.region}
                  </p>
                  <p>
                    <span className="font-bold">Capital:</span>{" "}
                    {country.capital}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
