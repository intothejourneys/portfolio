import React from 'react';
import { Route } from 'react-router-dom';

import styled from 'styled-components';

import ContentMain from '../body/ContentMain';
import ContentAbout from '../body/ContentAbout';
import ContentSkills from '../body/ContentSkills';
import ContentWorks from '../body/ContentWorks';
import ContentContact from '../body/ContentContact';

import cursor_1 from '../img/cursor_1.cur';

const ContentWrapper = styled.div`
    top: 10%;
    width: 80%;
    height: 83%;
    margin-left: 20%;
    position: absolute;
    border: 3px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: transparent;
    cursor: url(${cursor_1}), auto;
    z-index: 3;
`;

export default function Content({ theme, onThemeToDarkHandler, onThemeToLightHandler, onFoldToWorksHandler }) {
    return (
        <ContentWrapper>
            <Route 
                path="/" 
                exact={true} 
                render={() => 
                    <ContentMain theme={theme} onThemeToDarkHandler={onThemeToDarkHandler} onThemeToLightHandler={onThemeToLightHandler} />
                }
            />
            <Route 
                path="/portfolio"
                render={() => 
                    <ContentMain theme={theme} onThemeToDarkHandler={onThemeToDarkHandler} onThemeToLightHandler={onThemeToLightHandler} />
                }
            />
            <Route path="/about" component={ContentAbout} />
            <Route path="/skills" component={ContentSkills} />
            <Route 
                path="/works"
                render={() => 
                    <ContentWorks onFoldToWorksHandler={onFoldToWorksHandler} />
                }    
            />
            <Route path="/contact" component={ContentContact} />
        </ContentWrapper>
    );
}