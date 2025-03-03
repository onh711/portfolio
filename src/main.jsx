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

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Top /> },
        { path: "/topic", element: <TopicsLists /> },
        { path: "/topic/:id", element: <TopicsList /> },
        { path: "/menu", element: <MenuList /> },
        { path: "/form", element: <ContactFormPage /> },
        { path: "/confirm", element: <ConfirmPage /> },
        { path: "/submit", element: <SubmitCompletePage /> },
      ],
    },
  ],
  { basename: "/portfolio" },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
