import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import { connect } from "react-redux";

import { calculateTotal, itemExistIncart } from "../libs/util";
import { CartWrapperStyle, CartItemsStyle, CartItemStyle, CartDescriptionStyle, CartHeader, CartFooter, CartFooterButtonText, LowestPriceWrapper } from "../styles/CartStyles";

// Material ui stylings
const getModalStyle = ()  => ({ top: `50%`, left: `50%`,transform: `translate(-50%, -50%)` }) ;
const useStyles = makeStyles((theme) => ({
  paper: { position: 'absolute', width: 400, minHeight: 500, backgroundColor: theme.palette.background.paper, border: '0px solid #000', boxShadow: theme.shadows[5] },
  closeButton: { fontSize: "0.7rem" }
}));
const emptyCartStyle = () => ({ alignItems: "center", justifyContent: "center" });


function CartModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuantityChange = (item, operation) => {
    const cartData = props.cartData;
    const product = item.product;
    const itemIndex = itemExistIncart(cartData, product).index;
    const newPayload = [...cartData];
    
    if (operation === "increase") {
      newPayload[itemIndex].quantity += 1;
    } else {
      if(newPayload[itemIndex].quantity > 1) {
        newPayload[itemIndex].quantity -= 1
      };
    }
    props.addToCart(newPayload);
  }

  // Empty cart conditions
  let cartItems = <><h3>No items in your cart</h3><p>Your favourite items are just a click away</p></>;
  let cartFooter = <CartFooterButtonText shadowEnable="red" onClick={handleClose}>Start Shopping</CartFooterButtonText>;
  
  // Populating cart item data
  if(props.cartData && props.cartData.length) {
    cartItems = props.cartData.map(item => {
        return (
            <CartItemStyle key={item.product.id}>
                <div className="cart-image">
                    <img width="100" src={item.product.imageURL} alt={item.product.name} />
                </div>
                <CartDescriptionStyle>
                    <h3>{item.product.name}</h3>
                    <p><span><button onClick={() => handleQuantityChange(item, "decrease")}>-</button> {item.quantity} <button onClick={() => handleQuantityChange(item, "increase")}>+</button> X Rs {item.product.price}</span> <span>{+item.product.price * +item.quantity}</span></p>
                </CartDescriptionStyle>
            </CartItemStyle>)
    });

    let LowestPrice = (<LowestPriceWrapper>
        <img src="/static/images/lowest-price.png" alt="" />
        <p>You wont find it cheaper anywhere</p>
    </LowestPriceWrapper>);

    cartItems.push(LowestPrice);

    cartFooter = <><p>Promo code can be applied on payment page</p><CartFooterButtonText shadowEnable="red"><span>Proceed to Checkout</span><span>Rs.{calculateTotal(props.cartData)}</span></CartFooterButtonText></>
  }

  const body = (
    <CartWrapperStyle style={modalStyle} className={classes.paper}>
        <div className="carts">
            <CartHeader>
              <span>My Cart (<span>{props.children}</span>)</span>
              <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>X</IconButton>
            </CartHeader>
            <CartItemsStyle style={(props.cartData && props.cartData.length) ? {} : emptyCartStyle()}>{cartItems}</CartItemsStyle>
            <CartFooter>{cartFooter}</CartFooter>
        </div>
    </CartWrapperStyle>
  );

  return (
    <>
      <span onClick={handleOpen}>
        {props.children}
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="cart"
        aria-describedby="shopping cart"
      >
        {body}
      </Modal>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      addToCart: (data) => dispatch({type: "ADD_TO_CART", payload: data })
  }
}

export default connect(null, mapDispatchToProps)(CartModal);