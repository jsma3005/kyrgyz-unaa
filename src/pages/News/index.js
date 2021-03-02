import './News.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllNewsAction } from '../../redux/actions/newsActions';
import { parsedDate } from '../../utils/dateParser';

const News = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(s => s.news);

    console.log(data);

    const news = data !== null ? data.results : [];

    useEffect(() => {
        dispatch(getAllNewsAction(1, ))
    }, [])

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
                    {
                        news.length !== 0 ? (
                            news.map(item => (
                                <div className="cards" key={item.id}>
                                    <div className="imgcard">
                                        {/* <img src={item.image} alt="" /> */}
                                        <div className='news_image' style={{background: `url('${item.image}') center / cover`}}>

                                        </div>
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

export default News