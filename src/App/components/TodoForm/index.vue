<template lang="jade">
  <form v-on:submit.prevent="onSubmit" name="TodoForm">
    <TextField v-model="todo" :placeholder="placeholderText"></TextField>

    <button type="submit">{{ submitButtonText }}</button>
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
        todo: this.initialTodo || '',
      };
    },
    props: {
      initialTodo: String,
      editing: Boolean,
    },
    methods: {
      onSubmit() {
        this.$emit('onSubmit', this.$data.todo);

        this.$data.todo = '';
      }
    } as Methods,
    computed: {
      submitButtonText() {
        if (this.$props.editing) {
          return 'Edit Todo';
        }

        return 'Add Todo';
      },
      placeholderText() {
        if (this.$props.editing) {
          return 'Edit this Todo';
        }

        return 'Add a Todo';
      }
    },
    components: {
      TextField,
    },
  });
</script>