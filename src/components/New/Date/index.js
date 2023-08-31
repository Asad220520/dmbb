import React from "react";
import { useSpring, animated, config } from "react-spring";
import "./index.scss";

const Date = () => {
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.wobbly,
  });

  return (
    <div id="primer3">
      <div className="container">
        <animated.div className="primer3" style={springProps}>
          <h1 className="section-title">Yйлонуу аземи :</h1>
          <p className="section-content">
            22.10.2025 ж. <br />
            саат 18:00-башталат
          </p>
          <h1 className="section-title">Дарегибиз :</h1>
          <p className="section-content">
            Ош шаары <br /> "Restoran" <br /> той-канасы
          </p>
          <div className="map-icons">
            <a
              href="https://2gis.kg/bishkek/branches/70000001019370244/firm/70000001050253876/74.636375%2C42.843577?m=74.598491%2C42.872702%2F11.7"
              target="_blank"
            >
              <img
                style={{
                  width: "155px",
                  height: "90px",
                }}
                src="https://tengrinews.kz/userdata/news/2022/news_478649/thumb_m/photo_407797.png"
                alt=""
                className="map-icon"
              />
            </a>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Date;
