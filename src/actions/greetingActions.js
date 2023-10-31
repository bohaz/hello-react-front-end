import axios from 'axios';

export const FETCH_GREETING = 'FETCH_GREETING';

export const fetchGreeting = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/random_greeting');
  dispatch({
    type: FETCH_GREETING,
    payload: response.data.greeting
  });
};
