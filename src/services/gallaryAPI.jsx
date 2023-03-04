import axios from "axios";

export const fetchPictures = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api';
  const OPTIONS = `q=${query}&page=${page}&key=33078199-dfd7f617ae72331c6669751df&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
  return response.data;
};

// ключ 33078199-dfd7f617ae72331c6669751df
// https://pixabay.com/api/