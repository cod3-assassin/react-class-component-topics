import React from "react";
import Hooks from "./02-Hooks/01-Use-Hook";
import ReactDOM from "react-dom/client";
import "../src/index.css";

const Index = () => {
  return <Hooks />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Index />);
