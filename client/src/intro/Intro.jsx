import React from 'react';

import styled, { keyframes } from 'styled-components';

import welcome from '../img/welcomeTo1.svg';
import welcomeYellow from '../img/welcomeToY1.svg';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const IntroWrapper = styled.div`
    width: 99%;
    height: 99%;
    border: 3px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: transparent;
    position: absolute;
    cursor: url(${cursor_1}), auto;
    z-index: 3;
`;

const blink = keyframes`
    0% { opacity: 100% }
    50% { opacity: 30% }
`;

// const IntroText = styled.p`
//     top: 45%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     vertical-align: middle;
//     position: absolute;
//     color: #FCF6F5FF;
//     font-size: 25px;
//     font-weight: 200;
//     font-family: 'Press Start 2P', cursive;
//     cursor: url(${cursor_2}), auto;
    
//     &:hover {
//         color: #FFF0CF;
//         animation: ${blink} 0.1s steps(2) infinite;
//     }
// `;

const IntroText = styled.p`
    width: 25%;
    height: 8%;
    top: 46%;
    left: 50.3%;
    padding: 0;
    margin: 0;
    background-image: url(${welcome});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    transform: translate(-50%, -50%);
    vertical-align: middle;
    position: absolute;
    // color: #FCF6F5FF;
    // font-size: 25px;
    // font-weight: 200;
    // font-family: 'Press Start 2P', cursive;
    cursor: url(${cursor_2}), auto;
    
    &:hover {
        // color: #FFF0CF;
        background-image: url(${welcomeYellow});
        animation: ${blink} 0.1s steps(2) infinite;
    }
`;

export default function Intro({ onFoldHandler }) {
    return (
        <IntroWrapper>
            <IntroText onClick={onFoldHandler}></IntroText>
        </IntroWrapper>
    );
}