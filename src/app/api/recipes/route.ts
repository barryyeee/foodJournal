import { NextResponse } from "next/server";
import mealsData from "@/data/meals.json";
import { Recipe } from "@/data/types";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const type = searchParams.get("type");

	if (!type) {
		return NextResponse.json(
			{ error: "Type parameter is required" },
			{ status: 400 }
		);
	}
	const recipes = mealsData.data.recipes.filter(
		(recipe: Recipe) => recipe.type.toLowerCase() === type.toLowerCase()
	);

	if (recipes.length === 0) {
		return NextResponse.json(
			{ error: "No recipes found for the specified type" },
			{ status: 404 }
		);
	}

	return NextResponse.json({ data: recipes });
}
