import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./css/bootstrap.css";
import "./css/styles.css";
import Header from "./components/Header/Header";
import AlertSection from "./components/section/AlertSection";
import Section1 from "./components/section/Section1";
import Section2 from "./components/section/Section2";
import Section3 from "./components/section/Section3";
import Section4 from "./components/section/Section4";
import Section5 from "./components/section/section5";
import Section6 from "./components/section/Section6";
import Footer from "./components/Footer/Footer";



function App() {
   return (
    <>
      <Header />
      <AlertSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default App;
