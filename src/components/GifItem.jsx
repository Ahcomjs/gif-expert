export const GifItem = ({ title, url }) => {
    console.log({ title, url });
    return (
        <div className="gif-item-container-card">
            <img src={url} alt={title} className="gif-card-image" />
            <p className="gif-title">{title}</p>
        </div>
    );
};
