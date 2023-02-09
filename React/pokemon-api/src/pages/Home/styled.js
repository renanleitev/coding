import styled from "styled-components";
import * as colors from '../../config/colors';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

export const MiniContainer = styled.div`
    background-color: ${colors.primaryColor};
    width: 150px;
    height: 150px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
    img:hover{
        background-color: ${colors.secundaryColor};
        transition-delay: 300ms;
        width: 150px; 
        height: 150px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
    }
    p {
        margin-top: -5px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;
export const ArrowLeft = styled(FaLongArrowAltLeft)`
    color: green;
    margin-top: 60px;
    cursor: pointer;
`;
export const ArrowRight = styled(FaLongArrowAltRight)`
    margin-left: 30px;
    color: green;
    margin-top: 60px;
    cursor: pointer;
`;
export const Title = styled.h1`
    color: ${colors.containerColor};
    text-align: center;
    -webkit-text-stroke: 1px black;
`;