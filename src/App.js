import React from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Issue from "./components/Issue";

function App() {
  const { pathname } = useLocation();

  console.log("location", pathname);

  if (pathname === "/issue") return <Issue />;

  return <Dashboard />;
}

export default App;
