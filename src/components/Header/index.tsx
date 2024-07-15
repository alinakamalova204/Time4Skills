import icon from './../../assets/Icon.png'
import style from './style.module.scss'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={style.container}>
              <span className={style.search}>
                <img className={style.img} src={icon} alt="search icon" />
                <span>Time4Skills</span>
              </span>
            <div className={style.btn}>
                <Link to={'/chat'}><button className={style.button}>Чат</button></Link>
                <Link to={'/chat'}><button className={style.button}>Войти</button></Link>
                <Link to={'/chat'}><button className={style.sign}>Зарегистрироваться</button></Link>
            </div>
        </div>
    )
}
export default Header