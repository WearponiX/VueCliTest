<template>
<form class="add-item" @submit.prevent="addTask">
  <input type="text" placeholder="Введите задачу" v-model="task"></input>
  <button type="submit">Добавить</button>
</form>
</template>

<script>
export default {
  name: 'AddItem',
  methods: {
    addTask() {
      this.$store.commit('addTask',this.task)
    }
  },
  data: function() {
    return {
      task: null
    }
  }
}
</script>
