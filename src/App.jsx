import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Riktam.";
  });

  return (
    <>
      <Header />
      <Main />
      {/* <Footer /> */}
    </>
  );
}

export default App;
