import React from "react";
import { useSpring, animated, config } from "react-spring";
import "./index.scss";
import AudioPlayer from "../AudioPlayer";

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
        <img
          className="img-top"
          src="https://thumb.tildacdn.com/tild3466-6533-4636-b334-613365376162/-/resize/437x/-/format/webp/photo.png"
          alt=""
        />
        {/* <img
          src="https://thumb.tildacdn.com/tild6263-3335-4135-a633-653363366264/-/resize/400x/-/format/webp/2.png"
          alt=""
        />
        <img
          src="https://thumb.tildacdn.com/tild3932-3234-4366-b439-626563636131/-/resize/80x/-/format/webp/photo.png"
          alt=""
        />
        <img
          src="https://oir.mobi/uploads/posts/2021-04/thumbs/1618344673_30-oir_mobi-p-uzori-tsveti-tsveti-krasivo-foto-37.jpg"
          alt=""
        /> */}
        <animated.div className="primer2" style={springProps}>
          <animated.h1 style={fadeProps}>Урматтуу коноктор!</animated.h1>
          <animated.p style={fadeProps}>сиздерди кызыбыз</animated.p>
          <animated.h1 style={fadeProps}>Айсалкындын</animated.h1>
          <animated.p style={fadeProps}>
            Узатуу тоюна арналган салтанатка келип кадырлуу коногубуз болуп
            кетууго чакырабыз!
          </animated.p>
        </animated.div>
        <img
          className="img-bottom"
          src="https://thumb.tildacdn.com/tild3333-6133-4165-b839-353335393562/-/resize/466x/-/format/webp/photo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Yrmatuu;
