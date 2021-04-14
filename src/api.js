import axios from 'axios';

export const fetchParticipants = async url => {
  const { data } = await axios.post('http://localhost:5000/api/participants', {
    url,
  });

  return data;
};

export const getWinner = async participants => {
  const { data } = await axios.post('http://localhost:5000/api/get-winner', {
    participants,
  });

  console.log(data);

  return data;
};
