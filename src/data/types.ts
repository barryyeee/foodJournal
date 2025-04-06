export interface Recipe {
	id: number;
	name: string;
	description: string;
	calories: number;
	protein: number;
	carbs: number;
	fat: number;
	type: string;
	coverImage: string;
}

export interface MealsData {
	data: {
		recipes: Recipe[];
	};
}
