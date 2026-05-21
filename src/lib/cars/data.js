//////////////////////////

export const fetchCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`);
  const data = await res.json();
  return data || [];
};

export const fetchFeaturedCars = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/featured-cars`,
  );
  const data = await res.json();
  return data || [];
};
