"use client";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import SearchBar from "../SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RecipeCard from "../RecipeCard";
import { fetchRecipes } from "@/app/utils";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQ, setSearchQ] = useState("Vegan");
  const [limit, setLimit] = useState(15);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchQ(e.target.value);
  };

  const handleSearchedRecipe = async (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ searchQ, limit });
      setRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    fetchRecipe();
  };

  useEffect(() => {
    setLoading(true);
    fetchRecipe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pc-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4" onSubmit={handleSearchedRecipe}>
          <SearchBar
            placeholder="eg. Cake, Vegan, Chicken..."
            handleInputChange={handleChange}
            rightIcon={<FontAwesomeIcon icon={faSearch} color="white" />}
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap gap-10 lg:px-10 py-10 justify-center">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
          <div className="flex w-full items-center justify-center py-10">
            <button
              className="bg-cyan-600 text-white px-3 py-1 rounded-full "
              onClick={showMore}
            >
              Show more
            </button>
          </div>
        </>
      ) : (
        <div className="text-black w-full items-center justify-center py-10 ">
          <p className="text-center">No recipe found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
