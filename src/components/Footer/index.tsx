import React from "react";
import style from './style.module.scss'
const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.section}>
                <div className={style.about}>
                    <h2>О нас</h2>
                    <p>
                        Мы — платформа для обмена навыками, помогающая людям развиваться и делиться своими умениями. Присоединяйтесь к нам и начните учиться новому уже сегодня!
                    </p>
                </div>
                <div className={style.contact}>
                    <h2>Контакты</h2>
                    <p>Email: info@time4skills.ru</p>
                    <p>Телефон: +7 999 567 890</p>
                    <p>Адрес: Кремлевская 35, Казань, Россия</p>
                </div>
                <div className={style.links}>
                    <h2>Навигация</h2>
                    <nav>
                        <a href="#home">Главная</a>
                        <a href="#skills">Навыки</a>
                        <a href="#how-it-works">Как это работает</a>
                        <a href="#faq">FAQ</a>
                    </nav>
                </div>
                <div className={style.support}>
                    <h2>Поддержка</h2>
                    <nav>
                        <a href="#help-center">Центр поддержки</a>
                        <a href="#privacy-policy">Политика конфиденциальности</a>
                        <a href="#terms-of-service">Условия использования</a>
                    </nav>
                </div>
                <div className={style.social}>
                    <h2>Мы в соцсетях</h2>
                    <nav>
                        <a href="#facebook">Facebook</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#instagram">Instagram</a>
                        <a href="#linkedin">LinkedIn</a>
                    </nav>
                </div>
                <div className={style.news}>
                    <h2>Подписка на новости</h2>
                    <form>
                        <input type="email" placeholder="Ваш email" />
                        <button type="submit">Подписаться</button>
                    </form>
                </div>
            </div>
            <div className={style.bottom}>
                <p>&copy; {new Date().getFullYear()} Time4Skills. Все права защищены.</p>
            </div>
        </footer>
    );
};
export default Footer