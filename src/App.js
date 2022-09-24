import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddNotePage from './pages/AddNotesPage';
import ArchivePage from './pages/ArchivePage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailNotePage from './pages/DetailNotePage';

function App() {
  return (
    <div className='app-container'>
      <header>
        <h1>Catatan</h1>
        <div className='navigation'>
          <Navigation />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/add" element={<AddNotePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/notes/:id" element={<DetailNotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
