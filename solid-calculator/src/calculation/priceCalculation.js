  function getBasePrice(material, panelType) {
    // Base prices for materials and panel types (later form database or API)

    //constant prices:
    var extraCost = 413; //xx
    var opvPrice = 314; //t
    var packagingPrice = 53.7; //n
    //var drillingPrice = 13.12; //v
    var handleMountingPrice = 212; //l

    var incomeFactor = 0.53; //s
    var taxFactor = 1.250; //w

    // Define the array of numbers for the prices that create the big price of 98 elements
    const pricesBig = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131.48, 1242, 1163, 1101, 1041, 952,
        816, 796, 729, 654, 614, 600, 526, 720, 166.06, 1563.15, 1563.15, 1463.70, 1385.50, 1309,
        1281.80, 1030.20, 979.20, 840.65, 822.80, 770.95, 660.45, 792.20, 197.41, 1920.15, 1812.20, 1733.15,
        1572.50, 1451.80, 1451.80, 1338.75, 1242.70, 1192.55, 1174.70, 1079.50, 981.75, 1178.10, 239.81,
        2280.55, 2280.55, 2027.25, 1811.35, 1660.90, 1630.30, 1497.70, 1402.50, 1351.50, 1333.65, 1239.30,
        1140.70, 1337.05, 232.25, 2259, 2132, 2039, 1850, 1708, 1674, 1575, 1462, 1403, 1382, 1270,
        1155, 1386, 288.75, 2641, 2516, 2374, 2285, 2064, 1988, 1955, 1865, 1763, 1708, 1692, 1588, 1902
    ];
    const pricesPaintedOnWood = [ 375,405,435,450,480,550,630,675,700,785,865,900,1020,1355,1475,1610,1700];
    const pricesCore = [180.92,1695.02, 1578.46,1486.22,1364.29,1067.48,1008.1,844.87,823.69,763.25,632.87,788.26];


    // Create an empty array to store the chunks
    let pricesBigChunks = [];

    // Iterate over the array in steps of 14
    for (let i = 0; i < pricesBig.length; i += 14) {
        // Push each chunk of 14 elements to the numberChunks array
        pricesBigChunks.push(pricesBig.slice(i, i + 14));
    }


    //now there is a need to assign each of those 14 to the index of the material pulldown 
    /*
    Create a Separate File for Price Calculation: It's a good practice to separate your business logic from your UI components. You can create a new file, for example, priceCalculation.js, which will export functions that take in the necessary parameters and return the calculated price.

    Use Reactive Signals for Each Input: You already have this set up. Each dropdown and input is tied to a signal, ensuring reactivity.

    Create Computed Values for Prices: For each line of combinations, you can create a computed value that reacts to changes in the related inputs and recalculates the price whenever an input changes.

    Ensure Correct Reactiveness: By using signals and computed values, SolidJS will automatically update the price whenever an input changes. There's no need for manual event handling or state updates for this purpose.
    */
    const materialPrices = { /* ... */ };
    const panelTypePrices = { /* ... */ };

  }

    //u is checkbox from Drill holes
    function calculateDrillingPrice(height, drillHoles) {
        let factor = 0;
        //const height = parseInt(set.height);
        // Check if the drillHoles checkbox is checked
        if (drillHoles) {
            if (height >= 0 && height < 80) {
                factor = 2;
            } else if (height >= 80 && height < 120) {
                factor = 3;
            } else if (height >= 120 && height < 180) {
                factor = 4;
            } else if (height >= 180 && height < 240) {
                factor = 5;
            }
        }
    
        // Calculate the drilling price based on the factor
        const drillingPrice = 13.12;
        return factor * drillingPrice;
    
    }
    



    
    export function calculateSquareMeters(width, height) {   
        const area = (width * height)/10000;
    return area;
    }



  





// Main export that utilizes all the above utilities
export function calculateTotalPrice(set) {
    const { panelType,material, width, height, drillHoles } = set;

    //const basePrice = calculateBasePrice(material, panelType);
    //const sizeDimension = calculateSquareMeters(width, height);
    const drillPrice = calculateDrillingPrice(height, drillHoles);

    return (sizeDimension) + drillPrice;
}
