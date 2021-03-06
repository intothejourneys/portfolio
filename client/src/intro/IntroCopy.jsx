import React from 'react';

import styled, { keyframes } from 'styled-components';

import welcome from '../img/welcomeTo1.svg';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

  const IntroCopyWrapper = styled.div`
    width: 99%;
    height: 99%;
    border: 3px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: transparent;
    position: absolute;
    cursor: url(${cursor_1}), auto;
    z-index: 3;
  `;

  const GoingUp = keyframes`
    0% {
      top: 46%;
    }
    10% {
      top: 40%;
    }
    20% {
      top: 35%;
    }
    30% {
      top: 30%;
    }
    40% {
      top: 25%;
    }
    50% {
      top: 20%;
    }
    60% {
      top: 15%;
    }
    70% {
      top: 10%;
    }
    80% {
      top: 5%;
    }
    90% {
      top: 0%;
    }
    100% {
      top: -5%;
    }
  `;

  const blink = keyframes`
    0% {
        // color: #FFF0CF;
        opacity: 100%
    }
    50% {
        // color: #FFF0CF;
        opacity: 30%
    }
  `;

  const IntroCopyText = styled.p`
    width: 25%;
    height: 8%;
    top: 46%;
    left: 50.35%;
    padding: 0;
    margin: 0;
    background-image: url(${welcome});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    transform: translate(-50%, -50%);
    vertical-align: middle;
    position:absolute;
    // color: #FCF6F5FF;
    // font-size: 25px;
    // font-weight: 200;
    // font-family: 'Press Start 2P', cursive;
    cursor: url(${cursor_2}), auto;
    animation: ${GoingUp} 2.4s steps(2); // 11로 하면 smooth하게 올라감
    // animation: ${blink} 0.1s steps(2) infinite;
`;

export default function IntroCopy() {
    return (
      <IntroCopyWrapper>
        <IntroCopyText></IntroCopyText>
      </IntroCopyWrapper>
    )
}