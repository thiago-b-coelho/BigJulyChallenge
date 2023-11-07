export async function fetchRecipes(filter) {
  const { searchQ, limit } = filter;

  const url = `https://api.edamam.com/search?q=${searchQ}&
  app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&
  app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&
  from=0&to=${limit}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}

export async function fetchOneRecipe(id) {

  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&
  app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&
  app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&
  field=externalId`;

  const response = await fetch(url);

  const data = await response.json();
  return data.recipe;
}
