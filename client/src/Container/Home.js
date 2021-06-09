import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import Carousel from "../Components/Carousel";

const CategoryListItem = styled.div`
    box-shadow: 2px 0px 15px 2px #b6a1a1;
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
            line-height: 1.2;
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

class Home extends Component {

    handleCategory = (id) => {
        this.props.history.push("/products/" + id);
    }

    render() {
        return (
            <div className="home">
                <Carousel banners={this.props.banners}/>
                <div className="category-list">
                    { this.props.categories.map((category, index) => (
                        (index % 2) === 0 ? 
                            <CategoryListItem key={category.id}>
                                <CategoryImage className="image">
                                    <img src={category.imageUrl} alt={category.name} />    
                                </CategoryImage>
                                <CategoryDescription>
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                    <button onClick={() => this.handleCategory(category.id)} variant="contained" color="secondary">{"Explore " + category.name.replace("and ", "").replace(" ", "-").toLowerCase()}</button>
                                </CategoryDescription>
                            </CategoryListItem> :
                            <CategoryListItem key={category.id}>
                                <CategoryDescription>
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                    <button onClick={() => this.handleCategory(category.id)} variant="contained" color="secondary">{"Explore " + category.name.replace("and ", "").replace(" ", "-").toLowerCase()}</button>
                                </CategoryDescription>
                                <CategoryImage>
                                    <img src={category.imageUrl} alt={category.name} />    
                                </CategoryImage>
                            </CategoryListItem>
                    ))}
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        banners: state.banners
    }
}

export default connect(mapStateToProps)(Home);