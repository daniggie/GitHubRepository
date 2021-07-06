import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #0083e8;
  font-size: 50px;
  font-family: cursive;
  max-width: 450px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    heigth: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    transition: background-color: 0.2s;

    &:hover {
      brackground: ${shade(0.2, '#04d361')};
    }
  }

`;

export const Repositories = styled.div`
  margin-top: 40px;
  max-width: 700px;

  display:flex;

  img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div{
    margin: 0 16px;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a9a9b9;
      margin-top: 4px;
    }
  }

`;
