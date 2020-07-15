<template lang="jade">
  <div class="container">
    <h1 v-if="noTodos">Add some Todos!</h1>

    <div class="item-wrapper" v-else v-for="t in todos">
      <TodoForm v-if="editTodoId === t.id" :initialTodo="t.todo" :editing=true @onSubmit="handleEditTodo"></TodoForm>
      <TodoItem v-else :todo="t" :handleSelectEditTodo="handleSelectEditTodo" :handleRemoveTodo="handleRemoveTodo"></TodoItem>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import TodoForm from '../TodoForm/index.vue';
  import TodoItem from '../TodoItem/index.vue';

  interface Data {
    editTodoId: number | null,
  }

  interface Methods {
    handleEditTodo: (todo: string) => void,
    handleRemoveTodo: (id: number) => void,
    handleSelectEditTodo: (id: number) => void,
  }

  export default Vue.extend({
    name: 'TodoList',
    data(): Data {
      return {
        editTodoId: null,
      }
    },
    props: {
      todos: Array as () => Todo[],
    },
    methods: {
      handleEditTodo(todo: string) {
        this.$emit('editTodo', {
          id: this.$data.editTodoId,
          todo
        });

        this.$data.editTodoId = null;
      },
      handleRemoveTodo(id: number) {
        this.$emit('removeTodo', id);
      },
      handleSelectEditTodo(id: number) {
        this.$data.editTodoId = id;
      },
    } as Methods,
    computed: {
      noTodos() {
        return this.$props.todos.length === 0;
      }
    },
    components: {
      TodoForm,
      TodoItem
    },
  })
</script>

<style scoped>
  .container {
    margin-top: calc(var(--base-spacer) * 2);
  }

  .item-wrapper {
    display: grid;
    margin-bottom: var(--base-spacer);
    min-height: calc(var(--base-spacer) * 3.5);
  }

  .item-wrapper:last-of-type {
    margin-bottom: 0;
  }
</style>


