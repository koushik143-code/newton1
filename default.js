export default Heading;
export default SubHeading;
export default InputQuery;
export default SubmitButton;
import React from 'react';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import InputQuery from './components/InputQuery';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <div>
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  );
}

export default App;
