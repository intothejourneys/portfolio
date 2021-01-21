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
import clickToCopy2 from '../img/clickToCopy_use.png';
import copied from '../img/copied_use.png';
import blog from '../img/blog.png';
import github from '../img/github.png';
import youtube from '../img/youtube.png';
import insta from '../img/insta.png';

import cursor_2 from '../img/cursor_2.cur';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const Wrapper = styled.div`
    animation: ${Desolve} 3s ease;
    display: flex;
`;

const Earth = styled.div`
    top: 50%;
    left: 50%;
    margin-top: -195px;
    margin-left: -390px;
    width: 390px;
    height: 390px;
    background-image: url(${earth});
    background-repeat: no-repeat;
    position: absolute;
`;

const Blog = styled.a`
    top: 230px;
    left: 500px;
    width: 30px;
    height: 30px;
    background-image: url(${blog});
    background-repeat: no-repeat;
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
    top: 423px;
    left : 515px;
    width: 30px;
    height: 30px;
    background-image: url(${github});
    background-repeat: no-repeat;
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

const Youtube = styled.a`
    top: 322px;
    left: 430px;
    width: 30px;
    height: 30px;
    background-image: url(${youtube});
    background-repeat: no-repeat;
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

const Insta = styled.a`
    top: 365px;
    left: 738px;
    width: 20px;
    height: 30px;
    background-image: url(${insta});
    background-repeat: no-repeat;
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

const Path = styled.path`
    top: 82px;
    left: 266px;
    width: 630px;
    height: 630px;
    background-image: url(${path});
    background-repeat: no-repeat;
    position: absolute;
`;

const Move = keyframes`
    100% { 
        motion-offset: 100%;
        offset-distance: 100%;
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
    top: 86px;
    left: 270px;
    width: 160px;
    height: 95px;
    background-image: url(${rocket});
    background-repeat: no-repeat;
    position: absolute;

    motion-path: path("M 310, 310 m -310, 0 a 310,310 0 1,0 620,0 a 310,310 0 1,0 -620,0");
    offset-path: path("M 310, 310 m -310, 0 a 310,310 0 1,0 620,0 a 310,310 0 1,0 -620,0");
    animation: ${Move} 10s linear infinite;

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
    top: -20px;
    left: -10px;
    width: 160px;
    height: 95px;
    background-image: url(${rocketClick});
    background-repeat: no-repeat;
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

const EMailBefore = styled.div`
    top: 380px;
    left: 475px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: 'Poor Story', cursive;
    text-align: center;
    color: #606060;
    // border: 0.1px solid;
    border-radius: 15px;
    // border-color: #606060;
    background-color: #FCF6F5FF;
    box-shadow: inset 0 0 5px #606060;
    animation: ${Desolve} 1s ease;
    position: absolute;
    z-index: 20;
`;

const EMailAfter = styled.div`
    top: 380px;
    left: 475px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: 'Poor Story', cursive;
    text-align: center;
    color: #606060;
    // border: 0.1px solid;
    border-radius: 15px;
    // border-color: #54FF75;
    background-color: #FCF6F5FF;
    box-shadow: inset 0 0 5px #FFD8B0;
    position: absolute;
    z-index: 20;
`;

const EMailCopyBefore = styled.button`
    top: 365px;
    left: 660px;
    width: 35px;
    height: 40px;
    border: transparent;
    background-color: transparent;
    background-image: url(${emailButtonBefore});
    background-repeat: no-repeat;
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
    top: 365px;
    left: 660px;
    width: 35px;
    height: 40px;
    border: transparent;
    background-color: transparent;
    background-image: url(${emailButtonAfter});
    background-repeat: no-repeat;
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
    top: -44px;
    left: -41px;
    width: 120px;
    height: 40px;
    padding-top: 3px;
    color: #FCF6F5FF;
    font-family: 'Jua', sans-serif;
    font-size: 14px;
    background-image: url(${clickToCopy2});
    background-repeat: no-repeat;
    position: absolute;
    animation: ${Desolve} 1s ease;
`;

const Copied = styled.span`
    top: -44px;
    left: -30px;
    width: 100px;
    height: 40px;
    padding-top: 3px;
    color: #FCF6F5FF;
    font-family: 'Jua', sans-serif;
    font-size: 14px;
    background-image: url(${copied});
    background-repeat: no-repeat;
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
                <Rocket onClick={showOrHideMyInfo}><RocketClick /></Rocket>
                {/* <Fire /> */}
            </Wrapper>
        )

    } else if (myInfo === true) {
        if (isCopyOrNot.copy === false) {
            return (
                <Wrapper>
                    <EMailBefore>{EMailCopy}</EMailBefore>
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
                    <EMailAfter>{EMailCopy}</EMailAfter>
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