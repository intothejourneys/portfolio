import React from 'react';

import './PortfolioToggle.css';
import PortfolioModal from '../worksModal/PortfolioModal';

export default function PortfolioToggle({ isModalOpen, isPortfolioModalOpen, setIsPortFolioModalOpen }) {
    
    const onPortfolioOpenHandler = () => {
        setIsPortFolioModalOpen(!isPortfolioModalOpen)
    }

    if (isModalOpen === true) {
        return (
            <div className="portfolio_toggle">
                <input type="checkbox" id="portfolio" ></input>
                <label for="portfolio" id="portfolio_label" onClick={onPortfolioOpenHandler}></label>
                <PortfolioModal isPortfolioModalOpen={isPortfolioModalOpen} />
            </div>
        )
    } else if (isModalOpen === false) {
        return (
            <div className="portfolio_toggle">
                <input type="checkbox" id="portfolio" disabled="disabled"></input>
                <label for="portfolio" id="portfolio_label" onClick={onPortfolioOpenHandler}></label>
            </div>
        )
    }
}
