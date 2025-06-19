import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    document.title = "Riktam.";
  });

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
