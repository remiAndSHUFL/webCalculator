import { calculateSquareMeters } from '../calculation/priceCalculation';

function SquareMetersDisplay(props) {
    // Assuming props come with height and width from the parent component (app.jsx)
    
    // Reactive expression to calculate square meters whenever inputs change
    const squareMeters = () => calculateSquareMeters(props.width, props.height);

    return (
        <div>
            <div>
                Area: {squareMeters()} m²
            </div>
        </div>
    );
}

export default SquareMetersDisplay;
