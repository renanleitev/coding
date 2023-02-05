import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 5px;
  }
  .increment {
    background-color: green;
  }
  .decrement {
    background-color: red;
  }
`;