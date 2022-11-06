import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
import ButtonDelete from './ButtonDelete';
import ButtonArchive from './ButtonArchive';
import ButtonUnArchive from './ButtonUnArchive';

function NoteDetail({ id, title, createdAt, body, archived }) {
    return (
        <div className='detail-page'>
            <h2 className='detail-page__title'>{title}</h2>
            <h5 className='detail-page__createdAt'>{ showFormattedDate(createdAt)}</h5>
            <div className='detail-page__body'>{body}</div>
            <div className="detail-page__action">
                <ButtonArchive id={id} isArchive={archived} />
                <ButtonUnArchive id={id} isArchive={archived}/>
                <ButtonDelete id={id} isArchive={archived}/>
            </div>
        </div>
    );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired
};

export default NoteDetail;
