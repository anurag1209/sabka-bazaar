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
    background-color: #ccc;

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
  align-items: center;
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
      font-size: 0.8rem;
      font-weight: 500;
    }
    button {
      width: 20px;
      height: 20px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      background-color: #be2352;
      margin: 0 10px;
      color: #fff;

      &:nth-child(odd) {
        margin-left: 0;
      }
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
  box-shadow: 3px 8px 14px 4px #9b6c6c};
  padding-top: 10px;
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

const LowestPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
  padding: 5px;

  p {
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

export { CartWrapperStyle, CartItemsStyle, CartItemStyle, CartDescriptionStyle, CartHeader, CartFooter, CartFooterButtonText, LowestPriceWrapper };