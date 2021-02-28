import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';

import ContentAboutModal from './ContentAboutModal';

// import astHeadBig from '../img/ast_head_big.png';
// import astBodyBig from '../img/ast_body_big.png';
import astLeftArmFrontBig from '../img/ast_left_arm_1_big.png';
// import astLeftArmBig from '../img/ast_left_arm_2_big.png';
// import astRightArmBig from '../img/ast_right_arm_big.png';
import antenaUnderBig from '../img/ast_antena_under_big.png';
import antenaBig from '../img/ast_antena_big.png';
import antenaLight from '../img/ast_antena_light.png';
// import myResume from '../resume/권은정_프론트엔드.pdf';
import myResume from '../img/resumeHide.png';
import bubble from '../img/bubble.png';
import mouse from '../img/mouse.svg';
// import mouseBig from '../img/mouse_big.png';
import buttonText from '../img/introduce.svg';

import astFixedParts from '../img/astronaut_body_together.png';
import click from '../img/click.png';

import cursor_2 from '../img/cursor_2.cur';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const AboutWrapper = styled.div`
    display: flex;
    animation: ${Desolve} 3s ease;
`;

const AstronautWrapper = styled.div`
`;

const Astronaut = styled.div`
`;

const AstAll = styled.div`
    width: 35%;
    height: 84.5%;
    // top: 183px;
    // left: 792px;
    bottom: -8%;
    right: 10%;
    background-image: url(${astFixedParts});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    // object-fit: contain;
    // object-position: center center;
    z-index: 26;
`;

// const AstHead = styled.div`
//     width: 470px;
//     height: 340px;
//     // top: 216px;
//     // left: 818px;
//     top: 27.135%;
//     left: 53.464%;
//     background-image: url(${astHeadBig});
//     background-repeat: no-repeat;
//     position: absolute;
// `;

// const AstBody = styled.div`
//     width: 340px;
//     height: 420px;
//     // top: 424px;
//     // left: 900px;
//     top: 53.266%;
//     left: 58.823%;
//     background-image: url(${astBodyBig});
//     background-repeat: no-repeat;
//     position: absolute;
// `;

// const MoveArm = keyframes`
//     0% { transform: rotate(0deg) };
//     8% { transform: rotate(3deg) translate(3px, 3px) };
//     16% { transform: rotate(6deg) translate(6px, 6px) };
//     24% { transform: rotate(9deg) translate(9px, 9px) };
//     32% { transform: rotate(12deg) translate(12px, 12px) };
//     40% { transform: rotate(15deg) translate(15px, 15px) };
//     50% { transform: rotate(18deg) translate(18px, 18px) };
//     58% { transform: rotate(15deg) translate(15px, 15px) };
//     66% { transform: rotate(12deg) translate(12px, 12px) };
//     74% { transform: rotate(9deg) translate(9px, 9px) };
//     82% { transform: rotate(6deg) translate(6px, 6px) };
//     90% { transform: rotate(3deg) translate(3px, 3px) };
//     100% { transform: rotate(0deg) };
// `;

const MoveArm = keyframes`
    0% { transform: rotate(0deg) };
    8% { transform: rotate(3deg) translate(0.2%, 0.3%) };
    16% { transform: rotate(6deg) translate(0.4%, 0.6%) };
    24% { transform: rotate(9deg) translate(0.6%, 0.9%) };
    32% { transform: rotate(12deg) translate(0.8%, 1.2%) };
    40% { transform: rotate(15deg) translate(1%, 1.5%) };
    50% { transform: rotate(18deg) translate(1.2%, 1.8%) };
    58% { transform: rotate(15deg) translate(1%, 1.5%) };
    66% { transform: rotate(12deg) translate(0.8%, 1.2%) };
    74% { transform: rotate(9deg) translate(0.6%, 0.9%) };
    82% { transform: rotate(6deg) translate(0.4%, 0.6%) };
    90% { transform: rotate(3deg) translate(0.2%, 0.3%) };
    100% { transform: rotate(0deg) };
`;

// const MoveArm = keyframes`
//     0% { transform: rotate(0deg) };
//     8% { transform: rotate(3deg) };
//     16% { transform: rotate(6deg) };
//     24% { transform: rotate(9deg) };
//     32% { transform: rotate(12deg) };
//     40% { transform: rotate(15deg) };
//     50% { transform: rotate(18deg) };
//     58% { transform: rotate(15deg) };
//     66% { transform: rotate(12deg) };
//     74% { transform: rotate(9deg) };
//     82% { transform: rotate(6deg) };
//     90% { transform: rotate(3deg) };
//     100% { transform: rotate(0deg) };
// `;

const AstLeftArmFront = styled.div`
    width: 27%;
    height: 27%;
    // top: 586px;
    // left: 417px;
    bottom: -0.6%;
    right: 41.8%;
    background-image: url(${astLeftArmFrontBig});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    animation: ${MoveArm} 5s steps(13) infinite;
    transform-origin: 90% 50%;
    cursor: url(${cursor_2}), auto;
    z-index: 25;
`;

