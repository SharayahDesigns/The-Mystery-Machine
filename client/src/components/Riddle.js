import React from "react";
import RiddleForm from "./RiddleForm";

const Riddle = (props) => {
  return (
    <div>
      <h1>Question: {props.question}</h1>
      <p>id: {props.id}</p>
      <p>Level: {props.level}</p>
      <p>Option1: {props.option1}</p>
      <p>option2: {props.option2}</p>
      <p>Option3: {props.option3}</p>
      <p>Option4: {props.option4}</p>
      <button className="button" onClick={() => props.deleteRiddle(props.id)}>
        delete
      </button>
      <RiddleForm
        updateRiddle={props.updateRiddle}
        id={props.id}
        question={props.question}
        level={props.level}
        option1={props.option1}
        option2={props.option2}
        option3={props.option3}
        option4={props.option4}
      />
    </div>
  );
};

export default Riddle;
