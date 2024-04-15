import { createSignal } from 'solid-js';
import Dropdown from './components/Dropdown';
import InputField from './components/InputField';
import PriceDisplay from './components/PriceDisplay';
import Checkbox from './components/Checkbox';
import PriceDisplayOneSet from './components/PriceOneSet';
import './style_calc.css';
//import SquareMetersDisplay from './components/SquareMetersDisplay';

function App() {
  // Dropdown states for different dropdowns
  const [material, setMaterial] = createSignal('');
  const materialOptions = [
    { label: 'None', value: 'none' },
    { label: 'Laminat ABS', value: 'lam_abs' },
    { label: 'Laminat Wood', value: 'lam_wood' },
    { label: 'Linoleum Wood', value: 'lin_wood' },
    // ...other material options
  ];

  const [panelType, setPanelType] = createSignal('');
  const panelTypeOptions = [
    { label: 'None', value: 'none' },
    { label: 'Front Panel Drawer', value: 'front_pan_draw' },
    { label: 'Front Panel Door', value: 'front_pan_door' },
    // Add other panel types as needed
  ];

  const [handlePlace, setHandlePlace] = createSignal('');
  const handlePlaceOptions = [
    { label: 'None', value: 'none' },
    { label: 'TC', value: 'tc' },
    { label: 'TL', value: 'tl' },
    { label: 'TR', value: 'tr' },
    // Add other panel types as needed
  ];

  const [dLine, setDLine] = createSignal('');
  const dLineOptions = [
    { label: 'None', value: 'none' },
    { label: 'Kobber', value: 'kobber' },
    { label: 'Messing', value: 'messing' },
    { label: 'Stål', value: 'stal' },
    // Add other panel types as needed
  ];
  const [edges, setEdges] = createSignal('');
  const edgesOptions = [
    { label: 'None', value: 'none' },
    { label: 'Trækanter', value: 'trae' },
    { label: 'Painted', value: 'painted' },
    { label: 'ABS', value: 'abs' },
    // Add other panel types as needed
  ];
  const [edgesSub, setEdgesSub] = createSignal('');
  const edgesSubOptions = [
    { label: 'None', value: 'none' },
    { label: 'Wood', value: 'wood_sub' },
    { label: 'Eg', value: 'eg_sub' },
    { label: 'Hvid Ask', value: 'hvid_sub' },
    // Add other panel types as needed
  ];  
  const [handType, sethandType] = createSignal('');
  const handTypeOptions = [
    { label: 'None', value: 'none' },
    { label: 'handle1', value: 'hand1' },
    { label: 'handle2', value: 'hand2' },
    { label: 'handle3', value: 'hand3' },
    // Add other panel types as needed
  ];
  const [handAddOn, sethandAddOn] = createSignal('');
  const handAddOnnOptions = [
    { label: 'None', value: 'none' },
    { label: 'addon1', value: 'addon1' },
    { label: 'addon2', value: 'addon2' },
    { label: 'addon3', value: 'addon3' },
    // Add other panel types as needed
  ];
  const [colColor, setColColor] = createSignal('');
  const colColorOptions = [
    { label: 'None', value: 'none' },
    { label: 'color1', value: 'col1' },
    { label: 'color2', value: 'col2' },
    { label: 'color3', value: 'col3' },
    // Add other panel types as needed
  ];
  const [howMany, setHowMany] = createSignal('');
  const howManyOptions = [
    { label: '1', value: 'one' },
    { label: '2', value: 'two' },
    { label: '3', value: 'three' },
    { label: '4', value: 'four' },
    { label: '5', value: 'five' },
    { label: '6', value: 'six' },
    { label: '7', value: 'seven' },
    { label: '8', value: 'eight' },
    // Add other panel types as needed
  ];




  // Price state for the calculated price
  const [price, setPrice] = createSignal(0);
  const [priceOneSet, setPriceOneSet] = createSignal(0);



  //__________________________________________________
  const defaultInputSet = {
    material: 'none',
    panelType: 'none',
    width: '50',
    height: '100',
    insideHandle: false,
    handlePlace: 'none',
    drillHoles: false,
    dLine: 'none',
    edges: 'none',
    edgesSub: 'none',
    handType: 'none',
    handAddOn: 'none',
    colColor: 'none',
    howMany: 'one',
  };

  // State for all sets of inputs
  const [inputSets, setInputSets] = createSignal([defaultInputSet]);



  // Function to add a new set of inputs
  const addNewSet = () => {
    setInputSets([...inputSets(), { ...defaultInputSet }]);
  };
  // Function to remove a set of inputs
  const removeSet = (indexToRemove) => {
    setInputSets(inputSets().filter((_, index) => index !== indexToRemove));
  };
  // Function to deep clone an object including nested objects
  const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };

  // Function to copy a set of inputs
  const copySet = (indexToCopy) => {
    const sets = [...inputSets()];
    const setToCopy = sets[indexToCopy];
    const newSet = deepClone(setToCopy); // Deep clone the set
    setInputSets([...sets, newSet]); // Add the cloned set to the state
  };








    
  // Update handlers to accept an index and update a specific set
  // Handler for panel type dropdown change
    const handlePanelTypeChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].panelType = value;
    setInputSets(sets);
  };
  const handleMaterialChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].material = value;
    setInputSets(sets);
  };
  const handleWidthInput = (value, index) => {
    const sets = [...inputSets()];
    sets[index].width = value; // Sets the width property of the set at the given index
    setInputSets(sets);
  };
  const handleHeightInput = (value, index) => {
    const sets = [...inputSets()];
    sets[index].height = value;
    setInputSets(sets);
  };
  // Handler for handle place dropdown change
  const handleHandlePlaceChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].handlePlace = value;
    setInputSets(sets);
  };
  // Handler for dLine dropdown change
  const handledLineChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].dLine = value;
    setInputSets(sets);
  };
  // Handler for edges dropdown change
  const handleEdgesChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].edges = value;
    setInputSets(sets);
  };
  // Handler for edges sub-option dropdown change
  const handleEdgesSubChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].edgesSub = value;
    setInputSets(sets);
  };
  // Handler for handle type dropdown change
  const handleHandTypeChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].handType = value;
    setInputSets(sets);
  };
  // Handler for handle add-on dropdown change
  const handleHandAddOnChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].handAddOn = value;
    setInputSets(sets);
  };
  // Handler for color dropdown change
  const handleColColorChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].colColor = value;
    setInputSets(sets);
  };
  // Handler for "how many" dropdown change
  const handleHowManyChange = (value, index) => {
    const sets = [...inputSets()];
    sets[index].howMany = value;
    setInputSets(sets);
  };
  // Correct Toggle Handler
  const handleInsideHandleToggle = (checked, index) => {
    const sets = [...inputSets()];
    sets[index].insideHandle = checked; // toggling the current value
    setInputSets(sets);
  };
  // Handler for drill holes checkbox toggle
  const handleDrillHolesToggle = (checked, index) => {
    const sets = [...inputSets()];
    sets[index].drillHoles = checked;
    setInputSets(sets);
  };





  // Function to calculate the price based on selected options
  const calculatePrice = () => {
    // Placeholder for your price calculation logic
    // You would use the states like `material()`, `dimension()`, etc.
    // For now, we'll just set a dummy value
    setPrice(42); // Replace with actual calculation
  };

  const calculatePriceOneSet = () => {
    // Placeholder for your price calculation logic
    // You would use the states like `material()`, `dimension()`, etc.
    // For now, we'll just set a dummy value
    setPriceOneSet(10); // Replace with actual calculation
  };



