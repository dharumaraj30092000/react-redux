import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector(({ item }) => item.isComplete);
  console.log(state);
  return (
    <div>
      <p>{state ? "true" : "false"}</p>
    </div>
  );
};

export default Home;
