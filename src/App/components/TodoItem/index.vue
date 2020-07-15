<template lang="jade">
  <div class="todo-item">
    <div class="text-wrapper" v-on:click="handleSelectEditTodo(todo.id)">
      <p class="text" >{{ todo.todo }}</p>

      <div class="edit-wrapper">
        <div class="edit-icon">
          <div class="eraser"></div>
          <div class="pencil-body"></div>
          <div class="point"></div>
        </div>
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
    align-self: center;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 30px;
    grid-column-gap: calc(var(--base-spacer) * 0.5);
  }

  .text-wrapper {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .text {
    color: var(--text-grey);
    font-size: 2rem;
  }

  .edit-wrapper {
    cursor: pointer;
    display: none;
    height: 30px;
    position: relative;
    width: 30px;
  }

  .text-wrapper:hover .edit-wrapper {
    display: block;
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
    border-right: 1px solid var(--brand-accent);
    border-left: 1px solid var(--brand-accent);
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
    border-bottom: 1px solid var(--brand-accent);
    border-left: 1px solid transparent;
    border-right: 1px solid var(--brand-accent);
    height: 5px;
    transform: translate(11px, -4px) rotate(45deg);
    width: 5px;
  }

  .eraser:before {
    border: 1px solid var(--brand-accent);
    border-radius: 1px;
    width: 7px;
  }

  .remove-icon {
    height: 30px;
    position: relative;
    width: 30px;
  }

  .remove-icon:before,
  .remove-icon:after {
    border: .5px solid var(--brand-close);
    border-radius: 1px;
    content: '';
    height: 100%;
    position: absolute;
  }

  .remove-icon:before {
    transform: translateX(14px) rotate(45deg);
  }

  .remove-icon:after {
    transform: translateX(14px) rotate(-45deg);
  }

  .remove-icon:hover {
    cursor: pointer;
  }

  .remove-icon:hover:before{
    animation: remove-before-close 0.5s ease-in-out;
  }

  .remove-icon:hover:after {
    animation: remove-after-close 0.5s ease-in-out;
  }

  @keyframes remove-before-close {
    0% { transform: translateX(14px) rotate(45deg); }
    50% { transform: translateX(14px) rotate(90deg); }
    100% { transform: translateX(14px) rotate(45deg); }
  }

  @keyframes remove-after-close {
    0% { transform: translateX(14px) rotate(-45deg); }
    50% { transform: translateX(14px) rotate(-90deg); }
    100% { transform: translateX(14px) rotate(-45deg); }
  }
</style>