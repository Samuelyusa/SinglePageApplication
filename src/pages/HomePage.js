import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes} from '../utils/local-data';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        ActivedNotes: getActiveNotes()
        };
    }

    render() {
        return (
        <section>
            <h2>Catatan Aktif</h2>
            <NoteList notes={this.state.ActivedNotes} />
        </section>
        );
    }
}

export default HomePage;
