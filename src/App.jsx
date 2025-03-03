import { Header } from "./components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./components/Footer";
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
