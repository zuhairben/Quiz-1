import React, { useState } from 'react';
import axios from 'axios';

function Ingredients() {
    const [data, setData] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Retrieve token from local storage
            const res = await axios.post('http://localhost:3000/crud/admin/addIngredient', data, {
                headers: {

                    Authorization: `Bearer ${token}`,
                },
            });
            
            if (res.status === 200) {
                alert('Ingredient added successfully');
            } else {
                alert('Error adding ingredient');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="container">
            <h2>Add Ingredient</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingredient Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                />
                <textarea
                    placeholder="Description"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Ingredient</button>
            </form>
        </div>
    );
}

export default Ingredients;