import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListagemCall from './pages/cards';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListagemCall/>} />
          <Route path="/kanban" element={<ListagemCall/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
