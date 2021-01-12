import React from 'react';

import styled, { keyframes } from 'styled-components';

import astHead from '../img/ast_head.png';
import astBody from '../img/ast_body.png';
import astLeftArm from '../img/ast_left_arm_2.png';
import astLeftArmFront from '../img/ast_left_arm_1.png';
import astRightArm from '../img/ast_right_arm.png';
import astLeftLeg from '../img/ast_left_leg.png';
import astRightLeg from '../img/ast_right_leg.png';
import astFoot from '../img/ast_foot.png';
import antena from '../img/ast_antena.png';
import light from '../img/ast_antena_light_small.png';
import ear from '../img/ast_antena_under.png';
import moon from '../img/moon.png';
import flagLonger from '../img/flag_bar_1.png';
import flagShorter from '../img/flag_bar_2.png';
import flagShortest from '../img/flag_bar_3.png';
import flagFirst from '../img/flag_flag_1.png';
import flagSecond from '../img/flag_flag_2.png';
import flagThird from '../img/flag_flag_3.png';
import flagFourth from '../img/flag_flag_4.png';
import flagFifth from '../img/flag_flag_5.png';
import flagFirstHover from '../img/flag_flag_1_hover.png';
import flagSecondHover from '../img/flag_flag_2_hover.png';
import flagThirdHover from '../img/flag_flag_3_hover.png';
import flagFourthHover from '../img/flag_flag_4_hover.png';
import flagFifthHover from '../img/flag_flag_5_hover.png';
import shadow from '../img/bar_shadow.png';
import shadow2 from '../img/body_shadow.png';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const SkillsWrapper = styled.div`
    display: flex;
`;

const Moon = styled.div`
    top: 682px;
    left: 138px;
    width: 1390px;
    height: 170px;
    background-image: url(${moon});
    background-repeat: no-repeat;
    position: absolute;
`;

const AstronautWrapper = styled.div`
`;

const Astronaut = styled.div`
`;

const AstHead = styled.div`
    top: 363px;
    left: 1272.5px;
    width: 170px;
    height: 120px;
    background-image: url(${astHead});
    background-repeat: no-repeat;
    position: absolute;
`;

const AstBody = styled.div`
    top: 456px;
    left: 1267px;
    width: 170px;
    height: 170px;
    background-image: url(${astBody});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 5;
`;

const AstLeftArm = styled.div`
    top: 505px;
    left: 1242px;
    width: 60px;
    height: 70px;
    background-image: url(${astLeftArm});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
`;

const AstLeftArmFront = styled.div`
    top: 529px;
    left: 1165px;
    width: 100px;
    height: 45px;
    background-image: url(${astLeftArmFront});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 1;
`;

const ArmMove = keyframes`
    0% { transform: rotate(0deg) };
    8% { transform: rotate(2deg) };
    16% { transform: rotate(4deg) };
    24% { transform: rotate(6deg) };
    32% { transform: rotate(8deg) };
    40% { transform: rotate(10deg) };
    50% { transform: rotate(12deg) };
    58% { transform: rotate(10deg) };
    66% { transform: rotate(8deg) };
    74% { transform: rotate(6deg) };
    82% { transform: rotate(4deg) };
    90% { transform: rotate(2deg) };
    100% { transform: rotate(0deg) };
`;

const AstRightArm = styled.div`
    top: 505px;
    left: 1415px;
    width: 50px;
    height: 160px;
    background-image: url(${astRightArm});
    background-repeat: no-repeat;
    animation: ${ArmMove} 5s steps(13) infinite;
    transform-origin: 50% 10%;
    position: absolute;
    z-index: 6;
`;

const AstLeftLeg = styled.div`
    top: 590px;
    left: 1285px;
    width: 80px;
    height: 170px;
    background-image: url(${astLeftLeg});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 3;
`;

const AstRightLeg = styled.div`
    top: 590px;
    left: 1353px;
    width: 80px;
    height: 170px;
    background-image: url(${astRightLeg});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 3;
`;

const FeetMove = keyframes`
    0% { transform: rotate(0deg) };
    60% { transform: rotate(5deg) };
    100% { transform: rotate(0deg) };
`;

const AstLeftFeet = styled.div`
    top: 725px;
    left: 1278px;
    width: 80px;
    height: 40px;
    background-image: url(${astFoot});
    background-repeat: no-repeat;
    animation: ${FeetMove} 1s ease infinite;
    transform-origin: 90% 90%;
    position: absolute;
    z-index: 5;
`;

const AstRightFeet = styled.div`
    top: 725px;
    left: 1355px;
    width: 80px;
    height: 40px;
    background-image: url(${astFoot});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 5;
`;

const MoveAntena = keyframes`
    0% { transform: translate(0, 0px) };
    8% { transform: translate(0, 1px) };
    16% { transform: translate(0, 2px) };
    24% { transform: translate(0, 3px) };
    32% { transform: translate(0, 2px) };
    40% { transform: translate(0, 2px) };
    50% { transform: translate(0, 3px) };
    58% { transform: translate(0, 4px) };
    66% { transform: translate(0, 5px) };
    74% { transform: translate(0, 4px) };
    82% { transform: translate(0, 3px) };
    90% { transform: translate(0, 2px) };
    95% { transform: translate(0, 1px) };
    100% { transform: translate(0, 0px) };
`;

