import fetch from 'node-fetch';

const Parse = {
  getIngredients: (id) => fetch(`/api/ingredients/${id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((err) => console.error(err)),

  getEquipment: (id) => fetch(`/api/equipment/${id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((err) => console.error(err)),
};

export default Parse;
