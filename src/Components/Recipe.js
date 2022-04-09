import React, { useState, useEffect } from "react";

export default function Recipe({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  console.log(meal);

  useEffect(() => {
    fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=1287311df5e94ac585c7e484769c2986&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="recipeprep">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}