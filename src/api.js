const getNasaImages = async (query) => {
  const searchQuery = encodeURIComponent(query.toLowerCase());
  const url = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export { getNasaImages };
