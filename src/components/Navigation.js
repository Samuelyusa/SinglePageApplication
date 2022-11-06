import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
return (
    <nav>
    <ul>
        <li>
            <Link to="/">Catatan Aktif</Link>
        </li>
        <li>
            <Link to="/arsip">Catatan Arsip</Link>
        </li>
    </ul>
    </nav>
);
}

export default Navigation;
