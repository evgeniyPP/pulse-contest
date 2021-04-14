import { ref, computed } from 'vue';
import { fetchParticipants } from './api';

const state = ref({
  page: 1,
  participants: [],
  winner: null,
  error: '',
  loading: false,
});

export const page = computed(() => state.value.page);
export const participants = computed(() => state.value.participants);
export const winner = computed(() => state.value.winner);
export const error = computed(() => state.value.error);
export const loading = computed(() => state.value.loading);

const setPage = value => {
  state.value.page = value;
};
const setWinner = value => {
  state.value.winner = value;
};
const setError = value => {
  state.value.error = value;
};
const setLoading = value => {
  state.value.loading = value;
};
const clearError = () => {
  state.value.error = '';
};

export const setParticipants = value => {
  state.value.participants = value;
};

export const loadParticipants = async url => {
  const regexp = /(http|https):\/\/(www\.)?tinkoff\.ru\/invest\/social\/profile\/(.+?)\/.+/;

  if (!regexp.test(url)) {
    setError('Неправильный URL. Посмотрите на пример \u2191');
    return false;
  }

  clearError();
  setLoading(true);

  try {
    const data = await fetchParticipants(url);
    setParticipants(data);
    setLoading(false);
    setPage(2);
    return true;
  } catch (e) {
    handleError(e);
    return false;
  }
};

export const play = async () => {
  setLoading(true);

  try {
    const data = await getRandomArrayElement(participants.value);
    setWinner(data);
    clearError();
    setPage(3);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return true;
  } catch (e) {
    handleError(e);
    return false;
  }
};

function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function handleError() {
  console.error(error);
  setError('Ошибка сервера. Попробуйте позже');
}
