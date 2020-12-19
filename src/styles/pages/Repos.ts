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

export const Main = styled.ul`
    width: 100%;
    max-width: 768px;
    height: 60%;
    padding: 0 16px; 

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;

    overflow-y: scroll;

    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        width: 2px;
        
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #0C0B0B;
    }

    @media(max-width: 768px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;