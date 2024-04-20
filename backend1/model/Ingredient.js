const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;