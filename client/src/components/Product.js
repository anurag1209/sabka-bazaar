import React from "react";
import { ProductCardPrice, CardContainer, CardHeader, CardContent, CardText, BuyNowButton, CardButtonArea } from "../styles/ProductStyles";

function Product({product, onBuyNow}) {

    return (
        <CardContainer>
            <CardHeader>{product.name.substring(0, 44)}</CardHeader>
            <CardContent>
                <div className="image">
                    <img width="180" src={product.imageURL} alt="" />
                </div>
                <div className="description">
                    <CardText>
                        {product.description.substring(0, 90)}
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

export default Product;