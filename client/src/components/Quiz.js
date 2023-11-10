import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/fetchQuestion";
import { PushAnswer } from "../hooks/setResult";

/* redux store import */

import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);

  const state = useSelector((state) => state);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(state);
  });

  function onNext() {
    console.log("On next click");
    if (trace < queue.length) {
      /* Update the trace value by one */
      dispatch(MoveNextQuestion());
      dispatch(PushAnswer(check));
    }
  }

  function onPrev() {
    console.log("On previous click");
    if (trace > 0) {
      /* Update the trace value by minus one */
      dispatch(MovePrevQuestion());
    }
  }
  function onChecked(check){
    console.log(check)
    setChecked(check)
  }

  /* Finish exam after the last question */

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      {/* display questions */}
      <Questions onChecked={onChecked} />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
