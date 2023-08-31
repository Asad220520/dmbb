import React, { useEffect } from "react";
import "./index.scss";
const Dmb = () => {
  useEffect(() => {
    const imgContainer = document.querySelector(".img-container");

    const interval = setInterval(() => {
      const last = imgContainer.firstElementChild;
      imgContainer.removeChild(last);
      imgContainer.appendChild(last);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="container">
      <div class="img-container">
        <div class="box">
          <img
            src="https://cs3.livemaster.ru/zhurnalfoto/4/7/8/160928180922478f52bffc07e8487ac9115ccba6e7ef.jpeg"
            alt=""
          />
        </div>
        <div class="box">
          <img
            src="https://cs3.livemaster.ru/zhurnalfoto/5/3/1/160928181255531bc7e0cff06a08a97434a510417ae3.png"
            alt=""
          />
        </div>
        <div class="box">
          <img
            src="https://cs3.livemaster.ru/zhurnalfoto/f/2/9/160928175915f299e69920cb04137588be2cee94fc86.gif"
            alt=""
          />
        </div>
        <div class="box">
          <img
            src="https://cs3.livemaster.ru/zhurnalfoto/d/e/f/160928034953def034fe76ca083ea51a5913f55fa82b.gif"
            alt=""
          />
        </div>
        <div class="box">
          <img
            src="https://i.pinimg.com/236x/a0/16/ee/a016ee7694e0f301843254ed547fc387.jpg"
            alt=""
          />
        </div>
        <div class="box">
          <img
            src="https://i.pinimg.com/236x/0f/32/ab/0f32ab97be8ccd5402efd2d3a17e0c0f.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Dmb;
