


const API_KEY = '72ae7a96cf614152b19a2e226ac0ee55';
const URL = 'https://newsapi.org/v2';

export const getHealthNews = async (category) => {
  try {
    const response = await fetch(
      `${URL}/everything?q=${category}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching health news:', error);
    return [];
  }
};
