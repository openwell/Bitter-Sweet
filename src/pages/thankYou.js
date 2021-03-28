import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
export default function thankYou() {
  return (
    <Styled>
      <div className="thank-you">
        <h1>Thank You</h1>
        <button onClick={() => navigate('/home')}>Home</button>
      </div>
    </Styled>
  );
}
const Styled = styled.div`
  background: #191919;
  min-height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-self: center;
  .thank-you {
    align-self: center;
  }
  button {
    padding: 10px 30px;
  }
`;