// Render function
return (
  <div>
    <div className="main-container"> 
    <h1>&SHUFL Price Calculator</h1>
    <For each={inputSets()}>
      {(set, index) => (
        <div class="set" key={index()}>
          <label for={`panelType-${index}`}>Panel Type:</label><Dropdown id={`panelType-${index}`} options={panelTypeOptions} value={set.panelType} onChange={(value) => handlePanelTypeChange(value, index())} />
          <label for={`material-${index}`}>Material:</label><Dropdown id={`material-${index}`} options={materialOptions} value={set.material} onChange={(value) => handleMaterialChange(value, index())} />
          <label for={`width-${index}`}>Width:</label><InputField id={`width-${index}`} value={set.width} onInput={(value) => handleWidthInput(value, index())} />
          <label for={`height-${index}`}>Height:</label><InputField id={`height-${index}`} value={set.height} onInput={(value) => handleHeightInput(value, index())} />
          <Checkbox checked={set.insideHandle} label="Inside Handle " onToggle={(checked) => handleInsideHandleToggle(checked, index())} />
          <label for={`hand_place-${index}`}>Handle Placement:</label><Dropdown id={`hand_place-${index}`} options={handlePlaceOptions} value={set.handlePlace} onChange={(value) => handleHandlePlaceChange(value, index())} />
          <Checkbox checked={set.drillHoles} label="Drill Holes " onToggle={(checked) => handleDrillHolesToggle(checked, index())} />
          <label for={`d_line-${index}`}>D-Line:</label><Dropdown id={`d_line-${index}`} options={dLineOptions} value={set.dLine} onChange={(value) => handledLineChange(value, index())} />
          <label for={`edges_opt-${index}`}>Edges options:</label><Dropdown id={`edges_opt-${index}`} options={edgesOptions} value={set.edges} onChange={(value) => handleEdgesChange(value, index())} />
          <label for={`edges_sub-${index}`}>Edges sub tiems:</label><Dropdown id={`edges_sub-${index}`} options={edgesSubOptions} value={set.edgesSub} onChange={(value) => handleEdgesSubChange(value, index())} />
          <label for={`hand_type-${index}`}>Handle Type:</label><Dropdown id={`handl_type-${index}`} options={handTypeOptions} value={set.handType} onChange={(value) => handleHandTypeChange(value, index())} />
          <label for={`hand_addOn-${index}`}>Handle Add On:</label><Dropdown id={`hand_addOn-${index}`} options={handAddOnnOptions} value={set.handAddOn} onChange={(value) => handleHandAddOnChange(value, index())} />
          <label for={`color-${index}`}>Color:</label><Dropdown id={`color-${index}`} options={colColorOptions} value={set.colColor} onChange={(value) => handleColColorChange(value, index())} />
          <label for={`how_many-${index}`}>How many:</label><Dropdown id={`how_many-${index}`} options={howManyOptions} value={set.howMany} onChange={(value) => handleHowManyChange(value, index())} />
          <PriceDisplayOneSet price={set.priceOneSet} />
          <button onClick={() => copySet(index())}>Copy</button>
          <button onClick={() => removeSet(index())}>Remove</button>
        </div>
      )}
    </For>
    </div>
    <button onClick={addNewSet}>Add</button>
  </div>
);
}
export default App;








