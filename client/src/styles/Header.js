import styled from "styled-components";

const HeaderStyle = styled.header`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 1100px;
    margin: 0 auto;
    align-items: flex-end;

    .logo {
        padding: 10px 0px;
    }

    .logo img {
        width: 175px;
        height: 70px;
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
        width: auto;

        .logo {
            padding: 0px;
        }

        .logo img {
            width: 100px;
            height: 40px;
        }
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        grid-template-columns: 1fr 2fr  1fr;
        width: auto;

        .logo {
            padding: 0px;
        }

        .logo img {
            height: 70px;
        }
    }
`;

const AuthCartStylesContainer = styled.div`
    justify-self: flex-end;
    width: 120px;
`

const NavigationStylesContainer = styled.div`
    margin-bottom: 15px;
    a {
        text-decoration: none;
        padding: 0 20px;
        font-weight: 500;
        font-size: 0.9rem;
        color: #767676;
    }

    @media (max-width: 767px) {
        display: none;
    }
`

const AuthStyles = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;

    a {
        font-size: 0.8rem;
        margin-right: 10px;
        color: #000;
        font-weight: 500;
    }

    @media (max-width: 767px) {
        display: none;
    }
    
`

const CartStyles = styled.div`
    background-color: #ddd;
    padding: 4px 20px;
    position: relative;

    span {
        top: 7px;
        position: absolute;
    }
`

export { HeaderStyle, AuthCartStylesContainer, NavigationStylesContainer, AuthStyles, CartStyles };