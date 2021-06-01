import React, {useState} from 'react';

const SelectedImage = ({handleClick, toggleLike, image}) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        const newComment = {
            id: new Date().getTime(),
            text: comment
        };
        e.preventDefault();
        if(newComment.text) {
            setComments([...comments, newComment]);
            setComment('');
        }
    };

    return (
        <div className='overlay'>
            <form onSubmit={handleSubmit}
                  className='overlay__form'>
                <button onClick={handleClick}
                        className='overlay__close'>x
                </button>
                <img src={image.url} alt="photo"/>
                <div className='overlay__comments'>
                    {
                        comments.map(i => {
                            return <span key={i.id}>{i.text}</span>;
                        })
                    }
                </div>
                <div className='overlay__comment-input'>
                    <input type="text"
                           value={comment}
                           placeholder='Введите комментарий'
                           onChange={(e) => setComment(e.currentTarget.value)}/>
                    <button type='submit'>add comment</button>
                    <label className='overlay__like'>
                        <input type="checkbox"
                               className={image.liked ?
                                   'visually-hidden checked' :
                                   'visually-hidden'}
                               onChange={() => toggleLike(image.id)}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 -256 1850 1850" width='20' height='20'
                             fill='grey'>
                            <g transform="matrix(1,0,0,-1,37.966102,1343.4237)">
                                <path
                                    d="m 896,-128 q -26,0 -44,18 L 228,492 q -10,8 -27.5,26 Q 183,536 145,583.5 107,631 77,681 47,731 23.5,802 0,873 0,940 q 0,220 127,344 127,124 351,124 62,0 126.5,-21.5 64.5,-21.5 120,-58 55.5,-36.5 95.5,-68.5 40,-32 76,-68 36,36 76,68 40,32 95.5,68.5 55.5,36.5 120,58 64.5,21.5 126.5,21.5 224,0 351,-124 127,-124 127,-344 0,-221 -229,-450 L 940,-110 q -18,-18 -44,-18"/>
                            </g>
                        </svg>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default SelectedImage;