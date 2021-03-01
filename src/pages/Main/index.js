import './Main.css';
import EngineeringImg from '../../assets/Главная/Engineering.png'
import GenImg from '../../assets/Главная/gen.png';
import News1 from '../../assets/Главная/sl1.jpg';
import News2 from '../../assets/Главная/sl2.jpg';
import News3 from '../../assets/Главная/sl3.jpg';

const Main = () => {
    return (
        <main>
            <div className="GeneralBanner">
                <div className="bannerCenterContent">
                    <div className="bannerText">
                        <h1>Кыргыз Унаа Курулуш</h1>
                        <div className="firstComp" data-aos="fade-right">
                            <h1>Первый машиностроительный завод <br /> в Кыргызской Республике</h1>
                        </div>  
                        <div className="btns">
                            <a href="#blocks">Подробнее</a>
                        </div> 
                    </div>
                </div>
            </div>



            {/* <!-- ЧЕТЫРЕ БЛОКА СКЕЙЛ --> */}




            <section>
                <div className="inlineBanner" id="blocks">
                    <div className="rightBanner" data-aos="fade-up">
                        <div className="flexBlock">
                            <div className="one">
                                <div className="oneImg">
                                    <div className="mt-5">
                                        <h4>Продукция</h4>
                                        <a href="products.html" >Узнать больше</a>
                                    </div>
                                </div>
                            </div>
                            <div className="two">
                                <div className="twoImg">
                                    <div className="mt-5">
                                        <h4>Новости</h4>
                                        <a href="gallery.html">Узнать больше</a>
                                    </div>
                                </div>
                            </div>
                            <div className="three">
                                <div className="threeImg">
                                    <div className="mt-5">
                                        <h4>Контакты</h4>
                                        <a href="products.html">Узнать больше</a>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="aboutUsMain text-center">
                        <div className="abinline">
                            <div className="title bl">
                                <h1>О НАС</h1>
                                <p>      
                                Кыргыз Унаа Курулуш – это современный многопрофильный машиностроительный завод, оснащенный высокопроизводительным оборудованием, ведущий производство по нескольким направлениям, в том числе: гидротурбины, насосы, генераторы, умные счетчики, электробусы.
                                </p>
                            </div>
                            <div className="mt-4 bl righ">
                                <a href="about.html">
                                    Узнать больше
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* <!-- Оборудование --> */}




    
            <div className="oborud">
                <h1>Обо<span>руд</span>ование</h1>
            </div>
            <div className="mashCenter">
                <div className="mashInline">
                    <div className="imgbox">
                        <h1>Фрезерные станки</h1>
                        <div className="img">
                            <img src={EngineeringImg} alt="" />
                        </div>
                    </div>
                    <div className="imgbox">
                        <h1>Карусельные станки</h1>
                        <div className="img">
                            <img src={GenImg} alt="" />
                        </div>
                    </div>
                    <div className="imgbox">
                        <h1>Фрезерные станки</h1>
                        <div className="img">
                            <img src={EngineeringImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>



            {/* <!-- Новости --> */}




            <div className="news">
                <div className="generalNew">
                    <h1>Последние новости</h1>
                    <p><a href="gallery.html">Все новости</a> <i className=" fa fa-arrow-right"></i></p>
                </div>
            </div>
            <div className="centerNew">
                <div className="inlineNews">
                    <div className="cards">
                        <div className="imgcard">
                            <img src={News1} alt="" />
                        </div>
                        <div className="cards-body">
                            <p>21 февраля 2021</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor magni incidunt quas quod omnis quam sed unde 
                            </p>
                            <div className="bt">
                                <a href="gallery.html">Подробнее</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="imgcard">
                            <img src={News2} alt="" />
                        </div>
                        <div className="cards-body">
                            <p>21 февраля 2021</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor magni incidunt quas quod omnis quam sed unde 
                            </p>
                            <div className="bt">
                                <a href="gallery.html">Подробнее</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="imgcard">
                            <img src={News3} alt="" />
                        </div>
                        <div className="cards-body">
                            <p>21 февраля 2021</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor magni incidunt quas quod omnis quam sed unde 
                            </p>
                            <div className="bt">
                                <a href="gallery.html">Подробнее</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="imgcard">
                            <img src={News1} alt="" />
                        </div>
                        <div className="cards-body">
                            <p>21 февраля 2021</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor magni incidunt quas quod omnis quam sed unde 
                            </p>
                            <div className="bt">
                                <a href="gallery.html">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Main