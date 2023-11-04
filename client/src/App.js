import React from 'react';
import './App.css';
import { ItemsProvider } from "./contexts/ItemsContext";
import PantryDashboard from "./components/PantryDashboard";

function App() {
  return (
    <ItemsProvider>
      <PantryDashboard />
    </ItemsProvider>
  );
}

export default App;