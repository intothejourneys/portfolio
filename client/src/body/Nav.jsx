import React from 'react';
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
import about from '../img/ABOUT.svg';
import aboutHover from '../img/ABOUT_hover.svg';
import skills from '../img/SKILLS.svg';
import skillsHover from '../img/SKILLS_hover.svg';
import works from '../img/WORKS.svg';
import worksHover from '../img/WORKS_hover.svg';
import contact from '../img/CONTACT.svg';
import contactHover from '../img/CONTACT_hover.svg';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const NavWrapper = styled.div`
    top: 10%;
    width: 20%;
    height: 83%;
    position: absolute;
    display: table;
    font-size: 18px;
    font-weight: 200;
    font-family: 'Press Start 2P', cursive;
    border: 3px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: transparent;
    cursor: url(${cursor_1}), auto;
    z-index: 15;
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
    width: 30%;
    height: 10%;
    // margin-top: 5%;
    // margin-bottom: 3%;
    // margin-left: 10%;
    bottom: 65%;
    right: 60%;
    background-image: url(${planet_1});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    transition: transform 0.5s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        background-image: url(${planet_1_over});
        transform: scale(1.14);
    }
`;

const Planet1Text = styled.div`
    width: 20%;
    height: 3.2%;
    // color: #FCF6F5FF;
    // margin-top: 5%;
    // margin-left: 5%;
    bottom: 70%;
    right: 35%;
    background-image: url(${about});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    transform: translateY(45%);
    cursor: url(${cursor_2}), auto;

    &:hover {
        // color: #FFF0CF;
        background-image: url(${aboutHover});
        margin-left: 4.5%;
        transform: translateY(44%);
    }
`;

const Planet2Div = styled.div`
    display: flex;
    cursor: url(${cursor_1}), auto;
`;

const Planet2Img = styled.div`
    width: 30%;
    height: 10%;
    // margin-top: 20px;
    // margin-bottom: 10px;
    // margin-left: 45px;
    bottom: 52%;
    right: 58.8%;
    background-image: url(${planet_2});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    transition: transform 0.5s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        background-image: url(${planet_2_over});
        transform: scale(1.14);
    }
`;

const Planet2Text = styled.div`
    width: 24%;
    height: 3.2%;
    // color: #FCF6F5FF;
    // margin-top: 45px;
    // margin-left: 30px;
    bottom: 57%;
    right: 31.2%;
    background-image: url(${skills});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    transform: translateY(45%);
    cursor: url(${cursor_2}), auto;

    &:hover {
        // color: #FFF0CF;
        background-image: url(${skillsHover});
        margin-left: 4.5%;
        transform: translateY(44%);
    }
`;

const Planet3Div = styled.div`
    display: flex;
    cursor: url(${cursor_1}), auto;
`;

const Planet3Img = styled.div`
    width: 30%;
    height: 10%;
    // margin-top: 20px;
    // margin-bottom: 10px;
    // margin-left: 45px;
    bottom: 39%;
    right: 60%;
    background-image: url(${planet_3});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    transition: transform 0.5s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        background-image: url(${planet_3_over});
        transform: scale(1.14);
    }
`;

const Planet3Text = styled.div`
    width: 20%;
    height: 3.2%;
    // color: #FCF6F5FF;
    // margin-top: 45px;
    // margin-left: 40px;
    bottom: 44%;
    right: 34.8%;
    background-image: url(${works});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    transform: translateY(45%);
    cursor: url(${cursor_2}), auto;

    &:hover {
        // color: #FFF0CF;
        background-image: url(${worksHover});
        margin-left: 4.5%;
        transform: translateY(44%);
    }
`;

const Planet4Div = styled.div`
    display: flex;
    cursor: url(${cursor_1}), auto;
`;

const Planet4Img = styled.div`
    width: 30%;
    height: 10%;
    // margin-top: 20px;
    // margin-bottom: 20px;
    // margin-left: 45px;
    bottom: 26%;
    right: 60.4%;
    background-image: url(${planet_4});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    transition: transform 0.5s;
    cursor: url(${cursor_2}), auto;

    &:hover {
        background-image: url(${planet_4_over});
        transform: scale(1.14);
    }
`;

const Planet4Text = styled.div`
    width: 28%;
    height: 3.2%;
    // color: #FCF6F5FF;
    // margin-top: 45px;
    // margin-left: 10px;
    bottom: 31%;
    right: 27%;
    background-image: url(${contact});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    transform: translateY(45%);
    cursor: url(${cursor_2}), auto;

    &:hover {
        // color: #FFF0CF;
        background-image: url(${contactHover});
        margin-left: 4.5%;
        transform: translateY(44%);
    }
`;

export default function Nav() {
    return (
        <NavWrapper>
            <PlanetWrapper>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <Planet1Div>
                        <Planet1Img />
                        <Planet1Text></Planet1Text>
                    </Planet1Div>
                </Link>
                <Link to='/skills' style={{ textDecoration: 'none' }}>
                    <Planet2Div>
                        <Planet2Img />
                        <Planet2Text></Planet2Text>
                    </Planet2Div>
                </Link>
                <Link to='/works' style={{ textDecoration: 'none' }}>
                    <Planet3Div>
                        <Planet3Img />
                        <Planet3Text></Planet3Text>
                    </Planet3Div>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <Planet4Div>
                        <Planet4Img />
                        <Planet4Text></Planet4Text>
                    </Planet4Div>
                </Link>
            </PlanetWrapper>
        </NavWrapper>
    )
}