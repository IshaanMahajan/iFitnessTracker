import React, { useState } from 'react';
import './styles/NutritionTracker.css';

const NutritionTracker = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Food Name:', foodName);
    console.log('Calories:', calories);
    console.log('Protein:', protein);
    console.log('Carbs:', carbs);
    console.log('Fat:', fat);

    setFoodName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');

    setAlertMessage('Input data stored successfully!');
  };

  return (
    <div className="nutri-background">
      <section className="nutrition-tracking">
        <h2>Nutrition Tracking</h2>
        <div className="nutrition-form">
          <h3>Your Daily Intake</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="food-name">Food Name:</label>
            <input
              type="text"
              id="food-name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />

            <label htmlFor="calories">Calories:</label>
            <input
              type="number"
              id="calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />

            <label htmlFor="protein">Protein:</label>
            <input
              type="number"
              id="protein"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
            />

            <label htmlFor="carbs">Carbs:</label>
            <input
              type="number"
              id="carbs"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
            />

            <label htmlFor="fat">Fat:</label>
            <input
              type="number"
              id="fat"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
            />

            <button type="submit">Add</button>
          </form>
          {alertMessage && <div className="alert">{alertMessage}</div>}
        </div>
      </section>
    </div>
  );
};

export default NutritionTracker;