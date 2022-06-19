import axios from 'axios';
//api.themoviedb.org/3/movie/popular?api_key=6acbd1e77111f3ead9c9bba49d78ba9f&page=1

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/tahaebaed/Fake-API-Data',
});

export default instance;
