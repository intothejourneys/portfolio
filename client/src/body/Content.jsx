import React, { useState } from 'react';

import styled from 'styled-components';

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
    z-index: 3;
`;

export default function Content() {
    return (
        <ContentWrapper>
            <h1></h1>
        </ContentWrapper>
    )
}