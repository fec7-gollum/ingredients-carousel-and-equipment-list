import fetch from 'node-fetch';

const Parse = {
  getIngredients: () => fetch(`http://localhost:3001/api/ingredients${window.location.pathname}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((err) => console.error(err)),
};

export default Parse;
