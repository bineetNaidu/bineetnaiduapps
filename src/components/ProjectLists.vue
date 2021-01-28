<template>
  <div>
    <h1>Projects</h1>
    <ul :if="projects">
      <li v-for="project in projects" :key="project._id">
        {{project.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ProjectType } from '@/types';
import axios from '@/axios';

export default defineComponent({
  name: 'App',
  components: {
  },

  setup() {
    const projects = ref<ProjectType[]>([]);

    (async () => {
      const { data } = await axios.get('/');
      if (data.success && !data.errors) {
        projects.value = data.data;
      }
    })();
    return {
      projects,
    };
  },
});
</script>

<style lang="sass" scoped>

</style>
