import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
    text-align: center;
`;
export const Form = styled.form`
    label {
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px auto;
        cursor: pointer;
    }
    input {
        display: none;
    }
    img {
        height: 180px;
        width: 180px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px dashed ${colors.primaryColor};
    }
`;