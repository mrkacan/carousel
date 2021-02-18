import React from "react";
import {motion} from "framer-motion"


interface Props {
    width: number,
    imageURL: string,
    user: string,
    likes: number,
    isActive: boolean,
}

const CarouselItem: React.FC<Props> = ({
                                           width,
                                           isActive,
                                           imageURL,
                                           user,
                                           likes
                                       }) => {
    return (
        <motion.div
            animate={{opacity: isActive ? 1 : 0.3, scale: isActive ? 1 : 0.9}}
            transition={{ease: "easeOut", duration: .5}}
            style={{
                width: width,
            }}
        >
            <img
                className="bg-white carousel-item-image"
                style={{
                    width: width,
                    minWidth: width,
                }}
                src={imageURL}
            />
            <div className="text-center">
                {user}
            </div>
            <div className="text-center">
                {`Likes: ${likes}`}
            </div>
        </motion.div>
    )

}

export default CarouselItem
