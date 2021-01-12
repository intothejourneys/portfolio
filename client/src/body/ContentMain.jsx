import React from 'react';

import styled, { keyframes } from 'styled-components';

import sateliteBody from '../img/satelite_body.png';
import sateliteHead from '../img/satelite_head.png';
import sateliteWing1 from '../img/satelite_wing_1.png';
import sateliteWing2 from '../img/satelite_wing_2.png';
import sateliteWing2Shadow from '../img/satelite_wing_2_shadowCut.png';
// import textShadow from '../img/maintext_shadow.png';
import sunlight from '../img/sunlight.png';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const MainWrapper = styled.div`
    cursor: url(${cursor_1}), auto; // 여기가 아니라 Content에 넣어주어야 적용됨
`;

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const SateliteWrapper = styled.div`
    & {
        animation: ${Desolve} 2s ease;
        animation-timing-function: ease;
        cursor: url(${cursor_1}), auto;
    }

    &:before {
        content: "";
        width: 1360px;
        height: 950px;
        top: -100px;
        left: 0px;
        position: absolute;
        background-image: url(${sunlight});
        background-repeat: no-repeat;
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
    display: flex;
    position: relative;
    animation: ${SateliteMovement} 5s steps(11) infinite;
`;

const SateliteBody = styled.div`
    width: 200px;
    height: 200px;
    margin-top: 300px;
    margin-left: 300px;
    background-image: url(${sateliteBody});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 10;
`;

const HeadMove = keyframes`
    0% { transform: rotate(0deg) };
    8% { transform: rotate(-5deg) translate(1.5px) };
    16% { transform: rotate(-10deg) translate(2.5px) };
    24% { transform: rotate(-15deg) translate(3.5px) };
    32% { transform: rotate(-10deg) translate(2.5px) };
    40% { transform: rotate(-5deg) translate(1.5px) };
    50% { transform: rotate(0deg) };
    58% { transform: rotate(5deg) translate(-2.5px) };
    66% { transform: rotate(10deg) translate(-3.5px) };
    74% { transform: rotate(15deg) translate(-4.5px) };
    82% { transform: rotate(10deg) translate(-3.5px) };
    90% { transform: rotate(5deg) translate(-2.5px) };
    100% { transform: rotate(0deg) };
`;

const SateliteHead = styled.div`
    width: 150px;
    height: 150px;
    top: 207px;
    left: 395px;
    background-image: url(${sateliteHead});
    background-repeat: no-repeat;
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

const SateliteWing1 = styled.div`
    width: 200px;
    height: 210px;
    top: 207px;
    left: 190px;
    background-image: url(${sateliteWing1});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 11;

    &:hover {
        top: 190px;
        left: 160px;
        background-image: url(${sateliteWing2Shadow});
    }
`;

const SateliteWing2 = styled.div`
    width: 200px;
    height: 215px;
    top: 395px;
    left: 407px;
    background-image: url(${sateliteWing1});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 11;

    &:hover {
        top: 390px;
        left: 355px;
        background-image: url(${sateliteWing2});
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
    animation: ${Desolve} 2s ease, ${TextMovement} 5s steps(13) infinite;
    cursor: url(${cursor_1}), auto;
    z-index: 11;
`;

const MainText = styled.div`
    width: 600px;
    height: 100px;
    margin-top: 320px;
    margin-left: 650px;
    color: #FCF6F5FF;
    font-size: 40px;
    font-weight: 200;
    font-family: 'Stylish', sans-serif;
`;

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
    top: 750px;
    left: 1300px;
    width: 120px;
    height: 33px;
    font-size: 18px;
    font-family: 'Poor Story', cursive;
    color: #FCF6F5FF;
    border: 3px solid;
    border-radius: 10px;
    border-color: rgb(14, 69, 114);
    background-color: rgb(14, 69, 114);
    position: absolute;
    outline: 0;
    cursor: url(${cursor_2}), auto;
    z-index: 20;

    &:hover {
        width: 124px;
        height: 34px;
    }
`;

const ThemeToLightButton = styled.button`
    top: 750px;
    left: 1300px;
    width: 120px;
    height: 33px;
    font-size: 18px;
    font-family: 'Poor Story', cursive;
    color: #FCF6F5FF;
    border: 3px solid;
    border-radius: 10px;
    border-color: #9CC3D5FF;
    background-color: #9CC3D5FF;
    position: absolute;
    outline: 0;
    cursor: url(${cursor_2}), auto;
    z-index: 20;

    &:hover {
        width: 124px;
        height: 34px;
    }
`;

export default function ContentMain({ theme, onThemeToDarkHandler, onThemeToLightHandler }) {
    if (theme === 'light') {
        return (
            <MainWrapper>
                <ThemeToDarkButton onClick={onThemeToDarkHandler}>🌙 Dark Mode</ThemeToDarkButton>
                <SateliteWrapper>
                    <Satelite>
                        <SateliteBody/>
                        <SateliteHead/>
                        <SateliteWing1/>
                        <SateliteWing2/>
                    </Satelite>
                </SateliteWrapper>
                <TextWrapper>
                    <MainText>색다르면서도 편안한 경험을 설계하는<br/>프론트엔드 개발자 권은정 입니다</MainText>
                    {/* <MainTextShadow /> */}
                </TextWrapper>
            </MainWrapper>
        );
    } else if (theme === 'dark') {
        return (
            <MainWrapper>
                <ThemeToLightButton onClick={onThemeToLightHandler}>☀️ Light Mode</ThemeToLightButton>
                <SateliteWrapper>
                    <Satelite>
                        <SateliteBody/>
                        <SateliteHead/>
                        <SateliteWing1/>
                        <SateliteWing2/>
                    </Satelite>
                </SateliteWrapper>
                <TextWrapper>
                    <MainText>색다르면서도 편안한 경험을 설계하는<br/>프론트엔드 개발자 권은정 입니다</MainText>
                    {/* <MainTextShadow /> */}
                </TextWrapper>
            </MainWrapper>
        );
    }
}