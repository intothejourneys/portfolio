import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

// import useForceUpdate from 'use-force-update';

// import './ContentWorks.css';
import ContentWorksModal from './ContentWorksModal';
import PortfolioToggle from '../WorksToggle/PortfolioToggle';
import DevmapToggle from '../WorksToggle/DevmapToggle';
import HobbystagramToggle from '../WorksToggle/HobbystagramToggle';
import OthersToggle from '../WorksToggle/OthersToggle';
import FakePortfolioToggle from '../WorksToggle/FakePortFolioToggle';
import FakeDevmapToggle from '../WorksToggle/FakeDevmapToggle';
import FakeHobbystagramToggle from '../WorksToggle/FakeHobbystagramToggle';
import FakeOthersToggle from '../WorksToggle/FakeOthersToggle';

import background from '../img/works_background.png';
import bar from '../img/spaceship_bar.png';
import circle from '../img/spaceship_circle.png';
import light from '../img/spaceship_light.png';

import start from '../img/start.svg';
import stop from '../img/stop.svg';

import cursor_2 from '../img/cursor_2.cur';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const WorksWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    animation: ${Desolve} 3s ease;
`;

const Background = styled.div`
    top: -27.2%;
    left: -27.5%;
    width: 127.2%;
    height: 135%;
    padding: 0;
    margin: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
`;

const BarMove = keyframes`
    0% { left: 50.2%; };
    8% { left: 51.5%; };
    16% { left: 55.5%; };
    24% { left: 57.5%; };
    32% { left: 52.5%; };
    40% { left: 53%; };
    50% { left: 52.5%; };
    58% { left: 50.5%; };
    66% { left: 51%; };
    74% { left: 50.5%; };
    82% { left: 54.5%; };
    90% { left: 57.5%; };
    100% { left: 50.2%; };
`;

const Bar = styled.div`
    top: 90.7%;
    left: 50.2%;
    width: 3%;
    height: 5.5%;
    padding: 0;
    margin: 0;
    background-image: url(${bar});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    animation: ${BarMove} 7s linear infinite;
    position: absolute;
`;

const Circle1Move = keyframes`
    0% { left: 51.2%; };
    50% { left: 61.2%; };
    100% { left: 51.2%; };
`;

const Circle1 = styled.div`
    top: 78.2%;
    left: 51.2%;
    width: 2%;
    height: 2%;
    padding: 0;
    margin: 0;
    background-image: url(${circle});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    animation: ${Circle1Move} 8s ease infinite;
    position: absolute;
`;

const Circle2Move = keyframes`
    0% { left: 51.2%; };
    100% { left: 71.2%; };
`;

const Circle2 = styled.div`
    top: 82.3%;
    left: 51.2%;
    width: 2%;
    height: 2%;
    padding: 0;
    margin: 0;
    background-image: url(${circle});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    animation: ${Circle2Move} 15s linear infinite;
    position: absolute;
`;

const Circle3Move = keyframes`
    0% { top: 76%; left: 61.2%; };
    4% { top: 76.5%; left: 61.6%; };
    8% { top: 77%; left: 62.1%; };
    12% { top: 77.5%; left: 62.2%; };
    16% { top: 78%; left: 62.25%; };
    20% { top: 78.5%; left: 62.3%; };
    24% { top: 79%; left: 62.25%; };
    28% { top: 79.5%; left: 62.2%; };
    32% { top: 80%; left: 62.1%; };
    36% { top: 80.5%; left: 62%; };
    40% { top: 81%; left: 61.8%; };
    45% { top: 81.5%; left: 61.6%; };
    50% { top: 82%; left: 61.4%; };
    55% { top: 81.5%; left: 61.6%; };
    60% { top: 81%; left: 61.8%; };
    64% { top: 80.5%; left: 62%; };
    68% { top: 80%; left: 62.1%; };
    72% { top: 79.5%; left: 62.2%; };
    76% { top: 79%; left: 62.25%; };
    80% { top: 78.5%; left: 62.3%; }; 
    84% { top: 78%; left: 62.25%; };
    88% { top: 77.5%; left: 62.2%; };
    92% { top: 77%; left: 62.1%; };
    96% { top: 76.5%; left: 61.6%; };
    100% { top: 76%; left: 61.2%; };
`;

const Circle3 = styled.div`
    top: 76%;
    left: 61.2%;
    width: 2%;
    height: 2%;
    padding: 0;
    margin: 0;
    background-image: url(${circle});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    animation: ${Circle3Move} 15s steps(25) infinite;
    position: absolute;
