function Checkbox({ checked, label, onToggle }) {
    return (
      <label>
        <input
          type="checkbox"
          checked={checked} //usage of getter function to get the current value 
          onInput={(e) => onToggle(e.currentTarget.checked)}
        />
        {label}
      </label>
    );
  }
  
  export default Checkbox;
  