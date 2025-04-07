const Home = () => {
	return (
		<div className="flex flex-col md:items-center justify-center h-full">
			<h1 className="text-6xl font-bold text-gray-900 mb-1">Welcome</h1>
			<p className="text-sm text-gray-500 mb-6">
				{new Date().toLocaleDateString("en-US", {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</p>
			<p className="text-xl text-gray-600 mb-8 md:max-w-2xl md:text-center">
				Find inspiration for your meals! Browse our collection of delicious
				recipes and track your daily nutrition to discover new favorite dishes.
			</p>
		</div>
	);
};

export default Home;
