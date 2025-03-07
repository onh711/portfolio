import { Header } from "./pages/Top/components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./pages/Top/components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
