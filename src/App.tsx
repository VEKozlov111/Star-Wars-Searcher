import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {

  return (
    <div className="flex flex-col min-h-screen  ">
      <Header />
      <main className="flex-auto bg-color7 lg:px-10 lg:py-4 sm:px-4 sm:py-2 p-4">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
