import React, {SetStateAction, useEffect, useState} from 'react';
import './App.css';
import {getCarouselItems} from './common/services';
import Carousel from "./components/Carousel";

const App: React.FC<any> = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [carouselItems, setCarouselItems] = useState([])

    useEffect(() => {
        const getItems = async (): Promise<SetStateAction<any>> => {
            const items: any = await getCarouselItems()
            setCarouselItems(items)
            setIsLoading(false)
        }

        getItems()
    }, [])

    return (<div className="App">
        <div className="app-container">
            <Carousel
                loading={isLoading}
                width={900}
                column={3}
                items={carouselItems}
            />

        </div>
    </div>)
}


export default App;
