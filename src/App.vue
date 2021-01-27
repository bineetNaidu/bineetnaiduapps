<template>
<div class="welcome__board">
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Hello 👋👋</h1>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  },
});
</script>

<style lang="scss">
.welcome__board {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
