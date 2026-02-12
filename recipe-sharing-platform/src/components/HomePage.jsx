import { useState, useEffect } from 'react';
import recipesData from '../data.json'; // Make sure this path is correct

function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load mock data when component mounts
        setTimeout(() => {
            setRecipes(recipesData || []); // fallback to empty array if data is missing
            setLoading(false);
        }, 600); // small delay so you can see the loading spinner
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Recipe Sharing Platform
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover delicious recipes shared by food lovers around the world.
                </p>
            </div>

            {/* Loading state */}
            {loading ? (
                <div className="text-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600 text-lg">Loading delicious recipes...</p>
                </div>
            ) : recipes.length === 0 ? (
                <div className="text-center text-gray-600 py-20 text-xl">
                    No recipes found. Check your data.json file.
                </div>
            ) : (
                /* Recipe Grid */
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="
                bg-white 
                rounded-xl 
                shadow-lg 
                overflow-hidden 
                transform 
                transition-all 
                duration-300 
                hover:shadow-2xl 
                hover:scale-[1.03]
              "
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                    {recipe.title}
                                </h2>
                                <p className="text-gray-600 text-base line-clamp-3 mb-4">
                                    {recipe.summary}
                                </p>
                                <button className="
                  mt-2 
                  inline-block 
                  px-5 py-2.5 
                  bg-blue-600 
                  text-white 
                  font-medium 
                  rounded-lg 
                  hover:bg-blue-700 
                  transition
                ">
                                    View Recipe
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomePage;