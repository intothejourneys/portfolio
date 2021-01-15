// import React from 'react';

// import styled, { keyframes } from 'styled-components';

// const PortfolioModal = styled.div`
//     display: flex;
// `;

// const PortfolioContent = styled.span`
//     width: 100px;
//     height: 100px;
//     position: absolute;
//     z-index: 10;
// `;


// export default function Portfolio({ isWorksModalOpen }) {
//     console.log('portfolio', isWorksModalOpen.portfolio); // 두번 불리는 이유..? // div에 해 주었어서..

//     // if (isModalOpen === true) {
//         if (isWorksModalOpen.portfolio === true) {
//             return (
//                 <PortfolioModal>
//                     <PortfolioContent>안녕하세요</PortfolioContent>
//                 </PortfolioModal>
//             );
//         // } else if (isWorksModalOpen.portfolio === false) {
//         //     return (
//         //         ''
//         //     );
//         } else if (isWorksModalOpen.portfolio === false) {
//             return (
//                 ''
//             );
//         }
//     // } else if (isModalOpen === false) {
//     //     if (isWorksModalOpen.portfolio === true) {
//     //         alert('START 버튼을 먼저 눌러주세요🪐');
//     //         // 다시 전 상태로 돌려두기?
//     //     } else if (isWorksModalOpen.portfolio === false) {
//     //         return (
//     //             ''
//     //         );
//     //     }
//     // }

// }