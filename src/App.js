import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Hero from "./layout/hero";
import Porfolio from "./sections/portfolio/portfolio";
import Community from "./sections/community/community";
import Creators from "./sections/creators/creators";
import Pricing from "./sections/pricing/pricing";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";

const theme = createTheme({
  palette: {
    primary: {
      main: "#222",
    },
  },
});
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BounceLoader size={100} css={{ marginTop: 200 }} color="#000" />
        </div>
      ) : (
        <ThemeProvider theme={theme}>
          <div
            className="App"
            style={{
              background: "linear-gradient(to bottom, #fff, #fff, #fff)",
            }}
          >
            <Header />
            <Hero />
            <Porfolio />
            <Community />
            <Creators />
            <Pricing />
            <Footer />
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
