import React, { useState, useEffect } from 'react';
import Greeting from './Greeting'
import Header from './Header';
import Clock from './Clock'
// Массив возможных имен
const NAMES = [
  'Алексей', 'Мария', 'Иван', 'Ольга', 
  'Дмитрий', 'Анна', 'Сергей', 'Екатерина',
  'Андрей', 'Наталья'
];

const Container = () => {

  const [name, setName] = useState(null);
  
  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * NAMES.length);
    return NAMES[randomIndex];
  };

  useEffect(() => {
    setName(generateRandomName());
    
    
    const intervalId = setInterval(() => {
      setName(generateRandomName());
    }, 10000); 
    
    
    return () => clearInterval(intervalId);
  }, []);

  // Передаем имя дочерним компонентам
   return (
    <div>
      <Header/>
      <Greeting name={name}/>
      <Clock/>
    </div>
  );
};
export default Container