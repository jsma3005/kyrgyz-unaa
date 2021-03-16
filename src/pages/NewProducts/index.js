import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction, getAllCategoriesAction } from '../../redux/actions/productsActions';
import { postNewForm } from '../../API/index'
import './NewProducts.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { HashLink } from 'react-router-hash-link'


const NewProducts = () => {
    const [limit, setLimit] = useState(6);
    const [category, setCategory] = useState('all');
    const dispatch = useDispatch();
    const {data} = useSelector(s => s.products);
    const {selectedLang: {products}, selectedLangSlug} = useSelector(s => s.langs);
    const {categories, categorySuccess} = useSelector(s => s.categories);
    const categoryValid = category === 'all' ? null : category
    const [productState, setProductState] = useState('true');
    const [fullname, setFullname] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState();
    const [formLoading, setFormLoading] = useState(false);

    useEffect(() => {
        dispatch(getAllProductsAction({
            category: categoryValid,
            limit,
            product_state: productState
        }));
        dispatch(getAllCategoriesAction({
            limit: 50
        }));
    }, [dispatch, category, limit, categoryValid, productState])

    const cuttedStr = str => {
        const splittedStr = str.split(' ');
        if(splittedStr.length > 4){
            const slicedStr = splittedStr.slice(0, 4);
            return slicedStr.join(' ');
        }else{
            return str;
        }
    }

    const formSubmit = e => {
        e.preventDefault();
        setFormLoading(true);
        if(fullname !== '' && number !== '' && email !== ''){
            postNewForm({
                fullname,
                number,
                email,
                comment
            }).then(res =>{
                if(Math.floor(res.status / 100) === 2){
                    console.log(res);
                    alert('Отправлено успешно!');
                    setFormLoading(false);
                    setFullname('');
                    setNumber('');
                    setEmail('');
                    setComment('');
                }
            }).catch(() => {
                alert('Что-то пошло не так!')
            })
        }else{
            alert('Все поля должны быть заполнены!')
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

    const moreProducts = e => {
        e.preventDefault();
        if(data.count >= limit){
            setLimit(prev => prev + 3);
        }
    }

    const changeProductState = e => {
        setProductState(e.target.value);
    }

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
                                                        <option value='all' defaultValue>{products.allProducts}</option>
                                                        {
                                                            categories?.results.map(({id, name}) => (
                                                                <option key={id} value={id}>{name}</option>
                                                            ))
                                                        }
                                                    </>
                                                ) : ( 
                                                    <>
                                                        <option value='all' defaultValue>{products.allProducts}</option>
                                                        {
                                                            categories?.results.map(({id, name_en}) => (
                                                                <option key={id} value={id}>{name_en}</option>
                                                            ))
                                                        }
                                                    </>
                                                )
                                            ) : (
                                                <option>{products.noCategories}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            ) : null
                        }
                        <div className='col-lg-6'>
                            <select onChange={changeProductState} value={productState} className="form-select form-select-lg" aria-label=".form-select-lg example">
                                <option value='true' defaultValue>{products.isReady}</option>
                                <option value='false'>{products.inProgress}</option>
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
                                                        <HashLink to={`/products/${item.id}/#nav`}>Подробнее...</HashLink>
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
                                                        <HashLink to={`/products/${item.id}/#nav`}>More...</HashLink>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    
                                </Zoom>
                            ))
                        ) : (data === null) ? (
                            <div className="spinner-border m-auto" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden">{products.loading}</span>
                            </div>
                        )
                        : (
                            <h1 className='text-center m-auto'>{products.emptyProducts}</h1>
                        )
                    }
                </div>

                {
                    data?.count > 6 ? (
                        <div className="more text-center pb-5">
                            <button onClick={moreProducts} disabled={data?.count >= limit ? false : true} className="btn btn-lg product_more_btn">{products.moreProductsBtn}</button>
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
                            <form onSubmit={formSubmit}>
                                <div className="user-box">
                                    <input value={fullname} onChange={e => setFullname(e.target.value)} type="text" name="" required="" />
                                    <label>{products.form.fullName}</label>
                                </div>
                                <div className="user-box">
                                    <input value={number} onChange={e => setNumber(e.target.value)} type="text" name="" required="" />
                                    <label>{products.form.contacts}</label>
                                </div>
                                <div className="user-box">
                                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="" required="" />
                                    <label>{products.form.email}</label>
                                </div>
                                <div className="user-box">
                                    <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder={products.form.comment}></textarea>
                                    <label></label>
                                </div>
                                <button disabled={formLoading} type="submit">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    {products.form.submit}
                                </button>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default NewProducts