import './Main.css';
import EngineeringImg from '../../assets/Главная/Engineering.png'
import GenImg from '../../assets/Главная/gen.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNewsAction } from '../../redux/actions/newsActions';
import { Link } from 'react-router-dom';
import { parsedDate } from '../../utils/dateParser';

const Main = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(s => s.news);

    useEffect(() => {
        dispatch(getAllNewsAction())
    }, [dispatch])

    const news = data !== null ? data.results.slice(0, 3) : [];

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
                                        <Link to="/products" >Узнать больше</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="two">
                                <div className="twoImg">
                                    <div className="mt-5">
                                        <h4>Новости</h4>
                                        <Link to="/news">Узнать больше</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="three">
                                <div className="threeImg">
                                    <div className="mt-5">
                                        <h4>Контакты</h4>
                                        <Link to="/contacts">Узнать больше</Link>
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
                                <Link to="/about">
                                    Узнать больше
                                </Link>
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
                    <p><Link to="/news">Все новости</Link> <i className=" fa fa-arrow-right"></i></p>
                </div>
            </div>
            <div className="centerNew">
                <div className="inlineNews">
                    {
                        news.length !== 0 ? (
                            news.map(item => (
                                <div className="cards" key={item.id}>
                                    <div className="imgcard">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="cards-body">
                                        <p>{parsedDate(item.created)}</p>
                                        <p>
                                            {item.title}
                                        </p>
                                        <div className="bt">
                                            <a href="gallery.html">Подробнее</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden">Загрузка...</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </main>

    )
}

export default Main