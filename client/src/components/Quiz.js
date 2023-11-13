import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/fetchQuestion";
import { PushAnswer } from "../hooks/setResult";

/* redux store import */

import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);

  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  function onNext() {
    console.log("On next click");
    if (trace < queue.length) {
      /* Update the trace value by one */
      dispatch(MoveNextQuestion());

      /* Insert a new result in the array */
      if(result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
  }

  function onPrev() {
    console.log("On previous click");
    if (trace > 0) {
      /* Update the trace value by minus one */
      dispatch(MovePrevQuestion());
    }
  }
  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  /* Finish exam after the last question */
  if (result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace="true"></Navigate>
  }
    return (
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>
        {/* display questions */}
        <Questions onChecked={onChecked} />

        <div className="grid">
          {trace > 0 ? <button className="btn prev" onClick={onPrev}>
            Prev
          </button> : <div></div>}
          <button className="btn next" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    );
}
