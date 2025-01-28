import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
    const handleDownload = () => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = `${title}.gif`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch(error => console.error('Error al descargar el GIF:', error));
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
    }

    return (
        <div className="gif-item-container-card">
            <img src={url} alt={title} className="gif-card-image" />
            <p className="gif-title">{title}</p>
            <div className='button-container'>
                <button onClick={handleDownload}>Download</button>
                <button onClick={handleCopyLink}>Copy Link</button>
            </div>
        </div>
    );
};

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}












