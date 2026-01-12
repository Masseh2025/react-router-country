import { type RouteConfig, index, prefix } from "@react-router/dev/routes";

export default [
  ...prefix("countries", [index("routes/countries.tsx")]),
] satisfies RouteConfig;
