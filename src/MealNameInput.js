import React from 'react';

export default function MealNameInput({ setMealName }) {
  return (
    <section>
            What is your meal name?
      < input onChange={e => setMealName(e.target.value)} />
    </section>
  );
}