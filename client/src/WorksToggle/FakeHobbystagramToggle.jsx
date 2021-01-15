import React from 'react';

import './HobbystagramToggle.css';

export default function FakeHobbystagramToggle() {
    return (
        <div className="hobbystagram_toggle">
            <input type="checkbox" id="hobbystagram" disabled="disabled"></input>
            <label for="hobbystagram" id="hobbystagram_label"></label>
        </div>
    )
}