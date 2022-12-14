const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getPopular = async () => {
  const endpoint = "movie/popular";
  const url = `${VITE_API_BASE_URL}/${endpoint}/?api_key=${VITE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) return;

  const data = await response.json();

  const { results } = data;

  return results;
};
