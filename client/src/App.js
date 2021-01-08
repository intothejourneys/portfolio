import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';

import './App.css';
import Intro from './intro/Intro';
import IntroCopy from './intro/IntroCopy';
import Header from './headAndFoot/Header';
import Footer from './headAndFoot/Footer';
import Nav from './body/Nav';
import Content from './body/Content';

export default function App() {

  const [fold, setFold] = useState(false);

  const onFoldHandler = () => {
    onIntroHandler();
    setTimeout(
      function() {
        setFold(!fold)
      }, 2000
    );
  }

  const original = () => { // 2초간 줄 수 있는 어떠한 트렌지션을 여기에서 구현..
    console.log('wait for original');
    // 이미 return된 값이 있는 상태에서 또 return을 줄 수는 없는걸까?
    // 덧붙이는게 아니라 이미 있는 것에 변화를 주어야 하나?
    return (
      <Intro onFoldHandler={onFoldHandler}/>
    );
  }

  const copy = () => {
    console.log('wait for copy');
    return (
      <IntroCopy />
    );
  }
  
  const [chooseIntro, setChooseIntro] = useState(original());

  var onIntroHandler = () => {
    // 넣어야 하는데..!! initialize 순서 때문에.. 어떻게 해야하지
    // 호이스팅! var로 변경!
    setChooseIntro(copy());
  }

  if (fold === false) {
    return (
      <div className='App'>
        {chooseIntro}
        {/* <Intro onFoldHandler={onFoldHandler} /> */}
        <Footer />
      </div>
    );
  } else if (fold === true) {
    return (
      // <div className='Transition_outer'>
      //   <div className='Transition_inner'>
          <div className='App'>
            <Header />
            <div>
              <Nav />
              <Content />
            </div>
            <Footer />
          </div>
      //   </div>
      // </div>
    );
  }
}
