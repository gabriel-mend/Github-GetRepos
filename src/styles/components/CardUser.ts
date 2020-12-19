import styled from 'styled-components';

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

    & a {
        width: 100%;
        max-width: 424px;
        height: 100%;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 

        color: #fff;
        text-decoration: none;
        
        &:hover {
            & h1 {
                color: #009FFD; 
            }
        }
    }
    
    & img {
        width: 84px;
        border-radius: 8px;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
    }

    & h1 {
        margin: 8px 0;
        font-size: 24px;
        color: #fff;
        transition: .3s all;
    }

    & p {
        font-size: 12px;
    }

    & span {
        margin-bottom: 8px;
    }

    & div {
        font-size: 12px;
        display: flex;
        align-items: center;
        margin-top: 6px;
        & svg {
            margin-right: 4px;
            fill: #fff;
        }
    }
`;