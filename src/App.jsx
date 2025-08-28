
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cardapio from './components/Cardapio';
import Carrinho from './components/Carrinho';
import Admin from './components/Admin';

export default function App() {
  const [adminMode, setAdminMode] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar toggleAdmin={() => setAdminMode(!adminMode)} />
      {adminMode ? <Admin /> : <>
        <Cardapio />
        <Carrinho />
      </>}
    </div>
  );
}
