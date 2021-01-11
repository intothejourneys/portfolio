import React from 'react';

import styled, { keyframes } from 'styled-components';

import astHead from '../img/ast_head.png';
import astBody from '../img/ast_body.png';
import astLeftArm from '../img/ast_left_arm_1.png';
import astLeftArmFront from '../img/ast_left_arm_1.png';
import astRightArm from '../img/ast_right_arm.png';
import astResume from '../img/ast_resume.png';
import astLeftLeg from '../img/ast_left_leg.png';
import astRightLeg from '../img/ast_right_leg.png';
import astFoot from '../img/ast_foot.png';

import cursor_1 from '../img/cursor_1.cur';
import cursor_2 from '../img/cursor_2.cur';

const AboutWrapper = styled.div`
`;

const AstronautWrapper = styled.div`
`;

const Astronaut = styled.div`
`;

const AstHead = styled.div`
    width: 200px;
    height: 200px;
    background-image: url(${astHead});
    background-repeat: no-repeat;
`;

const AstBody = styled.div`
`;

const AstLeftArm = styled.div`
`;

const AstLeftArmFront = styled.div`
`;

const AstResume = styled.div`
`;

const AstRightArm = styled.div`
`;

const AstLeftLeg = styled.div`
`;

const AstRightLeg = styled.div`
`;

const AstLeftFeet = styled.div`
`;

const AstRightFeet = styled.div`
`;

const TextWrapper = styled.div`
`;

const AboutText = styled.div`
`;

export default function ContentSkills() {
    return (
        <AboutWrapper>
            <AstronautWrapper>
                <Astronaut>
                    <AstHead />
                    <AstBody />
                    <AstLeftArm />
                    <AstLeftArmFront />
                    <AstResume />
                    <AstRightArm />
                    <AstLeftLeg />
                    <AstRightLeg />
                    <AstLeftFeet />
                    <AstRightFeet />
                </Astronaut>
            </AstronautWrapper>
            <TextWrapper>
                <AboutText></AboutText>
            </TextWrapper>
        </AboutWrapper>
    )
}