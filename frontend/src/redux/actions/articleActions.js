import axios from 'axios';

export const fetchArticles = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:5500/articles/all');
            const articles = response.data;

            console.log(articles);

            dispatch({ type: 'FETCH_ARTICLES', payload: articles });
        } catch (error) {
            console.error(error);
        }
    }
}