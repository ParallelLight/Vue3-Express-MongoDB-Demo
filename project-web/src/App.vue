<script setup lang="ts">
import Header from "./layout/Header.vue";
import { RouterView } from "vue-router";
import Footer from "./layout/Footer.vue";
import Backtop from "./components/Backtop.vue";
</script>

<template>
  <div class="container">
    <!-- Header -->
    <el-affix style="width: 100%">
      <Header></Header>
    </el-affix>
    <!-- Main & Footer -->
    <div class="body-container">
      <div class="main-container">
        <RouterView />
      </div>
      <div class="footer-container">
        <Footer></Footer>
      </div>
    </div>
    <!-- Backtop -->
    <Backtop></Backtop>
  </div>
</template>

<style scoped>
.body-container {
  width: 100%;
  min-height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
}

.footer-container {
  flex: 0;
}
</style>