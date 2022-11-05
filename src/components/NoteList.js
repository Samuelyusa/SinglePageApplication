import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
    if (notes.length === 0) {
        return (
            <div className='notes-list-empty'>
                <p>Tidak ada Catatan</p>
            </div>
        );
    }
    else {
        return (
            <div className='notes-list'>
            {notes.map((note) => (
                <NoteItem key={note.id} {...note} />
            ))}
            </div>
        );
    }
}

export default NoteList;
