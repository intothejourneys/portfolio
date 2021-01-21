import React, { useState } from 'react';

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
import footMove from '../img/footmove.png';
import jsBubble from '../img/js_bubble.png';
import htmlBubble from '../img/html_bubble.png';
import reactBubble from '../img/react_bubble.png';
import nodeBubble from '../img/node_bubble.png';
import etcBubble from '../img/etc_bubble.png';

import cursor_2 from '../img/cursor_2.cur';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const SkillsWrapper = styled.div`
    display: flex;
    animation: ${Desolve} 3s ease;
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
    left: 1164px;
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
    top: 242px;
    left: 264px;
    width: 200px;
    height: 600px;
    background-image: url(${flagLonger});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const Flag5 = styled.div`
    top: 230px;
    left: 382.5px;
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
    top: 746.5px;
    left: 1280.5px;
    width: 200px;
    height: 102px;
    background-image: url(${shadow2});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
`;

const FootMove = styled.div`
    top: 728.5px;
    left: 1259.5px;
    width: 40px;
    height: 40px;
    background-image: url(${footMove});
    background-repeat: no-repeat;
    position: absolute;
`;

const Flag1Text = styled.div`
    top: -32px;
    left: 891px;
    width: 400px;
    height: 220px;
    background-image: url(${jsBubble});
    background-repeat: no-repeat;
    position: absolute;
`;

const Flag1TextArea = styled.span`
    padding-top: 84px;
    padding-left: 15px;
    color: #606060;
    font-size: 15px;
    font-weight: 200;
    font-family: 'Poor Story', cursive;
    position: absolute;
`;

const Flag2Text = styled.div`
    top: -26px;
    left: 783px;
    width: 400px;
    height: 323px;
    background-image: url(${htmlBubble});
    background-repeat: no-repeat;
    position: absolute;
`;

const Flag2TextArea = styled.span`
    padding-top: 88px;
    padding-left: 15px;
    color: #606060;
    font-size: 17px;
    font-weight: 200;
    font-family: 'Poor Story', cursive;
    position: absolute;
`;

const Flag3Text = styled.div`
    top: 0px;
    left: 470px;
    width: 400px;
    height: 297px;
    background-image: url(${reactBubble});
    background-repeat: no-repeat;
    position: absolute;
`;

const Flag3TextArea = styled.span`
    padding-top: 88px;
    padding-left: 15px;
    color: #606060;
    font-size: 17px;
    font-weight: 200;
    font-family: 'Poor Story', cursive;
    position: absolute;
`;

const Flag4Text = styled.div`
    top: 61px;
    left: 520px;
    width: 400px;
    height: 370px;
    background-image: url(${nodeBubble});
    background-repeat: no-repeat;
    position: absolute;
`;

const Flag4TextArea = styled.span`
    padding-top: 96px;
    padding-left: 47px;
    color: #606060;
    font-size: 17px;
    font-weight: 200;
    font-family: 'Poor Story', cursive;
    position: absolute;
`;

const Flag5Text = styled.div`
    top: 23px;
    left: 335px;
    width: 400px;
    height: 222px;
    background-image: url(${etcBubble});
    background-repeat: no-repeat;
    position: absolute;
`;

const Flag5TextArea = styled.span`
    padding-top: 88px;
    padding-left: 15px;
    color: #606060;
    font-size: 17px;
    font-weight: 200;
    font-family: 'Poor Story', cursive;
    position: absolute;
