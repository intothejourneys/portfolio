import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import earth from '../img/earth.png';
import rocket from '../img/rocket.svg';
import rocketClick from '../img/rocket_click.png';
// import fire from '../img/fire.png';
import path from '../img/path.png';
import emailButtonBefore from '../img/emailButtonBefore.png';
import emailButtonBeforeHover from '../img/emailButtonBefore_hover.png';
import emailButtonBeforeActive from '../img/emailButtonBefore_active.png';
import emailButtonAfter from '../img/emailButtonAfter.png';
// import clickToCopy from '../img/clickToCopy.png';
import clickToCopy2 from '../img/clickToCopy.svg';
import copied from '../img/copied.svg';
import blog from '../img/blog.png';
import github from '../img/github.png';
import youtube from '../img/youtube.png';
import insta from '../img/insta.png';
import email from '../img/email.svg';

import cursor_2 from '../img/cursor_2.cur';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    animation: ${Desolve} 3s ease;
    display: flex;
`;

const Earth = styled.div`
    top: 26%;
    left: 12.5%;
    width: 50%;
    height: 50%;
    background-image: url(${earth});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
`;

const Blog = styled.a`
    top: 53.2%;
    left: 31.5%;
    width: 4%;
    height: 4%;
    background-image: url(${blog});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    animation: ${Desolve} 1s ease;
    position: absolute;
    z-index: 30;

    &:hover {
        cursor: url(${cursor_2}), auto;
        transform: scale(1.1);
    }
    &:active {
        cursor: url(${cursor_2}), auto;
        transform: scale(0.9);
    }
`;

const Github = styled.a`
    top: 64.2%;
    left: 27.5%;
    width: 6%;
    height: 4%;
    background-image: url(${github});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    transform: rotate(44deg);
    animation: ${Desolve} 1s ease;
    position: absolute;
    z-index: 30;

    &:hover {
        cursor: url(${cursor_2}), auto;
        transform: rotate(44deg) scale(1.1);
    }
    &:active {
        cursor: url(${cursor_2}), auto;
        transform: rotate(44deg) scale(0.9);
    }
`;

const Youtube = styled.a`
    top: 38.4%;
    left: 26.1%;
    width: 7%;
    height: 4%;
    background-image: url(${youtube});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    transform: rotate(-50deg);
    animation: ${Desolve} 1s ease;
    position: absolute;
    z-index: 30;

    &:hover {
        cursor: url(${cursor_2}), auto;
        transform: rotate(-50deg) scale(1.1);
    }
    &:active {
        cursor: url(${cursor_2}), auto;
        transform: rotate(-50deg) scale(0.9);
    }
`;

const Insta = styled.a`
    top: 49%;
    left: 45%;
    width: 4%;
    height: 4%;
    background-image: url(${insta});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    transform: rotate(-60deg);
    animation: ${Desolve} 1s ease;
    position: absolute;
    z-index: 30;

    &:hover {
        cursor: url(${cursor_2}), auto;
        transform: rotate(-60deg) scale(1.1);
    }
    &:active {
        cursor: url(${cursor_2}), auto;
        transform: rotate(-60deg) scale(0.9);
    }
`;

const Path = styled.path`
    top: 10.5%;
    left: 12.8%;
    width: 50%;
    height: 80%;
    background-image: url(${path});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
`;

const Move = keyframes`
    // 100% { 
    //     motion-offset: 100%;
    //     offset-distance: 100%;
    // }
    from { 	
        transform: rotate(0deg) translateX(510%) rotate(0deg); 
    }
	to   {  
        transform: rotate(360deg) translateX(510%) rotate(-360deg); 
    }
`;

const Move2 = keyframes`
    from { 	
        transform: rotate(0deg) translateX(510%); 
    }
	to   {  
        transform: rotate(360deg) translateX(510%); 
    }
`;

// const Scale = keyframes`
//     0% {
//         transform: scale(1);
//     }
//     20% {
//         transform: scale(1.1);
//     }
//     40% {
//         transform: scale(0.95);
//     }
//     60% {
//         transform: scale(1.1);
//     }
//     80% {
//         transform: scale(1.05);
//     }
//     100% {
//         transform: scale(1);
//     }
// `;

