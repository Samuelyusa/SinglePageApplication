import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail({ id, title, createdAt, body, archived }) {
    return (
        <div>
            <h2>{title}</h2>
            <h5>{createdAt}</h5>
            <h6>{ archived }</h6>
            <p>{body}</p>
        </div>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired
};

export default NoteDetail;
