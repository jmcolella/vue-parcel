<template lang="jade">
  <form class="form" v-on:submit.prevent="onSubmit" name="TodoForm">
    <TextField v-model="todo" :placeholder="placeholderText"></TextField>

    <button :class="buttonClass" type="submit">{{ submitButtonText }}</button>
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
          return 'edit';
        }

        return 'add';
      },
      placeholderText() {
        if (this.$props.editing) {
          return 'edit this one';
        }

        return 'anotha one';
      }
      buttonClass() {
        if (this.$props.editing) {
          return 'button button-editing';
        }

        return 'button';
      }
    },
    components: {
      TextField,
    },
  });
</script>

<style scoped>
  .form {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }

  .button {
    border: 1px solid var(--brand-color);
    border-radius: var(--base-border-radius);
    background-color: var(--text-white);
    color: var(--brand-color);
    display: none;
    padding: calc(var(--base-spacer)) calc(var(--base-spacer) * 1.5);
    transition: all 0.5s ease-in;
  }

  .button:hover {
    background-color: var(--brand-color);
    color: var(--text-white);
    cursor: pointer;
  }

  .button-editing {
    border: 1px solid var(--brand-accent);
    color: var(--brand-accent);
  }

  .button-editing:hover {
    background-color: var(--brand-accent);
  }

  /* Tablet and up */
  @media only screen and (min-width: 768px) {
    .form {
      grid-template-columns: 2fr .5fr;
      grid-column-gap: var(--base-spacer);
    }

    .button {
      display: block;
    }
  }
</style>