import styled from 'styled-components';

export const RepoCard = styled.li`
    width: 100%;
    padding: 18px 24px;
    position: relative;
    margin-bottom: 32px;

    list-style: none;
    text-decoration: none;
    color: #000;

    border: 3px solid #000;
    border-radius: 8px;
    transition: .3s;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
        border-color: #009FFD;

        & h1 {
            color: #009FFD;
        }

        & .stars {
            color: #009FFD;
            fill: #009FFD;
        }

        & .languange {
            color: #009FFD;
        }
    }

    & svg {
        margin-left: 4px;
    }

    & a {
        height: 100%;

        text-decoration: none;
        color: #000;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & .stars {
        display: flex;
        align-items: center;
        position: absolute;
        top: 24px;
        right: 24px;

        & span {
            font-size: 12px;
            transition: .3s;
        }

        & svg {
            transition: .3s;
        }
    }

    & h1 {
        font-size: 24px;
        margin-bottom: 12px;
        transition: .3s;
    }

    & p {
        font-size: 14px;
        margin-bottom: 12px;
    }

    & .languange {
        font-size: 12px;
        margin-top: auto;
        transition: .3s;
    }
`;