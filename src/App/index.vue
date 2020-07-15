<template lang="jade">
  <div class="app-container">
    <TodoList v-bind:todos="todos" @removeTodo="handleTodoRemove" @editTodo="handleEditTodo"></TodoList>
    <TodoForm @onSubmit="handleTodoAdd"></TodoForm>
  </div>
</template>

<script lang="ts">
  import TodoForm from './components/TodoForm/index.vue';
  import TodoList from './components/TodoList/index.vue';

  interface Data {
    todos: Todo[],
  }

  interface Methods {
    handleTodoAdd: (todo: string) => void,
    handleTodoRemove: (id: number) => void,
  }

  export default {
    data(): Data {
      return {
        todos: [
          {
            id: 1,
            todo: 'yes',
          }
        ],
      }
    },
    methods: {
      handleTodoAdd(todo: string) {
        const currentTodos = this.$data.todos;

        const nextTodos = this.$data.todos.concat([{
          id: currentTodos.length + 1,
          todo,
        }]);

        this.$data.todos = nextTodos;
      },
      handleTodoRemove(id: number) {
        this.$data.todos = this.$data.todos.filter((todo: Todo) => todo.id !== id);
      },
      handleEditTodo(newTodo: Todo) {
        this.$data.todos = this.$data.todos.map((todo: Todo) => todo.id === newTodo.id ? newTodo : todo);
      }
    } as Methods,
    components: {
      TodoForm,
      TodoList,
    },
  };
</script>

<style scoped>
  .app-container {
    height: 100%;
    margin: 0 auto;
    max-width: 1024px;
    padding: calc(var(--base-spacer) * 4) calc(var(--base-spacer) * 2);
  }
</style>