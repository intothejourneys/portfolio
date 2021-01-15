import React, { useState } from 'react';

import './PortfolioToggle.css';

export default function FakePortfolioToggle() {
    return (
        <div className="portfolio_toggle">
            <input type="checkbox" id="portfolio" disabled="disabled"></input>
            <label for="portfolio" id="portfolio_label"></label>
        </div>
    )
}