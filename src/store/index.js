import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function setInStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}


export default new Vuex.Store({
  state: {
    currentUser: getFromStorage('user') || undefined,
    dashboard: {
      ultimas_ordenes: [],
      ultimas_devoluciones: []
    },
    ordenes: {}

  },
  mutations: {
    UPDATE_CURRENTUSER(state, user) {state.currentUser = user, setInStorage('user', user)},
    
    SET_ULTIMAS_ORDENES(state, data){
      state.dashboard = data
    },
    SET_ORDENES(state, data){
      state.ordenes = data
    }
  },
  actions: {
    setUltimasOrdenes({commit}){
      axios.get(`/api/dashboard.json/` )
      .then((res) => {
        commit('SET_ULTIMAS_ORDENES', res.data)
        console.log(res.data)
      })
    },

    setOrdenes({commit}){
      axios.get(`/api/ordenes.json` )
      .then((res) => {
        commit('SET_ORDENES', res.data)
        console.log(res.data)
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.currentUser,
    currentUser: state => state.currentUser,
 
  }
})
