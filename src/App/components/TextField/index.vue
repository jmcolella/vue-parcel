<template lang="jade">
  <input class="input" type="text" v-bind:value="value"  v-on:input="$emit('input', $event.target.value)" :placeholder="placeholder" />
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'TextField',
    props: {
      placeholder: String,
      value: String
    },
  });
</script>

<style scoped>
  .input {
    border: 1px solid var(--brand-color);
    border-radius: var(--base-border-radius);
    color: var(--text-grey);
    padding: calc(var(--base-spacer)) calc(var(--base-spacer) * 1.5);
  }

  .input:focus {
    outline: none;
  }

  input::placeholder {
    color: var(--text-grey);
  }
</style>