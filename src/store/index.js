import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [{
      task: "вымыть окна",
      done: true,
    },
    {
      task: "почистить зубы",
      done: false,
    },
    {
      task: "приготовить ужин",
      done: false,
    },
    {
      task: "заправить кровать",
      done: true,
    }
  ],
  showDone: false,
  newTask: ''
},
mutations: {
    addTask: function(state, task) {
      state.tasks.push({
        task,
        done: false
      })
    },
    changeVisibility: function(state, showDone) {
      state.showDone = showDone
    }
  },
  getters: {
    filteredTasks: function(state) {
      return state.tasks.filter(task => (state.showDone || task.done == state.showDone))
    }
  }
})
