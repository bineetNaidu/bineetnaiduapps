<template>
<div class="welcome__board">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <h1>Hello 👋👋</h1>
  <ProjectLists projects="projects" />
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ProjectType } from '@/types';
import axios from '@/axios';
import ProjectLists from './components/ProjectLists.vue';

const projects = ref<ProjectType[]>([]);

export default defineComponent({
  name: 'App',
  components: {
    ProjectLists,
  },

  mounted() {
    (async () => {
      const { data } = await axios.get('/');
      if (data.success && !data.errors) {
        projects.value = data.data;
      }
    })();
  },

  setup() {
    return {
      projects,
    };
  },
});
</script>

<style lang="scss" global>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

#app{
  height: 100vh;
  width: 100vw;
}

.welcome__board {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
