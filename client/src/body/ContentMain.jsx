import React from 'react';

import styled, { keyframes } from 'styled-components';

import sateliteBody from '../img/satelite_body.png';
import sateliteHead from '../img/satelite_head.png';
import sateliteWing1 from '../img/satelite_wing_1.png';
import sateliteWing2 from '../img/satelite_wing_2.png';
import sateliteWing2Shadow from '../img/satelite_wing_2_shadowCut.png';
// import textShadow from '../img/maintext_shadow.png';
import sunlight from '../img/sunlight.png';
import mainText from '../img/mainText.svg';
import fake from '../img/fake.png';
import darkMode from '../img/darkMode.svg';
import lightMode from '../img/lightMode.svg';
import darkModeHover from '../img/darkMode_hover.svg';
import lightModeHover from '../img/lightMode_hover.svg';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const MainWrapper = styled.div`
    width: 99%;
    height: 100%; 
    cursor: url(${cursor_1}), auto; // 여기가 아니라 Content에 넣어주어야 적용됨
`;

const SateliteWrapper = styled.div`
    & {
        animation: ${Desolve} 3s ease;
        animation-timing-function: ease;
        cursor: url(${cursor_1}), auto;
    }

    &:before {
        content: "";
        width: 100%;
        height: 119.5%;
        top: -12%;
        left: 0%;
        background-image: url(${sunlight});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
        position: absolute;
    }
`;

const SateliteMovement = keyframes`
    0% { transform: translate(0, 0) }
    10% { transform: translate(-4px, 0) }
    20% { transform: translate(-6px, -2px) }
    30% { transform: translate(-4px, -4px) }
    40% { transform: translate(-2px, -2px) }
    50% { transform: translate(0, 0) } 
    60% { transform: translate(2px, 2px) }
    70% { transform: translate(4px, 0) }
    80% { transform: translate(2px, -2px) }
    90% { transform: translate(0, 2px) }
    100% { transform: translate(0, 0) }
`;

const Satelite = styled.div`                                                                                        
    animation: ${SateliteMovement} 5s steps(11) infinite;
`;

const SateliteBody = styled.img`
    width: 12%;
    min-height: 15%;
    margin-top: 20%;
    left: 16%;
    background-image: url(${sateliteBody});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    z-index: 10;
`;

const HeadMove = keyframes`
    0% { transform: rotate(0deg) };
    8% { transform: rotate(-3deg) translate(0.15%) };
    16% { transform: rotate(-6deg) translate(0.25%) };
    24% { transform: rotate(-9deg) translate(0.35%) };
    32% { transform: rotate(-6deg) translate(0.25%) };
    40% { transform: rotate(-3deg) translate(0.15%) };
    50% { transform: rotate(0deg) };
    58% { transform: rotate(3deg) translate(-0.15%) };
    66% { transform: rotate(6deg) translate(-0.25%) };
    74% { transform: rotate(9deg) translate(-0.35%) };
    82% { transform: rotate(6deg) translate(-0.25%) };
    90% { transform: rotate(3deg) translate(-0.15%) };
    100% { transform: rotate(0deg) };
`;

// const HeadMove = keyframes`
//     0% { transform: rotate(0deg) };
//     8% { transform: rotate(-2deg) };
//     16% { transform: rotate(-4deg) };
//     24% { transform: rotate(-6deg) };
//     32% { transform: rotate(-4deg) };
//     40% { transform: rotate(-2deg) };
//     50% { transform: rotate(0deg) };
//     58% { transform: rotate(2deg) };
//     66% { transform: rotate(4deg) };
//     74% { transform: rotate(6deg) };
//     82% { transform: rotate(4deg) };
//     90% { transform: rotate(2deg) };
//     100% { transform: rotate(0deg) };
// `;

const SateliteHead = styled.img`
    width: 16%;
    min-height: 15%;
    margin-top: 14.8%;
    left: 22.6%;
    background-image: url(${sateliteHead});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    animation: ${HeadMove} 5s steps(13) infinite;
    transform-origin: center;
    z-index: 11;
`;

// const WingsUpper = keyframes`
//     0% {
//         background-image: url(${sateliteWing1});
//     }
//     25% {
//         background-image: url(${sateliteWing2});
//     }
//     50% {
//         background-image: url(${sateliteWing1});
//     }
//     75% {
//         background-image: url(${sateliteWing2});
//     }
//     100% {
//         background-image: url(${sateliteWing1});
//     }
// `;

// const WingsLower = keyframes`
//     0% {
//         background-image: url(${sateliteWing1});
//     }
//     25% {
//         background-image: url(${sateliteWing2});
//     }
//     50% {
//         background-image: url(${sateliteWing1});
//     }
//     75% {
//         background-image: url(${sateliteWing2});
//     }
//     100% {
//         background-image: url(${sateliteWing1});
//     }
// `;

const SateliteWing1 = styled.img`
    width: 12%;
    min-height: 17%;
    margin-top: 26.5%;
    left: 22.9%;
    background-image: url(${sateliteWing1});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    z-index: 11;

    &:hover {
        width: 15%;
        min-height: 20%;
        margin-top: 26.4%;
        left: 19.7%;
        background-image: url(${sateliteWing2});
        transform: scale(0.9);
    }
`;

