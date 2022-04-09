import React, { useState } from "react";
import RecipeList from "./Components/RecipeList";

function App() {
  const [mealData, setMealData] = useState(null);
  // const [calories, setCalories] = useState(2000);
  const [search, setSearch] = useState();

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <section className="searchCalorie">
        <h1>Plan your Meal Calories per day</h1>
        <input
          type="id"
          placeholder="Enter calories required"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Search Recipe</button>
      </section>
      {mealData && <RecipeList mealData={mealData} />}
    </div>
  );
}

export default App;