import axios from 'axios';
import querystring from 'querystring';

export default {
  requestPost({ question = '', answer = '' }) {
    return axios({
      method: 'post',
      url: '/api/faq',
      data: querystring.stringify({
        question, // property shorthand
        answer, // property shorthand
      }),
    });
  },
  requestGet() {
    return axios.get('/api/faq')
      .then(response => response.data)
      .catch(error => console.log(error));
  },

};
