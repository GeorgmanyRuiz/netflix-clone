const APIKEY = "f0f8f74b19aed71c9aafbb96b5f29a6e";

const requests = {
  fetchPopular:
    "/movie/popular?api_key=f0f8f74b19aed71c9aafbb96b5f29a6e&language=en-US&page=1",
  fetchTopRated:
    "/movie/top_rated?api_key=f0f8f74b19aed71c9aafbb96b5f29a6e&language=en-US&page=1",
  fetchUpcoming:
    "/movie/upcoming?api_key=f0f8f74b19aed71c9aafbb96b5f29a6e&language=en-US&page=1",
  fetchNowPlaying:
    "/movie/now_playing?api_key=f0f8f74b19aed71c9aafbb96b5f29a6e&language=en-US&page=1",
  fetchTvPopular:
    "/tv/popular?api_key=f0f8f74b19aed71c9aafbb96b5f29a6e&language=en-US&page=1",
  fetchTvTop:
    "/tv/top_rated?api_key=f0f8f74b19aed71c9aafbb96b5f29a6e&language=en-US&page=1",
};

export default requests;
