import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #000;
  font-size: 25px;
  font-family: sans-serif;
  max-width: 450px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 75px;
    heigth: 40px;
    background: #6e6e6e;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-size: 12px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#6e6e6e')};
    }

  }

`;

export const Repositories = styled.div`
  margin-top: 40px;
  max-width: 700px;

  a {

    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover{
      transform: translate(10px);
    }

    & + a{
      margin-top:16px;
    }

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
}`;
