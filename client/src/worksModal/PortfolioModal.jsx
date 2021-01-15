import React from 'react';

import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

const Contents = styled.div`
    top: -450px;
    left: -10px;
    width: 700px;
    height: 300px;
    color: #606060;
    font-size: 18px;
    font-weight: 200; 
    font-family: 'Poor Story', cursive;
    position: absolute;
`;

const Title = styled.h2`
    height: 30px;
    margin-bottom: -2px;
    color: #606060;
    font-family: 'Press Start 2P', cursive;
    float: left;
`;

const Badge1 = styled.p`
    width: 120px;
    height: 22px;
    padding-left: 14px;
    margin-top: 25px;
    margin-left: 30px;
    color:  #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(96, 96, 96, 0.4);
    background-color: rgba(96, 96, 96, 0.4);
    float: left;
`;

const Badge2 = styled.p`
    width: 40px;
    height: 22px;
    padding-left: 14px;
    margin-top: 25px;
    margin-left: 10px;
    color:  #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(36, 96, 167, 0.4);
    background-color: rgba(36, 96, 167, 0.4);
    float: left;
`;

const Badge3 = styled.p`
    width: 32px;
    height: 22px;
    padding-left: 14px;
    margin-top: 25px;
    margin-left: 10px;
    color:  #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(254, 0, 0, 0.4);
    background-color: rgba(254, 0, 0, 0.4);
    float: left;
`;

const Stack1 = styled.span`
    width: 50px;
    height: 22px;
    padding-left: 14px;
    margin-top: 15px;
    margin-bottom: 5px;
    color:  #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(0, 164, 204, 0.4);
    background-color: rgba(0, 164, 204, 0.4);
    position: absolute;
    display: inline-block;
    float: left;
`;

const Stack2 = styled.span`
    width: 88px;
    height: 22px;
    padding-left: 14px;
    margin-top: 15px;
    margin-left: 75px;
    margin-bottom: 5px;
    color:  #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(0, 164, 204, 0.4);
    background-color: rgba(0, 164, 204, 0.4);
    position: absolute;
    display: inline-block;
    float: left;
`;

const Stack3 = styled.span`
    width: 125px;
    height: 22px;
    padding-left: 14px;
    margin-top: 15px;
    margin-left: 187px;
    margin-bottom: 5px;
    color:  #FCF6F5FF;
    font-size: 16px;
    border: 3px-solid;
    border-radius: 5px;
    border-color: rgba(249, 159, 201, 0.5);
    background-color: rgba(249, 159, 201, 0.5);
    position: absolute;
    display: inline-block;
    float: left;
`;

const Span1 = styled.span`
    margin-top: 50px;
    display: inline-block;
`;

const Span2 = styled.span`
    display: inline-block;
`;

export default function PortfolioModal({ isPortfolioModalOpen }) {
    if (isPortfolioModalOpen === true) {
        return (
            <Wrapper>
                <Contents >
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
                        <Span1> ◽️ 전체 페이지 설계 및 코드 작성, UI 디자인 등.</Span1>
                        <Span2> ◽️ 주요 작업 내역: 반응형 디자인, 인트로 페이지 트렌지션, 다크 모드, 멀티플 토글 관리 등.</Span2>
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