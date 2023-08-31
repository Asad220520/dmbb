import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./index.scss";
import Slide4 from "../../Musor/Slide4";
import Yrmatuu from "../Yrmatuu";
import Date from "../Date";
import axios from "axios";

const Form = () => {
  const TOKEN = "6603262764:AAEoZNNGSfXmZXOsWttnAIDrzhbWXFSF61c";
  const CHAT_ID = "-1001686824386";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [block, setBlock] = useState("");
  const [willAttend, setWillAttend] = useState(null);
  const [nameError, setNameError] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setWillAttend(value === "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (block.trim() === "") {
      setNameError(true);
      return;
    }

    let message = `<b>Келуучу</b>\n`;
    message += `<b>Келуучунун аты:</b> ${block}\n`;
    message += `<b>Барам:</b> ${willAttend ? "Приду" : "Не приду"}\n`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((response) => {
        console.log("ok", response.data);
        setBlock("");
        setWillAttend(null);
        setNameError(false);
      })
      .catch((error) => {
        console.error("err:", error);
      });
  };

  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <>
      <Yrmatuu />
      <Date />
      <div id="primer1">
        <div className="container">
          <animated.div className="primer1" style={springProps}>
            <h1>Jenish</h1>
            <span>&</span>
            <h1>Aika</h1>
            <h2>Мы женимся</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">Aтыңыз:</label>
              <input
                type="text"
                name="block"
                value={block}
                onChange={(e) => setBlock(e.target.value)}
                className={nameError ? "error" : ""}
              />
              {nameError && (
                <p className="error-text">Толук атынызды киргизиңиз</p>
              )}
              <div className="ch">
                <div className="check">
                  <input
                    type="radio"
                    name="attendance"
                    value="true"
                    checked={willAttend === true}
                    onChange={handleCheckboxChange}
                  />
                  <h2>приду</h2>
                </div>
                <div className="check">
                  <input
                    type="radio"
                    name="attendance"
                    value="false"
                    checked={willAttend === false}
                    onChange={handleCheckboxChange}
                  />
                  <h2>не приду</h2>
                </div>
              </div>
              <button type="submit">Жиберуу</button>
            </form>
          </animated.div>
        </div>
      </div>
      <Slide4 />
    </>
  );
};

export default Form;
