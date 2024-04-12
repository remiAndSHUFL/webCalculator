import { createSignal } from 'solid-js';
{/* options - array of object where each object has a label and value , onChange - called when selected option changes  */}
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
