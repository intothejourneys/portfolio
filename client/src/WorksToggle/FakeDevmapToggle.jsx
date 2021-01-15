import React from 'react';

import './DevmapToggle.css';

export default function FakeDevmapToggle() {
    return (
        <div className="devmap_toggle">
            <input type="checkbox" id="devmap" disabled="disabled"></input>
            <label for="devmap" id="devmap_label"></label>
        </div>
    )
}