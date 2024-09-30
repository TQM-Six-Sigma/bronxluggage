import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide1 from './FBBrics';
import Slide2 from './FBBriggRiley';
import Slide3 from './FBDelseyRicardo';
import Slide4 from './FBSamsonite';
import Slide5 from './FBTravelPro';
import Slide6 from './FBAffordableBrands';
import Slide7 from './AboutUs';
import Slide8 from './FeatureBrand';

const Content = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Slide1 />
            </Carousel.Item>
            <Carousel.Item>
                <Slide2 />
            </Carousel.Item>
            <Carousel.Item>
                <Slide3 />
            </Carousel.Item>
            <Carousel.Item>
                <Slide4 />
            </Carousel.Item>
            <Carousel.Item>
                <Slide5 />
            </Carousel.Item>
            <Carousel.Item>
                <Slide6 />
            </Carousel.Item>
            <Carousel.Item>
                <Slide7 />
            </Carousel.Item>
            <Carousel.Item>
                <Slide8 />
            </Carousel.Item>
        </Carousel>
    );
}
export default Content;
