import React from "react";
import styled from 'styled-components';

const ProductCardPrice = styled.div`
  font-size: 0.8rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const CardContainer = styled.div`
    max-width: 210px;
    margin-top: 20px;
    padding: 10px;
    border-bottom: 3px dashed #bbb;
    box-shadow: 6px 2px 11px 7px #ddd;

    @media (max-width: 767px) {
        max-width: fit-content;
        margin: 10px 20px 0 20px;
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        max-width: fit-content;
        margin: 10px;
    }
`;

const CardHeader = styled.h3`
    height: 75px;
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
    background-color: #ddd;
    padding: 10px;
    margin: 10px 0;
    height: 140px;
    overflow: hidden;

    @media (max-width: 1100px) {
        margin-top: 0px;
    }
`;

const BuyNowButton = styled.button`
    padding: 8px 15px;
    border: none;
    background-color: #f50057;
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

function NewProduct({product, onBuyNow}) {
    
    return (
        <CardContainer>
            <CardHeader>{product.name.substring(0, 44)}</CardHeader>
            <CardContent>
                <div className="image">
                    <img width="180" src={product.imageURL} alt="" />
                </div>
                <div className="description">
                    <CardText>
                        {product.description.substring(0, 100)}
                    </CardText>
                    <CardButtonArea>
                        <ProductCardPrice> MRP Rs.{product.price} </ProductCardPrice>
                        <BuyNowButton title="large" onClick={onBuyNow}>
                            Buy Now
                        </BuyNowButton>
                        <BuyNowButton  title="small" onClick={onBuyNow}>
                            Buy Now @ MRP Rs.{product.price}
                        </BuyNowButton>
                    </CardButtonArea>
                </div>
            </CardContent>
        </CardContainer>
    );
}

export default NewProduct;