const Rocket = styled.div`
    top: 44.4%;
    left: 35.8%;
    width: 4%;
    height: 12%;
    background-image: url(${rocket});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;

    // motion-path: path("M 310, 310 m -310, 0 a 310,310 0 1,0 620,0 a 310,310 0 1,0 -620,0");
    // offset-path: path("M 310, 310 m -310, 0 a 310,310 0 1,0 620,0 a 310,310 0 1,0 -620,0");
    animation: ${Move} 10s linear infinite, ${Move2} 10s linear infinite;

    &:hover {
        cursor: url(${cursor_2}), auto;
        transform: scale(1.1);
        animation-play-state: paused;
    }
    &:active {
        cursor: url(${cursor_2}), auto;
        transform: scale(0.95);
        animation-play-state: paused;
    }
`;

const RocketClick = styled.div`
    top: -100%;
    left: -16.5%;
    width: 130%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-image: url(${rocketClick});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
`;

// const Fire = styled.div`
//     top: 50%;
//     width: 50px;
//     height: 45px;
//     background-image: url(${fire});
//     background-repeat: no-repeat;
//     position: absolute;
// `;

// const Blur = styled.div`
//     top: 335px;
//     left: 430px;
//     width: 297px;
//     height: 100px;
//     border: 2px solid;
//     border-radius: 10px;
//     border-color: #FCF6F5FF;
//     background-color: #FCF6F5FF;
//     position: absolute;
//     opacity: 0.5;
//     z-index: 19;
// `;

const Email = styled.img`
    margin-top: 2.5%;
    margin-left: 10%;
    width: 80%;
    height: 80%;
    background-size: contain;
    background-position: bottom;
    position: absolute;
`;

const EMailBefore = styled.div`
    top: 48%;
    left: 30.5%;
    width: 14%;
    height: 5%;
    line-height: 20%;
    // font-size: 18px;
    // font-family: 'Poor Story', cursive;
    // text-align: center;
    // color: #606060;
    // border: 0.1px solid;
    border-radius: 15px;
    // border-color: #606060;
    background-color: #FCF6F5FF;
    box-shadow: inset 0 0 3px #606060;
    animation: ${Desolve} 1s ease;
    position: absolute;
    z-index: 20;
`;

const EMailAfter = styled.div`
    top: 48%;
    left: 30.5%;
    width: 14%;
    height: 5%;
    line-height: 20%;
    // font-size: 18px;
    // font-family: 'Poor Story', cursive;
    // text-align: center;
    // color: #606060;
    // border: 0.1px solid;
    border-radius: 15px;
    // border-color: #54FF75;
    background-color: #FCF6F5FF;
    box-shadow: inset 0 0 3px #FFD8B0;
    position: absolute;
    z-index: 20;
`;

const EMailCopyBefore = styled.button`
    top: 45.5%;
    left: 41.9%;
    width: 5%;
    height: 5%;
    border: transparent;
    background-color: transparent;
    background-image: url(${emailButtonBefore});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    animation: ${Desolve} 1s ease;
    position: absolute;
    cursor: url(${cursor_2}), auto;
    outline: 0;
    z-index: 21;

    &:hover {
        background-image: url(${emailButtonBeforeHover});
    }
    &:active {
        background-image: url(${emailButtonBeforeActive});
    }
`;

const EMailCopyAfter = styled.button`
    top: 45.5%;
    left: 41.9%;
    width: 5%;
    height: 5%;
    border: transparent;
    background-color: transparent;
    background-image: url(${emailButtonAfter});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    cursor: url(${cursor_2}), auto;
    outline: 0;
    z-index: 21;
`;

// const CopyInfo = styled.span`
//     top: -34px;
//     left: -38px;
//     width: 88px;
//     height: 40px;
//     padding-top: 3px;
//     color: #FCF6F5FF;
//     font-family: 'Jua', sans-serif;
//     font-size: 14px;
//     background-image: url(${clickToCopy});
//     background-repeat: no-repeat;
//     position: absolute;
// `;

const ClickToCopy = styled.span`
    top: -120%;
    left: -21%;
    width: 140%;
    height: 120%;
    // padding-top: 3px;
    // color: #FCF6F5FF;
    // font-family: 'Jua', sans-serif;
    // font-size: 14px;
    background-image: url(${clickToCopy2});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    animation: ${Desolve} 1s ease;
`;

const Copied = styled.span`
    top: -94.5%;
    left: -8.5%;
    width: 115%;
    height: 95%;
    // padding-top: 3px;
    // color: #FCF6F5FF;
    // font-family: 'Jua', sans-serif;
    // font-size: 14px;
    background-image: url(${copied});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
`;

// const Copied = styled.div`
//     top: -30px;
//     left: -22px;
//     width: 80px;
//     height: 40px;
//     background-image: url(${copied});
//     background-repeat: no-repeat;
//     position: absolute;
// `;

