import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeCategories from "./pages/RecipeCategories";
import RecipeCategoryList from "./pages/RecipeCategoryList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeCategories />} />
        <Route path="/category/:categoryName" element={<RecipeCategoryList />}/>
        <Route path="/category/:categoryName/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
