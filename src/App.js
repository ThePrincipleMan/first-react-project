import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Main from "./components/main"
import React from 'react'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
    setDarkMode(prev => !prev)
  }
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </>
  );
} 

export default App;
