import React from 'react';

export default function Meal({ mealName, drinkName }) {
  return (
    <div className="meal">
      <section>
        <img src={`./${mealName}.jpg`} />
        <img src={`${drinkName}.jpg`} />
        {/* <img src={`${drink}.jpg`} /> */}
      </section>
    </div>
  );
}