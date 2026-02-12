import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddRecipeForm() {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
        if (!formData.instructions.trim()) newErrors.instructions = 'Instructions are required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // For now just log — later can add to state or localStorage
            console.log('New recipe submitted:', formData);
            setSubmitted(true);
            // Reset form
            setFormData({ title: '', ingredients: '', instructions: '' });
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 border-b">
                    <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                        ← Back to Home
                    </Link>
                </div>
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-white text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                        Share Your Favorite Recipe
                    </h1>
                    <p className="text-lg opacity-90">
                        Add a new delicious recipe to inspire others!
                    </p>
                </div>

                {/* Form */}
                <div className="p-6 sm:p-10">
                    {submitted && (
                        <div className="mb-8 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
                            Recipe submitted successfully! 🎉 (Check console for data)
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
                                Recipe Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. Classic Spaghetti Carbonara"
                                className={`
                  w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${errors.title ? 'border-red-500' : 'border-gray-300'}
                `}
                            />
                            {errors.title && <p className="mt-1 text-red-600 text-sm">{errors.title}</p>}
                        </div>

                        {/* Ingredients */}
                        <div>
                            <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700 mb-2">
                                Ingredients (one per line)
                            </label>
                            <textarea
                                id="ingredients"
                                name="ingredients"
                                value={formData.ingredients}
                                onChange={handleChange}
                                rows="6"
                                placeholder="e.g.&#10;200g spaghetti&#10;100g pancetta&#10;2 eggs..."
                                className={`
                  w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y
                  ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}
                `}
                            />
                            {errors.ingredients && <p className="mt-1 text-red-600 text-sm">{errors.ingredients}</p>}
                        </div>

                        {/* Instructions */}
                        <div>
                            <label htmlFor="instructions" className="block text-lg font-medium text-gray-700 mb-2">
                                Preparation Steps
                            </label>
                            <textarea
                                id="instructions"
                                name="instructions"
                                value={formData.instructions}
                                onChange={handleChange}
                                rows="8"
                                placeholder="Step 1: Boil water...&#10;Step 2: Fry pancetta...&#10;Step 3: Mix eggs and cheese..."
                                className={`
                  w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y
                  ${errors.instructions ? 'border-red-500' : 'border-gray-300'}
                `}
                            />
                            {errors.instructions && <p className="mt-1 text-red-600 text-sm">{errors.instructions}</p>}
                        </div>

                        {/* Submit */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="
                  px-10 py-4 bg-blue-600 text-white font-semibold text-lg
                  rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300
                  transition duration-200
                "
                            >
                                Share Recipe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddRecipeForm;