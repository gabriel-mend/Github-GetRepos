import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
`;

export const CardUser = styled.div`
    width: 100%;
    max-width: 768px;
    height: 40%;
    position: relative;

    background: #3C3C3C;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 48px;

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    & img {
        width: 84px;
        border-radius: 8px;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
    }

    & h1 {
        font-size: 24px;
        color: #fff;
    }
`;

export const Main = styled.ul`
    width: 100%;
    max-width: 768px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 24px;
    height: 60%;

    overflow-y: scroll;
`;

export const RepoCard = styled.li`
    width: 100%;
    padding: 18px 24px;
    position: relative;

    list-style: none;
    text-decoration: none;
    color: #000;

    border: 3px solid #000;
    border-radius: 8px;
    transition: .3s;

    &:hover {
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
    }

    & img {
        width: 16px;
        margin-left: 4px;
    }

    & a {
        text-decoration: none;
        color: #000;
    }

    & div {
        display: flex;
        align-items: center;
        position: absolute;
        top: 28px;
        right: 24px;
    }

    & h1 {
        margin-bottom: 12px;
    }

    & p {
        margin-bottom: 12px;
    }
`;