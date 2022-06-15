import React from 'react';

export default function SideDropDown({ setSideName }) {
  return (<div>
            Set Sides
    <select onChange={e => setSideName(e.target.value)}>
      <option value="side-1">Cereal</option>
      <option value="side-2">Oatmeal</option>
      <option value="side-3">Granola</option>                
    </select>
  </div>
  );
}