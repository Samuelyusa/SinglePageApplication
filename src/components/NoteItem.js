import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

function NoteItem({ id, title, createdAt, body }) {
return (
    <article className='note-item'>
        <h3 className='note-item__title'>
            <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <h5 className='note-item__createdAt'>{ showFormattedDate(createdAt)}</h5>
        <p className='note-item__body'>{body}</p>
    </article>
);
}

NoteItem.propTypes = {
id: PropTypes.number.isRequired,
title: PropTypes.string.isRequired,
createdAt: PropTypes.string.isRequired,
body: PropTypes.string.isRequired
};

export default NoteItem;
