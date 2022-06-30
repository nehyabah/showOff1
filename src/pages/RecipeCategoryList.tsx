import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import CategoryListCard from "../components/CategoryCard";
interface RecipeCategoryListItem {
  idMeal: string;
  strMeal: string;
  categoryName: string;
  strMealThumb: string;
}

interface RecipeCategoryListProp extends Array<RecipeCategoryListItem> {}

const RecipeCategoryList = () => {
  const [recipeList, setRecipeList] = useState<RecipeCategoryListProp>([]);
  const { categoryName } = useParams();

  /* A hook that is used to fetch data from the API. */
  useEffect(() => {
    async function getRecipeList() {
      const data = await fetch(
        `https:/www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      const meals = await data?.json();
      setRecipeList(meals?.meals);
    }

    getRecipeList();
  }, [categoryName]);

  return (
    <Wrapper className="recipes">
      <h1>Category List</h1>
      <h2 className="title">{categoryName}</h2>
      {recipeList?.map((recipe: RecipeCategoryListItem, i: number) => {
        const { strMeal, strMealThumb, idMeal } = recipe;

        return (
          <React.Fragment key={i}>
            <Link to={`/category/${categoryName}/${idMeal}`} className="link">
              <CategoryListCard text={strMeal} img={strMealThumb} />
            </Link>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;

  .link {
    width: 0;
  }
`;

export default RecipeCategoryList;
