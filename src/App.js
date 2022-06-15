import './App.css';
import { useState } from 'react';
import OrderNameInput from './MealNameInput';
import MealDropDown from './MealDropDown';
import Meal from './Meal';
import DrinkDropDown from './DrinkDropDown';


function App() {
  const [orderName, setOrderName] = useState('');
  const [mealName, setMealName] = useState('main-1');
  const [drinkName, setDrinkName] = useState('drink-1');

  return (
    <>
      <div className="App">
        <h1>
      Meal Name; {orderName}.
        </h1>
        <div id="pictures">
          <Meal 
            mealName={mealName}
            drinkName={drinkName}
          />
        </div>
        <div id="dropdowns">
          <MealDropDown setMealName={setMealName}/>
          <DrinkDropDown setDrinkName={setDrinkName}/>
        </div>
        <div id="forms">
          <OrderNameInput setOrderName={setOrderName}/>
        </div>
        <div id="display-text">

        </div>
      </div>
    </>
  );
}

export default App;
