import React from 'react';

import './HobbystagramToggle.css';
import HobbystagramModal from '../worksModal/HobbystagramModal';

export default function HobbystagramToggle({ isModalOpen, isHobbystagramModalOpen, setIsHobbystagramModalOpen }) {
    
    const onHobbystagramOpenHandler = () => {
        setIsHobbystagramModalOpen(!isHobbystagramModalOpen)
    }

    if (isModalOpen === true) {
        return (
            <div className="hobbystagram_toggle">
                <input type="checkbox" id="hobbystagram" ></input>
                <label for="hobbystagram" id="hobbystagram_label" onClick={onHobbystagramOpenHandler}></label>
                <HobbystagramModal isHobbystagramModalOpen={isHobbystagramModalOpen} />
            </div>
        )
    } else if (isModalOpen === false) {
        return (
            <div className="hobbystagram_toggle">
                <input type="checkbox" id="hobbystagram" disabled="disabled"></input>
                <label for="hobbystagram" id="hobbystagram_label" onClick={onHobbystagramOpenHandler}></label>
            </div>
        )
    }
}