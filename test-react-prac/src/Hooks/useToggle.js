import { useState } from 'react';

const useToggle = (defaultVal) => {
  // console.log(`%c%${defaultVal} default=>`, 'color: pink;');

  const [value, setValue] = useState(defaultVal);
  function toggleValue(value) {
    console.log(`%c%${value} value=>`, 'color: pink;');
    // console.log(JSON.stringify(new Date()));
    // console.log({});

    setValue((cv) => {
      return typeof value === 'boolean' ? value : !cv;
    });
  }
  return [value, toggleValue];
};

export default useToggle;
