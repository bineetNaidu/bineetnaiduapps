<template>
<div class="welcome__board">
  <h1>Hello 👋👋, I'm
  <a  class="link" href="https://bineetnaidu-io.web.app" target='_black' rel="noopener">
  Bineet
  </a>
  </h1>
</div>
  <ProjectLists />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectLists from './components/ProjectLists.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    ProjectLists,
    Footer,
  },
});
</script>

<style lang="scss" global>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

.welcome__board {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .link {
    background-image: linear-gradient(180deg,transparent 65%,rgba(56, 124, 56, 0.467) 0);
    color: currentColor;
    text-decoration: none;
    animation: all 0.5 ease-out alternate;

    &:hover{
      background-image: linear-gradient(180deg,transparent 0%,rgba(56, 124, 56, 0.467) 0);
    }
  }
}
</style>
