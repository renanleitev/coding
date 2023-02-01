import styled from 'styled-components';

export const Title = styled.h1`
    color: ${props => (
        props.isRed ? 'red' : 'blue'
    )};
    small {
        font-size: 12pt;
        margin-left: 15px;
        color: green;
    }
`;

export const Paragrafo = styled.p`
    color: purple;
    font-size: larger;
    font-weight: bolder;
`;