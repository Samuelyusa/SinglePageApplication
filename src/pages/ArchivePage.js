import React from 'react';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/local-data';

class ArchivedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        ArchivedNotes: getArchivedNotes()
        };
    }

    render() {
        return (
        <section>
            <h2>Catatan Arsip</h2>
            <NoteList notes={this.state.ArchivedNotes} />
        </section>
        );
    }
}

export default ArchivedPage;
