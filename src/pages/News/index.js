import './News.css';
import News1 from '../../assets/Главная/sl1.jpg';
import News2 from '../../assets/Главная/sl2.jpg';
import News3 from '../../assets/Главная/sl3.jpg';

const News = () => {
    return (
        <main>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item  backs">
                        <h1>Новости завода</h1>
                    </div>
                    <div className="carousel-item back3 active">
                        <h1>Новости</h1>
                    </div>
                    <div className="carousel-item back3 ">
                        <h1>Новости</h1>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            {/* <!-- Новости карточки --> */}


            <div className="news">
                <div className="generalNew">
                    <h1>Все новости</h1>
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
                                <a href="news.html">Подробнее</a>
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
                </div>
            </div>
        
        </main>
    )
}

export default News