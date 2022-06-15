import React from 'react';

export default function DrinkDropDown({ setDrinkName }) {
  return (
    <div>
            Set Drinks
      <select onChange={e => setDrinkName(e.target.value)}>
        <option value="drink-1">Coffee</option>
        <option value="drink-2">Orange Juice</option>
        <option value="drink-3">Tea</option>
      </select>
    </div>
  );
}