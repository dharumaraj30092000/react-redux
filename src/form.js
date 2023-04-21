import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkBox } from "./slice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const state = useSelector(({ item }) => item);
  const navigate = useNavigate();
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        checked={state.isComplete}
        onChange={(e) => {
          return dispatch(checkBox(e.target.checked)), navigate("/home");
        }}
      />
    </div>
  );
};

export default Form;
