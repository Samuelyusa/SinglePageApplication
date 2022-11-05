import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';

function AddNotePage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note);
        navigate('/');
    }

  return (
    <section>
      <h2>Tambah Catatan</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}

export default AddNotePage;