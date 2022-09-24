import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
    if (!notes.length) {
        return () => {
            <div className='notes-list-empty'>
                <p>Tidak ada Catatan</p>
            </div>
        }
        
    }

    return (
        <div className='notes-list'>
        {notes.map((note) => (
            <NoteItem key={note.id} {...note} />
        ))}
        </div>
    );
}

export default NoteList;
