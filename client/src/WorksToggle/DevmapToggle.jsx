import React from 'react';

import './DevmapToggle.css';
import DevmapModal from '../worksModal/DevmapModal';

export default function DevmapToggle({ isModalOpen, isDevmapModalOpen, setIsDevmapModalOpen }) {

    const onDevmapOpenHandler = () => {
        setIsDevmapModalOpen(!isDevmapModalOpen)
    }

    if (isModalOpen === true) {
        return (
            <div className="devmap_toggle">
                <input type="checkbox" id="devmap"></input>
                <label for="devmap" id="devmap_label" onClick={onDevmapOpenHandler}></label>
                <DevmapModal isDevmapModalOpen={isDevmapModalOpen} />
            </div>
        )
    } else if (isModalOpen === false) {
        return (
            <div className="devmap_toggle">
                <input type="checkbox" id="devmap" disabled="disabled"></input>
                <label for="devmap" id="devmap_label" onClick={onDevmapOpenHandler}></label>
            </div>
        )
    }
}