import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix("countries", [
    index("routes/countries.tsx"),
    route("/:countryName", "routes/country.tsx"),
  ]),
] satisfies RouteConfig;
