import { createMemo } from 'solid-js';

function SquareMetersDisplay({ width, height }) {
  const calculateSquareMeters = createMemo(() => {
    return (Number(width()) * Number(height())) / 10000; // Convert from cm² to m²
  });

  return (
    <div>{calculateSquareMeters().toFixed(2)} m²</div>
  );
}

export default SquareMetersDisplay;
