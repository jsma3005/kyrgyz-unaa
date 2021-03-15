import news from './news/newsReducer'
import singleNews from './news/singleNewsReducer';
import products from './products/productsReducer';
import categories from './products/categoryReducer';
import langs from './languages/languagesReducer';

const mainReducer = {
    news,
    singleNews,
    products,
    categories,
    langs
}

export default mainReducer