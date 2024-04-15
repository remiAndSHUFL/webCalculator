import { createSignal } from 'solid-js';
import { createEffect } from 'solid-js';


function Dropdown({ options, value, onChange }) {
  // Use a local signal to ensure reactivity and maintain the selection state.
  const [selected, setSelected] = createSignal(value);

  // Effect to update local selection if the prop value changes
  createEffect(() => {
    setSelected(value);
  });

  const handleDropdownChange = (event) => {
    setSelected(event.target.value);
    onChange(event.target.value);
  };

  return (
    <select value={selected()} onChange={handleDropdownChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default Dropdown;




{/* options - array of object where each object has a label and value , onChange - called when selected option changes  */}
/*
function Dropdown({ options, onChange }) {
  const [selected, setSelected] = createSignal(options[0]?.value);

  const handleDropdownChange = (event) => {
    setSelected(event.target.value);
    onChange(event.target.value);
  };

  return (
    <select onChange={handleDropdownChange}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default Dropdown;
*/