const mutations = {
  changeCity(state, city) {
    // eslint-disable-next-line no-param-reassign
    state.city = city;
    try {
      localStorage.city = city
    } catch (e) {
      //
    }
  }
}

export default mutations
