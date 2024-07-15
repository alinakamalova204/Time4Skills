import React from 'react';
import style from './styles.module.scss';

interface ReviewProps {
    skill: string;
    stars: number;
    name: string;
    review: string;
}

const Review: React.FC<ReviewProps> = ({ skill, stars, name, review }) => {
    return (
        <div className={style.review}>
            <h2>{skill}</h2>
            <div className={style.stars}>{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</div>
            <h3>{name}</h3>
            <p>{review}</p>
        </div>
    );
};

export default Review;
