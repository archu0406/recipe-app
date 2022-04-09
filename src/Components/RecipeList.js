import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ mealData }) {
const nutrients = mealData.nutrients;
  console.log(mealData);

  return (
    <main>
      <section className="recipeinfo">
        <h1>Recipe Information</h1>
        <ul>
           <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li> 
        </ul>
      </section>

      <section className="recipe">
        {mealData.meals.map((meal) => {
          return <Recipe key={meal.id} meal={meal}  />;
        })}
      </section>
    </main>
  );
}