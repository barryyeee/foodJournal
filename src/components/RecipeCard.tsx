"use client";

import React from "react";
import Image from "next/image";

const RecipeCard = ({
	imageUrl,
	title,
	description,
	totalCalories,
	protein,
	carbs,
	fat,
}: {
	imageUrl: string;
	title: string;
	description: string;
	totalCalories: number;
	protein: number;
	carbs: number;
	fat: number;
}) => {
	return (
		<div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<div className="relative h-48 w-full">
				<Image src={imageUrl} alt={title} fill className="object-cover" />
			</div>
			<div className="p-4">
				<h2 className="text-xl font-semibold mb-2">{title}</h2>
				<p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
				<div className="space-y-2 border-t border-gray-200 pt-4">
					<div className="flex items-center justify-between text-sm">
						<span className="text-gray-500">Calories</span>
						<span className="font-medium">{totalCalories}</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span className="text-gray-500">Protein</span>
						<span className="font-medium">{protein}g</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span className="text-gray-500">Carbs</span>
						<span className="font-medium">{carbs}g</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span className="text-gray-500">Fat</span>
						<span className="font-medium">{fat}g</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
