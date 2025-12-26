const talkAboutCats = async () => {
  const API_URL = `https://cat-fact.herokuapp.com`;
  const response = await fetch(
    `${API_URL}/facts/random?animal_type=cat&amount=3`,
  );
  const data = await response.json();

  console.log(data);
};

talkAboutCats();
