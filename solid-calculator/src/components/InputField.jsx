{/* value is the value, onInput - function called whenever user types the input */}

function InputField({ value, onInput }) {
    return (
      <input
        type="text"
        value={value}
        onInput={(e) => onInput(e.currentTarget.value)}
      />
    );
  }
  
  export default InputField;
  