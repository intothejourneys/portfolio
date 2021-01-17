import React from 'react';

import styled, { keyframes } from 'styled-components';

import keyboard1 from '../img/keyboard_github.png';
import keyboard2 from '../img/keyboard_web.png';
import keyboard3 from '../img/keyboard_blog.png';
import keyboard4 from '../img/keyboard_notion.png';
import keyboard1Hover from '../img/keyboard_github_hover.png';
import keyboard2Hover from '../img/keyboard_web_hover.png';
import keyboard3Hover from '../img/keyboard_blog_hover.png';
import keyboard4Hover from '../img/keyboard_notion_hover.png';
import keyboard1Active from '../img/keyboard_github_active.png';
import keyboard2Active from '../img/keyboard_web_active.png';
import keyboard3Active from '../img/keyboard_blog_active.png';
import keyboard4Active from '../img/keyboard_notion_active.png';

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
    left: 60px;
    width: 120px;
    height: 30px;
    color: #606060;
    font-family: 'Press Start 2P', cursive;
    position: absolute;
    float: left;
`;

const Badge1 = styled.p`
    top: 50px;
    left: 60px;
    width: 145px;
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
    left: 229px;
    width: 60px;
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
    left: 313px;
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
    left: 60px;
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
    left: 134px;
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
    left: 246px;
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

const Stack4 = styled.span`
    top: 100px;
    left: 395px;
    width: 44px;
    height: 22px;
    padding-left: 14px;
    color: #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(0, 32, 63, 0.2);
    background-color: rgba(0, 32, 63, 0.2);
    position: absolute;
    float: left;
`;

const Span1 = styled.span`
    top: 140px;
    left: 60px;
    display: inline-block;
    position: absolute;
`;

const Span2 = styled.span`
    top: 165px;
    left: 60px;
    display: block;
    position: absolute;
`;

const Span3 = styled.span`
    top: 190px;
    left: 60px;
    display: inline-block;
    position: absolute;
`;

const Span3more = styled.span`
    top: 215px;
    left: 78px;
    display: inline-block;
    position: absolute;
`;

const Link = styled.a`
    top: 255px;
    left: 60px;
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
    top: 255px;
    left: 150px;
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

const Notion = styled.a`
    top: 255px;
    left: 240px;
    width: 90px;
    height: 90px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${keyboard4});
    background-repeat: no-repeat;
    position: absolute;
    display: inline-block;
    outline: 0;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background-image: url(${keyboard4Hover});
        background-repeat: no-repeat;
    }
    &:active {
        background-image: url(${keyboard4Active});
        background-repeat: no-repeat;
    }
`;

const Blog = styled.a`
    top: 255px;
    left: 330px;
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

export default function DevmapModal({ isDevmapModalOpen }) {
    if (isDevmapModalOpen === true) {
        return (
            <Wrapper>
                <Contents>
                    <div>
                        <Title>Devmap</Title>
                        <Badge1>코드스테이츠 프로젝트</Badge1>
                        <Badge2>팀(3인)</Badge2>
                        <Badge3>4주</Badge3>
                    </div>
                    <div>
                        <Stack1>React</Stack1>
                        <Stack2>React-Hooks</Stack2>
                        <Stack3>styled-components</Stack3>
                        <Stack4>axios</Stack4>
                        <Span1> ◽️ 예비 개발자를 위한 로드맵 웹 사이트</Span1>
                        <Span2> ◽️ 프론트엔드 담당, 작업 기여도 80%</Span2>
                        <Span3> ◽️ 주요 작업 내역 - 그리드를 활용한 로드맵 화면 설계, 페이지 이동 대신 모달창 적극 활용(라이브러리x),</Span3>
                        <Span3more>input form 관련 다양한 옵션 기능 구현, UI 작업 일체 등</Span3more>
                        <Link target="_blank" href="http://www.devmap.ml"/>
                        <Github target="_blank" href="https://github.com/codestates/Devmap_client"/>
                        <Notion target="_blank" href="https://www.notion.so/11-Democracy-Devmap-35ccb0767a47426195f06ae78f368ca7"/>
                        <Blog target="_blank" href="https://intothejourneys.tistory.com/19"/>
                    </div>
                </Contents>
            </Wrapper>
        )
    } else if (isDevmapModalOpen === false) {
        return (
            ''
        )
    }
}