import React from 'react';
import useToggle from '../Hooks/useToggle';

const Toggle = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>True</button>
      <button onClick={() => toggleValue(false)}>Falls</button>
    </div>
  );
};

export default Toggle;
