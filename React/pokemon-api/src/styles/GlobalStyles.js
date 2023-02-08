import styled, { createGlobalStyle } from "styled-components";
import * as colors from '../config/colors';

export default createGlobalStyle`
    body {
        background-color: ${colors.primaryColor};
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
    }
    button:hover{
        background-color: ${colors.sucessHoverColor};
        color: ${colors.invertedColor};
        transition: all 0.3s;
    }
`;
export const PokeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${colors.secundaryColor};
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px black;
    img {
        margin-top: -120px;
        margin-bottom: -120px;
        transform: scale(0.5);
    }
    img:hover{
        cursor: pointer;
    }
    img:active{
        transform: scale(0.8);
    }
    button {
        background-color: ${colors.successColor};
        color: ${colors.containerColor}; 
        width: 100px;
        height: 50px;
        padding: 10px;
        cursor: pointer;
        margin-left: 2px;
    }
    .button-image{
        text-align: center;
    }
`;
export const DataContainer = styled.div`
    width: 100%;
    background-color: ${colors.primaryColor};
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px black;
    text-align: center;
    button{
        background-color: ${colors.successColor};
        margin-left: 2px;
        color: ${colors.containerColor}; 
        width: 100px;
        padding: 10px;
        cursor: pointer;
    }
`;