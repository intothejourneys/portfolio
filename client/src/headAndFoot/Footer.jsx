import React from 'react';

import styled from 'styled-components';

import footerText from '../img/footer.svg';

import cursor_1 from '../img/cursor_1.cur';

const FooterWrapper = styled.div`
    bottom: 0%;
    width: 100%;
    height: 7%;
    position: absolute;
    border: 3px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: transparent;
    cursor: url(${cursor_1}), auto;
    z-index: 3;
`;

const FooterText = styled.div`
    width: 100%;
    height: 25%;
    bottom: 20%;
    right: 0%;
    // vertical-align: center;
    // text-align: center;
    // color: #FCF6F5FF;
    // font-size: 15px;
    // font-weight: 700;
    // font-family: 'Josefin Slab', serif;
    background-image: url(${footerText});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;
    opacity: 0.8;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterText>
                {/* copyrightⓒ 2021 All rights reserved by Eunjeong Ellen Kwon */}
            </FooterText>
        </FooterWrapper>
    )
}