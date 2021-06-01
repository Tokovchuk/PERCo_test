import './App.css';
import React, {useState} from 'react';
import Gallery from './components/Gallery';
import SelectedImage from './components/SelectedImage';

function App() {

    const URL = 'https://foto-konkursy.ru/wp-content/uploads/samaya-krasivaya-strana-2019-120.jpg';
    let tempData = [];
    for (let i = 1; i <= 20; i++) {
        tempData.push(URL);
    }

    const galleryData = tempData.map((i) => {
        return {
            id: Math.ceil(Math.random() * 100000).toString(16),
            url: i,
            liked: false,
        };
    });

    const [items, setItems] = useState(galleryData);
    const [viewMode, setViewMode] = useState(false);
    const [image, setImage] = useState(null);

    const closeSelectedImageOnPressEsc = (e) => {
        if (e.key === 'Escape') {
            offViewMode();
        }
    };

    const onViewMode = (image) => {
        setViewMode(true);
        setImage(image);
        document.addEventListener('keydown', closeSelectedImageOnPressEsc);
        document.querySelector('body').style.overflow = 'hidden';
    };

    const offViewMode = () => {
        setViewMode(false);
        setImage(null);
        document.removeEventListener('keydown', closeSelectedImageOnPressEsc);
        document.querySelector('body').style.overflow = 'auto';
    };

    const toggleLike = (id) => {
        setItems(items.map(item => {
            return item.id === id
                ? {...item, liked: !item.liked}
                : {...item};
        }));
    };

    return (
        <div className="App">
            <h1>Gallery</h1>
            <div className='gallery'>
                <Gallery data={items} handleClick={onViewMode}/>
            </div>
            {
                viewMode && <SelectedImage handleClick={offViewMode}
                                           toggleLike={toggleLike}
                                           image={image}
                />
            }
        </div>
    );
}

export default App;
