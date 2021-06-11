import React from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';

import Home from "../container/Home";
import Products from "../container/Products";
import Login from "./Login";
import Register from "./Register";
import FilteredProducts from "./FilteredProducts";

const ContentContainerStyles = styled.div`
    display: flex;
    width: 1100px;
    margin: 0 auto;
    padding: 10px 0px;

    @media (max-width: 767px) {
        width: auto;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: auto;
    }
`;

function RouteComp(props) {
    return (
        <ContentContainerStyles>
            <Route path="/" exact component={Home} />
            <Route path="/products/:id" component={FilteredProducts} />
            <Route path="/products" exact component={Products} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </ContentContainerStyles>
    );
  }
  
  export default RouteComp;
  