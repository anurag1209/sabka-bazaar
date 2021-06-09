import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Page from './Components/Page';
import RouteComp from "./Components/Route";
import { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

function App(props) {

  let { loadCategories, loadBanners, loadProducts } = props;

  useEffect(() => {
    axios.get("http://localhost:5000/categories/")
      .then(function(res) {
        const categories = res.data.filter(cat => cat.enabled);
        loadCategories(categories);
      })
      .catch(function(err){
        // console.log(err);
      })
  });

  useEffect(() => {
    axios.get("http://localhost:5000/banners/")
      .then(function(res) {
        loadBanners(res.data);
      })
      .catch(function(err){
        // console.log(err);
      })
  });

  useEffect(() => {
    axios.get("http://localhost:5000/products/")
      .then(function(res) {
        loadProducts(res.data);
      })
      .catch(function(err){
        // console.log(err);
      })
  })

  return (
    <div className="App">
        <Page>
          <RouteComp />
        </Page>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    loadCategories: (data) => dispatch({type: "LOAD_CATEGORIES", payload: data}),
    loadProducts: (data) => dispatch({type: "LOAD_PRODUCTS", payload: data}),
    loadBanners: (data) => dispatch({type: "LOAD_BANNERS", payload: data}),
  }
}

export default connect(null, mapDispatchToProps)(App);
