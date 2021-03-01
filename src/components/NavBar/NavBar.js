import './NavBar.css';
import LogoWhite from '../../assets/logowhite.png';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className=" navbar navbar-expand-lg navbar-dark">
                <div className="container containerFluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">
                        <img src={LogoWhite} width="60px" alt="Logo" />
                    </Link>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" aria-current="page"   to="/">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/products">Продукции</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">О нас</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/news">Новости</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/certificate">Сертификаты</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contacts">Контакты</NavLink>
                            </li>
                        </ul>
                        <ol className="navbar-nav">
                        <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        RU
                                    </a>
                                    <ul className="dropdown-menu"  aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                ENG
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                KG
                                            </a>
                                        </li>
                                    </ul>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <i className="fa fa-clock"></i>
                                    08:00 - 18:00
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="tel:+996 (990) 980 980" className="nav-link tel">
                                    <i className="fa fa-phone"></i>
                                    <span>
                                        +996 (990) 980 980
                                    </span>
                                </a>
                            </li>
                           
                        </ol>
                    </div>
                </div>
            </nav>
        </header> 

    )
}

export default NavBar;