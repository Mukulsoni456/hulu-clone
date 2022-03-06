const API_KEY = 'c0cec75d56b038231955969de48a4fbb'

const requests = {
fetchtrendingmovies : `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=US`,
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}& language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
}

export default requests;