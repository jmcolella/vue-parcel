<template lang="jade">
  <header class="header-container">
    <div class="header-wrapper">
      <a class="header-title" v-bind:href="href" target="_blank">{{ title }}</a>
    </div>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue'

  interface Data {
    href: string;
    title: string;
  }

  export default Vue.extend({
    name: 'Header',
    data(): Data {
      return {
        href: 'https://github.com/jmcolella/vue-parcel',
        title: 'anotha one'
      }
    },
  });
</script>

<style scoped>
  .header-container {
    background-color: var(--brand-color);
    height: calc(var(--base-spacer) * 2);
    position: fixed;
    width: 100%;
    z-index: 1;
  }

  .header-wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc(var(--base-spacer) * 2);
    width: 100%;
  }

  .header-title {
    color: var(--text-white);
    font-weight: normal;
    font-size: calc(var(--base-spacer) * 0.75);
    text-decoration: none;
    transition: all 0.5s ease;
  }

  .header-title:hover {
    color: var(--brand-accent);
  }
</style>