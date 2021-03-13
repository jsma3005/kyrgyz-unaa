import moment from 'moment';
import { useSelector } from 'react-redux';
import { NavHashLink } from 'react-router-hash-link'
import LiveContacts from '../LiveContacts/LiveContacts';
import './Footer.css';

const Footer = () => {
    const currentYear = moment().format('YYYY');
    const {selectedLang: {footer}} = useSelector(s => s.langs)

    return (
        <footer>
            <LiveContacts />
            <div className="centerFooter">
                <div className="foot">
                    <ol>
                        {
                            footer.links.map(({id, title, link}) => (
                                <li key={id}>
                                    <NavHashLink activeClassName='bolds' to={link}>
                                        {title}
                                    </NavHashLink>
                                </li>
                            ))
                        }
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                                {footer.about.title}
                            </b>
                        </li>
                        <li>
                            <NavHashLink activeClassName="bolds" to="/about/#about-content">
                                {footer.about.desc}
                            </NavHashLink>
                        </li>
                        <li>
                            <NavHashLink activeClassName='bolds' to="/about/#video">
                                {footer.about.video}
                            </NavHashLink>
                        </li>
                    </ol>

                    <hr />

                    <ol>
                        <li>
                            <b>
                                {footer.products.title}
                            </b>
                        </li>
                        <li>
                            <NavHashLink to="/products/#product-categories" activeClassName='bolds'>
                                {footer.products.all}
                            </NavHashLink>
                        </li>
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                                {footer.news.title}
                            </b>
                        </li>
                        <li>
                            <NavHashLink activeClassName='bolds' to="/news/#nav">
                            {footer.news.all}
                            </NavHashLink>
                        </li>
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                            {footer.contacts.title}
                            </b>
                        </li>
                        <li>
                            <NavHashLink activeClassName='bolds' to="/contacts/#map-content">
                            {footer.contacts.address}
                            </NavHashLink>
                        </li>
                        <li>
                            <NavHashLink activeClassName='bolds' to="/contacts/#contacts-us">
                            {footer.contacts.form}
                            </NavHashLink>
                        </li>
                    
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                                {footer.hotline}
                            </b>
                        </li>
                        <li>
                            <a href="tel:996(990)980980">
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
                            {footer.footTitle} {currentYear}
                        </li>
                    </ul>
                    <ul className="icons">
                        <li>
                            <a href="/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
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