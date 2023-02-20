import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    label{
        margin: 10px 0px;
    }
    button{
        margin-top: 10px;
    }
    .link{
        margin-top: 10px;
        font-size: 12px;
    }
    .link:hover{
        color: blue;
    }
`;