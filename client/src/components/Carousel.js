import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const BannerImageStyle = styled.img `
    height: 250px;

    @media (max-width: 1100px) {
        height: auto;
    }
`;

function Banner(props) {
    return (
        <Carousel autoPlay showThumbs={false}>
            { props.banners.map((banner, index) => (
                <BannerImageStyle key={index} alt="" src={banner.bannerImageUrl}></BannerImageStyle>
            ))}
        </Carousel>
    )
};

export default Banner;
