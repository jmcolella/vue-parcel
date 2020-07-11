<template lang="jade">
  <div>
    <div v-if="noTodos">Add some Todos!</div>

    <div v-else v-for="todo in todos">
      <p>{{ todo }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'TodoList',
    props: {
      todos: Array,
    },
    computed: {
      noTodos() {
        return this.$props.todos.length === 0;
      }
    }
  })
</script>