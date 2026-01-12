import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix("countries", [
    index("routes/countries.tsx"),
    route("/:country", "routes/country.tsx"),
  ]),
] satisfies RouteConfig;
