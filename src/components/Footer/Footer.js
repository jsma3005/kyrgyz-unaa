import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="centerFooter">
                <div className="foot">
                    <ol>
                        <li>
                            <Link to="/" className="bolds">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                Продукция
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link to="/news">
                                Новости
                            </Link>
                        </li>
                        <li>
                            <Link to="/certificate">
                                Сертификаты
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts">
                                Контакты
                            </Link>
                        </li>
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                                О нас
                            </b>
                        </li>
                        <li>
                            <a href="about.html">
                                Описание
                            </a>
                        </li>
                        <li>
                            <a href="about.html">
                                Смотреть видео
                            </a>
                        </li>
                    </ol>

                    <hr />

                    <ol>
                        <li>
                            <b>
                                Продукция
                            </b>
                        </li>
                        <li>
                            <a href="products.html">
                                Турбины
                            </a>
                        </li>
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                                Новости
                            </b>
                        </li>
                        <li>
                            <Link to="/news">
                                Новости завода
                            </Link>
                        </li>
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                                Контакты
                            </b>
                        </li>
                        <li>
                            <a href="contacts.html">
                                Адрес
                            </a>
                        </li>
                        <li>
                            <a href="contacts.html">
                                Форма обратной связи
                            </a>
                        </li>
                    
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                                Горячая линия
                            </b>
                        </li>
                        <li>
                            <a href="tel:+996 (990) 980 980">
                                <i className="fa fa-phone"></i>
                                +996 (990) 980 980
                            </a>
                        </li>
                    </ol>
                </div>
                <hr />
                <div className="polit">
                    <ul className="osoo">
                        <li>
                            ОсОО Кыргыз Унаа Курулуш © 2021
                        </li>
                    </ul>
                    <ul className="icons">
                        <li>
                            <a href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;