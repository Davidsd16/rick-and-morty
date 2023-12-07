import { createStore } from 'vuex'

export default createStore({
    state: {
        Characters: [],
        CharactersFilter: []
    },

    getters: {
    },

    mutations: {
        setCharacters(state, payload) {
          state.Characters = payload
        },

        setCharactersFilter(state, payload) {
          state.CharactersFilter = payload
        }

    },

    actions: {
      async getCharacters({commit}) {
        try{
          const response = await fetch('https://rickandmortyapi.com/api/character')
          const data = await response.json()
          commit ('setCharacters', data.results)
          commit ('setCharactersFilter', data.results)
        } catch(error){
            console.error(error)
        }
      }
    },
    
    modules: {
    }
})
