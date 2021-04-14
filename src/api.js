import axios from 'axios';

export const fetchParticipants = async url => {
  const { data } = await axios.post('http://localhost:5000/api/participants', {
    url,
  });

  return data;
};
