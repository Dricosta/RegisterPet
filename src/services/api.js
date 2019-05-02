import axios from 'axios';

const api = axios.create({ baseURL: 'https://vetfypet.firebaseio.com'})

export default api