import React from "react";

import LandingPage from "./LandingPage";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LandingPage />
    </main>
  );
};

export default Home;
