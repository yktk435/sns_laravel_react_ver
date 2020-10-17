// src/fetchRanking.js
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL = '';
const APP_ID = '';

export default function fetchRanking(categoryId) {
  const queryString = qs({
    appid: APP_ID,
    category_id: categoryId
  });
  return fetchJsonp(`${API_URL}?${qs}`);
}
