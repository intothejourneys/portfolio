import React from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

import welcome from '../img/welcomeTo.svg';
import welcomeYellow from '../img/welcomeToY.svg';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const HeaderWrapper = styled.div`
    top: 0%;
    width: 100%;
    height: 10%;
    border: 3px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: transparent;
    position: absolute;
    cursor: url(${cursor_1}), auto;
    z-index: 15;
`;

const HeaderText = styled.p`
    width: 43%;
    height: 27%;
    top: 30%;
    left: 50%;
    background-image: url(${welcome});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    transform: translate(-50%, -50%);
    vertical-align: middle;
    position:absolute;
    // color: #FCF6F5FF;
    // font-size: 25px;
    // font-weight: 200;
    // font-family: 'Press Start 2P', cursive;
    transition: ease 0.4s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        // color: #FFF0CF;
        background-image: url(${welcomeYellow});
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Link to="/" style={{ textDecoration: 'none' }}>
                {/* <Link> will essentially return a standard <a> tag, which is why we apply textDecoration rule there. */}
                <HeaderText></HeaderText>
            </Link>
        </HeaderWrapper>
    );
}