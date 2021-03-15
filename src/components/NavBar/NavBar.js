import './NavBar.css';
import LogoWhite from '../../assets/logowhite.png';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { enLangAction, ruLangAction } from '../../redux/actions/languageAction';
import { HashLink } from 'react-router-hash-link'
import { useEffect } from 'react';
// import LiveContacts from '../LiveContacts/LiveContacts';
import Bounce from 'react-reveal/Bounce';

const NavBar = () => {
    const dispatch = useDispatch();
    const {selectedLangSlug, selectedLang: {navbar}} = useSelector(s => s.langs)

    const handleChangeLangEn = e => {
        e.preventDefault();
        dispatch(enLangAction());
        localStorage.setItem('kyrgyzUnaaLang', 'RU')
    }

    const handleChangeLangRu = e => {
        e.preventDefault();
        dispatch(ruLangAction());
        localStorage.setItem('kyrgyzUnaaLang', 'EN')
    }

    useEffect(() => {
        const languageState = localStorage.getItem('kyrgyzUnaaLang');
        languageState === 'RU' ? dispatch(enLangAction()) : dispatch(ruLangAction());
    }, [dispatch])


    return (
        <Bounce top>
            <header>
                <nav id="nav" className=" navbar navbar-expand-lg navbar-dark">
                    <div className="container containerFluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img src={LogoWhite} width="60px" alt="Logo" />
                        </Link>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    navbar.links.map(({id, title, link}) => (
                                        <li key={id} className="nav-item">
                                            <NavLink exact className="nav-link" aria-current="page" to={link}>{title}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                            <ol className="navbar-nav rightSideNavigation">
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        {selectedLangSlug}
                                    </button>
                                    <ul className="dropdown-menu"  aria-labelledby="navbarDropdown">
                                        <li>
                                            <button onClick={handleChangeLangEn} className="dropdown-item">
                                                ENG
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={handleChangeLangRu} className="dropdown-item">
                                                RU
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <HashLink to="/contacts/#map-content" className="nav-link">
                                        <i className="fa fa-clock"></i>
                                        08:00 - 18:00
                                    </HashLink>
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
        </Bounce>

    )
}

export default NavBar;