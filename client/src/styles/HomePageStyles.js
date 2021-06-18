import styled from 'styled-components';


const CategoryListItem = styled.div`
    box-shadow: 5px -15px 10px -17px #916a6a59;
    margin-top: 30px;
    display: grid;
    padding: 15px 20px;
    align-items: center;

    &:nth-child(odd){
        grid-template-columns: 1fr 3fr;
    }

    &:nth-child(even){
        grid-template-columns: 3fr 1fr;
    }

    @media (max-width: 767px) {
        margin-top: 15px;

        &:nth-child(odd){
            grid-template-columns: 1fr 2fr;
        }

        &:nth-child(even){
            grid-template-columns: 2fr 1fr;
        }
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        margin-top: 15px;

        &:nth-child(odd){
            grid-template-columns: 1fr 2fr;
        }

        &:nth-child(even){
            grid-template-columns: 2fr 1fr;
        }
    }
`;

const CategoryImage = styled.div`
    width: 250px;

    img {
        width: inherit;
    }

    @media (max-width: 767px) {
        width: 120px;
    }

    @media (min-width: 768px) and (max-width: 1000) {
        width: 200px;
    }
`;

const CategoryDescription = styled.div`
    text-align: center;
    p {
        line-height: 4;
        font-size: 0.75rem;
        color: #000;
        font-weight: 400;
    }

    button {
        color: #fff;
        background-color: #be2352;
        padding: 6px 16px;
        font-size: 0.875rem;
        min-width: 64px;
        box-sizing: border-box;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        letter-spacing: 0.02857em;
        border-style: none;
        cursor: pointer;
        margin-top: 5px;
    }

    @media (max-width: 767px) {
        p {
            line-height: 1.3;
            padding: 10px 0px;
        }
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        p {
            line-height: 1.2;
            padding: 10px 0px;
        }
    }
`;

export { CategoryListItem, CategoryImage, CategoryDescription };