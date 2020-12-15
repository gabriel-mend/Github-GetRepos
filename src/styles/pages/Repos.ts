import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardUser = styled.div`

`;

export const Main = styled.ul`
    width: 100%;
    max-width: 768px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 24px;
`;

export const RepoCard = styled.li`
    list-style: none;
    border: 3px solid #000;
    border-radius: 8px;
    padding: 24px;

    & img {
        width: 16px;
    }
`;