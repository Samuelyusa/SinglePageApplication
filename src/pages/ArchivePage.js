import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';
import PropTypes from 'prop-types';

function ArchivedPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams((keyword));
    }

    return <ArchivedPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        ArchivedNotes: getArchivedNotes(),
        keyword: props.defaultKeyword || '',
        };

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }

    render() {
        const ArchivedNotes = this.state.ArchivedNotes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
        <section className='archivedPage'>
            <h2>Catatan Arsip</h2>
            <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
            <NoteList notes={ArchivedNotes} />
        </section>
        );
    }
}

ArchivedPage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
}
export default ArchivedPageWrapper;
