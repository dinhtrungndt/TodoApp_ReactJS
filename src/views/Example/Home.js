import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";

function Home(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/todo");
  };

  return (
    <div className="Home">
      <h1>Hello world from Homepage with TODOAPP & Nguyen Dinh Trung</h1>
      <button onClick={handleClick}>Navigate to About</button>
    </div>
  );
}

export default Color(Home);
