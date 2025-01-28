export const getGifs = async (category, tags = '') => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=OBQCdeYVlF5sLoP4w87g0A1C1VJadBNs&q=${category}+${tags}&limit=50`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};
