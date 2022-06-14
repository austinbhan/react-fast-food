import './App.css';
import { useState } from 'react';
import MealNameInput from './MealNameInput';

function App() {
  const [mealName, setMealName] = useState('');

  return (
    <>
      <h1>
      Meal Name; {mealName}.
      </h1>
      <div className="App">
        <div id="pictures">
          <MealNameInput setMealName={setMealName}/>
        </div>
        <div id="forms">

        </div>
        <div id="display-text">

        </div>
      </div>
    </>
  );
}

export default App;
