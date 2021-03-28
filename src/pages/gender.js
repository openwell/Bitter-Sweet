import React, { useContext } from 'react';
import styled from 'styled-components';
import MaleImg from '../assets/male.png';
import FemaleImg from '../assets/female.png';
import MainContext from '../context/index';
import { navigate } from '@reach/router';
export default function Gender() {
  const [mainState, setMainState] = useContext(MainContext);
  const genderHandler = (gender) => {
    setMainState((prev) => ({ ...prev, gender: gender }));
    navigate('/start');
  };
  return (
    <Styled>
      <div className="title-section">
        <div className="question-container">
          <div className="question-box">
            <h1 className="title">I am</h1>
          </div>
          <div className="answers-box">
            <div onClick={() => genderHandler('male')}>
              <img src={MaleImg} alt="" />
            </div>
            <div onClick={() => genderHandler('female')}>
              <img src={FemaleImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
const Styled = styled.div`
  background: #191919;
  min-height: 100vh;
  .question-container {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 100px;
  }
  .question-box {
    background: #fff;
  }
  .answers-box {
    display: flex;
    /* justify-content: space-around; */
    /* border: 1px solid; */
    & > div {
      flex: 1;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
`;
