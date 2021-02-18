import React, {useState} from "react";
import LoadingIndicator from "../LoadingIndicator";
import CarouselItem from "./components/CarouselItem";
import {motion} from "framer-motion"
import CarouselNavigator from "./components/CarouselNavigator";

interface Props {
    width: number,
    column: number,
    loading?: boolean,
    items: object[],
}

const Carousel: React.FC<Props> = ({
                                       width,
                                       column,
                                       loading,
                                       items,
                                   }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const showPreviousSlide = (): void => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }
    const showNextSlide = (): void => {
        if (activeIndex + 1 < items.length) {
            setActiveIndex(activeIndex + 1)
        }
    }

    const getActiveIndexPosition = (): number => {

        if (activeIndex === 0) {
            return itemWidth
        }

        return ((activeIndex - 1) * (itemWidth)) * -1
    }

    const itemWidth = width / column;


    if (loading) {
        return <LoadingIndicator/>;
    }

    return (<div
        className="carousel-wrapper overflow-hidden"
        style={{
            width: width
        }}

    >
        <motion.div
            animate={{x: getActiveIndexPosition()}}
            transition={{ease: "easeOut", duration: .5}}
            className="flex flex-row"
        >
            {
                items.map((item: any, index: number) => {
                    const {
                        largeImageURL,
                        user,
                        likes,
                        id,
                    } = item;

                    return <CarouselItem
                        isActive={activeIndex === index}
                        key={`carousel_item_${id}`}
                        width={itemWidth}
                        imageURL={largeImageURL}
                        user={user}
                        likes={likes}
                    />
                })
            }
        </motion.div>
        <CarouselNavigator showPreviousSlide={showPreviousSlide} showNextSlide={showNextSlide}/>
    </div>)

}

export default Carousel
