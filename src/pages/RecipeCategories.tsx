import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

interface RecipeCategoriesItem {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface RecipeCategoriesProps extends Array<RecipeCategoriesItem> {}

const RecipeCategories = () => {
  const [recipeCategoryList, setRecipeCategoryList] =
    useState<RecipeCategoriesProps>([]);

  const getRecipeList = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const data = await api.json();

    if (data) {
      setRecipeCategoryList(data?.categories);
    } else {
      setRecipeCategoryList([]);
    }
  };

  useEffect(() => {
    getRecipeList();
  }, []);

  return (
    <Wrapper>
      <section className="recipes">
        <Navbar title="Recipe Categories" />
        <div className="container">
          {recipeCategoryList?.map(
            (categories: RecipeCategoriesItem, i: number) => {
              const {
                idCategory,
                strCategory,
                strCategoryThumb,
                strCategoryDescription,
              } = categories;
              return (
                <React.Fragment key={idCategory}>
                  <Card
                    img={strCategoryThumb}
                    category={strCategory}
                    description={strCategoryDescription}
                    link={strCategory}
                  />
                </React.Fragment>
              );
            }
          )}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }
`;

export default RecipeCategories;
