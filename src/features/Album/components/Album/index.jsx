import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Album.propTypes = {
    album: PropTypes.array.isRequired,
};

function Album({ album }) {
    return (
        <div className="album">
            <div className="album__thumnail">
                <img src={album.thumnailUrl} alt={album.name} />

                {/* Orther control */}
            </div>

            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default Album;