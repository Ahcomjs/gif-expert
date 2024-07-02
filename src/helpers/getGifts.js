
export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=OBQCdeYVlF5sLoP4w87g0A1C1VJadBNs&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}