<template>
  <footer class="footer">
   <p>
     Made with <img alt="Vue logo" src="../assets/logo.png"> & 💚
   </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped lang="scss">

.footer {
 font-family: 'Courier New', Courier, monospace;
 display: flex;
 margin-top: auto;
 font-style: oblique;
 margin-bottom: 1rem;
 justify-content: center;
 align-items: center;
 font-size: 12px;

 ::before {
  content: "{";
  color: green;
 }

 ::after {
  content: "}";
  color: green;
 }

 img {
  height: 15px;
 }
}

</style>
