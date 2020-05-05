let Parse = {
  getIngredients: (id) => {
    return fetch('/api/ingredients/' + id, {
      method: 'GET',
    })
      .then(res => res.json())
      .catch(err => console.error(err))
  },

  getEquipment: (id) => {
    return fetch('/api/equipment/' + id, {
      method: 'GET'
    })
      .then(res => res.json())
      .catch(err => console.error(err))
  }
}

export default Parse;