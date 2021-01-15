import React from 'react';

import './OthersToggle.css';
import OthersModal from '../worksModal/OthersModal';

export default function OthersToggle({ isModalOpen, isOthersModalOpen, setIsOthersModalOpen }) {
    
    const onOthersOpenHandler = () => {
        setIsOthersModalOpen(!isOthersModalOpen)
    }

    if (isModalOpen === true) {
        return (
            <div className="others_toggle">
                <input type="checkbox" id="others" ></input>
                <label for="others" id="others_label" onClick={onOthersOpenHandler}></label>
                <OthersModal isOthersModalOpen={isOthersModalOpen} />
            </div>
        )
    } else if (isModalOpen === false) {
        return (
            <div className="others_toggle">
                <input type="checkbox" id="others" disabled="disabled"></input>
                <label for="others" id="others_label" onClick={onOthersOpenHandler}></label>
            </div>
        )
    }
}