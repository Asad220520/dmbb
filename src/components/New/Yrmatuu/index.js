import React from "react";
import { useSpring, animated, config } from "react-spring";
import "./index.scss";

const Yrmatuu = () => {
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.wobbly,
  });

  const fadeProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: config.slow,
  });

  return (
    <div id="primer2">
      <div className="container">
        <animated.div className="primer2" style={springProps}>
          <animated.h1 style={fadeProps}>Урматтуу коноктор!</animated.h1>
          <animated.p style={fadeProps}>сиздерди кызыбыз</animated.p>
          <animated.h1 style={fadeProps}>Айсалкындын</animated.h1>
          <animated.p style={fadeProps}>
            Узатуу тоюна арналган салтанатка келип кадырлуу коногубуз болуп
            кетууго чакырабыз!
          </animated.p>
        </animated.div>
      </div>
    </div>
  );
};

export default Yrmatuu;
