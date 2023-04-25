const API_KEY = "d2ebe74ae9a39c776ff8dcfab759bf0f";

const Requests = {
  latest: `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  toprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  discover: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  genres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  searchMovie: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1`,
  // searchwithgenre : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  latestserie: `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US`,
  popularserie: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`,
  topratedserie: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  searchserie: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
};

export default Requests;
