import { useSelector } from 'react-redux';
import './Contacts.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Contacts = () => {
    const {selectedLang: {contacts}} = useSelector(s => s.langs);
    

    return (
        <main>
           <section>
               <div className="bannerContacts">
                    <Fade left>
                        <div className="bannerText_contacts">
                            <div className="child">
                                <h1>
                                    <a href="/contacts#form">{contacts.title}</a>
                                </h1>
                            </div>
                        </div>
                    </Fade>
               </div>
           </section>


            <section>
                <div className="diller">
                    <Zoom bottom>
                        <h1 id="connect">{contacts.subTitle}</h1>
                        <p className="mt-3">{contacts.chooseService}</p>
                    </Zoom>
                </div>


                {/* <!-- КАРТОЧКИ ПО СВЯЗИ --> */}



                <div className="contactsCenter">
                    <div className="inlineContacts">
                        {
                            contacts.services.map(({id, iconCls, title, title2}) => (
                                <Zoom top  key={id}>
                                    <a href="#form">
                                        <div className="cards_contacts">
                                            <div className="icon">
                                                <i className={iconCls} ></i>
                                            </div>
                                            <div>
                                                <h4>{title} <br /> {title2}</h4>
                                            </div>
                                        </div>
                                    </a>
                                </Zoom>
                            ))
                        }
                    </div>
                </div>
            </section>




        {/* <!-- КАРТА И АДРЕС --> */}




            <section id="map-content">
                <div className="mapsCenter_contacts">
                    <div className="mapsInline_contacts">
                        <div className="leftSide_contacts">
                            <Fade bottom>
                                <div className='leftSide_contacts_content card p-3'>
                                    <div>
                                        <h3>{contacts.address.title}</h3>
                                    </div>
                                    <hr />
                                    <ul>
                                        <li>
                                            <a href="#map">
                                                {contacts.address.content}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+996(990)980980">+996 (990) 980 980</a>
                                        </li>
                                        <li>
                                            {contacts.address.time}
                                        </li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                        <Fade bottom>
                            <div className="rightSide_contacts" id="map">
                                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37429.259140643546!2d72.79490478429737!3d40.50326509877585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdad8b50695a91%3A0x60a3a13dc15c586e!2z0JrRi9GA0LPRi9C3INCj0L3QsNCwINCa0YPRgNGD0LvRg9GI!5e0!3m2!1sru!2skg!4v1615664409325!5m2!1sru!2skg" width="100%" height="600" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>



        {/* <!-- АВТОРИЗАЦИЯ --> */}




            <section>
                <div className="contBack" id="contacts-us">
                    <div className="center" id="form">
                        <Zoom bottom>
                            <div className="login-box">
                                <h2>{contacts.form.title}</h2>
                                <form>
                                    <div className="user-box">
                                        <input type="text" name="" required="" />
                                        <label>{contacts.form.fullName}</label>
                                    </div>
                                    <div className="user-box">
                                        <input type="password" name="" required="" />
                                        <label>{contacts.form.contacts}</label>
                                    </div>
                                    <div className="user-box">
                                        <input type="password" name="" required="" />
                                        <label>{contacts.form.email}</label>
                                    </div>
                                    <div className="user-box">
                                        <textarea placeholder={contacts.form.comment}></textarea>
                                        <label></label>
                                    </div>
                                    <a href="/">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        {contacts.form.submit}
                                    </a>
                                </form>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contacts