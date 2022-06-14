import './App.css';
import { useState } from 'react';
import OrderNameInput from './MealNameInput';

function App() {
  const [orderName, setOrderName] = useState('');

  return (
    <>
      <h1>
      Meal Name; {orderName}.
      </h1>
      <div className="App">
        <div id="pictures">
          <OrderNameInput orderName={setOrderName}/>
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
