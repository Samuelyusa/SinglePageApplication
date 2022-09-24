import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

function NoteDetail({ title, createdAt, body, archived }) {
    return (
        <div className='detail-page'>
            <h2 className='detail-page__title'>{title}</h2>
            <h5 className='detail-page__createdAt'>{ showFormattedDate(createdAt)}</h5>
            <h6>{ archived }</h6>
            <p className='detail-page__body'>{body}</p>
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
