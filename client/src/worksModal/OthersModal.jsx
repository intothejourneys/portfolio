import React from 'react';

import styled, { keyframes } from 'styled-components';

import forResponsive from '../img/works_comingsoon.svg';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const Wrapper = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
`;

const Contents = styled.div`
    top: -830%;
    left: -120%;
    width: 700%;
    height: 700%;
    // color: #606060;
    // font-size: 18px;
    // font-weight: 200; 
    // font-family: 'Poor Story', cursive;
    animation: ${Desolve} 3s ease;
    position: absolute;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border: 2px solid transparent;
        border-radius: 10px;
        background-color: rgba(137, 171, 227, 0.4);
        background-clip: padding-box;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: rgba(252, 246, 245, 0.4);
        box-shadow: inset 0px 0px 5px white;
    }
`;

const All = styled.div`
    top: 36%;
    left: 10%;
    width: 50%;
    height: 20%;
    background-image: url(${forResponsive});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    z-index: 5;
`;

// const Title = styled.h2`
//     top: 150px;
//     left: 90px;
//     width: 300px;
//     height: 30px;
//     color: #606060;
//     font-family: 'Press Start 2P', cursive;
//     position: absolute;
//     float: left;
// `;

export default function OthersModal({ isOthersModalOpen }) {
    if (isOthersModalOpen === true) {
        return (
            <Wrapper>
                <Contents>
                    <All />
                    {/* <Title>Coming soon</Title> */}
                </Contents>
            </Wrapper>
        )
    } else if (isOthersModalOpen === false) {
        return (
            ''
        )
    }
}