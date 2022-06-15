import React from 'react';

export default function Meal({ mealName, drinkName, sideName }) {
  return (
    <div className="meal">
      <img src={`${mealName}.jpg`} />
      <img src={`${drinkName}.jpg`} />
      <img src={`${sideName}.jpg`} />
    </div>
  );
}