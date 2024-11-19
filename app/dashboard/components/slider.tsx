import Carousel from "react-multi-carousel";
import ProjectListing from "./projectListing"

import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';

import "react-multi-carousel/lib/styles.css";
import "./slider.css";

interface SliderProps {
    projects: Project[]
}

//reflect uml class once definitive
interface Project {
    id: number;
    title: string;
    date: string;
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
        partialVisibilityGutter: 40
    },
};


interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
}

const CarouselButtonGroup = ({ next, previous }:CarouselButtonGroupProps) => {
    return (
      <div>
            <button className="custom-arrow-left button" onClick={() => previous!()} />
            <button className="custom-arrow-right button" onClick={() => next!()} />
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
                responsive={responsive}
                partialVisible={true}
                containerClass="react-multi-carousel-list"
                itemClass="react-multi-carousel-item"
            >
                {projects.map((project, index) => {
                    return (
                        <div className="slider" key={index}>
                            <ProjectListing key={project.id} id={project.id} title={project.title} date={project.date} />
                        </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}