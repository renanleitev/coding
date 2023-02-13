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
        font-size: 36px;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
    select{
        width: 10.5em;
    }
    label{
        padding: 5px;
        margin-top: 5px;
    }
`;
export const Container = styled.div`
    display: flex;
    max-width: 980px;
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
    div {
        margin-right: 10px;
        flex-grow: 2;
        text-align: center;
    }
    p { 
        font-size: 36px;
    }
    button {
        background-color: ${colors.containerColor};
        border: none;
        font-size: 36px;
        flex-grow: 2;
        cursor: pointer;
    }
    button:hover{
        color: ${colors.secundaryColor};
        transition: 300ms ease-in-out;
    }
`;
export const ResultContainer = styled.div`
    position: fixed;
    margin-top: 100px;
    width: 920px;
    background-color: ${colors.containerColor};
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px black;
`;