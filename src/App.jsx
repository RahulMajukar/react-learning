import UseEffect from './hooks/UseEffect';
import UseStateObj from './hooks/UseStateObj';
import MultipleStateValue from './state/MultipleStateValue';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <UseEffect />
    </div>
  );
}

export default App;


// import React, { useState } from 'react'
// import ControlledInput from './props/ControlledInput'
// import DefaultProps from './props/DefaultProps';

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   return (
//     <div>
//       <ControlledInput
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       {/* <h2>inputValue: {inputValue}</h2> */}

//       <DefaultProps />
//     </div>
//   )
// }

// export default App