import React, {useState } from 'react';

import styled from 'styled-components';

import bubbleBig from '../img/bubble_big.png';
import x from '../img/aboutModalX.svg';
import eng from '../img/ENG.svg';
import kor from '../img/KOR.svg';
import koreanText from '../img/koreanText.svg';
import englishText from '../img/EnglishText.svg';

import cursor2 from '../img/cursor_2.cur';

const ModalWrapper = styled.div`
    display: flex;
`;

const ModalFrame = styled.div`
    width: 100%;
    height: 100%;
    bottom: 7.4%;
    right: 19.14%;
    color: #606060;
    background-image: url(${bubbleBig});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    z-index: 20;
`;

const ModalClose = styled.button`
    width: 2%;
    height: 3%;
    bottom: 72.5%;
    right: 27.8%;
    // color: #c0dee5;
    // font-size: 18px;
    // font-family: 'Poor Story', cursive; 
    border: 3px solid;
    border-radius: 10px;
    border-color: transparent;
    background-image: url(${x});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    background-color: transparent;
    position: absolute;
    outline: 0;
    opacity: 0.7;
    cursor: url(${cursor2}), auto;
    z-index: 22;
`;

const ModalText1 = styled.div`
    width: 38%;
    height: 32%;
    bottom: 41%;
    right: 32%;
    // font-size: 16px;
    // font-weight: 200;
    // font-family: 'Poor Story', cursive;
    background-image: url(${koreanText});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    opacity: 0.7;
    z-index: 21;
`;

const ModalText2 = styled.div`
    width: 40%;
    height: 35%;
    bottom: 43.5%;
    right: 30%;
    // font-size: 16px;
    // font-weight: 200;
    // font-family: 'Poor Story', cursive;
    background-image: url(${englishText});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    opacity: 0.7;
    z-index: 21;
`;

const KorToEng = styled.button`
    width: 7%;;
    height: 4%;
    bottom: 72%;
    right: 28.2%;
    // color: #ffffff;
    // font-size: 18px;
    // font-family: 'Poor Story', cursive; 
    border: 3px solid;
    border-radius: 10px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${eng});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    outline: 0;
    opacity: 0.7;
    cursor: url(${cursor2}), auto;
    z-index: 22;
`;

const EngToKor = styled.button`
    width: 7%;;
    height: 4%;
    bottom: 72%;
    right: 28.2%;
    // color: #ffffff;
    // font-size: 18px;
    // font-family: 'Poor Story', cursive; 
    border: 3px solid;
    border-radius: 10px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${kor});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    outline: 0;
    opacity: 0.7;
    cursor: url(${cursor2}), auto;
    z-index: 22;
`;

export default function ContentAboutModal({ isModalOpen, ModalOpenHandler }) {

    const [language, setLanguage] = useState('Kor');

    const KorToEngHandler = () => {
        setLanguage('Eng');
    };
    const EngToKorHandler = () => {
        setLanguage('Kor');
    };

    if (isModalOpen === true) {
        if (language === 'Kor') {
            return (
                <ModalWrapper>
                    <ModalFrame>
                        <KorToEng onClick={KorToEngHandler}></KorToEng>
                        <ModalClose onClick={ModalOpenHandler}></ModalClose>
                        <ModalText1>
                            {/* 프리랜서 영상 제작자로 아프리카, 유럽 등 80여개 국에서 홀로, 또 같이 오랫동안 일해왔습니다.<br/>
                            노트북 앞에서 홀로 밤 낮없이 집중하는 것에 익숙하고,<br/>
                            힘을 합쳐 같이 하나의 결과물을 완성해내는 희열도 잘 압니다.<br/>
                            <br/>
                            코로나가 한창이던 작년 4월 귀국 후, 커리어 전환을 결심하고<br/>
                            6월부터 12월까지, 코드스테이츠에서 개발자가 되기 위해 치열한 과정을 거쳤습니다.<br/>
                            <br/>
                            개발은 제가 해오던 일과 많이 닮았습니다,<br/>
                            상상하던 이미지에 움직임을 더해 현실화하는 작업.<br/>
                            화면 속 주인공은 아니지만, 뒤에서 그 전부를 직접 만들어내는 사람.<br/>
                            <br/>
                            민감하게 파악하고, 가볍고 섬세하게 구현해내는 프론트엔드 개발자가 되기 위해,<br/>
                            또한 존중과 배려를 바탕으로 날마나 더 좋은 소통을 하는 사람이 되기 위해 항상 노력하고 있습니다.<br/> */}
                        </ModalText1>
                    </ModalFrame>
                </ModalWrapper>
            );
        } else if (language === 'Eng') {
            return (
                <ModalWrapper>
                    <ModalFrame>
                        <EngToKor onClick={EngToKorHandler}></EngToKor>
                        <ModalClose onClick={ModalOpenHandler}></ModalClose>
                        <ModalText2>
                            {/* I have worked as a freelance video producer for more than 7 years in more than 80 countries.<br/>
                            I have proven experience in producing quality outputs in a mobile enviroment,<br/>
                            working alone and as a team.<br/>
                            <br/>
                            Programming is an extension of what I have enjoyed doing so far,<br/>
                            which is to add motion to the our imagination. <br/>
                            I take immense pride in directing what is seen on the screen.<br/>
                            <br/>
                            I strive to be a professional front-end developer that implements the detailed, delicate needs,<br/>
                            supporting better communication in our daily lives. <br/> */}
                        </ModalText2>
                    </ModalFrame>
                </ModalWrapper>
            );
        }
    } else if (isModalOpen === false) {
        return (
            ''
        );
    }
}