import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/layout";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ListPage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: "/edit/:noteId",
        element: <EditPage />,
      },
    ],
  },
]);
