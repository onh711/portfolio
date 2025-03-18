import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Top } from "./pages/Top";
import { MenuList } from "./pages/MenuList";
import { TopicsLists } from "./pages/TopicsLists";
import { TopicsPage } from "./pages/TopicsPage.jsx";
import { ConfirmPage } from "./pages/ConfirmPage.jsx";
import { SubmitCompletePage } from "./pages/SubmitCompletePage.jsx";
import { ContactFormPage } from "./pages/ContactFormPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Top /> },
      { path: "/topic", element: <TopicsLists /> },
      { path: "/topic/:id", element: <TopicsPage /> },
      { path: "/menu", element: <MenuList /> },
      { path: "/form", element: <ContactFormPage /> },
      { path: "/confirm", element: <ConfirmPage /> },
      { path: "/submit", element: <SubmitCompletePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