const SateliteWing2 = styled.img`
    width: 12%;
    min-height: 17%;
    margin-top: 14.7%;
    left: 9.2%;
    background-image: url(${sateliteWing1});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    z-index: 11;

    &:hover {
        width: 13.5%;
        min-height: 18%;
        margin-top: 14.2%;
        left: 8.4%;
        background-image: url(${sateliteWing2Shadow});
    }
`;

const TextMovement = keyframes`
    0% { transform: translate(0, 0) }
    10% { transform: translate(-4px, 0) }
    20% { transform: translate(-6px, -2px) }
    30% { transform: translate(-4px, -4px) }
    40% { transform: translate(-2px, -2px) }
    50% { transform: translate(0, 0) } 
    60% { transform: translate(2px, 2px) }
    70% { transform: translate(4px, 0) }
    80% { transform: translate(2px, -2px) }
    90% { transform: translate(0, 2px) }
    100% { transform: translate(0, 0) }
`;

const TextWrapper = styled.div`
    animation: ${Desolve} 3s ease, ${TextMovement} 5s steps(13) infinite;
    cursor: url(${cursor_1}), auto;
    z-index: 11;
`;

const MainText1 = styled.img`
    width: 35%;
    min-height: 35%;
    margin-top: -3%;
    left: 40%;
    background-image: url(${mainText});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
`;

// const MainText2 = styled.div`
//     width: 600px;
//     height: 100px;
//     margin-top: 10px;
//     margin-left: 652px;
//     color: #FCF6F5FF;
//     font-size: 20px;
//     font-weight: 200;
//     font-family: 'Texturina', serif;
// `;

// const MainTextShadow = styled.div`
//     width: 600px;
//     height: 100px;
//     margin-top: -94px;
//     margin-left: 598px;
//     background-image: url(${textShadow});
//     background-repeat: no-repeat;
// `;

// const SunLight = styled.div`
//     width: 1310px;
//     height: 900px;
//     top: -100px;
//     left: 0px;
//     position: absolute;
//     background-image: url(${sunlight});
//     background-repeat: no-repeat;
//     z-index: 5;
// `;

const ThemeToDarkButton = styled.button`
    width: 8%;
    min-height: 6%;
    margin-top: 48%;
    left: 86%;
    background-image: url(${darkMode});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    border-color: transparent;
    background-color: transparent;
    position: absolute;
    outline: 0;
    cursor: url(${cursor_2}), auto;
    z-index: 25;

    &:hover {
        width: 8.2%;
        min-height: 6.2%;
        margin-top: 48.2%;
        left: 86%;
        background-image: url(${darkModeHover});
    }
`;

const ThemeToLightButton = styled.button`
    width: 8%;
    min-height: 6%;
    margin-top: 48%;
    left: 86%;
    background-image: url(${lightMode});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    border-color: transparent;
    background-color: transparent;
    position: absolute;
    outline: 0;
    cursor: url(${cursor_2}), auto;
    z-index: 25;

    &:hover {
        width: 8.2%;
        min-height: 6.2%;
        margin-top: 48.2%;
        left: 86%;
        background-image: url(${lightModeHover});
    }
`;

export default function ContentMain({ theme, onThemeToDarkHandler, onThemeToLightHandler }) {
    if (theme === 'light') {
        return (
            <MainWrapper>
                <ThemeToDarkButton onClick={onThemeToDarkHandler}></ThemeToDarkButton>
                <SateliteWrapper>
                    <Satelite>
                        <SateliteBody src={sateliteBody} alt='.' />
                        <SateliteHead src={sateliteHead} alt='.' />
                        <SateliteWing1 src={fake} alt='.' />
                        <SateliteWing2 src={fake} alt='.' />
                    </Satelite>
                </SateliteWrapper>
                <TextWrapper>
                    <MainText1 src={fake} alt='.' />
                    {/* <MainText2>I'm Eunjung Kwon, a front-end developer<br/>who designs unique and comfortable experience</MainText2> */}
                    {/* <MainTextShadow /> */}
                </TextWrapper>
            </MainWrapper>
        );
    } else if (theme === 'dark') {
        return (
            <MainWrapper>
                <ThemeToLightButton onClick={onThemeToLightHandler}></ThemeToLightButton>
                <SateliteWrapper>
                    <Satelite>
                        <SateliteBody src={sateliteBody} alt='.' />
                        <SateliteHead src={sateliteHead} alt='.' />
                        <SateliteWing1 src={fake} alt='.' />
                        <SateliteWing2 src={fake} alt='.' />
                    </Satelite>
                </SateliteWrapper>
                <TextWrapper>
                    <MainText1 src={fake} alt='.' />
                    {/* <MainText2>I'm Eunjung Kwon, a front-end developer<br/>who designs unique and comfortable experience</MainText2> */}
                    {/* <MainTextShadow /> */}
                </TextWrapper>
            </MainWrapper>
        );
    }
}