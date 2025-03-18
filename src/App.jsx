import React, { useEffect } from "react";
import Header from "./components/Header";
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
