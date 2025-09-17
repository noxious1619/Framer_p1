// import BasicsOfMotion from "../components/BasicsOfMotion.jsx";
// import Gestures from "../components/Gestures";
import '../styles/global.css';

//   -------Basics of motion--------

//import React, { useState } from "react";
//import { motion, AnimatePresence } from "framer-motion";


//const App = () => {


//   const [isVisible, setIsVisible] = useState(true);

//   return (
//     <div style={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       gap: "2rem",
//       height: "100vh",
//       width: "100vw"
//     }}>

//       <motion.button className="example-button"
//               onClick={() => setIsVisible(!isVisible)}
//       >
//         Show/Hide
//       </motion.button>

//  ------Basic motion 1 ------------

//       {/* <AnimatePresence mode="popLayout">
//       <AnimatePresence>
//         {isVisible && (
//           <motion.div
//             initial={{
//               rotate: "0deg",
//               scale: 0,
//               y: 0,
//             }}
//             animate={{
//               rotate: "180deg",
//               scale: 1,
//               y: [0, 150, -150, -150, 0],
//             }}
//             exit={{
//               rotate: "0deg",
//               scale: 0,
//               y: 0,
//             }}
//             transition={{
//               duration: 1,
//               ease: "backInOut",
//               times: [0, 0.25, 0.5, 0.85, 1],
//             }}
//             style={{
//               width: 150,
//               height: 150,
//               background: "black",
//             }}
//           ></motion.div>
//         )}
//       </AnimatePresence> */}

//  -------Basics of motion 2

//       <AnimatePresence mode="popLayout">
//         {isVisible && (
//           <motion.div
//             initial={{
//               rotate: "0deg",
//               scale: 0,
//               y: 0,
//             }}
//             animate={{
//               rotate: "180deg",
//               scale: 1,
//               y: [0, 150, -150, -150, 0],
//             }}
//             exit={{
//               rotate: "0deg",
//               scale: 0,
//               y: 0,
//             }}
//             transition={{
//               duration: 1,
//               ease: "backInOut",
//               times: [0, 0.25, 0.5, 0.85, 1],
//             }}
//             style={{
//               width: 150,
//               height: 150,
//               background: "red",
//             }}
//           ></motion.div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

//export default App;

//-------end------------

//-----------Gestures---------------


// import { motion, MotionConfig } from 'framer-motion';

// const App = () => {
//   return (
//     <div style={{
//        display: "grid",
//        placeContent: "center",
//        height: '100vh',
//        width: '100vw',
//        gap: '1rem'
//      }}>
//         <MotionConfig
//           transition={{
//               duration: '0.125',
//               ease: 'easeInOut',
//           }}
//         >

//           <motion.button 
//             whileHover={{scale: 1.05}}
//             whileTap={{ scale: 0.95, rotate: '2.5deg'}}
//             className='example-button'
//           >
//             Click me!!
//           </motion.button>

//           <motion.button 
//             whileHover={{scale: 1.15}}
//             whileTap={{ scale: 0.85, rotate: '-2.5deg'}}
//             style={{backgroundColor: 'red'}}
//             className='example-button'
//           >
//             Click me!!
//           </motion.button>

//         </MotionConfig>

//     </div>
//   )
// }

// export default App

// ---------------end--------------------

//-----------useAnimationControls--------

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

// -------end-----------------------