`;

const Blink = keyframes`
    0% { opacity: 0% }
    50% { opacity: 80% }
    100% { opacity: 0% }
`;

const Light = styled.div`
    top: 91.4%;
    left: -9.2%;
    width: 4%;
    height: 4%;
    
    background-image: url(${light});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    animation: ${Blink} 2s ease infinite;
    position: absolute;
`;

const OnOff = styled.button`
    top: 68.9%;
    left: 6.75%;
    width: 7%;
    height: 4%;
    padding: 0;
    margin: 0;
    // color: #FCF6F5FF;
    // font-size: 0.8vw;
    // font-weight: 200;
    // font-family: 'Press Start 2P', cursive;
    border: 3px solid;
    border-color: #F10058;
    border-radius: 10px;
    background-color: #F10058;
    // box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    position: absolute;
    outline: 0;
    z-index: 20;

    &:hover {
        cursor: url(${cursor_2}), auto;
        background: ${lighten(0.01, '#F10058')};
        // box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    }
    &:active {
        background: ${darken(0.02, '#F10058')};
        // box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
`;

const StartStop = styled.img`
    top: 9%;
    left: 16%;
    width: 70%;
    min-height: 50%;
    background-size: contain;
    background-position: bottom;
    position: absolute;
`;

// const LabelReset = styled.label`
//     display: block;
//     position: relative;
//     width: 70px;
//     height: 50px;
//     background-image: url(${buttonBar});
//     background-repeat: no-repeat;
// `;

export default function ContentWorks({ onFoldToWorksHandler }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [startButton, setStartButton] = useState(start);

    const onStartButtonHandler = () => {
        setStartButton(stop);
    };

    const onStopButtonHandler = () => {
        setStartButton(start);
    };

    // const [disable, setDisable] = useState({
    //     portfolio: "disabled",
    //     devmap: "disabled",
    //     hobbystagram: "disabled",
    //     others: "disabled"
    // });
    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const onModalOpenHandler = () => {
        setIsModalOpen(!isModalOpen);
        console.log(isModalOpen);
        // onInputFalseHandler();
        // onLabelResetHandler();
        // onFoldToWorksHandler();
        
        // document.getElementsByClassName("portfolio_toggle").innerHTML.reload();
        // if (document.getElementById('portfolio').checked) {
        //     document.getElementById('portfolio_label').style.backgroundImage = 'url(../img/button_bar_right.png)';
        // } else {
        //     document.getElementById('portfolio_label').style.backgroundImage = 'url(../img/button_bar.png)';
        // }

        if (isModalOpen === false) {
            onStartButtonHandler();
            // setDisable({
            //     portfolio: false,
            //     devmap: false,
            //     hobbystagram: false,
            //     others: false
            // });
            // forceUpdate();
            // 버튼 위치 원래대로 -> input checkbox 초기화는 되는데, label 초기화가 안된다 // 방법은 새로고침 뿐인 것 같은데 그럼 intro로 가고..
        } else if (isModalOpen === true) {
            onStopButtonHandler();
            // setDisable({
            //     portfolio: "disabled",
            //     devmap: "disabled",
            //     hobbystagram: "disabled",
            //     others: "disabled"
            // });
        }
    };

    // const [isWorksModalOpen, setIsWorksModalOpen] = useState(
    //     {
    //         portfolio: false,
    //         devmap: false,
    //         hobbystagram: false,
    //         others: false
    //     }
    // );

    // const [count, setCount] = useState({
    //     portfolio: 0,
    //     devmap: 0,
    //     hobbystagram: 0,
    //     others: 0
    // });

    // const onPortfolioOpenHandler = () => {
    //     if (isModalOpen === true) {
    //         setIsWorksModalOpen({
    //             portfolio: !(isWorksModalOpen.portfolio),
    //             devmap: false,
    //             hobbystagram: false,
    //             others: false
    //         });
    //         if (isWorksModalOpen.portfolio === true) {
    //             setDisable({
    //                 portfolio: false,
    //                 devmap: "disabled",
    //                 hobbystagram: "disabled",
    //                 others: "disabled"
    //             });
    //         } else if (isWorksModalOpen.portfolio === false) {
    //             setDisable({
    //                 portfolio: false,
    //                 devmap: false,
    //                 hobbystagram: false,
    //                 others: false
    //             })
    //         }
    //         // if (isWorksModalOpen.devmap === true || isWorksModalOpen.hobbystagram === true || isWorksModalOpen.others === true) {
    //         //     setDisable({portfolio: "disabled"})
    //         // }
    //     } else if (isModalOpen === false) {
    //         setIsWorksModalOpen({
    //             portfolio: false,
    //             devmap: false,
    //             hobbystagram: false,
    //             others: false
    //         });
    //     }
    //         // setCount({portfolio: count.portfolio +1});
    //         // if (count.portfolio%2 !== 0) {
    //         //     setIsWorksModalOpen({portfolio: true});
    //         // } else if (count.portfolio%2 === 0) {
    //         //     setIsWorksModalOpen({portfolio: false})
    //         // }
    //     // } else if (isModalOpen === false) {
    //     //     setDisable({
    //     //         portfolio: "disabled",
    //     //         devmap: "disabled",
    //     //         hobbystagram: "disabled", 
    //     //         others: "disabled"
    //     //     })
    //     // }
    // };

    // const onDevmapOpenHandler = () => {
    //     if (isModalOpen === true) {
    //         setIsWorksModalOpen({
    //             portfolio: false,
    //             devmap: !(isWorksModalOpen.devmap),
    //             hobbystagram: false,
    //             others: false
    //         });
    //         if (isWorksModalOpen.devmap === true) {
    //             setDisable({
    //                 portfolio: "disabled",
    //                 devmap: false,
    //                 hobbystagram: "disabled",
    //                 others: "disabled"
    //             });
    //         } else if (isWorksModalOpen.devmap === false) {
    //             setDisable({
    //                 portfolio: false,
    //                 devmap: false,
    //                 hobbystagram: false,
    //                 others: false
    //             })
    //         }
    //         // if (isWorksModalOpen.devmap === true || isWorksModalOpen.hobbystagram === true || isWorksModalOpen.others === true) {
    //         //     setDisable({portfolio: "disabled"})
    //         // }
    //     } else if (isModalOpen === false) {
    //         setIsWorksModalOpen({
    //             portfolio: false,
    //             devmap: false,
    //             hobbystagram: false,
    //             others: false
    //         });
    //     }
    // };

    // const onHobbystagramOpenHandler = () => {
    //     if (isModalOpen === true) {
    //         setIsWorksModalOpen({hobbystagram: !(isWorksModalOpen.hobbystagram)});
    //         // setDisable({
    //         //     portfolio: "disabled",
    //         //     devmap: "disabled",
    //         //     others: "disabled"
    //         // })
    //     }
    // };

    // const onOthersOpenHandler = () => {
    //     if (isModalOpen === true) {
    //         setIsWorksModalOpen({others: !(isWorksModalOpen.others)});
    //         // setDisable({
    //         //     portfolio: "disabled",
    //         //     devmap: "disabled",
    //         //     hobbystagram: "disabled",
    //         // })
    //     }
    // };

    // var onInputFalseHandler = () => {
    //     setIsWorksModalOpen(
    //         {
    //             portfolio: false,
    //             devmap: false,
    //             hobbystagram: false,
    //             others: false
    //         }
    //     );
    //     // window.location.reload();
    // };

    // var [onLabel, setOnLabel] = useState(<label for="portfolio" onClick={onPortfolioOpenHandler}></label>)
    
    // var onLabelResetHandler = () => {
    //     setOnLabel(<LabelReset for="portfolio" onClick={onPortfolioOpenHandler}></LabelReset>)
    // };

    // console.log(onLabel);

    // useEffect(() => {
    //     location.reload(); // 맨 처음으로 돌아감
    //     return false;
    // }, isModalOpen);

    // 다른 상태들 false로 // 원래 되던 것..
    // 다른 버튼들 제 자리로 // 이게 항상 문제..

    // * 버튼을 꺼야 다른 버튼을 누를 수 있게(하나 눌려진 상태면 다른 것 못 누르게)
    // * 다시 스타트하면 눌려졌던 버튼도 원위치 되게

    // if (isWorksModalOpen.portfolio === true) {
    //     setDisable({
    //         devmap: "disabled",
    //         hobbystagram: "disabled",
    //         others: "disabled"
    //     })
    // } else if (isWorksModalOpen.devmap === true) {
    //     setDisable({
    //         portfolio: "disabled",
    //         hobbystagram: "disabled",
    //         others: "disabled"
    //     })
    // } else if (isWorksModalOpen.hobbystagram === true) {
    //     setDisable({
    //         portfolio: "disabled",
    //         devmap: "disabled",
    //         others: "disabled"
    //     })
    // } else if (isWorksModalOpen.others === true) {
    //     setDisable({
    //         portfolio: "disabled",
    //         devmap: "disabled",
    //         hobbystagram: "disabled",
    //     })
    // } else {
    //     setDisable({
    //         portfolio: false,
    //         devmap: false,
    //         hobbystagram: false,
    //         others: false
    //     })
    // }

    const [isPortfolioModalOpen, setIsPortFolioModalOpen] = useState(false);
    const [isDevmapModalOpen, setIsDevmapModalOpen] = useState(false);
    const [isHobbystagramModalOpen, setIsHobbystagramModalOpen] = useState(false);
    const [isOthersModalOpen, setIsOthersModalOpen] = useState(false);

    if (isModalOpen === false) {
        return (
            <WorksWrapper>
                <Background />
                <Bar />
                <Circle1 />
                <Circle2 />
                <Circle3 />
                <Light />
                <OnOff onClick={onModalOpenHandler}><StartStop src={startButton} /></OnOff>
                {/* <OnOffLightPortfolio />
                <OnOffLightPortfolio />
                <OnOffLightPortfolio />
                <OnOffLightPortfolio /> */}
                {/* <ContentWorksModal isModalOpen={isModalOpen} isWorksModalOpen={isWorksModalOpen} setDisable={setDisable} setIsWorksModalOpen={setIsWorksModalOpen} /> */}
                <ContentWorksModal isModalOpen={isModalOpen} />
                <PortfolioToggle isModalOpen={isModalOpen} isPortfolioModalOpen={isPortfolioModalOpen} setIsPortFolioModalOpen={setIsPortFolioModalOpen} />
                <DevmapToggle isModalOpen={isModalOpen} isDevmapModalOpen={isDevmapModalOpen} setIsDevmapModalOpen={setIsDevmapModalOpen} />
                <HobbystagramToggle isModalOpen={isModalOpen} isHobbystagramModalOpen={isHobbystagramModalOpen} setIsHobbystagramModalOpen={setIsHobbystagramModalOpen} />
                <OthersToggle isModalOpen={isModalOpen} isOthersModalOpen={isOthersModalOpen} setIsOthersModalOpen={setIsOthersModalOpen} />
            </WorksWrapper>
        )
    } else if (isModalOpen === true) {
        if (
            isPortfolioModalOpen === false 
            && isDevmapModalOpen === false 
            && isHobbystagramModalOpen === false 
            && isOthersModalOpen === false
        ) {
            return (
                <WorksWrapper>
                    <Background />
                    <Bar />
                    <Circle1 />
                    <Circle2 />
                    <Circle3 />
                    <Light />
                    <OnOff onClick={onModalOpenHandler}><StartStop src={startButton} /></OnOff>
                    {/* <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio /> */}
                    {/* <ContentWorksModal isModalOpen={isModalOpen} isWorksModalOpen={isWorksModalOpen} setDisable={setDisable} setIsWorksModalOpen={setIsWorksModalOpen} /> */}
                    <ContentWorksModal isModalOpen={isModalOpen} />
                    <PortfolioToggle isModalOpen={isModalOpen} isPortfolioModalOpen={isPortfolioModalOpen} setIsPortFolioModalOpen={setIsPortFolioModalOpen} />
                    <DevmapToggle isModalOpen={isModalOpen} isDevmapModalOpen={isDevmapModalOpen} setIsDevmapModalOpen={setIsDevmapModalOpen} />
                    <HobbystagramToggle isModalOpen={isModalOpen} isHobbystagramModalOpen={isHobbystagramModalOpen} setIsHobbystagramModalOpen={setIsHobbystagramModalOpen} />
                    <OthersToggle isModalOpen={isModalOpen} isOthersModalOpen={isOthersModalOpen} setIsOthersModalOpen={setIsOthersModalOpen} />
                </WorksWrapper>
            )
        } else if (
            isPortfolioModalOpen === true 
            && isDevmapModalOpen === false 
            && isHobbystagramModalOpen === false 
            && isOthersModalOpen === false
        ) {
            return (
                <WorksWrapper>
                    <Background />
                    <Bar />
                    <Circle1 />
                    <Circle2 />
                    <Circle3 />
                    <Light />
                    <OnOff onClick={onModalOpenHandler}><StartStop src={startButton} /></OnOff>
                    {/* <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio /> */}
                    {/* <ContentWorksModal isModalOpen={isModalOpen} isWorksModalOpen={isWorksModalOpen} setDisable={setDisable} setIsWorksModalOpen={setIsWorksModalOpen} /> */}
                    <ContentWorksModal isModalOpen={isModalOpen} />
                    <PortfolioToggle isModalOpen={isModalOpen} isPortfolioModalOpen={isPortfolioModalOpen} setIsPortFolioModalOpen={setIsPortFolioModalOpen} />
                    {/* <DevmapToggle isModalOpen={isModalOpen} isDevmapModalOpen={isDevmapModalOpen} setIsDevmapModalOpen={setIsDevmapModalOpen} />
                    <HobbystagramToggle isModalOpen={isModalOpen} />
                    <OthersToggle isModalOpen={isModalOpen} /> */}
                    <FakeDevmapToggle />
                    <FakeHobbystagramToggle />
                    <FakeOthersToggle />
                </WorksWrapper>
            )
        } else if (
            isPortfolioModalOpen === false 
            && isDevmapModalOpen === true 
            && isHobbystagramModalOpen === false 
            && isOthersModalOpen === false
        ) {
            return (
                <WorksWrapper>
                    <Background />
                    <Bar />
                    <Circle1 />
                    <Circle2 />
                    <Circle3 />
                    <Light />
                    <OnOff onClick={onModalOpenHandler}><StartStop src={startButton} /></OnOff>
                    {/* <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio /> */}
                    {/* <ContentWorksModal isModalOpen={isModalOpen} isWorksModalOpen={isWorksModalOpen} setDisable={setDisable} setIsWorksModalOpen={setIsWorksModalOpen} /> */}
                    <ContentWorksModal isModalOpen={isModalOpen} />
                    <FakePortfolioToggle />
                    {/* <DevmapToggle isModalOpen={isModalOpen} isDevmapModalOpen={isDevmapModalOpen} setIsDevmapModalOpen={setIsDevmapModalOpen} />
                    <HobbystagramToggle isModalOpen={isModalOpen} />
                    <OthersToggle isModalOpen={isModalOpen} /> */}
                    <DevmapToggle isModalOpen={isModalOpen} isDevmapModalOpen={isDevmapModalOpen} setIsDevmapModalOpen={setIsDevmapModalOpen} />
                    <FakeHobbystagramToggle />
                    <FakeOthersToggle />
                </WorksWrapper>
            )
        } else if (
            isPortfolioModalOpen === false 
            && isDevmapModalOpen === false 
            && isHobbystagramModalOpen === true
            && isOthersModalOpen === false
        ) {
            return (
                <WorksWrapper>
                    <Background />
                    <Bar />
                    <Circle1 />
                    <Circle2 />
                    <Circle3 />
                    <Light />
                    <OnOff onClick={onModalOpenHandler}><StartStop src={startButton} /></OnOff>
                    {/* <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio /> */}
                    {/* <ContentWorksModal isModalOpen={isModalOpen} isWorksModalOpen={isWorksModalOpen} setDisable={setDisable} setIsWorksModalOpen={setIsWorksModalOpen} /> */}
                    <ContentWorksModal isModalOpen={isModalOpen} />
                    <FakePortfolioToggle />
                    {/* <DevmapToggle isModalOpen={isModalOpen} isDevmapModalOpen={isDevmapModalOpen} setIsDevmapModalOpen={setIsDevmapModalOpen} />
                    <HobbystagramToggle isModalOpen={isModalOpen} />
                    <OthersToggle isModalOpen={isModalOpen} /> */}
                    <FakeDevmapToggle />
                    <HobbystagramToggle isModalOpen={isModalOpen} isHobbystagramModalOpen={isHobbystagramModalOpen} setIsHobbystagramModalOpen={setIsHobbystagramModalOpen} />
                    <FakeOthersToggle />
                </WorksWrapper>
            )
        } else if (
            isPortfolioModalOpen === false 
            && isDevmapModalOpen === false 
            && isHobbystagramModalOpen === false
            && isOthersModalOpen === true
        ) {
            return (
                <WorksWrapper>
                    <Background />
                    <Bar />
                    <Circle1 />
                    <Circle2 />
                    <Circle3 />
                    <Light />
                    <OnOff onClick={onModalOpenHandler}><StartStop src={startButton} /></OnOff>
                    {/* <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio />
                    <OnOffLightPortfolio /> */}
                    {/* <ContentWorksModal isModalOpen={isModalOpen} isWorksModalOpen={isWorksModalOpen} setDisable={setDisable} setIsWorksModalOpen={setIsWorksModalOpen} /> */}
                    <ContentWorksModal isModalOpen={isModalOpen} />
                    <FakePortfolioToggle />
                    <FakeDevmapToggle />
                    <FakeHobbystagramToggle />
                    <OthersToggle isModalOpen={isModalOpen} isOthersModalOpen={isOthersModalOpen} setIsOthersModalOpen={setIsOthersModalOpen} />
                </WorksWrapper>
            )
        }
    }
}