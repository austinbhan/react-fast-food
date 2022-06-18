import './App.css';
import { useState } from 'react';
import OrderNameInput from './MealNameInput';
import MealDropDown from './MealDropDown';
import Meal from './Meal';
import DrinkDropDown from './DrinkDropDown';
import SideDropDown from './SideDropDown';
// import InstructionForm from './InstructionForm';
import InstructionList from './InstructionList';


function App() {
  const [orderName, setOrderName] = useState('');
  const [mealName, setMealName] = useState('main-1');
  const [drinkName, setDrinkName] = useState('drink-1');
  const [sideName, setSideName] = useState('side-1');
  const [instructions, setInstructions] = useState([]);
  const [instructionInput, setInstructionInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionInput]);
    setInstructionInput('');
  }

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
            sideName={sideName}
          />
        </div>
        <div id="dropdowns">
          <MealDropDown setMealName={setMealName}/>
          <DrinkDropDown setDrinkName={setDrinkName}/>
          <SideDropDown setSideName={setSideName} />
        </div>
        <div id="forms">
          <OrderNameInput setOrderName={setOrderName}/>
          <section>
            <form onSubmit={handleSubmit}>
              <input value={instructionInput} onChange={e => setInstructionInput(e.target.value)} />
              <button>Submit</button>
            </form>
          </section>
          <InstructionList instructions={instructions}/>
        </div>
        <div id="display-text">

        </div>
      </div>
    </>
  );
}

export default App;
