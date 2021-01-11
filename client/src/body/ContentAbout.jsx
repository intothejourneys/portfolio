import React from 'react';
import { Link } from "react-router-dom";

import styled, { keyframes } from 'styled-components';

import astHeadBig from '../img/ast_head_big.png';
import astBodyBig from '../img/ast_body_big.png';
import astLeftArmFrontBig from '../img/ast_left_arm_1_big.png';
import astLeftArmBig from '../img/ast_left_arm_2_big.png';
import astRightArmBig from '../img/ast_right_arm_big.png';
import astResumeBig from '../img/ast_resume_big.png';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const AboutWrapper = styled.div`
`;

const AstronautWrapper = styled.div`
`;

const Astronaut = styled.div`
    display: flex;
    position: relative;
`;

const AstHead = styled.div`
    width: 470px;
    height: 330px;
    top: 216px;
    left: 818px;
    background-image: url(${astHeadBig});
    background-repeat: no-repeat;
    position: absolute;
`;

const AstBody = styled.div`
    width: 340px;
    height: 420px;
    top: 424px;
    left: 900px;
    background-image: url(${astBodyBig});
    background-repeat: no-repeat;
    position: absolute;
`;

const Move = keyframes`
    0% { transform: rotate(0deg) };
    8% { transform: rotate(3deg) translate(3px, 3px) };
    16% { transform: rotate(6deg) translate(6px, 6px) };
    24% { transform: rotate(9deg) translate(9px, 9px) };
    32% { transform: rotate(12deg) translate(12px, 12px) };
    40% { transform: rotate(15deg) translate(15px, 15px) };
    50% { transform: rotate(18deg) translate(18px, 18px) };
    58% { transform: rotate(15deg) translate(15px, 15px) };
    66% { transform: rotate(12deg) translate(12px, 12px) };
    74% { transform: rotate(9deg) translate(9px, 9px) };
    82% { transform: rotate(6deg) translate(6px, 6px) };
    90% { transform: rotate(3deg) translate(3px, 3px) };
    100% { transform: rotate(0deg) };
`;

const AstLeftArmFront = styled.div`
    width: 500px;
    height: 240px;
    top: 582px;
    left: 420px;
    background-image: url(${astLeftArmFrontBig});
    background-repeat: no-repeat;
    position: absolute;
    animation: ${Move} 5s steps(13) infinite;
    transform-origin: 90% 50%;
    cursor: url(${cursor_2}), auto;
    z-index: 5;
`;

const AstLeftArm = styled.div`
    width: 150px;
    height: 200px;
    top: 604px;
    left: 770px;
    background-image: url(${astLeftArmBig});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 10;
`;

// const AstResume = styled.div`
//     width: 230px;
//     height: 300px;
//     top: 530px;
//     left: 250px;
//     background-image: url(${astResumeBig});
//     background-repeat: no-repeat;
//     position: absolute;
//     animation: ${MoveResume} 5s steps(13) infinite;
//     transform-origin: 90% 50%;
//     z-index: 3;
// `;

const AstRightArm = styled.div`
    width: 190px;
    height: 255px;
    top: 589px;
    left: 1144px;
    background-image: url(${astRightArmBig});
    background-repeat: no-repeat;
    position: absolute;
`;

const TextWrapper = styled.div`
`;

const AboutText = styled.div`
`;

// 클릭
// 말풍선

export default function ContentAbout() {
    return (
        <AboutWrapper>
            <AstronautWrapper>
                <Astronaut>
                    <AstHead />
                    <AstBody />
                    <AstLeftArm />
                    <Link to="../resume/권은정_프론트엔드_최신.pdf" target="_blank" download>
                        <AstLeftArmFront />
                    </Link>
                    <AstRightArm />
                </Astronaut>
            </AstronautWrapper>
            <TextWrapper>
                <AboutText></AboutText>
            </TextWrapper>
        </AboutWrapper>
    )
}