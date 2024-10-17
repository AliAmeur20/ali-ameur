import { useEffect } from "react";
import LandingPage from "./pages/landingPage";

function App() {
  useEffect(() => {
    const localTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    localStorage.setItem("theme", localTheme)
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [])

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
