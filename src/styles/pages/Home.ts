import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 100px;
    margin-bottom: 48px;
`;

export const Input = styled.input`
    height: 60px;
    width: 100%;
    max-width: 320px;
    padding: 0 24px;
    
    border-radius: 8px;
    border: 2px #232528 solid;
    outline: 0;

    &:focus {
        border-color: #009FFD;
    }
`;

export const Button = styled.button`
    height: 60px;
    width: 100%;
    max-width: 320px;
    margin-top: 24px;

    background-color: #fff;

    border-radius: 8px;
    border: 2px #232528 solid;
    outline: 0;

    cursor: pointer;
    transition: all .3s;
    
    &:hover {
        background-color: #232528;
        color: #fff;
    }
`;