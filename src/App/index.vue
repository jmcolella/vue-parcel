<template lang="jade">
  <div>
    <TodoList v-bind:todos="todos"></TodoList>
    <TodoForm @addTodo="handleTodoAdd"></TodoForm>
  </div>
</template>

<script lang="ts">
  import TodoForm from './components/TodoForm/index.vue';
  import TodoList from './components/TodoList/index.vue';

  interface Data {
    todos: string[],
  }

  interface Methods {
    handleTodoAdd: (todo: string) => void,
  }

  export default {
    data(): Data {
      return {
        todos: [],
      }
    },
    methods: {
      handleTodoAdd(todo: string) {
        const currentTodos = this.$data.todos;

        const nextTodos = this.$data.todos.concat([ todo ]);

        this.$data.todos = nextTodos;
      }
    } as Methods,
    components: {
      TodoForm,
      TodoList,
    },
  };
</script>