import React from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const HeaderWrapper = styled.div`
    top: 0%;
    width: 100%;
    height: 10%;
    position: absolute;
    border: 3px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: transparent;
    cursor: url(${cursor_1}), auto;
    z-index: 15;
`;

const HeaderText = styled.p`
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    vertical-align: middle;
    position:absolute;
    color: #FCF6F5FF;
    font-size: 25px;
    font-weight: 200;
    font-family: 'Press Start 2P', cursive;
    transition: ease 0.4s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        color: #FFF0CF;
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Link to="/" style={{ textDecoration: 'none' }}>
                {/* <Link> will essentially return a standard <a> tag, which is why we apply textDecoration rule there. */}
                <HeaderText>Welcome to My Space!</HeaderText>
            </Link>
        </HeaderWrapper>
    );
}