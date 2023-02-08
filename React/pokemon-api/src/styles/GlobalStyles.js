import styled, { createGlobalStyle } from "styled-components";
import * as colors from '../config/colors';

export default createGlobalStyle`
    * {
        background-color: ${colors.primaryColor};
    }
`;
export const Container = styled.div`
    max-width: 780px;
    background-color: ${colors.containerColor};
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px black;
`;