const LightMove = keyframes`
    0% { transform: translate(0, 0px) };
    8% { transform: translate(0, 1px) };
    16% { transform: translate(0, 2px) };
    24% { transform: translate(0, 3px) };
    32% { transform: translate(0, 2px) };
    40% { transform: translate(0, 2px) };
    50% { transform: translate(0, 3px) };
    58% { transform: translate(0, 4px) };
    66% { transform: translate(0, 5px) };
    74% { transform: translate(0, 4px) };
    82% { transform: translate(0, 3px) };
    90% { transform: translate(0, 2px) };
    95% { transform: translate(0, 1px) };
    100% { transform: translate(0, 0px) };
`;

const LightBlink = keyframes`
    0% { opacity: 0 };
    8% { opacity: 1 };
    16% { opacity: 0 };
    24% { opacity: 0 };
    32% { opacity: 1 };
    40% { opacity: 0 };
    50% { opacity: 1 };
    58% { opacity: 0 };
    66% { opacity: 0 };
    74% { opacity: 1 };
    82% { opacity: 0 };
    90% { opacity: 0 };
    95% { opacity: 0 };
    100% { opacity: 1 };
`;

const AstAntena = styled.div`
    top: 370px;
    left: 1426px;
    width: 30px;
    height: 70px;
    background-image: url(${antena});
    background-repeat: no-repeat;
    animation: ${MoveAntena} 4s steps(14) infinite;
    animation-direction: alternate;
    position: absolute;
`;

const Light = styled.div`
    top: 365px;
    left: 1435px;
    width: 30px;
    height: 30px;
    background-image: url(${light});
    background-repeat: no-repeat;
    animation: ${LightMove} 4s steps(14) infinite, ${LightBlink} 4s steps(14) infinite;
    animation-direction: alternate;
    position: absolute;
`;

const Ear = styled.div`
    top: 417px;
    left: 1424px;
    width: 30px;
    height: 30px;
    background-image: url(${ear});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 10;
`;

const FlagBar1 = styled.div`
    top: 185px;
    left: 1045px;
    width: 200px;
    height: 600px;
    background-image: url(${flagLonger});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Flag1 = styled.div`
    top: 165px;
    left: 1165px;
    width: 170px;
    height: 140px;
    background-image: url(${flagFirst});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background-image: url(${flagFirstHover});
    }
`;

const FlagBar2 = styled.div`
    top: 295px;
    left: 845px;
    width: 200px;
    height: 500px;
    background-image: url(${flagShorter});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Flag2 = styled.div`
    top: 285px;
    left: 962px;
    width: 180px;
    height: 140px;
    background-image: url(${flagFourth});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background-image: url(${flagSecondHover});
    }
`;

const FlagBar3 = styled.div`
    top: 295px;
    left: 665px;
    width: 200px;
    height: 500px;
    background-image: url(${flagShorter});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Flag3 = styled.div`
    top: 285px;
    left: 782px;
    width: 180px;
    height: 140px;
    background-image: url(${flagThird});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background-image: url(${flagThirdHover});
    }
`;

const FlagBar4 = styled.div`
    top: 414px;
    left: 411px;
    width: 200px;
    height: 400px;
    background-image: url(${flagShortest});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Flag4 = styled.div`
    top: 415px;
    left: 585px;
    width: 180px;
    height: 140px;
    background-image: url(${flagSecond});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background-image: url(${flagFourthHover});
    }
`;

const FlagBar5 = styled.div`
    top: 449px;
    left: 208px;
    width: 200px;
    height: 400px;
    background-image: url(${flagShortest});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Flag5 = styled.div`
    top: 445px;
    left: 381px;
    width: 180px;
    height: 140px;
    background-image: url(${flagFifth});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background-image: url(${flagFifthHover});
    }
`;

const Shadow1 = styled.div`
    top: 754px;
    left: 1168px;
    width: 200px;
    height: 95px;
    background-image: url(${shadow});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Shadow2 = styled.div`
    top: 751px;
    left: 966px;
    width: 200px;
    height: 98px;
    background-image: url(${shadow});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Shadow3 = styled.div`
    top: 751px;
    left: 786px;
    width: 200px;
    height: 98px;
    background-image: url(${shadow});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Shadow4 = styled.div`
    top: 775px;
    left: 588px;
    width: 200px;
    height: 74px;
    background-image: url(${shadow});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Shadow5 = styled.div`
    top: 811px;
    left: 386px;
    width: 200px;
    height: 38px;
    background-image: url(${shadow});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Shadow6 = styled.div`
    top: 757.5px;
    left: 1288.5px;
    width: 200px;
    height: 91px;
    background-image: url(${shadow2});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const TextWrapper = styled.div`
`;

const SkillsText = styled.div`
`;

export default function ContentSkills() {
    return (
        <SkillsWrapper>
            <Moon />
            <AstronautWrapper>
                <Astronaut>
                    <AstHead />
                    <AstBody />
                    <AstLeftArm />
                    <AstLeftArmFront />
                    <AstRightArm />
                    <AstLeftLeg />
                    <AstRightLeg />
                    <AstLeftFeet />
                    <AstRightFeet />
                    <AstAntena />
                    <Light />
                    <Ear />
                    <FlagBar1 />
                    <Flag1 />
                    <FlagBar2 />
                    <Flag2 />
                    <FlagBar3 />
                    <Flag3 />
                    <FlagBar4 />
                    <Flag4 />
                    <FlagBar5 />
                    <Flag5 />
                    <Shadow1 />
                    <Shadow2 />
                    <Shadow3 />
                    <Shadow4 />
                    <Shadow5 />
                    <Shadow6 />
                </Astronaut>
            </AstronautWrapper>
            <TextWrapper>
                <SkillsText></SkillsText>
            </TextWrapper>
        </SkillsWrapper>
    )
}