const Blink = keyframes`
    0% { opacity: 0% }
    50% { opacity: 80% }
    100% { opacity: 0% }
`;

const Click = styled.div`
    top: -15%;
    left: 9.5%;
    width: 30%;
    height: 15%;
    background-image: url(${click});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    animation: ${Blink} 1s ease infinite;
    position: absolute;
`;

// const AstLeftArm = styled.div`
//     width: 150px;
//     height: 200px;
//     top: 604px;
//     left: 770px;
//     background-image: url(${astLeftArmBig});
//     background-repeat: no-repeat;
//     position: absolute;
//     z-index: 10;
// `;

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

// const AstRightArm = styled.div`
//     width: 190px;
//     height: 255px;
//     top: 589px;
//     left: 1144px;
//     background-image: url(${astRightArmBig});
//     background-repeat: no-repeat;
//     position: absolute;
// `;

const MoveAntena = keyframes`
    0% { transform: translate(0, 0%) };
    8% { transform: translate(0, 2%) };
    16% { transform: translate(0, 4%) };
    24% { transform: translate(0, 6%) };
    32% { transform: translate(0, 4%) };
    40% { transform: translate(0, 4%) };
    50% { transform: translate(0, 6%) };
    58% { transform: translate(0, 8%) };
    66% { transform: translate(0, 10%) };
    74% { transform: translate(0, 8%) };
    82% { transform: translate(0, 6%) };
    90% { transform: translate(0, 4%) };
    95% { transform: translate(0, 2%) };
    100% { transform: translate(0, 0%) };
`;

const LightMove = keyframes`
    0% { transform: translate(0, 0%) };
    8% { transform: translate(0, 2%) };
    16% { transform: translate(0, 4%) };
    24% { transform: translate(0, 6%) };
    32% { transform: translate(0, 4%) };
    40% { transform: translate(0, 4%) };
    50% { transform: translate(0, 6%) };
    58% { transform: translate(0, 8%) };
    66% { transform: translate(0, 10%) };
    74% { transform: translate(0, 8%) };
    82% { transform: translate(0, 6%) };
    90% { transform: translate(0, 4%) };
    95% { transform: translate(0, 2%) };
    100% { transform: translate(0, 0%) };
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
    width: 5%;
    height: 8.5%;
    // top: 385px;
    // left: 1255px;
    bottom: 43%;
    right: 10.3%;
    background-image: url(${antenaUnderBig});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    z-index: 11;
`;

const AstAntena = styled.div`
    width: 5%;
    height: 25%;
    // top: 213px;
    // left: 1250px;
    bottom: 50%;
    right: 10%;
    background-image: url(${antenaBig});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    animation: ${MoveAntena} 4s steps(14) infinite;
    animation-direction: alternate;
    z-index: 10;
`;

const AstLight = styled.div`
    width: 5%;
    height: 8%;
    // top: 194px;
    // left: 1280px;
    bottom: 66%;
    right: 9%;
    background-image: url(${antenaLight});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    animation: ${LightMove} 4s steps(14) infinite, ${LightBlink} 4s steps(14) infinite;
    animation-direction: alternate;
    z-index: 10;
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

// const ButtonText = styled.p`
//     bottom: 47.8%;
//     right: 49.5%;
//     color: #606060;
//     font-size: 2.2vh;
//     font-family: 'Jua', sans-serif;
//     background-size: contain;
//     background-position: bottom;
//     position: absolute;
//     opacity: 0.7;
//     z-index: 15;
// `;

const ButtonText = styled.div`
    width: 11%;
    height: 11%;
    bottom: 52%;
    right: 49.5%;
    background-image: url(${buttonText});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    opacity: 0.7;
    z-index: 15;
`;

const ButtonImg = styled.div`
    width: 90%;
    height: 90%;
    bottom: -4%;
    right: 9.7%;
    background-image: url(${bubble});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    z-index: 14;
`;

const ButtonMouse = styled.button`
    width: 12%;
    height: 12%;
    bottom: 45.2%;
    right: 45.4%;
    border: transparent;
    background-color: transparent;
    background-image: url(${mouse});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    cursor: url(${cursor_2}), auto;
    outline: 0;
    z-index: 16;

    &:hover {
        transform: scale(1.05);
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
                    <AstAll />
                    {/* <AstHead />
                    <AstBody /> */}
                    {/* <AstLeftArm /> */}
                    {/* <a href={myResume} download="권은정_이력서"> */}
                    <a href={myResume} download="권은정_이력서_잠시_비공개">
                        {/* <AstLeftArmFront onClick={alert('잠시 비공개 중입니다😭')}> */}
                        <AstLeftArmFront>
                            <Click />
                        </AstLeftArmFront>
                    </a>
                    {/* <AstRightArm /> */}
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
                {/* <ButtonText>Hello!<br/>Let me introduce<br/>Myself ➜</ButtonText> */}
                <ButtonText />
                <ButtonMouse onClick={ModalOpenHandler} />
                <ContentAboutModal isModalOpen={isModalOpen} ModalOpenHandler={ModalOpenHandler} />
                <ButtonImg />
            </Button>
        </AboutWrapper>
    )
}