import axios from 'axios';

const axiosClient = axios.create({
  // eslint-disable-next-line comma-dangle
  baseURL: 'http://api-bineetnaidu-io.herokuapp.com/api/v1/projects'
});

export default axiosClient;
