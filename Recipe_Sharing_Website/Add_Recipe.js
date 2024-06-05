// scripts.js
// function AddRecipe() {
document.getElementById('recipeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Validate form values
    if (recipeName && ingredients && instructions) {
        // Create a recipe object
        const recipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions
        };

        // Get recipes from localStorage
        let recipes = localStorage.getItem('recipes');
        if (recipes) {
            recipes = JSON.parse(recipes);
        } else {
            recipes = [];
        }

        // Add new recipe to recipes array
        recipes.push(recipe);

        // Save updated recipes to localStorage
        localStorage.setItem('recipes', JSON.stringify(recipes));

        // Clear form
        document.getElementById('recipeForm').reset();

        alert('Recipe added successfully!');
        window.location.replace('Add_Recipe.html')
    } else {
        alert('Please fill out all fields.');

    }
});
// displayRecipes.js
document.addEventListener('DOMContentLoaded', function () {
    const recipesList = document.getElementById('recipesList');

    // Get recipes from localStorage
    let recipes = localStorage.getItem('recipes');
    if (recipes) {
        recipes = JSON.parse(recipes);
    } else {
        recipes = [];
    }

    // Display recipes
    if (recipes.length > 0) {
        recipes.forEach(function (recipe) {
            const recipeElement = document.createElement('div');
            recipeElement.className = 'recipe';

            const recipeName = document.createElement('h2');
            recipeName.textContent = recipe.name;

            const recipeIngredients = document.createElement('p');
            recipeIngredients.textContent = 'Ingredients: ' + recipe.ingredients;

            const recipeInstructions = document.createElement('p');
            recipeInstructions.textContent = 'Instructions: ' + recipe.instructions;

            recipeElement.appendChild(recipeName);
            recipeElement.appendChild(recipeIngredients);
            recipeElement.appendChild(recipeInstructions);

            recipesList.appendChild(recipeElement);
        });
    } else {
        recipesList.textContent = 'No recipes found.';
    }
});
// }
