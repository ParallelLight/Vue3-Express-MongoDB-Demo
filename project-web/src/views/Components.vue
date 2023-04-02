<script setup lang="ts">
import CentralTimeline from "../components/CentralTimeline.vue";
import ContrastView from "../components/BeforeAfterComparisonSlider.vue";
import VisNetwork from "../components/VisNetwork.vue";
import { ref, onMounted } from "vue";
const screenWidth = ref();
onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth;
  }
})
</script>

<template>
  <!-- 导语 -->
  <div class="wrapper-background"></div>
  <div class="wrapper-sketch">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-row>
          <el-col class="wrapper-sketch-text" :span="screenWidth > 1200 ? 14 : 24">
            <div class="wrapper-sketch-text-title">some demos</div>
            <div class="wrapper-sketch-text-subtitle">Components Demos</div>
            <h1 class="wrapper-sketch-text-content">Ze Zhang's Components Collection</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 内容 -->
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-card class="components-card">
        <h1>Contrast View</h1>
        <ContrastView></ContrastView>
      </el-card>
      <el-card class="components-card">
        <h1>Central Timeline</h1>
        <CentralTimeline></CentralTimeline>
      </el-card>
      <el-card class="components-card">
        <h1>Vis-network</h1>
        <VisNetwork></VisNetwork>
      </el-card>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
.components-card {
  margin-bottom: 50px;
}
</style>
