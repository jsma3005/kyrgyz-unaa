import { API } from './api';
import { newsRoutes } from './routes';

// News
export const getAllNews = (page) => API.get({
    url: newsRoutes.getAll,
    params: {
        page
    }
})