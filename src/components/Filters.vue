<template>
<div class="filters">
  <p class="filters__description">Показать выполненные?</p>
  <input name="showDone" type='checkbox' v-model="showDone" @change="changeVisible"></input>
</div>
</template>

<script>
export default {
  name: 'Filters',
  data: function() {
    return {
      showDone: false
    }
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeVisibility',this.showDone)
    }
  }
}
</script>
