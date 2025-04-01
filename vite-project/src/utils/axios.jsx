import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
   headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGExZDE3MTEzZWUwYTVlYmI1YTY0NjdhZWU1MGU4MSIsIm5iZiI6MTc0MzM1MDI5Ni4xNDIwMDAyLCJzdWIiOiI2N2U5NmExODJjY2E2ZmM4ZmJjNmMyM2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.amR9PLzRkhibGXryObPFCbcfQlIc-Fkt_CaKKWUD_X8'
  }
});


export default instance;