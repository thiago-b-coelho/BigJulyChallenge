"use client";
import React, { useEffect, useState } from "react";
import { fetchOneRecipe, fetchRecipes } from "../../utils";
import Loading from "@/components/Loading";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import RecipeCard from "@/components/RecipeCard";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true);
      const data = await fetchOneRecipe(id);
      setRecipe(data);

      const recommend = await fetchRecipes({
        searchQ: data?.label,
        limit: 5,
      });
      setRecipes(recommend);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <main className="w-full">
      <Header title={recipe?.label} image={recipe?.image} />
      <div className="w-full px-4 lg:px-20 pt-5 bg-black">
        <div className="flex gap-10 items-center justify-center px-4">
          <div className="flex flex-col justify-between">
            <span className="text-white text-center border border-white/40 py-1.5 px-2 rounded-full mb-2">
              {recipe?.calories.toFixed(2)}
            </span>
            <p className="text-white text-xs text-center">CALORIES</p>
          </div>
          {/* <div className="flex flex-col justify-center">
            <span className="text-white text-center border border-white/40 py-1.5 rounded-full mb-2">
              {recipe?.totalTime}
            </span>
            <p className="text-neutral-100 text-[12px] md:text-md">
              TOTAL TIME
            </p>
          </div> */}
          <div className="flex flex-col justify-center">
            <span className="text-white text-center border border-white/40 py-1.5 rounded-full mb-2">
              {recipe?.yield}
            </span>
            <p className="text-white text-[12px] md:text-md">SERVINGS</p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 py-20 px-4 md:px-10">
          {/* LEFT SIDE */}
          <div className="w-full md:w-2/4 md:border-r border-white/40 pr-1">
            <div className="flex flex-col gap-5">
              <p className="text-cyan-600 text-2xl underline">Ingredients</p>

              {recipe?.ingredientLines?.map((ingredient, index) => {
                return (
                  <p key={index} className="text-white flex gap-2">
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="text-cyan-600 mt-1"
                    />
                    {ingredient}
                  </p>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 mt-20">
              <p className="text-cyan-600 text-2xl underline">Health Labels</p>

              <div className="flex flex-wrap gap-3">
                {recipe?.healthLabels.map((item, index) => (
                  <p
                    className="text-white flex gap-2 bg-white/20 px-4 py-1 rounded-full "
                    key={index}
                  >
                    <FontAwesomeIcon
                      icon={faHeartCircleCheck}
                      className="text-cyan-600 mt-1"
                    />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0">
            {recipes?.length > 0 && (
              <>
                <p className="text-white text-2xl">Also try this: </p>

                <div className="flex flex-wrap gap-3 px-1 pt-3 justify-center ">
                  {recipes?.map((item, index) => (
                    <RecipeCard recipe={item} key={index} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetail;
