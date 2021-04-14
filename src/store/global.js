import { ref, computed } from 'vue';
import { fetchParticipants } from '../api';

const state = ref({
  page: 2,
  participants: [],
  error: '',
});

export const page = computed(() => state.value.page);
export const participants = computed(() => state.value.participants);
export const error = computed(() => state.value.error);

const setPage = page => {
  state.value.page = page;
};
const setParticipants = participants => {
  state.value.participants = participants;
};
const setError = error => {
  state.value.error = error;
};
const clearError = () => {
  state.value.error = '';
};

export async function loadParticipants(url) {
  const regexp = /(http|https):\/\/www.tinkoff.ru\/invest\/social\/profile\/(.+?)\/.+/;

  if (!regexp.test(url)) {
    setError('Неправильный URL. Посмотрите на пример \u2191');
    return false;
  }

  clearError();

  try {
    const participants = await fetchParticipants(url);
    setParticipants(participants);
    setPage(2);
    return true;
  } catch (e) {
    console.error(e);
    setError('Ошибка сервера. Попробуйте позже.');
    return false;
  }
}
