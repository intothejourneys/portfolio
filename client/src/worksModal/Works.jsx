// import React, { useState } from 'react';

// import styled, { keyframes } from 'styled-components';

// import Portfolio from '../worksModal/Portfolio';
// import Devmap from '../worksModal/Devmap';
// import Hobbystagram from '../worksModal/Hobbystagram';
// import Others from '../worksModal/Others';

// export default function Works({ isWorksModalOpen, setDisable, setIsWorksModalOpen }) {
//     console.log(isWorksModalOpen);
//     if (isWorksModalOpen.portfolio === true) {
//         return(
//             <div>
//                 {/* <Portfolio isWorksModalOpen={isWorksModalOpen} /> */}
//                 <p>포트폴리오</p>
//             </div>
//         )
//     } else if (isWorksModalOpen.devmap === true) {
//         return (
//             <div>
//                 {/* <Devmap isWorksModalOpen={isWorksModalOpen} /> */}
//                 <p>데브맵</p>
//             </div>
//         )
//     } else if (isWorksModalOpen.hobbystagram === true) {
//         return (
//             <div>
//                 {/* <Hobbystagram isWorksModalOpen={isWorksModalOpen} /> */}
//                 <p>하비스타그램</p>
//             </div>
//         )
//     } else if (isWorksModalOpen.others === true) {
//         return (
//             <div>
//                 {/* <Others isWorksModalOpen={isWorksModalOpen} /> */}
//                 <p>아더스</p>
//             </div>
//         )
//     } else {
//         return (
//             ''
//         )
//     }
// }