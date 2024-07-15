import React from "react";
import style from './index.module.scss'
import Header from "../../components/Header";
import ReviewsCarousel from "../../components/ReviewsCarousel/ReviewsCarousel.tsx";
import Footer from "../../components/Footer";

const reviews = [
    {
        skill: 'JavaScript',
        stars: 5,
        name: 'John Doe',
        review: 'Great skill set, very knowledgeable.',
    },
    {
        skill: 'React',
        stars: 4,
        name: 'Jane Smith',
        review: 'Very proficient in React, highly recommend.',
    },
    {
        skill: 'TypeScript',
        stars: 5,
        name: 'Mike Johnson',
        review: 'Excellent TypeScript skills, very professional.',
    },
];

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <div className={style.container}>
                <h1 className={style.h1}>Добро пожаловать!</h1>
                <span className={style.span}>Обменивайтесь навыкам в Time4Skills</span>
                <button className={style.button}>Создать аккаунт</button>
                <button className={style.button}>Поиск навыков</button>
            </div>
            <div>
                <h1>Популярные навыки</h1>
            </div>
            <div>
                <h1>Отзывы</h1>
                <ReviewsCarousel reviews={reviews}/>
            </div>
            <Footer/>
        </>
    )
}
export default Home