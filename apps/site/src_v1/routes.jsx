import { Layout } from "./components/layout/Layout.jsx";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import("./pages/Home.jsx");
          return { Component };
        },
        entry: "src/pages/Home.jsx"
      },
      {
        path: "metodologia",
        lazy: async () => {
          const { default: Component } = await import("./pages/Methodology.jsx");
          return { Component };
        },
        entry: "src/pages/Methodology.jsx"
      },
      {
        path: "documentos",
        lazy: async () => {
          const { default: Component } = await import("./pages/Documents.jsx");
          return { Component };
        },
        entry: "src/pages/Documents.jsx"
      },
      {
        path: "*",
        lazy: async () => {
          const { default: Component } = await import("./pages/NotFound.jsx");
          return { Component };
        },
        entry: "src/pages/NotFound.jsx"
      }
    ]
  }
];
