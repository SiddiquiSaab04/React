import React from "react";

export default function Card({ title, image, mealType, ingredients, cuisine, difficulty, review, rating, tags }) {
  return (
    <div className="flex flex-col items-center p-4 border border-pink-800 bg-pink-100 rounded-xl shadow-md max-w-xs">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-cover rounded-lg mb-3"
      />
      <ul className="text-left list-disc px-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <li className="text-sm text-gray-600">Meal: {mealType}</li>
        <li className="text-sm text-gray-600">Cuisine: {cuisine}</li>
        <li className="text-sm text-gray-600">Difficulty: {difficulty}</li>
        <li className="text-sm text-gray-600">Ingredients: {ingredients.join(" , ")}</li>
        <li className="text-sm text-gray-600">Review: {review}</li>
        <li className="text-sm text-gray-600">Tags: {tags.join(" , ")}</li>
        <li className="text-sm text-gray-600">Rating: {rating}</li>
      </ul>

    </div>
  );
}
