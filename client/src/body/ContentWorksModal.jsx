import React from 'react';

import styled, { keyframes } from 'styled-components';

// import Works from '../worksModal/Works';
import WorksTextTexture from '../img/works_text_texture.png';

const ModalWrapper = styled.div`
    display: flex;
`;

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 70% }
`;

// const DesolveRewind = keyframes`
//     0% { opacity: 50% }
//     100% { opacity: 0% }
// `;

const TextureBlink = keyframes`
    0% { opacity: 50% }
    100% { opacity: 80% }
`;

const Texture = styled.div`
    top: -10px;
    left: 177px;
    width: 800px;
    height: 410px;
    background-image: url(${WorksTextTexture});
    animation: ${Desolve} 3s ease, ${TextureBlink} 1s ease;
    opacity: 0.8;
    position: absolute;
    transform: scale(1.04, 1.4);
    z-index: 21;
`;

const ModalFrame = styled.div`
    top: 70px;
    left: 190px;
    width: 800px;
    height: 410px;
    border: 3px solid;
    border-radius: 10px;
    border-color: #FCF6F5FF;
    background-color: #FCF6F5FF;;
    animation: ${Desolve} 3s ease;
    opacity: 0.7;
    position: absolute;
    z-index: 20;
`;

export default function ContentWorksModal({ isModalOpen }) {
    if (isModalOpen === true) {
        return (
            <ModalWrapper>
                <Texture />
                <ModalFrame />
                {/* <Works isWorksModalOpen={isWorksModalOpen} setDisable={setDisable} setIsWorksModalOpen={setIsWorksModalOpen} /> */}
            </ModalWrapper>
        );
    } else if (isModalOpen === false) {
        return (
            ''
        );
    }
}