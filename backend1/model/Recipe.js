const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;