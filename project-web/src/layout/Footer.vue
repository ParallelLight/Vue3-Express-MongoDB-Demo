<script lang="ts" setup>
import { ref } from "vue";
import { useDark } from "@vueuse/core";
const isDark = ref(useDark());
</script>

<template>
  <el-row :style="{ 'background-color': (!isDark ? '#f8f4ed' : '#0f1423') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <!-- Footer -->
      <el-menu class="footer-wrap" mode="horizontal" :ellipsis="false"
        :background-color="!isDark ? '#f8f4ed' : '#0f1423'">
        <div>
          <a href="https://www.ucas.ac.cn/" target="_blank">
            <el-image class="footer-wrap-logo" src="https://www.ucas.ac.cn/newStyle/images/lougou.png">
              <div slot="placeholder">
                Loading<span class="dot">...</span>
              </div>
            </el-image>
          </a>
        </div>
        <div class="footer-wrap-flex-grow"></div>
        <div class="footer-wrap-text">
          <div>© 2023. Powered by <a href="https://www.parallellight.com/" target="_blank">Ze Zhang</a></div>
        </div>
      </el-menu>
      <!-- Mobile-Footer -->
      <div class="mobile-footer-wrap">
        <div>
          <a href="https://www.ucas.ac.cn/" target="_blank">
            <el-image class="footer-wrap-logo" src="https://www.ucas.ac.cn/newStyle/images/lougou.png">
              <div slot="placeholder">
                Loading<span class="dot">...</span>
              </div>
            </el-image>
          </a>
        </div>
        <div class="mobile-footer-wrap-text">
          <div>© 2023. Powered by <a href="https://www.parallellight.com/" target="_blank">Ze Zhang</a></div>
        </div>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style>
.footer-wrap {
  width: 100%;
  padding: 50px 0;
  border: none;
}

.footer-wrap-logo {
  height: 45px;
}

.footer-wrap-flex-grow {
  flex-grow: 1;
}

.footer-wrap-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.mobile-footer-wrap {
  padding: 50px 0;
  text-align: center;
}

.mobile-footer-wrap-text {
  margin: 25px 0 0 0;
}

/* 判断屏幕宽度小于680px后使用百分比 */
@media screen and (max-width: 680px) {
  .footer-wrap {
    display: none;
  }
}

@media screen and (min-width: 680px) {
  .mobile-footer-wrap {
    display: none;
  }
}
</style>
