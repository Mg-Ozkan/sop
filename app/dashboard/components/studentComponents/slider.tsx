import Carousel from "react-multi-carousel";
import ProjectListing from "./projectListing";
import { SOP } from "../../../api/flows/route"

import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';

import "react-multi-carousel/lib/styles.css";
import "./slider.css";

interface SliderProps {
    projects: SOP[]
}

//reflect uml class once definitive

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        slidesToSlide: 1,
        items: 4,
        partialVisibilityGutter: 40
    },
};

const responsiveSearch = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
        partialVisibilityGutter: 0
    },
}

interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
}

const CarouselButtonGroup = ({ next, previous }:CarouselButtonGroupProps) => {
    return (
      <div>
        <div className="custom-arrow-left button" onClick={() => previous!()}>
            <div className="custom-arrow-left__arrow"/>
        </div>
        <div className="custom-arrow-right button" onClick={() => next!()}>
            <div className="custom-arrow-right__arrow"/>
        </div>
      </div>
    );
};

export default function Slider({ projects }: SliderProps) {
    return (
        <div className="slider-wrapper">
            <Carousel
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<CarouselButtonGroup />}
                responsive={projects.length < 5 ? {desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    slidesToSlide: 1,
                    items: projects.length,
                    paritialVisibilityGutter: 0
                }} : responsive}
                partialVisible={true}
                containerClass="react-multi-carousel-list"
                itemClass="react-multi-carousel-item"
            >
                {projects.map((project, index) => {
                    return (
                        <div className="slider" key={index}>
                            <ProjectListing key={project.id} id={project.id} title={project.title} editDate={project.editDate} />
                        </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}