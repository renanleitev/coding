import styled, { createGlobalStyle } from "styled-components";
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    body {
        background-color: ${colors.primaryColor};
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background-color: ${colors.successColor};
        color: white;
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background-color: ${colors.failureColor};
        color: white;
    }
    a {
        color: ${colors.invertedColor};
        font-size: 20px;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
`;
export const Container = styled.div`
    display: flex;
    max-width: 700px;
    background-color: ${colors.containerColor};
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px black;
    h1 {
        color: ${colors.containerColor};
        text-align: center;
        -webkit-text-stroke: 1px black;
    }
    button:hover{
        background-color: ${colors.sucessHoverColor};
        color: ${colors.invertedColor};
        transition: all 0.3s;
    }
    div {
        text-align: center;
        margin-right: 10px;
    }
`;
