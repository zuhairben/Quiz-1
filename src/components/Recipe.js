import React, { useState } from 'react';
import axios from 'axios';

function Recipe() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/addRecipe', {
                name,
                description,
            });
            console.log('Recipe added successfully:', response.data);
            // Clear form fields after successful submission
            setName('');
            setDescription('');
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };

    return (
        <div>
            <h1>Add Recipe</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#"></a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}

export default Recipe;
