import React, { useState } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

import planet_1 from '../img/planet_1_original.png';
import planet_2 from '../img/planet_2_original.png';
import planet_3 from '../img/planet_3_original.png';
import planet_4 from '../img/planet_4_original.png';
import planet_1_over from '../img/planet_1_mouseover.png';
import planet_2_over from '../img/planet_2_mouseover.png';
import planet_3_over from '../img/planet_3_mouseover.png';
import planet_4_over from '../img/planet_4_mouseover.png';

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
    cursor: url(${cursor_1}), auto;
`;

const Planet1Img = styled.div`
    width: 110px;
    height: 90px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 40px;
    background-image: url(${planet_1});
    background-repeat: no-repeat;
    transition: transform 0.5s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        background-image: url(${planet_1_over});
        background-repeat: no-repeat;
        transform: scale(1.04);
    }
`;

const Planet1Text = styled.div`
    color: #89ABE3FF;
    margin-left: 30px;
    transform: translateY(45%);
    cursor: url(${cursor_2}), auto;

    &:hover {
        color: #ffffff
    }
`;

const Planet2Div = styled.div`
    display: flex;
    cursor: url(${cursor_1}), auto;
`;

const Planet2Img = styled.div`
    width: 110px;
    height: 90px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 40px;
    background-image: url(${planet_2});
    background-repeat: no-repeat;
    transition: transform 0.5s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        background-image: url(${planet_2_over});
        background-repeat: no-repeat;
        transform: scale(1.04);
    }
`;

const Planet2Text = styled.div`
    color: #89ABE3FF;
    margin-left: 30px;
    transform: translateY(45%);
    cursor: url(${cursor_2}), auto;

    &:hover {
        color: #ffffff
    }
`;

const Planet3Div = styled.div`
    display: flex;
    cursor: url(${cursor_1}), auto;
`;

const Planet3Img = styled.div`
    width: 120px;
    height: 90px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 40px;
    background-image: url(${planet_3});
    background-repeat: no-repeat;
    transition: transform 0.5s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        background-image: url(${planet_3_over});
        background-repeat: no-repeat;
        transform: scale(1.04);
    }
`;

const Planet3Text = styled.div`
    color: #89ABE3FF;
    margin-left: 40px;
    transform: translateY(45%);
    cursor: url(${cursor_2}), auto;

    &:hover {
        color: #ffffff
    }
`;

const Planet4Div = styled.div`
    display: flex;
    cursor: url(${cursor_1}), auto;
`;

const Planet4Img = styled.div`
    width: 110px;
    height: 90px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
    background-image: url(${planet_4});
    background-repeat: no-repeat;
    transition: transform 0.5s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        background-image: url(${planet_4_over});
        background-repeat: no-repeat;
        transform: scale(1.04);
    }
`;

const Planet4Text = styled.div`
    color: #89ABE3FF;
    margin-left: 10px;
    transform: translateY(45%);
    cursor: url(${cursor_2}), auto;

    &:hover {
        color: #ffffff
    }
`;

export default function Nav() {
    return (
        <NavWrapper>
            <PlanetWrapper>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <Planet1Div>
                        <Planet1Img />
                        <Planet1Text>About</Planet1Text>
                    </Planet1Div>
                </Link>
                <Link to='/skills' style={{ textDecoration: 'none' }}>
                    <Planet2Div>
                        <Planet2Img />
                        <Planet2Text>Skills</Planet2Text>
                    </Planet2Div>
                </Link>
                <Link to='/works' style={{ textDecoration: 'none' }}>
                    <Planet3Div>
                        <Planet3Img />
                        <Planet3Text>Works</Planet3Text>
                    </Planet3Div>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <Planet4Div>
                        <Planet4Img />
                        <Planet4Text>Contact</Planet4Text>
                    </Planet4Div>
                </Link>
            </PlanetWrapper>
        </NavWrapper>
    )
}