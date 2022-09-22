import React from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { searchNotes } from '../utils/local-data';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        foundedNotes: []
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(keyword) {
        this.setState(() => {
        return {
            foundedNotes: searchNotes(keyword)
        };
        });
    }

    render() {
        return (
        <section>
            <h2>Cari Catatan</h2>
            <SearchBar search={this.onSearch} />
            <NoteList notes={this.state.foundedNotes} />
        </section>
        );
    }
}

export default SearchPage;
