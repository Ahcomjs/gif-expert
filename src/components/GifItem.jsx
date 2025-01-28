import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
    return (
        <div className="gif-item-container-card">
            <img src={url} alt={title} className="gif-card-image" />
            <p className="gif-title">{title}</p>
        </div>
    );
};


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}






