import Link from "next/link";
import React from "react";

const RecipeCard = ({ recipe }) => {
  const { image, label, cuisineType, mealType, uri } = recipe.recipe;
  const id = uri.split("#")[1];
  return (
    <Link href={`/recipedetail/${id}`} className="w-[220px]">
      <div className="w-full rounded-lg">
        <img src={image} alt={label} className="rounded-lg h-[200px]" />
        <div className="p-3">
          <p className="text-white font-semibold">{label}</p>
          <div className="mt-2">
            <span className="px-2 py-1 text-[12px] bg-cyan-600/30 rounded-full mr-3 text-cyan-600">{cuisineType}</span>
            <span className="px-2 py-1 text-[12px] bg-cyan-600/30 rounded-full mr-3 text-cyan-600">{mealType}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