export default function ContentContact() {

    // const cx = 220;
    // const cy = 220;
    // const r = 220;

    // function circlePath(cx, cy, r){
    //     return 'M '+cx+' '+cy+' m -'+r+', 0 a '+r+','+r+' 0 1,0 '+(r*2)+',0 a '+r+','+r+' 0 1,0 -'+(r*2)+',0';
    // };

    // In other words, this:

    // <circle cx="100" cy="100" r="75" />

    // can be achieved as a path with this:

    // <path 
    //     d="
    //     M 100, 100
    //     m -75, 0
    //     a 75,75 0 1,0 150,0
    //     a 75,75 0 1,0 -150,0
    //     "
    // />

    // 메일 관련 창이 보일지 안보일지
    const [myInfo, setMyInfo] = useState(false);

    const showOrHideMyInfo = () => {
        setMyInfo(!myInfo);
    };

    // 카피 안내 툴팃이 보일지 안보일지
    // const [isCopyShow, setIsCopyShow] = useState(false);

    // const copyShowHandler = () => {
    //     setIsCopyShow(!isCopyShow);
    // };

    // 카피 안내 툴팃이 보이는 상황(마우스 오버)에서 카피(마우스 클릭)가 되었는지 안되었는지
    const [isCopyOrNot, setIsCopyOrNot] = useState({ copy: false, text: 'CLICK!' });

    const copyOrNotHandler = () => {
        setIsCopyOrNot({ copy: true, text: 'COPIED!' });
    };

    const [EMailCopy] = useState('intothejourneys@gmail.com');

    console.log('isCopyOrNot', isCopyOrNot);

    if (myInfo === false) {
        return (
            <Wrapper>
                {/* <svg id="circle" data-name="circle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="800" width="1000" viewBox="0 0 640 610"> */}
                    {/* <Path 
                        d="M 300, 300 m -300, 0 a 300,300 0 1,0 600,0 a 300,300 0 1,0 -600,0"
                    /> */}
                    {/* <use xlinkHref="../img/rocket.svg" /> // shadow-root closed */}
                    {/* <object type="image/svg+xml" data="../img/rocket.svg">
                        <img src="../img/rocket.svg" />
                    </object> */}
                    {/* <Rocket src={rocket} type="image/svg+xml" />
                    <Fire /> */}
                {/* </svg> */}
                <Earth />
                <Path />
                <Rocket onClick={showOrHideMyInfo}>
                    <RocketClick />
                </Rocket>
                {/* <Fire /> */}
            </Wrapper>
        )

    } else if (myInfo === true) {
        if (isCopyOrNot.copy === false) {
            return (
                <Wrapper>
                    <EMailBefore><Email src={email} /></EMailBefore>
                    {/* <EMailCopyBefore onMouseOver={copyShowHandler} onMouseOut={copyShowHandler} onClick={copyOrNotHandler}> */}
                    <CopyToClipboard text={EMailCopy}>
                    {/* onCopy={copyOrNotHandler({copy: true})} */}
                        <EMailCopyBefore onClick={copyOrNotHandler}>
                            {/* {isCopyShow && (
                                <CopyInfo>{isCopyOrNot.text}</CopyInfo> */}
                                <ClickToCopy />
                            {/* )} */}
                        </EMailCopyBefore>
                    </CopyToClipboard>
                    <Earth />
                    <Blog target="_blank" href="https://intothejourneys.tistory.com" />
                    <Github target="_blank" href="https://github.com/intothejourneys" />
                    <Youtube target="_blank" href="https://www.youtube.com/intothejourneys" />
                    <Insta target="_blank" href="https://www.instagram.com/intothejourneys" />
                    <Path />
                    <Rocket onClick={showOrHideMyInfo}/>
                </Wrapper>
            )
        } else if (isCopyOrNot.copy === true) {
            return (
                <Wrapper>
                    <EMailAfter><Email src={email} /></EMailAfter>
                    <EMailCopyAfter>
                        {/* {isCopyShow && (
                            <CopyInfo>{isCopyOrNot.text}</CopyInfo> */}
                            <Copied />
                        {/* )} */}
                    </EMailCopyAfter>
                    <Earth />
                    <Blog target="_blank" href="https://intothejourneys.tistory.com" />
                    <Github target="_blank" href="https://github.com/intothejourneys" />
                    <Youtube target="_blank" href="https://www.youtube.com/intothejourneys" />
                    <Insta target="_blank" href="https://www.instagram.com/intothejourneys" />
                    <Path />
                    <Rocket onClick={showOrHideMyInfo}/>
                </Wrapper>
            )
        }
    }
}