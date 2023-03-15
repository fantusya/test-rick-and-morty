import axios from 'axios';

import { BASE_URL } from 'constants/urls';

axios.defaults.baseURL = BASE_URL;

// export const fetchCharacters = async page => {
//   const response = await axios.get('character', {
//     params: { page },
//   });
//   console.log(response.data);
//   return response.data;
// };

export const fetchingById = async id => {
  const response = await axios.get(`${id}`);
  return response.data;
};
