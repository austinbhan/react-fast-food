import './App.css';
import { useState } from 'react';
import OrderNameInput from './MealNameInput';
import MealDropDown from './MealDropDown';
import Meal from './Meal';


function App() {
  const [orderName, setOrderName] = useState('');
  const [mealName, setMealName] = useState('main-1');

  return (
    <>
      <h1>
      Meal Name; {orderName}.
      </h1>
      <div className="App">
        <div id="pictures">
          <Meal 
            mealName={mealName}
          />
        </div>
        <div id="dropdowns">
          <MealDropDown setMealName={setMealName}/>
        </div>
        <div id="forms">
          <OrderNameInput orderName={setOrderName}/>
        </div>
        <div id="display-text">

        </div>
      </div>
    </>
  );
}

export default App;
