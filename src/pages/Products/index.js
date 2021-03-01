import './Products.css';
import Peltonoriginal from '../../assets/Продукции/peltonoriginal 1.png';
import Turbina from '../../assets/Продукции/turbina2-12.png';
import Turbina2 from '../../assets/Продукции/turbina1.png';


const Products = () => {
    return (
        <>
            <div className="banner">    
                <div className="mai">
                    <div className="bannerT">
                        <h1>Продукции</h1>
                    </div>
                </div>
            </div>

            {/* MAIN */}

            <main>
                <section>
                    <div className="productCenter">
                        <div className="mt-3 cate">
                            <h1>Категории</h1>
                        </div>
                        <div className="menuCenter">
                            <ul className="menuInline"> 
                                <li>
                                    <a href="" className="actDark">
                                    Все модели
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Продукция
                                    </a>
                                </li>
                                <li>
                                    <a href="create.html">
                                    В стадии разработки
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="productInline">
                            <div className="leftSide">
                                <div>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Гидротурбины
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>Клапан</p>
                                                    <p>Клапан</p>
                                                    <p>Клапан</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Гидрогенераторы
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Генераторы
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Промышленные и бытовые насосы
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                <p>Насосы</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                Электробусы
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>
                                                    Электричка
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                Аппараты ИВЛ
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>
                                                    IVL
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingSix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                Трансфарматоры
                                                </button>
                                            </h2>
                                            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>
                                                    Катушка
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingSeven">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                                Машина скорой помощи
                                                </button>
                                            </h2>
                                            <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>Mersedes Sprinter</p>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingEight">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                                Электрощиты
                                                </button>
                                            </h2>
                                            <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                <p>
                                                    Учетчик
                                                </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingNine">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                                3D принтеры для печати из ABS-пластика
                                                </button>
                                            </h2>
                                            <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>Принnth</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightSide">
                                <div className="inlineCards">
                                    <div className="containers page-wrapper col-xs-4 col-sm-4 col-md-3 col-xl-3">
                                        <div className="page-inner">
                                        <div className="rows">
                                            <div className="el-wrapper">
                                            <div className="box-up">
                                                <img className="img" src={Peltonoriginal} alt="" />
                                                <div className="img-info">
                                                <div className="info-inner">
                                                    <span className="p-name">Турбина</span>
                                                    <span className="p-company">"Клапан"</span>
                                                </div>
                                                <div className="a-size">В наличии</div>
                                                </div>
                                            </div>
                                    
                                            <div className="box-down">
                                                <div className="h-bg">
                                                <div className="h-bg-inner"></div>
                                                </div>
                                    
                                                <a className="cart" href="pages.html">
                                                <span className="price"></span>
                                                <span className="add-to-cart">
                                                    <span className="txt">Подробнее</span>
                                                </span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="containers page-wrapper col-xs-4 col-sm-4 col-md-3 col-xl-3">
                                        <div className="page-inner">
                                        <div className="rows">
                                            <div className="el-wrapper">
                                            <div className="box-up">
                                                <img className="img" src={Peltonoriginal} alt="" />
                                                <div className="img-info">
                                                <div className="info-inner">
                                                    <span className="p-name">Турбина</span>
                                                    <span className="p-company">"Клапан"</span>
                                                </div>
                                                <div className="a-size">В наличии</div>
                                                </div>
                                            </div>
                                    
                                            <div className="box-down">
                                                <div className="h-bg">
                                                <div className="h-bg-inner"></div>
                                                </div>
                                    
                                                <a className="cart" href="#">
                                                <span className="price"></span>
                                                <span className="add-to-cart">
                                                    <span className="txt">Подробнее</span>
                                                </span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="containers page-wrapper col-xs-4 col-sm-4 col-md-3 col-xl-3">
                                        <div className="page-inner">
                                        <div className="rows">
                                            <div className="el-wrapper">
                                            <div className="box-up">
                                                <img className="img" src={Turbina} alt="" />
                                                <div className="img-info">
                                                <div className="info-inner">
                                                    <span className="p-name">Турбина</span>
                                                    <span className="p-company">"Клапан"</span>
                                                </div>
                                                <div className="a-size">В наличии</div>
                                                </div>
                                            </div>
                                    
                                            <div className="box-down">
                                                <div className="h-bg">
                                                <div className="h-bg-inner"></div>
                                                </div>
                                    
                                                <a className="cart" href="#">
                                                <span className="price"></span>
                                                <span className="add-to-cart">
                                                    <span className="txt">Подробнее</span>
                                                </span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="containers page-wrapper col-xs-4 col-sm-4 col-md-3 col-xl-3">
                                        <div className="page-inner">
                                        <div className="rows">
                                            <div className="el-wrapper">
                                            <div className="box-up">
                                                <img className="img" src={Turbina2} alt="" />
                                                <div className="img-info">
                                                <div className="info-inner">
                                                    <span className="p-name">Турбина</span>
                                                    <span className="p-company">"Клапан"</span>
                                                </div>
                                                <div className="a-size">В наличии</div>
                                                </div>
                                            </div>
                                    
                                            <div className="box-down">
                                                <div className="h-bg">
                                                <div className="h-bg-inner"></div>
                                                </div>
                                    
                                                <a className="cart" href="#">
                                                <span className="price"></span>
                                                <span className="add-to-cart">
                                                    <span className="txt">Подробнее</span>
                                                </span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="containers page-wrapper col-xs-4 col-sm-4 col-md-3 col-xl-3">
                                        <div className="page-inner">
                                        <div className="rows">
                                            <div className="el-wrapper">
                                            <div className="box-up">
                                                <img className="img" src={Peltonoriginal} alt="" />
                                                <div className="img-info">
                                                <div className="info-inner">
                                                    <span className="p-name">Турбина</span>
                                                    <span className="p-company">"Клапан"</span>
                                                </div>
                                                <div className="a-size">В наличии</div>
                                                </div>
                                            </div>
                                    
                                            <div className="box-down">
                                                <div className="h-bg">
                                                <div className="h-bg-inner"></div>
                                                </div>
                                    
                                                <a className="cart" href="#">
                                                <span className="price"></span>
                                                <span className="add-to-cart">
                                                    <span className="txt">Подробнее</span>
                                                </span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="containers page-wrapper col-xs-4 col-sm-4 col-md-3 col-xl-3">
                                        <div className="page-inner">
                                        <div className="rows">
                                            <div className="el-wrapper">
                                            <div className="box-up">
                                                <img className="img" src={Turbina2} alt="" />
                                                <div className="img-info">
                                                <div className="info-inner">
                                                    <span className="p-name">Турбина</span>
                                                    <span className="p-company">"Клапан"</span>
                                                </div>
                                                <div className="a-size">В наличии</div>
                                                </div>
                                            </div>
                                    
                                            <div className="box-down">
                                                <div className="h-bg">
                                                <div className="h-bg-inner"></div>
                                                </div>
                                    
                                                <a className="cart" href="#">
                                                <span className="price"></span>
                                                <span className="add-to-cart">
                                                    <span className="txt">Подробнее</span>
                                                </span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="containers page-wrapper col-xs-4 col-sm-4 col-md-3 col-xl-3">
                                        <div className="page-inner">
                                            <div className="rows">
                                            <div className="el-wrapper">
                                                <div className="box-up">
                                                <img className="img" src={Turbina} alt="" />
                                                <div className="img-info">
                                                    <div className="info-inner">
                                                    <span className="p-name">Турбина</span>
                                                    <span className="p-company">"Клапан"</span>
                                                    </div>
                                                    <div className="a-size">В наличии</div>
                                                </div>
                                                </div>
                                        
                                                <div className="box-down">
                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>
                                        
                                                <a className="cart" href="#">
                                                    <span className="price"></span>
                                                    <span className="add-to-cart">
                                                    <span className="txt">Подробнее</span>
                                                    </span>
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="containers page-wrapper col-xs-4 col-sm-4 col-md-3 col-xl-3">
                                        <div className="page-inner">
                                        <div className="rows">
                                            <div className="el-wrapper">
                                            <div className="box-up">
                                                <img className="img" src={Peltonoriginal} alt="" />
                                                <div className="img-info">
                                                <div className="info-inner">
                                                    <span className="p-name">Турбина</span>
                                                    <span className="p-company">"Клапан"</span>
                                                </div>
                                                <div className="a-size">В наличии</div>
                                                </div>
                                            </div>
                                    
                                            <div className="box-down">
                                                <div className="h-bg">
                                                <div className="h-bg-inner"></div>
                                                </div>
                                    
                                                <a className="cart" href="#">
                                                <span className="price"></span>
                                                <span className="add-to-cart">
                                                    <span className="txt">Подробнее</span>
                                                </span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="containers page-wrapper col-xs-4 col-sm-4 col-md-3 col-xl-3">
                                        <div className="page-inner">
                                        <div className="rows">
                                            <div className="el-wrapper">
                                            <div className="box-up">
                                                <img className="img" src={Turbina2} alt="" />
                                                <div className="img-info">
                                                <div className="info-inner">
                                                    <span className="p-name">Турбина</span>
                                                    <span className="p-company">"Клапан"</span>
                                                </div>
                                                <div className="a-size">В наличии</div>
                                                </div>
                                            </div>
                                    
                                            <div className="box-down">
                                                <div className="h-bg">
                                                <div className="h-bg-inner"></div>
                                                </div>
                                    
                                                <a className="cart" href="#">
                                                <span className="price"></span>
                                                <span className="add-to-cart">
                                                    <span className="txt">Подробнее</span>
                                                </span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="containerss">
                                    <ul className="pagination">
                                        <li className="icon">
                                        <a href="#"><span className="fas fa-angle-left"></span></a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        
                                        <li className="icon">
                                        <a href="#"><span className="fas fa-angle-right"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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
        </>
    )
}

export default Products