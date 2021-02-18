const url = 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo';

export const getCarouselItems = async (): Promise<void> => {

    const response = await (await fetch(url, {
        method: 'GET'
    })).json()

    const {
        hits
    } = response || {}

    return hits || []
}
