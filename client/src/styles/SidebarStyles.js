import styled from 'styled-components';

const SidebarStyle = styled.div`
    background-color: #e7e7e7c2;
    max-width: 250px;
    padding: 0 15px;

    @media (max-width: 767px) {
        {
            max-width: 100%;
            background-color: #fff;
            width: 100%;
            padding: 0;
        }
    }
`;

const ArrowStyle = styled.span`
    position: absolute;
    right: 16px;
    top: 62px;
    color: #fff;
    font-size: 1.5rem;
    transform: rotate(90deg);
`;

const AccordionWrapper = styled.div`
    display: none;
    @media (max-width: 767px) {
        {
            display: block;
        }

        & > div {
            border-radius: 0px !important;
            background-color: #c6095ec7;
            position: relative;
            color: #fff;
        } 

        a {
            color: #fff;
        }
    }
`;

const SidebarItemStyle = styled.div`
    line-height: 2;
    padding: 7px 25px;
    cursor: pointer;
    border-bottom: 1px solid #b2a8a8;

    a {
        font-weight: 400;
        color: #322a2abf;
    }

    &.active {
        background-color: #e1dcdc;
    }

    &:hover {
        background-color: #e1dcdc;
    }

    @media (max-width: 1100px) {
        a {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 767px) {
        {
            display: none;
        }
    }
`;

export { SidebarStyle, AccordionWrapper, SidebarItemStyle, ArrowStyle };