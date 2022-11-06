import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddNotePage from './pages/AddNotePage';
import ArchivePage from './pages/ArchivePage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
// import SearchPage from './pages/SearchPage';
import DetailNotePage from './pages/DetailNotePage';
import PageNotFound from './pages/PageNotFound';

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
          <Route path="/arsip" element={<ArchivePage />} />
          <Route path="/tambah" element={<AddNotePage />} />
          <Route path="/notes/:id" element={<DetailNotePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
