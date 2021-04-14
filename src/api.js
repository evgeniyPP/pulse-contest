import axios from 'axios';

export async function fetchParticipants(url) {
  const { data } = await axios.post('http://localhost:5000/api/participants', {
    url,
  });
  console.log(data);
}
