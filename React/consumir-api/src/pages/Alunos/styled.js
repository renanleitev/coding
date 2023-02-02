import styled from 'styled-components';

export const AlunoContainer = styled.div`
    margin-top: 20px;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }
    div + div {
        border-top: 1px solid gray;
    }
`;

export const ProfilePicture = styled.div`
    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
`;