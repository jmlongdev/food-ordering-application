import React from "react";

import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <React.Fragment>
      <h2>Let's get started!</h2>
      <Header />
      <MealsSummary />
    </React.Fragment>
  );
}

export default App;
