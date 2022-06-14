import React from 'react';

export default function Meal({ main }) {
  return (
    <div className="meal">
      <section>
        <img src={`${main}.jpg`} />
        {/* <img src={`${side}.jpg`} />
        <img src={`${drink}.jpg`} /> */}
      </section>
    </div>
  );
}