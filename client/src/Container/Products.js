import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { itemExistIncart } from "../libs/util"

import Product from '../Components/Product';
import Sidebar from '../Components/Sidebar';
import { Link } from 'react-router-dom';

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
    left: 50%;
    text-align: center;
    background-color: #bbb;
    padding: 10px 20px;

    span {
        margin: 0 15px;
        font-weight: bold;
    }

    @media (max-width: 767px) {
        left: 10%;
        top: 20%;
    }
`;



class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: props.productId || "",
            error: null,
            displayError: false
        }
    }

    handleCategoryChange = (id) => {
        this.props.history.push("/products/" + id);
        this.setState({
            selectedCategory: id
        });
    }

    handleBuyNowClick = (product) => {
        let newCartItem, existingCartItems = this.props.cartItems;
        if (!this.props.isAuth) {
            this.setState({
                error: "Please login to add products",
                displayError: true
            });
            return false;
        } else {
            // empty cart
            if(this.props.cartItems && this.props.cartItems.length === 0) {
                newCartItem = new Array({product: product, quantity: 1 });
                this.props.addToCart(newCartItem);
            } else {
                // Existing Item
                let info = itemExistIncart(existingCartItems, product);
                if(info.found) {
                    newCartItem = existingCartItems.map(item => {
                        if(item.product.id === product.id){
                            item.quantity += 1;
                        }
                        return item;
                    });
                    this.props.addToCart(newCartItem);
                } else {
                    // Or New Item
                    newCartItem = existingCartItems.concat({product: product, quantity: 1 });
                    this.props.addToCart(newCartItem);
                }
            }
        }
    }

    render() {
        let { categories, products, productId } = this.props;

        if (this.state.selectedCategory) {
            products = products.filter(prod => prod.category === this.state.selectedCategory);
        }
        else if (productId) {
            products = products.filter(prod => prod.category === productId);
        }

        return (
            <ProductsStyle>
                { this.state.error ? <ErrorContainer><p>Please login to add products</p><span><Link to="/login">Login</Link></span><span onClick={() => this.setState({error: null})}><Link to="#">Cancel</Link></span></ErrorContainer> : null }
                <Sidebar 
                    categories={categories} 
                    productId={productId}
                    clicked={(id) => this.handleCategoryChange(id)}
                />
                <ProductsListStyle>
                    { products.map( data => <Product key={data.id} product={data} onBuyNow={() => this.handleBuyNowClick(data)}/>)}
                </ProductsListStyle>
            </ProductsStyle>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        products: state.products,
        isAuth: state.auth,
        cartItems: state.cartItems
    }
}

    const mapDispatchToProps = dispatch => {
        return {
            addToCart: (data) => dispatch({type: "ADD_TO_CART", payload: data })
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));