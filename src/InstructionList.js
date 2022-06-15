import React from 'react';
import Instruction from './Instruction';

export default function InstructionList({ instructions }) {
  return (
    <section>
      <h2>Your Instructions</h2>
      <div>
        {
          instructions.map((instruction, i) => <Instruction key={instruction + i} instruction={instruction}/>)
        }
      </div>
    </section>
  );
}