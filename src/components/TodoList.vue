<template>
<table class="todo-list">
  <tr>
    <td>ID</td>
    <td>Задача</td>
    <td>Статус</td>
  </tr>
  <tr v-for="(task, id) in filteredTasks" v-if="task.done == showDone || showDone">
    <td>{{ id+1 }}</td>
    <td>{{ task.task }}</td>
    <td class="todo-list__state" @click="changeState(id)">{{ task.done?"Выполнено":"В процессе" }}</td>
  </tr>
</table>
</template>

<script>
export default {
  name: 'TodoList',
  methods: {
    changeState(id) {
      this.filteredTasks[id].done = !this.filteredTasks[id].done;
    }
  },
  computed: {
    filteredTasks() {
      return this.$store.getters.filteredTasks
    },
    showDone() {
      return this.$store.state.showDone
    }
  }
}
</script>
