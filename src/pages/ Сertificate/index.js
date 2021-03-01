import './Certificate.css';
import Certificate1 from '../../assets/Сертификаты/kyrgyzunaacertificate-2048x1448.png';
import Certificate2 from '../../assets/Сертификаты/Торгово-промышленная-палата-2048x1456.png';
import Certificate3 from '../../assets/Сертификаты/смарт-счетчик-scaled.png';
import Certificate4 from '../../assets/Сертификаты/ТРАНСФОРМАТОР-1-scaled.png';

const Certificate = () => {
    return(
        <main>
            <section className="sertBanner">
                <div className="textS">
                    <h1>Сертификаты</h1>
                </div>
            </section>



            {/* <!-- Сертификаты кыргыз унаа --> */}




            <section>
                <div className="paperBlock">
                    <div className="firstInline">
                        <div className="left">
                            <h3>Сертификат <i className='certificateColor'>"Кыргыз Унаа Курулуш"</i></h3>
                            <p className="aw">
                                <i className=" fa fa-award"></i>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis error nam cupiditate unde accusamus beatae. Repudiandae tempore quidem corporis. Obcaecati sit laboriosam laborum aliquam magnam expedita officia aliquid amet eveniet?

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rem repellat ducimus id, veniam asperiores maiores unde perspiciatis cum voluptate fugit! Praesentium tenetur totam perferendis quos fugit commodi nam voluptatibus.
                            </p>
                        </div>
                        <div className="right">
                            <img src={Certificate1} alt="" />
                        </div>
                    </div>

                    <div className="secondInline">
                        <div className="right">
                            <img src={Certificate2} alt="" />
                        </div>
                        <div className="left">
                            <h3>Сертификат <i className='certificateColor'>"Кыргыз Унаа Курулуш"</i></h3>
                            <p className="aw">
                                <i className=" fa fa-award"></i>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis error nam cupiditate unde accusamus beatae. Repudiandae tempore quidem corporis. Obcaecati sit laboriosam laborum aliquam magnam expedita officia aliquid amet eveniet?

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rem repellat ducimus id, veniam asperiores maiores unde perspiciatis cum voluptate fugit! Praesentium tenetur totam perferendis quos fugit commodi nam voluptatibus.
                            </p>
                        </div>
                    
                    </div>
                    <div className="threeInline">
                        <div className="left">
                            <h3>Сертификат <i className='certificateColor'>"Кыргыз Унаа Курулуш"</i></h3>
                            <p className="aw">
                                <i className=" fa fa-award"></i>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis error nam cupiditate unde accusamus beatae. Repudiandae tempore quidem corporis. Obcaecati sit laboriosam laborum aliquam magnam expedita officia aliquid amet eveniet?

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rem repellat ducimus id, veniam asperiores maiores unde perspiciatis cum voluptate fugit! Praesentium tenetur totam perferendis quos fugit commodi nam voluptatibus.
                            </p>
                        </div>
                        <div className="right">
                            <img src={Certificate3} alt="" />
                        </div>
                    </div>
                    <div className="secondInline">
                        <div className="right">
                            <img src={Certificate4} alt="" />
                        </div>
                        <div className="left">
                            <h3>Сертификат <i className='certificateColor'>"Кыргыз Унаа Курулуш"</i></h3>
                            <p className="aw">
                                <i className=" fa fa-award"></i>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis error nam cupiditate unde accusamus beatae. Repudiandae tempore quidem corporis. Obcaecati sit laboriosam laborum aliquam magnam expedita officia aliquid amet eveniet?

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rem repellat ducimus id, veniam asperiores maiores unde perspiciatis cum voluptate fugit! Praesentium tenetur totam perferendis quos fugit commodi nam voluptatibus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Certificate