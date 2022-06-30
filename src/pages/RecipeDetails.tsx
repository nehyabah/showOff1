import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams<string>();
  const [mealRecipe, setMealRecipe] = useState<any>([]);
  /**
   * We're using the useEffect hook to fetch the data from the API and then set the state of the
   * mealRecipe to the data we get back from the API
   */
  useEffect(() => {
    async function getRecipeList() {
      const data = await fetch(
        `https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const meals = await data?.json();

      if (meals) {
        setMealRecipe(meals?.meals[0]);
      }
    }

    getRecipeList();
  }, [id]);

  const { strMeal, strArea, strCategory, strMealThumb, strInstructions } =
    mealRecipe;

  /* It's returning the data from the API. */
  return (
    <section className="single-recipie">
      <h2 className="title">{strMeal}</h2>
      <img src={strMealThumb} alt={strMeal} />
      <div className="single-recipie-info"></div>

      <h4>Area: {strArea}</h4>
      <h4> Category: {strCategory}</h4>
      <p> Instructions: {strInstructions}</p>
      <Link to="/">Back Home</Link>
    </section>
  );
};

export default RecipeDetails;