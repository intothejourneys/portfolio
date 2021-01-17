import React from 'react';

import styled, { keyframes } from 'styled-components';

import keyboard1 from '../img/keyboard_github.png';
import keyboard2 from '../img/keyboard_web.png';
import keyboard3 from '../img/keyboard_blog.png';
import keyboard1Hover from '../img/keyboard_github_hover.png';
import keyboard2Hover from '../img/keyboard_web_hover.png';
import keyboard3Hover from '../img/keyboard_blog_hover.png';
import keyboard1Active from '../img/keyboard_github_active.png';
import keyboard2Active from '../img/keyboard_web_active.png';
import keyboard3Active from '../img/keyboard_blog_active.png';

import cursor_2 from '../img/cursor_2.cur';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const Wrapper = styled.div`
    display: flex;
`;

const Contents = styled.div`
    top: -460px;
    left: -140px;
    width: 793px;
    height: 400px;
    color: #606060;
    font-size: 18px;
    font-weight: 200; 
    font-family: 'Poor Story', cursive;
    animation: ${Desolve} 2s ease;
    position: absolute;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border: 2px solid transparent;
        border-radius: 10px;
        background-color: rgba(137, 171, 227, 0.4);
        background-clip: padding-box;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: rgba(252, 246, 245, 0.4);
        box-shadow: inset 0px 0px 5px white;
    }
`;

const Title = styled.h2`
    top: 0px;
    left: 138px;
    width: 250px;
    height: 30px;
    color: #606060;
    font-family: 'Press Start 2P', cursive;
    position: absolute;
    float: left;
`;

const Badge1 = styled.p`
    top: 50px;
    left: 135px;
    width: 120px;
    height: 22px;
    padding-left: 14px;
    color:  #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(96, 96, 96, 0.4);
    background-color: rgba(96, 96, 96, 0.4);
    position: absolute;
    float: left;
`;

const Badge2 = styled.p`
    top: 50px;
    left: 279px;
    width: 40px;
    height: 22px;
    padding-left: 14px;
    color:  #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(36, 96, 167, 0.4);
    background-color: rgba(36, 96, 167, 0.4);
    position: absolute;
    float: left;
`;

const Badge3 = styled.p`
    top: 50px;
    left: 343px;
    width: 32px;
    height: 22px;
    padding-left: 14px;
    color:  #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(254, 0, 0, 0.4);
    background-color: rgba(254, 0, 0, 0.4);
    position: absolute;
    float: left;
`;

const Stack1 = styled.span`
    top: 100px;
    left: 135px;
    width: 50px;
    height: 22px;
    padding-left: 14px;
    color: #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(0, 164, 204, 0.4);
    background-color: rgba(0, 164, 204, 0.4);
    position: absolute;
    float: left;
`;

const Stack2 = styled.span`
    top: 100px;
    left: 209px;
    width: 88px;
    height: 22px;
    padding-left: 14px;
    margin-bottom: 5px;
    color: #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(0, 164, 204, 0.4);
    background-color: rgba(0, 164, 204, 0.4);
    position: absolute;
    float: left;
`;

const Stack3 = styled.span`
    top: 100px;
    left: 321px;
    width: 125px;
    height: 22px;
    padding-left: 14px;
    color: #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(249, 159, 201, 0.5);
    background-color: rgba(249, 159, 201, 0.5);
    position: absolute;
    float: left;
`;

const Span1 = styled.span`
    top: 140px;
    left: 135px;
    display: inline-block;
    position: absolute;
`;


const Span2 = styled.span`
    top: 165px;
    left: 135px;
    display: block;
    position: absolute;
`;

const Link = styled.a`
    top: 205px;
    left: 130px;
    width: 90px;
    height: 90px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${keyboard2});
    background-repeat: no-repeat;
    position: absolute;
    display: inline-block;
    outline: 0;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background-image: url(${keyboard2Hover});
        background-repeat: no-repeat;
    }
    &:active {
        background-image: url(${keyboard2Active});
        background-repeat: no-repeat;
    }
`;

const Github = styled.a`
    top: 205px;
    left: 220px;
    width: 90px;
    height: 90px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${keyboard1});
    background-repeat: no-repeat;
    position: absolute;
    display: inline-block;
    outline: 0;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background-image: url(${keyboard1Hover});
        background-repeat: no-repeat;
    }
    &:active {
        background-image: url(${keyboard1Active});
        background-repeat: no-repeat;
    }
`;

const Blog = styled.a`
    top: 205px;
    left: 310px;
    width: 90px;
    height: 90px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${keyboard3});
    background-repeat: no-repeat;
    position: absolute;
    display: inline-block;
    outline: 0;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background-image: url(${keyboard3Hover});
        background-repeat: no-repeat;
    }
    &:active {
        background-image: url(${keyboard3Active});
        background-repeat: no-repeat;
    }
`;

export default function PortfolioModal({ isPortfolioModalOpen }) {
    if (isPortfolioModalOpen === true) {
        return (
            <Wrapper>
                <Contents>
                    <div>
                        <Title>My Space</Title>
                        <Badge1>포트폴리오 사이트</Badge1>
                        <Badge2>개인</Badge2>
                        <Badge3>2주</Badge3>
                    </div>
                    <div>
                        <Stack1>React</Stack1>
                        <Stack2>React-Hooks</Stack2>
                        <Stack3>styled-components</Stack3>
                        <Span1> ◽️ 전체 페이지 설계 및 코드 작성, UI 작업 등</Span1>
                        <Span2> ◽️ 주요 작업 내역 - 반응형 웹, 인트로 페이지 트렌지션, 다크 모드 옵션, 멀티플 토글 관리 등</Span2>
                        <Link target="_blank" href=""/>
                        <Github target="_blank" href="https://github.com/intothejourneys/portfolio"/>
                        <Blog target="_blank" href=""/>
                    </div>
                </Contents>
            </Wrapper>
        )
    } else if (isPortfolioModalOpen === false) {
        return (
            ''
        )
    }
}

// 트렌지션