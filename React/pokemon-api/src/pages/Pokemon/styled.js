import styled from "styled-components";
import * as colors from '../../config/colors';

export const PokeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${colors.secundaryColor};
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px black;
    img {
        margin-top: -100px;
        margin-bottom: -100px;
        transform: scale(0.5);
        transition: all .5s ease-in-out;
    }
    img:hover{
        transform: scale(0.6) rotate(-5deg);
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
    p {
        font-size: larger;
        margin: 15px;
    }
`;