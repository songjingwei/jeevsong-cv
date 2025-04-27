import { http } from './axios';

const getValue = () => {
  return http.get<number>('/counter');
}

const incrementValue = () => {
  return http.post('/counter/increment');
}

export default {
  getValue,
  incrementValue,
}

