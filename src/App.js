import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
