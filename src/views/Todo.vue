<template>
  <div>
    <AddItem></AddItem>
    <TodoList></TodoList>
    <Filters></Filters>
  </div>
</template>


<script>
import AddItem from '@/components/AddItem.vue'
import TodoList from '@/components/TodoList.vue'
import Filters from '@/components/Filters.vue'

export default {
  name: 'Todo',
  components: {
    AddItem,
    Filters,
    TodoList
  }
}
</script>
