import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
export default function Home() {
  return (
    <Styled>
      <div className="title-section">
        <h1 className="title">Welcome to Bitter Sweet</h1>
        <div className="button-wrapper ">
          <button
            className="btn btn-white btn-animated"
            onClick={() => navigate('/gender')}
          >
            Click To Begin
          </button>
        </div>
      </div>
    </Styled>
  );
}
const Styled = styled.div`
  background: #191919;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-self: center;
  .title-section {
    align-self: center;
    .title {
      color: #fff;
      font-size: 60px;
    }
    .button-wrapper {
      display: flex;
      justify-content: center;
      /* button {
        color: #fff;
        padding: 15px 20px;
        background: green;
        border: none;
        border-radius: 5px;
        font-size: 16px;
      } */
      .btn-white {
        background-color: #fff;
        color: #777;
      }
      .btn-white::after {
        background-color: #fff;
      }
      .btn {
        /* text-transform: uppercase; */
        text-decoration: none;
        padding: 15px 40px;
        display: inline-block;
        border-radius: 100px;
        transition: all 0.2s;
        position: absolute;
        border: none;
      }

      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        /* transform: translateY(0px); this will do needs something to work it */
      }

      .btn:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      }

      .btn::after {
        content: '';
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
        /* background: red; */
      }

      .btn:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
        /* the button is there but the opacity thens to hide it */
        /* the transform makes it bigger and opacity hides it */
      }

      .btn-animated {
        animation: moveInBottom 5s ease-out;
        animation-fill-mode: backwards;
      }

      @keyframes moveInBottom {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }

        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
  }
`;
