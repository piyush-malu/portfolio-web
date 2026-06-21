import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always start in dark mode for the new design
    document.documentElement.classList.add("dark");

    const initializeApp = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (error) {
        console.error("Error initializing app:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  return (
    <div className="min-h-screen bg-base text-slate-200 overflow-x-hidden">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Main />
        </>
      )}
    </div>
  );
};

export default App;
