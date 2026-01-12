import { Link } from "react-router";
import type { Route } from "./+types/countries";

export async function clientLoader() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name"
  );
  const data = await response.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <ul>
        {loaderData.map((country: any) => (
          <li key={country.name.common}>
            <Link to={country.name.common}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
