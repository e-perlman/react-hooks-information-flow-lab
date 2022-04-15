import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from './Header';
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick(mode) {
    setIsDarkMode(mode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header mode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
