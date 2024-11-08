import Carousel from "react-multi-carousel";
import ProjectListing from "./projectListing"
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
        slidesToSlide: 1 // optional, default to 1.
    },
};

export default function Slider({ projects }: SliderProps) {
    return (
        <div className="slider-wrapper">
            <Carousel
                responsive={responsive}
                partialVisible={true}
                containerClass="react-multi-carousel-list"
                itemClass="react-multi-carousel-item"
            >
                {projects.map((project, index) => {
                    return (
                        <div className="slider" key={index}>
                            <ProjectListing key={project.id} project={project} />
                        </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}