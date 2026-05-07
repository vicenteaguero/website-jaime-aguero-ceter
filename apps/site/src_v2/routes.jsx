import Layout from "./Layout.jsx";

export const routes = [
  {
    path: "/new",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import("./pages/Home.jsx");
          return { Component };
        },
        entry: "src_v2/pages/Home.jsx"
      },
      {
        path: "metodologia",
        lazy: async () => {
          const { default: Component } = await import("./pages/Methodology.jsx");
          return { Component };
        },
        entry: "src_v2/pages/Methodology.jsx"
      },
      {
        path: "documentos",
        lazy: async () => {
          const { default: Component } = await import("./pages/Documents.jsx");
          return { Component };
        },
        entry: "src_v2/pages/Documents.jsx"
      },
      {
        path: "*",
        lazy: async () => {
          const { default: Component } = await import("./pages/NotFound.jsx");
          return { Component };
        },
        entry: "src_v2/pages/NotFound.jsx"
      }
    ]
  }
];
