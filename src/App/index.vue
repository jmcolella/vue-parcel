<template lang="jade">
  <div>
    <Header></Header>

    <div class="todo-container">
      <div class="todo-wrapper">
        <TodoForm @onSubmit="handleTodoAdd"></TodoForm>
        <TodoList v-bind:todos="todos" @removeTodo="handleTodoRemove" @editTodo="handleEditTodo"></TodoList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import TodoForm from './components/TodoForm/index.vue';
  import TodoList from './components/TodoList/index.vue';
  import Header from './components/Header/index.vue';

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
        const nextTodos = this.$data.todos;
        const nextId = nextTodos.length + 1;

        nextTodos.unshift({
          id: nextId,
          todo,
        });

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
      Header
    },
  };
</script>

<style scoped>
  .todo-container {
    align-items: center;
    display: grid;
    height: 100%;
    margin: 0 auto;
    max-width: var(--desktop-min);
    /* Multiply top and bottom by 6 to adjust for height of Header component */
    padding: calc(var(--base-spacer) * 6) calc(var(--base-spacer) * 2);
  }

  .todo-wrapper {
    background-color: var(--text-white);
    border-radius: var(--base-border-radius);
    box-shadow: 0px 0px 10px 3px var(--text-grey);
    height: 100%;
    max-width: var(--tablet-max);
    overflow: scroll;
    padding: calc(var(--base-spacer) * 2);
  }

  @media only screen and (min-width: 1024px) {
    .todo-wrapper {
      height: 600px;
    }
  }
</style>