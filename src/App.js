import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddNotePage from './pages/AddNotesPage';
import ArchivePage from './pages/ArchivePage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
      <header>
        <h1>Catatan</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/add" element={<AddNotePage />} />
          <Route path="/search" element={ <SearchPage /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;
