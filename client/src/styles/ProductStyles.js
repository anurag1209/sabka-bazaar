import styled from 'styled-components';

const ProductCardPrice = styled.div`
  font-size: 0.7rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const CardContainer = styled.div`
    max-width: 210px;
    margin-top: 20px;
    padding: 10px;
    border-bottom: 2px dashed #e7e7e7c2;
    padding-bottom: 12px;
    box-shadow: 17px 3px 10px -17px #916a6a59;

    @media (max-width: 767px) {
        max-width: fit-content;
        margin: 10px 20px 0 20px;
        box-shadow: none;
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        max-width: fit-content;
        margin: 10px;
    }
`;

const CardHeader = styled.h3`
    height: 60px;
    font-size: 0.9rem;
    font-weight: 700;
    @media (max-width: 767px) {
        height: 55px;
    }
`;

const CardContent = styled.div`
    @media (max-width: 767px) {
        display: flex;

        img {
            width: 100px;
            padding-right: 13px;
            height: 135px;
        }
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        display: grid;
        grid-template-columns: 1fr 2fr;

        img {
            width: 100px;
            height: 150px;
            padding-right: 13px;
        }
    }
`;

const CardText = styled.div`
    background-color: #e7e7e7c2;
    padding: 10px;
    margin: 10px 0;
    height: 80px;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.1;

    @media (max-width: 767px) {
        margin-top: 0px;
        height: 87px;
    }

    @media (min-width: 768px) and (max-width: 1100px)  {
        margin-top: 0px;
        height: 105px;
    }
`;

const BuyNowButton = styled.button`
    padding: 7px 21px;
    font-size: 0.7rem;
    border: none;
    background-color: #c6095ec7;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    display: ${props => props.title === "large" ? "block" : "none"};

    &:hover {
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
        background-color: #c51162;
    }

    @media (max-width: 767px) {
        display: ${props => props.title === "large" ? "none" : "block"};
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 1100px)  {
        display: ${props => props.title === "large" ? "none" : "block"};
        font-size: 0.6rem;
        width: 100%;
    }
`;

const CardButtonArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1100px) {
        margin-top: 0px;
        justify-content: center;
    }
`;


const ProductsStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 16px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-column-gap: 0px;
    }
`;

const ProductsListStyle = styled.div`
    grid-gap: 20px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;
    }
`;

const ErrorContainer = styled.div`
    position: absolute;
    left: 45%;
    text-align: center;
    background-color: #000;
    padding: 3rem 4rem;
    width: 30%;

    p {
        color: #fff;
        margin-bottom: 3rem;
        font-size: 1.2rem;
        font-weight: 600;
    }

    span {
        margin: 0 1rem;
        font-weight: bold;
        padding: 0.8rem 1.4rem;
        border: 1px solid #fff;
        cursor: pointer;
    }

    a {
        color: #fff;
    }

    @media (max-width: 767px) {
        left: 9%;
        top: 25%;
        padding: 2.5rem 1.5rem;
        width: 80%;

        span {
            margin: 0 0.5rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        left: 35%;
        width: auto;
    }
`;


export { ProductCardPrice, 
    CardContainer, 
    CardHeader, 
    CardContent, 
    CardText, 
    BuyNowButton, 
    CardButtonArea,
    ProductsStyle,
    ProductsListStyle,
    ErrorContainer
};