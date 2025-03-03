import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Top } from "./pages/Top";
import { MenuList } from "./pages/MenuList";
import { TopicsLists } from "./pages/TopicsLists";
import { TopicsList } from "./pages/TopicsList";
import { ConfirmPage } from "./pages/ConfirmPage.jsx";
import { SubmitCompletePage } from "./pages/SubmitCompletePage.jsx";
import { ContactFormPage } from "./pages/ContactFormPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "portfolio/",
        element: <Top />,
      },
      {
        path: "portfolio/topic",
        element: <TopicsLists />,
      },
      {
        path: "portfolio/topic/:id",
        element: <TopicsList />,
      },
      {
        path: "portfolio/menu",
        element: <MenuList />,
      },
      {
        path: "portfolio/form",
        element: <ContactFormPage />,
      },
      {
        path: "portfolio/confirm",
        element: <ConfirmPage />,
      },
      {
        path: "portfolio/submit",
        element: <SubmitCompletePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
