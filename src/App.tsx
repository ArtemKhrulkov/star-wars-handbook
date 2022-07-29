import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from 'layouts/PageLayout';
import Home from 'pages/Home';
import Characters from 'pages/Characters';
import NotFound from 'pages/NotFound';
import CharacterPage from 'pages/CharacterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/characters" element={<PageLayout />}>
          <Route index element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
