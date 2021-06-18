import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from './Nav';
import Cart from './Cart';
import { cartItemQuantity } from "../libs/util";
import { HeaderStyle, AuthCartStylesContainer, NavigationStylesContainer, AuthStyles, CartStyles } from "../styles/Header";

function Header(props) {
    return (
        <div className="header">
          <HeaderStyle>
            <div className="logo">
                <Link to="/">
                    <img src="/static/images/logo.png" alt="" />
                </Link>
            </div>
            <NavigationStylesContainer>
                <Nav />
            </NavigationStylesContainer>
            <AuthCartStylesContainer>
                <AuthStyles>
                    <Link to="/login"><span>SignIn</span></Link>
                    <Link to="/register"><span>Register</span></Link>
                </AuthStyles>
                <CartStyles>
                    <img src="/static/images/cart.svg" alt="" width="30px"/> <Cart cartData={props.cart}>{cartItemQuantity(props.cart)} Items</Cart>
                </CartStyles>
            </AuthCartStylesContainer>
          </HeaderStyle>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cartItems
    }
}

export default connect(mapStateToProps)(Header);