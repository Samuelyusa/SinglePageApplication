import React from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { searchNotes } from '../utils/local-data';
import { useSearchParams } from 'react-router-dom';

function SearchPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const title = searchParams.get('title');

    function changeSearchParams(keyword) {
        setSearchParams({ title: keyword });
    }

    return <SearchPage onSearch={changeSearchParams} activeKeyword={title} />;
}

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            foundedNotes: props.activeKeyword ? searchNotes(props.activeKeyword) : []
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(keyword) {
        this.setState(() => {
            return {
                foundedNotes: searchNotes(keyword)
            };
        });
        this.props.onSearch(keyword);
    }

    render() {
        return (
        <section>
            <h2>Cari Catatan</h2>
            <SearchBar search={this.onSearch} defaultKeyword={this.props.activeKeyword} />
            <NoteList notes={this.state.foundedNotes} />
        </section>
        );
    }
}

export default SearchPageWrapper;
