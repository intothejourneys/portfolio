import React from 'react';

export default function DevmapModal({ isDevmapModalOpen }) {
    if (isDevmapModalOpen === true) {
        return (
            <div>
                <p>devmap modal</p>
            </div>
        )
    } else if (isDevmapModalOpen === false) {
        return (
            ''
        )
    }
}