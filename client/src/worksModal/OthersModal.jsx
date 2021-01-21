import React from 'react';

import styled, { keyframes } from 'styled-components';

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
    animation: ${Desolve} 3s ease;
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
    top: 150px;
    left: 90px;
    width: 300px;
    height: 30px;
    color: #606060;
    font-family: 'Press Start 2P', cursive;
    position: absolute;
    float: left;
`;

export default function OthersModal({ isOthersModalOpen }) {
    if (isOthersModalOpen === true) {
        return (
            <Wrapper>
                <Contents>
                    <Title>Coming soon</Title>
                </Contents>
            </Wrapper>
        )
    } else if (isOthersModalOpen === false) {
        return (
            ''
        )
    }
}