import React, { useEffect, useState, useRef } from 'react';
import Review from './Review';
import style from './styles.module.scss';

interface ReviewData {
    skill: string;
    stars: number;
    name: string;
    review: string;
}

interface ReviewsCarouselProps {
    reviews: ReviewData[];
}

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    let userScrolling = false;

    const handleScroll = () => {
        userScrolling = true;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!userScrolling) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }
            userScrolling = false;
        }, 5000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (carousel) {
                carousel.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                top: 0,
                left: currentIndex * carouselRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    return (
        <div className={style.carousel} ref={carouselRef}>
            {reviews.map((review, index) => (
                <div key={index} style={{ display: 'inline-block', width: '100%', boxSizing: 'border-box' }}>
                    <Review {...review} />
                </div>
            ))}
        </div>
    );
};

export default ReviewsCarousel;