`;

const TextWrapper = styled.div`
`;

const SkillsText = styled.div`
`;

export default function ContentSkills() {

    const [popOverStatu, setPopOverStatu] = useState({js: false, html: false, react: false, node: false, etc: false});

    const onJsHandler = () => {
        setPopOverStatu({js: !popOverStatu.js});
    };
    const onHtmlHandler = () => {
        setPopOverStatu({html: !popOverStatu.html});
    };
    const onReactHandler = () => {
        setPopOverStatu({react: !popOverStatu.react});
    };
    const onNodeHandler = () => {
        setPopOverStatu({node: !popOverStatu.node});
    };
    const onEtcHandler = () => {
        setPopOverStatu({etc: !popOverStatu.etc});
    };

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
                    <Flag1 onMouseOver={onJsHandler} onMouseOut={onJsHandler} />
                    {popOverStatu.js && (
                        <Flag1Text>
                            <Flag1TextArea>
                                웹의 구조와 작동 방식을<br/>
                                깊이있게 이해하기 위해 꾸준히 공부하고 있으며,<br/>
                                자바스크립트(ES6+)를 이용하여<br/>
                                정적 화면을 동적으로 구현하는데 필요한<br/>
                                다양한 로직을 설계할 수 있습니다.<br/>
                                + TypeScript를 공부 중입니다.
                            </Flag1TextArea>
                        </Flag1Text>
                    )}
                    <FlagBar2 />
                    <Flag2 onMouseOver={onHtmlHandler} onMouseOut={onHtmlHandler} />
                    {popOverStatu.html && (
                        <Flag2Text>
                            <Flag2TextArea>
                                HTML 문법을 잘 이해하고 있으며<br/>
                                CSS(styled-components)를 다채롭게 또한<br/>
                                효율적으로 활용하여,<br/>
                                보기 좋고, 쓰기 좋은 웹 페이지를 제작하는데<br/>
                                열정을 가지고 있습니다.
                            </Flag2TextArea>
                        </Flag2Text>
                    )}
                    <FlagBar3 />
                    <Flag3 onMouseOver={onReactHandler} onMouseOut={onReactHandler} />
                    {popOverStatu.react && (
                        <Flag3Text>
                            <Flag3TextArea>
                                리액트, 리액트 훅스를 활용하여<br/>
                                특정 기능 구현을 위해 필요한 로직을 설계하고<br/>
                                함수들을 생성하며,<br/>
                                이벤트 및 상태 관리를 수월하게 할 수 있습니다.<br/>
                                + Redux 및 관련 미들웨어를 공부 중입니다.
                            </Flag3TextArea>
                        </Flag3Text>
                    )}
                    <FlagBar4 />
                    <Flag4 onMouseOver={onNodeHandler} onMouseOut={onNodeHandler} />
                    {popOverStatu.node && (
                        <Flag4Text>
                            <Flag4TextArea>
                                node.js 환경의 특징을 이해하며<br/>
                                핵심 개념들에 대해 깊이있게 공부해 왔습니다.<br/>
                                express를 활용해 보다 쉽게 API를 작성하여<br/>
                                클라이언트와 기본적인 소통이 가능하게 할 수 있습니다.<br/>
                            </Flag4TextArea>
                        </Flag4Text>
                    )}
                    <FlagBar5 />
                    <Flag5 onMouseOver={onEtcHandler} onMouseOut={onEtcHandler} />
                    {popOverStatu.etc && (
                        <Flag5Text>
                            <Flag5TextArea>
                                SQL 쿼리문을 작성, 또한 Sequelize를 통해<br/>
                                MySQL에 데이터를 저장, 수정 및 삭제할 수 있습니다.<br/>
                                깃헙의 작동 원리를 이해하고 유용하게 활용할 수 있으며<br/>
                                노션, 미로, 슬랙 등 다양한 협업 툴 사용에 익숙합니다.<br/>
                                영어로 의사 소통 및 메일 작성 경험이 많습니다.
                            </Flag5TextArea>
                        </Flag5Text>
                    )}
                    <Shadow1 />
                    <Shadow2 />
                    <Shadow3 />
                    <Shadow4 />
                    <Shadow5 />
                    <Shadow6 />
                    <FootMove />
                </Astronaut>
            </AstronautWrapper>
            <TextWrapper>
                <SkillsText></SkillsText>
            </TextWrapper>
        </SkillsWrapper>
    )
}