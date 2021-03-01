import './Contacts.css';

const Contacts = () => {
    return (
        <main>
           <section>
               <div className="bannerContacts">
                    <div className="bannerText_contacts" data-aos="fade-right">
                        <div className="child">
                            <h1>
                                <a href="/">Свяжитесь с нами!</a>
                            </h1>
                        </div>
                    </div>
               </div>
           </section>


            <section>
                <div className="diller">
                    <h1 id="connect">Свяжитесь с центром "КЫРГЫЗ УНАА КУРУЛУШ"</h1>
                    <p className="mt-3">Выберите интересующую вас услугу и заполните заявку </p>
                </div>


                {/* <!-- КАРТОЧКИ ПО СВЯЗИ --> */}



                <div className="contactsCenter" data-aos="fade-up">
                    <div className="inlineContacts">
                        <a href="#form">
                            <div className="cards_contacts">
                                <div className="icon">
                                    <i className="fa fa-phone" ></i>
                                </div>
                                <div>
                                    <h4>Заказать <br /> обратный звонок</h4>
                                </div>
                            </div>
                        </a>
                    <a href="#form">
                        <div className="cards_contacts">
                            <div className="icon">
                                <i className="fa fa-car"></i>
                            </div>
                            <div>
                                <h4>Записаться <br /> на тест драйв</h4>
                            </div>
                        </div>
                    </a>
                        <a href="#form">
                            <div className="cards_contacts">
                                <div className="icon">
                                    <i className="fa fa-money-bill-alt" ></i>
                                </div>
                                <div>
                                    <h4>Узнать <br /> цену автомобиля</h4>
                                </div>
                            </div>
                        </a>
                        <a href="#form">
                            <div className="cards_contacts">
                                <div className="icon">
                                    <i className="fa fa-hand-holding-usd" ></i>
                                </div>
                                <div>
                                    <h4>Получить <br /> консультацию по кредиту</h4>
                                </div>
                            </div>
                        </a>
                        <a href="#form">
                            <div className="cards_contacts">
                                <div className="icon">
                                    <i className="fa fa-wrench" ></i>
                                </div>
                                <div>
                                    <h4>Записаться <br /> на сервис</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>




        {/* <!-- КАРТА И АДРЕС --> */}




            <section>
                <div className="mapsCenter_contacts">
                    <div className="mapsInline_contacts">
                        <div className="leftSide_contacts" data-aos="fade-right">
                            <div>
                                <div>
                                    <h3>Кыргыз Унаа Курулуш Центр</h3>
                                </div>
                                <hr />
                                <ul>
                                    <li>
                                        г. Ош, мкр. Туран, 27/1
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        +996 (990) 980 980
                                    </li>
                                    <li>
                                        Часы работы:Пн - вс с 8:00 до 20:00
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rightSide_contacts" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24276.49770510303!2d72.79115866939418!3d40.48494922884102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdae74d5999511%3A0xc781f182823e8d58!2z0LzQuNC60YDQvtGA0LDQudC-0L0g0KLRg9GA0LDQvSwg0J7RiA!5e0!3m2!1sru!2skg!4v1614352256170!5m2!1sru!2skg" width="500" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>



        {/* <!-- АВТОРИЗАЦИЯ --> */}




            <section>
                <div className="contBack">
                    <div className="center" id="form" data-aos="fade-up">
                        <div className="login-box">
                            <h2>Свяжитесь с нами</h2>
                            <form>
                                <div className="user-box">
                                    <input type="text" name="" required="" />
                                    <label>ФИО</label>
                                </div>
                                <div className="user-box">
                                    <input type="password" name="" required="" />
                                    <label>Контактные номера</label>
                                </div>
                                <div className="user-box">
                                    <input type="password" name="" required="" />
                                    <label>Электронная почта</label>
                                </div>
                                <div className="user-box">
                                    <textarea placeholder="Комментарий"></textarea>
                                    <label></label>
                                </div>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Отправить
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contacts