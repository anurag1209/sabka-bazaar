import styled from 'styled-components';

const CartWrapperStyle = styled.div`
  @media (max-width: 767px) {
    width: 100% !important;
    height: 100vh;
    border: none !important;
  }
`;

const CartItemsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 15px 0px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 400px;

  @media (max-width: 767px) {
    min-height: 74vh;
  }
`;

const CartItemStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  margin: 0 5px 20px 5px;
  padding: 5px 15px;
  box-shadow: 0px 0px 2px 0px #ccc;
  background-color: #fff;
`;

const CartDescriptionStyle = styled.div`
    margin-left: 15px;
    h3 {
      font-size: 1rem;
      margin-bottom: 10px;
    }
    p {
      display: flex;
      justify-content: space-between;
    }
    button {
      width: 25px;
      height: 20px;
      border: 1px solid;
      border-radius: 25%;
      cursor: pointer;
      background-color: #c17070;
    }
`;

const CartHeader = styled.div`
  padding: 5px 15px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: #fff;
  }
`;

const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const CartFooterButtonText = styled.div`
  width: 90%;
  margin: 10px;
  padding: 10px;
  color: #fff;
  border: navajowhite;
  background-color: #be2352;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
`;

export { CartWrapperStyle, CartItemsStyle, CartItemStyle, CartDescriptionStyle, CartHeader, CartFooter, CartFooterButtonText };