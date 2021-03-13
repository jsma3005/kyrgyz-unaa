import { API } from './api';
import { newsRoutes, productsRoutes } from './routes';

// News
export const getAllNews = params => API.get({
    url: newsRoutes.getAll,
    params,
})

// Single News
export const getSingleNews = id => API.get({
    url: `${newsRoutes.single}/${id}`,
})


// Products
export const getAllProducts = params => API.get({
    url: productsRoutes.getAll,
    params
})

// Categories
export const getAllCategory = params => API.get({
    url: productsRoutes.category,
    params
})