import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { itemExistIncart } from "../libs/util"
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';
import { ProductsStyle, ProductsListStyle, ErrorContainer } from "../styles/ProductStyles";

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