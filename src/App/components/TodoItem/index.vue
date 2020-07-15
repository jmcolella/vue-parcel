<template lang="jade">
  <div v-else class="todo-item">
    <p class="text">{{ todo.todo }}</p>
    <div class="edit-wrapper" v-on:click="handleSelectEditTodo(todo.id)">
      <div class="edit-icon">
        <div class="eraser"></div>
        <div class="pencil-body"></div>
        <div class="point"></div>
      </div>
    </div>
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

  .text {
    font-size: 2rem;
  }

  .edit-wrapper {
    height: 30px;
    position: relative;
    margin-left: 5px;
    width: 30px;
  }

  .edit-wrapper:hover {
    cursor: pointer;
  }

  .edit-wrapper:hover *,
  .edit-wrapper:hover *:before,
  .edit-wrapper:hover *:after {
    border-color: red;
  }

  .edit-wrapper:hover .point:before {
    border-top-color: transparent;
    border-left-color: transparent;
  }

  .edit-icon {
    height: 100%;
    transform: rotate(45deg);
    width: 100%;
  }

  .eraser {
    height: 5px;
    position: relative;
    transform: translate(10px, -1px);
    width: 100%;
  }

  .pencil-body {
    border-right: 1px solid black;
    border-left: 1px solid black;
    height: 20px;
    position: relative;
    transform: translate(10px);
    width: 9px;
  }

  .point {
    height: 5px;
    position: relative;
    width: 5px;
  }

  .point:before,
  .eraser:before {
    content: '';
    height: 100%;
    position: absolute;
  }

  .point:before {
    border-top: 1px solid transparent;
    border-bottom: 1px solid black;
    border-left: 1px solid transparent;
    border-right: 1px solid black;
    height: 5px;
    transform: translate(11px, -4px) rotate(45deg);
    width: 5px;
  }

  .eraser:before {
    border: 1px solid black;
    border-radius: 1px;
    width: 7px;
  }

  .remove-icon {
    height: 30px;
    margin-left: 5px;
    position: relative;
    width: 30px;
  }

  .remove-icon:hover {
    cursor: pointer;
  }

  .remove-icon:before,
  .remove-icon:after {
    border: .5px solid black;
    border-radius: 1px;
    content: '';
    height: 100%;
    position: absolute;
  }

  .remove-icon:before {
    transform: translateX(5px) rotate(45deg);
  }

  .remove-icon:after {
    transform: translateX(5px) rotate(-45deg);
  }
</style>