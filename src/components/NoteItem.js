import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

function NoteItem({ id, title, createdAt, body }) {
return (
    <article>
        <h3>{title}</h3>
        <h5>{ showFormattedDate(createdAt)}</h5>
        <p>{body}</p>
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
