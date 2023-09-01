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
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="section-title"
          >
            Yйлонуу аземи :
          </h1>
          <p
            className="section-content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            22.10.2025 ж. <br />
            саат 18:00-башталат
          </p>
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="section-title"
          >
            Дарегибиз :
          </h1>
          <p className="section-content">
            Ош шаары <br /> "Restoran" <br /> той-канасы
          </p>
          <div className="map-icons">
            <a
              href="https://share.api.2gis.ru/getimage?city=bishkek&zoom=17&center=74.636375%2C42.843577&title=Resto%20Son-Kol&desc=%D0%A3%D0%BB%D0%B8%D1%86%D0%B0%207%20%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8F%2C%C2%A01%D0%B4%2F1%3Cbr%20%2F%3E%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA"
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
