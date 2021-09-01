const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/trending/top_rated/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/trending/movie/week?api_key=${API_KEY}&with_genre=28`,
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/trending/movie/week?api_key=${API_KEY}&with_genre=35`,
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/trending/movie/week?api_key=${API_KEY}&with_genre=27`,
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/trending/movie/week?api_key=${API_KEY}&with_genre=10749`,
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/trending/movie/week?api_key=${API_KEY}&with_genre=9648`,
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/trending/movie/week?api_key=${API_KEY}&with_genre=878`,
    },
    fetchWestern: {
        title: 'Western',
        url: `/trending/movie/week?api_key=${API_KEY}&with_genre=37`,
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/trending/movie/week?api_key=${API_KEY}&with_genre=16`,
    },
    fetchTV: {
        title: 'TV Movie',
        url: `/trending/movie/week?api_key=${API_KEY}&with_genre=10770`,
    },
};
