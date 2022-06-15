import React from 'react';

export default function MealDropDown({ setMealName }) {
  return (
    <div>
        Set Main Meal
      <select onChange={e => setMealName(e.target.value)}>
        <option value="main-1">Waffles</option>
        <option value="main-2">Pancakes</option>
        <option value="main-3">Croissants</option>
      </select>
    </div>
  );
}