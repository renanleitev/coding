import styled from "styled-components";
import * as colors from '../../config/colors';

export const Form = styled.form`
    display: flex;
    align-items: center;
    input{
        width: 500px;
        height: 50px;
        border: 0;
        outline: 0;
    }
    button{
        background-color: ${colors.successColor};
        color: ${colors.containerColor}; 
        width: 100px;
        height: 30px;
        cursor: pointer;
        margin-left: 2px;
    }
`;