"use client";

import RecipeCard from "@/components/RecipeCard";
import { useEffect, useState } from "react";
import { Recipe } from "@/data/types";
import { use } from "react";

const Meal = ({ params }: { params: Promise<{ meal: string }> }) => {
	const resolvedParams = use(params);
	const [recipes, setRecipes] = useState<Recipe[]>([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await fetch(
					`/api/recipes?type=${resolvedParams.meal}`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch recipes");
				}
				const data = await response.json();
				setRecipes(data.data);
			} catch (err) {
				console.error("Error fetching recipes:", err);
				setRecipes([]);
			}
		};
		fetchRecipes();
	}, [resolvedParams.meal]);

	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold mb-8 capitalize">
				{resolvedParams.meal}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{recipes.map((recipe) => (
					<RecipeCard
						key={recipe.id}
						imageUrl={recipe.coverImage}
						title={recipe.name}
						description={recipe.description}
						totalCalories={recipe.calories}
						protein={recipe.protein}
						carbs={recipe.carbs}
						fat={recipe.fat}
					/>
				))}
			</div>
		</div>
	);
};

export default Meal;
