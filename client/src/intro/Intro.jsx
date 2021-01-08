import React from 'react';

import styled, { keyframes } from 'styled-components';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const IntroWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border: 3px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: transparent;
    cursor: url(${cursor_1}), auto;
    z-index: 3;
`;

const blink = keyframes`
    0% {
        opacity: 100%
    }
    50% {
        opacity: 30%
    }
`;

const IntroText = styled.p`
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    vertical-align: middle;
    position:absolute;
    color: #89ABE3FF;
    font-size: 25px;
    font-weight: 200;
    font-family: 'Press Start 2P', cursive;
    cursor: url(${cursor_2}), auto;
    
    &:hover {
        color: #FFFFCC;
        animation: ${blink} 0.1s steps(2) infinite;
    }
`;

export default function Intro({ onFoldHandler }) {
    return (
        <IntroWrapper>
            <IntroText onClick={onFoldHandler}>Welcome To My Space</IntroText>
        </IntroWrapper>
    );
}