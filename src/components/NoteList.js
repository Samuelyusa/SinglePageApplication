import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
    if (!notes.length) {
        return <p>Tidak ada Catatan</p>;
    }

    return (
        <div>
        {notes.map((note) => (
            <NoteItem key={note.id} {...note} />
        ))}
        </div>
    );
}

export default NoteList;
