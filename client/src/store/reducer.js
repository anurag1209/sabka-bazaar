const initialState = {
  cartItems: [],
  auth: false,
  categories: [],
  banners: [],
  products: []
}

const reducer = (state = initialState, action) => {
    if(action.type === "LOAD_CATEGORIES") {
      return {
        ...state,
        categories: action.payload
      }
    }
    else if(action.type === "LOAD_PRODUCTS") {
      return {
        ...state,
        products: action.payload
      }
    }
    else if(action.type === "LOAD_BANNERS") {
      return {
        ...state,
        banners: action.payload
      }
    } else if(action.type === "LOGIN_SUCCESS") {
      return {
        ...state,
        auth: true
      }
    } else if(action.type === "ADD_TO_CART") {
      return {
        ...state,
        cartItems: action.payload
      }
    } else  {
      return state;
    }
}

export default reducer;