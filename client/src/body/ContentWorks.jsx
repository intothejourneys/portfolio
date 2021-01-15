import React, { useState, useEffect, useReducer } from 'react';

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

// import buttonBar from '../img/button_bar.png';

const Desolve = keyframes`
    0% { opacity: 0% }
    100% { opacity: 100% }
`;

const WorksWrapper = styled.div`
    display: flex;
    animation: ${Desolve} 2s ease;
`;

const Background = styled.div`
    top: -115px;
    left: -455px;
    width: 1986px;
    height: 968px;
    background-image: url(${background});
    background-repeat: no-repeat;
    position: absolute;
`;

const BarMove = keyframes`
    0% { left: 800px; };
    8% { left: 810px; };
    16% { left: 830px; };
    24% { left: 880px; };
    32% { left: 850px; };
    40% { left: 852px; };
    50% { left: 850px; };
    58% { left: 820px; };
    66% { left: 822px; };
    74% { left: 820px; };
    82% { left: 900px; };
    90% { left: 920px; };
    100% { left: 800px; };
`;

const Bar = styled.div`
    top: 717px;
    left: 790px;
    width: 30px;
    height: 60px;
    background-image: url(${bar});
    background-repeat: no-repeat;
    animation: ${BarMove} 7s ease infinite;
    position: absolute;
`;

const Circle1Move = keyframes`
    0% { left: 800px; };
    50% { left: 900px; };
    100% { left: 800px; };
`;

const Circle1 = styled.div`
    top: 618px;
    left: 800px;
    width: 30px;
    height: 30px;
    background-image: url(${circle});
    background-repeat: no-repeat;
    animation: ${Circle1Move} 8s ease infinite;
    position: absolute;
`;

const Circle2Move = keyframes`
    0% { left: 850px; };
    100% { left: 1130px; };
`;

const Circle2 = styled.div`
    top: 648px;
    left: 850px;
    width: 30px;
    height: 30px;
    background-image: url(${circle});
    background-repeat: no-repeat;
    animation: ${Circle2Move} 15s linear infinite;
    position: absolute;
`;

const Circle3Move = keyframes`
    0% { top: 598px; left: 975px; };
    4% { top: 602px; left: 982px; };
    8% { top: 606px; left: 989px; };
    12% { top: 610px; left: 996px; };
    16% { top: 614px; left: 1003px; };
    20% { top: 618px; left: 1005px; };
    24% { top: 622px; left: 1002px; };
    28% { top: 626px; left: 999px; };
    32% { top: 630px; left: 996px; };
    36% { top: 634px; left: 993px; };
    40% { top: 638px; left: 990px; };
    45% { top: 642px; left: 987px; };
    50% { top: 646px; left: 984px; };
    55% { top: 642px; left: 987px; };
    60% { top: 638px; left: 990px; };
    64% { top: 634px; left: 993px; };
    68% { top: 630px; left: 996px; };
    72% { top: 626px; left: 999px; };
    76% { top: 622px; left: 1002px; };
    80% { top: 618px; left: 1005px; }; 
    84% { top: 614px; left: 1003px; };
    88% { top: 610px; left: 996px; };
    92% { top: 606px; left: 989px; };
    96% { top: 602px; left: 982px; };
    100% { top: 598px; left: 975px; };
`;

const Circle3 = styled.div`
    top: 598px;
    left: 975px;
    width: 30px;
    height: 30px;
    background-image: url(${circle});
    background-repeat: no-repeat;
    animation: ${Circle3Move} 15s steps(25) infinite;
    position: absolute;
`;

const Blink = keyframes`
    0% { opacity: 0% }
    50% { opacity: 80% }
    100% { opacity: 0% }
`;

const Light = styled.div`
    top: 719.2px;
    left: -95px;
    width: 50px;
    height: 50px;
    background-image: url(${light});
    background-repeat: no-repeat;
    animation: ${Blink} 2s ease infinite;
    position: absolute;
`;

const OnOff = styled.button`
    top: 547px;
    left: 145px;
    width: 100px;
    height: 30px;
    color: #FCF6F5FF;
    font-size: 12px;
    font-weight: 200;
    font-family: 'Press Start 2P', cursive;
    border: 3px solid;
    border-color: #F10058;
    border-radius: 10px;
    background-color: #F10058;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    position: absolute;
    outline: 0;
    z-index: 20;

    &:hover {
        background: ${lighten(0.01, '#F10058')};
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    }
    &:active {
        background: ${darken(0.02, '#F10058')};
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
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

    const [startButton, setStartButton] = useState('START');

    const onStartButtonHandler = () => {
        setStartButton('STOP');
    };

    const onStopButtonHandler = () => {
        setStartButton('START');
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
                <OnOff onClick={onModalOpenHandler}>{startButton}</OnOff>
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
                    <OnOff onClick={onModalOpenHandler}>{startButton}</OnOff>
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
                    <OnOff onClick={onModalOpenHandler}>{startButton}</OnOff>
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
                    <OnOff onClick={onModalOpenHandler}>{startButton}</OnOff>
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
                    <OnOff onClick={onModalOpenHandler}>{startButton}</OnOff>
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
                    <OnOff onClick={onModalOpenHandler}>{startButton}</OnOff>
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