import React, { useEffect,useRef } from 'react';
const Greeting = ({ name }) => {
  const prevNameRef = useRef(null);
  const prevName = prevNameRef.current;

  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  if (prevName === null) {
 
    return <h1>Привет, {name}!</h1>;
  }

  if (prevName !== name) {
    
    return <h1>Привет, у тебя поменялось имя, теперь ты {name}!</h1>;
  }

  
  return <h1>Привет, {name}!</h1>;
};
export default Greeting