import React from 'react';

export default function OthersModal({ isOthersModalOpen }) {
    if (isOthersModalOpen === true) {
        return (
            <div>
                <p>others modal</p>
            </div>
        )
    } else if (isOthersModalOpen === false) {
        return (
            ''
        )
    }
}