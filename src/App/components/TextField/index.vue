<template lang="jade">
  <input type="text" v-bind:value="value"  v-on:input="$emit('input', $event.target.value)" :placeholder="placeholder" />
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