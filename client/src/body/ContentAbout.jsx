import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';

import ContentAboutModal from './ContentAboutModal';

import astHeadBig from '../img/ast_head_big.png';
import astBodyBig from '../img/ast_body_big.png';
import astLeftArmFrontBig from '../img/ast_left_arm_1_big.png';
import astLeftArmBig from '../img/ast_left_arm_2_big.png';
import astRightArmBig from '../img/ast_right_arm_big.png';
import antenaUnderBig from '../img/ast_antena_under_big.png';
import antenaBig from '../img/ast_antena_big.png';
import antenaLight from '../img/ast_antena_light.png';
import myResume from '../resume/권은정_프론트엔드_최신.pdf';
import bubble from '../img/bubble.png';
import mouse from '../img/mouse.png';
import mouseBig from '../img/mouse_big.png';

import cursor_2 from '../img/cursor_2.cur';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const AboutWrapper = styled.div`
    animation: ${Desolve} 3s ease;
`;

const AstronautWrapper = styled.div`
`;

const Astronaut = styled.div`
    display: flex;
    position: relative;
`;

const AstHead = styled.div`
    width: 470px;
    height: 340px;
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

const MoveArm = keyframes`
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
    height: 220px;
    top: 582px;
    left: 420px;
    background-image: url(${astLeftArmFrontBig});
    background-repeat: no-repeat;
    position: absolute;
    animation: ${MoveArm} 5s steps(13) infinite;
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

const MoveAntena = keyframes`
    0% { transform: translate(0, 0px) };
    8% { transform: translate(0, 4px) };
    16% { transform: translate(0, 8px) };
    24% { transform: translate(0, 12px) };
    32% { transform: translate(0, 8px) };
    40% { transform: translate(0, 8px) };
    50% { transform: translate(0, 12px) };
    58% { transform: translate(0, 16px) };
    66% { transform: translate(0, 20px) };
    74% { transform: translate(0, 16px) };
    82% { transform: translate(0, 12px) };
    90% { transform: translate(0, 8px) };
    95% { transform: translate(0, 4px) };
    100% { transform: translate(0, 0px) };
`;

const LightMove = keyframes`
    0% { transform: translate(0, 0px) };
    8% { transform: translate(0, 4px) };
    16% { transform: translate(0, 8px) };
    24% { transform: translate(0, 12px) };
    32% { transform: translate(0, 8px) };
    40% { transform: translate(0, 8px) };
    50% { transform: translate(0, 12px) };
    58% { transform: translate(0, 16px) };
    66% { transform: translate(0, 20px) };
    74% { transform: translate(0, 16px) };
    82% { transform: translate(0, 12px) };
    90% { transform: translate(0, 8px) };
    95% { transform: translate(0, 4px) };
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

const AstAntenaUnder = styled.div`
    width: 80px;
    height: 100px;
    top: 385px;
    left: 1255px;
    background-image: url(${antenaUnderBig});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 11;
`;

const AstAntena = styled.div`
    width: 190px;
    height: 200px;
    top: 213px;
    left: 1250px;
    background-image: url(${antenaBig});
    background-repeat: no-repeat;
    position: absolute;
    animation: ${MoveAntena} 4s steps(14) infinite;
    animation-direction: alternate;
    z-index: 10;
`;

const AstLight = styled.div`
    width: 100px;
    height: 100px;
    top: 194px;
    left: 1280px;
    background-image: url(${antenaLight});
    background-repeat: no-repeat;
    position: absolute;
    animation: ${LightMove} 4s steps(14) infinite, ${LightBlink} 4s steps(14) infinite;
    animation-direction: alternate;
`;

// const TextWrapper = styled.div`
//     margin-top: 120px;
//     margin-left: 100px;
// `;

// const AboutText = styled.div`
//     font-size: 21px;
//     font-family: 'Poor Story', cursive;
// `;

const Button = styled.div`
    display: flex;
`;

const ButtonText = styled.p`
    margin-top: 308px;
    margin-left: 620px;
    color: #606060;
    font-size: 20px;
    font-weight: 100;
    font-family: 'Jua', sans-serif;
    position: absolute;
    opacity: 0.7;
    z-index: 15;
`;

const ButtonImg = styled.div`
    top: 120px;
    left: 570px;
    width: 300px;
    height: 360px;
    background-image: url(${bubble});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 14;
`;

const ButtonMouse = styled.button`
    margin-top: 350px;
    margin-left: 680px;
    width: 110px;
    height: 80px;
    border: transparent;
    background-color: transparent;
    background-image: url(${mouse});
    background-repeat: no-repeat;
    cursor: url(${cursor_2}), auto;
    outline: 0;
    z-index: 16;

    &:hover {
        background-image: url(${mouseBig});
        background-repeat: no-repeat;
    }
`;

export default function ContentAbout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ModalOpenHandler = () => {
        setIsModalOpen(!isModalOpen);
        console.log(isModalOpen)
    };

    return (
        <AboutWrapper>
            <AstronautWrapper>
                <Astronaut>
                    <AstHead />
                    <AstBody />
                    <AstLeftArm />
                    <a href={myResume} download="권은정_이력서">
                    {/* 임시, 나중에 배포할 때 변경하기 */}
                        <AstLeftArmFront />
                    </a>
                    <AstRightArm />
                    <AstAntenaUnder />
                    <AstAntena />
                    <AstLight />
                </Astronaut>
            </AstronautWrapper>
            {/* <TextWrapper>
                <AboutText>
                    프리랜서 영상 제작자로 아프리카, 유럽 등 80여개 국에서 홀로, 또 같이 오랫동안 일해왔습니다.<br/>
                    노트북 앞에서 밤낮없이 집중하는 것에 익숙하고,<br/>
                    힘을 합쳐 하나의 결과물을 완성해내는 희열을 잘 압니다.<br/>
                    <br/>
                    코로나가 한창이던 작년 4월 귀국 후, 커리어 전환을 결심하고<br/>
                    6월부터 12월까지, 코드스테이츠에서 개발자가 되기 위해 치열한 과정을 거쳤습니다.<br/>
                    <br/>
                    개발은 제가 해오던 일과 많이 닮았습니다,<br/>
                    상상하던 이미지에 움직임을 더해 현실화하는 작업.<br/>
                    화면 속 주인공은 아니지만, 뒤에서 그 전부를 직접 구현해내는 사람.<br/>
                    <br/>
                    UI/UX를 민감하게 다루고
                    표면 뒤에서 섬세하게 움직임을 구현해내는 프론트엔드 개발자.<br/>
                    모두 사람이 하는 일임을 늘 최우선 가치로 두고<br/>
                    날마다 더 좋은 배려와 소통을 할 수 있는 사람이 되기 위해 진심으로 노력하겠습니다.<br/>
                </AboutText>
            </TextWrapper> */}
            <Button>
                <ButtonText>Hello!<br/>Let me introduce<br/>Myself ➜</ButtonText>
                <ButtonMouse onClick={ModalOpenHandler} />
                <ContentAboutModal isModalOpen={isModalOpen} ModalOpenHandler={ModalOpenHandler} />
                <ButtonImg />
            </Button>
        </AboutWrapper>
    )
}