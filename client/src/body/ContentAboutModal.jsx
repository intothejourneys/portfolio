import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';

import bubbleBig from '../img/bubble_big.png';

import cursor2 from '../img/cursor_2.cur';

const ModalWrapper = styled.div`
    display: flex;
`;

const ModalFrame = styled.div`
    top: -89px;
    left: 37px;
    width: 800px;
    height: 540px;
    color: #606060;
    background-image: url(${bubbleBig});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 20;
`;

const ModalClose = styled.button`
    margin-top: 205px;
    margin-left: 745px;
    width: 30px;
    height: 30px;
    color: #c0dee5;
    font-size: 18px;
    font-family: 'Poor Story', cursive; 
    border: 3px solid;
    border-radius: 10px;
    border-color: #c0dee5;
    background-color: none;
    position: absolute;
    outline: 0;
    cursor: url(${cursor2}), auto;
`;

const ModalText = styled.div`
    margin-top: 232px;
    margin-left: 98px;
    font-size: 17px;
    font-weight: 200;
    font-family: 'Poor Story', cursive;
    position: absolute;
    opacity: 0.7;
    z-index: 21;
`;

export default function ContentAboutModal({ isModalOpen, ModalOpenHandler }) {
    if (isModalOpen === true) {
        return (
            <ModalWrapper>
                <ModalFrame>
                    <ModalClose onClick={ModalOpenHandler}>x</ModalClose>
                    <ModalText>
                        프리랜서 영상 제작자로 아프리카, 유럽 등 80여개 국에서 홀로, 또 같이 오랫동안 일해왔습니다.<br/>
                        노트북 앞에서 홀로 밤낮없이 집중하는 것에 익숙하고,<br/>
                        힘을 합쳐 같이 하나의 결과물을 완성해내는 희열을 잘 압니다.<br/>
                        <br/>
                        {/* 코로나가 한창이던 작년 4월 귀국 후, 커리어 전환을 결심하고<br/>
                        6월부터 12월까지, 코드스테이츠에서 개발자가 되기 위해 치열한 과정을 거쳤습니다.<br/>
                        <br/> */}
                        개발은 제가 해오던 일과 많이 닮았습니다,<br/>
                        상상하던 이미지에 움직임을 더해 현실화하는 작업.<br/>
                        화면 속 주인공은 아니지만, 뒤에서 그 전부를 직접 구현해내는 사람.<br/>
                        <br/>
                        UI/UX를 민감하게 다루고<br/>
                        표면 뒤에서 섬세하게 움직임을 구현해내는 프론트엔드 개발자가 되기 위해,<br/>
                        모두 사람이 하는 일임을 늘 잊지 않으며<br/>
                        날마다 더 좋은 배려와 소통을 할 수 있는 사람이 되기 위해 항상 노력하고 있습니다.<br/>
                    </ModalText>
                </ModalFrame>
            </ModalWrapper>
        );
    } else if (isModalOpen === false) {
        return (
            ''
        )
    }
}