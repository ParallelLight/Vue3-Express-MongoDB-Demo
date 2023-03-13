<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式

const isDark = ref(useDark());
const contact = reactive({
  map: "/api/Map.html"
})

const screenWidth = ref();
onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth;
  }
})
</script>

<template>
  <div class="wrapper-background"></div>
  <div class="wrapper-sketch">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-row>
          <el-col class="wrapper-sketch-text" :span="screenWidth > 1200 ? 14 : 24">
            <div class="wrapper-sketch-text-title">Statistics</div>
            <div class="wrapper-sketch-text-subtitle">The Page of Statistics</div>
            <h1 class="wrapper-sketch-text-content">You can find the results of statistics.</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 内容 -->
  <!-- 首页内容 -->
  <el-row :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="contact-recruiting">
        <el-row>
          <!-- 8→24 -->
          <el-col :span="screenWidth > 1200 ? 8 : 24">
            <h1>Contact me</h1>
            <p class="web-text">Ze Zhang</p>
            <p class="web-text">Hangzhou Institute for Advanced Study (HIAS)</p>
            <p class="web-text">University of Chinese Academy of Sciences (UCAS)</p>
            <p class="web-text">No.1 Xiangshan Branch, Hangzhou 310004, Zhejiang Province, China</p>
            <p class="web-text">E-mail : zhangze21@mails.ucas.ac.cn</p>
          </el-col>
          <!-- 14→24，2→0 -->
          <el-col :span="screenWidth > 1200 ? 14 : 24" :offset="screenWidth > 1200 ? 2 : 0" v-if="contact.map">
            <iframe :style="screenWidth > 1200 ? 'width: 100%; height: 100%;' : 'width: 100%; height: 400px; margin-top: 30px;'" :src="contact.map"
              frameborder="0"></iframe>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>
<style scoped>
.contact-recruiting {
  padding: 50px 0 80px 0;
}
</style>