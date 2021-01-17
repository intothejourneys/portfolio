import React from 'react';

import styled, { keyframes } from 'styled-components';

import earth from '../img/earth.png';
import rocket from '../img/rocket.png';

const Wrapper = styled.div`
    display: flex;
`;

const Earth = styled.div`
    top: 50%;
    left: 50%;
    margin-top: -195px;
    margin-left: -390px;
    width: 390px;
    height: 390px;
    background-image: url(${earth});
    background-repeat: no-repeat;
    position: absolute;
`;

const Rocket = styled.div`
    top: 50%;
    left: 50%;
    width: 180px;
    height: 220px;
    background-image: url(${rocket});
    background-repeat: no-repeat;
    position: absolute;
`;

export default function ContentContact() {
    return (
        <Wrapper>
            <Earth />
            <Rocket />
        </Wrapper>
    )
}