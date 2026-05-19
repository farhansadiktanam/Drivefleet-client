//////////////////////////

export const fetchCars = async () => {
  const res = await fetch("http://localhost:5000/cars");
  const data = await res.json();
  return data || [];
};

export const fetchFeaturedCars = async () => {
  const res = await fetch("http://localhost:5000/featured-cars");
  const data = await res.json();
  return data || [];
};
