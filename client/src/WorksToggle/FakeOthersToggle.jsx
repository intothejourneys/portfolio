import React from 'react';

import './OthersToggle.css';

export default function FakeOthersToggle() {
    return (
        <div className="others_toggle">
            <input type="checkbox" id="others" disabled="disabled"></input>
            <label for="others" id="others_label"></label>
        </div>
    )
}