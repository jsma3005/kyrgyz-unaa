import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction, getAllCategoriesAction } from '../../redux/actions/productsActions';
import './NewProducts.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const NewProducts = () => {
    const [limit, setLimit] = useState(6);
    const [category, setCategory] = useState('all');
    const dispatch = useDispatch();
    const {data} = useSelector(s => s.products);
    const {selectedLang: {products}, selectedLangSlug} = useSelector(s => s.langs);
    const {categories, categorySuccess} = useSelector(s => s.categories);
    const categoryValid = category === 'all' ? null : category

    useEffect(() => {
        dispatch(getAllProductsAction({
            category: categoryValid,
            limit
        }));
        dispatch(getAllCategoriesAction({
            limit: 50
        }));
    }, [dispatch, category, limit, categoryValid])

    const cuttedStr = str => {
        const splittedStr = str.split(' ');
        if(splittedStr.length > 4){
            const slicedStr = splittedStr.slice(0, 4);
            return slicedStr.join(' ');
        }else{
            return str;
        }
    }

    const cuttedDescription = str => {
        const splittedStr = str.split('');
        if(splittedStr.length > 100){
            const slicedStr = splittedStr.slice(0, 100);
            return slicedStr.join('') + "...";
        }else{
            return str;
        }
    }

    const moreNews = e => {
        e.preventDefault();
        if(data.count >= limit){
            setLimit(prev => prev + 3);
        }
    }

    console.log(categories);
    
    return (
        <>
            <div className="banner">    
                <div className="mai">
                    <div className="bannerT">
                        <Zoom bottom>
                            <h1>{products.title}</h1>
                        </Zoom>
                    </div>
                </div>
            </div>
            
            <main className='products_bg'>
                <div className='select_category' id="product-categories">
                    <div className='row align-items-center justify-content-between'>
                        {
                            categorySuccess ? (
                                <div className='col-lg-6'>
                                    <select value={category} onChange={e => setCategory(e.target.value)} className="form-select form-select-lg" aria-label=".form-select-lg example">
                                        {
                                            categories?.results.length > 0 ? (
                                                selectedLangSlug === 'RU' ? (
                                                    <>
                                                        <option value='all' defaultValue>Все продукты</option>
                                                        {
                                                            categories?.results.map(({id, name}) => (
                                                                <option key={id} value={id}>{name}</option>
                                                            ))
                                                        }
                                                    </>
                                                ) : ( 
                                                    <>
                                                        <option value='all' defaultValue>All products</option>
                                                        {
                                                            categories?.results.map(({id, name_en}) => (
                                                                <option key={id} value={id}>{name_en}</option>
                                                            ))
                                                        }
                                                    </>
                                                )
                                            ) : (
                                                <option>Нет категорий</option>
                                            )
                                        }
                                    </select>
                                </div>
                            ) : null
                        }
                        <div className='col-lg-6'>
                            <select className="form-select form-select-lg" aria-label=".form-select-lg example">
                                <option defaultValue>Готовые продукции</option>
                                <option>В стадии разработки</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="product_container">
                    {
                        (data !== null && data?.results.length !== 0) ? (
                            data?.results.map(item => (
                                <Zoom bottom key={item.id}>
                                    {
                                        selectedLangSlug === 'RU' ? (
                                            <div className="product_item mb-5">
                                                <div className="product_title">
                                                    <p title={item.title}>{cuttedStr(item.title)}</p>
                                                </div>
                                                <div className="product_img" style={{background: `url('${item.image}') center / cover no-repeat`}}>
                                                </div>
                                                <div className="product_info">
                                                    <p>{cuttedDescription(item.description)}</p>
                                                    <div className="text-center pt-3">
                                                        <a href={`/products/${item.id}`}>Подробнее...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="product_item mb-5">
                                                <div className="product_title">
                                                    <p title={item.title_en}>{cuttedStr(item.title_en)}</p>
                                                </div>
                                                <div className="product_img" style={{background: `url('${item.image}') center / cover no-repeat`}}>
                                                </div>
                                                <div className="product_info">
                                                    <p>{cuttedDescription(item.description_en)}</p>
                                                    <div className="text-center pt-3">
                                                        <a href={`/products/${item.id}`}>Подробнее...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    
                                </Zoom>
                            ))
                        ) : (data === null) ? (
                            <div className="spinner-border m-auto" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden">Загрузка...</span>
                            </div>
                        )
                        : (
                            <h1 className='text-center m-auto'>Продукция пуста!</h1>
                        )
                    }
                </div>

                {
                    data?.count > 6 ? (
                        <div className="more text-center pb-5">
                            <button onClick={moreNews} disabled={data?.count >= limit ? false : true} className="btn btn-lg product_more_btn">{products.moreProductsBtn}</button>
                        </div>
                    ) : (
                        null
                    )
                }
            </main>

            {/* Form */}
            <div className="contBack">
                <div className="center mt-0" id="form">
                    <Fade bottom>
                        <div className="login-box">
                            <h2>{products.form.title}</h2>
                            <form>
                                <div className="user-box">
                                    <input type="text" name="" required="" />
                                    <label>{products.form.fullName}</label>
                                </div>
                                <div className="user-box">
                                    <input type="password" name="" required="" />
                                    <label>{products.form.contacts}</label>
                                </div>
                                <div className="user-box">
                                    <input type="password" name="" required="" />
                                    <label>{products.form.email}</label>
                                </div>
                                <div className="user-box">
                                    <textarea placeholder={products.form.comment}></textarea>
                                    <label></label>
                                </div>
                                <a href="/">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    {products.form.submit}
                                </a>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default NewProducts