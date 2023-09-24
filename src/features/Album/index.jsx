import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/index';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Ở đây có những bản hit cực chill',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/2/e/3/92e34e8a92ba589ba41c078bfbbf57f0.jpg',
        },
        {
            id: 2,
            name: 'V-pop sâu lắng trên phím đàn Piano',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/9/7/2/2972234fa802fb21d3208041fcadc482.jpg',
        },
        {
            id: 3,
            name: 'Đóng băng thời gian, theo những ca khúc hit',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg',
        },
    ]
    return (
        <div>
            <h2>Có thể bạn thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;