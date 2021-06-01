import React from 'react';

const Gallery = ({data, handleClick}) => {

    return (
        data.map((item) => {
            return <a href='#' key={item.id}
                      className='gallery__item'
                      onClick={() => handleClick(item)}>
                <img src={item.url} alt='some photo'/>
            </a>
        }))
};

export default Gallery;