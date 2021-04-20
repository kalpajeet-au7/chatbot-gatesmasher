import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Theory of Computation", 
      handler: props.actionProvider.handleTOCList,
      id: 1 },
    { text: "DBMS",
      handler: props.actionProvider.handledbmsList, 
      id: 2 },
    { text: "Object Oriented Programming",
     handler: props.actionProvider.handleOOPList, 
     id: 3 },
    { text: "Computer Networks",
     handler: props.actionProvider.handlecnetList, 
     id: 4 },
    { text: "Software Engineering", 
    handler: props.actionProvider.handlesengList, 
    id: 5 },
  ];
const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));
return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;