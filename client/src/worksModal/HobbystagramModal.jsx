import React from 'react';

export default function HobbystagramModal({ isHobbystagramModalOpen }) {
    if (isHobbystagramModalOpen === true) {
        return (
            <div>
                <p>hobbystagram modal</p>
            </div>
        )
    } else if (isHobbystagramModalOpen === false) {
        return (
            ''
        )
    }
}