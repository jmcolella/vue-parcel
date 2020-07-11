<template lang="jade">
  <div>
    <p class="greeting">Hello {{ friend }}</p>

    <div v-for="thing in stuff">
      <p class="thing">{{ thing }}</p>
    </div>
  </div>
</template>


<script lang="ts">
  export default {
    props: {
      friend: String,
      stuff: Array
    },
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .greeting {
    color: blue;
  }

  .thing {
    color: red;
  }
</style>