import axios from 'axios';

export const fetchParticipants = async url => {
  const { data } = await axios.post(
    import.meta.env.VITE_API_ROUTE + '/api/participants',
    {
      url,
    }
  );

  return data;
};
