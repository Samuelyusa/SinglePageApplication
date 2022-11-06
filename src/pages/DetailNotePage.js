import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/local-data';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailNotePage id={id} />;
}

    class DetailNotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        note: getNote(props.id)
        };
    }

    render() {
        if (this.state.note === null) {
        return <p>Note is not found!</p>;
        }

        return (
        <section>
            <NoteDetail {...this.state.note} />
        </section>
        );
    }
}

DetailNotePage.propTypes = {
    id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;