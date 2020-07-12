<template lang="jade">
  <div v-else class="todo-item">
    <p>{{ todo.todo }}</p>
    <div v-on:click="handleSelectEditTodo(todo.id)">Edit</div>
    <div class="remove-icon" v-on:click="handleRemoveTodo(todo.id)"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'TodoItem',
    props: {
      todo: Object as () => Todo,
      handleSelectEditTodo: Function,
      handleRemoveTodo: Function,
    },
  })
</script>

<style scoped>
  .todo-item {
    align-items: center;
    display: flex;
  }

  .remove-icon {
    height: 10px;
    margin-left: 5px;
    position: relative;
    width: 10px;
  }

  .remove-icon:hover {
    cursor: pointer;
  }

  .remove-icon:before,
  .remove-icon:after {
    border: .5px solid black;
    border-radius: 1px;
    content: '';
    height: 10px;
    position: absolute;
  }

  .remove-icon:before {
    transform: translateX(5px) rotate(45deg);
  }

  .remove-icon:after {
    transform: translateX(5px) rotate(-45deg);
  }
</style>