import React, { Component } from 'react';
import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import { CategoryListItem, CategoryImage, CategoryDescription } from "../styles/HomePageStyles";


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