<template lang="jade">
  <div>
    <h1 v-if="noTodos">Add some Todos!</h1>

    <div v-else v-for="t in todos">
      <div class="todo-item">
        <p>{{ t.todo }}</p>
        <div class="remove-icon" v-on:click="handleRemoveTodo(t.id)"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  interface Methods {
    handleRemoveTodo: (id: number) => void,
  }

  export default Vue.extend({
    name: 'TodoList',
    props: {
      todos: Array as () => Todo[],
    },
    methods: {
      handleRemoveTodo(id: number) {
        this.$emit('removeTodo', id);
      }
    } as Methods,
    computed: {
      noTodos() {
        return this.$props.todos.length === 0;
      }
    }
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