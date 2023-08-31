import React, { useState } from "react";
import gsap from "gsap";
import "./index.scss";
const Sb = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleItemClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };

  const getItemWidth = (index) => {
    if (clickedIndex === index) {
      return "42vw";
    } else {
      return "15vw";
    }
  };

  const groupStyle = {
    display: "flex",
    alignItems: "center",
  };

  const itemStyle = (imageUrl, index) => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: getItemWidth(index),
    height: "20vh",
    marginBottom: "10px",
    transition: "width 0.5s ease",
  });

  return (
    <div className="container">
      <div style={groupStyle}>
        <div
          className="item"
          style={itemStyle(
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            0
          )}
          onClick={() => handleItemClick(0)}
        ></div>
        <div
          className="item"
          style={itemStyle(
            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            1
          )}
          onClick={() => handleItemClick(1)}
        ></div>
        <div
          className="item"
          style={itemStyle(
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            2
          )}
          onClick={() => handleItemClick(2)}
        ></div>
        <div
          className="item"
          style={itemStyle(
            "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            3
          )}
          onClick={() => handleItemClick(3)}
        ></div>
        <div
          className="item"
          style={itemStyle(
            "https://images.unsplash.com/photo-1543357530-d91dab30fa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            4
          )}
          onClick={() => handleItemClick(4)}
        ></div>
      </div>
    </div>
  );
};

export default Sb;
