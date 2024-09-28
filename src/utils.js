const API_URL = '/mock.json';

export const getTopNews = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (e) {
    alert('An error occured', e);
    return [];
  }
};
