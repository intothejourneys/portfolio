import React, { useState } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

import planet_1 from '../img/planet_1_original.png';
import planet_2 from '../img/planet_2_original.png';
import planet_3 from '../img/planet_3_original.png';
import planet_4 from '../img/planet_4_original.png';
import planet_1_over from '../img/planet_1_mouseover.png';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const NavWrapper = styled.div`
    top: 10%;
    width: 20%;
    height: 83%;
    position: absolute;
    display: table;
    border: 3px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: transparent;
    cursor: url(${cursor_1}), auto;
    z-index: 3;
`;

const PlanetWrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

const Planet1Div = styled.div`
    display: flex;
`;

const Planet1Img = styled.img`
    height: 80px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
    cursor: url(${cursor_2}), auto;
`;

const Planet1Text = styled.div`
    transform: translateY(45%);
    margin-left: 20px;
    cursor: url(${cursor_2}), auto;
`;

const Planet2Div = styled.div`
    display: flex;
`;

const Planet2Img = styled.img`
    height: 80px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
    cursor: url(${cursor_2}), auto;
`;

const Planet2Text = styled.div`
    transform: translateY(45%);
    margin-left: 20px;
    cursor: url(${cursor_2}), auto;
`;

const Planet3Div = styled.div`
    display: flex;
`;

const Planet3Img = styled.img`
    height: 80px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
    cursor: url(${cursor_2}), auto;
`;

const Planet3Text = styled.div`
    transform: translateY(45%);
    margin-left: 20px;
    cursor: url(${cursor_2}), auto;
`;

const Planet4Div = styled.div`
    display: flex;
`;

const Planet4Img = styled.img`
    height: 80px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
    cursor: url(${cursor_2}), auto;
`;

const Planet4Text = styled.div`
    transform: translateY(45%);
    margin-left: 20px;
    cursor: url(${cursor_2}), auto;
`;

export default function Nav() {
    return (
        <NavWrapper>
            <PlanetWrapper>
            <Planet1Div>
                <Planet1Img src={planet_1} alt='oops!' />
                <Planet1Text>About</Planet1Text>
            </Planet1Div>
            <Planet2Div>
                <Planet2Img src={planet_2} alt='oops!' />
                <Planet2Text>Skills</Planet2Text>
            </Planet2Div>
            <Planet3Div>
                <Planet3Img src={planet_3} alt='oops!' />
                <Planet3Text>Experiences</Planet3Text>
            </Planet3Div>
            <Planet4Div>
                <Planet4Img src={planet_4} alt='oops!' />
                <Planet4Text>Contact</Planet4Text>
            </Planet4Div>
            </PlanetWrapper>
        </NavWrapper>
    )
}