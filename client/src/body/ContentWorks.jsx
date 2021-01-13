import React from 'react';

import styled, { keyframes } from 'styled-components';

import background from '../img/works_background.png';
import bar from '../img/spaceship_bar.png';
import circle from '../img/spaceship_circle.png';
import light from '../img/spaceship_light.png';

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
    top: 710px;
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

export default function ContentWorks() {
    return (
        <WorksWrapper>
            <Background />
            <Bar />
            <Circle1 />
            <Circle2 />
            <Circle3 />
            <Light />
        </WorksWrapper>
    )
}