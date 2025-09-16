// import BasicsOfMotion from "../components/BasicsOfMotion.jsx";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../styles/global.css';


const App = () => {

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      height: "100vh",
      width: "100vw"
    }}>

      <motion.button className="example-button"
              onClick={() => setIsVisible(!isVisible)}
      >
        Show/Hide
      </motion.button>

      {/* <AnimatePresence mode="popLayout">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence> */}

      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "red",
            }}
          ></motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
