import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


// Header component to display the header text and the animated text.


const Header = () => {
  return (
    <div className="bg-slate-800 px-4 py-4 text-center md:py-36">
      <h3 className="text-3xl font-medium text-violet-400 sm:text-4xl md:text-5xl lg:text-6xl">
        We build Applications for
        <AnimatedText
          phrases={[
            "Managing Contacts",
            "Staying Organized",
            "Updating Contacts List",
            "Personal Use",
            "Streamlining Workflows",
          ]}
        />
      </h3>
    </div>
  );
};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 3;

const AnimatedText = ({ phrases }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div className="relative mb-14 mt-2 w-full">
      {phrases.map((phrase) => {
        const isActive = phrases[active] === phrase;
        return (
          <motion.div
            key={phrase}
            initial={false}
            animate={isActive ? "active" : "inactive"}
            style={{
              x: "-50%",
            }}
            variants={{
              active: {
                opacity: 1,
                scale: 1,
              },
              inactive: {
                opacity: 0,
                scale: 0,
              },
            }}
            className="absolute left-1/2 top-0 w-full text-violet-50"
          >
            {phrase}
          </motion.div>
        );
      })}
    </div>
  );
};



export default Header;