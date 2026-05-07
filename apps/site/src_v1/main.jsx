import { ViteReactSSG } from "vite-react-ssg";
import { routes as routesA } from "./routes.jsx";
import { routes as routesB } from "../src_v2/routes.jsx";
import "./styles/globals.css";

export const createRoot = ViteReactSSG({ routes: [...routesA, ...routesB] });
