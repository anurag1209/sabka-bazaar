import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
  padding: 10px 0px;

  @media (max-width: 1024px) {
    width: auto;
    justify-content: center;

    p {
      font-size: 0.7rem;
    }
  }
`;

function Footer(props) {
    return (
        <FooterStyle>
          <p>Copyright &copy; 2011-18 Sabka bazaar Groceries Supply Pvt Ltd</p>
        </FooterStyle>
    )
}

export default Footer;