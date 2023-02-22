import styled from "styled-components";
import * as colors from '../../config/colors';

export const ItemContainer = styled.div`
    max-width: 760px;
    max-height: 400px;
    background: white;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 150px;
        margin-top: 100px;
    }
    img:hover{
        transform: scale(1.2);
    }
`;

export const CartButton = styled.button`
    margin-top: 10%;
    :hover{
        background-color: ${colors.sucessColor};
    }
`;