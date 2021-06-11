import styled from 'styled-components';

const RegisterStyle = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

`;

const RegisterTextStyle = styled.div`
  margin-top: 2rem;
  flex: 1 1;

  p {
    font-size: 0.8rem;
    margin-top: 1rem;
    font-weight: 400;
  }

  @media (max-width: 767px) {
    margin-top: 0;

    h2 {
      text-align: center;
    }
  }
`;

const RegisterFormStyle = styled.div`
  flex: 1 1;

  @media (max-width: 767px) {
    margin: 0 auto;
    max-width: 85%;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
`;

export { RegisterStyle, RegisterTextStyle, RegisterFormStyle, ErrorMessage };