import axios from 'axios';

export const fetchParticipants = async url => {
  const { data } = await axios.post('/api/participants', {
    url,
  });

  return data;
};
