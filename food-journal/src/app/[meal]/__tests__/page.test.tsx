import { render, screen, waitFor, act } from "@testing-library/react";
import Meal from "../page";
import "@testing-library/jest-dom";

global.fetch = jest.fn();

describe("Meal Page", () => {
	const mockRecipes = [
		{
			id: "1",
			name: "Test Recipe",
			description: "A test recipe",
			coverImage:
				"/images/Avocado-Egg-Breakfast-Toast-FI-Thumbnail-1200X1200.jpg",
			calories: 500,
			protein: 20,
			carbs: 50,
			fat: 10,
		},
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders the meal title correctly", async () => {
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve({ data: [] }),
		});

		await act(async () => {
			render(<Meal params={Promise.resolve({ meal: "breakfast" })} />);
		});

		await waitFor(() => {
			expect(screen.getByText("breakfast")).toBeInTheDocument();
		});
	});

	it("displays recipes when fetched successfully", async () => {
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve({ data: mockRecipes }),
		});

		await act(async () => {
			render(<Meal params={Promise.resolve({ meal: "breakfast" })} />);
		});

		await waitFor(() => {
			expect(screen.getByText("Test Recipe")).toBeInTheDocument();
			expect(screen.getByText("A test recipe")).toBeInTheDocument();
		});
	});

	it("handles fetch error gracefully", async () => {
		(global.fetch as jest.Mock).mockRejectedValueOnce(
			new Error("Failed to fetch")
		);

		await act(async () => {
			render(<Meal params={Promise.resolve({ meal: "breakfast" })} />);
		});

		await waitFor(() => {
			expect(screen.getByText("breakfast")).toBeInTheDocument();
		});
	});
});
