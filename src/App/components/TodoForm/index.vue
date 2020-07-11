<template lang="jade">
  <form v-on:submit.prevent="onSubmit" name="TodoForm">
    <TextField v-model="todo" placeholder="Add a Todo"></TextField>

    <button type="submit">Add Todo</button>
  </form>
</template>

<script lang="ts">
  import Vue from 'vue'
  import TextField from '../TextField/index.vue';

  interface Data {
    todo: string,
  }

  interface Methods {
    getValue: (value: string) => void,
    onSubmit: () => void,
  }

  export default Vue.extend({
    name: 'TodoForm',
    data(): Data {
      return {
        todo: '',
      };
    },
    methods: {
      onSubmit() {
        this.$emit('addTodo', this.$data.todo);

        this.$data.todo = '';
      }
    } as Methods,
    components: {
      TextField,
    },
  });
</script>