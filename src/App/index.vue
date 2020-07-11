<template lang="jade">
  <Greeting friend="John" v-bind:stuff=stuff />
</template>

<script>
  import Greeting from './components/greeting';

  export default {
    data: () => ({
      stuff: ['hi', 'my', 'friend']
    }),
    components: {
      Greeting,
    }
  };
</script>