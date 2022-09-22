import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
return (
    <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/archive">Archive</Link>
        </li>
        <li>
            <Link to="/add">Add Note</Link>
        </li>
        <li>
            <Link to="/search">Search Notes</Link>
        </li>
    </ul>
    </nav>
);
}

export default Navigation;
