import React, { useContext, useState, useEffect } from 'react';
import { maleData, femaleData } from '../constant/questions';
import MainContext from '../context/index';
import styled from 'styled-components';
import { navigate } from '@reach/router';
// Save the Answer
//  End Page
// Randomize Questions or limit to 10 or so
export function AnswerItems(props) {
  return (
    <div className="image-answer-boxes">
      {props?.questionsList[props?.questionIndex]?.options.map((elem, i) => {
        return (
          <div
            key={i}
            className={`image-answer-box ${
              props?.questionsList[props?.questionIndex]?.selectedIndex == i
                ? 'image-answer-box-active'
                : undefined
            }`}
            onClick={() => props.selectedItemHandler(i, elem.alt)}
          >
            {elem.img ? <img src={elem.img} alt="" /> : elem.alt}
          </div>
        );
      })}
    </div>
  );
}

export default function Questions() {
  const [mainState, setMainState] = useContext(MainContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionsList, setQuestionsList] = useState([]);
  const prevHandler = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
      //   setNextBtnActive(true);
    }
  };
  const nextHandler = () => {
    const totalNoQuestion = questionsList.length;
    if (questionIndex < totalNoQuestion - 1) {
      setQuestionIndex((prev) => prev + 1);
      //   setNextBtnActive(true);
    } else if (questionIndex == totalNoQuestion - 1) {
      navigate('/thank-you');
    }
  };
  const selectedItemHandler = (index, answer) => {
    const stateClone = [...questionsList];
    stateClone[questionIndex].answer = answer;
    stateClone[questionIndex].selectedIndex = index;
    setQuestionsList((prev) => [...stateClone]);
    // setSelected({ index: index, answer: answer });
    nextHandler();
  };
  useEffect(() => {
    if (mainState.gender == 'male') {
      setQuestionsList([...maleData]);
    } else {
      setQuestionsList([...femaleData]);
    }
    return () => {};
  }, []);

  return (
    <Styled>
      <div className="question-container">
        <div className="title-box">
          <p className="counter">{`${questionIndex + 1}/${
            questionsList.length
          }`}</p>
          <h1 className="title">{questionsList[questionIndex]?.question}</h1>
        </div>
        <AnswerItems
          selectedItemHandler={selectedItemHandler}
          questionsList={questionsList}
          questionIndex={questionIndex}
        />
      </div>
      {/* <div className="nav-Btn-Wrapper">
        {questionIndex != 0 ? (
          <button onClick={prevHandler}>Prev</button>
        ) : undefined}
        <button
          onClick={nextHandler}
          disabled={questionsList[questionIndex]?.answer ? false : true}
        >
          Next
        </button>
      </div> */}
    </Styled>
  );
}
const Styled = styled.div`
  background: #191919;
  min-height: 100vh;
  color: #fff;
  .question-container {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 100px;
  }
  .title-box {
    background: #fff;
    color: #000;
    position: relative;
  }
  .counter {
    top: -12px;
    left: 0px;
    position: absolute;
    font-size: 14px;
  }
  .nav-Btn-Wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    button {
      padding: 15px 30px;
      border: thin solid #fff;
      background: #191919;
      color: #fff;
      margin-right: 10px;
      cursor: pointer;
      :hover {
        background: #fff;
        color: #000;
      }
    }
    button:disabled {
      pointer-events: none;
      background: grey;
      border-color: grey;
      color: #b1b1b1;
    }
  }
  .image-answer-boxes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .image-answer-box {
      flex: 50%;
      max-width: 400px;
      height: 200px;
      border: thin solid;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      overflow: hidden;
      :hover {
        background: #cecece;
        color: #000;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
    .image-answer-box-active {
      background: #cecece;
      color: #000;
    }
  }
`;
