import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <section>
            What is your meal name?
      < input onChange={e => setOrderName(e.target.value)} />
    </section>
  );
}