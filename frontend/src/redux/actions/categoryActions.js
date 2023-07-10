import axios from 'axios';

export const fetchCategories = () => {
    return async (dispatch) => {
      try {
        // Effectuez votre requête pour récupérer les catégories depuis l'API
        const response = await axios.get('http://localhost:5500/categories');
        const categories = response.data;
  
        // Dispatchez l'action avec les catégories récupérées
        dispatch({ type: 'FETCH_CATEGORIES', payload: categories });
      } catch (error) {
        console.error(error);
      }
    };
  };