import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import ButtonAdd from '../components/ButtonAdd';
import { getActiveNotes} from '../utils/local-data';
import PropTypes from 'prop-types';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams((keyword));
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        ActivedNotes: getActiveNotes(),
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
        const ActivedNotes = this.state.ActivedNotes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
        <section className='homePage'>
            <h2>Catatan Aktif</h2>
            <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
            <NoteList notes={ActivedNotes} />
            <div className="detail-page__action">
                <ButtonAdd />
            </div>
        </section>
        
        );
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
}

export default HomePageWrapper;
