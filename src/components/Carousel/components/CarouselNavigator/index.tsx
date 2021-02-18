import React from "react";

interface Props {
    showPreviousSlide: React.MouseEventHandler<HTMLButtonElement>,
    showNextSlide: React.MouseEventHandler<HTMLButtonElement>,
}

const CarouselNavigator: React.FC<Props> = ({
                                               showPreviousSlide,
                                               showNextSlide,
                                           }) => {
    return (
        <div className="flex flex-row justify-center mt-6 mb-6">
            <div className="inline-flex">
                <button
                    onClick={showPreviousSlide}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                    Prev
                </button>
                <button
                    onClick={showNextSlide}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default CarouselNavigator
