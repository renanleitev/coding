import styled from "styled-components";
import * as colors from '../../config/colors';

export const NavHeader = styled.nav`
    background-color: ${colors.failureColor};
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    a {
        color: #fff;
        margin: 0 10px 0;
        font-weight: bold;
    }
    a:hover{
        color: ${colors.secundaryColor};
        transition-delay: 300ms;
    }
`;